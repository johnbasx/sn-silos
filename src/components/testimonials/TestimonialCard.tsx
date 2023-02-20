import { ReviewsDataProps } from "@/contents/testimonials";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import { BsPatchCheckFill } from "react-icons/bs";
import { HiShieldCheck } from "react-icons/hi";

const TestimonialCard = ({ ...review }: ReviewsDataProps) => {
  return (
    <div>
      <blockquote className='p-8 bg-gray-100 rounded-xl'>
        <div className='flex items-center gap-4'>
          <Image
            alt='Man'
            src={review.image}
            width={100}
            height={100}
            className='object-cover w-16 h-16 rounded-full'
          />

          <div>
            <span className='mt-1 text-lg font-medium text-gray-700'>
              {review.author}
            </span>
          </div>
        </div>

        <span className='mt-4 text-gray-500 line-clamp-2 sm:line-clamp-none'>
          {review.body}
        </span>
      </blockquote>
    </div>
  );
};

export default TestimonialCard;
