import React, { Component } from 'react';

class Phim extends Component {
    render() {
        let { item } = this.props;
        return (
            <div className="card my-3">
                <img className="card-img-top" src={item.hinhAnh} alt={item.biDanh} height={250} />
                <div className="card-body px-3">
                    <h4 className="card-title">{item.tenPhim.length > 15 ? item.tenPhim.substr(0, 15) + "..." : item.tenPhim}</h4>
                    <p className="card-text">{item.moTa.length > 70 ? item.moTa.substr(0, 70) + "..." : item.moTa}</p>
                </div>
            </div>
        );
    }
}
export default Phim;