import React, { useRef, useEffect } from 'react';

function Upold() {
    const cloudinaryRef = useRef();
    const widgetRef = useRef();
    useEffect(()=>{
        cloudinaryRef.current = window.cloudinary;
        widgetRef.current =  cloudinaryRef.current.createUploadWidget({
        cloudName: "dqdnu28p6",
        uploadPreset: "uhpxuzkq"

       }, function(error,result){
        console.log(result);
       });
        },[])
  return (
    <div><button style={{backgroundColor:"black", color:"white"}} className='btn dip' onClick={()=> widgetRef.current.open()}>Upload Movie</button></div>
  )
}


export default Upold