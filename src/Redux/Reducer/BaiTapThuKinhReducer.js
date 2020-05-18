

const initialState = {
    //nơi quản lý state của component BaiTapThuKinh
    glass: { id: 1, price: 30, name: 'GUCCI G8850U', url: './glassesImage/v1.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' }
}

export default (state = initialState, action) => {
    switch (action.type) {

        case "CHANGE_GLASSES":
            {
                return { ...state, glass: action.newGlass }
            }


        default:
            return state
    }
}
