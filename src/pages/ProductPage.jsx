import React,{useState,useEffect} from 'react'
import {Link,useParams} from 'react-router-dom'
// import {AiFillStar} from 'react-icons/ai'

// imoorting css files 
import '../styles/productPage.css'



import Loading from '../components/Loading'



const ProductPage = ({}) => {
    const {id} = useParams();
    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState([])
    const fetchDetails  = async ()=>{
        const res = await fetch(`https://fakestoreapi.com/products/${id}`,{
            method:"GET",
            headers:{
                Accept:"application/json",
                "content-Type":"application/json"
            },
            Credential:'include'
        });
        let data = await res.json();
        if(data){
            data['rate'] = data.rating.rate;
            data['count'] = data.rating.count;
            setLoading(false);
            setProduct(data);

        }
    }

    useEffect(() => {
        fetchDetails();
    }, [])

  return (
    <div id='productPage' className='pb-5'>
        <div className="container">
            {loading && <Loading/>}
            {!loading && <div className="d-flex justify-content-center mainContainer">
                <div className="left">
                    <div className="d-flex w-100 justify-content-center">
                        <img src={product.image} alt='Failed to load image' />
                    </div>
                </div>
                <div className="right">
                    <div className="font1 subHeading my-1">{product.title}</div>
                    <div className='d-flex my-3 align-items-center'>
                        <div className="ratingButton bgColor d-flex align-items-center justify-content-center">
                            <div>{product.rate}</div>
                            &#9733;
                        </div>
                        <div className="font1">{product.count} rating and reviews</div>
                    </div>

                    <b className="d-flex my-3" style={{color:'gray'}}>
                        <div className="price">₹{product.price}</div>
                    </b>

                    <div className="font1" style={{textAlign:'justify'}}>
                        {product.description}
                    </div>
                </div>
            </div>
            }
        </div>
    </div>
  )
}

export default ProductPage
