
export const Event = ({name, typeEvent, description, price, date, startTime, endTime, hotel}) =>{
    return(
        <>
            <td>{name}</td>
            <td>{typeEvent}</td>
            <td>{description}</td>
            <td>{price}</td>
            <td>{date}</td>
            <td>{startTime}</td>
            <td>{endTime}</td>
            <td>{hotel}</td>
        </>
    )
}
