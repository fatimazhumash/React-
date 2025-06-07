function ProductCard (props){
    return(
    
        <div className="product-card">
            <h1 className="name1">{props.name}</h1>
            <img className="image1" style={{scale:'1,5'}}src={props.image} alt="product" width="120" height="60"/>
            
            <h4 className="price1">Price:{props.price}₸</h4>
    </div>
    )
} 
export default ProductCard