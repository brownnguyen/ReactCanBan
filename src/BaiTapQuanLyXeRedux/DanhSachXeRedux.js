import React, { Component } from 'react';
import XeRedux from './XeRedux'
class DanhSachXeRedux extends Component {
    renderXe = () => {
        return this.props.mangSP.map((xe, index) => {
            return (
                <div className="col-3" key={index}>
                    <XeRedux xe={xe} />
                </div>)
        })
    }
    render() {
        return (
            <div className="row">
                {this.renderXe()}
            </div>
        );
    }
}

export default DanhSachXeRedux;