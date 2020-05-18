//state mặc định của reducer
const stateModal = {
    thongTinXe: { maSP: 1, tenSP: 'black car', hinhAnh: './CarBasic/products/black-car.jpg', gia: 10000 }
    //khai báo nhiều thuộc tính khác
}
const BaiTapQuanLyReducer = (state = stateModal, action) => {
    switch (action.type) {
        case "XEM_CHI_TIET": {
            return {
                ...state, thongTinXe: action.thongTinXe
            }
        }
        default:
            return { ...state }
    }
}
export default BaiTapQuanLyReducer;