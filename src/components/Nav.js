import React, {useEffect, useState} from 'react';
import './Nav.css'

function Nav() {
    const [show, setShow] = useState(false);


    useEffect(() => {
        window.addEventListener("scroll", () => {
           if (window.scrollY > 50) {
               setShow(true);
           } else {
               setShow(false);
           }
        });

        //unmount 시 삭제
        return () => {
            window.removeEventListener('scroll', () => {});
        }
    },[]);

    return (
        <nav className={`nav ${show && 'nav__black'}`}>
            <img
                alt='넷플릭스 로고입니다.'
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2880px-Netflix_2015_logo.svg.png'
                className='nav__logo'
                onClick={() => window.location.reload()}
            />
            <img
                alt='유저 이미지입니다.'
                src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117'
                className='nav__profile'
            />

        </nav>
    );
}

export default Nav;
