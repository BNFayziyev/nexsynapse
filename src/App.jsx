// webapp/src/App.jsx
import { useState } from "react";
import { Home } from "./pages/Home";
import { Categories } from "./pages/Categories";
import { Cart } from "./pages/Cart";
import { Profile } from "./pages/Profile";
import { BottomNav } from "./components/BottomNav";

export default function App() {
  const [tab, setTab] = useState("home");

  return (
    <div className="min-h-screen bg-gray-100">
      {tab === "home" && <Home />}
      {tab === "categories" && <Categories />}
      {tab === "cart" && <Cart />}
      {tab === "profile" && <Profile />}

      <BottomNav tab={tab} setTab={setTab} />
    </div>
  );
}
