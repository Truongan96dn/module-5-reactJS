import axios from "axios";

export const findAllOrder = async () => {
    try {
        const res = await axios.get("http://localhost:8080/api/admin/orders");
        return res.data;
    } catch (e) {
        console.log(e)

    }
}
export const deleteOrder = async (id)=>{
    try{
        await axios.delete(`http://localhost:8080/api/admin/orders/`+id )
    }catch (e) {
        console.log(e)

    }
}
export const saveOrder = async (item) => {
    try {
        await axios.post("http://localhost:8080/orders", item)
    } catch (e) {
        console.log(e)
    }
}

