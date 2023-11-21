import React from 'react'
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Nav from '../../../../share/nav/Nav'
import Btn from '../../../../components/button/Btn';

type Props = {}

const Plot: React.FC = (props: Props) => {
    return (
        <>
            <Nav />
            <div className="container">
                <div className='row'>
                    <div style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
                        <Col style={{ display: "contents" }} xs={6} md={4}>
                            <Image
                                style={{ width: "40%" }}
                                src="https://st2.depositphotos.com/7149852/43935/i/600/depositphotos_439359610-stock-photo-top-aerial-view-many-cars.jpg"
                                rounded
                            />
                        </Col>
                        <div style={{ color: "black", display: "contents"}}>
                            <div style={{display:"flex"}}>
                            <div style={{margin:"20px"}}>
                                <Btn Btnname='EDIT' color='outline-success'/>
                                </div>
                                <div style={{margin:"20px"}}>
                                <Btn Btnname='DELETE' color='outline-danger'/>
                                </div>
                                </div>
                            <h5 style={{ fontWeight:"bold"}}>MAVOOR</h5>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Plot