import React from "react";

import "../../styles/Reviews.css"

import reviews from "../../assets/honestus_review_results.json";

export default function Reviews() {
  return (
    <div className="d-flex justify-content-center flex-column align-items-center m-5">
      <h1 className="text-center p-3 home-head">Reviews</h1>
      <div>
        <h2>To leave a review please click:</h2>
      </div>
      <a
        className="reviewspage"
        href="https://homestars.com/companies/2928541-piacentini-painting-services"
      >
        <h1>Honestus Painting & Home Improvement</h1>
      </a>
      {reviews.map((review) => (
        <div className="complex-review-container animate__fadeIn animate__animated">
          <div className="complex-review-header">
            <a className="link-title" href={review.url}>
              <h2 className="complex-review-title">{review.title}</h2>
            </a>
            <p className="complex-review-rating">{review.rating} Stars</p>
          </div>
          {review.image_url && (
            <a href={review.image_url}>
              <img
                src={review.image_url}
                alt="Review"
                className="complex-review-image"
              />
            </a>
          )}
          <p className="complex-review-body">{review.description}</p>
          <div className="complex-review-footer">
            {review.location_detail && (
              <p className="complex-review-location">
                Details: {review.location_detail}
              </p>
            )}
            <p className="complex-review-author">By: {review.reviewer}</p>
            <p className="complex-review-date">Date Created: {review.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
