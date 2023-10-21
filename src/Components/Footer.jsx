import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'
import { BiLogoFacebookCircle } from 'react-icons/bi'
import logo from '/techify.png'

const Footer = () => {
    return (
        <footer className="footer max-w-7xl mx-auto  p-10 text-base-content mt-12">
            <aside>
                <img className='w-32 h-16' src={logo} alt="" />
                <p className='text-base'>The tech excellence</p>
            </aside>
            <div className='grid md:gap-4 lg:gap-28 grid-cols-2'>
                <nav className='flex flex-col space-y-2'>
                    <header className="footer-title">Brands</header>
                    <Link className="link link-hover">Apple</Link>
                    <a className="link link-hover">Samsung</a>
                    <a className="link link-hover">OnePlus</a>
                    <a className="link link-hover">Xiaomi</a>
                    <a className="link link-hover">DJI</a>
                    <a className="link link-hover">GoPro</a>
                </nav>
                <nav>
                    <header className="footer-title">Social</header>
                    <div className=' space-y-3'>
                        <p className='flex gap-1 items-center'><AiFillInstagram className='text-3xl'></AiFillInstagram> Instagram</p>
                        <p className='flex gap-1 items-center'><BiLogoFacebookCircle className='text-3xl'></BiLogoFacebookCircle> Facebook</p>
                        <p className='flex gap-1 items-center'><AiFillLinkedin className='text-3xl'></AiFillLinkedin> Linkedin</p>
                    </div>
                </nav>
            </div>
            <nav>
                <header className="footer-title">Location</header>
                <a className="link link-hover">7208 Lake Rd Ste 305, Orlando, FL 32819</a>
                <a className="link link-hover">events@wedszone.com</a>
                <a className="link link-hover">+14072592388</a>
            </nav>

        </footer>
    );
};

export default Footer;