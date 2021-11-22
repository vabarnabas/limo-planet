import React from 'react'
import { useState } from 'react'
import { HiCheckCircle, HiXCircle } from 'react-icons/hi'
import { IoEarth } from 'react-icons/io5'

const Quiz = (props) => {
    const [isQuestion, setIsQuestion] = useState(true);
    const [correctAnswers, setCorrectAnswers] = useState(0)
    const [showSuccess, setShowSuccess] = useState(false);

    const questions = [
        {
            title: 'Hány éves lett idén a MOL Limo?',
            a: '10 éves',
            b: '5 éves',
            c: '3 éves',
            correct: 'c',
        },
        {
            title: 'Hány autó alkotja a Limo flottát?',
            a: '120',
            b: '240',
            c: '450',
            correct: 'c',
        },
        {
            title: 'Melyik autó a flottánk legújabb tagja?',
            a: 'Dacia Duster',
            b: 'Opel Combo Cargo',
            c: 'Fiat 500 Hybrid',
            correct: 'b',
        },
        {
            title: 'Hány km2 a Limo zóna?',
            a: '86',
            b: '80',
            c: '84',
            correct: 'a',
        },
        {
            title: 'Melyik a flotta leggyakoribb tagja?',
            a: 'Smart fortwo',
            b: 'BMWi3',
            c: 'Kia Picanto',
            correct: 'c',
        },
        {
            title: 'Van-e lehetőség napi bérlésre?',
            a: 'Igen',
            b: 'Nem',
            c: '',
            correct: 'a',
        },
        {
            title: 'Maximum hány napra lehet elvinni az autókat?',
            a: '3',
            b: '6',
            c: '9',
            correct: 'a',
        },
        {
            title: 'Ki állja a töltést/tankolást?',
            a: 'Az utas',
            b: 'A Limo',
            c: '',
            correct: 'b',
        },
        {
            title: 'Milyen feltételekkel vehető igénybe a szolgáltatás',
            a: '18 év, 1 éves jogsi, App regisztráció',
            b: '21 év, 1.5 éves jogsi, App regisztráció',
            c: '16 év, app regisztráció',
            correct: 'a',
        },
        {
            title: 'Mi alapján számolsz el a Limo felé?',
            a: 'Pontgyűjtés alapján',
            b: 'Kilométer alapon',
            c: 'Percdíj alapon',
            correct: 'c',
        },
    ]

    const submitAnswer = (value) => {
        setIsQuestion(false)
        if(props.currentQuestion+1 < questions.length) {
            setShowSuccess(false)
            if (questions[props.currentQuestion].correct === value) {
                setShowSuccess(true)
                setCorrectAnswers(correctAnswers+1)
            }
        } else {
            props.setQuizState('End')
        }
    }

    const nextQuestion = () => {
        if (props.currentQuestion+1 < questions.length) {
            props.setCurrentQuestion(props.currentQuestion+1)
            setIsQuestion(true)
        }
    }

    return (
        <div className="bg-white px-12 py-4 mx-8 rounded-lg shadow-md flex items-center justify-center text-center max-w-lg z-10">
            {(props.quizState === 'Quiz') ?
            (isQuestion ?
                <div className="flex flex-col items-center justify-center text-limoDark">
                    <p className="mt-2 text-3xl font-bold mb-6">{questions[props.currentQuestion].title}</p>
                    <button onClick={() => submitAnswer('a')} className="flex justify-center items-center w-full text-xl bg-limoDark text-white font-semibold py-2 px-2 rounded-md mb-4">{questions[props.currentQuestion].a}</button>
                    <button onClick={() => submitAnswer('b')} className="flex justify-center items-center w-full text-xl bg-limoDark text-white font-semibold py-2 px-2 rounded-md mb-4">{questions[props.currentQuestion].b}</button>
                    {(questions[props.currentQuestion].c !== '') ?
                    <button onClick={() => submitAnswer('c')} className="flex justify-center items-center w-full text-xl bg-limoDark text-white font-semibold py-2 px-2 rounded-md mb-4">{questions[props.currentQuestion].c}</button> : ''
                    }
                    <p className="mt-2 font font-semibold">{props.currentQuestion+1 + '/' + questions.length}</p>
                </div> : ( showSuccess ?
                <div className="flex flex-col items-center justify-center text-limoDark">
                    <p className="mt-2 text-3xl font-bold mb-6">Helyes válasz!</p>
                    <HiCheckCircle className="mb-4 text-9xl" />
                    <p className="text-sm">{'Eddig ' + correctAnswers + ' kérdésre válaszoltál helyesen. ' + ((correctAnswers/props.currentQuestion) > 0.5 ? 'Így tovább!' : 'Ne csüggedj!')}</p>
                    <button onClick={nextQuestion} className="mt-2 w-full text-xl bg-limoDark text-white font-semibold py-2 px-2 rounded-md mb-4">Tovább!</button>
                </div> :
                <div className="flex flex-col items-center justify-center text-limoDark">
                    <p className="mt-2 text-3xl font-bold mb-6">Helytelen válasz!</p>
                    <HiXCircle className="mb-4 text-9xl" />
                    <p className="text-sm">{'Eddig ' + correctAnswers + ' kérdésre válaszoltál helyesen. ' + ((correctAnswers/props.currentQuestion) > 0.5 ? 'Ne add fel!' : 'Ne csüggedj!')}</p>
                    <button onClick={nextQuestion} className="mt-2 w-full text-xl bg-limoDark text-white font-semibold py-2 px-2 rounded-md mb-4">Tovább!</button>
                </div> 
                )
            ) : ((props.quizState === 'Start') ?
                <div className="flex flex-col items-center justify-center text-limoDark">
                    <p className="mt-2 text-3xl font-bold mb-6">MOL Limo x Planet 2021 Quiz!</p>
                    <IoEarth className="mb-4 text-9xl" />
                    <p className="text-sm">Válaszolj a kérdésekre, hogy izgalmas merchandise ajándékokat kaphass!</p>
                    <button onClick={() => props.setQuizState('Quiz')} className="mt-2 w-full text-xl bg-limoDark text-white font-semibold py-2 px-2 rounded-md mb-4">Kezdés!</button>
                </div> :
                <div className="flex flex-col items-center justify-center text-limoDark">
                    <p className="mt-2 text-3xl font-bold mb-6">{(correctAnswers > 5) ? 'Gratulálunk' : 'Ne csüggedj!'}</p>
                    <IoEarth className="mb-6 text-9xl" />
                    <p className="text-lg font-semibold">{correctAnswers + '/' + questions.length + ' kérdésre válaszoltál helyesen!'}</p>
                </div> 
            )}
        </div>
    )
}

export default Quiz
