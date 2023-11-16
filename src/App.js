import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: 'John Doe',
        bio: 'A person with an interesting life story.',
        imgSrc: 'https://example.com/john-doe.jpg',
        profession: 'Software Developer',
      },
      shows: true,
      timeSinceMount: 0,
    };
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState((prevState) => ({
        timeSinceMount: prevState.timeSinceMount + 1,
      }));
    }, 1000); // Update every second
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  toggleShow = () => {
    this.setState((prevState) => ({
      shows: !prevState.shows,
    }));
  };

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { shows, timeSinceMount } = this.state;

    return (
      <div>
        <h1>Person Information</h1>
        {shows && (
          <div>
            <p>Full Name: {fullName}</p>
            <p>Bio: {bio}</p>
            <p>Profession: {profession}</p>
            <img src={imgSrc} alt={fullName} />
          </div>
        )}
        <button onClick={this.toggleShow}>Toggle Information</button>
        <p>Time since mount: {timeSinceMount} seconds</p>
      </div>
    );
  }
}

export default App;
