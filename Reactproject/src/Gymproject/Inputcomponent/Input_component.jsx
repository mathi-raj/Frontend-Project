import React from 'react'
import "../Inputcomponent/Inputbox.css"

export const Input_component = ({type="text",placeholder="",name="",setinput=()=>{},required=true}) => {
  return (
   <>
    <div>Input_component</div>
    <form>
      <input 
      className='Inputbox'
      type={type}
      placeholder={placeholder}
      name={name}
      onChange={(e)=>setinput(e.target.name,e.target.value)}
      required={required}
      />
    </form>
    </>
  )
}
