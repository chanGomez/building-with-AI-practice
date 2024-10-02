import React from 'react';
import AddReview from './AddReview';
import Reviews from './Reviews';
import './Page.css';
import screenshot from "../assets/screenshot.png"

function Page() {
  return (
    <div className="page-container">
      <section className="item-listing">
        <img src={screenshot} alt="Screenshot" className="item-screenshot" />
        <div className="item-description">
          <h2>Item Name</h2>
          <p>
            Description of the item for sale. This could include details about
            its condition, features, and price.
          </p>
          <p className="price">$XX.XX</p>
        </div>
      </section>
      <section className="reviews-section">
        {/* <AddReview /> */}
        <Reviews />
      </section>
    </div>
  );
}

export default Page;
