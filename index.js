import Dog from './Dog'
import dogsData from './data'
// import { clickNoBtn } from './utils'
let isWaiting = false
let picsDone = false


let dog = new Dog(dogsData.shift())
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
            dog = new Dog(dogsData.shift())
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

            dog = new Dog(dogsData.shift())
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

noBtn.addEventListener('click', clickNoBtn)
likeBtn.addEventListener('click', clickLikeBtn)

