const initialState = {
    gioHang: [
        { maSP: 1, tenSP: 'black car', hinhAnh: './CarBasic/products/black-car.jpg',soLuong:1, gia: 10000 }
    ]
}
const BaiTapGioHangReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return { ...state }
    }
}
export default BaiTapGioHangReducer;