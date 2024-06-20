import React from 'react'
import { BsInstagram } from 'react-icons/bs'
import { BsFacebook } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'

const Footer = () => {
    return (
        <>
            <div className="container-fluid bg-blue-800 text-white p-4" style={{ height: "20rem" }}>
                <footer className=' container'>
                    <div className="flex justify-between">
                        <div className="left flex" style={{ width: "46rem", fontSize: "20px" }}>
                            <ul className=' space-x-3 my-5 flex flex-wrap'>
                                <li className='mx-3 cursor-pointer'>FAQS</li>
                                <li className='mx-3 cursor-pointer'>Shipping and Returns</li>
                                <li className='mx-3 cursor-pointer'>Contact Us</li>
                                <li className='mx-3 cursor-pointer'>Terms and Condition</li>
                                <li className='mx-3 cursor-pointer'>Trade</li>
                                <li className='mx-3 cursor-pointer'>Jobs</li></ul>
                        </div>
                        <div className="right flex space-x-4 my-5" style={{ fontSize: '2rem' }}>
                            <BsFacebook />
                            <BsInstagram />
                            <BsTwitter />
                        </div>
                    </div>
                    <hr />
                    <div className="footer_bootom my-3 text-center">
                        <h4>We accept all major credit cards including Visa, Mastercard, American Express.</h4>
                        <h3>Copyright © 2023 THE KINGSMAN WINES | Design and Devloped by Arjun</h3>
                    </div>
                </footer>

            </div>
        </>
    )
}

export default Footer