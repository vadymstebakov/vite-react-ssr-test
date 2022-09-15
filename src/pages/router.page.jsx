import React, { lazy, Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import TimeElapsed from '../components/TimeElapsed';
import Counter from '../components/Counter';

const Home = lazy(() => import('./Home'));
const About = lazy(() => import('./About'));

export function Page() {
    return (
        <>
            <b>
                <i>
                    Time elapsed: <TimeElapsed />
                </i>
                <Counter />
            </b>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
            <hr />
            <Suspense fallback={<p>Loading...</p>}>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </Suspense>
        </>
    );
}
