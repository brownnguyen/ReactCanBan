import Axios from "axios";

class PhimService {
    layDanhSachPhim = () => {
        return Axios({
            url: "http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
            method: "GET"
        })
        // }).then(result => {
        //     this.setState({
        //         danhSachPhim: result.data
        //     })
        // }).catch(error => {
        //     console.log(error.response.data)
        // })
    }
}
export const phimService = new PhimService();
export const { layDanhSachPhim } = phimService;