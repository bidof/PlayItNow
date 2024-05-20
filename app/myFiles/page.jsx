import React from "react";
import axios from "axios"; 
import Film from "../../components/Film";
async function LoadMyFiles(){
    const response = await axios.get('http://localhost:8001/api/uploads');
    let resp = response.data;
    console.log('testing')
    console.log(resp)
    return resp;
}

export default async function ShowMyFiles(){
    const data=await LoadMyFiles();
    console.log('data',data)
    return (
        <div>
            <h2> My Files </h2>
            {data.map((file)=>(<Film key={file.id} file={file} />))}
        </div>
    )

}
  