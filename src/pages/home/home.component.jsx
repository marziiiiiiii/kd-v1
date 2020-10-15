import React, { Component } from "react";

import CategoryList from "../../components/categorys/categorys.component";
import "./home.styles.scss";

class home extends Component {
  render() {
    return (
      <div className="home">
        <div>
          <CategoryList />
        </div>
      </div>
    );
  }
}

export default home;

// { id: 1, tag: "birth", url: "https://i.pinimg.com/564x/73/07/35/730735b57fad8cebf3fd3f1ccdabf93e.jpg" },
// { id: 2, tag: "wed", url: "https://5.imimg.com/data5/DA/KL/MY-24181182/wedding-decorative-card-500x500.png" },
// { id: 3, tag: "birth", url: "https://images-na.ssl-images-amazon.com/images/I/81xOHdqOTVL._AC_SX425_.jpg"},
// { id: 4, tag: "birth", url: "https://i.123g.us/c/birth_happybirthday/card/343015.gif" },
// // { id: 5, tag: "wed", url: "https://us.123rf.com/450wm/vivalentino/vivalentino1505/vivalentino150500027/40687557-flower-wedding-invitation-card-save-the-date-card-greeting-card.jpg?ver=6" },
// { id: 6, tag: "wed", url: "https://i.pinimg.com/564x/cd/b3/ee/cdb3ee04379fdb885513887243d1e509.jpg"},
// { id: 7, tag: "wed", url: "https://cdn.nohat.cc/thumb/f/720/5706235600961536.jpg"},
// { id: 8, tag: "wed", url: "https://image.freepik.com/free-vector/floral-wedding-frame-template_52683-98.jpg?2"},
// { id: 9, tag: "birth", url: "https://image.freepik.com/free-vector/floral-wedding-frame-template_52683-105.jpg?2"},

// class home extends Component {
//   constructor() {
//     super();
//     this.state = {
//       cardDemos: [],
//       searchField: "",
//     };
//   }

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users") //.typicode.com
//       .then((response) => response.json())
//       .then((users) => this.setState({ cardDemos: users }));
//   }

//   handleDelete = (cardId) => {
//     const cardDemos = this.state.cardDemos.filter((c) => c.id !== cardId);
//     this.setState({ cardDemos });
//   };

//   handleChange = (ev) => {
//     this.setState({ searchField: ev.target.value });
//     //   , () =>
//   };

//   render() {
//     const { cardDemos, searchField } = this.state;
//     const filterDemos = cardDemos.filter((cd) =>
//       cd.name.toLowerCase().includes(searchField.toLowerCase())
//     );

//     return (
//       <div className="home">
//         {/* <Navbar /> */}
//         <div>
//           {/* <SearchBox
//             placeholder="search monster"
//             onChange={this.handleChange}
//           /> */}
//           <CardDemoList cDemos={filterDemos} />
//         </div>
//       </div>
//     );
//   }
// }
