import React, { Component } from 'react';
// import {  Row, Col } from 'antd';
import {Row, Col } from 'reactstrap';
import Kalyan from './App' 
// import data from "./data.json"

class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: "",
            jsondata: [],
        }

    }

    // componentDidMount() {
    //     // var array=[]
    //     console.log("in cmdmounttt")
    //     fetch('data.json').then(response => {
    //         return response.json();
    //     }).then(data => {
    //         console.log("log11111", data)
    //         this.setState({ jsondata: data })
    //     }).catch(err => {
    //         console.log("Error Reading data " + err);
    //     });
    // }
    render() {

        return (
            <div>
               <Kalyan />
               <Row>
                    <Col sm={{span:10}} md={{span:10}} lg={{span:10}} xxl={{span:10}} xl={{span:10}}/>
                    <Col sm={{span:10}} md={{span:10}} lg={{span:10}} xxl={{span:10}} xl={{span:10}}  >
                        <p>hello this is kalyan naiduuuu </p>
                    </Col>
                </Row>
                <Row>
        <Col sm={{ size: 'auto', offset: 1 }}>.col-sm-auto .offset-sm-1</Col>
        <Col sm={{ size: 'auto', offset: 1 }}>.col-sm-auto .offset-sm-1</Col>
      </Row>
      <Row>
        <Col  xs={9} sm={9} md={9} lg={9} />
        <Col  xs={9} sm={9} md={9} lg={9} >
     <h1>hiiiiiiiiiiiiiiiiiiiiiiiiiiiiii</h1>
     </Col>
      </Row>
      <Row gutter={8}>
                    <Col xs={2} sm={16} md={12} lg={8} xl={10}><b>Topic</b></Col>
                    <Col xs={20} sm={4} md={6} lg={8} xl={4}><b>MaximuScore*</b></Col>
                    <Col xs={2} sm={4} md={6} lg={8} xl={10}><b>Student's Score</b></Col>
                </Row>
         </div>
        );
    }
}
// style={{marginLeft:1400}}
export default Registration;
