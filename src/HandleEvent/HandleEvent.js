import React, { Component } from 'react';

class HandleEvent extends Component {

    showMess = () => {
        alert("Yoooooooooo!")
    }
    showMessParams = (title) => {
        alert(title)
    }
    showMessageCallback = (title,tag,tag2) => {
        console.log(title);
        console.log(tag);
        console.log(tag2)
    }
    //callback function là 1 function đóng vai trò dưới dạng tham số
    render() {
        return (
            <div>
                {/* cách định nghĩa function trực tiếp  */}
                <button id="btn" onClick={ function () {
                    alert("Zo zo zo!");
                }}>Push me</button>
                <button id="btn" onClick={ () => {
                    alert("Zo zo zo!");
                }}>Push me</button>
                {/* Cách định nghĩa với callback Function */}
                <button onClick={this.showMess}>Alo</button>
                {/* Cách truyền tham số dùng callback function */}
                <button onClick={() => {
                    this.showMessParams("hehehe");
                }}>Params</button>
                <button onClick={this.showMessageCallback.bind(this,"Tham số 1", " tham số 2")}>21345</button>
            </div>
        );
    }
}

export default HandleEvent;