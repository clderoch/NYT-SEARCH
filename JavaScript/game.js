// Built by LucyBot. www.lucybot.com
var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({
    'api-key': "43d849702e6a41b19baf083bc1d4f8e2",
    'q': "Iran",
    'begin_date': "20180801",
    'end_date': "20180901"

});
$.ajax({
    url: url,
    method: 'GET',
}).done(function (result) {
    console.log(result);
}).fail(function (err) {
    throw err;
});
