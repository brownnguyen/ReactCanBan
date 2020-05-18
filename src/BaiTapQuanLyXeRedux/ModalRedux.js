import React, { Component } from 'react';
import { connect } from 'react-redux';
class ModalRedux extends Component {
    
    render() {
        let { thongTinXe } = this.props;
        return (
            <div>
                <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">{thongTinXe.tenSP}</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <img src={thongTinXe.hinhAnh} style={{width:"100%"}} alt={thongTinXe.tenSP}/>
                            </div>
                            <div className="modal-footer">
                                <h5>{thongTinXe.gia}</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => { //state là rootReducer
    //Lấy dữ liệu từ state của redux => chuyển thành props của component
    return {
        thongTinXe: state.stateModal.thongTinXe
    }

}
//Kết nối giữa react component và redux store bằng thư viện connect
export default connect(mapStateToProps)(ModalRedux); // <= tạo ra component chứa state của redux