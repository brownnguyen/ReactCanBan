import React, { Component } from 'react';
import SanPham from './SanPham';

class DanhSachSanPham extends Component {
    mangSP = [
        { maSP: 1, tenSP: 'black car', hinhAnh: './CarBasic/products/black-car.jpg', gia: 10000 },
        { maSP: 2, tenSP: 'red car', hinhAnh: './CarBasic/products/red-car.jpg', gia: 20000 },
        { maSP: 3, tenSP: 'silver car', hinhAnh: './CarBasic/products/silver-car.jpg', gia: 30000 },
        { maSP: 3, tenSP: 'Steel car', hinhAnh: './CarBasic/products/steel-car.jpg', gia: 30000 }
    ];
    renderSanPham = () => {
        return this.mangSP.map((item, index) => {
            return (
                <div className="col-3" key={index}>
                    <SanPham xe={item}/>
                </div>
            )
        })
    }
    render() {
        return (
            <div className="container">
                <h3 className="text-center mt-3">Danh sách sản phẩm</h3>
                <div className="row">
                    {this.renderSanPham()}
                </div>
            </div>
        );
    }
}

export default DanhSachSanPham;