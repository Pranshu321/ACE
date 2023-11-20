import React from 'react'
import {useState} from 'react'
import Layout from '../layout'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ProgressBar = ({value, parameter}) => {
  return(
    <div className='mb-4'>
      <h2>{parameter}</h2>
      <progress className="progress progress-info w-72 h-4" value={value} max="100"></progress>
    </div>
  )
}


const AceEvaluator = () => {
  const [score, setScore] = useState(50)
  const [readability, setReadability] = useState(50)
  const [credibility, setCredibility] = useState(50)
  const [reviews, setReviews] = useState(50)
  const [relevance, setRelevance] = useState(50)

  
  return (
  <Layout>

    <div className="text-center mt-8">
      <h1 className="text-2xl font-bold mb-4">Academic Content Evaluator</h1>
    </div>

    <div className="flex justify-between mt-8">
      <div className="flex flex-col flex-1 mr-4">
        <h2 className="text-lg font-medium mb-2">Parameters :</h2>
        <ProgressBar value={readability} parameter="Readability" />
        <ProgressBar value={credibility} parameter="Credibility"/>
        <ProgressBar value={reviews} parameter="Reviews"/>
        <ProgressBar value={relevance} parameter="Relevance"/>
      </div>

      <div className="flex flex-col flex-1">
        <h2 className="text-lg font-medium mb-2">Total rating :</h2>
        <div className="w-1/2">
          <CircularProgressbar value={score} text={`${score}%`} />
        </div>
        <h1 className="text-xl mt-4">The total rating of the document is: {score / 10}/10</h1>
      </div>
    </div>

  </Layout>
  )
}

export default AceEvaluator