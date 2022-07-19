import React from 'react'
import {Link} from 'react-router-dom';

// importing css files 
import { Card} from 'react-bootstrap';



const ProductCard = ({product}) => {
  return (
    <Link className='productCardLink' to={`/product/${product.id}`}>
        <Card className="productCard">
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
                <Card.Title>
                    <div className="font1">{product.title}</div>
                </Card.Title>
                <Card.Text>
                    <div className="d-flex">
                        <div className="price">₹{product.price}</div>
                    </div>
                </Card.Text>
            </Card.Body>
        </Card>
    </Link>
  )
}

export default ProductCard


