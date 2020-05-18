import React from 'react'
import Header from '../Header/Header.js';
import Slider from '../Slider/Slider.js';
import Productlist from '../Productlist/Productlist.js';
import Promotion from '../Promotion/Promotion.js';
export default function BaiTapLayout() {
    return (
        <div>
            <Header/>
            <Slider/>
            <Productlist/>
            <Promotion/>
        </div>
    )
}
