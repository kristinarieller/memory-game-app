import { useState } from "react";
import Card from './Card'

function Cards() {
const [items, setItems] = useState([
    {id: 1, img:'/img/borzoi.jpg', stat: ""},
    {id: 1, img:'/img/borzoi.jpg', stat: ""},
    {id: 2, img:'/img/cavalier.jpeg', stat: ""},
    {id: 2, img:'/img/cavalier.jpeg', stat: ""},
    {id: 3, img:'/img/dachshund.jpg', stat: ""},
    {id: 3, img:'/img/dachshund.jpg', stat: ""},
    {id: 4, img:'/img/round.jpg', stat: ""},
    {id: 4, img:'/img/round.jpg', stat: ""},
    {id: 5, img:'/img/shiba.jpg', stat: ""},
    {id: 5, img:'/img/shiba.jpg', stat: ""},
    {id: 6, img:'/img/terrier.jpg', stat: ""},
    {id: 6, img:'/img/terrier.jpg', stat: ""}
].sort(() => Math.random() - 0.5))

function handleClick(id){
  alert(id)
}

    return (
      <div className="container">
        {items.map((item, index)=> (
          <Card key = {index} item = {item} id = {index} handleClick = {handleClick}
          ></Card>


        ))}
    
      </div>
    );
  }
  
  export default Cards;