
export const Room = ({roomNumber,description,price,available,hotel}) =>{
   
    return(
        <>
        <td>{roomNumber}</td>
        <td>{description}</td>
        <td>{price}</td>
        <td>{available}</td>
        <td>{hotel}</td>
        </> 
    )
  
}