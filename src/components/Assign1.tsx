import {useState} from 'react';
import '../CSS/Assign1.css'

const Assign = () => {

    const [count, Setcount] = useState(0);

    return(
        <>
         <h1 className="title">Assignment - 1</h1>
         <div className="Container">
            <p className='Counter'>{count}</p>
         </div>
         <div className="btns">
            <button className='add-btn' onClick={() => {Setcount(count+1)}}>Add +1</button>
            <button className='subtract-btn' onClick={() => {Setcount(count-1)}}>Subtract -1</button>
            <button className='reset-btn' onClick={() => {Setcount(0)}}>Reset</button>
         </div>
        </>
    )
}

export default Assign;