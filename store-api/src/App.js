import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
const App = () => {
  const [fake, setfake] = useState([]);
  console.log(fake);
  useEffect(() => {

    const fakestore = async () => {
      const response = await fetch("https://fakestoreapi.com/products")
      console.log(response);
      const jsondata = await response.json();
      console.log(jsondata);
      setfake(jsondata);
    }
    fakestore();
  }, [])
  return (
      <>
      <Navbar />
      <div className="row">
        {fake.map((value) => {
          return (
            <>
            <div className="col-md-4 mt-5" style={{width:"18 rem"}}>
              <div className="card" style={{width:"150px", height:"150px",objectFit:"contain"}}>
                <img src={value.image} className="card-img-top" alt="" />
                </div>
                <div className="card-body mt-5 pt-5">
                  <h5 className="card-title mt-3">{value.title}</h5>
                  <p className="card-text mt-3">{value.description}</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
               
              </div>
            </div>
            </>
          )
   
          })}
       </div>
           </>
          )
          }

export default App;
