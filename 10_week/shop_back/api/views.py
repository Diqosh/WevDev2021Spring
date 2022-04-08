from django.shortcuts import render
from django.http.response import JsonResponse
from .models import Product, Category
from django.core import serializers


def hi(request):
    return render(request, 'api/hi.html')

def hi1(request, num):
    return render(request, 'api/hi.html', {'num': num})


def products_list(request):
    products = Product.objects.all()
    products_json = [product.to_json() for product in products]
    return JsonResponse(products_json, safe=False)


def product_detail(request, product_id=None):
    try:
        product = Product.objects.get(id=product_id)

    except Product.DoesNotExist as e:
        return JsonResponse({'message': str(e)}, safe=False, status=400)
    return JsonResponse(product.to_json())


def categories_list(request):
    categories = Category.objects.all()
    categories_json = [category.to_json() for category in categories]
    return JsonResponse(categories_json, safe=False)


def category_detail(request, cat_id):
    try:
        category = Category.objects.get(id=cat_id)

    except Category.DoesNotExist as e:
        return JsonResponse({'message': str(e)}, safe=False, status=400)
    return JsonResponse(category.to_json())


def products(request, cat_id):
    product = Product.objects.filter(cat_id=cat_id)
    product_json = [product.to_json() for product in product]
    return JsonResponse(product_json, safe=False)