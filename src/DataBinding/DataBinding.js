import React, { Component } from 'react'

export default class DataBinding extends Component {

    render() {
        const title = "CyberSoft";
        const hocVien = { ma: 34, ten: "ABDC" };
        const renderImg = () => {
            return <img src="https://www.gocbao.com/wp-content/uploads/2020/04/anh-dep-hoa-huong-duong-va-mat-troi_022805970-1-1181x800-6.jpg" alt="ds" />
        }
        return (
            <div>
                <p id="txt">{title}</p>
                <ul>
                    <li>{hocVien.ma}</li>
                    <li>{hocVien.ten}</li>
                </ul>
                <div>{renderImg()}</div>
            </div>
        )
    }
}
