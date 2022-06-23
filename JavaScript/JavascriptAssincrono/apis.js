// APIS

// muito comum que estejam em .json

{
    "description": "schema POST bank",
    "type": "object",
    "properties": {
        "id": {
            "type": "number",
            "minimum": 0

        },
        "code":{
            "type": "string",
        },
        "name":{
            "type":"string"
        }
    }

}

// fetch

fetch(url, options)
    .then(response => response.json())
    .then(json => console.log(json))

fetch('https://endereco-api.com/', {
    method: "GET",
    cache: 'no-cache',
})

    .then(response => response.json())
    .then(json => console.log(json))


fetch('https://endereco-api.com/', {
method: "POST",
cache: 'no-cache',
body: JSON,stringify(data)
})

    .then(response => response.json())
    .then(json => console.log(json))