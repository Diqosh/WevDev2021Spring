import random

from django.shortcuts import render
from django.http import HttpResponse



def home(request):
    return render(request, 'generator/home.html')

def password(request):
    password = ''
    length = int(request.GET.get('length', 12))

    chars = list('abcdefghijklmnopqrstuvwxyz')

    if(request.GET.get('uppercase')):
        chars.extend(list("ABCDEFGHIJKLMNOPQRSTUVWXYZ"))
    if (request.GET.get('number')):
        chars.extend(list("1234567890"))
    if (request.GET.get('special')):
        chars.extend(list("!@#$%^&*()"))
    print(request.GET.get('uppercase'))



    for i in range(length):
        password += random.choice(chars)
    return render(request, 'generator/password.html', {'password': password})


def about(request):
    return render(request, 'generator/about.html')