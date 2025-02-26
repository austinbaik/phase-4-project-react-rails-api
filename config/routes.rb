Rails.application.routes.draw do
  resources :bathrooms, only: [:create, :index, :update]
  resources :users do 
    resources :reviews
  end

  get "/highlyreviewedbathrooms/:number", to: "bathrooms#show_many_reviews"

  resources :users do
    resources :bathrooms
  end
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!

  

  post "/signup", to: "users#create"

  get "/me", to: "users#show"

  post "/login", to: "sessions#create"

  delete "/logout", to: "sessions#destroy"

  # post "/submit", to: "bathrooms#create"

  # get "/bathrooms", to: "bathrooms#index"

  post "/reviews", to: "reviews#create"

  
 get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  # patch  "/users/:user_id/reviews/:id", to:  "reviews#update"

  # delete "/users/:user_id/reviews/:id", to: "review#destroy"

end

