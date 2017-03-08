// authors: Ramon & Colin
// date: 3.8.17
// project: Thinkful Tube (Youtube API)
/*------------------------------------------------------------------------------*/
// Uses Youtube's API to output youtube query results: title, channel & date pub.
/*------------------------------------------------------------------------------*/

var YOUTUBE_DATABASE_LINK = 'https://www.googleapis.com/youtube/v3/search';

function getDataFromApi(searchTerm, callback) {
  var query = {
    q: searchTerm,
    r: 'json',
    part: 'snippet',
    key: 'AIzaSyCOLzAYMDagrNS2CNJ5A-eywBiT7iEyAm8'
  }
  $.getJSON(YOUTUBE_DATABASE_LINK, query, callback);
}

function displayYoutubeSearchData(data) {
  var resultElement = '';
    data.items.forEach(item => {
    	const snippet = item.snippet
    	const date = snippet.publishedAt

    	resultElement += `
    		<h2>${ snippet.title }</h2>
				<h4> Channel Title: ${ snippet.channelTitle } </h4>
				<h4> Publish Date: ${moment(date).format('MMM Do YY')} </h4>
				<a href="https://www.youtube.com/watch?v=${ item.id.videoId }"> 
				<img src="${ snippet.thumbnails.high.url }"</img></a>
			`
    })
  console.log(data)

  $('.js-search-results').html(resultElement);
	console.log(resultElement);
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
