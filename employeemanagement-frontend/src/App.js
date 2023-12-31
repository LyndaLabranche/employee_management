import AddEmployee from "./components/AddEmployee";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ListEmployee from "./components/ListEmployee";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header/>

      <div className="container">
        <Routes>
          <Route path="/" element={<ListEmployee/>}/>
          <Route path="/employee" element={<ListEmployee/>}/>
          <Route path="/add-employee" element={<AddEmployee/>}/>
          <Route path="/add-employee/:id" element={<AddEmployee/>}/>
        </Routes>
      </div>

      <Footer/>
    </BrowserRouter>
  );
}

export default App;
