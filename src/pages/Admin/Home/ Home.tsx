import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import LogoutIcon from '@mui/icons-material/Logout';
import EditIcon from '@mui/icons-material/Edit';
import Image from 'react-bootstrap/Image';
// import Btn from '../../../components/button/Btn'
import Offcanvas from 'react-bootstrap/Offcanvas';
import Carousel from 'react-bootstrap/Carousel';
import Nav from '../../../share/nav/Nav'
import Card from '../../../share/card/Card';
import style from './home.module.css'
import { useNavigate } from 'react-router-dom';

// type Props = {}

const Home: React.FC = () => {

    const [show, setShow] = useState(false);
    const navigate = useNavigate()

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleowner = () => {
        navigate('owners')
    }
    const handleuser = () => {
        navigate('users')
    }
    const handleplot = () => {
        navigate('plots')
    }
    return (
        <>
            <Nav />
            <div className="container-fluid">
                <div className={`row ${style.main}`}>
                    <div className={style.leftside}>
                        <div className={style.profile}>
                            <div className={`${style.profileImage}`}>
                                <Image className={style.adminimage} src="https://www.balloonsunlimitedchennai.com/cdn/shop/products/1_6959ed8f-fc51-4123-8fa2-be72fad48146_1800x.jpg?v=1659462374" roundedCircle />
                            </div>
                            <Box width='100%' display='flex' justifyContent='space-evenly' paddingTop='20px'>
                                <Fab color="primary" aria-label="add">
                                    <EditIcon />
                                </Fab>
                                <Fab color="primary" aria-label="add">
                                    <LogoutIcon />
                                </Fab>
                            </Box>
                            <p className={style.profilename}>Ajith</p>
                            <p className={style.profilename}>98583982998</p>
                            <p className={style.profilename}>Ajith123@gmail.com</p>
                        </div>
                    </div>


                    <Offcanvas show={show} onHide={handleClose}>
                        <div className={style.profile}>
                            <div className={`${style.profileImage}`}>
                                <Image className={style.adminimage} src="https://www.balloonsunlimitedchennai.com/cdn/shop/products/1_6959ed8f-fc51-4123-8fa2-be72fad48146_1800x.jpg?v=1659462374" roundedCircle />
                            </div>
                            <Box width='100%' display='flex' justifyContent='space-evenly' paddingTop='20px'>
                                <Fab color="primary" aria-label="add">
                                    <EditIcon />
                                </Fab>
                                <Fab color="primary" aria-label="add">
                                    <LogoutIcon />
                                </Fab>
                            </Box>
                            <p className={style.profilename}>Ajith</p>
                            <p className={style.profilename}>98583982998</p>
                            <p className={style.profilename}>Ajith123@gmail.com</p>
                        </div>

                    </Offcanvas>



                    <div className={style.rightside}>
                        <div className={style.adminBTN}>
                            <button className={style.BTN} onClick={handleShow}>Profile</button>
                            {/* <Btn color='outline-success' Btnname='Profile' buttonhandler={handleShow}/> */}
                        </div>
                        <div className={style.owners}>
                            <h5 className={style.sub_heading}>OWNERS</h5>
                            <Carousel>
                                <Carousel.Item>
                                    <div className={style.align_card}>
                                        <Card cardAction={handleowner} image='https://www.balloonsunlimitedchennai.com/cdn/shop/products/1_6959ed8f-fc51-4123-8fa2-be72fad48146_1800x.jpg?v=1659462374'/>
                                        <Card cardAction={handleowner} image='https://www.balloonsunlimitedchennai.com/cdn/shop/products/1_6959ed8f-fc51-4123-8fa2-be72fad48146_1800x.jpg?v=1659462374'/>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className={style.align_card}>
                                    <Card cardAction={handleowner} image='https://www.balloonsunlimitedchennai.com/cdn/shop/products/1_6959ed8f-fc51-4123-8fa2-be72fad48146_1800x.jpg?v=1659462374'/>
                                    <Card cardAction={handleowner} image='https://www.balloonsunlimitedchennai.com/cdn/shop/products/1_6959ed8f-fc51-4123-8fa2-be72fad48146_1800x.jpg?v=1659462374'/>
                                    </div>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                        <div className={style.plots}>
                            <h5 className={style.sub_heading}>PLOTS</h5>
                            <Carousel>
                                <Carousel.Item>
                                    <div className={style.align_card}>
                                       <Card cardAction={handleplot} image='https://previews.123rf.com/images/nonc/nonc1701/nonc170100030/70250300-empty-parking-lots-aerial-view.jpg'/>
                                       <Card cardAction={handleplot} image='https://previews.123rf.com/images/nonc/nonc1701/nonc170100030/70250300-empty-parking-lots-aerial-view.jpg'/>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className={style.align_card}>
                                    <Card cardAction={handleplot} image='https://previews.123rf.com/images/nonc/nonc1701/nonc170100030/70250300-empty-parking-lots-aerial-view.jpg'/>
                                    <Card cardAction={handleplot} image='https://previews.123rf.com/images/nonc/nonc1701/nonc170100030/70250300-empty-parking-lots-aerial-view.jpg'/>
                                    </div>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                        <div className={style.users}>
                            <h5 className={style.sub_heading}>USERS</h5>
                            <Carousel>
                                <Carousel.Item>
                                    <div className={style.align_card}>
                                        <Card cardAction={handleuser}  image='https://cdn.vox-cdn.com/thumbor/3mMZTWZXU6__FF97jacasmWc7nw=/125x0:3875x2500/1200x800/filters:focal(125x0:3875x2500)/cdn.vox-cdn.com/uploads/chorus_image/image/48822937/Bumblebee_in_transformers_4_age_of_extinction-wide__1_.0.0.jpg'/>
                                        <Card cardAction={handleuser} image='https://cdn.vox-cdn.com/thumbor/3mMZTWZXU6__FF97jacasmWc7nw=/125x0:3875x2500/1200x800/filters:focal(125x0:3875x2500)/cdn.vox-cdn.com/uploads/chorus_image/image/48822937/Bumblebee_in_transformers_4_age_of_extinction-wide__1_.0.0.jpg'/>
                                    </div>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home