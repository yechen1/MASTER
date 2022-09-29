

const initState={value:'默认值'}

const rootreducer = (state=initState,action) => {
    console.log(state,action)
    switch(action.type){
        case 'send_type':
            return Object.assign({},state,action);
        default: 
            return state;
    }
}

export {rootreducer};