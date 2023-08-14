import React, {useRef} from 'react';

import Navbar from "./Navbar";

const Demo = () => {

    const iframeRef = useRef(null);
    const handleFullscreen = () => {
        const iframe = iframeRef.current;

        if (iframe.requestFullscreen) {
            iframe.requestFullscreen();
        } else if (iframe.webkitRequestFullscreen) {
            // Chrome, Safari and Opera
            iframe.webkitRequestFullscreen();
        } else if (iframe.msRequestFullscreen) {
            // IE/Edge
            iframe.msRequestFullscreen();
        } else if (iframe.mozRequestFullScreen) {
            // Firefox
            iframe.mozRequestFullScreen();
        }
    };

    const tooltipStyle = 'opacity-60 text-lg font-medium flex justify-center items-center';
    return (
        <div >
            <Navbar onClick={()=>{
                handleFullscreen();
            }} />
            <h1 className="text-6xl font-bold text-white mt-16 flex justify-center items-center mb-4">Demo</h1>
            <h4 className={tooltipStyle}>Use left and right arrow keys to go back and forth between the animations</h4>
            <h4 className={tooltipStyle}>Or alternatively use space to go only forward</h4>
            <div className="">
                <iframe
                    ref={iframeRef}
                    className="w-full h-[750px] "
                    title="Demo title"
                    src="basic_example.html"
                    allowFullScreen
                />
            </div>
        </div>
    );
};

export default Demo;