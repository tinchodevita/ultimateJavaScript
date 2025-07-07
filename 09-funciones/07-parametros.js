/**
 * {
 *  url: ...
 *  bucket: amazon S3
 *  port: 80
 * }
 */

const config = {
    url: 'https://clarin.com'
}

function configurarAPI(url, bucket = 145, port = 80) {
    return `${url}/${bucket}:${port}`;
}

console.log(configurarAPI('https://clarin.com'))
// console.log(configurarAPI('https://lanacion.com'))