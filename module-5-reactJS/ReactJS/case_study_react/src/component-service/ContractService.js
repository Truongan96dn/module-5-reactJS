import axios from "axios";
export const findAllContract= async () =>{
    try {
        const res = await axios.get("http://localhost:8080/contracts?_page=1&_limit=5")
        return res.data
    }catch (e) {
        console.log(e)

    }
}

export const saveContract = async (contract)=>{
    try {
        await axios.post("http://localhost:8080/contracts",contract)

    }catch (e) {
        console.log(e)

    }
}

export const findById = async (id) => {
    try{
        const res =await axios.get("http://localhost:8080/contracts/"+id)
        return res.data
    }catch (e) {
        console.log(e)
    }
}