// webapp/src/components/BottomNav.jsx
export function BottomNav({ tab, setTab }) {
  return (
    <div className="fixed bottom-0 w-full bg-white shadow flex justify-around py-2 border-t">
      <button onClick={() => setTab("home")} className={tab === "home" ? "text-blue-500" : ""}>Home</button>
      <button onClick={() => setTab("categories")} className={tab === "categories" ? "text-blue-500" : ""}>Categories</button>
      <button onClick={() => setTab("cart")} className={tab === "cart" ? "text-blue-500" : ""}>Cart</button>
      <button onClick={() => setTab("profile")} className={tab === "profile" ? "text-blue-500" : ""}>Profile</button>
    </div>
  );
}
