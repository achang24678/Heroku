// pure function
export default (state = {}, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {    //return new state
                uid: action.uid
            };
        case 'LOGOUT':
            return {};
        default:
            return state;        
    }
};