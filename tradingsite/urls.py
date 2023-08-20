from . import views
from django.urls import path

urlpatterns = [
    path("", views.home, name= "Home"),
    path("payment/", views.payment_page, name= "PaymentPage"),
    path("signup/", views.signup_page, name= "Signup"),
    path("login/", views.login_page, name= "Login"),
    path("handlesignup/", views.handle_signup, name= "HandleSignup"),
    path("handlelogin/", views.handle_login, name= "HandleLogin"),
    path("/", views.handle_logout, name= "HandleLogout"),
]
