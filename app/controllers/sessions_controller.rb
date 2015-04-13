class SessionsController < ApplicationController
    
    def new
    
    end
    
    def create
    user = User.find_by_email(params[:email])
        if user && user.authenticate(params[:password])
            log_in user
            redirect_to('/about')
        else
            redirect_to('/login')
        end
    end
    
    def destroy
        log_out if logged_in?
        redirect_to('/login')
    end
    
end
