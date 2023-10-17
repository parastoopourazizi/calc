import { useState } from 'react'
import './Calculator.css'
function Calculator(){

    let[result , setResult] = useState('')

    const clickHandler = (e) => {
        let input = e.target.innerText
        setResult(result + input)
    }

    return(
        <div className="container">
            <div className="screen">{result}
                
            </div>
            <div className="buttons">
                <button className='color twocol'>clear</button>
                <button className='color'>C</button>
                <button onClick={clickHandler} className='color'>÷</button>
                <button onClick={clickHandler}>7</button>
                <button onClick={clickHandler}>8</button>
                <button onClick={clickHandler}>9</button>
                <button onClick={clickHandler} className='color'>×</button>
                <button onClick={clickHandler}>4</button>
                <button onClick={clickHandler}>5</button>
                <button onClick={clickHandler}>6</button>
                <button onClick={clickHandler} className='color'>-</button>
                <button onClick={clickHandler}>1</button>
                <button onClick={clickHandler}>2</button>
                <button onClick={clickHandler}>3</button>
                <button onClick={clickHandler} className='color'>+</button>
                <button onClick={clickHandler}>0</button>
                <button onClick={clickHandler}>.</button>
                <button className='color twocol'>=</button>
                
                


                    
                </div>
        </div>

    )
}
export default Calculator