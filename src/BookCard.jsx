function BookCard(props){
    return(
        <div className="books">
            <h4>{props.name}</h4>
            <p >Author:{props.author}</p>
            <p >Posted:{props.post}</p>
           
        </div>
    )
}
export default BookCard