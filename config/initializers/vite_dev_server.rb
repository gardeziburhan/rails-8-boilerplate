# frozen_string_literal: true

return unless Rails.env.development?

require "net/http"
require "timeout"

module ViteDevServer
  HOST = ENV.fetch("VITE_DEV_SERVER_HOST", "localhost")
  PORT = Integer(ENV.fetch("VITE_DEV_SERVER_PORT", 5173))
  AUTO_START = ENV.fetch("VITE_DEV_SERVER_AUTO_START", "true") == "true"
  WAIT_SECONDS = 10

  module_function

  def ensure_running
    return unless AUTO_START
    return if dev_server_running?

    Rails.logger.info("Starting Vite dev server on #{HOST}:#{PORT} via `npm run dev -- --host`...")
    pid = Process.spawn("npm", "run", "dev", "--", "--host", "--clearScreen=false", chdir: Rails.root)
    at_exit { terminate_process(pid) }

    wait_for_server
  end

  def wait_for_server
    Timeout.timeout(WAIT_SECONDS) do
      loop do
        break if dev_server_running?

        sleep 0.25
      end
    end
  rescue Timeout::Error
    Rails.logger.warn("Vite dev server did not start within #{WAIT_SECONDS} seconds; the SPA may not render.")
  end

  def dev_server_running?
    Net::HTTP.start(HOST, PORT) { true }
  rescue StandardError
    false
  end

  def terminate_process(pid)
    Process.kill("TERM", pid)
  rescue Errno::ESRCH
    # already exited
  end
end

if defined?(Rails::Server)
  module ViteDevServerRunner
    def start
      ViteDevServer.ensure_running
      super
    end
  end

  Rails::Server.prepend ViteDevServerRunner
end
