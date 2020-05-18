import React, { Component } from 'react';

class BaiTapState extends Component {

    state = {
        src: "./CarBasic/products/red-car.jpg"
    }
    renderColor = (imgSrc) => {
        this.setState({
            src: imgSrc
        })
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <img src={this.state.src} alt="red-car" style={{ width: '100%' }} />
                    </div>
                    <div className="col-6">
                        <div className="card text-primary bg-light">
                            <div className="card-header">
                                Hãy chọn màu xe
                            </div>
                            <div className="card-body">
                                <div className="row my-2 py-2" style={{ border: "1px solid black", cursor: "pointer" }}
                                    onClick={() => this.renderColor("./CarBasic/products/red-car.jpg")}>
                                    <div className="col-2">
                                        <img src="./CarBasic/icons/icon-red.jpg" alt="icon" style={{ width: '100%' }} />
                                    </div>
                                    <div className="col-10 my-auto">
                                        <h4 className="text-dark">Sơn màu đỏ</h4>
                                    </div>
                                </div>
                                <div className="row my-2 py-2" style={{ border: "1px solid black", cursor: "pointer" }}
                                    onClick={() => this.renderColor("./CarBasic/products/black-car.jpg")}>
                                    <div className="col-2">
                                        <img src="./CarBasic/icons/icon-black.jpg" alt="icon" style={{ width: '100%' }} />
                                    </div>
                                    <div className="col-10 my-auto">
                                        <h4 className="text-dark">Sơn màu đen</h4>
                                    </div>
                                </div>
                                <div className="row my-2 py-2" style={{ border: "1px solid black", cursor: "pointer" }}
                                    onClick={() => this.renderColor("./CarBasic/products/silver-car.jpg")}>
                                    <div className="col-2">
                                        <img src="./CarBasic/icons/icon-silver.jpg" alt="icon" style={{ width: '100%' }} />
                                    </div>
                                    <div className="col-10 my-auto">
                                        <h4 className="text-dark">Sơn màu bạc</h4>
                                    </div>
                                </div>
                                <div className="row my-2 py-2" style={{ border: "1px solid black", cursor: "pointer" }}
                                    onClick={() => this.renderColor("./CarBasic/products/steel-car.jpg")}>
                                    <div className="col-2">
                                        <img src="./CarBasic/icons/icon-steel.jpg" alt="icon" style={{ width: '100%' }} />
                                    </div>
                                    <div className="col-10 my-auto">
                                        <h4 className="text-dark">Sơn màu xám</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer">
                                <h4> Hội đổi màu xe Việt Nam</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BaiTapState;