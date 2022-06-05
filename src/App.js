import './App.css';
import React from 'react';


class Clock extends React.Component {
  constructor(props){
      super(props);
      this.state={date: new Date()};
      this.timerId =null;
  }

  componentDidMount() {
      this.timerId= window.setInterval(()=>{
          this.tick();
      },1000);
  }

  componentWillUnmount() {
      window.clearInterval(this.timerId);
  }

  tick(){
      this.setState({date: new Date()})
  }

    render() {
      return (
          <div>
            <h1>Bonjour tout le monde!!!</h1>
              <p>Il est {this.state.date.toLocaleTimeString()}</p>
          </div>
      )
  }
}

export default Clock;
