
import {useState} from 'react';
import '../CSS/Assign3.css'

interface Questions {
    id: number,
    question: string;
    options: string[];
    answer: string;
}
const Assign3 = () => {

    const questions: Questions[] = [
        {
          id: 1,
          question: "What is React?",
          options: ["Library", "Framework", "Database", "Language"],
          answer: "Library",
        },
        {
          id: 2,
          question: "What is JSX?",
          options: ["Java", "JavaScript XML", "JSON", "None"],
          answer: "JavaScript XML",
        },
        {
          id: 3,
          question: "What is the use of useState?",
          options: ["Data storage", "Event handling", "State management", "Routing"],
          answer: "State management",
        },
      ];

      const [currentQn,SetCurrentQn] = useState<number>(0);
      const [selectedOption,SetSelectedOption] = useState<string>("");
      const [score,Setscore] = useState<number>(0);
      const [showScore,SetshowScore] = useState<boolean>(false);

      const handleNext = () => {
            if (selectedOption === questions[currentQn].answer){
                Setscore(score+1);
            }
            if (currentQn === questions.length - 1){
                SetshowScore(!showScore);
            }
            else{
                SetCurrentQn(currentQn + 1);
                SetSelectedOption("");
            }
      }

    return(
        <>
            <h1 className="title">Assignment - 3</h1>

            {
                showScore ? (
                    <div className="Score-Container">
                        <h2 className='Score'>Your Score: {score} / {questions.length}</h2>     
                    </div>
                ) :
                (    
                    <div className="Main-Container">
                        <h3 className='Question-text'>{questions[currentQn].question}</h3>

                        <div className="Option-container">
                            {questions[currentQn].options.map((option,i)=>(
                                    <button className='Option' key={i} onClick={()=>SetSelectedOption(option)} style={{backgroundColor: selectedOption === option ? "rgb(168, 216, 57)" : ""}}>
                                        {option}
                                    </button>
                            ))}
                        </div>
                        <br/>

                        <button className='Next' onClick={handleNext} disabled={!selectedOption}>Next</button>
                    </div>
                )
            }
        </>
    )
}

export default Assign3;