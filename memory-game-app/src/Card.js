function Card({item}){
    return (
        <div className = "card">
            <img src = {item.img} alt = "image"> 
            </img>
        </div>
    )
}

export default Card;