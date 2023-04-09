import React, { useState } from "react";
import { toast } from 'react-toastify'

const Form = ({addItem}) => {
  const [newItemName, setNewItemName] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItemName) {
      toast.error('Please add item');
      return;
    }
    addItem(newItemName);
    setNewItemName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>grocery bud</h4>
      <div className="form-control">
        <input
          className="form-input"
          onChange={(e) => {
            setNewItemName(e.target.value);
          }}
          value={newItemName}
          type="text"
          placeholder="notebook"
        />
        <button className="btn">Add item</button>
      </div>
    </form>
  );
};

export default Form;
