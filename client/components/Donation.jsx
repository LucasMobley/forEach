import React from 'react';
import { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './stylesheets/styles.css';


class Donations extends Component {
    constructor() {
        super();
        this.state = {
                nameInput : '', 
                donationAmount : '', 
                creditCard : '', 
                phone : '', 
                date: '', 
                email: '',
                username: '',
                password: '',
                totalRaised: ''
            }
            this.handleClick = this.handleClick.bind(this);
        }

    handleClick(event) {
        const donations = { nameInput : this.state.nameInput,
                            //nameInput : document.getElementById("nameInput").value,
                            donationAmount : this.state.donationAmount,
                            creditCard : this.state.creditCard, 
                            phone : this.state.phone, 
                            date : this.state.date, 
                            email: this.state.emai
                          };
        const members = { username : this.state.username , password : this.state.password };

        preventDefault(event);
        fetch('/donate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({donations, members})
        })

    }
    render() {

        return (
            <div>
                <form>
                    <input type="text" id="nameInput" onChange={(evt) => {
                      this.setState({
                        ...this.state,
                        nameInput: evt.target.value  
                      });
                    }}>name</input>
            
                    <input type="text" id="donationAmount" onChange={(evt) => {
                  this.setState({
                      ...this.state,
                      donationAmount: evt.target.value
                      
                });
            }}> donation amount </input>
            
                    <input type="text" id="creditCard" onChange={(evt) => {
                  this.setState({
                     ...this.state,
                     creditCard: evt.target.value
                });
            }}> creditcard </input>
            
                    <input type="text" id="phone" onChange={(evt) => {
                  this.setState({
                    ...this.state,
                    phone : evt.target.value
                });
            }} > phone number </input>
                      
                    <input type="text" id="date" onChange={(evt) => {
                  this.setState({
                    ...this.state,
                    nameInput: evt.target.value
                });
            }}> date </input>
                      
                    <input type="text" id="email" onChange={(evt) => {
                  this.setState({
                    ...this.state,
                    email: evt.target.value
                });
            }}> email </input>
                      
                    <input type="checkbox"onChange="">Would you like to become a member?</input>


                    <input type="text" id="username" onChange={(evt) => {
                  this.setState({
                    ...this.state,
                    username: evt.target.value
                });
            }}> username </input>
                      
                    <input type="text" id="password" onChange={(evt) => {
                  this.setState({
                    ...this.state,
                    password: evt.target.value
                });
            }}> password </input>
                      
                    <button onClick={this.handleClick}>Submit</button>
                </form>
            </div>

        )
    }
};

export default Donations