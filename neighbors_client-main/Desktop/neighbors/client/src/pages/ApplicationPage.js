import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import img4 from '../image/4.png'
import houseImg from '../image/house.png'
import icon1 from '../image/icon 1.png'
import Naming from '../image/Naming.png'
import userImg from '../image/user.png'
import { APPLICATIONS_ROUTE } from "../utils/consts";
import { GetOne } from "../actions/posts";

const ApplicationsPage = () =>{
  const id = useParams()
  const dispatch = useDispatch()
  const post = useSelector(state => state.posts.post)

  

  useEffect(()=>{
    dispatch(GetOne(id))
  },[])
  

    return(
    <div className="container">						 
		<div id="header">
			<div className="logo">
				<img src={icon1} alt="icon 1" />				 
			</div>

            <div className="name">
				<img src={Naming} alt="Naming"/>		 
	      	</div>
            <a href={APPLICATIONS_ROUTE} className="profile_btn" >Повернутися на головну</a>
        </div>
        
        <div className="seeform_left_block">   
              <h2 styles={{"text-align":"center","margin":"100px 10px 10px -190px"}}>Заявка</h2>
                <div className="profile_form_block">            
                    <header className="profile_head-form3">
                        <span styles={{fontSize: "20px"}}>Район:</span>
                    </header>    
                      <input type="text" name="address" className="profile_form-control6" styles={{"width":"200px" ,"left":"140px", "top": "10px"}} placeholder="Район"/>        
                    <form action="" className="form-signin" method="POST">
                        <header className="profile_head-form4">
                            <span styles={{"font-size": "18px"}}>Адреса:</span>
                        </header>
                        {post ? 
                        <input type="text" name="address" className="profile_form-control6" placeholder="Адреса"
                        value={post.adress}
                        />
                        :
                        <input type="text" name="address" className="profile_form-control6" placeholder="Адреса"
                        />
                        }

                        <header className="profile_head-form5">
                            <span styles={{"font-size": "18px"}}>Інформація: </span>
                        </header>
                        {post ?
                        <textarea name="textarea" className="profile_form-control7" rows="5" cols="30" placeholder="ПИШИТЕ СЮДА!!!!!!!!!!" value={post.content}></textarea>
                        :
                        <textarea name="textarea" className="profile_form-control7" rows="5" cols="30" placeholder="ПИШИТЕ СЮДА!!!!!!!!!!"></textarea>  
                        }
                        </form>

                </div>
        </div>
        <div className="seeform_right_block">
          <form action="" className="form-signin" method="POST">
            <h2 styles={{"text-align":"center", "margin": "80px 10px 10px -40px"}}>Інформація</h2>
              <div className="profile_user">
                  <img src={userImg}/>     
              </div>
              {post ? 
              <div>
                <input type="text" name="username" className="profile_form-control1" placeholder="имя" value={post.user.name} required/>
                <input type="email" name="email" className="profile_form-control2" placeholder="почта" value={post.user.email} required/>
                <input type="phone" name="phone" className="profile_form-control3" placeholder="телефон" required/>
              </div>
              :
              <div>
                <input type="text" name="username" className="profile_form-control1" placeholder="имя" required/>
                <input type="email" name="email" className="profile_form-control2" placeholder="почта" required/>
                <input type="phone" name="phone" className="profile_form-control3" placeholder="телефон" required/>
              </div>}

          </form>
      </div>
        

    </div>        
    )
}

export default ApplicationsPage;