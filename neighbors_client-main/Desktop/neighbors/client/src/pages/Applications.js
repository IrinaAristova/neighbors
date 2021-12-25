import React, {useState, useEffect} from "react";
import icon1 from '../image/icon 1.png'
import Naming from '../image/Naming.png'
import knopka from '../image/button.png'
import img4 from '../image/4.png'
import { PROFILE_ROUTE, REGISTRATION_ROUTE} from '../utils/consts'
import decode from 'jwt-decode';
import Card from "../components/Card";
import { useDispatch, useSelector } from "react-redux";
import { GetAll, GetAllDistrict } from "../actions/posts";


const Applications = () =>{

    const dispatch = useDispatch()


    const posts = useSelector(state => state.posts.posts)
    const [user,setUser] = useState(JSON.parse(localStorage.getItem('profile')))
    
    const districts = useSelector(state => state.posts.districts)

    let decodedToken;
    const token = user?.token;
        if(token) {
            decodedToken = decode(token);
        }
    
    useEffect(() =>{
        dispatch(GetAll())
        dispatch(GetAllDistrict())
    },[])

    console.log(districts)
    return(
    <div className="container">						 
		<div id="header">
			<div className="logo">
				<img src={icon1} alt="some img"/>				 
			</div>

            <div className="name">
				<img src={Naming} alt="some img"/>	 
			</div>  
            {token?
            <a href={PROFILE_ROUTE} className="main_btn" >{decodedToken.email}</a>   
            :
            <a href={REGISTRATION_ROUTE} className="main_btn" >Увійти</a>  
            }        


        <div className="main_left_block">

        </div>
        
        <div className="main_right_block">   
            <header className="main_head-form">
                <span style={{"fontSize":"48px"}}>Шукати сусіда  легко та зручно</span>
            </header>  
            <p className="main_text">
				Шукаєш сусіда або сусідку — скоріш залишай оголошення.
			</p>  
            <a href={token ? PROFILE_ROUTE:REGISTRATION_ROUTE} className="main_btn1 btn-lg btn-primary btn-block">Додати оголошення</a>      
        </div>

        <div className="main_searh">
            <p className="main_text1">
				Обирай район та починай пошук
			</p>
            
            <div className="custom-select" style={{width:"200px", left:"400px", top:"10px"}}>
                <form>
                <select>
                {districts ? districts.map(({id,name}) => 
                    <option key={id} value={name}>{name}</option>
                   ):
                    <option>
                    </option>
                }
                </select>
                </form>
              </div>
             
            <button type="button" className="main_btn2"> 
                <img src={knopka} alt="Пошук" title="Пошук" />
            </button> 

        </div>

        {posts?.length ? <div className="main_main">
            <img src={img4} alt="some img"/>
            <div className="main_worksheet wrapper">
               {posts.map((post) => <Card content={post}/>)} 
            </div>
        </div>
        : ""
        }
        
        

    </div>

    </div>        
    )
}

export default Applications;
/*
                  {content.district.map(reg =>
                    <option key={reg.id}> 
                        {reg.name}
                    </option>)}
                    */