import { DAT_CUOC, PLAY_GAME } from "./TypeGameBauCua"

// vì file tổng hợp nhiều action nên export theo từng action 
export const datCuoc = (ma) => {
    return {
        type: DAT_CUOC,
        payload: ma
    }
}
export const playGame = () => {
    return {
        type: PLAY_GAME,
    }
}