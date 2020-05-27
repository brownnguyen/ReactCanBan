import React, { Component } from 'react';
import { connect } from 'react-redux';
import { playGame } from '../Redux/Action/gameBauCuaAction';
class XucXac extends Component {
    renderXucXac = () => {
        let { dsXucXac } = this.props;
        return dsXucXac.map((item, index) => {
            return (
                <img src={item.hinhAnh} width={50} key={index} alt={item.ma} />
            )

        })
    }
    handlePlayGame = () => {
        this.props.dispatch(playGame())
    }
    render() {
        return (
            <div className="container-fluid">
                <h3 className="text-center text-success">Bài tập game bầu cua</h3>
                <div className="row">
                    <div className="col-2">
                        <button className="btn btn-success" onClick={() => this.handlePlayGame()}>Play game</button>
                    </div>
                    <div className="col-8 text-center">
                        {this.renderXucXac()}
                    </div>
                    <div className="col-2">
                        <h2>{this.props.tongDiem} $</h2>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    tongDiem: state.GameBauCuaReducer.tongDiem,
    dsXucXac: state.GameBauCuaReducer.dsXucXac

})
export default connect(mapStateToProps)(XucXac)
