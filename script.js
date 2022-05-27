show = () => {
    if(document.querySelector('.menu').style.display === 'none') {
        document.querySelector('.menu').style.display = 'grid';
        document.querySelector('#menu-bar').style.display = 'none';
        document.querySelector('#cross').style.display = 'block';
    }
    else {
        document.querySelector('.menu').style.display = 'none';
        document.querySelector('#menu-bar').style.display = 'block';
        document.querySelector('#cross').style.display = 'none';
    }
}