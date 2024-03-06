
import { StyledActive, StyledContainer, StyledImage, StyledName, StyledUsername, StyledUsers } from "./users.styles"


const Users = ({users})=>{
    
   
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
            </StyledUsers>
              
    ))}
    
    
            
            
        
           
    </>   
       
    )
}

export default Users