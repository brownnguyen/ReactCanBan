import React, { Component } from 'react';
import DanhSachXeRedux from './DanhSachXeRedux';
import ModalRedux from './ModalRedux';
class BaiTapQuanLyXeRedux extends Component {
    mangSP = [
        { maSP: 1, tenSP: 'black car', hinhAnh: './CarBasic/products/black-car.jpg', gia: 10000 },
        { maSP: 2, tenSP: 'red car', hinhAnh: './CarBasic/products/red-car.jpg', gia: 20000 },
        { maSP: 3, tenSP: 'silver car', hinhAnh: './CarBasic/products/silver-car.jpg', gia: 30000 },
        { maSP: 3, tenSP: 'Steel car', hinhAnh: './CarBasic/products/steel-car.jpg', gia: 30000 }
    ];
    render() {
        return (
            <div className="container my-3">
                    <DanhSachXeRedux mangSP={this.mangSP}/>
                    <ModalRedux/>
            </div>
        );
    }
}

export default BaiTapQuanLyXeRedux;