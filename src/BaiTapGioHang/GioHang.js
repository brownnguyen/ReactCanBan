import React, { Component } from 'react';
import { connect } from 'react-redux';
class GioHang extends Component {
    renderGioHang = () => {
        return this.props.gioHang.map((item, index) => {
            return (
                <tr key={index}>
                    <th>{item.maSP}</th>
                    <th><img src={item.hinhAnh} alt={item.tenSP} width={150}/></th>
                    <th>{item.tenSP}</th>
                    <th>{item.soLuong}</th>
                    <th>{item.gia}</th>
                    <th>{item.gia * item.soLuong}</th>
                </tr>
            )
        })
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
                </table>
            </div>
        );
    }
}
//hàm lấy dữ liệu từ rootReducer về chuyển thành props của component
const mapStateToProps = (state) => ({
    gioHang: state.StateGioHang.gioHang
})
export default connect(mapStateToProps)(GioHang);