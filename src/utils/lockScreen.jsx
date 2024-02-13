import * as BSL from 'body-scroll-lock';

export const unlock = () => {
    const body = document.querySelector('body');
    BSL.enableBodyScroll(body)
    body.style.overflow = 'auto'
    body.style.overflowX = 'hidden'
}

export const lock = () => {
    const body = document.querySelector('body');
    body.style.overflow = 'hidden'
    BSL.disableBodyScroll(body)
}

