import React, { Component } from 'react';

class Demo extends Component {

    // Có thể chứa các phương thức khác
    //có thể chứa các thuộc tính khác
    //tạo ngoài hàm render thì là thuộc tính trong lớp đối tượng
    // có thể truy xuất bằng các phương thức khác
    // thuộc tính không có các khai báo biến như let var const
    render() { //phương thức render chứa nội dung giao diện của component

        //tạo biến thì được tạo trong hàm render, chỉ được sử dụng trong hàm
        return (
            <div>
                <h2>Demo component</h2>
            </div>
        );
    }
}

export default Demo;
