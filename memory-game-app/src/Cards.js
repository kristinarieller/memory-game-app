import { useState } from "react";
import Card from "./Card";

function Cards() {
  const [items, setItems] = useState(
    [
      { id: 1, img: "/media/borzoi.jpg", stat: "" },
      { id: 1, img: "/media/borzoi.jpg", stat: "" },
      { id: 2, img: "/media/cavalier.jpeg", stat: "" },
      { id: 2, img: "/media/cavalier.jpeg", stat: "" },
      { id: 3, img: "/media/dachshund.jpg", stat: "" },
      { id: 3, img: "/media/dachshund.jpg", stat: "" },
      { id: 4, img: "/media/round.jpg", stat: "" },
      { id: 4, img: "/media/round.jpg", stat: "" },
      { id: 5, img: "/media/shiba.jpg", stat: "" },
      { id: 5, img: "/media/shiba.jpg", stat: "" },
      { id: 6, img: "/media/terrier.jpg", stat: "" },
      { id: 6, img: "/media/terrier.jpg", stat: "" }
    ].sort(() => Math.random() - 0.5)
  );

//the first card of the pair has been clicked
const [prev, setPrev] = useState(-1)

//checking for a match
function check(current){
  if(items[current].id == items[prev].id){
    items[current].stat = "correct" 
    items[prev].stat = "correct" //both ids match
    setItems([...items])
    setPrev(-1) //the index is reset 
  }
  else{
    items[current].stat = "wrong" 
    items[prev].stat = "wrong" // no match
    setItems([...items])
    setTimeout(() => {
      items[current].stat = ""
      items[prev].stat = "" //both states are reset from active and wrong
      setItems([...items])
      setPrev(-1) //the index is reset
    },1000) //both cards are flipped back after some time
  }
}


//cards are active upon click, either it is the first card in the pair or the second card. Upon clicking the second card, it is checked for a match.
  function handleClick(id) {
    if(prev === -1){
      items[id].stat = "active"
      setItems([...items])
      setPrev(id)
    }
    else{
      check(id)
    }
  }

  return (
    <div className="container">
      {items.map((item, index) => (
        <Card
          key={index}
          item={item}
          id={index}
          handleClick={handleClick}
        ></Card>
      ))}
    </div>
  )
}

export default Cards;