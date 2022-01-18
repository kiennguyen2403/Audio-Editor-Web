from scipy.io import wavfile
import soundfile
import numpy as np
import noisereduce as nr 
import speech_recognition as sr

def Noisereduction(file):
    data,rate=soundfile.read(file)
    reduced_noise=nr.reduce_noise(y=data,sr=rate)
    wavfile.write("resultfile/output.wav", rate, reduced_noise)

def Textconvert(file):
    r = sr.Recognizer()
    with sr.AudioFile(file) as source:
        # listen for the data (load audio to memory)
        audio_data = r.record(source)
        # recognize (convert from speech to text)
        text = r.recognize_google(audio_data)
        return text