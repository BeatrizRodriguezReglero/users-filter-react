import {  useNavigate, useParams } from "react-router-dom"
import { USERS } from "../constants/users";

const Details =()=>{
    const navigate = useNavigate();
    const {userId} = useParams() 
    const user = USERS.find(user => user.userId ===userId)
    console.log(user)
    
    return(
        
        <>
        
            <button  onClick={()=>navigate('/')}>Back to Users</button>
            <img  src={user.profileImage} alt="" />
            <h1>Hi! my name is {user.name}</h1>
            
            <p>Im {user.age}</p>
            <p>My username is {user.username}</p>
            <p>You can contact me in {user.email}</p>
            <p>My Address is:</p>
            <p>{user.address.street}</p>
            <p>{user.address.city}</p>
            <p>{user.address.zipCode}</p>
            <p>You can call me at {user.phone}</p>
            <p></p>
        </>
    )
}
export default Details