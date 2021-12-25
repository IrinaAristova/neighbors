import React from "react";
import img4 from '../image/4.png'
import houseImg from '../image/house.png'
import { useNavigate } from "react-router-dom";
import {APPLICATIONS_ROUTE} from '../utils/consts'

const Card = ({content}) =>{

    const history = useNavigate()

    return(
    
                <div className="card">
                    <img src={houseImg} alt="house"  className="card_image"/>
                    <p style={{textAlign:"center", fontSize:" 150%", margin: "10px 10px 10px 10px"}}>Ім'я</p>
                    <p style={{textAlign:"center", margin: "0px 10px 10px 10px"}}>район</p>
                    <p className="main_text-form">{content.content.substring(0,70) +' ...'}</p>        
                    <button onClick={() => history(APPLICATIONS_ROUTE +`${content.id}`)} className="btn draw-border">Переглянути</button>       
                </div>
 
    );
}


export default Card;