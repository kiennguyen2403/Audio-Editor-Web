import axios from "axios";

let service;
// eslint-disable-next-line
switch (window.location.href) {
  case "http://localhost:3000/noisereduction":
    service = "api/audio/denoise";
    break;
  case "http://localhost:3000/volumeadjust":
    service = "api/audio/volume";
    break;
  case "http://localhost:3000/normalize":
    service = "api/audio/normalize";
    break;
  case "http://localhost:3000/speechtotext":
    service = "api/audio/transcribe";
    break;
  case "http://localhost:3000/silence":
    service = "api/audio/silence";
    break;
  case "http://localhost:3000/login":
    service = "api/audio/login";
    break;
  default:
    break;
}

export default axios.create({
  baseURL: `http://100.90.250.177:3001/${service}`,
  headers: {
    "Content-type": "application/json",
  },
});
