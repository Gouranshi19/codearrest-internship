from django.shortcuts import render, HttpResponse, redirect
from datetime import datetime
from home.models import Contact
from django.contrib import messages

# Create your views here.
def index(request):
    context = {
        'variable' :"this is sent"

    }
    messages.success(request, "this is a test message")
    return render(request, 'index.html', context)
    #return HttpResponse("this is homepage")

def about(request):
    return render(request, 'about.html')

def services(request):
    return render(request, 'services.html')


def contact(request):
    if request.method == "POST":
        name = request.POST.get('name')
        email = request.POST.get('email')
        phone = request.POST.get('phone')
        desc = request.POST.get('desc')
        
        new_contact = Contact(name=name, email=email, phone=phone, desc=desc, date=datetime.today())
        new_contact.save()

    all_contacts = Contact.objects.all()

    messages.success(request, "Your message has been sent")
    return render(request, 'contact.html', {'contacts': all_contacts})

def update_contact(request, id):
    contact = Contact.objects.get(id=id)
    
    if request.method == "POST":
        contact.name = request.POST.get('name')
        contact.email = request.POST.get('email')
        contact.phone = request.POST.get('phone')
        contact.desc = request.POST.get('desc')
        contact.save()
        return redirect('/contact')
    
    return render(request, 'update.html', {'contact': contact})

def delete_contact(request, id):
    contact = Contact.objects.get(id=id)
    contact.delete()
    return redirect('/contact')
