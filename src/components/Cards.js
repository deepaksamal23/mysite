import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const Cards = ({data}) => {
  
  return (
<>
{
data.map((elem,key)=>{
  return(
    <>
    <Card style={{ width: '23rem',border:'none' }} className=' hove mb-5'>
  <Card.Img variant="top" className='img' src= {elem.imgdata}/>
  <div className="card_body">
        <div className="upper_data d-flex  justify-content-between align-items-center ">
              <h4 className='mt-2'>{elem.rname}</h4>
              <span>{elem.rating}&nbsp;★</span>
        </div>
        <div className="lower_data ">
          <h5>{elem.address}</h5>
          <span>{elem.price}</span>
        </div>
        <div className="extra">
        </div>
        <div className="last_data d-flex justify-content-between align-items-center">
          <img  src={elem. arrimg}  className='imgcs1' srcset="" />
          <p>{elem.somedata}</p>
          <img src={elem.delimg} className='imgcs2' srcset="" />
        </div>
  </div>
</Card>
    </>
  )
})
}

</>
  )
}

export default Cards