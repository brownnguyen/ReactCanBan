import React, { Component } from 'react';
import { connect } from 'react-redux';
class BaiTapThuKinh extends Component {
    arrProduct = [

        { id: 1, price: 30, name: 'GUCCI G8850U', url: './glassesImage/v1.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 2, price: 50, name: 'GUCCI G8759H', url: './glassesImage/v2.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 3, price: 30, name: 'DIOR D6700HQ', url: './glassesImage/v3.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 4, price: 30, name: 'DIOR D6005U', url: './glassesImage/v4.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 5, price: 30, name: 'PRADA P8750', url: './glassesImage/v5.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 6, price: 30, name: 'PRADA P9700', url: './glassesImage/v6.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 7, price: 30, name: 'FENDI F8750', url: './glassesImage/v7.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 8, price: 30, name: 'FENDI F8500', url: './glassesImage/v8.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 9, price: 30, name: 'FENDI F4300', url: './glassesImage/v9.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

    ];
    renderGlassesList = () => {
        return this.arrProduct.map((glass, index) => {
            return (
                <div onClick={()=>this.props.changeGlasses(glass)} className="glassesItem col-4 text-center p-3 my-2" key={index} style={{ cursor: "pointer" }}>
                    <img className="bg-light" src={glass.url} alt={glass.name} width={200} />
                </div>
            )
        })
    }
    render() {
        const keyFrame = `@keyframes aniChangeGlass${Date.now()}{
            from {
                width: 0;
            }
            to{
                width: 150;
            }
        }`
        return (
            
            <div style={{ backgroundImage: 'url(./glassesImage/background.jpg)', minHeight: "2000px", backgroundSize: "100%" }}>
                <div style={{ backgroundColor: "rgba(0,0,0,.5", minHeight: "2000px" }}>
                    <h3 className="text-center text-light p-3" style={{ backgroundColor: 'rgba(0,0,0,.5' }}>Bài tập thử kính</h3>
                    <div className="container-fluid">
                    <style>{keyFrame}</style>
                        <div className="row">
                            <div className="col-6 text-center">
                                <div className="position-relative">
                                    <img className="position-absolute" style={{ width: '300px' }} src="./glassesImage/model.jpg" alt="123" />
                                    <img className="position-absolute" style={{ width: "150px", right: "157px", top: "92px", opacity: "0.8", animation:`aniChangeGlass${Date.now()} 1s` }} src={this.props.glass.url} alt="kinh" />
                                </div>
                            </div>
                            <div className="col-6 text-center">
                                <img style={{ width: '300px' }} src="./glassesImage/model.jpg" alt="123" />
                            </div>
                        </div>
                        <div className="row mx-auto" style={{ width: "1000px" }}>
                            {this.renderGlassesList()}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    //lấy giá trị từ state của redux => tạo ra props glassesCurrent cho component
    glass : state.GlassesState.glass
})
const mapDispatchToProps = (dispatch) => ({
    changeGlasses : (newGlass) => {
        let action = {
            type: "CHANGE_GLASSES",
            newGlass
        }
        dispatch(action)
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(BaiTapThuKinh);