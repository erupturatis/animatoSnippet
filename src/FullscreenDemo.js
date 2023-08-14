import React, {useEffect} from 'react';
import  {useRef} from "react";

const FullscreenDemo = () => {
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

    return (
        <div style={{ position: 'relative', paddingBottom: '56.25%' }}>
            {/* 56.25 comes from aspect ratio of 16:9, change this accordingly */}
            <iframe
                ref={iframeRef}
                style={{
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    left: '0px',
                    top: '0px'
                }}
                frameBorder="0"
                width="100%"
                height="100%"
                allowFullScreen
                allow="autoplay"
                src="basic_example.html"
            ></iframe>
        </div>
    );
};

export default FullscreenDemo;
