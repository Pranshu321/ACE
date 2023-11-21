import React from 'react'
import {useState} from 'react'
import Layout from '../layout'
import { storage } from '../../../firebase/firebase';
import {ref, uploadBytes, getDownloadURL} from 'firebase/storage'
import { auth } from "../../../firebase/firebase";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { v4 } from 'uuid';

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
  const [showResult, setShowResult] = useState(false);
  const [fileUpload, setFileUpload] = useState(null);

  const [score, setScore] = useState(50)
  const [fileUrl, setFileUrl] = useState("");



  const handleClickShow = () => {
    setShowResult(!showResult);
  }

  const handleClickUpload = () => {
    if (fileUpload == null) {
      return;
    }

    const userEmail = auth?.currentUser?.email;
  
    const fileRef = ref(storage, `${userEmail}/${v4()}.pdf`);
    const contentType = 'application/pdf';
    const metadata = { contentType };
  
    uploadBytes(fileRef, fileUpload, metadata)
      .then(() => {
        alert('File uploaded successfully!');
        return getDownloadURL(fileRef); // Return the Promise to the next then block
      })
      .then((url) => {
        setFileUrl(url);
        console.log(url); // Log the URL here, as it will be available
      })
      .catch((error) => {
        console.error('Error uploading file:', error);
      });

      //create entry in firestore database
      

  };
  
  
  if(showResult) {
    return (
      <Layout>
    
        <div className="text-center mt-8">
          <h1 className="text-2xl font-bold mb-4">Academic Content Evaluator</h1>
        </div>
    
        <div className="flex justify-between mt-8">
          <div className="flex flex-col flex-1 mr-4">
            
          </div>
    
          <div className="flex flex-col flex-1">
            <h2 className="text-lg font-medium mb-2">Total rating :</h2>
            <div className="w-1/2">
              <CircularProgressbar value={score} text={`${score}%`} styles={{
        // Customize the root svg element
        root: {},
        // Customize the path, i.e. the "completed progress"
        path: {
          // Path color
          stroke: `rgba(2, 137, 122, ${score / 100})`,
          // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
          strokeLinecap: 'butt',
          // Customize transition animation
          transition: 'stroke-dashoffset 0.5s ease 0s',
          
        },
        // Customize the circle behind the path, i.e. the "total progress"
        trail: {
          // Trail color
          stroke: '#d6d6d6',
          // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
          strokeLinecap: 'butt',
        },
        // Customize the text
        text: {
          // Text color
          fill: '#000',
          // Text size
          fontSize: '16px',
        },
      }} />
            </div>
            <h1 className="text-xl mt-4">The total rating of the document is: {score / 10}/10</h1>
          </div>
        </div>

        <button onClick={handleClickShow}>Check Another</button>
    
      </Layout>
      )
  }

  return (
    <Layout>
      <div>
        <h1>Just testing</h1>
        <label>Upload file :<input type="file" onChange={(event) => {setFileUpload(event.target.files[0])}}/></label>
        <button onClick={handleClickUpload}>Upload</button>
        <button onClick={handleClickShow}>Show</button>
        

      </div>
    </Layout>
  )

}

export default AceEvaluator