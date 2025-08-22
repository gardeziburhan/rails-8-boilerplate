FactoryBot.define do
  factory :user do
    sequence(:email) { |n| "user#{n}@example.com" }
    password { "supersecretpassword" }
    verified { true }
  end
end