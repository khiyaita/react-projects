import { useState } from "react";
import Toastify from "./Toastify";
import "./GroceryBud.css";

function GroceryBud() {
  const [inpValue, setInpValue] = useState("");
  const [items, setItems] = useState([]);
  const [messages, setMessages] = useState([]);

  const handleAdd = (e) => {
    e.preventDefault();
    if (inpValue) {
      setItems([...items, { name: inpValue, isChecked: false }]);
      setInpValue("");
      setMessages([...messages, {text:"Item added to the list",type:"success"}]);
    } else {
      setMessages([...messages, {text:"Please provide a value",type:"error"}]);
    }
  };

  const handleChecked = (index) => {
    setItems(
      items.map((item, i) =>
        i === index ? { ...item, isChecked: !item.isChecked } : item
      )
    );
  };

  const handleDelete = (index) => {
    setItems(items.filter((_, i) => i !== index));
    setMessages([...messages, {text:"Item deleted",type:"success"}]);
  };

  return (
    <>
      <div className="Toastify">
        {messages.map((message, index) => (
          <Toastify key={index} text={message.text} type={message.type} />
        ))}
      </div>
      <div className="section-centeer">
        <form>
          <h4>grocery bud</h4>
          <div className="form-control">
            <input
              type="text"
              className="form-input"
              value={inpValue}
              onChange={(e) => setInpValue(e.target.value)}
            />
            <button type="submit" className="btn" onClick={handleAdd}>
              Add item
            </button>
          </div>
        </form>
        <div className="items">
          {items.map((item, index) => (
            <div className="single-item" key={index}>
              <input
                type="checkbox"
                checked={item.isChecked}
                onChange={() => handleChecked(index)}
              />
              <p style={{ textTransform: "capitalize" }}>
                {item.isChecked ? <s>{item.name}</s> : item.name}
              </p>
              <button
                className="btn remove-btn"
                type="button"
                onClick={() => handleDelete(index)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default GroceryBud;
