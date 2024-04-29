import "./App.css";
import {Routes,Route} from 'react-router-dom'
import AddReciepe from "./Components/AddReciepe";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import ViewReciepe from "./Components/ViewReciepe";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/view/:id" element={<ViewReciepe />} />
        <Route path="/add" element={<AddReciepe />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
