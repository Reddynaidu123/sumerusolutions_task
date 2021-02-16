import React, { Component } from 'react';
import { Row, Col, Button, Modal } from 'antd';
class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      jsondata: "",
      price: null,
      qty: null
    }
    this.handleMainFunc = this.handleMainFunc.bind(this)
    this.checkout = this.checkout.bind(this)
  }
  componentDidMount() {
    fetch('data.json').then(response => {
      return response.json();
    }).then(data => {
      this.setState({ jsondata: data.hello })
    }).catch(err => {
      console.log("Error Reading data " + err);
    });
  }
  componentDidUpdate() {

  }
  handleAdd(Productname) {
    let v = this.state.jsondata
    for (var i in v) {
      if (v[i].Productname === Productname) {
        v[i].items += 1
        this.setState({ jsondata: v })
      }
    }
    let price = null
    let qty = null
    for (var i in v) {
      qty += v[i].items
      price += v[i].items * v[i].MRP
    }
    this.setState({ qty: qty })
    this.setState({ price: price })
  }
  handleDecrease(Productname) {
    let v = this.state.jsondata
    for (var i in v) {
      if (v[i].Productname === Productname) {
        if (v[i].items > 0) {
          v[i].items -= 1
          this.setState({ jsondata: v })
        }
      }
    }
    let price = null
    let qty = null
    for (var i in v) {
      qty += v[i].items
      price += v[i].items * v[i].MRP
    }
    this.setState({ qty: qty })
    this.setState({ price: price })
  }
  checkout() {
    let v = this.state.jsondata
    let price = 0
    for (var i in v) {
      price += v[i].items * v[i].MRP
    }
    Modal.success({
      title: 'Transaction Succesfull',
      content: price,
    });
  }

  handleMainFunc() {
    let array = [];
    let k = this.state.jsondata
    for (var i in k) {
      array.push(
        <Row>
          <Row>
            <Col xs={6} sm={6} lg={6} md={6}></Col>
            <Col xs={5} sm={5} lg={5} md={5}>
              <img src={k[i].ImageURL} height="100" width="100" />
              <br></br>
              &nbsp;&nbsp;&nbsp;&nbsp; {k[i].OfferText}
            </Col>
            <Col xs={1} sm={1} lg={1} md={1}></Col>
            <Col xs={3} sm={3} lg={3} md={3}>
              <span style={{ fontWeight: "bold" }}> {k[i].Brandname}</span>  <br></br>{k[i].Productname}<br></br> {k[i].Quantity}<br></br>MRP {k[i].Price} <br></br>RS {k[i].MRP}
              <br></br>
              <Button type="primary" onClick={this.handleAdd.bind(this, k[i].Productname)}>ADD CART</Button>
            &nbsp;&nbsp;&nbsp;
            <Button type="primary" shape="circle" onClick={this.handleAdd.bind(this, k[i].Productname)} >+</Button>    {k[i].items}   <Button type="primary" shape="circle" onClick={this.handleDecrease.bind(this, k[i].Productname)}>-</Button>

            </Col>
            <br></br>

            <Col xs={9} sm={9} lg={9} md={9}></Col>
          </Row>
          <Row><hr style={{ color: "black" }} ></hr> </Row>
        </Row>

      );
    }
    return array;
  }
  render() {
    return (
      <div  >
        {this.handleMainFunc()}
        <Row>
          <Col xs={6} sm={6} lg={6} md={6}></Col>
          <Col xs={5} sm={5} lg={5} md={5}>
            QTY:{this.state.qty} <br></br>
            TOTAL:{this.state.price}
          </Col>
          <Col xs={1} sm={1} lg={1} md={1}></Col>
          <Col xs={3} sm={3} lg={3} md={3}>
            <Button type="primary" onClick={this.checkout}>CHECKOUT</Button>
            <br></br> <br></br> <br></br> <br></br>
          </Col>
          <Col xs={9} sm={9} lg={9} md={9}></Col>
        </Row>
      </div>
    );
  }
}

export default App;