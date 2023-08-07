import React from 'react'
import Image from 'react-bootstrap/Image';
import style from './user.module.css'
import Nav from '../../../share/nav/Nav'
import Search from '../../../components/search/Search'
import { useNavigate } from 'react-router-dom';

type Props = {}

const Users: React.FC = (props: Props) => {
    const navigate = useNavigate()

    const handleUser = (e:any) =>{
        e.preventDefault()
        navigate('user')
    }

    return (
        <>
            <Nav />
            <div className='container-fluid'>
                <div>
                    <Search />
                </div>
                <div>
                    <div className='' style={{ display: "flex", flexWrap: "wrap" }}>
                        <div onClick={handleUser} className={`card ${style.responsiveCard}`} style={{ marginTop: "35px" }}>
                            <Image
                                style={{ width: "32%" }}
                                src="https://www.balloonsunlimitedchennai.com/cdn/shop/products/1_6959ed8f-fc51-4123-8fa2-be72fad48146_1800x.jpg?v=1659462374"
                                rounded
                            />
                            <div style={{ padding: "10px" }} className="cardname">
                                <h6>Name: Ajith</h6>
                                <h6>Phone: 9898539845</h6>
                                <h6>Email: ajith123@gmail.com</h6>
                            </div>
                        </div>
                        <div className={`card ${style.responsiveCard}`} style={{ marginTop: "35px" }}>
                            <Image
                                style={{ width: "32%" }}
                                src="https://www.balloonsunlimitedchennai.com/cdn/shop/products/1_6959ed8f-fc51-4123-8fa2-be72fad48146_1800x.jpg?v=1659462374"
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
                        <div className={`card ${style.responsiveCard}`} style={{ marginTop: "35px" }}>
                            <Image
                                style={{ width: "32%" }}
                                src="https://www.balloonsunlimitedchennai.com/cdn/shop/products/1_6959ed8f-fc51-4123-8fa2-be72fad48146_1800x.jpg?v=1659462374"
                                rounded
                            />
                            <div style={{ padding: "10px" }} className="cardname">
                                <h6>Name: Ajith</h6>
                                <h6>Phone: 9898539845</h6>
                                <h6>Email: ajith123@gmail.com</h6>
                            </div>
                        </div>
                        <div className={`card ${style.responsiveCard}`} style={{ marginTop: "35px" }}>
                            <Image
                                style={{ width: "32%" }}
                                src="https://www.balloonsunlimitedchennai.com/cdn/shop/products/1_6959ed8f-fc51-4123-8fa2-be72fad48146_1800x.jpg?v=1659462374"
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

export default Users