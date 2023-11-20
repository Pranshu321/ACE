import { PlayIcon } from "@heroicons/react/solid";
import React from "react";
import ModalVideo from "react-modal-video";

function Hero() {
  const [isOpen, setOpen] = React.useState(false);
  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);
  return (
    // parent div
    <main className="container mt-4 md:flex flex-row-reverse justify-between items-center">
      <div className="md:max-w-[50%]">
        <img src="./images/amico.svg" alt="hero" />
      </div>

      {/* text section */}
      <div className="text-center sm:text-left md:max-w-[40%]">
        <h1 className="font-bold text-4xl leading-[60px]">
          Transforming Learning, Empowering Minds and Elevating Research
        </h1>
        {/* Can use typed here */}
        <p className="mt-4 text-[18px] leading-[28px] font-normal">
          Embark on a journey towards academic excellence with the perfect blend
          of quality and convenience
        </p>
        <div className="mt-8 flex items-center justify-around sm:justify-start sm:space-x-8">
          <button className="tooltip primary-button tooltip-success" data-tip="Just, login with google">Get Started</button>
          <p
            onClick={openModal}
            className="font-semibold text-primary whitespace-nowrap flex items-center underline hover:scale-110 active:scale-95 duration-200 cursor-pointer"
          >
            <PlayIcon className="h-8" />
            Watch the Video
          </p>
          <ModalVideo
            channel="youtube"
            autoplay={true}
            loop={true}
            allowFullScreen={true}
            youtube={{ autoplay: 1, loop: 1, showinfo: 0 }}
            isOpen={isOpen}
            videoId="5MlN7b-d08I"
            onClose={() => setOpen(false)}
          />
        </div>
      </div>
    </main>
  );
}

export default Hero;
