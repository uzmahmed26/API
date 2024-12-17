import React from 'react'

const DynamicBook = (props:any) => {
    console.log(props)
  return (
    <div>
      <h1 className='text-5xl text-red-600 bg-slate-200 p-32  m-2 text-center'>{props.params.id}</h1>
    </div>
  )
}

export default DynamicBook
