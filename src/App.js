import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import MovieDetail from "./Components/MovieDetail/MovieDetail";
import PageNotFound from "./Components/PageNotFound/PageNotFound";
import 'bootswatch/dist/slate/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/movie/:imdbID" component={<MovieDetail />} />
          <Route path="*"  element={<PageNotFound />} />
      
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
