Rails.application.routes.draw do
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  devise_for :users

  post 'auth_user' => 'authentication#authenticate_user'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  scope :api, defaults: {format: :json} do
    scope :hr do
      get 'dashboard' => 'hr#dashboard'
    end

    scope :employee do
      get 'dashboard' => 'employee#dashboard'
    end
    # resources :user_assets
    # resources :users
    # resources :company_assets
    get 'info' => 'home#info'
  end
  get "/404" => "error#not_found"
  get "/500" => "error#exception"
end
