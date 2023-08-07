import React from 'react';
import style from './card.module.css'
import Image from 'react-bootstrap/Image';

interface Prop {
    image:string
    cardAction:any
}

const Card:React.FC<Prop> = ({image, cardAction}) => {
    return (
        <>
            <div onClick={cardAction} className={`card ${style.responsiveCard}`}>
                <Image
                    className={style.image}
                    src={image}
                    rounded
                />
                <div className={style.cardname}>
                    <h6>Name: Ajith</h6>
                    <h6>Phone: 9898539845</h6>
                    <h6>Email: ajith123@gmail.com</h6>
                </div>
            </div>
        </>
    )
}

export default Card