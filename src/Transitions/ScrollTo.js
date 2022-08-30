import * as Scroll from 'react-scroll'

const scrollToDummy = () => {
    const scroll = Scroll.animateScroll;
    const scroller = Scroll.scroller;
    scroll.scrollToBottom();
}

const scrollSuccess = () => {
    const scroll = Scroll.animateScroll;
    const scroller = Scroll.scroller;
    scroll.scrollToBottom({
        delay: 3300
    });
}

export default scrollToDummy;
export {scrollSuccess};