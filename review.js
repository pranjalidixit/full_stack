import React, { useState } from 'react';
import './review.css';

const ReviewPage = () => {
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState('1');
  const [reviewText, setReviewText] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newReview = { rating, reviewText };
    setReviews([...reviews, newReview]);
    setRating('1');
    setReviewText('');
  };

  return (
    <div>
      <header>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section className="review-section">
          <h1>Reviews</h1>
          <ul className="review-list">
            {reviews.map((review, index) => (
              <li key={index}>
                <strong>{review.rating} Stars</strong>
                <p>{review.reviewText}</p>
              </li>
            ))}
          </ul>
          <form className="review-form" onSubmit={handleFormSubmit} aria-labelledby="review-form-heading">
            <h2 id="review-form-heading">Leave a Review</h2>
            <fieldset>
              <legend>Review Details</legend>
              <label htmlFor="rating">Rating:</label>
              <select
                id="rating"
                name="rating"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                aria-required="true"
              >
                <option value="1">1 Star</option>
                <option value="2">2 Stars</option>
                <option value="3">3 Stars</option>
                <option value="4">4 Stars</option>
                <option value="5">5 Stars</option>
              </select>
              <label htmlFor="review-text">Review:</label>
              <textarea
                id="review-text"
                name="review-text"
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
                aria-required="true"
                placeholder="Write your review here..."
              />
              <button type="submit">Submit Review</button>
            </fieldset>
          </form>
        </section>
      </main>
    </div>
  );
};

export default ReviewPage;
