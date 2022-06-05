import React from "react";

class Incrementer extends React.Component{
    constructor(props) {
        super(props);
        this.state={n: props.start}
    }

    componentDidMount() {
       this.timerId= window.setInterval(this.increment.bind(this),2000);
    }
    componentWillUnmount() {
        window.clearInterval(this.timerId);
    }

    increment(){
        this.setState((state, props)=>{
            return {n :state.n + 1}
        });
    }

    render() {
        return(
            <div>
                <p>Count: {this.state.n}</p>
            </div>
        )

    }
}
export default Incrementer;