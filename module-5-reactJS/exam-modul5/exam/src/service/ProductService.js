import axios from "axios";

export const findAllProduct = async () => {
    try{
        const res = await axios.get("http://localhost:8080/api/admin/product");
        return res.data;
    }catch (e) {
        console.log(e)
    }
}
