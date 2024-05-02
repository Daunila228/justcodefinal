
import React, { useState } from "react";
import CardView from "./CardView";
import { Button } from "react-bootstrap";

const Cards = ({ items }) => {
  const [sortedItems, setSortedItems] = useState([...items]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = items.filter(item =>
      item.destination.toLowerCase().includes(term) ||
      item.price.toLowerCase().includes(term)
    );
    setSortedItems(filtered);
  };

  const sortByAscending = () => {
    const sorted = [...sortedItems].sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    setSortedItems(sorted);
  };

  const sortByDescending = () => {
    const sorted = [...sortedItems].sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
    setSortedItems(sorted);
  };

  return (
    <div className="bg-body-tertiary" style={{width: 2200}}>
      <div style={{marginLeft: 250, marginTop: 50, justifyContent: 'space-evenly'}}>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearch}
        />
        <Button style={{backgroundColor: 'rgb(221, 227, 255)', color: 'black', border:'1px solid black', marginLeft: 50}} onClick={sortByAscending}>Sort by Ascending</Button>
        <Button style={{marginLeft: 50, backgroundColor: 'rgb(221, 227, 255)', color: 'black', border:'1px solid black'}} onClick={sortByDescending}>Sort by Descending</Button>
      </div>
      <div
        className="bg-body-tertiary"
        style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: 'center', marginRight: 200 }}
      >
        {sortedItems.map((item, id) => (
          <CardView
            key={id}
            destination={item.destination}
            price={item.price}
            img={item.img}
          />
        ))}
      </div>
    </div>
  );
};

export default Cards;
