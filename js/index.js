const jokeEl = document.querySelector('#joke'),
    jokeBtn = document.querySelector('#jokeBtn');

jokeBtn.addEventListener('click', generateJoke);
generateJoke();
console.log(generateJoke())

async function generateJoke() {
    const options = {
        headers: {
            'Accept': 'application/json',
        }
    };

    const response = await fetch('https://icanhazdadjoke.com', options)
        
    const json = await response.json()
    jokeEl.innerHTML = json.joke
};


// function generateJoke() {
//     const options = {
//         headers: {
//             'Accept': 'application/json',
//         }
//     };

//     fetch('https://icanhazdadjoke.com', options)
//         .then(response => response.json())
//         .then(json => {
//             jokeEl.innerHTML = json.joke
//         });
// };

