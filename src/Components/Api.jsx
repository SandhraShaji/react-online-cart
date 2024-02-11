import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Api.css';
function Api() {
    const base_url = 'https://dummyjson.com/products'
    const[product, setProduct]=useState([])
    const fetchdata=async()=>{
       const response = await fetch(base_url)
       .then(response=>response.json())
       .then(products=>setProduct(products.products))
    }
    console.log(product);
    useEffect(()=>{
        fetchdata()
    },[])
  return (
          <div className='cards'>
            {
              product.map(item=>(
                <Card className='card1' style={{ width: '18rem' }}>
                <Card.Img variant="top" src={item.thumbnail} />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.description}</Card.Text>
                  <Button variant="primary">Add to Cart</Button>
                </Card.Body>
              </Card>
              ))
            }
          </div>
  )
}

export default Api