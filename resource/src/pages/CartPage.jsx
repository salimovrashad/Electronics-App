import { Button } from 'react-bootstrap';
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useCart } from 'react-use-cart'

const CartPage = () => {

    const { items, updateItemQuantity, removeItem, isEmpty,cartTotal,emptyCart } = useCart();

    return (
        <div className='mt-5'>
            {isEmpty ? <h1 className='text-center text-primary mt-5'>No Product</h1> : <Container >
                <Row>
                    <Col sm={12} md={9}>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Photo</th>
                                    <th scope="col">Title</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {items.map((item, count) => (
                                    <tr>
                                        <th scope="row">{count + 1}</th>
                                        <td><img src={item.images[0]} width={100} alt="" /></td>
                                        <td>{item.title}</td>
                                        <td>{item.price * item.quantity}$</td>
                                        <td>
                                            <div className='btn btn-outline-primary' onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</div>
                                            <span className='mx-2'>{item.quantity}</span>
                                            <div className='btn btn-outline-primary' onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</div>
                                        </td>
                                        <td><Button variant='danger' onClick={() => removeItem(item.id)}>X</Button></td>
                                    </tr>
                                ))}


                            </tbody>
                        </table>
                    </Col>
                    <Col sm={12} md={3}>
                        <ul class="list-group">
                            <li class="list-group-item"><h3>Total Pirce</h3></li>
                            <li class="list-group-item"><h4 className='text-primary'>{cartTotal}$</h4></li>
                            <li class="list-group-item"><div className='btn btn-outline-danger' onClick={()=>{emptyCart()}} variant='danger'>Clear cart</div><Button variant='success ms-3'>Checkout</Button></li>
                        
                        </ul>
                    </Col>
                </Row>
            </Container>}
        </div>
    )
}

export default CartPage