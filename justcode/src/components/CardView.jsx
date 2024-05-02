import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { addtoCart } from '../redux/cartSlice';

const CardView = ({ destination, price, img, id}) => {

    const dispatch = useDispatch()

  return (
    <div style={{ width: '18rem', marginLeft: 150, marginTop: 50 }} className='bg-body-tertiary Card'>
      <Card style={{ width: '18rem', border: '1px solid black' }}>
        <Card.Img style={{ height: 357.5 }} variant="top" src={`${img}`} />
        <Card.Body>
          <Card.Title>{destination}</Card.Title>
          <Card.Text>
            {price}
          </Card.Text>
          <Button onClick={() => dispatch(addtoCart({id, destination, img, price}))} style={{ backgroundColor: 'rgb(221, 227, 255)', color: 'black', border: '1px solid black' }}>Lets go!</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardView;
