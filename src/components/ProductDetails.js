import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useLocation } from 'react-router-dom';

function ProductDetails() {
  const navigate = useNavigate();
  const location = useLocation();
  const { state } = location;

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    navigate('/review-submit', {
      state: { ...state, productDetails: data },
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2 className="text-center">Product Details</h2>

      <div>
        <label>Product Name:</label>
        <input {...register('productName', { required: 'Product Name is required' })} />
        <p>{errors.productName?.message}</p>
      </div>

      <div>
        <label>Product Category:</label>
        <select {...register('productCategory', { required: 'Please select a valid category' })}>
          <option value="">Select</option>
          <option value="Electronics">Electronics</option>
          <option value="Clothing">Clothing</option>
          <option value="Home Appliances">Home Appliances</option>
        </select>
        <p>{errors.productCategory?.message}</p>
      </div>

      <div>
        <label>Product Price:</label>
        <input {...register('productPrice', { 
          required: 'Product Price is required',
          valueAsNumber: true,
          validate: (value) => value > 0 || 'Product Price must be greater than zero'
        })} type="number" />
        <p>{errors.productPrice?.message}</p>
      </div>

      <div>
        <label>Stock Quantity:</label>
        <input {...register('stockQuantity', {
          required: 'Stock Quantity is required',
          valueAsNumber: true,
          validate: (value) => Number.isInteger(value) && value > 0 || 'Stock Quantity must be a positive whole number'
        })} type="number" />
        <p>{errors.stockQuantity?.message}</p>
      </div>

      <div>
        <label>Product Description:</label>
        <textarea {...register('productDescription', { 
          maxLength: { value: 500, message: 'Description cannot exceed 500 characters' } 
        })} />
        <p>{errors.productDescription?.message}</p>
      </div>

      <div>
        <label>Product Image:</label>
        <input {...register('productImage', {
          required: 'Product image is required',
          validate: {
            fileSize: (fileList) => !fileList[0] || fileList[0].size <= 3 * 1024 * 1024 || 'File size cannot exceed 3MB',
            fileType: (fileList) => !fileList[0] || ['image/png', 'image/jpeg'].includes(fileList[0].type) || 'Only PNG and JPG formats are allowed'
          }
        })} type="file" />
        <p>{errors.productImage?.message}</p>
      </div>

      <button type="submit">Next</button>
    </form>
  );
}

export default ProductDetails;
