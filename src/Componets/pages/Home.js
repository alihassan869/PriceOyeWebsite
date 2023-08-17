import React from 'react'
import Header from '../Header'
import Footer from '../Footer';
import Cardsdata from '../Cardsdata'
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import Carusal from '../Carsual';
import {useSelector  } from 'react-redux';
function Home() {
  const SEARCH=useSelector((state)=>state.Cartreducer.SEARCH);
  console.log("SEARCH is:",SEARCH);
  const datafilter=Cardsdata.filter((item)=>
  SEARCH.length > 0 ? item.rname.toLowerCase().includes(SEARCH.toLowerCase()) : true
)
console.log("datafilter is:",datafilter);
  return (
    <>
    <Header/>
   
    <div className="container-fluid px-0 pb-2 ">
    <Carusal />
    </div>
<div className="container py-5">

{
  datafilter.length ?
  <div className="row flex justify-around items-center">
  {
    datafilter.map((item,id)=>{
      return(
        <>
          <Card style={{ width: '22rem' }} className='mb-2'>
              <Carousel fade className='w-100'>
    <Carousel.Item>
  <Link to={`/Cardetails/${item.id}`}>
    <img
        className="d-block w-100 cursor-pointer"
        src={item.imgdata1}
        alt="First slide"
        style={{height:'400px'}}
      />  
         </Link>
    </Carousel.Item>
   
    
    <Carousel.Item>
    <Link to={`/Cardetails/${item.id}`}>
      <img
        className="d-block w-100 cursor-pointer"
        src={item.imgdata2}
        alt="Second slide"
        style={{height:'400px'}}
      />  
    </Link>
  </Carousel.Item>
  
  
    <Carousel.Item>
    <Link to={`/Cardetails/${item.id}`}>
      <img
        className="d-block w-100 cursor-pointer"
        src={item.imgdata3}
        alt="Third slide"
        style={{height:'400px'}}
      />
    </Link>
    </Carousel.Item> 
  </Carousel>
              <Card.Body>
                <Card.Title>{item.rname}</Card.Title>
                <Card.Text>
                RS{item.price}
                </Card.Text>   

              </Card.Body>
            </Card>
        </>
      )
    })
  }

</div>:<div
  className="py-5 text-center text-red-800"
  style={{ minHeight: '80vh' }}
>
  <h3>Items not found</h3>
</div>
}
 
</div>

<Footer />
    </>
  )
}

export default Home