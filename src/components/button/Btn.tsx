import React from 'react';
import Button from 'react-bootstrap/Button';
import style from './btn.module.css'

interface Prop  {
  Btnname: string
  buttonhandler: any
  color : string
}

const Btn: React.FC<Prop> = ({ Btnname, buttonhandler, color }) => {
  return (
    <Button className={style.btn}  onClick={buttonhandler} variant={color}> {Btnname} </Button>
  )
}

export default Btn