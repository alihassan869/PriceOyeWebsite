import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Cardsdata from '../Cardsdata';
import Carousel from 'react-bootstrap/Carousel';
import { Button } from 'react-bootstrap';
import Header from '../Header';
import Footer from '../Footer';
import { ADD } from '../../Redux/action/action';
import './Cardeatails.css';
import { useDispatch,useSelector  } from 'react-redux';
import { Link } from 'react-router-dom';
function Cardetails() {
  const dispatch=useDispatch();
  const [item, setItem] = useState(null);
  const [Storage, setStorage] = useState(true);
  const [activeColor, setActiveColor] = useState(null);
  const [Color, setColor] = useState(null);
  const [activeColorCarouselImages, setActiveColorCarouselImages] =
    useState([]);
    const Carts=useSelector((state)=>state.Cartreducer.CARTS)
    console.log("Carts is:",Carts)
  const { id } = useParams();
  // console.log("data is:",Data2);

  useEffect(() => {
    const comparedata = Cardsdata.find((item) => {
      return item.id === +id;
    });
 
    console.log(comparedata);
    setItem(comparedata);
  }, [id]);

  
  useEffect(() => {
    if (item !== null && item.colours?.length > 0) {
      setActiveColor(item.colours[0]?.id);
      setColor(item.colours[0]?.rname)
      setActiveColorCarouselImages(item.colours[0]?.caroselImgs);
    }
  }, [item]);
 
  if (item === null) return null;
 
  return (
    <>
      <Header />
      <div className="container py-5">
        <div className="row">
          <div
            className="col-md-5 col-10 mx-auto mb-3 mb-md-0 rounded-md h-100"
            style={{ border: '2px solid gray' }}
          >
            <Carousel fade className="w-100">
              {activeColorCarouselImages?.map((imageUrl) => (
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={imageUrl}
                    alt="First slide"
                    style={{ height: '400px' }}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
          <div className="col-md-6 col-10 mx-auto mb-md-0 mb-2 ">
            <h3>{item.rname}</h3>
            <p>
              {item.rating} <b className="text-yellow-400">★★★★</b> 769 Rating
            </p>
            <p>Priceoye Price</p>
            <h4>Rs {Storage=== true ? item.price :item.BigPrice }
          </h4>
            <h6>Colors:</h6>
            <div className="box flex  items-center ">
              {item.colours.map((color) => {
                return (
                  <>
                    <div
                      className={
                        color.id === activeColor
                          ? 'active1 image w-20 cursor-pointer me-2 rounded-md pt-1'
                          : 'image w-20 cursor-pointer me-2 rounded-md pt-1 unactive1'
                      }
                      onClick={() => {
                        setActiveColor(color?.id);
                        setColor(color.rname)
                        setActiveColorCarouselImages(color?.caroselImgs);
                      }}
                    >
                      <img src={color.ThumnailImg} alt="not found" srcset="" />
                      <p className="text-center  ">{color.rname}</p>
                    </div>
                  </>
                );
              })}
            </div>
            <h6 className="mt-2">Storage:</h6>
            {
              item.Storage2 ?
              <div className="Storage flex">
              <button className={Storage === true ? "me-1 rounded-md  btnactive  " : "btn me-1"} onClick={()=>setStorage(true)}>{item.Storage}</button>
              <button className={Storage === false ? " rounded-md  btnactive  " : "btn"} onClick={()=>setStorage(false)} >{item.Storage2}</button>
              </div>
              :
            <button className=' rounded-md  btnactive'>{item.Storage}</button>
            }
            
            <div
              className="text-center py-3 my-2 cursor-pointer rounded-md "
              style={{ border: '2px solid gray' }}
            >
              Installment Plans Pakistan
            </div>
            <div className="text-center py-3 cursor-pointer rounded-md bg-gray-400 ">
              PriceOye Gurrante
            </div>
            <div className="mt-2 flex  ">
             
              <button className="me-2 w-50 bg-yellow-500 rounded-md text-white" >
                <Link to="/Checkout" className='text-decoration-none text-white' onClick={()=>dispatch(ADD({
                id:item.id,
                colour:Color,
               rname:item.rname,
               price:Storage=== true ? item.price :item.BigPrice ,
               qnty:1,
               imgdata:activeColorCarouselImages[0],
               Storage:Storage=== true ? item.Storage :item.Storage2 
              }))}> 
                ADD_CART
                </Link>
              </button>
              
              <Button className="me-2 w-50">COMPARE</Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Cardetails;
