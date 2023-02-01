import "./index.css";
import { Outlet } from "react-router-dom";
import { Header } from "./Components/Header/Header";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Outlet />
      </div>
    </div>
  );
}

export default App;
