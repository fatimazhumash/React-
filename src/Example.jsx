function Example(props){
    return(
        <div className="authors">
            <h4>Example:{props.name}</h4>
            <p >Age:{props.age}</p>
            <p className="exprofile">Profile:{props.profile}</p>
            <p>City:{props.city}</p>
        </div>
    )
}
export default Example 