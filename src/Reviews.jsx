import React, { useState } from 'react'
import AddReview from './AddReview'
import './Reviews.css'

function Reviews() {
    const [reviews, setReviews] = useState([
      {
        title: "Great Product!",
        date: new Date(2023, 5, 15),
        content: "This AI prompt tool is incredibly useful. It has significantly improved my productivity."
      },
      {
        title: "Impressive Features",
        date: new Date(2023, 5, 10),
        content: "The range of features in this tool is impressive. It's very intuitive to use."
      },
      {
        title: "Highly Recommended",
        date: new Date(2023, 5, 5),
        content: "I would highly recommend this to anyone working with AI prompts. It's a game-changer!"
      }
    ]);

    const [showAddReview, setShowAddReview] = useState(false);

    const addReview = (newReview) => {
      setReviews([newReview, ...reviews]);
      setShowAddReview(false);
    };

const formatDate = (date) => {
  const now = new Date();
  const targetDate = new Date(date); // Ensure date is a Date object
  const diffTime = now - targetDate;
  const diffHours = Math.floor(diffTime / (1000 * 60 * 60));
  const diffMinutes = Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60));

  if (diffHours < 24) {
    if (diffHours === 0) {
      return `${diffMinutes} minute${diffMinutes !== 1 ? "s" : ""} ago`;
    } else {
      return `${diffHours} hour${diffHours !== 1 ? "s" : ""} ago`;
    }
  } else {
    return targetDate.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  }
};


    return (
      <div className="review-section">
        <div className="review-header">
          <h2>Reviews</h2>
          <button className="add-review-btn" onClick={() => setShowAddReview(true)}>Add Review</button>
        </div>
        {showAddReview && (
          <div className="modal-overlay">
            <div className="modal-content">
              <AddReview onAddReview={addReview} />
              <button className="close-modal" onClick={() => setShowAddReview(false)}>Close</button>
            </div>
          </div>
        )}
        <ul className="review-list">
          {reviews.map((review, index) => (
            <li key={index} className="review-item">
              <h3>{review.title}</h3>
              <p className="review-date">{formatDate(review.date)}</p>
              <p className="review-summary">{review.content}</p>
            </li>
          ))}
        </ul>
      </div>
    );
}

export default Reviews