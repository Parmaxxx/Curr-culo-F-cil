var banners = ["img/Logo-semnome.png","img/banner01.jpg","img/banner02.jpg"];
var bannerAtual = 0;
function trocaBanner()
{
    bannerAtual = (bannerAtual +1) % 3;
    document.querySelector('.banner img').src = banners[bannerAtual];   
}
setInterval(trocaBanner, 3000);
