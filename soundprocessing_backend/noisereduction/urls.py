
from django.http import HttpResponseRedirect,HttpResponse
from django.urls import path
from . import views

urlpatterns = [
  path("upload/",views.upload_file),
  path("resultfile/",views.download_file)
    
]
