import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import { getposts } from './Actions.js'
import './App.css'
let data_array=["All","Completed","In Progress"];
function App(props) {
    const [state, setsState] = useState([]);
    const [filterstate, setfilterstate] = useState([]);
    const [flag, setFlag] = useState(true);
    const [statusSelected, setstatusSelected] = useState("Select Status");

    useEffect(() => {
        if (flag) {
          props.getposts();
            settingvalues();
        }
    }, [props.Reducers.posts])

    const settingvalues = () => {
        let values = props.Reducers.posts;
        setsState(values);
        setfilterstate(values);
    }
    const handleChange = (e, data) => {
        let values=state;
        setFlag(false);
        setstatusSelected(data);
        const lowerCaseFilter = data.toLowerCase();
        let filterData = state.filter((program) => {
            return program.status.toLowerCase().includes(lowerCaseFilter)
        })
        if(data!=="All"){
            setfilterstate(filterData) 
        }else{
            setfilterstate(values)
        }
    }
    var datalength = filterstate !== undefined ? filterstate.length : 0;

    return (
        <div className="App">
            <h1 className="Apps_tex mt-3 mb-2 text-center">Hello KaayLabs</h1>

            <div className="row pb-5 mr-0">
                <div className="col-3"></div>
                <div className="col-6 d-flex">
                    <p className="Apps_text">
                        Select here to Filter Data from table :
            </p>
                    <div class="dropdown ml-3 pt-2">
                        <button type="button" class="bg-transparent dropdown-toggle" data-toggle="dropdown">
                            {statusSelected}
                            <span class="caret"></span>
                        </button>
                        <ul class="dropdown-menu" role="menu">
                            {data_array.map((item)=>{
                                return(
                                    <li className="ml-4" onClick={(e) => handleChange(e, item)}><p className="mb-0">{item}</p></li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
            <table className="w-100" >
                <tr>
                    <th className="Apps">S/NO</th>
                    <th className="Apps">project_id</th>
                    <th className="Apps">project_code</th>
                    <th className="Apps">description</th>
                    <th className="Apps">start_date</th>
                    <th className="Apps">end_date</th>
                    <th className="Apps">company_name</th>
                    <th className="Apps">status</th>
                </tr>
                {datalength > 0 ?
                    filterstate.map((item, index) => {
                        return (
                            <tr  >
                                <td className="Apps">{index + 1}</td>
                                <td className="Apps">{item.project_id}</td>
                                <td className="Apps">{item.project_code}</td>
                                <td className="Apps">{item.description}</td>
                                <td className="Apps">{item.start_date}</td>
                                <td className="Apps">{item.end_date}</td>
                                <td className="Apps">{item.company_name}</td>
                                <td className="Apps">{item.status}</td>
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
