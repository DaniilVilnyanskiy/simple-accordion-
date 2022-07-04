
let accordion = document.querySelectorAll('.accordion');
let content = document.querySelectorAll('.accordion-content');


accordion.forEach((el) => {
    el.addEventListener('click', () => {

        let nextElement = el.nextElementSibling;

        if (nextElement.style.maxHeight) {
            content.forEach((el) => el.style.maxHeight = null)
            console.log(el.style.maxHeight)
        } else {
            content.forEach((el) => el.style.maxHeight = null)
            nextElement.style.maxHeight = nextElement.scrollHeight + 'px';
            console.log('2')
        }
    })
})
