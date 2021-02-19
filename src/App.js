import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getposts } from './Actions.js'
import './App.css'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data_array: [],
            splice_araay:[]
        }

    }
    componentDidMount() {
        console.log("props",this.props.Reducers.Reducers)
        this.setState((prev) => {
            let st = prev;
            st.data_array=this.props.Reducers.Reducers.user_data;
            return st;
        },()=>{});
    }
    handleClick=(value,item)=>{
        // this.props.history.push("/")
        if(value==="edit"){
            this.handleDelete();
        }
        this.props.history.push({
            pathname : '/',
            state :{
                item : item,
                value : value,
            }
        })
    }
    handleDelete=(e,index)=>{
        let array=this.state.data_array;
         setTimeout(array.splice(index,1), 1000);
        
        this.setState((prev) => {
            let st = prev;
            st.data_array=array;
            return st;
        },()=>{

        });
    }
    render() {
        var Addresslen = Object.keys(this.props.Reducers.Reducers.user_data).length;
        return (
            <div className="App pl-5 pr-5 pt-5 ml-5 mr-5 mt-5">
                <table className="w-100" >
                    <tr>
                        <th className="Apps">S/NO</th>
                        <th className="Apps">Email</th>
                        <th className="Apps">Password</th>
                        <th className="Apps">CellNumber</th>
                        <th className="Apps">Edit</th>
                        <th className="Apps">Delete</th>
                    </tr>
                    {Addresslen > 0 ?
                        this.state.data_array.map((item,index) => {
                            return (
                                <tr  >
                                    <td className="Apps">{index + 1}</td>
                                    <td className="Apps">{item.email}</td>
                                    <td className="Apps">{item.password}</td>
                                    <td className="Apps">{item.cellNumber}</td>
                                    <td className="Apps"><p  className="mb-0 cursor_pointer font_colourrr" onClick={(e)=>this.handleClick("edit",item)}>EDIT</p></td>
                                    <td className="Apps">< p className="mb-0 cursor_pointer font_colourrr" onClick={(e)=>this.handleDelete(e,index)}>DELETE</p></td>
                                </tr>
                            )
                        }) : <></>
                    }


                </table>
                <button className="bg-transparent mt-5" onClick={(e)=>this.handleClick("new",)}>Add new User</button>
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
    getposts: () => dispatch(getposts()),
})
export default connect(mapStateToProps, mapDispachToProps)(App);
