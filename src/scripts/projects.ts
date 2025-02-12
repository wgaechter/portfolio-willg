import $ from 'jquery';
import { Octokit } from 'octokit';

const octokit = new Octokit();

export async function getRepos(octokit: Octokit) {
    try {
        const response = await octokit.request('GET /users/wgaechter/repos', {
            username: 'wgaechter',
            type: 'all',
            sort: 'created',
            direction: 'desc'
        });
        return response.data
    } catch (error) {
        console.error('Error fetching repos:', error);
        return null;
    };
};

export function displayRepos() {
    var data = getRepos(octokit);
    if (data == null) {
        console.log("No data found");
        return '<p>No project data found.</p>';
    }

    data.then((repos) => {
        console.log(repos);
        for (let repo of repos) {
            const cardHtml = `
            <div class="card" id="${repo.name}">
                <div class="card-body">
                <h5 class="card-title">${repo.name}</h5>
                <p class="card-text">${repo.description}</p>
                <a href="${repo.html_url}" class="btn btn-primary">Go to Repo</a>
                </div>
            </div>`;
            $('#repo-container').append(cardHtml);
        }
        });
    //For each repo, create a card
}

displayRepos();

//call github api
//get all repos
//filter out unwanted repos

//import card component
//Fill component with data from api
//Display component on page one by one