from django.contrib import admin
from django.urls import path, include, re_path
from .views import hi, product_detail, products_list, categories_list, category_detail
urlpatterns = [


    # api
    path('', hi),
    path('products/', products_list),
    path('products/<int:product_id>/', product_detail),
    path('categories/', categories_list),
    path('categories/<int:cat_id>/', category_detail)
]
