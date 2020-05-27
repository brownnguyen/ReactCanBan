const initialState = {
    danhSachPhim: []
}
const danhSachPhimReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LAY_DANH_SACH_PHIM":
            {
                state.danhSachPhim = action.danhSachPhim;
                return { ...state }
            }
        default:
            return { ...state }
    }
}
export default danhSachPhimReducer