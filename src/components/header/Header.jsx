import { StyledHeader, StyledTitle } from "./header.styles"

const Header = ({setFilterActive,setSortByName,setFindName,findName})=>{
    return(
        <> 
            <StyledTitle>Listado de usuarios</StyledTitle>
            <StyledHeader >
            
            <div>
                <input type="text" name="findName" value={findName} onChange={event => setFindName(event.target.value)}/>
            </div>
            
                <label htmlFor="only-active" >Sólo activos</label>
                <input type="checkbox" id="only-active" onChange={event => setFilterActive(event.target.checked)}/>
            
            <select name="orden" id="" onChange={event => setSortByName(event.target.value)}>
                <option value="0">Por Defecto</option>
                <option value="1" >Por Nombre</option>
            </select>
            
        </StyledHeader>
            
        </>
    )
   
}




export default Header