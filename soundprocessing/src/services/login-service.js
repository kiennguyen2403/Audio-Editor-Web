import http from "../http-common";

class LoginService {
  upload(username, password, onUploadProgress) {
    const formData = new FormData();

    formData.append("username", username);
    formData.append("password", password);

    return http.post("/upload/", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      onUploadProgress,
    });
  }

  getFiles() {
    return http.get("/upload/");
  }
}
export default new LoginService();
