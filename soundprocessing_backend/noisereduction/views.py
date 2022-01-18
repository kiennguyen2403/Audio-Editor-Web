
from django.http import JsonResponse, HttpResponse,HttpResponseRedirect
from django.shortcuts import render
from .forms import UploadFileForm
from django.views.decorators.csrf import csrf_exempt
from .noisereduction import Noisereduction,Textconvert
import mimetypes



@csrf_exempt
def upload_file(request):
    if (request.method == 'POST'):
        form = UploadFileForm(request.POST, request.FILES)
        if form.is_valid():
            file=request.FILES['file']
            Noisereduction(file)
            return render(request, "hello.html")
    if (request.method == 'GET'):
            filepath="C:/Users/BRAVO/Downloads/machine-learning_speech-recognition_16-122828-0002.wav"
            text=Textconvert(filepath)
            print(text)
            data = [{'name': 'output.wav', 'url': 'http://127.0.0.1:8000/noisereduction/resultfile/','text': text}]
            return JsonResponse(data, safe=False)

def download_file(request):
    # fill these variables with real values
    fl_path = 'resultfile/output.wav'
    filename = 'output.wav'
    fl = open(fl_path, 'rb')
    mime_type, _ = mimetypes.guess_type(fl_path)
    response = HttpResponse(fl, content_type=mime_type)
    response['Content-Disposition'] = "attachment; filename=%s" % filename
    return response