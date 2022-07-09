import React, { useEffect, useState } from 'react'
import Cardsdata from './CardsData'
import Form from 'react-bootstrap/Form'
import './style.css'
import Cards from './Cards'
import Set from './Set'

const Search = () => {

      const [cdata,setCdata]=useState(Cardsdata);
// console.log(cdata);

const [valuecopy,setvaluecopy]=useState([]);
console.log(valuecopy);



const imgdata ="https://developer.android.com/images/cards/distribute/stories/zomato_black.png" 

useEffect(()=>{
  setTimeout(() => {
    setvaluecopy(Cardsdata)
  }, 3000);
})

const changeValue =(e)=>{

  let valuedatacopy =e.toLowerCase();

  if(valuedatacopy===""){
    setvaluecopy(cdata);
  }else{
let  storedata=valuecopy.filter((ele,k)=>{
  return  ele.rname.toLowerCase().match(valuedatacopy);
})
  setvaluecopy(storedata);
  }
}

  return (
        <>
    <div className='container justify-content-between align-items-center d-flex'>
    <img src={imgdata} alt="" srcset=""  style={{width:"6rem",position:"relative ",left:'2%',cursor:'pointer'}}/>
    <h2 style={{color:'#837260', cursor:'pointer'}} className='mt-2'> Food Filtter App</h2>
    </div>

  
    <Form className='d-flex justify-content-center align-item-center  mt-3'>
    
  <Form.Group className=" mx-2 col-lg-4" controlId="formBasicEmail">
    <Form.Control type="text" placeholder="Search Resturants"  onChange={(e)=>changeValue(e.target.value)}/>
  </Form.Group>
  <button className='btn  col-lg-1 ' style={{height:38,background:'#721E7F', color:'#FEFEFE',hover :'red' }}>Submit</button>
  </Form>
  
<section className='item_section mt-4 container'>
<h2>Resturants  in Odisha  Open Now</h2>

<div className="row mt-2 d-flex  justify-content-around align-items-center">
      {valuecopy && valuecopy.length ? <Cards data={valuecopy}/>:<Set sdata={cdata}/>} 
</div>
</section>


    </>
  )
}

export default Search