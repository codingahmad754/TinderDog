class Dog {
    constructor(data) {
        Object.assign(this, data)

    }
    logGreeting() {
        console.log(`Hi, im a dog named ${this.name}`)
    }

    getDogHtml() {
        const { name, avatar, age, bio } = this
        return `
        <img id="dog-image" src=${avatar} alt="">
        <div id="dog-info">
            <h2> ${name}, ${age}</h2>
            <p>${bio}</p>
        </div>
        <img id="like-badge" style="display: ${this.hasBeenLiked ? 'block' : 'none'}" src="images/badge-like.png" alt="">
        <img id="nope-badge" style="display: ${this.hasBeenSwiped ? 'block' : 'none'}" src="images/badge-nope.png" alt="">
        `
    }
}


export default Dog

// Create the Dog class here