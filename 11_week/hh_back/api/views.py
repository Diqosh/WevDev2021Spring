from django.shortcuts import render
from django.http.response import JsonResponse
from .models import Company, Vacancy


def hello(request):
    return render(request, 'api/1.html')


def companyList(request):
    companies = Company.objects.all()
    companies_json = [company.to_json() for company in companies]

    return JsonResponse(companies_json, safe=False)


def company(request, id):
    company = Company.objects.get(pk=id)
    return JsonResponse(company.to_json(), safe=False)



def vacancyList(request):
    vacancies = Vacancy.objects.all()
    vacancies_json = [vacancy.to_json() for vacancy in vacancies]
    return JsonResponse(vacancies_json, safe=False)


def vacancy(request, id):
    vacancy = Vacancy.objects.get(pk=id)
    return JsonResponse(vacancy.to_json(), safe=False)


def companyVac(request, id):
    vacancies = Vacancy.objects.filter(company_id=id)
    vacancies_json = [vacancy.to_json() for vacancy in vacancies]
    return JsonResponse(vacancies_json, safe=False)


def vacancyTopTen(request):
    vacancies = Vacancy.objects.all().order_by('-salary')[:10]
    vacancies_json = [vacancy.to_json() for vacancy in vacancies]
    return JsonResponse(vacancies_json, safe=False)