import { useState } from "react";

const NotesChecklist = () => {
  const [notes, setNotes] = useState("");
  const [items, setItems] = useState([
    { text: "Passport / ID", checked: false },
    { text: "Travel Tickets", checked: false },
    { text: "Local Currency", checked: false },
    { text: "Mobile Charger", checked: false },
    { text: "Toiletries", checked: false },
  ]);
  const [newItem, setNewItem] = useState("");

  const toggleChecked = (index) => {
    const updatedItems = [...items];
    updatedItems[index].checked = !updatedItems[index].checked;
    setItems(updatedItems);
  };

  const addNewItem = () => {
    if (newItem.trim() === "") return;
    setItems([...items, { text: newItem, checked: false }]);
    setNewItem("");
  };

  return (
    <div className="bg-white p-4 rounded-2xl shadow-md">
      <h2 className="text-xl font-bold mb-4 text-gray-700">📝 Travel Notes</h2>
      <textarea
        placeholder="Write important notes here (e.g., local phrases, emergency contacts)..."
        className="w-full p-3 border border-gray-300 rounded-lg mb-6 resize-none h-32 focus:outline-none focus:ring-2 focus:ring-blue-400"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      />

      <h2 className="text-xl font-bold mb-4 text-gray-700">✅ Packing Checklist</h2>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            <input
              type="checkbox"
              checked={item.checked}
              onChange={() => toggleChecked(index)}
              className="mr-2"
            />
            <span className={item.checked ? "line-through text-gray-500" : ""}>
              {item.text}
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-4 flex items-center">
        <input
          type="text"
          placeholder="Add custom item..."
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          className="p-2 border border-gray-300 rounded-l-lg flex-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={addNewItem}
          className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600 transition"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default NotesChecklist;
