Rails.application.routes.draw do
  resources :categories
  resources :projects
  scope "/(:locale)" do
    root 'pages#homepage'
    get '/home' => 'pages#home'
    get '/homepage' => 'pages#homepage'
    post '/contact' => 'contacts#create'

    resources :pages do
      post :contact, on: :collection
    end

    resources :posts
    resources :projects

  end

end
