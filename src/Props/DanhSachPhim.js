import React, { Component } from 'react';
import Phim from './Phim.js';
class DanhSachPhim extends Component {
    //Sự khác biệt this.state và this.props
    // state để quản lý những biến thay đổi khi người dùng thao tác
    //props dùng để lấy giá trị từ component cha truyền vào, không thể gán lại giá trị
    renderPhim = () => {
        let { mangPhim } = this.props;
        return mangPhim.map((item, index) => {
            return (
                <div className="col-3" key={index}>
                    <Phim item={item} />
                </div>
            )
        })
    }
    render() {
        console.log(this.props.mangPhim)
        return (
            <div className="container">
                <div className="row">
                    {this.renderPhim()}
                </div>
            </div>
        );
    }
}

export default DanhSachPhim;