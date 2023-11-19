import React from "react";
import TestimonialItem from "./TestimonialItem";

function Testimonials() {
  return (
    <section className="container mt-36 text-center flex flex-col items-center">
      <h3 className="text-4xl font-bold">What our users say</h3>
      <p className="font-medium mt-4 max-w-lg">
        
      </p>

      <div className="mt-12 min-w-[80vw] justify-center md:gap-4 md:min-w-full grid gap-8 md:grid-cols-3">
        <TestimonialItem
          name="Nina Watson"
          designation="Computer Science Student"
          userImg="./images/user-1.jpg"
          rating={4}
          testimonial="This platform has been a game-changer for my research journey. The detailed evaluations and quality labels have saved me countless hours, ensuring I invest my time in the most valuable and reliable resources."
        />
        <TestimonialItem
          name="Janice Harrison"
          designation="Professor, CSE Department"
          userImg="./images/user-2.jpg"
          rating={3}
          testimonial="I am always on the lookout for tools that can enhance the learning experience for my students. This platform provides a valuable benchmark for ensuring the materials we recommend meet the highest standards of quality."
        />
        <TestimonialItem
          name="Amy Adams"
          designation="Researcher"
          userImg="./images/user-3.jpg"
          rating={4}
          testimonial="The automated assessments, readability scores, and user reviews have become indispensable in my quest for reliable and high-quality resources. It's like having a personal research assistant at my fingertips!"
        />
      </div>
    </section>
  );
}

export default Testimonials;
