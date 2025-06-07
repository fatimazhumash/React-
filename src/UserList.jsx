function UserList (props){
    return(
    
        <div className="user-card">
            <h1 className="name1">{props.name}</h1>
            
            
            <p className="price1">Price:{props.price}₸</p>
    </div>
    )
} 
export default UserList