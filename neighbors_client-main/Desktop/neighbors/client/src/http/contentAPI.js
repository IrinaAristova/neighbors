import {$authHost,$host} from './index'
import jwt_decode from 'jwt-decode'

export const getAll = async () => $host.get('/api/content/')

export const getOne = async (id) => $host.get(`/api/content/${id}`)

export const create = async(formData,id) => $authHost.post(`/api/content/${id}`, formData) 

export const update = async(formData,id) => $authHost.post(`/api/content/update/${id}`, formData) 

export const deleteContent = async(id) => $authHost.delete(`/api/content/${id}`) 

export const getAllDistrict = async() => $host.get('/api/district/')
/*
export const login = async () =>$host.post('api/content/')
*/