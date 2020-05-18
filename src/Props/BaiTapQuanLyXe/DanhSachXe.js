import React, { Component } from 'react';
import Xe from './Xe.js';
class DanhSachXe extends Component {

    renderXe = () => {
        let { mangSP } = this.props;
        return mangSP.map((xe, index) => {
            return (
                <div className="col-3" key={index}>
                    <Xe xe={xe} xemChiTiet={this.props.xemChiTiet}/>
                </div>
            )
        })
    }
    //xây dựng phương thức làm thay đổi giá trị this.thongTinXe => Để giao diện render lại

    render() {
        return (
            <div className="row my-3">
                {this.renderXe()}
            </div>
        );
    }
}

export default DanhSachXe;