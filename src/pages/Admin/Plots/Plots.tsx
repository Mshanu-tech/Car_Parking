import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';
import css from './plot.module.css'
import Nav from '../../../share/nav/Nav'
import Image from 'react-bootstrap/Image';
// import Card from '../../../share/card/Card';
import { useNavigate } from 'react-router-dom';
// import { fetchImageURLs } from '../../../images/downloadIamge';
import { Plots } from '../../../service/adminApi';
import Search from '../../../components/search/Search';

// type Props = {}

const Plot: React.FC = () => {
    const [PlotsData, setPlotsData] = useState([])
    // const [imageURLs, setImageURLs] = useState<string[]>([]);
    const [filteredPlots, setFilteredPlots] = useState([]);
    const [query, setQuery] = useState('');

    console.log(filteredPlots);
    // console.log(imageURLs);
    
    
  const navigate = useNavigate()

  useEffect(()=>{
    Plots().then((res)=>{
        if (res.data === "fail") {
            alert("plot not get")
        }
        setPlotsData(res.data.data.plot)
        setFilteredPlots(res.data.data.plot)
    })

    //     fetchImageURLs('img/')
    //   .then((url) => {
    //     setImageURLs(url);
    //   })
    //   .catch((error) => {
    //     console.log('Error fetching image URLs:', error);
    //   });
  },[])

  useEffect(() => {
    const lowerCaseQuery = query.toLowerCase();
    const filtered = PlotsData.filter((plot) => {
        const plotData = plot.center.toLowerCase();
        return plotData.includes(lowerCaseQuery);
    });
    setFilteredPlots(filtered);
}, [query]);

  const handleSearch = (inputValue: string) => {
    setQuery(inputValue)
};
  const handleplot = (id:string) =>{
    navigate(`/admin/plots/${id}`)
  }
  return (
    <>
      <div className={css.plot_image}>
        <Nav />
        <div className='container-fluid'>
            <div>
                <Search value={query} searchAction={handleSearch}/>
            </div>
        <div className={`row ${css.search}`}>
          {/* <Form.Control className={css.search_input}
            aria-label="Example text with button addon"
            aria-describedby="basic-addon1"
            placeholder='Search'
            /> */}
          {/* <button  className={css.search_button}><i style={{ paddingTop: "7px" }} className='bx bx-search bx-sm'></i></button> */}
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

                        {
                            filteredPlots.map((plot:any, index:number)=>(
                                <div onClick={()=>handleplot(plot._id)} key={index} className={`card ${css.responsiveCard}`} style={{ marginTop: "35px" }}>
                           
                           {/* {imageURLs.map((image:string)=>{
                            if (image.name === plot.images) {
                                return(
                                <Image
                                style={{ width: "34%" }}
                                src={image.url}
                                rounded
                            />
                            ) }
                     
                             })} */}

                            <div style={{ padding: "10px" }} className="cardname">
                                <h6>Center: {plot.center}</h6>
                                <h6>Place: {plot.placename} </h6>
                                <h6>Details: {plot.plotdetails} </h6>
                            </div>
                        </div>
                            ))
                        }

                    </div>
                    {/* <div className='' style={{ display: "flex", flexWrap: "wrap" }}>
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
                    </div> */}
               </div>
        </div>
      </div>
    </>
  )
}

export default Plot