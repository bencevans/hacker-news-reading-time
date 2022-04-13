const stories = document.getElementsByClassName('titlelink')
const els = document.getElementsByClassName('subtext')

for (let index = 0; index < els.length; index++) {
    const el = els[index];
    const url = stories[index].href

    fetch('https://reado.dockstudios.co.uk/api/v1/url?url=' + url)
        .then(res => res.json())
        .then(res => {
            const time = document.createElement('span')
            // time.innerHTML = ' | 3m22s'
            time.innerHTML = ' | ' + res.readingTime.text
            el.appendChild(time)
        })
        .catch(console.error)
}
