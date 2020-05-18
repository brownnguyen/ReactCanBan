import React, { Component } from 'react';

class StateDemo extends Component {
  //2 thuộc tính component
  status = false;
  name = "Hùng";

  //State là thuộc tính có sẵn của class component
  //Dùng để chứa các giá trị thay đổi khi người dùng thao tác đến giao diện.
  state = {
    status: false,
    name: "Hùng"
  }
  //gán giá trị trực tiếp qua state thì hàm render không render lại,
  //phải gán thông qua setState


  login = () => {
    // this.setState({
    //   status: true
    // })
    let newState = {
      status : true,
      name: "Meo Meo"
    }
    //phương thức this.setState(newState) : dùng để set lại giá trị mới cho state, và gọi lại hàm render
    //this.setState là hàm bất đồng bộ
    this.setState(newState, () => {
      //tham số thức 2 là hàm chạy sau khi state thay đổi và trước khi giao diện gọi hàm render
      console.log(this.state.name);
    });
  }
  renderContent = () => {
    if (this.state.status) {
      return <h1>Hello {this.state.name}</h1>
    }
    else {
      return <button onClick={this.login}>Đăng nhập</button>
    }
  }
  render() {
    return (
      <div>
        {this.renderContent()}
      </div>
    );
  }
}

export default StateDemo;