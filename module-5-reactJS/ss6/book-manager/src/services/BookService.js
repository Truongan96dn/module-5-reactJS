import axios from "axios";
export const findAll = async ()=> {
    try{
        const result = await axios.get("http://localhost:8080/book")
        return  result.data

    }catch (e) {
        console.log(e)
    }
}
export const saveBook = async (values)=> {
    try {
        const result = await axios.post("http://localhost:8080/book",values)
        return result.data

    }catch (e) {
        console.log(e)

    }
}
export const deleteById = async (id) => {
    try {
        await axios.delete(`http://localhost:8080/book/` + id)
    }catch (e) {
        console.log(e)
    }
}
export const update = async (value) =>{
    try {
      await axios.put(`http://localhost:8080/book/` + value.id, value)
    }catch (error) {
        console.log('error')
    }
}
export const findById = async (id) => {
    try {
        const res = await axios.get(`http://localhost:8080/book/`+id)
        return res.data;

    }catch (e) {
        console.log(e)

    }
}
