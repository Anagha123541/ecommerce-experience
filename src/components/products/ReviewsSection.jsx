// ReviewsSection.jsx

import React from "react";

const ReviewsSection = ({ reviews }) => {
  return (
    <div className="rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-5">
      
      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
        Customer Reviews
      </h2>

      <div className="space-y-4">

        {reviews?.map((review) => (
          <div
            key={review.id}
            className="border-b border-gray-200 dark:border-gray-700 pb-4"
          >
            <div className="flex items-center justify-between">
              
              <h3 className="font-semibold text-gray-900 dark:text-white">
                {review.name}
              </h3>

              <span className="text-yellow-500 font-medium">
                ⭐ {review.rating}
              </span>
            </div>

            <p className="text-gray-600 dark:text-gray-300 mt-2">
              {review.comment}
            </p>
          </div>
        ))}

      </div>
    </div>
  );
};

export default ReviewsSection;