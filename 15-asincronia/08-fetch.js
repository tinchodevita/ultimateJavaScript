const url = 'https://jsonplaceholder.typicode.com/todos/a';

fetch(url)
    .then( response => {
        // return response.json();
        if (response.ok) {
            return Promise.reject('')
        }
        return Promise.reject(response.status)
        // return response.text();
    })
    .then( data => console.log(data))
    .catch(message => console.log({ message }))

//fetch siempre va a tener exito