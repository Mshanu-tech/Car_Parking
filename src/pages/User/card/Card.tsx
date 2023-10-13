import React, { useEffect,useState } from 'react'
import style from './card.module.css'
import { useSelector } from 'react-redux'
import { fetchImageURLs } from '../../../images/downloadIamge'

type Props = {}

const Card:React.FC<Props> = () => {

  const [imageURLs, setImageURLs] = useState<string[]>([]);
  
  const name = useSelector((state:any)=>state.card.name)
  const email = useSelector((state:any)=>state.card.email)
  const phone = useSelector((state:any)=>state.card.phone)
  const carNo = useSelector((state:any)=>state.card.carno)
  const id = useSelector((state:any)=>state.card.id)
  const image_name = useSelector((state:any)=>state.card.image)
  console.log(image_name);
  

  useEffect(()=>{

    fetchImageURLs('carImage/')
    .then((url)=>{
      setImageURLs(url);
    })
    .catch((error)=>{
      console.error('Error fetching image URLs:', error);
    })
  },[id]);
  

  const image = imageURLs.find((img) => img.name === image_name 
  )
console.log(image,"dfdfgkm");

  return (
    <>
    <div className='container-fluid'>
      <div className="row">
        <div className={style.main}>
          <div className={style.card}>
          {image ? (
                <img className={style.image} src={image.url} alt="" />
              ) : (
                // Display a default image if the image is not found
                <img
                  className={style.image}
                  src="data:image/jpeg;base64,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"
                  alt=""
                />
              )}
            {/* <img className={style.image} src={image.url} alt="" /> */}
        
            <div>
            <p className={style.details}>ID : {id} </p>
            <p className={style.details}>Car.no : {carNo} </p>
            <p className={style.details}>Name : {name} </p>
            <p className={style.details}>Email : {email} </p>
            <p className={style.details}>Phone : {phone} </p>
            </div>

          </div>
        </div>
      </div>
    </div>
    </>
 )
}

export default Card