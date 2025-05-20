from django.http import HttpResponse
from django.shortcuts import render

def home(request):
    return render(request, 'website/registration.html')

def about(request):
    return render(request, 'website/login.html')

def contact(request):
    return render(request, 'website/resume.html')