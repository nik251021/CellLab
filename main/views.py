from django.shortcuts import render

def index(request):
    return render(request, 'main/index.html')

def guide(request):
    return render(request, 'main/guide.html')