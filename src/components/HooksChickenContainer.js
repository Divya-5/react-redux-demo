import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyChicken } from '../redux';

const HooksChickenContainer = () => {
    const numOfChickens =useSelector(state => state.chicken.numOfChickens)
    const dispatch = useDispatch();
    return (
        <div>
             <h2>Number of Hook Chickens - {numOfChickens}</h2>
            <button  onClick={()=> dispatch(buyChicken())}>Buy Chickens</button>
        </div>
    )
}

export default HooksChickenContainer
