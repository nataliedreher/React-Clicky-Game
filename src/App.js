import React, { Component } from "react";
import ImageCard from "./components/ImageCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import images from "./images.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    images
  };

  removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ friends });
  };

  render() {
    return (
      <>
      <Title score="0" highScore="0"></Title>
      <div className="">

      <Wrapper>

        {this.state.images.map(image => (
          <ImageCard
            removeFriend={this.removeFriend}
            id={image.id}
            key={image.id}
            image={image.image}
          />
        ))}
      </Wrapper>
      </div>
      </>
    );
  }
}

export default App;
