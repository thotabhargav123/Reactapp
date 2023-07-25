import React from 'react'
import '../Quizapp/Quizapp.css'
import { useState } from 'react';
export default function Quizapp() {
    const questions = [
        {
            questionText: 'What is the capital of France?',
            answerOptions: [
                { answerText: 'New York', isCorrect: false },
                { answerText: 'London', isCorrect: false },
                { answerText: 'Paris', isCorrect: true },
                { answerText: 'Dublin', isCorrect: false },
            ],
        },
        {
            questionText: 'Who is CEO of Tesla?',
            answerOptions: [
                { answerText: 'Jeff Bezos', isCorrect: false },
                { answerText: 'Elon Musk', isCorrect: true },
                { answerText: 'Bill Gates', isCorrect: false },
                { answerText: 'Tony Stark', isCorrect: false },
            ],
        },
        {
            questionText: 'The iPhone was created by which company?',
            answerOptions: [
                { answerText: 'Apple', isCorrect: true },
                { answerText: 'Intel', isCorrect: false },
                { answerText: 'Amazon', isCorrect: false },
                { answerText: 'Microsoft', isCorrect: false },
            ],
        },
        {
            questionText: 'How many Harry Potter books are there?',
            answerOptions: [
                { answerText: '1', isCorrect: false },
                { answerText: '4', isCorrect: false },
                { answerText: '6', isCorrect: false },
                { answerText: '7', isCorrect: true },
            ],
        },
    ];
    let [qnumber, setQnumber] = useState(0);
    let [score, setScore] = useState(0);
    let[showscore,setshowscore]=useState(false)
    function handleNextQuestion(iscrct) {
        if (iscrct) {
            setScore(score + 1);
        }
        let newnum = qnumber + 1;
        if (newnum < questions.length) {
            setQnumber(qnumber + 1)
        }
        else {
            setshowscore(true)
        }
    }
    return (
        <main>
            <div className={`container ${showscore?"dis":""}`}>
                <div className="question">
                    <div className="title">
                        <span>Question {qnumber + 1}</span>/{questions.length}
                    </div>
                    <div className="questiontxt">
                        <p>{questions[qnumber].questionText}</p>
                    </div>
                </div>
                <div className="options">
                    {
                        questions[qnumber].answerOptions.map(function (val, key) {
                            return <button onClick={function () { return handleNextQuestion(val.isCorrect) }}>{val.answerText}</button>
                        })
                    }
                </div>
            </div>
            <div className={`scorecard ${!showscore?"dis":""}`}>
                <p>You have scored {score} of 4</p>
            </div>
        </main>
    )
}
