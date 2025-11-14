document.querySelectorAll('figure').forEach(i => {
    i.addEventListener('click', evt => {
        if (i.classList.contains('zoomed'))
            i.style.width = ''
        else {
            i.style.width = "100%"
        }
        i.classList.toggle('zoomed')
    })
})
