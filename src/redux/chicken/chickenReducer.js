import { BUY_CHICKEN } from './chickenTypes';

const initialState={
    numOfChickens:20
}

const chickenReducer = (state = initialState, action) => {
    switch(action.type){
        case BUY_CHICKEN: 
        return{//object destructing 
            ...state,//spread operator
            numOfChickens:state.numOfChickens-1
        }
      default: 
      return state;
    }
}

export default chickenReducer;