from django.db import IntegrityError
from django.shortcuts import render, redirect
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.contrib.auth.models import User
from django.contrib.auth import login, logout, authenticate
from .forms import TodoForm
from .models import Todo


def home(request):
    return render(request, 'todo/home.html')

def signupuser(request):
    if request.method == 'GET':
        return render(request, 'todo/signupuser.html', {'form': UserCreationForm})
    else:
        if request.POST['password1'] == request.POST['password2']:
            try:
                user = User.objects.create_user(request.POST['username'], 'example@gmail.com',  request.POST['password1'])
                user.save()
                login(request, user)
                return redirect('currenttodos')
            except IntegrityError:
                return render(request, 'todo/signupuser.html',
                              {'form': UserCreationForm, 'error': 'nickname already exists'})

        else:
            return render(request, 'todo/signupuser.html', {'form': UserCreationForm, 'error': 'password did not match'})


def currenttodos(request):
    todos = Todo.objects.filter(user=request.user, completion_date__isnull=True)
    return render(request, 'todo/current.html', {'todos': todos})


def logoutuser(request):
    if request.method == 'POST':
        logout(request)
        return redirect('home')


def loginuser(request):
    if request.method == 'GET':
        return render(request, 'todo/login.html', {'form': AuthenticationForm})
    else:
        user = authenticate(request, username=request.POST['username'], password=request.POST['password'])
        if user is None:
            return render(request, 'todo/login.html', {'form': AuthenticationForm, 'error': 'username and password did not match'})
        else:
            login(request, user)
            return redirect('currenttodos')


def createtodo(request):
    if request.method == 'GET':
        return render(request, 'todo/createtodo.html', {'form': TodoForm()})
    else:
        # if request.user == None:
        #     return render(request, 'todo/createtodo.html', {'form': TodoForm(), 'error': 'please login or register'})
        # # try:
            form = TodoForm(request.POST)
            newtodo = form.save(commit=False)
            newtodo.user = request.user
            newtodo.save()
            return redirect('currenttodos')
        # except ValueError:
        #     return render(request, 'todo/createtodo.html', {'form': TodoForm(), 'error': 'bad data passed in'})