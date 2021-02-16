import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import { getposts } from './Actions.js'
import './App.css'
function App(props) {
    const [state, setsState] = useState([]);
    const [filterstate, setfilterstate] = useState([]);
    const [flag, setFlag] = useState(true);

    useEffect(async () => {
        await props.getposts();
    }, []);
    if (flag) {
        setTimeout(
            () => settingvalues(),
            500
        );
    }
    const settingvalues = () => {
        let values = props.Reducers.posts;
        setsState(values);
        setfilterstate(values);
    }
    const handleChange = (e) => {
        setFlag(false)
        const lowerCaseFilter = e.target.value.toLowerCase();
        let filterData = state.filter((program) => {
            return program.status.toLowerCase().includes(lowerCaseFilter)
        })
        setfilterstate(filterData)
    }
    var datalength = filterstate !== undefined ? filterstate.length : 0;

    return (
        <div className="App">
            <h1 className="Apps_text">Hello KaayLabs</h1>
            <div className="Apps_text">
                Search here to Filter Data from table :  <input placeholder="Enter the status to filter data from table............." className="input_css" onChange={(e) => handleChange(e)} />
            </div>
            <table style={{ width: "100%" }} >

                <tr>
                    <th style={{ border: "1px solid black" ,fontSize:"20px"}}>S/NO</th>
                    <th style={{ border: "1px solid black" ,fontSize:"20px" }}>project_id</th>
                    <th style={{ border: "1px solid black" ,fontSize:"20px" }}>project_code</th>
                    <th style={{ border: "1px solid black" ,fontSize:"20px" }}>description</th>
                    <th style={{ border: "1px solid black" ,fontSize:"20px" }}>start_date</th>
                    <th style={{ border: "1px solid black" ,fontSize:"20px" }}>end_date</th>
                    <th style={{ border: "1px solid black" ,fontSize:"20px" }}>company_name</th>
                    <th style={{ border: "1px solid black" ,fontSize:"20px" }}>status</th>
                </tr>
                {datalength > 0 ?
                    filterstate.map((item, index) => {
                        return (
                            <tr  className="Apps">
                                <td  style={{ border: "1px solid black" }}>{index + 1}</td>
                                <td style={{ border: "1px solid black" }} >{item.project_id}</td>
                                <td style={{ border: "1px solid black" }} >{item.project_code}</td>
                                <td style={{ border: "1px solid black" }} >{item.description}</td>
                                <td style={{ border: "1px solid black" }} >{item.start_date}</td>
                                <td style={{ border: "1px solid black" }} >{item.end_date}</td>
                                <td style={{ border: "1px solid black" }} >{item.company_name}</td>
                                <td style={{ border: "1px solid black" }} >{item.status}</td>
                            </tr>
                        )
                    }) : <></>}
            </table>
        </div>
    );
}



const mapStateToProps = ({ Reducers }) => {
    return {
        Reducers
    }
}
const mapDispachToProps = dispatch => ({
    getposts: () => dispatch(getposts()),
})
export default connect(mapStateToProps, mapDispachToProps)(App);
