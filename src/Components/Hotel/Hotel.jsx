
export const Hotel = ({name,address,description,phone,email,user}) => {
    return (
      <>
          <td>{name}</td>
          <td>{address}</td>
          <td>{description}</td>
          <td>{email}</td>
          <td>{phone}</td>
          <td>{user}</td>
      </>
    )
  }