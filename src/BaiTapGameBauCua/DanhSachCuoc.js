import React, { Component } from 'react'
import { connect } from 'react-redux'
import { datCuoc } from '../Redux/Action/gameBauCuaAction';

class DanhSachCuoc extends Component {
    renderDanhSachCuoc = () => {
        let { danhSachCuoc } = this.props;
        return danhSachCuoc.map((item, index) => {
            return (
                <div className="col-4 pb-3" key={index} onClick={() => this.props.diemCuoc(item.ma)} style={{cursor:"pointer"}}>
                    <div className="card">
                        <img src={item.hinhAnh} width={250} height={150} alt={item.ma} />
                        <div className="card-body bg-light">
                            <h2 className="card-text text-danger text-center">{item.diemCuoc}</h2>
                        </div>
                    </div>
                </div>
            )
        })
    }
    // diemCuoc = (ma) => {
    //     let action = {
    //         type: "DIEM_CUOC",
    //         ma
    //     }
    //     this.props.dispatch(action);
    // } =>> đây là cách 2, cách này không cần viết phương thức mapDispatchToProps
    render() {
        return (
            <div className="container">
                <div className="row mt-5 px-5">
                    {this.renderDanhSachCuoc()}
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    danhSachCuoc: state.GameBauCuaReducer.danhSachCuoc
})
const mapDispatchToProps = (dispatch) => ({
    diemCuoc: (ma) => {
        dispatch(datCuoc(ma))
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(DanhSachCuoc);
