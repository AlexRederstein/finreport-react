import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/master/header";
import Sidebar from "./components/master/sidebar";
import WebRoutes from "./components/routes/WebRoutes";
import Registration from "./components/auth/registration";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="content">
        <Sidebar />
        <main>
          <WebRoutes />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
