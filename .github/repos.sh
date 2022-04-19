#!/bin/bash
# CONTRIBUTION
## Author: Tom Sapletta
## Created Date: 17.04.2022
#
# CONFIG
## Github_Organisation
ORG=$(cat .github.org)
## Github_Username
USERNAME=$(cat .github.user)
## IF ORG empty, set USERNAME
[ -z "$ORG" ] && ORG=$USERNAME
## Github_API_token
TOKEN=$(cat .github.token)
## Reposoitories per page, limit is 100
PERPAGE=10
# The BASEURL of Org / User based
BASEURL="https://api.github.com/orgs/$ORG/repos"
#curl "curl https://api.github.com/orgs/$ORG/repos?per_page=100"
i=1
result=`curl -s -u $USERNAME:$TOKEN -H 'Accept: application/vnd.github.v3+json' ${BASEURL}?per_page=${PERPAGE}\&page=${i} 2>&1`
echo $result > .github.request
cat .github.request|jq '.[]| [.clone_url]| @csv'|tr -d '\\"'
