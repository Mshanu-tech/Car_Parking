import style from './owner.module.css'
import Nav from '../../../share/nav/Nav'
import Search from '../../../components/search/Search'
import { useNavigate } from 'react-router-dom';
import Card from '../../../share/card/Card';

type Props = {}

function Owner({ }: Props) {
    const navigate = useNavigate()
    const handleowner = () => {
        navigate('owner')
    }

    return (
        <>
            <Nav />

            <div className='container-fluid'>
                <div>
                    <Search />
                </div>
                <div className="row">
                    <div className={style.align_card} >
                        <Card cardAction={handleowner} image='https://www.balloonsunlimitedchennai.com/cdn/shop/products/1_6959ed8f-fc51-4123-8fa2-be72fad48146_1800x.jpg?v=1659462374' />
                        <Card cardAction={handleowner} image='https://www.balloonsunlimitedchennai.com/cdn/shop/products/1_6959ed8f-fc51-4123-8fa2-be72fad48146_1800x.jpg?v=1659462374' />
                    </div>
                    <div className={style.align_card}>
                        <Card cardAction={handleowner} image='https://www.balloonsunlimitedchennai.com/cdn/shop/products/1_6959ed8f-fc51-4123-8fa2-be72fad48146_1800x.jpg?v=1659462374' />
                        <Card cardAction={handleowner} image='https://www.balloonsunlimitedchennai.com/cdn/shop/products/1_6959ed8f-fc51-4123-8fa2-be72fad48146_1800x.jpg?v=1659462374' />
                    </div>
                    <div className={style.align_card}>
                        <Card cardAction={handleowner} image='https://www.balloonsunlimitedchennai.com/cdn/shop/products/1_6959ed8f-fc51-4123-8fa2-be72fad48146_1800x.jpg?v=1659462374' />
                        <Card cardAction={handleowner} image='https://www.balloonsunlimitedchennai.com/cdn/shop/products/1_6959ed8f-fc51-4123-8fa2-be72fad48146_1800x.jpg?v=1659462374' />

                    </div>
                </div>
            </div>
        </>
    )
}

export default Owner