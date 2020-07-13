import React, {useEffect, useState} from "react";


export default function CountUseEffects() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        setTimeout(() => {
            document.title = `  CountUseEffects -  ${count} `
        }, 3000)
    })


    return (
        <div className='text-center'>
            <h1> CountUseEffects - {count}  </h1>
            <div>
                <button onClick={() => setCount(count + 1)}>Plus 1</button>
            </div>
        </div>
    )
}