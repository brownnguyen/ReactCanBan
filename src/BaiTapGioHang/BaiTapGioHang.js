import React, { Component } from 'react';
import GioHang from './GioHang';
import DanhSachSanPham from './DanhSachSanPham';

class BaiTapGioHang extends Component {
    render() {
        return (
            <div className='container-fluid'>
                <DanhSachSanPham/>
                <GioHang/>
            </div>
        );
    }
}

export default BaiTapGioHang;