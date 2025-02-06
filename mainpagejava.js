// When the user's mouse goes over the picture of Sibelius, it turns into Mahler.

document.addEventListener('DOMContentLoaded', function() {
    sibelius.addEventListener('mouseover', function() {
        sibelius.style.opacity = 0.0;
    })
    sibelius.addEventListener('touchstart', function() {
        sibelius.style.opacity = 0.0;
    })

})

document.addEventListener('DOMContentLoaded', function() {
    sibelius.addEventListener('mouseout', function() {
        sibelius.style.opacity = 1.0;
    })
    sibelius.addEventListener('touchend', function() {
        sibelius.style.opacity = 1.0;
    })
})
