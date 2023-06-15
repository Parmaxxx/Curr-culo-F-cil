function playVideo(element) {
    var iframe = element.querySelector('iframe');
    iframe.src += '?autoplay=1';
    element.querySelector('.info').style.display = 'none';
}