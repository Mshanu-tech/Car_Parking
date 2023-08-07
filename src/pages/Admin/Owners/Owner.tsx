import Image from 'react-bootstrap/Image';
import style from './owner.module.css'
import Nav from '../../../share/nav/Nav'
import Search from '../../../components/search/Search'
import { useNavigate } from 'react-router-dom';

type Props = {}

function Owner({}: Props) {
    const navigate = useNavigate()
    const handleowner = () =>{
        navigate('owner')
    }

  return (
    <>
    <Nav/>

    <div className='container-fluid'>
        <div>
            <Search/>
        </div>
        <div className="row">
        <div className='' style={{ display: "flex", flexWrap: "wrap" }}>
                        <div onClick={handleowner} className={`card ${style.responsiveCard}`} style={{ marginTop: "35px" }}>
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
                        <div  className={`card ${style.responsiveCard}`} style={{ marginTop: "35px" }}>
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
                        <div  className={`card ${style.responsiveCard}`} style={{ marginTop: "35px" }}>
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

export default Owner