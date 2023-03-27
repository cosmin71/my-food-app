import React from 'react'
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import Form from 'react-bootstrap/Form';
import './Newsletter.scss'

const Newsletter = () => {

  return (
    <div class="card">
      <div class="card-body">
        <p class="card-text">Join our newsletter for the tastiest treats.</p>
        <input type="email" class="emailelement" id="exampleFormControlInput1" placeholder="Your Email Address" />
        <a href="#" class="btn btn-subscribe btn-dark">SUBSCRIBE</a>
      </div>
    </div>
  )
}
export default Newsletter