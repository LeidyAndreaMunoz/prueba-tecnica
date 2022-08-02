import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import './card.css'

function CardHome({title, date, img, onClick }) {


  return (
    <Card key={title} >
        <Card.Img src={img} />
        <Card.Body >
        <Card.Title >{title}</Card.Title>
        <p>{date}</p>
          <Button variant="primary" onClick={onClick}>Leer más</Button>
        </Card.Body>
    </Card> 
  );
}

export default CardHome;