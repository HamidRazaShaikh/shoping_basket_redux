import {increament, decreament} from './action';

const initialState = {

    counter : 0,
}

export default function CounterReducer ( state : any = initialState , action : any ) {



        switch (action.type){

            case increament: return { ...state, counter : state.counter + 1};

            case decreament: return { ...state, counter : state.counter - 1};



            default : 
            return state;
    
        }

        

    
};