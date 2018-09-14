import {createStore} from 'redux';


//Reducer
//Caratteristiche:
//1. Reducers are pure functions (indipendent off the scope)
//2. Never change state or action

const countReducer = (state = {count: 0}, action) => {
    switch (action.type) {
        case 'INCREMENT': 
            return {
                count: state.count + action.operationValue
            };

        case 'DECREMENT':
            return {
                count: state.count - action.operationValue
            };

        case 'RESET':
            return {
                count: 0
            }

        case 'SET':
            return {
                count: action.operationValue
            }
        
        default: 
            return state;
    };
};

const store = createStore(countReducer);

const incrementCount = ({operationValue = 1} = {}) => ({
    type: 'INCREMENT',
    operationValue
});

const decrementCount = ({operationValue = 1} = {}) => ({
    type: 'DECREMENT',
    operationValue
});

const resetCount = () => ({
    type: 'RESET'
});

const setCount = ({operationValue} = {}) => ({
    type: 'SET',
    operationValue
});

store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(incrementCount({operationValue: 5}));

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({operationValue: 10}));

store.dispatch(setCount({operationValue: 101}));