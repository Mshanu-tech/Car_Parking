import { useEffect, useState } from 'react'
import { storage } from '../Firebase/firebase'
import { getDownloadURL, listAll, ref, uploadBytes } from 'firebase/storage'
// import { v4 } from "uuid";

// type Props = {}

const image = () => {
  const [image, setimage] = useState(null)
  console.log(image);

  const uploadimage = () =>{
    if(image == null) return; 
    const imageRef = ref(storage, `image/${image.name }`);
    uploadBytes(imageRef, image).then(()=>{
      alert("image upload")
    })
  }

  const [imageList, setimageList] = useState([])
  const imageListRef = ref(storage,"image/")

  useEffect(()=>{
    listAll(imageListRef).then((res)=>{
      res.items.forEach((item)=>{
        getDownloadURL(item).then((url)=>{
          setimageList((prev)=> [...prev, url]);
        })
      })      
    })
  },[])

  return (
    <>
    <input type="file" name="" id="" onChange={(e:any)=>{setimage(e.target.files[0])}}/>
    <button onClick={uploadimage}>upload image</button>
    {
      imageList.map((url)=>{
        return <img src={url}/>
      })
    }
    </>
  )
}

export default image