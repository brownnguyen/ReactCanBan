import Axios from 'axios';


export const layDanhSachPhim = () => {
    return dispatch => {
        Axios({
            url: "http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
            method: "GET"
        }).then(result => {
            dispatch({
                type: "LAY_DANH_SACH_PHIM",
                danhSachPhim: result.data
            })
        }).catch(error => {
            console.log(error.response.data)
        })
    }
}