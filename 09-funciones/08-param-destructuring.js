const config = {
    url: 'https://clarin.com',
    direccion: {
        calle: 'Hola mundo',
        numero: 80,
    },
}

function webserver (config) {
    // const {url} = config;
    // console.log(calle);
    const {url, ...rest} = config;
    console.log(rest);
    return url;
}

console.log(webserver(config))