import React from 'react'
import plot from './search.module.css'
import Form from 'react-bootstrap/Form';

interface Props {
  searchAction: any
}

const Search: React.FC<Props> = ({ searchAction }) => {
  return (
    <>
      <div className={`row ${plot.search}`}>
        <Form.Control className={plot.search_input}
          aria-label="Example text with button addon"
          aria-describedby="basic-addon1"
          placeholder='Search'
        />
        <button onClick={searchAction} className={plot.search_button}><i style={{ paddingTop: "7px" }} className='bx bx-search bx-sm'></i></button>
      </div>
    </>
  )
}

export default Search