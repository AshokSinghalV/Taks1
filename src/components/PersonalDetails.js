import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import '../styles.css';


function PersonalDetails() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    navigate('/product-details', { state: { personalDetails: data } });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Full Name:</label>
        <input {...register('fullName', { required: 'Full Name is required' })} />
        <p>{errors.fullName?.message}</p>
      </div>
      <div>
        <label>Email:</label>
        <input {...register('email', { 
          required: 'A valid email address is required',
          pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, message: 'Invalid email format' }
        })} />
        <p>{errors.email?.message}</p>
      </div>
      <div>
        <label>Date of Birth:</label>
        <input {...register('dateOfBirth', { required: 'Date of Birth is required' })} type="date" />
        <p>{errors.dateOfBirth?.message}</p>
      </div>
      <div>
        <label>Gender:</label>
        <select {...register('gender', { required: 'Gender selection is required' })}>
          <option value="">Select</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        <p>{errors.gender?.message}</p>
      </div>
      <div>
        <label>Profile Picture:</label>
        <input {...register('profilePicture', {
          required: 'Profile picture is required',
          validate: {
            fileSize: (fileList) => !fileList[0] || fileList[0].size <= 3 * 1024 * 1024 || 'File size cannot exceed 3MB',
            fileType: (fileList) => !fileList[0] || ['image/png', 'image/jpeg'].includes(fileList[0].type) || 'Only PNG and JPG formats are allowed'
          }
        })} type="file" />
        <p>{errors.profilePicture?.message}</p>
      </div>
      <button type="submit">Next</button>
    </form>
  );
}

export default PersonalDetails;
