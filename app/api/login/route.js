//cals the login service http://localhost:8001/api/login
import axios from 'axios';
export async function POST(){
    const response=await  axios.post('http://localhost:8001/api/login');
    return await response.json(); 
}

