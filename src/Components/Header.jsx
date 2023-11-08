import React from 'react';

const Header = () => {

    const ShowHome = () => {
        alert('This is Home')
    }
    const ShowAbout = () => {
        alert('This is About')
    }
    const ShowContact = () => {
        alert('This is Contact')
    }
    const ShowProfile = () => {
        alert('This is Profile')
    }
    return (
        <div className=''>
            <p className='bg-sky-200 flex justify-between p-3 px-5 shadow-xl shadow-orange-100'>
                <span onClick={()=>ShowHome()} className='text-xl cursor-pointer  hover:text-orange-600'>Home</span> 
                <span  onClick={()=>ShowAbout()} className='text-xl cursor-pointer hover:text-orange-600'>About</span> 
                <span onClick={()=>ShowContact()} className='text-xl cursor-pointer hover:text-orange-600'>Contact</span> 
                <span onClick={()=>ShowProfile()} className='text-xl cursor-pointer hover:text-orange-600'>Profile</span></p>
        </div>
    );
};

export default Header;