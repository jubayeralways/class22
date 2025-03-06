new VenoBox({
    selector: '.my-image-links',
    numeration: true,
    infinigall: true,
    share: true,
    spinner: 'rotating-plane'
});



new VenoBox({
    selector: '.my-video-links',
});



var containerEl = document.querySelector('.filterMixUp');

var mixer = mixitup(containerEl, {
    multifilter: {
        enable: true
    },
    animation: {
        effects: 'fade translateZ(-100px)'
    }
});