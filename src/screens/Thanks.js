import React from 'react'

export default function Thanks() {
    const redirectToAnotherPage = () => {
        window.location.href = '/'; 
      };
  return (
    <div>
        <h1>Thanyou for your Review...</h1>
        <button type='button' style={{margin: "35vh 0 7vh 0", color:"black"}} className="btn btn-success" onClick={redirectToAnotherPage}>Go to Home Page!</button>

    </div>
  )
}
