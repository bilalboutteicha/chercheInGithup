
document.getElementById('searchButton').addEventListener('click', function (event) {
    event.preventDefault();
    let username = document.getElementById('searchInput').value;
    if (!username) {
        alert('Please enter a GitHub username');
        return;
    }
    fetch('https://api.github.com/users/' + username)
        .then(response => {
            if (response.status === 404) {
                throw new Error('Account not found');
            }
            return response.json();
        })
        .then(data => {
            document.getElementById('results').innerHTML = `
                
                 <h2>${data.login}</h2>
                 <img id="profil" width="250px" hight="300px" src="${data.avatar_url}" alt="${data.login}'s avatar">
                 <p> Login Name</p>
                 <h1>${data.name || 'N/A'}</h1>
                 <p><strong>Followers: ${data.followers}            Following: ${data.following}</stong> </p>
                 <p><strong>Public Repositories: ${data.public_repos}</strong></p>
               `;
        })
        .catch(error => {
            alert('Error: ' + error.message);
        });
});