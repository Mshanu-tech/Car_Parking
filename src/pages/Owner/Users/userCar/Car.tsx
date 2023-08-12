import React from 'react'
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Nav from '../../../../share/nav/Nav'
import css from './car.module.css'

type Props = {}

const Car: React.FC = (props: Props) => {
    return (
        <>
            <Nav />
            <div className="container">
                <div className='row'>
                    <div className={css.main}>
                        <Col style={{ display: "contents" }} xs={6} md={4}>
                            <Image
                                style={{ width: "23%" }}
                                src="data:image/jpeg;base64,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"
                                rounded
                            />
                        </Col>
                        <div style={{ color: "black", display: "contents"}}>
                            <h5 style={{marginTop:"35px"}}>Name:Ajith</h5>
                            <h6>Email:ajith@gmail.com</h6>
                            <h6>9873490234</h6>
                        </div>
                        <table>
                            <tr>
                            <th>CarNo</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th >Price</th>
                            </tr>
                            <tr>
                            <td >KL07AU8945</td>
                            <td >12/07/2023 ___ 13/07/2023</td>
                            <td >10:00 PM ___ 10:00AM</td>
                            <td >900</td>
                            </tr>
                        </table>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Car