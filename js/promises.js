
// "use strict";
const token = gitHubKey;
const baseUrl = "https://api.github.com/users/";

//Accepts a username and returns the latest github commit
const dateLastCommit = username => {
    fetch(`${baseUrl}${username}/events/public`, {headers: {"Authorization": token}})
        .then((response) => response.json())
        .then((response) => {
            console.log(response[0].created_at.split('T')[0])
            console.log(response);
            return response[0].created_at.split('T')[0]
        });
}
dateLastCommit("rajibchaudhary7");

const wait = ms => new Promise(resolve => setTimeout(resolve,ms));
wait(1000).then(() => console.log(`You will see this after 1s`));
wait(3000).then(() => console.log(`You will see this after 3s`));