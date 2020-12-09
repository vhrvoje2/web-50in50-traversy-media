const joke = document.getElementById('joke')
const btn = document.getElementById('jokeBtn')

generateJoke()

async function generateJoke(){
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    }

    const res = await fetch('https://icanhazdadjoke.com', config)

    const data = await res.json()
    joke.innerHTML = data.joke
}

// function generateJoke(){
//     const config = {
//         headers: {
//             'Accept': 'application/json'
//         }
//     }

//     fetch('https://icanhazdadjoke.com', config).then(res => 
//     res.json()).then(data => {
//         joke.innerHTML = data.joke
//     })
// }

btn.addEventListener('click', generateJoke)