import React from 'react'
import './lesson_4';
import { createPromise } from './lesson_4';
import { rejectedPromise } from './lesson_4';
import { resolvedPromise } from './lesson_4';



const Lesson4 = () => {
    return (
        <div>
            <button onClick={createPromise} id='btn-create-promise'>Create Promise</button>
            <button onClick={resolvedPromise} id='btn-resolve-promise'>Resolve Promise</button>
            <button onClick={rejectedPromise} id='btn-reject-promise'>Reject Promise</button>
        </div>
    );
}

export default Lesson4;