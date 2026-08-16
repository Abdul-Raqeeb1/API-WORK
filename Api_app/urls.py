from django.urls import path
from Api_app import views


urlpatterns = [
    path('',views.home,name='home')
]
