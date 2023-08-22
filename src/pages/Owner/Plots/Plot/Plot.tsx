import { useParams } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import { getPlots } from '../../../../service/ownerApi';
import Nav from '../../../../share/nav/Nav';
// import Btn from '../../../../components/button/Btn';
import { useEffect, useState } from 'react';
import { fetchImageURLs } from '../../../../images/downloadIamge';

const Plot = () => {
  const [Data, setData] = useState([]);
  const [imageURLs, setImageURLs] = useState<string[]>([]);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    getPlots()
      .then((res) => {
        if (res.data === 'fail') {
          alert('Data not get');
        } else {
          var plotData = res.data.data.plots;
          setData(plotData);
        }
      });

    fetchImageURLs('img/')
      .then((url) => {
        setImageURLs(url);
      })
      .catch((error) => {
        console.error('Error fetching image URLs:', error);
      });
  }, []);
  
  const selectedPlot = Data.find((plot) => plot._id === id);
  const url = imageURLs.find((image) => image.name === selectedPlot.images);
  console.log(url);
  
  return (
    <>
      <Nav />
      <div className="container">
        <div className='row'>
          <div style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
            {selectedPlot ? (
              <>
                <Col style={{ display: "contents" }} xs={6} md={4}>
                  <Image
                    style={{ width: "40%" }}
                    src={url ? url.url : ''}
                    rounded
                  />
                </Col>
                <div style={{ color: "black", display: "contents" }}>
                  <div style={{ display: "flex" }}>
                    <div style={{ margin: "20px" }}>
                      {/* <Btn Btnname='EDIT' color='outline-success' /> */}
                    </div>
                    <div style={{ margin: "20px" }}>
                      {/* <Btn Btnname='DELETE' color='outline-danger' /> */}
                    </div>
                  </div>
                  <h5 style={{ fontWeight: "bold" }}>{selectedPlot.placename}</h5>
                </div>
              </>
            ) : (
              <p>No plot found with ID: {id}</p>
            )}

          </div>
        </div>
      </div>
    </>
  );
};

export default Plot;
