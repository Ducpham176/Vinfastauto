if(window.matchMedia("(max-width: 700px)").matches) {
function ShowItem(item) {
    item.style.display = 'block';
    document.getElementById('Icon__Menu__Page').style.backgroundImage = 'url("/Public/remove.png")';
    document.getElementById('Icon__Menu__Page').style.borderRadius = '10px';
}
function  HideItem(item) {
    item.style.display = 'none';
    document.getElementById('Icon__Menu__Page').style.backgroundImage = 'url("/Public/Menu.png")';
    document.getElementById('Icon__Menu__Page').style.borderRadius = '0';
}
const Icon__Menu = document.getElementById('Icon__Menu__Page');

Icon__Menu.addEventListener('click', () => {
    const firePage = document.querySelector('.Fire__Page');
    const isHidden = firePage.style.display === 'none';
    if (isHidden) {
        ShowItem(firePage);
    } else {
        HideItem(firePage);
    }
});
}

