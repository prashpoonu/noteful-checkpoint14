import React from 'react'

export default function notePageContent (props) {
  console.log(props);

  return (
      <div className='NotePageMain__content'>
         <p>{props}</p>
      </div>
  )
}