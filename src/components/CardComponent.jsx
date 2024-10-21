import React from 'react'

const CardComponent = (prop) => {
  return (
    
    <div  className="flex flex-col    ml-4 mr-4 mt-5 border-solid border-4 border-sky-400 bg-blue-200 p-5 w-30 h-70 shadow-md  rounded ">
    <img src= {prop.userData.avatar} ></img>
   <h6 className='pt-2'>{prop.userData.first_name + prop.userData.last_name}</h6>
   <h4 className="pt-2">{prop.userData.email}</h4>
  

</div>
  )
}

export default CardComponent