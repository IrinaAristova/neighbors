import React, {useEffect, useState} from "react";
import icon1 from '../image/icon 1.png'
import Naming from '../image/Naming.png'
import userImg from '../image/user.png'
import {useNavigate} from 'react-router-dom'
import '../style.css'
import {APPLICATIONS_ROUTE} from '../utils/consts'
import { useDispatch, useSelector } from "react-redux";
import decode from 'jwt-decode'
import { Create , Delete, GetOne,Update} from "../actions/posts";
import { DeleteUser, UpdateUser } from "../actions/auth";


const Profile = () =>{

    const history = useNavigate()
    const dispatch = useDispatch()
    
    const post = useSelector(state => state.posts.post)
    console.log(post)

    const initialState = {adress:'',content:'',districtId:0}
    const [formData,setFormData] =  useState(initialState)
    
    const initialUserState = {name:'', email:'', phone_number:'', student_ID:''}
    const [userFormData, setUserFormData] = useState(initialUserState)

    const user = JSON.parse(localStorage.getItem('profile'))
    let decodedToken;
    const token = user?.token;
        if(token) {
            decodedToken = decode(token);
        }
    useEffect(()=>{
        if(decodedToken.contentId){
            dispatch(GetOne({id:decodedToken.contentId}))
        }
    },[])

    const handleUserChange = (e) =>{
        setUserFormData({...userFormData,[e.target.name]: e.target.value})
    }

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    const click = async() =>{
        try{
            if(post){
                /*
                if(formData.adress === ''){
                    setFormData({...formData,adress:post.adress})
                }
                if(formData.content === ''){
                    setFormData({...formData,content:post.content})
                    console.log(post.content)
                }*/
            dispatch(Update({formData,id:post.id}))
            }else{
                console.log(decodedToken.id)
                dispatch(Create({formData, id: decodedToken.id})) 
            }
        } catch(e){
            alert(e.response.data.message)
        }
        
    }

    const updateUserClick = () => {
        dispatch(UpdateUser(userFormData,decodedToken.id))
    }

    const deletePost = () =>{
        dispatch(Delete({id:post.id}))
        history(APPLICATIONS_ROUTE)
    }

    const deleteUser = () =>{
        dispatch(DeleteUser(decodedToken.id),history)
        
    }

    const logout = () => {
        dispatch({type: 'LOGOUT'},history)
    
        history(APPLICATIONS_ROUTE)
    };

    console.log(userFormData)
    //console.log(post)
    if(formData.adress === ''){
        console.log(formData.adress)
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
         <div onClick={logout} className="profile_btn">Повернутися на головну</div>
        </div>

        <div className="profile_left_block">
            <header className="profile_head-form" style={{fontSize:"24px"}}>
                <span style={{fontSize:"24px"}}>Профіль</span>
            </header>
            <form action="" className="form-signin" method="POST">
                <header className="profile_head-form1">
                    <span style={{fontSize:"32px"}}>Інформація</span>
                </header>
                <div className="profile_user">
                    <img src={userImg} alt = 'юзер'/>
                </div>
                
                <input type="text" name="name" className="profile_form-control1" placeholder="имя" defaultValue={decodedToken.name} onChange={handleUserChange} required/>
                <input type="email" name="email" className="profile_form-control2" placeholder="email" defaultValue={decodedToken.email} onChange={handleUserChange} required/>
                <input type="phone" name="phone_number" className="profile_form-control3" placeholder="телефон" required defaultValue={decodedToken.phone_number} onChange={handleUserChange}/>
                <input type="id" name="student_ID" className="profile_form-control4" placeholder="студак" defaultValue={decodedToken.student_ID} onChange={handleUserChange} required/>
               
                <button className="profile_bttn btn-lg btn-primary btn-block" type="submit" onClick={updateUserClick}>Змінити</button>
                <button className="profile_bttn2 btn-lg btn-primary btn-block" type="submit"onClick={deleteUser}>Видалити</button>
            </form>
        </div>
        
        <div className="profile_right_block">
            <header className="profile_head-form2">
                <span style={{fontSize:"32px"}}>Заявка</span>
              </header>
                <div className="profile_form_block">
                    <header className="profile_head-form3">
                        <span style={{fontSize:"20px"}}>Район:</span>
                    </header>    
                    <div className="custom-select" style={{width:"200px",left:"160px",top:"20px"}}>
                        <select>
                          <option value="0">Деснянський р-н</option>
                          <option value="1">Святошинський р-н</option>
                          <option value="2">Дніпровський р-н</option>
                          <option value="3">Голосіївський р-н</option>
                          <option value="4">Дарницький р-н</option>
                          <option value="5">Солом’янський р-н</option>
                          <option value="6">Оболонський р-н</option>
                          <option value="7">Шевченківський р-н</option>
                          <option value="8">Подільський р-н</option>
                        </select>
                      </div>        
                    <form action="" className="form-signin" method="POST">
                        <header className="profile_head-form4">
                            <span style={{fontSize:"18px"}}>Адреса:</span>
                        </header>
                        
                        {post ?
                            <input name="adress" type="text" className="address" className="profile_form-control6" placeholder="Адреса" 
                            defaultValue={post.adress}
                            onChange={handleChange}/>
                            :
                            <input name="adress" type="text" className="address" className="profile_form-control6" placeholder="Адреса" 
                            defaultValue={''}
                            onChange={handleChange}/>
                        }  

                        <header className="profile_head-form5">
                            <span style={{fontSize:"18px"}}>Інформація: </span>
                        </header>

                        {post ? 
                            <textarea name="content" className="profile_form-control7" rows="5" cols="30" placeholder="ПИШИТЕ СЮДА!!!!!!!!!!" 
                            defaultValue={post.content}
                            onChange={handleChange}></textarea>
                            :
                            <textarea name="content" className="profile_form-control7" rows="5" cols="30" placeholder="ПИШИТЕ СЮДА!!!!!!!!!!" 
                            defaultValue={''}
                            onChange={handleChange}></textarea>
                        }
                        
                        </form>
                        <button className="profile_bttn1 btn-lg btn-primary btn-block" type="submit" onClick={click}>Змінити</button>
                        {post ? 
                        
                        <button className="profile_bttn3 btn-lg btn-primary btn-block" type="submit" onClick={deletePost}>Видалити</button>
                        :
                        <button className="profile_bttn3 btn-lg btn-primary btn-block" type="submit">Видалити</button>
                        }

                </div>
        </div>

    </div>
       
    )
}

export default Profile;