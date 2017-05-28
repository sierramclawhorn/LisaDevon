Rails.application.routes.draw do

	resources :pages
  		get '/about' => 'pages#about'
  		get '/connect' => 'pages#connect'
  		get '/post' => 'pages#post'	
  		get '/film' => 'pages#film'
  		get '/music' => 'pages#music'
  		get '/resume' => 'pages#resume'
  		get 'pages/download_pdf'


	root 'pages#about'

end
