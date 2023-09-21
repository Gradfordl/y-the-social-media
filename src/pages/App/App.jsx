import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom"
import NewOrderPage from "../NewOrderPage/NewOrderPage.jsx"
import AuthPage from "../AuthPage/AuthPage.jsx";
import OrderHistoryPage from "../OrderHistoryPage/OrderHistoryPage.jsx";
import NavBar from "../../components/NavBar/NavBar.jsx";
import { getUser } from "../../utilities/users-service";

function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      {
        user ? 
        <>
        {/* import NavBar outside of Routes because it'll always display */}
        <NavBar user={user} setUser={setUser} />
        {/* Because App defines all routes we import & use Route Component */}
        <Routes>
          //define the route to the desired Component
          <Route path="/orders/new" element={<NewOrderPage />} />
          <Route path="/orders" element={<OrderHistoryPage />} />
        </Routes>
        </>
        :
        <AuthPage setUser={setUser}/>
      }
    </main>
  );
}

export default App;
