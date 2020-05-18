import React from 'react'
import SmartPhone from './Product/SmartPhone'
import Laptop from './Product/Laptop'

export default function Productlist() {
    return (
        <div className="container-fluid">
            <SmartPhone/>
            <Laptop/>
        </div>
    )
}
