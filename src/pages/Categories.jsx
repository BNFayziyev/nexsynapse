export function Categories() {
  const categories = ["Kameralar", "O‘rnatish xizmatlari"];
  return (
    <div className="p-4">
      <input type="text" placeholder="Qidiruv..." className="w-full p-2 border rounded mb-4" />
      <h2 className="text-lg font-semibold mb-2">Kategoriyalar</h2>
      <ul className="space-y-2">
        {categories.map((cat, idx) => (
          <li key={idx} className="p-3 border rounded bg-white">{cat}</li>
        ))}
      </ul>
    </div>
  );
}
