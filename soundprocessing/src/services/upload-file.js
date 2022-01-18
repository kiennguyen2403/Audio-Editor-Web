
import http from "../http-common";



class UploadFilesService {
  upload(file, onUploadProgress) {
    console.log(file);
    let formData = new FormData();

    formData.append('file', file);
    formData.append('csrfmiddlewaretoken', '{{ csrf_token }}');
   
    return http.post('/upload/', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      onUploadProgress,
    });
  }

  getFiles() {
    return http.get('/upload/');
  }
}
export default new UploadFilesService();