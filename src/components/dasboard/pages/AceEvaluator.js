import React from "react";
import { useState } from "react";
import Layout from "../layout";
import { storage } from "../../../firebase/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { auth, db } from "../../../firebase/firebase";
import { collection, doc, addDoc } from "firebase/firestore";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { v4 } from "uuid";
import toast from "react-hot-toast";
import axios from "axios";

// const ProgressBar = ({value, parameter}) => {
//   return(
//     <div className='mb-4'>
//       <h2>{parameter}</h2>
//       <progress className="progress progress-primary w-72 h-4" value={value} max="100"></progress>
//     </div>
//   )
// }

const AceEvaluator = () => {
  const [loading, setLoading] = useState(false);

  const [author, setAuthor] = useState("");
  const [publication, setPublication] = useState("");
  //either link
  const [link, setLink] = useState("");
  //or file is uploaded
  const [fileUpload, setFileUpload] = useState(null);
  const [fileUrl, setFileUrl] = useState("");

  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(50);

  const userEmail = auth?.currentUser?.email;

  const handleSubmit = () => {
    // Do something with the photo, such as upload it to a server
    // console.log(photo);
    let custom_file_upload_url = `http://localhost:8080/api/ace-score`;

    let config = {
      method: "post",
      url: custom_file_upload_url,
      data: {
        author: author,
        publication: publication,
        file: fileUrl,
        fileName: fileUpload.name,
      },
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((err) => {
        console.log(err.message);
      });
    handleClickShow();
  };

  const handleClickShow = () => {
    const docRef = doc(db, "Users", userEmail);
    const resourcesCollection = collection(docRef, "resources");

    if (link) {
      //create entry in firestore database
      const resourceData = {
        link: link,
        author: author,
        publication: publication,
      };
      addDoc(resourcesCollection, resourceData).then(() => {
        console.log("Resource added!");
      });
      setLink("");
    }
    if (fileUrl) {
      //create entry in firestore database
      const resourceData = {
        url: fileUrl,
        author: author,
        publication: publication,
      };
      addDoc(resourcesCollection, resourceData).then(() => {
        console.log("Resource added!");
      });
      setFileUpload(null);
      setFileUrl("");
    }

    setShowResult(!showResult);
  };

  const handleClickUpload = () => {
    if (fileUpload == null) {
      return;
    }

    const fileRef = ref(storage, `${userEmail}/${v4()}.pdf`);
    const contentType = "application/pdf";
    const metadata = { contentType };

    uploadBytes(fileRef, fileUpload, metadata)
      .then(() => {
        toast.success("File uploaded successfully!");
        return getDownloadURL(fileRef); // Return the Promise to the next then block
      })
      .then((url) => {
        setFileUrl(url);
        //console.log(url); // Log the URL here, as it will be available
      })
      .catch((error) => {
        toast.error("Error in uploading File");
        console.error("Error uploading file:", error);
      });
  };

  const handleCheckAnother = () => {
    setShowResult(!showResult);
  };

  if (showResult) {
    return (
      <Layout>
        <div className="text-center mt-8">
          <h1 className="text-2xl font-bold mb-4">
            Academic Content Evaluator
          </h1>
        </div>

        <div className="flex justify-between mt-8">
          <div className="flex flex-col flex-1 mr-4"></div>

          <div className="flex flex-col flex-1">
            <h2 className="text-lg font-medium mb-2">Total rating :</h2>
            <div className="w-1/2">
              <CircularProgressbar
                value={score}
                text={`${score}%`}
                styles={{
                  // Customize the root svg element
                  root: {},
                  // Customize the path, i.e. the "completed progress"
                  path: {
                    // Path color
                    stroke: `rgba(2, 137, 122, ${score / 100})`,
                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                    strokeLinecap: "butt",
                    // Customize transition animation
                    transition: "stroke-dashoffset 0.5s ease 0s",
                  },
                  // Customize the circle behind the path, i.e. the "total progress"
                  trail: {
                    // Trail color
                    stroke: "#d6d6d6",
                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                    strokeLinecap: "butt",
                  },
                  // Customize the text
                  text: {
                    // Text color
                    fill: "#000",
                    // Text size
                    fontSize: "16px",
                  },
                }}
              />
            </div>
            <h1 className="text-xl mt-4">
              The total rating of the document is: {score / 10}/10
            </h1>
          </div>
        </div>

        <button onClick={handleCheckAnother}>Check Another</button>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="p-4 flex flex-col gap-y-4">
        <h1 className="text-2xl font-semibold">
          Enter details of resource to be evaluated{" "}
        </h1>

        <label className="block mb-2">
          <span className="text-gray-700 font-semibold"> Author: </span>
          <input
            type="text"
            name="author"
            value={author}
            onChange={(event) => {
              setAuthor(event.target.value);
            }}
            placeholder="Enter author"
            className="block w-full mt-1 p-2 border rounded-md"
          />
        </label>

        <label className="block mb-2">
          <span className="text-gray-700 font-semibold"> Publication: </span>
          <input
            name="publication"
            value={publication}
            onChange={(event) => {
              setPublication(event.target.value);
            }}
            placeholder="Enter Publication"
            className="block w-full mt-1 p-2 border rounded-md"
          />
        </label>

        <label>
          <span className="text-gray-700 font-semibold"> Upload file: </span>
          <input
            type="file"
            onChange={(event) => {
              setFileUpload(event.target.files[0]);
            }}
          />
        </label>

        <button
          onClick={handleClickUpload}
          type="submit"
          className="bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600 mt-4 m-1"
        >
          Upload
        </button>

        <h1 className="text-lg font-bold tracking-wide"> OR </h1>

        <label className="block mb-2">
          <span className="text-gray-700 font-semibold"> Resource URL: </span>
          <input
            name="link"
            value={link}
            onChange={(event) => {
              setLink(event.target.value);
            }}
            placeholder="Enter Resource URL"
            className="block w-full mt-1 p-2 border rounded-md"
          />
        </label>

        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600 mt-4 m-1"
        >
          Show
        </button>
      </div>
    </Layout>
  );
};

export default AceEvaluator;
