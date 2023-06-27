import axios from "axios";
export const findAll = async () =>{
    try{
        const result = await axios.get("http://localhost:8080/todo")
        return result.data;

    }catch (e) {
        console.log(e)

    }
}
export const createTodo = async (values) => {
    try{
        const res = await axios.post("http://localhost:8080/todo",values)
        return res.data;
    }catch (e) {
        console.log(e)
    }
}