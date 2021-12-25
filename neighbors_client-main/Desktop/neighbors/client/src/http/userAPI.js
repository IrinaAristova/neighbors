import {$authHost,$host} from './index'
import jwt_decode from 'jwt-decode'

export const reg = async (formData) => $host.post('/api/user/reg', {name:formData.name,email:formData.email,password:formData.password,student_ID: formData.student_ID,role:'USER', phone_number: formData.phone_number})



export const login = async (formData) =>$host.post('/api/user/log', formData)

export const deleteUser = async (id) => $authHost.delete(`/api/user/${id}`)

export const updateUser = async (userFormData,id) => $authHost.post(`/api/user/update/${id}`,userFormData)

export const check = async () =>{
    const {data} = await $authHost.get('api/user/auth')
    localStorage.setItem('token',data.token)
    return jwt_decode(data.token)
}