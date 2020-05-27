import React, { Component } from 'react';
import { connect } from 'react-redux';
class SanPham extends Component {
    render() {
        let { hinhAnh, tenSP, maSP, gia } = this.props.xe;
        return (
            <div className="card">
                <img className="card-img-top" src={hinhAnh} alt={maSP} />
                <div className="card-body">
                    <h4 className="card-title">{tenSP}</h4>
                    <p className="card-text">{gia}</p>
                    <button className="btn btn-success" onClick={() => this.props.themSP(this.props.xe)} data-toggle="modal" data-target="#modelId">Thêm sản phẩm</button>
                </div>
            </div>

        );
    }
}
// mapDispatchToProps: Nhận 1 callback setState từ reduxstore
const mapDispatchToProps = (dispatch) => ({
    themSP: (item) => {
        //tạo ra 1 action: giá trị mới của state
        let action = {
            type: "THEM_SP", // thuộc tính bắt buộc để rootReducer xác định sẽ setState của reducer nào
            spGioHang : {
                ...item, soLuong: 1
            }
            // spGioHang1: { //Đây là cách kinh điển
            //     maSP: item.maSP,
            //     hinhAnh: item.hinhAnh,
            //     tenSP: item.tenSP,
            //     gia: item.gia,
            //     soLuong: 1
            // }
        }
        //đưa lên reducer bài tập giỏ hàng
        dispatch(action)
    }
})
export default connect(null, mapDispatchToProps)(SanPham);