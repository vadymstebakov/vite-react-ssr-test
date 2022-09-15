import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <button onClick={() => setCount(count => count + 1)} style={{ marginLeft: 10 }}>
            Count: <span>{count}</span>
        </button>
    );
}

export default Counter;
