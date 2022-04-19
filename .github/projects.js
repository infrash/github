//#!/bin/nodejs
//# CONTRIBUTION
//## Author: Tom Sapletta
//## Created Date: 17.04.2022

const dataObjectFromFile = require('./path/to/datafile.json');

$.getJSON('./test.json', function(responseObject){
  var obj = responseObject
  console.log(obj)
})


username = "mathieucaroff";

w = window;
Promise.all(Array.from(Array(Math.ceil(1+184/30)).keys()).map(p =>
    fetch(`//api.github.com/users/{username}/repos?page=${p}`).then(r => r.json())
)).then(all => {
  w.jo = [].concat(...all);
  // w.jo.sort();
  // w.jof = w.jo.map(x => x.forks);
  // w.jow = w.jo.map(x => x.watchers)
})

<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>


$.getJSON("https://api.github.com/users/suhailvs/repos?per_page=100", function(json) {
  var resp = '';
  $.each(json, function(index, value) {
    resp=resp+index + ' ' + value['html_url']+ ' -';
    console.log(resp);
  });
});
$.ajax({
  url: "https://api.github.com/users/blackmiaool/repos",
  jsonp: true,
  method: "GET",
  dataType: "json",
  success: function(res) {
    console.log(res)
  }
});


const request = require('request');
const config = require('config');

router.get('/github/:username', (req, res) => {
  try {
    const options = {

      uri: `https://api.github.com/users/${req.params.username}/repos?per_page=5
                 &sort=created:asc
                 &client_id=${config.get('githubClientId')}
                 &client_secret=${config.get('githubSecret')}`,

      method: 'GET',

      headers: { 'user-agent': 'node.js' }
    };
    request(options, (error, response, body) => {
      if (error) console.log(error);
      if (response.statusCode !== 200) {
        res.status(404).json({ msg: 'No Github profile found.' })
      }
      res.json(JSON.parse(body));
    })
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server Error!');
  }
});

