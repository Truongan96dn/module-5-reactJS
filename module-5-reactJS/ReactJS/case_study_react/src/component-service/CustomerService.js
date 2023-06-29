import axios from "axios";
export const findAllCustomer= async () =>{
    try {
        const res = await axios.get("http://localhost:8080/customers")
        return res.data
    }catch (e) {
        console.log(e)

    }
}
export const deleteCustomer = async (id) =>{
    try{
        await axios.delete(`http://localhost:8080/customers/${id}` )
    }catch (e) {
        console.log(e)

    }
}
export const saveCustomer = async (customer)=>{
    try {
        await axios.post("http://localhost:8080/customers",customer)

    }catch (e) {
        console.log(e)

    }
}
export const updateCustomer = async (values)=>{
    try {
        await axios.put("http://localhost:8080/customers/" +values.id,values)
    }catch (e) {
        console.log(e)

    }
}
export const findById = async (id) => {
    try{
        const res =await axios.get("http://localhost:8080/customers/"+id)
        return res.data
    }catch (e) {
        console.log(e)
    }
}