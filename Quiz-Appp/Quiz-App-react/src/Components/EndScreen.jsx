import React,{useState,useContext} from "react";
import { Questions } from "../Helpers/QuestionBank";
import { QuizContext } from "../Helpers/Context";

export default function EndScreen(){
    const { score, setScore, setGameState }=useContext(QuizContext);
    const restartQuiz=()=>{
        setScore(0);
        setGameState("menu");
    }
     return (
        <div className="End">
            <h1>Quiz Finished</h1>
            <h2>Score : {score}/{Questions.length}</h2>
            <button onClick={restartQuiz}>Restart</button>
        </div>
     )
}