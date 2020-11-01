const initialState = {
    items : "cba"
}

const counterReducer = (state = initialState.items | undefined, action) => {
    if(action.items === undefined) {
        action.items = "abc";
        return action.items;
    }

    switch(action.type) {
        case "INCREMENT":
            return state;
        case "DECREMENT":
            return state;
    }
}

export default counterReducer;