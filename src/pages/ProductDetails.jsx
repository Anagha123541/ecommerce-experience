
import React from "react";
import { ShieldCheck } from "lucide-react";

import ReviewsSection from "../components/products/ReviewsSection";

const ProductDetails = ({ productReviews }) => {
  return (
    <div className="space-y-6">

      {/* Assure Checkout */}
      <div className="rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-5">
        
        <div className="flex items-center gap-3 mb-2">
          <ShieldCheck className="w-5 h-5 text-emerald-600" />

          <h3 className="font-semibold text-gray-900 dark:text-white">
            Assure Checkout
          </h3>
        </div>

        <p className="text-sm text-gray-600 dark:text-gray-300">
          Safe payments and insurance for every order.
        </p>
      </div>

      {/* Reviews Section */}
      <ReviewsSection reviews={productReviews} />

    </div>
  );
};

export default ProductDetails;

