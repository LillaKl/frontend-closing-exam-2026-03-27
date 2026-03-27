import { useState, useEffect } from "react";

export default function App() {
  const [cats, setCats] = useState([]);
  const [filter, setFilter] = useState([]);
  const [input, setInput] = useState([]);
  
  useEffect(() => {
    fetch("/api/cats")
    .then(response => response.json())
    .then(data => {
      setCats(data);
      setFilter(data)
    });
  }, []);
  
  const handleFilter = () => {
    if (input === "") {
      setFiltered(cats);
      return;
    }
    const result = cats.filter(cat =>
      cat.name.includes(input) ||
      cat.age === Number(input) ||
      cat.gender.includes(input) ||
      cat.color.includes(input)
    );
    setFiltered(result);
  };
  
  const handleDelete = (id) => {
    setFiltered(prev => prev.filter(cat => cat.id !== id));
  };
}