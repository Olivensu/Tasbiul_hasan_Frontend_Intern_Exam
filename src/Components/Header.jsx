import React from 'react';

const Header = () => {

    const ShowAlert = (data) => {
        alert('This is Home')
    }
    return (
        <div className=''>
            <p className='bg-sky-200 flex justify-between p-3 px-5'><span onClick={()=>ShowAlert('')} className='text-xl hover:underline hover:text-orange-600'>Home</span> <span>About</span> <span>Contact</span> <span>Profile</span></p>
        </div>
    );
};

export default Header;