import {React,useState,useEffect} from 'react';
import axios from 'axios';
export default function ProfilePage (props) {{
    const [data,setData]=useState(undefined);
    const getData = () =>{
        axios.get('')
        .then((response) =>{})
        .catch((error) =>{console.log(error)});
    }
    useEffect(()=>{
        getData();
    },[]);
    return (
      <div>
        <p>{data.data.name}</p>
        <p>{data.data.id}</p>
      </div>
    )
}}