const baseUrl = "https://dog.ceo/dog-api/";

//Accepts a username and returns the latest github commit
const randomImage = image => {
    fetch(`${baseUrl}`)
        .then((response) => {
            console.log(response.json());
        });
}
randomImage()
