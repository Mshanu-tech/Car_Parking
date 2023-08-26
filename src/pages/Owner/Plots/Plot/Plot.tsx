import { useNavigate, useParams } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import { editPlot, getPlot } from '../../../../service/ownerApi';
import Nav from '../../../../share/nav/Nav';
import Btn from '../../../../components/button/Btn';
import  { useEffect, useState } from 'react';
import EditForm from '../../../../components/Modals/EditFormModal';
// import { fetchImageURLs } from '../../../../images/downloadIamge';

const Plot = ()=> {
  
  const [Data, setData] = useState({});
  const navigate = useNavigate()
  const [imageURLs, setImageURLs] = useState<string[]>([]);
  const { id } = useParams<{ id: string }>();

  const updateData = (updatedData:any) => {
    setData(updatedData);
    console.log(Data);
    editPlot(updatedData)
  };
  

  useEffect(() => {
    getPlot(id)
      .then((res) => {
        if (res.data === 'fail') {
          alert('Data not get');
        } else {
          var plotData = res.data;
          console.log("Data get");
          // console.log(plotData);
          setData(plotData);
        }
      });


    // fetchImageURLs('img/')
    //   .then((url) => {
    //     setImageURLs(url);
    //   })
    //   .catch((error) => {
    //     console.error('Error fetching image URLs:', error);
    //   });
  }, []);

  // const url = imageURLs.find((image) => image.name === Data.images);
  // console.log(url);


  const handleDelete = () => {

  }
  // console.log(Data);


  return (
    <>
      <Nav />
      <div className="container">
        <div className='row'>
          <div style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
            <Col style={{ display: "contents" }} xs={6} md={4}>
              <Image
                style={{ width: "40%" }}
                // src={url.url}F
                rounded
              />
            </Col>
            <div style={{ color: "black", display: "contents" }}>
              <div style={{ display: "flex" }}>
                <div style={{ margin: "20px" }}>
                <EditForm Data={Data} updateData={updateData} btnName='EDIT' btnColor='outline-success' />

                </div>
                <div style={{ margin: "20px" }}>
                  <Btn buttonhandler={handleDelete} Btnname='DELETE' color='outline-danger' />
                </div>
              </div>
              <h5 style={{ fontWeight: "bold" }}>Center Name : {Data.center}</h5>
              <h5 style={{ fontWeight: "bold" }}>Place Name : {Data.placename} </h5>
              <table>
                <thead>
                  <tr>
                    <th>Hour</th>
                    <th>Day</th>
                    <th>Month</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>2</td>
                    <td>45</td>
                  </tr>
                </tbody>
              </table>

              <p> {Data.plotdetails} </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Plot;
