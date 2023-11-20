import React, { useState } from "react";
import Layout from "../layout";
import axios from "axios";
import qs from "qs";
import toast from "react-hot-toast";


const PlagrismChecker = () => {
  const [loading, setloading] = useState(true);
  const [searched, setSearched] = useState(false);
  const [obj, setobj] = useState({});

  const [text, setText] = useState("");
  const handleButtonClick = async () => {
    // console.log(process.env.REACT_APP_PLAG_KEY);
    if (text === "") {
      toast.error("Please, write something");
      return;
    } else if (text.split(" ").length >= 5000) {
      toast.error("Please, write less than 5000 words");
      return;
    }
    setSearched(true);
    try {
      const response = await axios.post(
        "https://www.prepostseo.com/apis/checkPlag",
        qs.stringify({
          key: `${process.env.REACT_APP_PLAG_KEY}`,
          data: text,
        }),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      setobj(response.data);
      setloading(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout>
      <div>
        <div>
          <label
            for="textarea-label-with-helper-text"
            class="block text-xl font-medium mb-2"
          >
            Write your content
          </label>
          <textarea
            id="textarea-label-with-helper-text"
            className="py-3 border-2 px-4 block w-full rounded-lg outline-none text-xs border-teal-400"
            rows="10"
            onChange={(e) => setText(e.target.value)}
            placeholder="Say hi, we'll be happy to check your content"
            aria-describedby="hs-textarea-helper-text"
          ></textarea>
          <p class="text-xs text-gray-500 mt-2" id="hs-textarea-helper-text">
            Write your content here...
          </p>
        </div>
        <div className="flex justify-center">
          <button
            onClick={handleButtonClick}
            className="py-3 px-4 mt-4 w-full bg-teal-600 text-white text-sm font-semibold rounded-lg shadow-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2"
          >
            Check
          </button>
        </div>
        <div className="mt-10 flex flex-col justify-center">
          {loading && searched && (
            <div className="flex justify-center">
              <span
                className="loading text-teal-500 loading-infinity text-3xl loading-lg"
                style={{ width: "13rem" }}
              ></span>
            </div>
          )}
          {Object.keys(obj).length > 0 &&
            obj.sources.map((item, idx) => {
              return (
                <div key={idx} className="flex flex-col items-center">
                  <div className="mockup-browser border bg-base-300">
                    <div className="mockup-browser-toolbar">
                      <a className="text-sm text-center items-center flex input">
                        {item.link}
                      </a>
                    </div>
                    <div className="flex justify-center px-4 py-4 bg-base-200">
                      <div
                        className="radial-progress"
                        style={{
                          "--value": item.percent,
                          "--size": "12rem",
                          "--thickness": "2rem",
                        }}
                        role="progressbar"
                      >
                        {item.percent}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          {Object.keys(obj).length > 0 && (
            <div className="flex flex-col gap-y-4 my-10">
              <h1 className="text-3xl font-bold text-gray-700">
                Plagrized Content
              </h1>
              {obj.details.map((item, idx) => (
                <div
                  key={idx}
                  className="text-sm text-white font-semibold bg-gray-800 w-full rounded-lg p-6"
                >
                  <h2 className="text-base text-red-600">Plagrized</h2>
                  {item.query}
                  <h2 className="text-base mt-2 text-green-600">Original</h2>
                  {item.display.des.slice(15)}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default PlagrismChecker;
