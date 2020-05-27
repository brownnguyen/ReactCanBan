const initialState = {
    gioHang: []
}
const BaiTapGioHangReducer = (state = initialState, action) => {
    switch (action.type) {
        case "THEM_SP": {
            //kiểm tra sản phẩm có trong giỏ hàng hay chưa
            let gioHangUpdate = [...state.gioHang];
            let index = gioHangUpdate.findIndex((item => item.maSP === action.spGioHang.maSP));
            if (index === -1) { // = -1 tức là chưa tồn tại trong giỏ hàng, push sp vào
                gioHangUpdate = [...gioHangUpdate, action.spGioHang];
            }
            else {//hoặc != -1 tức là đã có sản phẩm, + thêm số lượng
                gioHangUpdate[index].soLuong += 1;
            }
            //gán giỏ hàng cũ = giỏ hàng mới( vì tính bất biển của redux)
            state.gioHang = gioHangUpdate;
            return { ...state }
        }
        case "XOA_SP": {
            let gioHangUpdate = [...state.gioHang];
            //tìm ra vị trí phần tử cần xóa
            let index = gioHangUpdate.findIndex((item => item.maSP === action.maSP));
            gioHangUpdate.splice(index, 1);
            //lấy state giỏ hàng gán = giỏ hàng mới
            state.gioHang = gioHangUpdate;
            return { ...state }
        }
        case "DOI_SL":
            {
                let gioHangUpdate = [...state.gioHang];
                let index = gioHangUpdate.findIndex((item => item.maSP === action.maSP));
                console.log(index);
                if(index!==-1){
                    if (action.tangGiam) {
                        gioHangUpdate[index].soLuong += 1;
                        console.log(gioHangUpdate[index].soLuong)
                    }
                    else {
                        if (gioHangUpdate[index].soLuong > 1) {
                            gioHangUpdate[index].soLuong -= 1;
                        }
                        else{
                            gioHangUpdate.splice(index,1);
                        }
                    }
                }
                state.gioHang = gioHangUpdate;
                return { ...state }
            }
        default:
            return { ...state }
    }
}
export default BaiTapGioHangReducer;