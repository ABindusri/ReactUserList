import React from 'react'
import {useState,useEffect} from 'react'
import CardComponent from './CardComponent'
const DataComponent = () => {
  
    const [data,setData]=useState([])
       useEffect(()=>{fetch('https://reqres.in/api/users?page=2').then(response=>
        response.json()).then(data=> setData(data.data)).catch(error=>console.log(error))
       },[])


       console.log(data);


  return (
    <div className='flex '>
       {data.map((Edata)=> <CardComponent userData={Edata}/>)}

    </div>
    
  )
}

export default DataComponent