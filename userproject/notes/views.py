from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from .models import Note
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from .serializers import NoteSerializer


# Create your views here.
@login_required
def notes_list(request):
    notes = Note.objects.filter(user=request.user)
    return render(request, 'notes/notes_list.html', {'notes': notes})

@login_required
def note_create(request):
    if request.method == 'POST':
        title = request.POST.get('title')
        content = request.POST.get('content')
        Note.objects.create(user=request.user, title=title, content=content)
        return redirect('/notes')
    return render(request, 'notes/note_form.html')

@login_required
def note_edit(request, id):
    note = Note.objects.get(id=id)
    if request.method == 'POST':
        note.title = request.POST.get('title')
        note.content = request.POST.get('content')
        note.save()
        return redirect('/notes')
    return render(request, 'notes/note_form.html', {'note': note})

@login_required
def note_delete(request, id):
    note = Note.objects.get(id=id)
    note.delete()
    return redirect('/notes')


@api_view(['GET'])
def notes_api(request):
    notes = Note.objects.all() 
    serializer = NoteSerializer(notes, many=True)
    return Response(serializer.data)
