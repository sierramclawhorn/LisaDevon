Rails.application.routes.draw do

	resources :pages
  		get '/about' => 'pages#about'
  		get '/connect' => 'pages#connect'
  		get '/post' => 'pages#post'	
  		get '/music' => 'pages#music'
  		get '/resume' => 'pages#resume'


	root 'pages#index'

end
