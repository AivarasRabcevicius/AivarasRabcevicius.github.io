document.querySelectorAll('img').forEach(i => {
    i.addEventListener('click', evt => {
        if (i.classList.contains('zoomed'))
            i.style.width = '300px'
        else {
            i.style.width = "100%"
        }
        i.classList.toggle('zoomed')
    })
})