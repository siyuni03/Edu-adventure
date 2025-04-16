
window.onload = () => {
    const minkyu = document.getElementById('minkyu');
    const speech = document.getElementById('speech');

    setTimeout(() => {
        minkyu.classList.add('show');
    }, 500);

    setTimeout(() => {
        speech.classList.add('show');
    }, 2000);
};
