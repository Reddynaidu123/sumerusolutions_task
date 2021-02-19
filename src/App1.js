import React, { Component } from 'react';
import './App.css'
import { connect } from 'react-redux'
import { getposts } from './Actions.js';

class App1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            cellNumber: "",
            button_value:"Submit"
        }
    }
    handleLogin = () => {
        if (this.state.email !== "" && this.state.password !== "" && this.state.cellNumber !== "") {
            console.log("this.state", this.state)
            this.props.getposts(this.state);
            this.props.history.push("/tables")
        } else {
            alert("Please fill all Input Fileds")
        }
    }
    handleChange = ({ target }) => {
        this.setState({ [target.name]: target.value }, () => { });
    }
    componentDidMount() {
     console.log("111111",this.props.location.state);
     if(this.props.location.state && this.props.location.state.item !== undefined){
        this.setState((prev) => {
            let st = prev;
            st.email=this.props.location.state.item.email;
            st.password=this.props.location.state.item.password;
            st.cellNumber=this.props.location.state.item.cellNumber;
            st.button_value="update"
            return st;
        });
     }else{
        this.setState((prev) => {
            let st = prev;
            st.email="";
            st.password="";
            st.cellNumber="";
            st.button_value="submit"

            return st;
        });
     }

    }
    render() {
        return (
            <div className="row pt-5 mt-5">
                <div className="col-4"></div>
                <div className="col-5">

                    <form onSubmit={this.handleLogin}>
                        <div className="d-flex">
                            <p className="pr-5 ml-2 mb-0">Email :</p>
                            <input name="email" value={this.state.email} className="input_width" onChange={this.handleChange} placeholder="Enter your Email"></input>
                        </div>
                        <div className="d-flex mt-3">
                            <p className="pr-4 ml-1 mb-0">Password :</p>
                            <input name="password" value={this.state.password} type="password" className="input_width" onChange={this.handleChange} placeholder="enter your Password"></input>
                        </div>
                        <div className="d-flex mt-3">
                            <p className="pr-1 ml-1 mb-0">Cell Number :</p>
                            <input name="cellNumber" value={this.state.cellNumber} className="input_width" onChange={this.handleChange} placeholder="Enter your cellNumber"></input>
                        </div>
                        <div className="mt-3 ">
                            <button type="submit" className="pr-5  button_alignments bg-transparent"> {this.state.button_value}</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (Reducers) => {
    return {
        Reducers
    }
}
const mapDispachToProps = dispatch => ({
    getposts: (state) => dispatch(getposts({ state: state })),
})
export default connect(mapStateToProps, mapDispachToProps)(App1);