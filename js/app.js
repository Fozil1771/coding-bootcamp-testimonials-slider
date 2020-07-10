// “ If you want to lay the best foundation possible I’d recommend taking this course. 
// The depth the instructors go into is incredible. I now feel so confident about 
// starting up as a professional developer. ”

// John Tarkpor
// Junior Front-end Developer
//./images/image-tanya.jpg

const buttons = document.querySelectorAll('.btn')
const image = document.getElementById('image')
const text = document.querySelector('.info')
const name = document.querySelector('.about')
const job = document.querySelector('.job')

let index = 0;
let persons = []

function Person(img, name, text, job) {
    this.img = img,
    this.name= name,
    this.text = text,
    this.job = job

}

function createPerson (img, name, text, job) {
    let fullImg = `./images/image-${img}.jpg`;
    let person = new Person(fullImg, name, text, job)
    persons.push(person)
}


createPerson('tanya', 'Tanya Sinclair' , '“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”', 'UX Engineer')

createPerson('john', 'John Tarkpor' , '"If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer."', 'Junior Front-end Developer')

console.log(persons[index].job)
console.log(job.textContent )

buttons.forEach(btn => {
    btn.addEventListener('click', (e)=>{
        e.preventDefault()
        if(e.target.parentElement.classList.contains('btnLeft')){
            if(index === 0){
                index = persons.length;
            }
            index--;
            image.src = persons[index].img;
        name.innerHTML = `<p class="about">${persons[index].name}<span class="job"> ${persons[index].job}</span></p>`
            text.textContent = persons[index].text;
        }
        if(e.target.parentElement.classList.contains('btnRight')){
            index++;
            if(index === persons.length){
                index = 0;
            }
            // index++;
            image.src = persons[index].img;
            name.innerHTML = `<p class="about">${persons[index].name}<span class="job"> ${persons[index].job}</span></p>`
            text.textContent = persons[index].text;
        }
    })
})