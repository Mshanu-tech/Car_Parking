import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';
import css from './plot.module.css'
import Nav from '../../../share/nav/Nav'
import Image from 'react-bootstrap/Image';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { getPlots} from '../../../service/ownerApi';
import { useNavigate } from 'react-router-dom';


const Plot: React.FC = () => {

  const[Data, setData]=useState([])

  useEffect(()=>{
    console.log("hello");
    
    getPlots()
    .then((res) => {
      if (res.data === 'fail') {
        alert('Data not get');
      } else {
        var plotData = res.data.data.plots;
        console.log(plotData);
        setData(plotData);
      }
    });
  },[])
  

  const navigate = useNavigate()
  const HandleSearch = () => {

  }
  const AddPlot = () => {
    console.log("sucess");
    navigate('plotform')
  }
  const handleplot = () => {
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
          <Box width='auto'>
            <Fab style={{ width: "50px", height: "50px" }} onClick={AddPlot} color="primary" aria-label="add">
              <AddIcon />
            </Fab>
          </Box>
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
            {Data.map((plot: any, index: number) => (
              <div
                key={index}
                className={`card ${css.responsiveCard}`}
                style={{ marginTop: '35px' }}
              >
                <Image
                  style={{ width: '34%' }}
                  rounded
                />
                <div style={{ padding: '10px' }} className="cardname">
                  <h6>Name: {plot.placename}</h6>
                  <h6>hour: {plot.hour}</h6>
                  <h6>day: {plot.day}</h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Plot