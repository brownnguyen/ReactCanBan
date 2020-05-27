import React, { Component } from 'react';
import { connect } from 'react-redux';
class GioHang extends Component {
    renderGioHang = () => {
        return this.props.gioHang.map((item, index) => {
            return (
                <tr key={index}>
                    <th>{item.maSP}</th>
                    <th><img src={item.hinhAnh} alt={item.tenSP} width={75} /></th>
                    <th>{item.tenSP}</th>
                    <th>
                        <button onClick={() => { this.props.doiSoLuong(item.maSP, true) }} className="btn btn-primary">+</button>
                        {item.soLuong}
                        <button onClick={() => { this.props.doiSoLuong(item.maSP, false) }} className="btn btn-primary">-</button>
                    </th>
                    <th>{item.gia} $</th>
                    <th>{item.gia * item.soLuong} $</th>
                    <th>
                        <button onClick={() => { this.props.xoaGioHang(item.maSP) }} className="btn btn-danger">Xóa SP</button>
                    </th>
                </tr>
            )
        })
    }
    tinhTongTien = () => {
        return this.props.gioHang.reduce((tongTien, sanPhamGH) => {
            return tongTien += sanPhamGH.soLuong * sanPhamGH.gia
        }, 0)
    }
    render() {
        return (
            <div className="container">
                <h3 className="text-center mt-5">Giỏ hàng</h3>
                <table className="table text-center">
                    <thead>
                        <tr>
                            <th>Mã SP</th>
                            <th>Hình ảnh</th>
                            <th>Tên</th>
                            <th>Số lượng</th>
                            <th>Giá</th>
                            <th>Thành tiền</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderGioHang()}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan="6">Tổng tiền</td>
                            <td>{this.tinhTongTien().toLocaleString()}</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        );
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        xoaGioHang: (maSP) => {
            //Tạo action gửi lên reducer để xử lý xóa spGioHang
            let action = {
                type: "XOA_SP",
                maSP
            }
            dispatch(action);
        },
        doiSoLuong: (maSP, tangGiam) => { //nếu tangGiam = true => tăng, tangGiam = false =>  giảm
            let action = {
                type: "DOI_SL",
                tangGiam,
                maSP
            }
            dispatch(action);
        }
    }
}
//hàm lấy dữ liệu từ rootReducer về chuyển thành props của component
const mapStateToProps = (state) => ({
    gioHang: state.StateGioHang.gioHang
})
export default connect(mapStateToProps, mapDispatchToProps)(GioHang);