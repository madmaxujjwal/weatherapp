import React from 'react';
import {useState} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Weather.css';
import Card from 'react-bootstrap/Card';





const Weather=()=>{
  const key='f56f24967aaf51182d1d4df628297c6d';
const [input,setInput]=useState('');
const [data,setdata]=useState({});
const handlechange=(e)=>{
     setInput(e.target.value);

}
const getData=(city)=>{
  if (!city) return
const url='https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+key;
axios.get(url).then((res) => {
    console.log("response", res.data)
    setdata(res.data)
    console.log(data)
  }).catch((err) => {
    console.log('jgjjh')
    console.log("err", err)
  })

}
const handleSearch=()=>{
    console.log('ok');
getData(input);

}

  return (
    <>
    {/* <Navi/> */}
    <div className="col-md-10">
      <div className="wetherBg">
        <h1 className="heading">Weather App</h1>

        <div className="d-grid gap-3 col-4 mt-4">
          <input type="text" className="form-control"
           placeholder="Enter City"
            value={input}
            onChange={handlechange} />
          <button className="btn btn-primary" type="button"
            onClick={handleSearch}
          >Search</button>
        </div>
      </div>
   
    
    <Card style={{ height: '5 rem', width: '18rem',margintop: '5rem' }}>
      <Card.Img variant="top" src="data:image/jpeg;base64,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" />
      <Card.Body>
        <Card.Title>{data?.title}</Card.Title>
        <Card.Text>
        {((data?.main?.temp) - 273.15).toFixed(2)}°C
        </Card.Text>
        
      </Card.Body>
    </Card>
  

    </div>
  </>
  );








};
export default Weather;