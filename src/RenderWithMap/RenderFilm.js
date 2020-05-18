import React, { Component } from 'react';
import data from '../data/Render component with array/DataFilms.json';
class RenderFilm extends Component {

    renderFilm = () => {
        return data.map((item, index) => {
            return (
                <div className="col-3 my-3" key={index} >
                    <div className="card">
                        <img className="card-img-top" src={item.hinhAnh} alt="biDanh" height={350} />
                        <div className="card-body">
                            <h4 className="card-title">{item.tenPhim}</h4>
                            <p className="card-text">{item.moTa.length> 50 ? item.moTa.substr(0,50) : item.moTa}</p>
                        </div>
                    </div>
                </div>
            )
        })
    }
    render() {
        return (
            <div style={{background: "url(./data/Render component with array/background/avanger.jpg)"}}>
            <div className="container">
                <h3 className="text-center">Danh sách phim</h3>
                <div className="row">
                    {this.renderFilm()}
                </div>
            </div>
            </div>
        );
    }
}

export default RenderFilm;