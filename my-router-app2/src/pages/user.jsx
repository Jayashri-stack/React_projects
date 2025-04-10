import { useParams } from "react-router-dom";
const user=()=>{
    const{ username}= useParams();
    return(
        <div>
            <h1>user: {username} </h1>
        </div>
    );
};

export default user;