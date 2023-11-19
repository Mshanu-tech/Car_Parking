import React, { useState } from 'react'
import plot from './search.module.css'
import Form from 'react-bootstrap/Form';

interface Props {
  searchAction: (query: string) => void; 
  value: string; 
}

const Search: React.FC<Props> = ({ searchAction, value }) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    searchAction(inputValue);
  };

  return (
    <>
      <div className={`row ${plot.search}`}>
        <Form.Control
          className={plot.search_input}
          aria-label="Example text with button addon"
          aria-describedby="basic-addon1"
          placeholder='Search'
          value={value} // Use value prop to bind the input value
          onChange={handleInputChange} // Use handleInputChange for input change
        />
        <button onClick={() => searchAction(value)} className={plot.search_button}>
          <i style={{ paddingTop: "7px" }} className='bx bx-search bx-sm'></i>
        </button>
      </div>
    </>
  );
};

export default Search