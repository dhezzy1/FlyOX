import React, { useState } from 'react';

const UserReviews = () => {
    const [reviews, setReviews] = useState([]);
    const [newReview, setNewReview] = useState('');

    const addReview = () => {
        setReviews([...reviews, newReview]);
        setNewReview('');
    };

    return (
        <div className='review'>
            <h3 >User Reviews</h3>
            <textarea
                value={newReview}
                onChange={(e) => setNewReview(e.target.value)}
                placeholder="Write your review"
            />
            <button onClick={addReview}>Submit Review</button>
            <ul>
                {reviews.map((review, index) => (
                    <li key={index}>{review}</li>
                ))}
            </ul>
        </div>
    );
};

export default UserReviews;

