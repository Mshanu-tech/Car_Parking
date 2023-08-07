import React from 'react'
import Form from 'react-bootstrap/Form';
import css from './plot.module.css'
import Nav from '../../../share/nav/Nav'
import Image from 'react-bootstrap/Image';
import { useNavigate } from 'react-router-dom';

// type Props = {}

const Plot: React.FC = () => {
  const navigate = useNavigate()
  const HandleSearch = () => {

  }
  const handleplot = () =>{
    navigate('plot')
  }
  return (
    <>
      <div className={css.plot_image}>
        <Nav />
        <div className={`row ${css.search}`}>
          <Form.Control className={css.search_input}
            aria-label="Example text with button addon"
            aria-describedby="basic-addon1"
            placeholder='Search'
          />
          <button onClick={HandleSearch} className={css.search_button}><i style={{ paddingTop: "7px" }} className='bx bx-search bx-sm'></i></button>
          <div className='' style={{ display: "flex", flexWrap: "wrap" }}>
                        <div onClick={handleplot} className={`card ${css.responsiveCard}`} style={{ marginTop: "35px" }}>
                            <Image
                                style={{ width: "34%" }}
                                src="https://previews.123rf.com/images/nonc/nonc1701/nonc170100030/70250300-empty-parking-lots-aerial-view.jpg"
                                rounded
                            />
                            <div style={{ padding: "10px" }} className="cardname">
                                <h6>Name: Ajith</h6>
                                <h6>Phone: 9898539845</h6>
                                <h6>Email: ajith123@gmail.com</h6>
                            </div>
                        </div>
                        <div className={`card ${css.responsiveCard}`} style={{ marginTop: "35px" }}>
                            <Image
                                style={{ width: "34%" }}
                                src="https://st2.depositphotos.com/7149852/43935/i/600/depositphotos_439359610-stock-photo-top-aerial-view-many-cars.jpg"
                                rounded
                            />
                            <div style={{ padding: "10px" }} className="cardname">
                                <h6>Name: Ajith</h6>
                                <h6>Phone: 9898539845</h6>
                                <h6>Email: ajith123@gmail.com</h6>
                            </div>
                        </div>
                    </div>
                    <div className='' style={{ display: "flex", flexWrap: "wrap" }}>
                        <div  className={`card ${css.responsiveCard}`} style={{ marginTop: "35px" }}>
                            <Image
                                style={{ width: "34%" }}
                                src="https://previews.123rf.com/images/nonc/nonc1701/nonc170100030/70250300-empty-parking-lots-aerial-view.jpg"
                                rounded
                            />
                            <div style={{ padding: "10px" }} className="cardname">
                                <h6>Name: Ajith</h6>
                                <h6>Phone: 9898539845</h6>
                                <h6>Email: ajith123@gmail.com</h6>
                            </div>
                        </div>
                        <div className={`card ${css.responsiveCard}`} style={{ marginTop: "35px" }}>
                            <Image
                                style={{ width: "34%" }}
                                src="https://st2.depositphotos.com/7149852/43935/i/600/depositphotos_439359610-stock-photo-top-aerial-view-many-cars.jpg"
                                rounded
                            />
                            <div style={{ padding: "10px" }} className="cardname">
                                <h6>Name: Ajith</h6>
                                <h6>Phone: 9898539845</h6>
                                <h6>Email: ajith123@gmail.com</h6>
                            </div>
                        </div>
                    </div>
                    
        </div>
      </div>
    </>
  )
}

export default Plot