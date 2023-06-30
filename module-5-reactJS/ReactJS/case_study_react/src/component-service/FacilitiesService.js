import axios from "axios";
export const findAllFacilities = async () =>{
    try {
        const res = await axios.get("http://localhost:8080/service?_page=1&_limit=3")
        return res.data
    }catch (e) {
        console.log(e)

    }
}
export const findAll = async () =>{
    try {
        const res = await axios.get("http://localhost:8080/service")
        return res.data
    }catch (e) {
        console.log(e)

    }
}
export const deleteService = async (id) =>{
    try{
       await axios.delete(`http://localhost:8080/service/${id}` )
    }catch (e) {
        console.log(e)

    }
}
export const saveService = async (service)=>{
    try {
        await axios.post("http://localhost:8080/service",service)

    }catch (e) {
        console.log(e)

    }
}
export const updateService = async (values)=>{
    try {
        await axios.put("http://localhost:8080/service/" +values.id,values)
    }catch (e) {
        console.log(e)

    }
}
export const findById = async (id) => {
    try{
       const res =await axios.get("http://localhost:8080/service/"+id)
        return res.data
    }catch (e) {
        console.log(e)
    }
}