let start = document.getElementById("run");

let cards = document.getElementsByClassName('card');

let cardFaces = ['resources/images/aquarium.png',
    'resources/images/bear-track.png',
    'resources/images/caterpillar.png',
    'resources/images/dragonfly.png',
    'resources/images/falcon.png',
    'resources/images/giraffe.png',
    'resources/images/octopus.png',
    'resources/images/seahorse.png',
    'resources/images/shark.png',
    'resources/images/slug.png'];

//double images array
cardFaces.push(...cardFaces);

const shuffleFaces = (faces) => {
    //for (let i = cards.length - 1; i > 0; i--) {
    for (let i = 0; i < faces.length; i++) {
        const j = Math.floor(Math.random() * (i + 1));
        [faces[i], faces[j]] = [faces[j], faces[i]];
    }
    console.log(faces);
};

shuffleFaces(cardFaces);



start.addEventListener('click', () => {
    for (let card of cards) {
        card.classList.replace('face', 'back');
        card.style.backgroundImage = 'url("resources/images/Puzzle-icon.png")';
    }
    shuffleFaces(cardFaces);
})

for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click', () => {
        cards[i].getAttribute('class') === 'card back' ? cards[i].classList.replace('back', 'face') : cards[i].classList.replace('face', 'back');
        if (cards[i].className === 'card face') {
            cards[i].style.backgroundImage = `url(${cardFaces[i]})`;
        } else {
            cards[i].style.backgroundImage = 'url("resources/images/Puzzle-icon.png")';}
    })
}

// test.getAttribute('class') === 'card back' ? test.classList.replace('back', 'face') : test.classList.replace('face', 'back');
// if (test.className === 'card face') {
//     test.style.backgroundImage = 'url("resources/images/falcon.png")';
// } else {
//     test.style.backgroundImage = 'url("resources/images/Puzzle-icon.png")';
// }