import { SUBMIT_FEEDBACK, SUBMIT_FEEDBACK_SUCCESS, SUBMIT_FEEDBACK_FAILURE } from "../actions/feedbackActions"

const initialState = {
  feedbacks: [],
  loading: false,
  error: null,
  lastSubmitted: null,
}

const feedbackReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUBMIT_FEEDBACK:
      return {
        ...state,
        loading: true,
        error: null,
      }

    case SUBMIT_FEEDBACK_SUCCESS:
      return {
        ...state,
        loading: false,
        feedbacks: [...state.feedbacks, action.payload],
        lastSubmitted: action.payload,
      }

    case SUBMIT_FEEDBACK_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }

    default:
      return state
  }
}

export default feedbackReducer
