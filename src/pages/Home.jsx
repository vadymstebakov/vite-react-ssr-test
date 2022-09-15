import React from 'react';
import Code from '../components/Code';

function Home() {
    return (
        <div>
            <h2>Home</h2>
            <p>Example of client-side routing with React Router and SSR.</p>
            <p>
                This page is rendered to HTML, see <Code>view-source:http://localhost:3000</Code>.
            </p>
        </div>
    );
}

export default Home;
