import { IS_ERROR_APP } from '../Types'

const initialState = {
  isError: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case IS_ERROR_APP:
      return {
        ...state,
        isError: action.payload
      }
    default:
      return initialState
  }
}
