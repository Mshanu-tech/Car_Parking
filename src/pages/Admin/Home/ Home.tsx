import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import LogoutIcon from '@mui/icons-material/Logout';
import EditIcon from '@mui/icons-material/Edit';
import Image from 'react-bootstrap/Image';
// import Btn from '../../../components/button/Btn'
import Offcanvas from 'react-bootstrap/Offcanvas';
import Carousel from 'react-bootstrap/Carousel';
import Nav from '../../../share/nav/Nav'
// import Card from '../../../share/card/Card';
import style from './home.module.css'
import { useNavigate } from 'react-router-dom';
import { Plots, owners, users } from '../../../service/adminApi';
import { fetchImageURLs } from '../../../images/downloadIamge';

// type Props = {}

const Home: React.FC = () => {

    const [PlotData, setPlotData] = useState([])
    const [PlotimageURLs, setPlotImageURLs] = useState<string[]>([]);

    const [UserData, setUserData] = useState([])
    const [UserimageURLs, setUserImageURLs] = useState<string[]>([]);

    const [OwnerData, setOwnerData] = useState([])
    const [OwnerimageURLs, setOwnerImageURLs] = useState<string[]>([]);

    console.log("plot", PlotData);
    console.log("user", UserData);
    console.log("owner", OwnerData);
    console.log("ownerPhoto", OwnerimageURLs);
    console.log("userPhoto", UserimageURLs);
    console.log("plotPhoto", PlotimageURLs);

    // console.log(OwnerimageURLs);


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

    useEffect(() => {

        //user

        users().then((res) => {
            if (res.data === "fail") {
                alert("Not Data fetched")
            } else {
                const data = res.data.data.user
                setUserData(data)
            }
        });

        fetchImageURLs('user/')
            .then((urls) => {
                setUserImageURLs(urls)
            })
            .catch((error) => {
                console.error('Error fetching image URLs:', error);
            })

        //user

        //owner

        owners().then((res) => {
            if (res.data === "fail") {
                alert("Not Data fetched")
            } else {
                const data = res.data.data.owner
                setOwnerData(data)
            }
        });

        fetchImageURLs('owner/')
            .then((urls) => {
                setOwnerImageURLs(urls)
            })
            .catch((error) => {
                console.error('Error fetching image URLs:', error);
            })

        //owner

        //plot

        Plots().then((res) => {
            if (res.data === "fail") {
                alert("Not Data fetched")
            } else {
                const data = res.data.data.plot
                setPlotData(data)
            }
        });

        fetchImageURLs('plot/')
            .then((urls) => {
                setPlotImageURLs(urls)
            })
            .catch((error) => {
                console.error('Error fetching image URLs:', error);
            })

        //plot

    }, [])

    return (
        <>
            <Nav BtnAction={"admin/login"} />
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

                        {/* owner */}

                        <div className={style.adminBTN}>
                            <button className={style.BTN} onClick={handleShow}>Profile</button>
                            {/* <Btn color='outline-success' Btnname='Profile' buttonhandler={handleShow}/> */}
                        </div>
                        <div className={style.owners}>
                            <h5 className={style.sub_heading}>OWNERS</h5>
                            <Carousel>
                                {OwnerData.map((owner: any, index: number) => (
                                    <Carousel.Item key={index}>
                                        <div className={style.align_card}>
                                            <div onClick={handleowner} className={`card ${style.responsiveCard}`}>
                                                <Image
                                                    className={style.image}
                                                    // src={image}
                                                    rounded
                                                />
                                                <div className={style.cardname}>
                                                    <h6>Name: {owner.name}</h6>
                                                    <h6>Phone: {owner.phone}</h6>
                                                    <h6>Email: {owner.email} </h6>
                                                </div>
                                            </div>

                                            {/* Add another card with different data */}
                                            {/* {OwnerData[index + 2] && (
                                                <div className={`card ${style.responsiveCard}`}>
                                                    <Image
                                                        className={style.image}
                                                        // src={image}
                                                        rounded
                                                    />
                                                    <div className={style.cardname}>
                                                        <h6>Name: {OwnerData[index + 2].name}</h6>
                                                        <h6>Phone: {OwnerData[index + 2].phone}</h6>
                                                        <h6>Email: {OwnerData[index + 2].email} </h6>
                                                    </div>
                                                </div>
                                            )} */}
                                        </div>
                                    </Carousel.Item>
                                ))}
                            </Carousel>
                        </div>



                        {/* owner */}

                        {/* plot */}


                        <div className={style.plots}>
                            <h5 className={style.sub_heading}>PLOTS</h5>
                            <Carousel>
                                {UserData.map((user: any, index: number) => (

                                    <Carousel.Item>
                                        <div className={style.align_card}>

                                            <div onClick={handleplot} className={`card ${style.responsiveCard}`}>
                                                <Image
                                                    className={style.image}
                                                    // src={image}
                                                    rounded
                                                />
                                                <div className={style.cardname}>
                                                    <h6>Name: {user.name}</h6>
                                                    <h6>Phone: {user.phone}</h6>
                                                    <h6>Email: {user.email} </h6>
                                                </div>
                                            </div>
                                        </div>

                                        {/* <div className={style.align_card}>
                                            <Card cardAction={handleplot} image='https://cdn.vox-cdn.com/thumbor/3mMZTWZXU6__FF97jacasmWc7nw=/125x0:3875x2500/1200x800/filters:focal(125x0:3875x2500)/cdn.vox-cdn.com/uploads/chorus_image/image/48822937/Bumblebee_in_transformers_4_age_of_extinction-wide__1_.0.0.jpg' />
                                            <Card cardAction={handleplot} image='https://cdn.vox-cdn.com/thumbor/3mMZTWZXU6__FF97jacasmWc7nw=/125x0:3875x2500/1200x800/filters:focal(125x0:3875x2500)/cdn.vox-cdn.com/uploads/chorus_image/image/48822937/Bumblebee_in_transformers_4_age_of_extinction-wide__1_.0.0.jpg' />
                                        </div> */}
                                    </Carousel.Item>
                                ))}

                            </Carousel>
                        </div>

                        {/* plot */}

                        {/* user */}

                        <div className={style.users}>
                            <h5 className={style.sub_heading}>USERS</h5>
                            <Carousel>
                                {UserData.map((user: any, index: number) => (

                                    <Carousel.Item>
                                        <div className={style.align_card}>

                                            <div onClick={handleuser} className={`card ${style.responsiveCard}`}>
                                                <Image
                                                    className={style.image}
                                                    // src={image}
                                                    rounded
                                                />
                                                <div className={style.cardname}>
                                                    <h6>Name: {user.name}</h6>
                                                    <h6>Phone: {user.phone}</h6>
                                                    <h6>Email: {user.email} </h6>
                                                </div>
                                            </div>
                                        </div>

                                        {/* <div className={style.align_card}>
                                            <Card cardAction={handleuser} image='https://cdn.vox-cdn.com/thumbor/3mMZTWZXU6__FF97jacasmWc7nw=/125x0:3875x2500/1200x800/filters:focal(125x0:3875x2500)/cdn.vox-cdn.com/uploads/chorus_image/image/48822937/Bumblebee_in_transformers_4_age_of_extinction-wide__1_.0.0.jpg' />
                                            <Card cardAction={handleuser} image='https://cdn.vox-cdn.com/thumbor/3mMZTWZXU6__FF97jacasmWc7nw=/125x0:3875x2500/1200x800/filters:focal(125x0:3875x2500)/cdn.vox-cdn.com/uploads/chorus_image/image/48822937/Bumblebee_in_transformers_4_age_of_extinction-wide__1_.0.0.jpg' />
                                        </div> */}
                                    </Carousel.Item>
                                ))}

                            </Carousel>
                        </div>

                        {/* user */}

                    </div>
                </div>
            </div>
        </>
    )
}

export default Home