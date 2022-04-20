import json
import random
from generator.models import Category
from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt


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

@csrf_exempt
def category_list(request):
    if request.method == 'GET':
        categoreis = Category.objects.all()
        categoreis_json = [category.to_json() for category in categoreis]
        return JsonResponse(categoreis_json, safe=False)
    elif request.method == 'POST':
        # json string to dict
        data = json.loads(request.body)
        try:
            category = Category.objects.create(name=data['name'])
        except Exception as e:
            return JsonResponse({'message': str(e)})
        return JsonResponse(category.to_json())
    elif request.method == 'PUT':
        # json string to dict
        data = json.loads(request.body)
        try:
            category = Category.objects.create(name=data['name'])
        except Exception as e:
            return JsonResponse({'message': str(e)})
        return JsonResponse(category.to_json())


@csrf_exempt
def category_detal(request, cat_id):
    try:
        category = Category.objects.get(id=cat_id)
    except Category.DoesNotExist as e:
        return JsonResponse({'message': str(e)}, status=400)

    if request.method == 'GET':
        return JsonResponse(category.to_json(), safe=False)
    elif request.method == 'PUT':
        data = json.loads(request.body)
        category.name = data['name']
        category.save()
        return JsonResponse(category.to_json(), safe=False)
    elif request.method == 'DELETE':
        category.delete()
        return JsonResponse({'message': 'deleted'}, status=204)