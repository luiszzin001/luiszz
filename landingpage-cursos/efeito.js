window.revelar = ScrollReveal({reset:true})
// Topo do site

revelar.reveal('.img-topo',{
    duration: 2000,
    distance: '200px',
    origin: 'left'
})

revelar.reveal('.txt-topo',{
    duration: 2000,
    distance: '120px',
    delay: 500,
    origin: 'right'
})

// Titulos

revelar.reveal('.titulo',{
    duration: 3000,
    distance: '50px',
})

// Cards

revelar.reveal('.card-effect1',{
    duration: 2000,
    distance: '90px',
    delay: 500
})

revelar.reveal('.card-effect2',{
    duration: 2000,
    distance: '90px',
    delay: 1000
})

revelar.reveal('.card-effect3',{
    duration: 2000,
    distance: '90px',
    delay: 1300
})