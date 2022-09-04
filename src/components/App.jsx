import React from 'react';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import { collection } from '../questions';
import Quiz from './quiz/Quiz';
import Results from './results/Results';

export default function App() {
    let [score, setScore] = useState(0)
    return (
        <div className="main-container">
            <Routes>
                <Route index element={<Quiz score={score} setScore={setScore} collection={collection} />} />
                <Route path='results' element={<Results score={score} total={collection.length} />} />
            </Routes>
        </div>

    )
}
