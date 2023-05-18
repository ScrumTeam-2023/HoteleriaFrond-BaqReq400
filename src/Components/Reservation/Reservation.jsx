
export const Reservation = ({startDate, endDate, total, room, roomServices, users})=>{
    return(
        <>
            <td>{startDate}</td>
            <td>{endDate}</td>
            <td>{total}</td>
            <td>{room}</td>
            <td>{roomServices}</td>
            <td>{users}</td>
        </>
    )
}