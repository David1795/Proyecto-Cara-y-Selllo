const bitcoin = document.getElementById('m')

const animation = bitcoin.animate([
    {
        transform: 'rotateY(0)'
    },
    {
        transform: 'rotateY(360deg)'
    }    
        
], {

    duration:2000,
    direction:'normal',
    easing:'linear',
    iterations:Infinity


})

