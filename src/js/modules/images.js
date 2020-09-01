import calcScroll from './calcScroll';

const images = () => {
    const imgPopup = document.createElement('div'),
          workSections = document.querySelector('.works'),
          bigImage = document.createElement('img'),
          scroll = calcScroll();

    imgPopup.classList.add('popup');
    workSections.appendChild(imgPopup);

    imgPopup.style.justifyContent = 'center';
    imgPopup.style.alignItems = 'center';
    imgPopup.style.display = 'none';

    imgPopup.appendChild(bigImage);
    workSections.addEventListener('click', (e) => {
        e.preventDefault();
        let target = e.target;

        if (target && target.classList.contains('preview')) {
            imgPopup.style.display = 'flex';
            
            document.querySelector('body').style.overflow = 'hidden';
            document.body.style.marginRight = `${scroll}px`;
            const path = target.parentNode.getAttribute('href');
            bigImage.setAttribute('src', path);
            
        }

        if (target && target.matches('div.popup')) {
            imgPopup.style.display = 'none';
            document.querySelector('body').style.overflow = '';
            document.body.style.marginRight = `0px`;
        }
    });
}

export default images;