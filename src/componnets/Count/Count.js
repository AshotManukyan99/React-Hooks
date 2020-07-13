import React, {useState} from "react";


export default function Count() {
    const [count, setCount] = useState(0)


    function handlerCount() {
        setTimeout(() => {
            setCount(count + 3)
        }, 3000)
    }

    return (
        <div className='text-center'>
            <h1> Count - {count}  </h1>
            <div>
                <button onClick={() => setCount(count + 1)}>Plus 1</button>
                &nbsp;
                <button onClick={handlerCount}>Plus 3</button>
            </div>
        </div>
    )
}