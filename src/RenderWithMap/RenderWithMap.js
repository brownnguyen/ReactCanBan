import React, { Component } from 'react';

class RenderWithMap extends Component {

    data = [
        { id: 1, name: "Iphone X", price: 1000 },
        { id: 2, name: "Note 10 +", price: 2000 },
        { id: 3, name: "Sony XZ 2", price: 3000 }
    ]
    renderTable = () => {

        //Cách 1
        // let arrContent = [];
        // //Duyệt mảng
        // for (let index = 0; index < this.data.length; index++) {
        //     let product = this.data[index];
        //     //Tạo ra 1 đối tượng jsx ( không phải chuỗi)
        //     let tagProduct = <tr key={index}>
        //         <td>{product.id}</td>
        //         <td>{product.name}</td>
        //         <td>{product.price}</td>
        //         <td>?</td>
        //     </tr>
        //     //Lấy mảng arrContent push đối tượng jsx vào sau mỗi lần lặp
        //     arrContent.push(tagProduct);
        // }
        // return arrContent;

        //Cách 2
        return this.data.filter(item => item.price >= 2000).map((item, index) => {
            //Mỗi lần duyệt tạo ra 1 phần tử mới cho mảng kết quả
            return (
                <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>??</td>
                </tr>
            )
        })
    }

    render() {
        return (
            <div className="container">
                <h3 className="text-center">Product List</h3>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderTable()}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default RenderWithMap;