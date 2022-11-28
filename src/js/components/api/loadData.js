const SERVER_URL = "https://637cef3116c1b892ebc35eb4.mockapi.io/api";

function getResponse(response) {
    if (!response.ok) {
        throw new Error("Request Error");
    }
    return response.json();
}

function request(url, option) {
    return new Promise((resolve, reject) => {
        fetch(url, option)
            .then(getResponse)
            .then((data) => {
                resolve(data);
            })
            .catch((err) => {
                console.error(err);
                reject(err);
            });
    });
}

export const loadCards = () => request(`${SERVER_URL}/pinterest`);
