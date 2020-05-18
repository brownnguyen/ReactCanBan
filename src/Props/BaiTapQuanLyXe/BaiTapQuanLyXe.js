import React, { Component } from 'react';
import DanhSachXe from './DanhSachXe';
import Modal from './Modal';

class BaiTapQuanLyXe extends Component {
    mangSP = [
        { maSP: 1, tenSP: 'black car', hinhAnh: './CarBasic/products/black-car.jpg', gia: 10000 },
        { maSP: 2, tenSP: 'red car', hinhAnh: './CarBasic/products/red-car.jpg', gia: 20000 },
        { maSP: 3, tenSP: 'silver car', hinhAnh: './CarBasic/products/silver-car.jpg', gia: 30000 },
        { maSP: 3, tenSP: 'Steel car', hinhAnh: './CarBasic/products/steel-car.jpg', gia: 30000 }
    ];
    state = {
        thongTinXe: {}
    }
    chonXe = (xeMoi) => {
        this.setState({
            thongTinXe: xeMoi
        })
    }
    render() {
        return (
            <div className="container">
                <h3 className="text-center">Danh sách xe</h3>
                <DanhSachXe mangSP={this.mangSP} xemChiTiet={this.chonXe} />
                <Modal thongTinXe={this.state.thongTinXe} />
            </div>
        );
    }
}

export default BaiTapQuanLyXe;