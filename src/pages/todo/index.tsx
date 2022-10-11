import React, { useState, useEffect } from 'react';

interface IItems {
  name: string;
}

function Todo() {
  const [name, setName] = useState<string>('');
  const [items, setItems] = useState<IItems[]>(() => {
    const json = window.localStorage.getItem('@todos');
    if (json) {
      return JSON.parse(json);
    }
    return [];
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && name.length > 0) {
      setItems([...items, { name }]);
      setName('');
    }
  };

  const handleRemoveItem = (index: number) => {
    let newItem = [...items];
    newItem.splice(index, 1);
    setItems(newItem);
  };

  useEffect(() => {
    window.localStorage.setItem('@todos', JSON.stringify(items));
  }, [items]);

  return (
    <>
      <h6 className="mt-2 mb-2 border-bottom">Todos</h6>
      <div className="mt-2 mb-2">
        <form onSubmit={handleSubmit}>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control form-control-sm" autoFocus />
        </form>
      </div>
      <div>
        <div className="text-end">
          <small className="me-1 text-primary">
            {items ? items.length : 0} {items && items.length > 0 ? 'items' : 'item'}
          </small>
        </div>
        <ul className="list-group">
          {items &&
            items.map((i, k) => (
              <li className="list-group-item" key={k}>
                {i.name}{' '}
                <button className="btn btn-danger btn-sm" onClick={(e) => handleRemoveItem(k)}>
                  Remover
                </button>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
}

export default Todo;
