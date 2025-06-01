import { Provider } from "react-redux"
import store from "./redux/store"
import FeedbackFooter from "./components/feedback-footer"
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <Provider store={store}>
      <div className="d-flex flex-column min-vh-100">
        {/* Your main content would go here */}
        <main className="flex-grow-1">
          <div className="container py-5">
            <h1>Main Content Area</h1>
            <p>Your website content would appear here.</p>
          </div>
        </main>

        {/* Feedback footer at the bottom */}
        <FeedbackFooter />
      </div>
    </Provider>
  )
}

export default App
