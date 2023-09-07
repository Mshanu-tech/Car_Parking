import React, { useEffect, useState } from 'react';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import { deletePlot, editPlot, getPlot } from '../../../../service/ownerApi';
import Nav from '../../../../share/nav/Nav';
import EditForm from '../../../../components/Modals/EditFormModal';
import { fetchImageURLs } from '../../../../images/downloadIamge';
import { useNavigate, useParams } from 'react-router-dom';
import DeleteImage from '../../../../images/deleteImage';

const Plot: React.FC = () => {
  const [Data, setData] = useState({});
  const navigator = useNavigate()
  const [imageURLs, setImageURLs] = useState<string[]>([]);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    getPlot(id)
      .then((res) => {
        if (res.data === 'fail') {
          alert('Data not get');
        } else {
          var plotData = res.data;
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
  }, [id]);

  const image = imageURLs.find((img) => img.name === Data.images);

  const handleDelete = () => {
    deletePlot(id)
      .then((res) => {
        if (res.data === 'deleted') {
          navigator('/owner/plots')
        } else {
          alert('Plot not deleted');
        }
      });
  };

  const updateData = (updatedData: any) => {
    setData(updatedData);
    console.log(updatedData);
    editPlot(updatedData)
  };

  return (
    <>
      <Nav />
      <div className="container">
        <div className='row'>
          <div style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
            <Col style={{ display: "contents" }} xs={6} md={4}>
              <Image
                style={{ width: "40%" }}
                src={image?.url}
                rounded
              />
            </Col>
            <div style={{ color: "black", display: "contents" }}>
              <div style={{ display: "flex" }}>
                <div style={{ margin: "20px" }}>
                  <EditForm Data={Data} updateData={updateData} btnName='EDIT' btnColor='outline-success' />
                </div>
                <div style={{ margin: "20px" }}>
                  <DeleteImage imagePath={`img/${Data.images}`} onDeleteSuccess={handleDelete} />
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
                    <td> {Data.hour} </td>
                    <td>{Data.day}</td>
                    <td>{Data.month}</td>
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
