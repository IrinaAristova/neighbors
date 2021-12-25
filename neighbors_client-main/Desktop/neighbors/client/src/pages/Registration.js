import React,{useState} from "react";
import { useDispatch } from "react-redux";
import {useNavigate} from 'react-router-dom'
import {Reg} from '../actions/auth'
import icon1 from '../image/icon 1.png'
import Naming from '../image/Naming.png'


import {APPLICATIONS_ROUTE , LOGIN_ROUTE} from '../utils/consts'

const Registration = () =>{

    const history = useNavigate()
    const dispatch = useDispatch()

    const initialState = {name:'', email:'', password:'',student_ID:'',phone_number:''}

    const [formData , setFormData] = useState(initialState)

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(Reg(formData,history))
    };

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };
    
    const click = async() =>{
        try{
            console.log(formData)
            dispatch(Reg(formData,history))
        } catch(e){
            alert(e.response.data.message)
        }
        
    }


    return(
    <div className="container">
		<div id="header">
			<div className="logo">
				<img src={icon1} alt = "іконка 1"/>
			</div>

            <div className="name">
				<img src={Naming} alt = "назва"/>
				 
			</div>
            <a href={APPLICATIONS_ROUTE} className="reg_btn" >Повернутися на головну</a>
        </div>

        <div className="reg_left_block">
            
        </div>
        
        <div className="reg_right_block">
            <header className="reg_head-form">
                <span styles={{"fontSize":"32px;"}}>Вітаємо на нашому сайті!</span>
            </header>  
            <form action="" className="form-signin" method="POST">
                <input type="text" name="name" className="reg_form-control1" placeholder="Ваше ім’я*" required
                onChange={handleChange}
                />
                <input type="email" name="email" className="reg_form-control2" placeholder="Ваш email*" required
                onChange={handleChange}
                />
                <input type="phone" name="phone_number" className="reg_form-control3" placeholder="Ваш телефон*" required
                onChange={handleChange}
                />
                <input type="id" name="student_ID" className="reg_form-control4" placeholder="Ваш студентський квиток*" required
                onChange={handleChange}
                />
                <header className="reg_head-form1">
                    <span styles={{"fontSize":"14px;"}}>Ваш студентський квиток допоможе нам впевнитись, що ви студент. Формат АА99999999</span>
                </header>
                <input type="password" name="password" className="reg_form-control5" placeholder="Пароль*" required
                onChange={handleChange}
                />
                <header className="reg_head-form2">
                    <span styles={{"fontSize":"14px;"}}>Ваш пароль має містити 8 символів. Рядкові літери (a-z) та цифри (0-9)</span>
                </header>
                <button className="reg_bttn btn-lg btn-primary btn-block" type="submit"
                onClick={click}
                >Зареєструватися</button>
                <header className="reg_head-form3">
                    <span styles={{"fontSize":"18px;"}}>Вже є аккаунт?</span>
                </header>
                <a href={LOGIN_ROUTE} className="reg_btn1 btn-lg btn-primary btn-block">Авторизуйтесь!</a>
            </form> 
        </div>
    </div>        
    )
}

export default Registration;