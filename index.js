

// import redux 
const {createStore}=require('redux')

const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'
const RESET = 'RESET'
const Increment_Counter_By_Value = 'Increment_Counter_By_Value'
const ADDUSER = 'ADDUSER'


const initialState = {
    users:['fardin tazbeed'],
    count:1
}

const counterIncrement = ()=>{
    return{
        type:INCREMENT
    }
}
const adduser = (user)=>{
    return{
        type:ADDUSER,
        payload:user
    }
}
const counterDecrement = ()=>{
    return{
        type:DECREMENT
    }
}
const resetCounter = ()=>{
    return{
        type:RESET
    }
}
const incrementCounterByValue = (value)=>{
    return{
        type:Increment_Counter_By_Value ,
        payload:value
    }
}


const CounterReducer = (state=initialState,action)=>{
    switch(action.type){
        case INCREMENT:
            return{
                ...state,
                count:state.count + 1
            }
        
        case DECREMENT:
            return{
                ...state,
                count:state.count - 1
            }
        case Increment_Counter_By_Value:
            return{
                ...state,
                count:state.count + action.payload
            }
        case RESET:
            return{
                ...state,
                count:0
            }
        case ADDUSER:
            return{
                users:[...state.users,action.payload],
                count:state.count + 1
            }
        default:state
        
    }
} 

// store 
const store = createStore(CounterReducer)
// subscribe 
store.subscribe(()=>{
    console.log(store.getState())
})
// dispatch
store.dispatch(adduser('rubel'))
store.dispatch(adduser('mobab'))
