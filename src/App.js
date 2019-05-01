import React, { Component } from "react";
import ImageCard from "./components/ImageCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import images from "./images.json";

class App extends Component {
  state = {
    images,
    score: 0,
    highScore: 0,
    message: "Click on an image to begin!"
  };

  shuffle = array => {
    array.sort(() => Math.random() - 0.5);
    for (let i = 0; i < array.length; i++) {
      array[i].id = i;
    };
  };

  componentDidMount() {
    var newImagesArr = this.state.images;
    this.shuffle(newImagesArr);
    this.setState({ images: newImagesArr });
  }

  clickHandler = id => {
    var newImagesArr = this.state.images;
    console.log(newImagesArr)
    if (!this.state.images[id].clicked) {
      newImagesArr[id].clicked = true;
      this.shuffle(newImagesArr);
      if (this.state.score >= this.state.highScore) return this.setState({ images: newImagesArr, score: this.state.score + 1, highScore: this.state.highScore + 1, message: "You guess correctly!" });
      return this.setState({ images: newImagesArr, score: this.state.score + 1, message: "You guess correctly!" });
    } else {
      newImagesArr.map(val => val.clicked = false);
      this.shuffle(newImagesArr);
      this.setState({ images: newImagesArr, score: 0, message: "You guessed incorrectly!" });
    }
  };

  render() {
    return (
      <>
        <Title message={this.state.message} score={this.state.score} highScore={this.state.highScore}></Title>
        <div className="">

          <Wrapper>

            {this.state.images.map(image => (
              <ImageCard
                id={image.id}
                key={image.id}
                clicked={image.clicked}
                image={image.image}
                onClick={() => this.clickHandler(image.id)}
              />
            ))}
          </Wrapper>
        </div>
      </>
    );
  };
};

export default App;
