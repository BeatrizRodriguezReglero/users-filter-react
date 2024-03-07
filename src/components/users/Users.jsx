
import {  useNavigate } from "react-router-dom"
import { StyledActive, StyledContainer, StyledImage, StyledName, StyledUsername, StyledUsers } from "./users.styles"



const Users = ({users})=>{
    const navigate = useNavigate();
   
    return (
    <>
    {users.map(user=>(
            <StyledUsers key={user.userId}>
               <StyledImage src={user.profileImage} alt="" />
               <StyledContainer>
                <StyledName>{user.name}</StyledName>
                <StyledUsername>{user.username}</StyledUsername>
               </StyledContainer>
                <StyledActive $color={user.active ? '#3ad63a' : 'red'} >{user.active ? 'Activo' : 'Inactivo'}</StyledActive> 
                <button onClick={()=>navigate(`/details/${user.userId}` , {state: {user}})}>Ver detalles</button>
               
            </StyledUsers>
              
    ))}
    
    
            
            
        
           
    </>   
       
    )
}

export default Users