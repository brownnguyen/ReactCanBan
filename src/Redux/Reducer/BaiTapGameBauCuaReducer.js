import { DAT_CUOC, PLAY_GAME } from "../Action/TypeGameBauCua";

const stateGame = {
    tongDiem: 100,
    danhSachCuoc: [
        { ma: 'bau', hinhAnh: './gameImg/bau.PNG', diemCuoc: 0 },
        { ma: 'ca', hinhAnh: './gameImg/ca.PNG', diemCuoc: 0 },
        { ma: 'cua', hinhAnh: './gameImg/cua.PNG', diemCuoc: 0 },
        { ma: 'ga', hinhAnh: './gameImg/ga.PNG', diemCuoc: 0 },
        { ma: 'nai', hinhAnh: './gameImg/nai.PNG', diemCuoc: 0 },
        { ma: 'tom', hinhAnh: './gameImg/tom.PNG', diemCuoc: 0 }
    ],
    dsXucXac: [
        { ma: 'bau', hinhAnh: './gameImg/bau.PNG' },
        { ma: 'bau', hinhAnh: './gameImg/bau.PNG' },
        { ma: 'bau', hinhAnh: './gameImg/bau.PNG' }
    ]
}
const GameBauCuaReducer = (state = stateGame, action) => {
    let { type, payload } = action;
    switch (type) {
        case DAT_CUOC:
            {
                //Tìm quan cược được đặt trong danhsachcuoc
                let danhSachUpdate = [...state.danhSachCuoc];
                let index = danhSachUpdate.findIndex(item => item.ma === payload);
                if (state.tongDiem > 0) {
                    danhSachUpdate[index].diemCuoc += 10;
                    // trừ tổng điểm
                    state.tongDiem -= 10;
                }
                state.danhSachCuoc = danhSachUpdate;
                return { ...state }
            }
        case PLAY_GAME:
            {
                //Xử lý xúc xắc ngẫu nhiên
                let mangXucXacNgauNhien = [];
                for (let i = 0; i < 3; i++) {
                    let soNgauNhien = Math.floor(Math.random() * 6);
                    //Tạo xúc xắc ngẫu nhiên từ số ngẫu nhiên là danh sách cược;
                    let xxNgauNhien = {
                        ma: state.danhSachCuoc[soNgauNhien].ma,
                        hinhAnh: state.danhSachCuoc[soNgauNhien].hinhAnh
                    }
                    mangXucXacNgauNhien.push(xxNgauNhien);
                }
                state.dsXucXac = mangXucXacNgauNhien;
                //xử lý cộng điểm
                mangXucXacNgauNhien.forEach((xucxacNN) => {
                    //Mỗi lần duyệt lấy 1 viên xúc xắc kiểm tra trong mảng cược
                    let indexQuanCuoc = state.danhSachCuoc.findIndex(quanQuoc => quanQuoc.ma === xucxacNN.ma);
                    if (indexQuanCuoc !== -1) //nếu tìm thấy xúc xắc có trong quân cược -> xử lý tăng tổng điểm dựa vào điểm cược của quân cược đó
                    {
                        state.tongDiem += state.danhSachCuoc[indexQuanCuoc].diemCuoc;
                    }
                })
                state.danhSachCuoc.forEach((quanCuoc) => {
                    let indexXucXac = mangXucXacNgauNhien.findIndex(xucxacNN => xucxacNN.ma === quanCuoc.ma);
                    if (indexXucXac !== -1) {
                        state.tongDiem += quanCuoc.diemCuoc;
                    }
                })
                //reset điểm cược
                state.danhSachCuoc = state.danhSachCuoc.map((quanCuoc, index) => {
                    return { ...quanCuoc, diemCuoc: 0 }
                })
                return { ...state }
            }
        default:
            return { ...state }
    }
}
export default GameBauCuaReducer;