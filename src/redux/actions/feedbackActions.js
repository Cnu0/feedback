// Action Types
export const SUBMIT_FEEDBACK = "SUBMIT_FEEDBACK"
export const SUBMIT_FEEDBACK_SUCCESS = "SUBMIT_FEEDBACK_SUCCESS"
export const SUBMIT_FEEDBACK_FAILURE = "SUBMIT_FEEDBACK_FAILURE"

// Action Creators
export const submitFeedback = (feedback) => {
  return {
    type: SUBMIT_FEEDBACK,
    payload: feedback,
  }
}

export const submitFeedbackSuccess = () => {
  return {
    type: SUBMIT_FEEDBACK_SUCCESS,
  }
}

export const submitFeedbackFailure = (error) => {
  return {
    type: SUBMIT_FEEDBACK_FAILURE,
    payload: error,
  }
}
