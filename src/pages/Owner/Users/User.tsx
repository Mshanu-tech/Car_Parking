import React, { useEffect, useState } from 'react'
import Image from 'react-bootstrap/Image';
import style from './user.module.css'
import Nav from '../../../share/nav/Nav'
import Search from '../../../components/search/Search'
import { useNavigate } from 'react-router-dom';
import { getUsers } from '../../../service/ownerApi';

type Props = {}

const Users: React.FC = (props: Props) => {
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [query, setQuery] = useState('');
  console.log(filteredUsers);
  
    const navigate = useNavigate();
  
    const handleUser = (e: any) => {
      e.preventDefault();
      navigate('user');
    };
  
    useEffect(() => {
      getUsers()
        .then((res) => {
          console.log(res);
          if (res.data.message === "success") {
            setUsers(res.data.users);
            setFilteredUsers(res.data.users)
          }
        });
    }, []);
    
    useEffect(()=>{
        const lowerCaseQuery = query.toLowerCase();
        const filtered = users.filter(user => {
            const userName = user.name.toLowerCase()
            return userName.includes(lowerCaseQuery);
        })
        setFilteredUsers(filtered);
    },[query]);
  
    const handleSearch = (inputValue: string) => {
    setQuery(inputValue)
    };
        
    return (
        <>
            <Nav />
            <div className='container-fluid'>
                <div>
                <Search value={query} searchAction={handleSearch} />
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
                        {
                            filteredUsers.map((users: any)=>(
                                <div onClick={handleUser} className={`card ${style.responsiveCard}`} style={{ marginTop: "35px" }}>
                                <Image
                                    style={{ width: "32%" }}
                                    src="https://www.balloonsunlimitedchennai.com/cdn/shop/products/1_6959ed8f-fc51-4123-8fa2-be72fad48146_1800x.jpg?v=1659462374"
                                    rounded
                                />
                                <div style={{ padding: "10px" }} className="cardname">
                                    <h6>Name: {users.name}</h6>
                                    <h6>Phone: {users.phone}</h6>
                                    <h6>Email: {users.email} </h6>
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
                    {/* <div className='' style={{ display: "flex", flexWrap: "wrap" }}>
                        <div className={`card ${style.responsiveCard}`} style={{ marginTop: "35px" }}>
                            <Image
                                style={{ width: "32%" }}
                                src="https://www.balloonsunlimitedchennai.com/cdn/shop/products/1_6959ed8f-fc51-4123-8fa2-be72fad48146_1800x.jpg?v=1659462374"
                                rounded
                            />
                            <div style={{ padding: "10px" }} className="cardname">
                                <h6>Name: Roshan</h6>
                                <h6>Phone: 9898539845</h6>
                                <h6>Email: ajith123@gmail.com</h6>
                            </div>
                        </div> */}
                        {/* <div className={`card ${style.responsiveCard}`} style={{ marginTop: "35px" }}>
                            <Image
                                style={{ width: "32%" }}
                                src="https://www.balloonsunlimitedchennai.com/cdn/shop/products/1_6959ed8f-fc51-4123-8fa2-be72fad48146_1800x.jpg?v=1659462374"
                                rounded
                            />
                            <div style={{ padding: "10px" }} className="cardname">
                                <h6>Name: aleef</h6>
                                <h6>Phone: 9898539845</h6>
                                <h6>Email: ajith123@gmail.com</h6>
                            </div>
                        </div> */}
                    {/* </div> */}

                </div>
            </div>
        </>
    )
}

export default Users