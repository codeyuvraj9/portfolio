import React from 'react'

export default function Thanks() {
    const redirectToAnotherPage = () => {
        window.location.href = '/'; 
      };
      const string = ":)";
  return (
    <div style={{backgroundColor:"#5A636A", paddingBottom:"80vh"}} className='text-center pt-5'>
        <h3 className='text-black'>Thankyou for your Review {string}</h3>
        <button type='button' className="btn btn-dark my-3 mb-3 mb-md-5" onClick={redirectToAnotherPage}>Go to Home Page!</button>

    </div>
  )
}
