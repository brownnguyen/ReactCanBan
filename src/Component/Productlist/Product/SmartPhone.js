import React from 'react'
import SmartphoneItem from './SmartphoneItem'

export default function SmartPhone() {
    return (
        <div>
            {/* BEGIN SMARTPHONE */}
            <section id="smartphone" className="container-fluid bg-light text-dark pt-5 pb-5">
                <h1 className=" text-center">BEST SMARTPHONE</h1>
                <div className="row">
                    <SmartphoneItem />
                    <SmartphoneItem />
                    <SmartphoneItem />
                    <SmartphoneItem />
                </div>
            </section>
            {/* END SMARTPHONE */}
        </div>
    )
}
