class PagesController < ApplicationController

	def index
    # @projects = Page.all
  end

 #  def show
 #    find_project
 #  end

  # def new
  #   @project = Page.new 
  # end

  # def edit
  #   find_project
    
  # end

  # def create
  #   @project = Page.new(project_params)
  #   if @project.save
  #     redirect_to page_path(@project)
  #   else 
  #     render 'new'
  #   end
  # end

  # def update
  #   find_project
  #   if @project.save
  #     redirect_to page_path(@project)
  #   else
  #     render 'edit'
  #   end
  # end

  # def destroy
  #   find_project
  #   @project.destroy
  # end 

  # private
  #   def find_project
  #     @project = Page.find(params[:id])
  #   end

  #   def project_params
  #     params.require(:location).permit(:name)
  #   end

end
