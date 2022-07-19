import React,{useEffect,useState} from 'react'
import { Carousel } from 'react-bootstrap';





// importing components 
import ProductCard from '../components/ProductCard';
import Loading from '../components/Loading';


import '../styles/home.css'





const Home = () => {
    let slider1 =  '/slider1.jpg';
    let slider2 =  '/slider2.jpg';
    const [mensClothing, setMensClothing] = useState([]);
    const [womensClothing, setWomensClothing] = useState([]);
    const [electronics, setElectronics] = useState([]);
    const [jewellery, setjewellery] = useState([]);

    const [fetched, setFetched] = useState(false);
    const fetchDetails  = async ()=>{
        const res = await fetch('https://fakestoreapi.com/products',{
            method:"GET",
            headers:{
                Accept:"application/json",
                "content-Type":"application/json"
            },
            Credential:'include'
        });
       const data = await res.json();
       let categoryArray  = [];
       let allProducts = {};
       if(data.length !=0){
           setFetched(true);
           for(let i in data){
                let category  = data[i].category;
                if(!categoryArray.includes(category)){
                    categoryArray.push(category);
                    allProducts[category] = [];
    
                }
                allProducts[category].push(data[i]);
           }
           console.log(categoryArray);
           setMensClothing(allProducts["men's clothing"]);
           setWomensClothing(allProducts["women's clothing"]);
           setElectronics(allProducts["electronics"]);
           setjewellery(allProducts["jewelery"]);
       }
    }

    useEffect(() => {
        fetchDetails();
    }, [])
    
    
    return (
        <div id='home'>
             <Carousel>
                <Carousel.Item>
                    <img className="d-block w-100" src={slider1} alt="Mens Section"/>
                    <Carousel.Caption> 
                        <div className="font1 heading">We always have trending and best deals</div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={slider2} alt="Womens Section"/>
                    <Carousel.Caption> 
                        <div className="font1 heading">Have a look on our best collections</div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div className="container-fluid pt-2 pb-5">
                {!fetched
                ?<Loading />
                :<div className='mt-4'>
                    <div className='d-flex flex-column box'>
                        <div className="categoryHeading font1">Electronics</div>
                        <div className='d-flex flex-wrap  align-items-center'>
                            {electronics.map((product,ind)=>(
                                <ProductCard key={ind} product={product} />
                            ))}
                        </div>
                    </div>
                    <div className='d-flex flex-column box'>
                        <div className="categoryHeading font1">Mens Category</div>
                        <div className='d-flex flex-wrap  align-items-center'>
                            {mensClothing.map((product,ind)=>(
                                <ProductCard key={ind} product={product} />
                            ))}
                        </div>
                    </div>
                    <div className='d-flex flex-column box'>
                        <div className="categoryHeading font1">Womens Category</div>
                        <div className='d-flex flex-wrap  align-items-center'>
                            {womensClothing.map((product,ind)=>(
                                <ProductCard key={ind} product={product} />
                            ))}
                        </div>
                    </div>
                    <div className='d-flex flex-column box'>
                        <div className="categoryHeading font1">Jewelery</div>
                        <div className='d-flex flex-wrap  align-items-center'>
                            {jewellery.map((product,ind)=>(
                                <ProductCard key={ind} product={product} />
                            ))}
                        </div>
                    </div>
                </div>
                }
            </div>
        </div>
    )
}

export default Home