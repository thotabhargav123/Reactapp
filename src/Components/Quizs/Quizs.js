import React from 'react'
import '../Quizs/styles.css'
import { useState } from 'react'
export default function Quizs() {
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
    let [qnum, setQnum] = useState(0);
    let [score, setScore] = useState(0);
    let [dis, setDis] = useState(false);
    function handlenextQuestion(value) {
        if (value === true) {
            setScore(score + 1);
        }
        
        let newnum = qnum + 1;
        if (newnum < questions.length) {
            setQnum(qnum+1);
        }
       else {
            setDis(true)
        }
    }
    return (
        <main>
            <div className={`container ${dis ? "dis" : ""}`}>
                <div className="question">
                    <div className="title">
                        <span>Question 1</span>
                    </div>
                    <div className="questiontxt">
                        <p>{questions[qnum].questionText}</p>
                    </div>
                </div>
                <div className="options">
                    {questions[qnum].answerOptions.map(function (answer) {
                        return <button onClick={function () { return handlenextQuestion(answer.isCorrect) }}>{answer.answerText}</button>
                    })}
                </div>
            </div>
            <div className={`scorecard ${!dis ? "dis" : ""}`}>
                <p>You have scored {score}  of 4</p>
            </div>
        </main>
    )
}
