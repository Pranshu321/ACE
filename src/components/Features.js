import {
  ClockIcon,
  CursorClickIcon,
  HeartIcon,
  UsersIcon,
} from "@heroicons/react/solid";
import React from "react";
import Feature from "./FeatureItem";

function Features() {
  return (
    <section
      id="features"
      className="container mt-24 flex flex-col items-center"
    >
      <h2 className="text-[32px] font-bold text-center sm:text-left">
        Our Unique Features
      </h2>

      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
        <Feature
          Icon={CursorClickIcon}
          title="Intelligent Evaluation"
          iconBgColor="#02897A"
          description="Leverage our advanced machine learning model to assess academic materials, through insightful evaluations based on parameters such as authorship, relevance, readability, and user reviews."
        />
        <Feature
          Icon={UsersIcon}
          iconBgColor="#4D8DFF"
          title="Comprehensive Quality Labels"
          description=" Benefit from detailed quality labels assigned by the model, offering a quick and accurate overview of the reliability and educational value of each resource, to aid in your decision-making process."
        />
        <Feature
          Icon={HeartIcon}
          iconBgColor="#740A76"
          title="Automated Plagarism Checks"
          description="Ensure the integrity of your resource with the built-in plagiarism detection feature, to verify the originality of academic materials and maintain a commitment to academic honesty."
        />
        <Feature
          Icon={ClockIcon}
          iconBgColor="#F03E3D"
          title="User Friendly Interface"
          description="Navigate through a seamless and intuitive platform designed to enhance the user experience, making it effortless to upload, explore, and engage with high-quality academic resources."
        />
      </div>

      {/* <button className="primary-button mt-14">Sign up Now</button> */}
      {/* <div className="divider divider-accent"></div> */}
    </section>
  );
}

export default Features;
