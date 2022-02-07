import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Header from "./components/Header";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackState from "./components/FeedbackState";
import FeedbackList from "./components/FeedbackList";
import AboutIcon from "./components/AboutIcon";
import About from "./pages/About.js";
import BreadCrumb from "./components/shared/BreadCrumb";
import { FeedbackProvider } from "./contex/FeedbackContex";
function App() {

  return (


    <FeedbackProvider>
      <Router>
        <Header />
        <BreadCrumb />
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <FeedbackForm />
                  <FeedbackState />
                  <FeedbackList/>
                  <AboutIcon />
                </>
              }
            />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
