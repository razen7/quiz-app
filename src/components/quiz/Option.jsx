import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Option({ option, score, setScore, answer, ptr, setPtr, collection, isOptionSelected, setIsOptionSelected }) {
    let goTo = useNavigate();

    const [isSelected, setisSelected] = useState(null);
    const [buttonBG, setbuttonBG] = useState(null);
    let checkAnswer = () => {
        if (ptr < 3) {
            if (option === answer)
                setScore(score + 1);
            setIsOptionSelected(true);
            setisSelected(true);
        }
        setTimeout(() => {
            setIsOptionSelected(false)
            setisSelected(false);
            if (ptr < collection.length - 1) {
                setPtr(ptr + 1);
            } else {
                goTo('results');
            }
        }, 2000);

    }
    useEffect(() => {
        if (isOptionSelected) {

            if (isSelected) {
                setbuttonBG(option === answer ? 'green' : 'red')
            }

            if (!isSelected) {
                setbuttonBG(option === answer ? 'lightgreen' : null)
            }
        } else setbuttonBG(null);

    }, [isOptionSelected])

    return (
        <button onClick={() => checkAnswer()} style={{ background: buttonBG }}>
            {option}
        </button>
    )
}
