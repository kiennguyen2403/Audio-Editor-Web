import axios from 'axios';



/*
console.log(window.location.href);
var location='';
// eslint-disable-next-line
if (String(window.location.href) == "http://localhost:3000/noisereduction")
{

location='noisereduction';

}
// eslint-disable-next-line
else if(String(window.location.href) == "http://localhost:3000/convert")
{
location='convert';

}
// eslint-disable-next-line
else if (String(window.location.href) == "http://localhost:3000/cut")
{
  location='cut';
}
// eslint-disable-next-line
else if (String(window.location.href) == "http://localhost:3000/merge")
{
  location='merge';
}

// eslint-disable-next-line
else if (String(window.location.href) == "http://localhost:3000/bassboost")
{
  location='bassboost';
}
// eslint-disable-next-line
else if (String(window.location.href) == "http://localhost:3000/volumesetting")
{
  location='merge';
}
*/




export default axios.create
(
  
  {

    baseURL: 'http://127.0.0.1:8000/noisereduction',
    headers: 
    {
      "Content-type": "application/json"
    }

}
);
