import React, { useEffect, useState } from "react";
import Layout from "./layout";
import { auth } from "../../firebase/firebase";
import axios from "axios";
import Table from "../Table";

const Dashboard = () => {
  const [data, setdata] = useState([]);
  const [show, setshow] = useState(false);
  const getFact = async () => {
    const res = await axios.get("https://api.api-ninjas.com/v1/riddles", {
      headers: {
        "X-Api-Key": `${process.env.REACT_APP_FACT_KEY}`,
      },
    });
    setdata(res.data);
  };
  useEffect(() => {
    // getFact();
    console.log("Working");
  }, []);
  return (
    <>
      <Layout>
        <div className="p-4">
          <div onClick={getFact} className="text-5xl text-gray-600">
            Hello ,{" "}
            <span className="text-teal-600 font-semibold">
              {auth?.currentUser?.displayName}
            </span>
          </div>
          <div className="mockup-window w-full mt-10 h-[75vh] border bg-base-300">
            <div className="flex justify-center h-full px-4 bg-base-200">
              <div className="w-full -mt-3">
                {/* <div className="text-3xl font-semibold text-gray-700">
                  {data[0]?.title}
                </div>
                <div className="text-5xl tracking-wider leading-normal font-semibold text-gray-700">
                  {data[0]?.question}
                </div>
                {data[0]?.question && (
                  <button
                    onClick={() => setshow(!show)}
                    className="btn text-white w-1/4 btn-success"
                  >
                    Show Answer
                  </button>
                )}
                {show && (
                  <div className="text-left text-xl font-semibold">
                    Answer is :{" "}
                    <span className="text-success font-bold tracking-wide">
                      {data[0]?.answer}
                    </span>
                  </div>
                )} */}
                <Table />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Dashboard;
