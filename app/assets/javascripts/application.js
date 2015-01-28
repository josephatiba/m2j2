// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

$(function(){

  $('#btn').click(function(){
    $("#panel").slideToggle("slow");
  });

 
  $.getJSON("https://api.instagram.com/v1/media/popular?access_token=8240865.1fb234f.a791d5203eda498586fb802a698d3c02", function(response, status, jqXHR){
      $('.pane').eq(2).find('p').eq(0).html(jqXHR.responseText);
      console.log(response);
      console.log(status);
      console.log(jqXHR); 
  });

});