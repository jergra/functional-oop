// An object-oriented programming equivalent of the functional program.

class Oval {
    constructor() {
       this.oval = ''
       this.text = 0
       this.width = ''
       this.height = ''
       this.textColor = ''
       this.backgroundColor = ''
       this.top = ''
       this.left = ''
    }
    setOval(oval) {
        this.oval = oval
    }
    setText(text) {
        this.text = text
    }
    setWidth(width) {
       this.width = width;
    }
    setHeight(height) {
        this.height = height;
    }
    setTextColor(textColor) {
        this.textColor = textColor
    }
    setBackgroundColor(backgroundColor) {
        this.backgroundColor = backgroundColor
    }
    setTop(top) {
        this.top = top
    }
    setLeft(left) {
        this.left = left
    }
    displayOvalProps() {
       console.log(`Oval ${this.text} has id=${this.oval}, width of ${this.width}, height of ${this.height}, text color: ${this.textColor}, background color: ${this.backgroundColor}, and position [${this.top}, ${this.left}] on the page.`)
    }
    putOnPage() {
        document.getElementById(this.oval).style.width = this.width
        document.getElementById(this.oval).style.height = this.height
        document.getElementById(this.oval).style.color = this.textColor
        document.getElementById(this.oval).style.background = this.backgroundColor
        document.getElementById(this.oval).style.top = this.top
        document.getElementById(this.oval).style.left = this.left
        document.getElementById(this.oval).innerHTML = this.text
    }
 }

let numberOfOvals = Math.floor(Math.random() * 5) + 2
document.getElementById('total').innerHTML = numberOfOvals + ' ovals'
 
for (let i = 1; i <= numberOfOvals; i++) {
    
    let oval = new Oval()
    
    oval.setOval('oval' + i.toString())
    oval.setText(i)
    oval.setWidth((Math.floor(Math.random() * 400) + 100).toString() + "px")
    oval.setHeight((Math.floor(Math.random() * 400) + 100).toString() + "px")
    oval.setTextColor('#' + (Math.random() * 0xfffff * 1000000).toString(16).slice(0, 6))
    oval.setBackgroundColor('#' + (Math.random() * 0xfffff * 1000000).toString(16).slice(0, 6))
    oval.setTop((Math.floor(Math.random() * 400)).toString() + "px")
    oval.setLeft((Math.floor(Math.random() * 900)).toString() + "px")
    oval.displayOvalProps()
    oval.putOnPage()
}
