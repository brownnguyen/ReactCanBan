import React, { Component } from 'react';
import {connect} from 'react-redux';
class XeRedux extends Component {
    render() {
        let {hinhAnh, tenSP, gia} = this.props.xe;
        return (
            <div className="card">
                <img className="card-img-top" src={hinhAnh} alt />
                <div className="card-body">
                    <h4 className="card-title">{tenSP}</h4>
                    <p className="card-text">{gia}</p>
                    <button className="btn btn-primary" onClick={()=>this.props.xemChiTiet(this.props.xe)} data-toggle="modal" data-target="#modelId">Xem chi tiết</button>
                </div>
            </div>

        );
    }
}

const mapDispatchToProps = (dispatch) => {// dispatch tương tự hàm setState
    return {
        xemChiTiet : (thongTinXe) => {
            //tạo ra 1 action
            let action = {
                type: "XEM_CHI_TIET",
                thongTinXe: thongTinXe
            }
            console.log(thongTinXe)
            dispatch(action)
        }
    }
}
export default connect(null, mapDispatchToProps)(XeRedux);