import React from 'react';
import AddReview from './AddReview';
import Reviews from './Reviews';


function Page() {

  return (
    <div className="page-container">
      <section className="reviews-section">
        {/* <AddReview /> */}
        <Reviews />
      </section>
    </div>
  );
}

export default Page;
