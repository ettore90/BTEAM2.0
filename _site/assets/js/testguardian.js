var toDay = new Date();

var pastYear = toDay.getFullYear() - 10;
var month = toDay.getMonth() + 1;
var day = toDay.getDate();

var toDayAgo = pastYear + "-" + month + "-" + day;

$(document).ready(function() {
  var list={"1":"uk-news","2":"football","3":"travel"};
  $.each(list, function(key, value) {
    $.ajax({
      url: "http://content.guardianapis.com/search?section=" 
      + value 
      + "&&from-date=" 
      + toDayAgo
      + "&to-date=" 
      + toDayAgo
      + "&show-fields=trailText",
      dataType: "jsonp",

      success: function(data) {
        $.each(data.response.results, function (i) {
          $( "#" + value ).append('<li><a href="' + this['webUrl'] + '" target="_blank">' + this['webTitle'] + '</a></li>');
          $( "#" + value ).append("<p>" + this['fields'].trailText + "</p>");
          if ( i === 4 ) {
            return false;}
        });
      }});
  })
});