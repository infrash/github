# github

update repositories from github  

    ./github

clone all repositories from organisation

    ./github clone

push all repositories from folder

    ./github push

load all projects and manage on github 
    
    chmod a+x repos.sh
    chmod a+x projects.sh

## Update projects
    ./projects.sh > .github.projects

## Update repos
    ./repos.sh > .github.repos

Generate token
GitHub Docs: [Creating a personal access token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)

+ [Create a personal access token](https://github.com/settings/tokens/new?description=github%20integration%20plugin&scopes=repo%2Cgist%2Cread%3Aorg%2Cworkflow

Save to file
    
    .github.token
