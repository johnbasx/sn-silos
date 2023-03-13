import { shuffledReviews } from "@/contents/testimonials";
import EmptyReviewCard from "./EmptyTestimonialCard";
import TestimonialCard from "./TestimonialCard";
import { useTranslation } from "next-i18next";

const TestimonialSection = () => {
  const { t } = useTranslation("home");
  return (
    <section id='testimonials'>
      <div className='mx-auto max-w-7xl'>
        <div className='px-6 py-16 mx-auto md:max-w-full md:px-0 lg:py-32'>
          <div className='mb-10 text-center md:mx-auto'>
            <h2 className='text-4xl font-bold sm:text-5xl'>
              {/* Testimonial and Reviews */}
              {t("testimonials.heading")}
            </h2>

            <div className='mt-4 text-xl text-gray-600'>
              <p className='text-3xl font-extrabold tracking-tight uppercase text-emerald-600'>
                {/* We love */}
                {t("testimonials.tagline")}
              </p>
              <span>
                {/* What people say about us */}
                {t("testimonials.sub-heading")}
              </span>
            </div>
          </div>
          <div className='grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3'>
            {shuffledReviews.slice(0, 8).map((review, idx) => (
              <TestimonialCard
                key={"Testimonial-card-" + review.id}
                {...review}
              />
            ))}
            <EmptyReviewCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
