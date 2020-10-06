import React from 'react';

import Counter from '../../components/Counter'
import Mirror from '../../components/Mirror'

import CountProvider from '../../Context/Count'


export default function Home() {
    return (
        <CountProvider>
            <div>
                <h1>so uma home page</h1>
                <Counter />

                <hr />
                <Mirror />

            </div>
        </CountProvider>
    );
}

