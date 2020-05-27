import { combineReducers } from 'redux';
import BaiTapQuanLyXeReducer from './BaiTapQuanLyXeReducer';
import GlassesState from './BaiTapThuKinhReducer';
import StateGioHang from './BaiTapGioHangReducer';
import GameBauCuaReducer from './BaiTapGameBauCuaReducer';
import danhSachPhimReducer from './BaiTapQuanLyPhimReducer';
//rootReducer là state tổng của toàn ứng dụng quản lý các state con
const rootReducer = combineReducers({
    //Nơi khai báo các state theo nghiệp vụ
    stateModal: BaiTapQuanLyXeReducer,
    //Bước 2, import state vào rootREducer
    GlassesState,
    //Khai báo state bài tập giỏ hàng
    StateGioHang,
    GameBauCuaReducer,
    danhSachPhimReducer
})
export default rootReducer;