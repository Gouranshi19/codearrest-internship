from django.contrib import admin
from django.urls import path
from home import views

urlpatterns = [
    path("", views.index, name='home'),
    path("about", views.about, name='about'),
    path("services", views.services, name='services'),
    path("contact", views.contact, name='contact'),
    path("update/<int:id>", views.update_contact, name='update_contact'),
    path("delete/<int:id>", views.delete_contact, name='delete_contact'),
]