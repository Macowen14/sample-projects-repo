function diceRoll() {
const numOfdice = document.getElementById(`numOfdice`).value;
const diceValue = document.getElementById(`diceValue`);
const diceImage = document.getElementById(`diceImage`);
const values = [];
const images = [];

    
    for (let i = 0; i < numOfdice; i++ ) {
        const value = Math.floor((Math.random() * 6) + 1);
        values.push(value);
        images.push(`<img src = "images/${value}.png" alt ="dice ${values} image">`);
    }
    diceValue.textContent = `dice : ${values.join(' , ')}`;
    diceImage.innerHTML = images.join(` `);
}







