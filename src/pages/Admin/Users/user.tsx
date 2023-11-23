import style from './user.module.css'
import Nav from '../../../share/nav/Nav'
import Search from '../../../components/search/Search'
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { users } from '../../../service/adminApi';
import Image from 'react-bootstrap/Image';
// import { fetchImageURLs } from '../../../images/downloadIamge';

type Props = {}

function Users({ }: Props) {
    const [userData, setUserData] = useState([])
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [query, setQuery] = useState('');

    // const [OwnerimageURLs, setOwnerImageURLs] = useState<string[]>([]);
    console.log(userData);

    const navigate = useNavigate()


    useEffect(() => {

        users().then((res) => {
            if (res.data === "fail") {
                alert("Not Data fetched")
            } else {
                const data = res.data.data.user
                setUserData(data)
                setFilteredUsers(data)
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

    useEffect(() => {
        const lowerCaseQuery = query.toLowerCase();
        const filtered = userData.filter((user) => {
            const userName = user.name.toLowerCase();
            return userName.includes(lowerCaseQuery);
        });
        setFilteredUsers(filtered);
    }, [query]);

    const handleUser = (id: string) => {
        navigate(`/admin/users/${id}`)
    }

    const handleSearch = (inputValue: string) => {
        setQuery(inputValue)
    };

    return (
        <>
            <Nav BtnAction="asmin" name='user' />

            <div className='container-fluid'>
                <div>
                    <Search value={query} searchAction={handleSearch} />
                </div>
                <div className="row">
                    <div className={style.align_card}>
                        {/* <p onClick={()=>handleUser("dagsjdhajsdh,a")}>user</p> */}
                        {
                            filteredUsers.map((user: any, index: number) => (
                                <div onClick={() => handleUser(user._id)} key={index} >

                                    <div className={`card ${style.responsiveCard}`} style={{ marginTop: "35px" }}>

                                        <Image style={{ width: "32%" }} src="https://www.balloonsunlimitedchennai.com/cdn/shop/products/1_6959ed8f-fc51-4123-8fa2-be72fad48146_1800x.jpg?v=1659462374" rounded />


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

                                        <div style={{ padding: "10px" }} className={style.cardname}>
                                            <h6>Name: {user.name}</h6>
                                            <h6>Phone: {user.phone}</h6>
                                            <h6>Email: {user.email} </h6>
                                        </div>
                                    </div>
                                </div>

                            ))
                        }
                        <div className={`card ${style.responsiveCard}`} style={{ marginTop: "35px" }}>
                            <Image
                                style={{ width: "32%" }}
                                src="https://www.balloonsunlimitedchennai.com/cdn/shop/products/1_6959ed8f-fc51-4123-8fa2-be72fad48146_1800x.jpg?v=1659462374"
                                rounded
                            />
                            <div style={{ padding: "10px" }} className="cardname">
                                <h6>Name: Rohan</h6>
                                <h6>Phone: 9898539845</h6>
                                <h6>Email: ajith123@gmail.com</h6>
                            </div>
                        </div>

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