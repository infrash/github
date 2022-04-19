#!/bin/python
# CONTRIBUTION
## Author: Tom Sapletta
## Created Date: 17.04.2022

import requests
username = input("Enter the github username:")
request = requests.get('https://api.github.com/users/'+username+'/repos')
json = request.json()
for i in range(0,len(json)):
  print("Project Number:",i+1)
  print("Project Name:",json[i]['name'])
  print("Project URL:",json[i]['svn_url'],"\n")



USER='AUSER'
API_TOKEN='ATOKEN'
GIT_API_URL='https://api.github.com'

def get_api(url):
    try:
        request = urllib2.Request(GIT_API_URL + url)
        base64string = base64.encodestring('%s/token:%s' % (USER, API_TOKEN)).replace('\n', '')
        request.add_header("Authorization", "Basic %s" % base64string)
        result = urllib2.urlopen(request)
        result.close()
    except:
        print 'Failed to get api request from %s' % url