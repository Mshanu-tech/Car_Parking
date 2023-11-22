import style from './owner.module.css'
import Nav from '../../../share/nav/Nav'
import Search from '../../../components/search/Search'
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { owners } from '../../../service/adminApi';
// import Image from 'react-bootstrap/Image';
// import { fetchImageURLs } from '../../../images/downloadIamge';

type Props = {}

function Owner({ }: Props) {
    const [ownerData, setOwnerData] = useState([])
    // const [OwnerimageURLs, setOwnerImageURLs] = useState<string[]>([]);
    // console.log(OwnerimageURLs);

    const navigate = useNavigate()


    useEffect(() => {

        owners().then((res) => {
            if (res.data === "fail") {
                alert("Not Data fetched")
            } else {
                const data = res.data.data.owner
                setOwnerData(data)
            }
        });

        // fetchImageURLs('owner/')
        //     .then((urls) => {
        //         setOwnerImageURLs(urls)
        //     })
        //     .catch((error) => {
        //         console.error('Error fetching image URLs:', error);
        //     })
    }, [])

    const handleOwner = (owner:any) => {
        navigate(`/admin/owners/${owner._id}`)
    }

    return (
        <>
            <Nav BtnAction="asmin" name='user' />

            <div className='container-fluid'>
                <div>
                    <Search  />
                </div>
                <div className="row">
                    <div className={style.align_card}>

                        {
                            ownerData.map((owner: any, index: number) => (
                                <div  onClick={() => handleOwner(owner)} key={index} >

                                    <div className={`card ${style.responsiveCard}`}>
                                        {/* {OwnerimageURLs.map((image: string, imageIndex: number) => {

                                            if (image.name === owner.image) {
                                                return (
                                                    <Image
                                                        key={imageIndex}
                                                        className={style.image}
                                                        src={image.url}
                                                        rounded
                                                  />
                                                );
                                            }
                                        })} */}

                                        <div className={style.cardname}>
                                            <h6>Name: {owner.name}</h6>
                                            <h6>Phone: {owner.phone}</h6>
                                            <h6>Email: {owner.email} </h6>
                                        </div>
                                    </div>
                                </div>

                            ))
                        }

                    </div>
                    {/* <div className={style.align_card}>
                        <Card cardAction={handleowner} image='https://www.balloonsunlimitedchennai.com/cdn/shop/products/1_6959ed8f-fc51-4123-8fa2-be72fad48146_1800x.jpg?v=1659462374' />
                        <Card cardAction={handleowner} image='https://www.balloonsunlimitedchennai.com/cdn/shop/products/1_6959ed8f-fc51-4123-8fa2-be72fad48146_1800x.jpg?v=1659462374' />
                    </div>
                    <div className={style.align_card}>
                        <Card cardAction={handleowner} image='https://www.balloonsunlimitedchennai.com/cdn/shop/products/1_6959ed8f-fc51-4123-8fa2-be72fad48146_1800x.jpg?v=1659462374' />
                        <Card cardAction={handleowner} image='https://www.balloonsunlimitedchennai.com/cdn/shop/products/1_6959ed8f-fc51-4123-8fa2-be72fad48146_1800x.jpg?v=1659462374' />

                    </div> */}
                </div>
            </div>
        </>
    )
}

export default Owner