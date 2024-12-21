import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles.css';

function ReviewSubmit() {
  const location = useLocation();
  const navigate = useNavigate();
  const { state } = location;

  const handleSubmit = () => {
    console.log('Form submitted successfully!', state);
    alert('Form Submitted!');
    navigate('/');
  };

  return (
    <div className="review-container">
      <h2>Review and Submit</h2>

      <div>
        <h3>Personal Details</h3>
        <p><strong>Full Name:</strong> {state?.personalDetails?.fullName}</p>
        <p><strong>Email:</strong> {state?.personalDetails?.email}</p>
        <p><strong>Date of Birth:</strong> {state?.personalDetails?.dateOfBirth}</p>
        <p><strong>Gender:</strong> {state?.personalDetails?.gender}</p>
      </div>

      <div>
        <h3>Product Details</h3>
        <p><strong>Product Name:</strong> {state?.productDetails?.productName}</p>
        <p><strong>Product Category:</strong> {state?.productDetails?.productCategory}</p>
        <p><strong>Product Price:</strong> {state?.productDetails?.productPrice}</p>
        <p><strong>Stock Quantity:</strong> {state?.productDetails?.stockQuantity}</p>
        <p><strong>Description:</strong> {state?.productDetails?.productDescription}</p>
      </div>

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default ReviewSubmit;
