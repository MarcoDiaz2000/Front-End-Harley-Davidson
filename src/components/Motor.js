import React from 'react';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import {
  faFacebook,
  faTwitter,
  faGooglePlus,
} from '@fortawesome/free-brands-svg-icons';

const Motor = (motor) => {
  const {
    motor: {
      id, description, model, image,
    },
  } = motor;
  return (
    <div className="motor-card">
      <Card style={{ width: '18rem', border: 'none' }}>
        <Link to={`/motorcycle/${id}`}>
          <div className="motor-image-wrap">
            <Card.Img variant="top" style={{ width: '350px', height: '200px' }} src={image} className="motor-image" />
          </div>
          <Card.Body>
            <Card.Title><p className="text-dark text-center">{model.toUpperCase()}</p></Card.Title>
            <Card.Text>
              <p className="text-dark text-center">{description}</p>
            </Card.Text>
          </Card.Body>
        </Link>
        <Card.Body className="text-center">
          <Card.Link href="https://www.facebook.com" target="_blank">
            {' '}
            <FontAwesomeIcon icon={faGooglePlus} fontSize="23px" className="social-m" />
          </Card.Link>
          <Card.Link href="https://www.google.com" target="_blank">
            {' '}
            <FontAwesomeIcon icon={faFacebook} fontSize="23px" className="social-m" />
          </Card.Link>
          <Card.Link href="https://www.twitter.com" target="_blank">
            {' '}
            <FontAwesomeIcon icon={faTwitter} fontSize="23px" className="social-m" />
          </Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
};
export default Motor;
