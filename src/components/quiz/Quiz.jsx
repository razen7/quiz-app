import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Option from './Option';

export default function Quiz({ score, setScore, collection }) {
  const [ptr, setPtr] = useState(0);
  const [isOptionSelected, setIsOptionSelected] = useState(false);
  const [time, settime] = useState(100);
  const [intervalId, setintervalId] = useState(null);
  let goTo = useNavigate();
  useEffect(() => {
    clearInterval(intervalId);
    if (!isOptionSelected) {
      settime(5);
      setintervalId(setInterval(() => {
        settime(prev => prev - 1);
      }, 1000));
    }
  }, [isOptionSelected, ptr])

  useEffect(() => {
    if (time === 0) {
      if (ptr === collection.length - 1) {
        goTo('results');
      } else {
        setPtr(prev => prev + 1);
        settime(5);
      }
    }
  }, [time])

  return (
    <>
      <section className="quiz-container">
        <div className="score-container">
          Score: {score}
        </div>

        <div className="question-container">
          {collection[ptr].question}
        </div>
        <div className="hint-container">
          Hint: {collection[ptr].hint}
        </div>

        <div className="answers-container">
          {
            collection[ptr].options.map((option, oI) =>
              <Option option={option} key={oI} score={score} setScore={setScore} ptr={ptr} setPtr={setPtr} answer={collection[ptr].answer} collection={collection} isOptionSelected={isOptionSelected} setIsOptionSelected={setIsOptionSelected} />
            )
          }
        </div>
      </section>
      <progress value={time} max="5"> </progress>
    </>
  );
}


