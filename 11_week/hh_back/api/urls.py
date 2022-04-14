

from django.urls import path
from . import views
urlpatterns = [

    path('',  views.hello),

    path('companies', views.companyList),
    path('companies/<int:id>/', views.company),
    path('companies/<int:id>/vacancies', views.companyVac),
    path('vacancies', views.vacancyList),
    path('vacancies/<int:id>/', views.vacancy),
    path('vacancies/top_ten/', views.vacancyTopTen),
]
