import Dog from './Dog'
import dogsData from './data'
// import { clickNoBtn } from './utils'
let isWaiting = false
let picsDone = false
let dog = nextDog()
function nextDog() {
    let newDog = dogsData.shift()
    dogsData.push(newDog)
    let dog = new Dog(newDog)
    return dog
}


// let dog = new Dog(nextDog())
function render() {
    isWaiting = false
    if (dogsData.length >= 0) {
        document.querySelector('.dog-card').innerHTML = dog.getDogHtml()

    }
}
render()



// const nopeBadge = document.getElementById('nope-badge')
// const likeBadge = document.getElementById('like-badge')
const noBtn = document.getElementById('noBtn')
const likeBtn = document.getElementById('likeBtn')

function clickNoBtn() {
    if (!isWaiting) {
        dog.hasBeenSwiped = true
        render()
        isWaiting = true
        setTimeout(() => {
            dog = nextDog()
            if (dogsData.length === 0) {
                picsDone = true
                alert('all out of dogs for today check back tomorrow!')
            }
            if (!picsDone) {
                render()

            }
        }, 1500)
    }


}
function clickLikeBtn() {
    if (!isWaiting) {
        dog.hasBeenLiked = true
        render()
        isWaiting = true

        setTimeout(() => {

            dog = nextDog()
            if (dogsData.length === 0) {
                picsDone = true
                render()

            }
            if (!picsDone) {
                render()

            }
        }, 1500)
    }


}

noBtn.addEventListener('click', clickNoBtn)
likeBtn.addEventListener('click', clickLikeBtn)

