// authors: Ramon & Colin
// date: 3.8.17
// project: Thinkful Tube (Youtube API)
/*----------------------------------------------------------------------*/
// You will need to pass the following in the params object:

// part: 'snippet'
// key: (your API key as a string)
// q: (your search term as a string)
/*----------------------------------------------------------------------*/

var YOUTUBE_DATABASE_LINK = 'https://www.googleapis.com/youtube/v3/search';

function getDataFromApi(searchTerm, callback) {
  var query = {
    q: searchTerm,
    r: 'json',
    part: 'snippet',
    key: "AIzaSyCOLzAYMDagrNS2CNJ5A-eywBiT7iEyAm8"
  }
  $.getJSON(YOUTUBE_DATABASE_LINK, query, callback);
}

function displayYoutubeSearchData(data) {
  var resultElement = '';
  // if (data.Search) {
    data.items.forEach(function(item) {
     // console.log(data.items[0].snippet.thumbnails.medium.url)
     resultElement += '<p>' + item.snippet.title + '</p>';
     resultElement += `<a href="https://www.youtube.com/watch?v=${item.id.videoId}"> <img src="${item.snippet.thumbnails.medium.url}"</a>` ; 
    });
  // }<a href="https://www.youtube.com/watch?v="> ${item.snippet.id.videoId} </a>
  // else {
    // resultElement += '<p>No results</p>';
  // }
  // console.log(resultElement)
  console.log(data)
  // for (i = 0; i < data.length; )
  $('.js-search-results').html(resultElement);
	console.log(resultElement);
}

function renderThumbnails(){
  // console.log(data.items[0].snippet.thumbnails.medium.url)

}

function watchSubmit() {
  $('.js-search-form').submit(function(e) {
    e.preventDefault();
    var query = $(this).find('.js-query').val();
    console.log(query);
    getDataFromApi(query, displayYoutubeSearchData);
  });
}

$(function(){watchSubmit();});
