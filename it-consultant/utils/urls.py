from django.urls import path
from . import views
urlpatterns = [
	path('send-clients-mail', views.send_client_mail, name='mail-client'),
]