from django.shortcuts import redirect, render, HttpResponse
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout

def home(request):
    return render(request, "tradingsite/index.html")


def login_page(request):
    return render(request, "tradingsite/login.html")


def payment_page(request):
    return render(request, "tradingsite/payment.html")


def handle_signup(request):
    if request.method == "POST":
        name = request.POST.get('name')
        email = request.POST.get('email')
        password = request.POST.get('password')
        c_password = request.POST.get('cPassword')
        print(name, email, password, c_password)
        if password == c_password:
            user = User.objects.create_user(email, email, password)
            user.name = name
            user.save()
            return redirect('/login')
    else:
        return HttpResponse('404 not found')


def handle_login(request):
    if request.method == "POST":
        email = request.POST.get('email')
        password = request.POST.get('password')
        user = authenticate(request, username = email, password = password)
        if user is not None:
            login(request, user)
            return redirect('/')
        else:
            return HttpResponse('User is not exist')
    else:
        return HttpResponse('404 not found')

def signup_page(request):
    return render(request, "tradingsite/signup.html")


def handle_logout(request):
    logout(request)
    return redirect('/')


# def logout(request):
#     return render(request, "tradingsite/index.html")