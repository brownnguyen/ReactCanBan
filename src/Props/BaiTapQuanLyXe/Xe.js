import React, { Component } from 'react'

export default class Xe extends Component {
    render() {
        let { hinhAnh, tenSP, gia } = this.props.xe;
        let {xemChiTiet, xe} = this.props;
        return (
            <div className="card">
                <img className="card-img-top" src={hinhAnh} alt={tenSP} />
                <div className="card-body">
                    <h4 className="card-title">{tenSP}</h4>
                    <p className="card-text">{gia}</p>
                    <button onClick={()=>xemChiTiet(xe)} className="btn btn-success" data-toggle="modal" data-target="#modelId">Xem chi tiet</button>
                </div>
            </div>
        )
    }
}
