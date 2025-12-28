import React from 'react'

export const Inputcompdashboard = ({
  label,
  name,
  type="text"
}) => {
  return (
   <>
     <div className='Inputcomp_con'>
      <label htmlFor={name}>
        {label}
      </label>
      <input className='inputboxpopup'
      placeeholder={label}
      type={type}
      name={name}
      id={name}/>
    </div>
   </>
  )
}
