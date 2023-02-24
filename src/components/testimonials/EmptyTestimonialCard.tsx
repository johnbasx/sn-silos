import React from "react";
import { ButtonLink } from "../Button";

const EmptyReviewCard = () => {
  return (
    <div className='flex flex-col justify-center px-6 py-6 overflow-hidden bg-white border border-gray-200 shadow-sm rounded-2xl'>
      <div className='flex flex-col items-center justify-center space-y-4 text-center'>
        <h3 className='text-gray-500'>
          Want to view more testimonials & reviews of our awesome customers?
        </h3>
        <ButtonLink href="/about">View more</ButtonLink>
      </div>
    </div>
  );
};

export default EmptyReviewCard;
