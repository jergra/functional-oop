// A functional program which makes random ovals.

function oval(i, id, width, height, color, background, top, left) {
    document.getElementById(id).style.width = width
    document.getElementById(id).style.height = height
    document.getElementById(id).style.color = color
    document.getElementById(id).style.background = background
    document.getElementById(id).style.top = top
    document.getElementById(id).style.left = left
    document.getElementById(id).innerHTML = i
}

let numberOfOvals = Math.floor(Math.random() * 5) + 2
document.getElementById('total').innerHTML = numberOfOvals + ' ovals'

for (let i = 1; i <= numberOfOvals; i++) {
    console.log('------------------------------------')
    let id = 'oval' + i.toString()
    let width = (Math.floor(Math.random() * 400) + 100).toString() + "px"
    let height = (Math.floor(Math.random() * 400) + 100).toString() + "px"
    let textColor = '#' + (Math.random() * 0xfffff * 1000000).toString(16).slice(0, 6);
    let backgroundColor = '#' + (Math.random() * 0xfffff * 1000000).toString(16).slice(0, 6);
    let top = (Math.floor(Math.random() * 400)).toString() + "px"
    let left = (Math.floor(Math.random() * 900)).toString() + "px"
    console.log('Oval ' + i + ' has id=' + id + ', width of ' + width + ', height of ' + height + ', text color: ' + textColor + ', background color: ' + backgroundColor + ', and position [' + top + ', ' + left + '] on the page.')
    oval(i, id, width, height, textColor, backgroundColor, top, left)
}    







