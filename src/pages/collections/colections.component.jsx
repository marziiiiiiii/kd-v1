import React, { Component } from "react";
import ALL_CARDS_DATA from "./collections.data";
import CollectionPreview from "../../components/collectionPreview/collectionPreview.component";

class AllCardDemos extends Component {
  constructor() {
    super();

    this.state = {
      collections: ALL_CARDS_DATA,
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div>
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default AllCardDemos;
