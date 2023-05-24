function Card({item, id, handleClick}){
    return (
        <div className = "card" onClick={() => handleClick(id)}>
            <img src = {item.img} alt = "image"> 
            </img>
        </div>
    )
}

export default Card;