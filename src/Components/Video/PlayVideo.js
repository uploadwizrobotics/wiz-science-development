import { useEffect, useState, useRef } from "react";
import "./PlayVideo.css"
const PlayVideo = (props) => {

    const url = props.video;
    const button = props.button;
    const [playing, setPlaying] = useState(false);
    const videoRef = useRef(null);

    const handleVideoPress = () => {
        if (playing) {
            videoRef.current.pause();
            setPlaying(false);

        } else {
            videoRef.current.play();
            setPlaying(true);
        }
    };

    useEffect(() => {
        if (button === false && playing === false) {
            videoRef.current.play();
            setPlaying(true);
        } 
    }, []);

    return (
        <div className="playVideo">
            <video
                className="video__player"
                ref={videoRef}
                src={url}
                width={800}
                height={400}
            >
            </video>
            { button === true && 
                <div className='clickMe'>
                    <div class="main-content">
                        <div class="item button-jittery"><button onClick={handleVideoPress}>Click Me!</button>
                        </div>
                    </div>
                </div> 
            }
        </div>
    );
}

export default PlayVideo;