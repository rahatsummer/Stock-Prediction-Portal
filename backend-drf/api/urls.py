
from django.urls import path
from accounts.views import RegisterView
#from accounts import views as UserView

urlpatterns = [
    path('register/', RegisterView.as_view()),
    
]
