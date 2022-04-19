#!/bin/bash
# CONTRIBUTION
## Author: Tom Sapletta
## Created Date: 17.04.2022
#
## CONFIG
ACTION="$@"
## COLORS
BLUE='\033[1;34m'
RED='\033[1;35m'
NC='\033[0m' # No Color

#eval "$ACTION"

## FUNCTIONS
list () {
PRINT=$1
echo -e "${RED}$PRINT${NC}"
return 5
}

files () {
echo -e "${RED} "
cat .github/config.txt
echo "${NC}"
}

## START
[ "$ACTION" = "" ] && ACTION="list"
[ "$ACTION" = "list" ] && files
[ "$ACTION" = "list" ] && list
[ "$ACTION" = "files" ] && files

