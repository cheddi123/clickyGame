import React from "react";
import Header from "./components/Header/Header"
import Images from "./components/Images/Images"
import Body from "./components/Body/Body"

function shuffleImages(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
};

class App extends React.Component {
  // Setting the initial state of the Counter component
  state = {
    count: 0,
    topScore: 0,
    isClicked: [],
    Images,
    rightWrong: "",
  };

  handleClick = id => {
    if (this.state.isClicked.indexOf(id) === -1) {
      this.handleIncrement();
      this.setState({ isClicked: this.state.isClicked.concat(id) });
      console.log(id)
      console.log(this.state.isClicked.indexOf(id))
    } else {
      this.handleReset();
      console.log(id)
     console.log(this.state.isClicked.indexOf(id)) 

    }
  };



  // handleIncrement increments this.state.count by 1
  handleIncrement = () => {
    const newScore = this.state.count + 1;
    // We always use the setState method to update a component's state
    this.setState({
      count: newScore,
      isClicked: this.state.isClicked
    });
    if (newScore >= this.state.topScore) {
      this.setState({ topScore: newScore });
    }
    else if (newScore === 8) {
      this.setState({ rightWrong: "You win!" });
    }
    this.handleShuffle();
    
  };

  handleReset = () => {
    this.setState({
      count: 0,
      topScore: this.state.topScore,
      IsClicked: [],
      rightWrong: "Play again",
    });
    this.handleShuffle();
  };

  handleShuffle = () => {
    let rearrangedImages = shuffleImages(Images);
    this.setState({ Images: rearrangedImages });
  };
  

  // The render method returns the JSX that should be rendered
  render() {

    return (
      <div>
        <div className="card text-center">
          <Header 
          count={this.state.count} 
          topCount={this.state.topScore}
          />
          <div className="card-header bg-primary text-white">
           
        </div>

        </div>
        {this.state.Images.map((image) => (
          <span className="container" key={image.id}>

            <button className="btn"  >
              <Body

                photo={image.img}
                id={image.id}
                handleClick={this.handleClick}
                handleIncrement={this.handleIncrement}
                handleReset={this.handleReset}
                handleShuffle={this.handleShuffle}
              />

            </button>

          </span>

        ))}
      </div>
    );
  }

}

export default App;
