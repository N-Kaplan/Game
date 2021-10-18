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
    for (let i = 0; i < faces.length; i++) {
        const j = Math.floor(Math.random() * (i + 1));
        [faces[i], faces[j]] = [faces[j], faces[i]];
    }
};

const closeCard = (id) => {
    cards[id].classList.replace('face', 'back');
    cards[id].style.backgroundImage = 'url("resources/images/Puzzle-icon.png")';
    c1 = undefined;
    c2 = undefined;
}

//start with shuffled deck
shuffleFaces(cardFaces);

//new game
start.addEventListener('click', () => {
    for (let i = 0; i < cards.length; i++) {
        closeCard(i);
    }
    shuffleFaces(cardFaces);
})

//turning cards in game
let c1, c2;
for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click', () => {
        cards[i].getAttribute('class') === 'card back' ? cards[i].classList.replace('back', 'face') : closeCard(i);
        if (cards[i].className === 'card face') {
            cards[i].style.backgroundImage = `url(${cardFaces[i]})`;
            //store open card
            c1 ? c2 = cards[i].id : c1 = cards[i].id;

            //if cards don't match, turn both
            if (c1 !== undefined && c2 !== undefined) {
                if (cards[c1].style.backgroundImage !== cards[c2].style.backgroundImage) {
                    let one = setTimeout(closeCard, 750, c1);
                    let two = setTimeout(closeCard, 750, c2);
                }
            }
        }
    })
}
