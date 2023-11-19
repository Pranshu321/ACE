import React from "react";
import BenefitItem from "./BenefitItem";
import { CheckIcon } from "@heroicons/react/solid";

function Benefits() {
  return (
    <section className="container mt-24 space-y-24">
      <BenefitItem
        image="./images/benefit-2.svg"
        heading1="Accurate and Automated"
        heading2="Quality Assessment"
        description="Utilizes a powerful machine learning model to automatically evaluate academic resources based on diverse parameters, ensuring rigorous and objective analysis."
        Content={() => (
          <div className="flex flex-col space-y-6">
            <CheckedItem
              bgColor="#FF9900"
              text="Seamless platform designed for easy uploading, exploration, and engagement with academic materials"
            />
            <CheckedItem
              bgColor="#F03E3D"
              text="Assigns detailed quality labels to each resource for accurate overview of its reliability and educational value."
            />
            <CheckedItem
              bgColor="#4D8DFF"
              text="Offers valuable real-time insights through user reviews, views, and ratings."
            />
          </div>
        )}
      />
      <BenefitItem
        image="./images/benefit-1.svg"
        heading1="Optimised"
        heading2="Organization"
        description="Academic materials are careful selected, organized, and managed for increased productivity of the user."
        Content={() => (
          <div>
            <h5 className="mt-6 mb-2 font-semibold">Systematic Arrangement </h5>
            <p>
            Academic materials undergo meticulous curation, ensuring a systematic arrangement that facilitates efficient navigation and quick retrieval.
            </p>
            <h5 className="mt-6 mb-2 font-semibold">Enhanced Accessibility</h5>
            <p>
            Provides streamlined access to relevant resources, promoting a seamless and productive research or study experience.
            </p>
          </div>
        )}
      />
      {/* <BenefitItem
        image="./images/benefit-3.svg"
        heading1="Optimised"
        heading2="Organization"
        description="Academic materials are careful selected, organized, and managed for increased productivity of the user."
        Content={() => (
          <div>
            <h5 className="mt-6 mb-2 font-semibold">Accessory makers</h5>
            <p>
              While most people enjoy casino gambling, sports betting, lottery
              and bingo playing for the fun
            </p>
            <h5 className="mt-6 mb-2 font-semibold">Alterationists</h5>
            <p>
              If you are looking for a new way to promote your business that
              won’t cost you more money,
            </p>
          </div>
        )}
      /> */}
    </section>
  );
}

export default Benefits;

function CheckedItem({ bgColor, text }) {
  return (
    <div>
      <div className="flex items-center space-x-6">
        <div style={{ background: `${bgColor}` }} className="rounded-xl p-1.5">
          <CheckIcon className="h-8 text-white" />
        </div>
        <p>{text}</p>
      </div>
    </div>
  );
}
