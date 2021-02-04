const initialState = {
    images: []
}

const rootReducer = (state = initialState, action) => {
    const newState = { ...state }
    switch (action.type) {
        case 'UPDATE_IMAGES':
            newState.images = action.images
            return newState

        default:
            return newState

    }
}

export default rootReducer