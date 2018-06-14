Rails.application.routes.draw do
  scope "(:locale)" do
    root 'pages#home'
    get '/home' => 'pages#home'
    post '/contact' => 'contacts#create'

    resources :pages do
      post :contact, on: :collection
    end

    resources :posts

  end

end
