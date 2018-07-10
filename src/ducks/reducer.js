let initialState = {
    username: '',
    id: 0,
    profilePicture: '',
};

const UPDATE_USER = 'UPDATE_USER'

export default function reducer(state = initialState, action) {
    switch(action.type){
        case UPDATE_USER:
        return Object.assign({}, state, {
            username: action.payload.username,
            id: action.payload.id,
            profilePicture: action.payload.profilePicture
        })
        default: 
            return state
    }

}

export function updateUser(id, username, profilePicture){
    return {
        type: UPDATE_USER,
        payload: {
            id: id,
            username: username,
            profilePicture: profilePicture
        }
    }
}