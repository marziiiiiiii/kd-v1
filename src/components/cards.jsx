import React, { Component } from "react";
import CardDemo from "./cardDemo";
import Card from "./card";

// export enum Sizes{ //https://stackoverflow.com/questions/49746638/how-to-use-enum-as-props-in-react-typescript
//   Small,
//   Large
// }                    // todo


class cards extends Component {

  // constructor(props){
  //   super(props);
    
  //   this.renderCardDemos= this.renderCardDemos.bind(this);

  // }
  

  state = {

    cardDemos: [
      { id: 1, tag: "birth", url: "https://i.pinimg.com/564x/73/07/35/730735b57fad8cebf3fd3f1ccdabf93e.jpg" },
      { id: 2, tag: "wed", url: "https://5.imimg.com/data5/DA/KL/MY-24181182/wedding-decorative-card-500x500.png" },
      { id: 3, tag: "birth", url: "https://images-na.ssl-images-amazon.com/images/I/81xOHdqOTVL._AC_SX425_.jpg"},
      { id: 4, tag: "birth", url: "https://i.123g.us/c/birth_happybirthday/card/343015.gif" },
      // { id: 5, tag: "wed", url: "https://us.123rf.com/450wm/vivalentino/vivalentino1505/vivalentino150500027/40687557-flower-wedding-invitation-card-save-the-date-card-greeting-card.jpg?ver=6" },
      { id: 6, tag: "wed", url: "https://i.pinimg.com/564x/cd/b3/ee/cdb3ee04379fdb885513887243d1e509.jpg"},
      { id: 7, tag: "wed", url: "https://cdn.nohat.cc/thumb/f/720/5706235600961536.jpg"},
      { id: 8, tag: "wed", url: "https://image.freepik.com/free-vector/floral-wedding-frame-template_52683-98.jpg?2"},
      { id: 9, tag: "birth", url: "https://image.freepik.com/free-vector/floral-wedding-frame-template_52683-105.jpg?2"},
    ],
  };


  openCard = card => {
    console.log("omadam")
    return  (<div>
      <Card key={card.id}/>
    </div>) ;
    
  }

  handleDelete = (cardId) =>{

    const cardDemos = this.state.cardDemos.filter(c => c.id !==cardId)
    this.setState({ cardDemos})
  } 


  renderCardDemos(){
    if (this.state.cardDemos.length===0) return( <p>there is no card!</p> );
    return (
    <div className="d-flex flex-wrap justify-content-center m-8">
              {this.state.cardDemos.map((c) => (
                <CardDemo key={c.id} card={c} onDelete={this.handleDelete} onOpen={this.openCard}/>
              ))}
            </div>) ;
  }

  render() {
    const elem= this.renderCardDemos();
    return (
      <div>
      {elem}
      </div>
    );
  }
}

export default cards;
