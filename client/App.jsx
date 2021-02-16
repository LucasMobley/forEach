import React, { Component } from 'react';
import { Counter } from './components/hook.jsx'


class App extends Component{
    constructor(props) {
      super(props);
      this.state = {};
    }

    componentDidMount() {
        console.log("inside component did mount")
        fetch('/getDonations')
          .then(res => res.json())
          .then((totals) => {
              const totalRaised = totals;
              return this.setState({
                  ...this.state,
                  totalRaised : totals
              })
          })
          .catch(err => console.log('get project: ERROR: ', err));
        }
    
render() {

    return (
        <div>
            <div className="main">
                <h1>Codesmith Alumni Scholarship</h1>
                <p>info about scholarship info about scholarship info about scholarship info about scholarship info about scholarship info about scholarship</p>   
                <h3 id="totalHomePage">Total Raised ${this.state.totalRaised}</h3>
            </div>
                <div className="btn">
                    <button id="donateHome"> Donate </button>
                    <button id="applyHome">Apply</button>  
                </div>
                <Counter />

        </div>
    )
}

};

export default App;