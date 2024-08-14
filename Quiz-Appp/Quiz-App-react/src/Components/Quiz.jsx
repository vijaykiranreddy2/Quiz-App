import React,{useState,useContext} from "react";
import { Questions } from "../Helpers/QuestionBank";
import { QuizContext } from "../Helpers/Context";
import "./Quiz.css";

export default function Quiz(){
  
    const {score, setScore,setGameState}=useContext(QuizContext);

    const [currQuestion, setCurrQuestion]=useState(0);
    const [optionChosen, setOptionChosen]=useState("");

    const nextQuestion=(e)=>{
       if(Questions[currQuestion].answer == optionChosen){
         setScore(score+1);
         
       }
       
       setCurrQuestion(currQuestion+1);
    }
    const finishQuiz=()=>{
        if(Questions[currQuestion].answer == optionChosen){
            setScore(score+1);
            
         }
         
        setGameState("endScreen");
    }
    
    

     return (
        <div className="Quiz">
           <h1>{currQuestion+1}.{Questions[currQuestion].prompt}</h1>
           <div className="options">
            <button onClick={()=>setOptionChosen("A")}>{Questions[currQuestion].optionA}</button>
            <button onClick={()=>setOptionChosen("B")}>{Questions[currQuestion].optionB}</button>
            <button onClick={()=>setOptionChosen("C")}>{Questions[currQuestion].optionC}</button>
            <button onClick={()=>setOptionChosen("D")}>{Questions[currQuestion].optionD}</button>
           </div>
           <div className="Game">
           {(currQuestion== Questions.length-1)
           ? (<button onClick={finishQuiz}>End Quiz</button>)
           :<button onClick={nextQuestion} >Next Question</button>}
           <button onClick={finishQuiz} className="End">End Quiz</button>
           </div>

        
        </div>
     )
}