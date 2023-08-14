import React from 'react';

const Navbar = ({onClick}) => {
    const navTextStyle = 'font-medium text-white';
    return (
        <>
            <div className={'fixed w-full h-12 gap-10 flex justify-center items-center'}>
                <button type={'button'} onClick={onClick} className={`${navTextStyle} opacity-70 hover:opacity-100 transition duration-300`} >

                    Fullscreen Demo
                </button>
            </div>

            <div className={'w-full h-12'}/>
        </>

    );
};

export default Navbar;