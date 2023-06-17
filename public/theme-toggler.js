const theme_toggler = document.querySelector("#toggler")
const html = document.querySelector('html')

theme_toggler.addEventListener('click', (e) => {
    if (!theme_toggler.checked) {
        html.classList.remove('dark')
        html.classList.add('light')
    }
    else {
        html.classList.remove('light')
        html.classList.add('dark')
    }
})
