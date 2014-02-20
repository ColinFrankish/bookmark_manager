get '/' do
  @links = Link.all
  erb :index, :layout => !request.xhr?
  
end