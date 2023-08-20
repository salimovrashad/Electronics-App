import React from 'react'
import { Button, Card, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useCart } from 'react-use-cart'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SingleCard = ({photo,title,price,id,alldata}) => {
    const {addItem} = useCart();
    const notify = () => toast.success('Product added', {
        position: "bottom-right",
        autoClose: 100,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });;

    return (

        <Col sm={12} md={3}>
            <Card>
                <Card.Img height={230} variant="top" src={photo} />
                <Card.Body>
                    <Card.Title className='text-dark'>{title}</Card.Title>
                    <Card.Text className='text-dark'>
                        {price} $
                    </Card.Text>
                    <Button variant='btn btn-outline-success me-2' onClick={()=>{notify(addItem(alldata))}}>Add to Cart</Button>
                    <Link to={`/shop/${id}`} className='btn btn-primary'>Read More</Link>
                    <ToastContainer
                    position="bottom-right"
                    autoClose={100}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="dark"
                />
                </Card.Body>
            </Card>
        </Col>
    )
}

export default SingleCard