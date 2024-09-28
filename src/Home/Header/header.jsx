import Input from '../../Common-Components/Input/input';
import './header.css';
import { IoSearchOutline } from "react-icons/io5";
import { useState, useEffect } from 'react';
import { GoMoon } from "react-icons/go";
import ImageCom from '../../Common-Components copy/Image/img';
import logo from '../../../public/logoImage/logo.jpg'

export default function Header() {
    const [theme, setTheme] = useState('dark');

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    return (
        <div className='header'>
            <div className='left-sideheader'>
                <ImageCom src={logo}/>
            </div>
            <div className='middle-sideheader'>
                <div className='middle-items'>
                    <IoSearchOutline className='serachicon' />
                    <Input placeholder={"Searching..."} />
                </div>
            </div>
            <div className='right-sideheader'>
                <div>Learn</div>
                <div onClick={toggleTheme} className={`theme ${theme}`}>{theme === 'light' ? '☀️' : '🌙'}</div>
                <div>Blog</div>
            </div>
        </div>
    );
}
