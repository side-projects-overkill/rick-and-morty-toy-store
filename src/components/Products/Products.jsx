import React from 'react'
import './Products.scss'
import { Card, CardBody, CardFooter } from '@patternfly/react-core';

import { NavLink } from 'react-router-dom';


function Products(products) {
    return (
        <div className='products-container'>
            {
                products && products?.products?.map((product)=>{
                    return(
                        <NavLink to={`/product/${product.id}`} style={{textDecoration:"none"}} key={product.id}>
                        <Card ouiaId="BasicCard">
                            <CardBody>
                                <img src={product.image} alt="" className='card-image'/>
                            </CardBody>
                            <CardFooter>
                                <div className='product-name-cost'>
                                    <h3>{product.name}</h3>
                                    <p>₿ {product.id}</p>
                                </div>

                                <div>
                                    <p>status: &nbsp; &nbsp;
                                        {
                                            product.status === 'Dead' &&
                                                <span style={{color:"red"}}>{product.status}</span>
                                        }
                                        {
                                            product.status === 'Alive' &&
                                                <span style={{color:"green"}}>{product.status}</span>
                                        }
                                        {
                                            product.status === 'unknown' &&
                                            <span style={{color:"gray"}}>{product.status}</span>
                                        }
                                    </p>
                                </div>
                            </CardFooter>
                        </Card>
                        </NavLink>
                                )
                })
            }
    </div>
    )
}

export default Products