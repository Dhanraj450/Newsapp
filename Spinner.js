import React from 'react'
import loading from './Spinner-1s-57px.gif'

const Spinner= () =>{
    return (
      <div className='text-center'>
        <img src={loading} className="my-3" alt="loading" />
      </div>
    )
}

export default Spinner
