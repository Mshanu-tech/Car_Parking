import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';
import css from './plot.module.css'
import Nav from '../../../share/nav/Nav'
import Image from 'react-bootstrap/Image';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { getPlots } from '../../../service/ownerApi';
import { useNavigate } from 'react-router-dom';
// import { fetchImageURLs } from '../../../images/downloadIamge';
import { Link } from 'react-router-dom';
// import Plot from './Plot/Plot';


const Plots: React.FC = () => {

  const [Data, setData] = useState([])
  const [imageURLs, setImageURLs] = useState<string[]>([]);

  useEffect(() => {

    // fetchImageURLs('img/')
    //   .then((urls) => {
    //     setImageURLs(urls);
    //   })
    //   .catch((error) => {
    //     console.error('Error fetching image URLs:', error);
    //   });

    getPlots()
      .then((res) => {
        if (res.data === 'fail') {
          alert('Data not get');
        } else {
          var plotData = res.data.data.plots;
          // console.log(plotData);
          setData(plotData);
        }
      });
  }, [])


  const navigate = useNavigate()
  const HandleSearch = () => {

  }
  const AddPlot = () => {
    navigate(`plotform`)
  }
  // const handleplot = (id:any) => {
  //   console.log("pass id",id);
    // Plot(e)
  //   navigate(`plot${id}`)
  // }
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
        {Data.map((plot: any, index: number) => (
          <Link to={`plot/${plot._id}`} key={index} className={`card ${css.responsiveCard}`} style={{ marginTop: '35px' }}>
            <Image
              // src={imageURLs[index]?.url}
              style={{ width: '34%' }}
              rounded
            />
            <div style={{ padding: '10px' }} className="cardname">
              <h6>Name: {plot.placename}</h6>
              <h6>hour: {plot.hour}</h6>
              <h6>day: {plot.day}</h6>
            </div>
          </Link>
        ))}
      </div>
        </div>
      </div>
    </>
  )
}

export default Plots