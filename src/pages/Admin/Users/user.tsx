import style from './user.module.css'
import Nav from '../../../share/nav/Nav'
import Search from '../../../components/search/Search'
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { users } from '../../../service/adminApi';
// import Image from 'react-bootstrap/Image';
// import { fetchImageURLs } from '../../../images/downloadIamge';

type Props = {}

function Users({ }: Props) {
    const [userData, setuserData] = useState([])
    // const [OwnerimageURLs, setOwnerImageURLs] = useState<string[]>([]);
    // console.log(OwnerimageURLs);

    const navigate = useNavigate()


    useEffect(() => {

        users().then((res) => {
            if (res.data === "fail") {
                alert("Not Data fetched")
            } else {
                const data = res.data.data.owner
                setuserData(data)
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

    const handleUser = (id:string) => {
        navigate(`/admin/users/${id}`)
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
<p onClick={()=>handleUser("dagsjdhajsdh,a")}>user</p>
                        {
                            userData.map((user: any, index: number) => (
                                <div  onClick={() => handleUser(user._id)} key={index} >

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
                                            <h6>Name: {user.name}</h6>
                                            <h6>Phone: {user.phone}</h6>
                                            <h6>Email: {user.email} </h6>
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

export default Users