import React,{useState} from "react";
import {useNavigate} from 'react-router-dom'
import '../style.css'
import icon1 from '../image/icon 1.png'
import Naming from '../image/Naming.png'
import {APPLICATIONS_ROUTE , REGISTRATION_ROUTE} from '../utils/consts'
import { Log } from "../actions/auth.js";
import { useDispatch } from "react-redux";


const Login = () =>{

    const history = useNavigate()
    const dispatch = useDispatch()

    const initialState = { email:'', password:''}

    const [formData , setFormData] = useState(initialState)

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(Log(formData,history))
    };

    const handleChange = (e) => {
        console.log(formData)
        setFormData({...formData, [e.target.name]: e.target.value});
    };
    
    const click = async() =>{
        try{
            dispatch(Log(formData,history))
        } catch(e){
            alert(e.response.data.message)
        }
        
    }

    return(
        <div className="container">						 
		    <div id="header">
			    <div className="logo">
			    	<img src={icon1} alt="some img"/>	 
			    </div>

                <div className="name">
                    <img src={Naming} alt="some img"/>
                    
                </div>              
                <a href={APPLICATIONS_ROUTE} className="log_btn" >Повернутися на головну</a>


                <div className="log_left_block">
                </div>
        
                <div className="log_right_block">   
                    <form action="" className="log_form-signin" method="POST">
                        <header className="log_head-form">
                            <span styles={{"fontSize": "32px"}}>Вітаємо з поверненням на наш сайт!</span>
                        </header>
                        <input type="email" name="email" className="log_form-control1" placeholder="Ваш email" required
                        onChange={handleChange}
                        />
                        <input type="password" name="password" className="log_form-control2" placeholder="Пароль" required
                        onChange={handleChange}
                        />
                        <button className="log_bttn btn-lg btn-primary btn-block" type="submit"
                        onClick={click}
                        >Увійти</button>
                        <header className="log_head-form1">
                            <span styles={{"fontSize": "18px"}}>Немає аккаунта?</span>
                        </header>
                        <a href={REGISTRATION_ROUTE} className="log_btn1 btn-lg btn-primary btn-block">Зареєструйтесь!</a>
                    </form> 
                </div>
            </div>
        </div>
        
    )
}

export default Login;
