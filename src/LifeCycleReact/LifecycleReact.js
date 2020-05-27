import React, { Component } from 'react'
import { connect } from 'react-redux';
// import { layDanhSachPhim } from '../Redux/Action/QuanLyPhimAction';
import { phimService, layDanhSachPhim } from '../Services/PhimServices';
class LifecycleReact extends Component {
    //lifecycle gọi là vòng đời của react, chạy theo thứ tự mặc định của react quy định
    // constructor(props) {
    //     console.log("constructor");
    //     super(props)
    // }
    state = {
        danhSachPhim: []
    }
    // static getDerivedStateFromProps(props, state) {
    //     console.log("getDerivedStateFromProps");
    //     //hàm này chạy tước khi render
    //     //sau khi props thay đổi thì props sẽ chạy lại, trả về state mới
    //     return state;
    // }
    //componenWillReceiveProps là hàm cũ của hàm getDerivedStateFromProps 
    renderPhim = () => {
        console.log(this.state.danhSachPhim)
        return this.state.danhSachPhim.map((item, index) => {
            return (
                <div className="col-3 py-3" key={index}>
                    <div className="card" style={{ borderRadius: 0 }}>
                        <img className="card-img-top" style={{ borderRadius: 0 }} height={250} src={item.hinhAnh} alt={item.biDanh} />
                        <div className="card-body">
                            <h4 className="card-title">{item.tenPhim}</h4>
                            <p className="card-text">{item.moTa}</p>
                        </div>
                    </div>
                </div>
            )
        })
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    {this.renderPhim()}
                </div>
            </div>
        )
    }
    componentDidMount = () => {
        // console.log("componentDidMount")
        // Axios({
        //     url: "http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
        //     method: "GET"
        // }).then(result => {
        //     this.setState({
        //         danhSachPhim: result.data
        //     })
        // }).catch(error => {
        //     console.log(error.response.data)
        // })
        // this.props.layDanhSachPhim()
        // Ở componentdidmount này gọi action request data từ api
        layDanhSachPhim().then(res => {
            this.setState({ danhSachPhim: res.data }, console.log(res.data));
        }).catch(err => {
            console.log(err)
        })
    }
}
const mapDispatchToProps = (dispatch) => ({
    layDanhSachPhim: () => { // Tạo ra 1 props là this.props.layDanhSachPhim
        dispatch(layDanhSachPhim())
    }
})
const mapStateToProps = (state) => ({
    danhSachPhim: state.danhSachPhimReducer.danhSachPhim
})

export default connect(mapStateToProps, mapDispatchToProps)(LifecycleReact);