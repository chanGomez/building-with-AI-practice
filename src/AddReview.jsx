import React, { useState } from 'react'
import './AddReview.css'

function AddReview({ onAddReview }) {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    date: ''
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prevErrors => ({ ...prevErrors, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.title.trim()) newErrors.title = 'Title is required';
    if (!formData.content.trim()) newErrors.content = 'Review content is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      const newReview = {
        ...formData,
        date: new Date().toLocaleDateString()
      };
      onAddReview(newReview);
      setFormData({ title: '', content: '', date: '' });
    }
  };

  return (
    <div className="add-review-form">
      <h2>Add a Review</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input 
            type="text" 
            id="title" 
            name="title" 
            value={formData.title}
            onChange={handleInputChange}
          />
          {errors.title && <span className="error">{errors.title}</span>}
        </div>
        <div>
          <label htmlFor="content">Review:</label>
          <textarea 
            id="content" 
            name="content" 
            rows="4" 
            value={formData.content}
            onChange={handleInputChange}
          ></textarea>
          {errors.content && <span className="error">{errors.content}</span>}
        </div>
        <button type="submit">Submit Review</button>
      </form>
    </div>
  )
}

export default AddReview