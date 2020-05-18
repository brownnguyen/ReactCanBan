import React, { Component } from 'react';

class SanPham extends Component {
    render() {
        let {hinhAnh, tenSP,maSP, gia} = this.props.xe;
        return (
            <div className="card">
                <img className="card-img-top" src={hinhAnh} alt={maSP} />
                <div className="card-body">
                    <h4 className="card-title">{tenSP}</h4>
                    <p className="card-text">{gia}</p>
                    <button className="btn btn-success" data-toggle="modal" data-target="#modelId">Thêm sản phẩm</button>
                </div>
            </div>

        );
    }
}

export default SanPham;