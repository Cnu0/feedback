"use client"

import { useState } from "react"
import { useDispatch } from "react-redux"
import { submitFeedback } from "../redux/actions/feedbackActions"
import { FaStar } from "react-icons/fa"

const FeedbackFooter = () => {
  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)
  const [comment, setComment] = useState("")
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()

    // Create feedback object based on the database schema
    const feedback = {
      // user_id and lounge_id would come from auth context or props in a real app
      rating: rating,
      comment: comment,
      added_at: new Date().toISOString().split("T")[0], // Current date in YYYY-MM-DD format
      responded: false,
    }

    dispatch(submitFeedback(feedback))

    // Reset form
    setRating(0)
    setComment("")
  }

  return (
    <footer className="bg-dark text-light py-4 mt-auto">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card bg-dark border-secondary">
              <div className="card-body">
                <h5 className="card-title text-center mb-4">Share Your Feedback</h5>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3 text-center">
                    <div className="d-flex justify-content-center mb-2">
                      {[...Array(5)].map((star, index) => {
                        const ratingValue = index + 1

                        return (
                          <label key={index} className="mx-1">
                            <input
                              type="radio"
                              name="rating"
                              className="d-none"
                              value={ratingValue}
                              onClick={() => setRating(ratingValue)}
                            />
                            <FaStar
                              className="star"
                              color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                              size={30}
                              onMouseEnter={() => setHover(ratingValue)}
                              onMouseLeave={() => setHover(0)}
                              style={{ cursor: "pointer" }}
                            />
                          </label>
                        )
                      })}
                    </div>
                    <small className="text-muted">Select your rating</small>
                  </div>

                  <div className="mb-3">
                    <textarea
                      className="form-control bg-dark text-light border-secondary"
                      placeholder="Share your thoughts with us..."
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      rows="3"
                    ></textarea>
                  </div>

                  <div className="d-grid">
                    <button type="submit" className="btn btn-primary" disabled={rating === 0}>
                      Submit Feedback
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default FeedbackFooter
