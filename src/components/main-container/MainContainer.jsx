import { useState } from "react"
import { USERS} from "../../constants/users"
import Header from "../header/Header"
import Users from "../users/Users"
import { StyledMainContainer } from "./main-container.styles"



const MainContainer = ()=>{
    
   const[filterActive,setFilterActive]= useState(false)
   let filteredUsers = filterUsersByActive(USERS, filterActive)
   const [sortByName, setSortByName] = useState(0);
   filteredUsers=filterUsersByName(filteredUsers ,sortByName)
   const [findName, setFindName] = useState('');
   filteredUsers=filterFindName(filteredUsers ,findName)
   
   
   
  
  
    return(
        <StyledMainContainer>
            <Header setFilterActive={setFilterActive} setSortByName={setSortByName} setFindName={setFindName} />
            <Users  users={filteredUsers}/>
            
            
           
        </StyledMainContainer>
    )
}

const filterFindName = (users,findName)=>{
    console.log(users)

    const normalizedFindName = findName.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    if(normalizedFindName === ''){
        console.log('estan todos')
        return [...users]
    }
    else{
        return users.filter(user => {
            const normalizedUserName = user.name.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
            return normalizedUserName.toLowerCase().includes(normalizedFindName.toLowerCase());
        });
    }
    /*
    if(findName === ''){
        console.log('estan todos')
        return [...users]
    }else{
        const filteredUsers= users.filter(user => user.name.toLowerCase().includes(findName.toLowerCase()));
        console.log('coincide')
        return filteredUsers
    }
    */
        
}



const filterUsersByName = (users, sortByName)=>{
    
    if(sortByName=== '0' || sortByName===0){
        return [...users]

    }else {
        return users.sort((a,b)=>
            a.name.localeCompare(b.name))
     }
}
    
const filterUsersByActive = (users,filterActive)=>{
    
    if(!filterActive){
        return [...users]
    }
        const filteredUsersByActive = users.filter(user=>user.active)
        
        return filteredUsersByActive
   
}
export default MainContainer