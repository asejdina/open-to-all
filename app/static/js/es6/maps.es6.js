/* global google */
/* jshint unused:false */
/* jshint camelcase:false */

(function(){
  'use strict';

  var map;
  var array = [];

  $(document).ready(init);

  function init(){
    initMap(41.6725, -86.2553, 12);
    getData();
    
  }

  function initMap(lat, lng, zoom){
    var mapOptions = {center: new google.maps.LatLng(lat, lng), zoom: zoom, mapTypeId: google.maps.MapTypeId.ROADMAP};
    map = new google.maps.Map(document.getElementById('map'), mapOptions);
  }

  function addMarker(lat, lng, name, icon){
    var latLng = new google.maps.LatLng(lat,lng);
    new google.maps.Marker({map: map, position: latLng, title: name, icon: icon});
  }

  function getData(){
    var url = 'https://data.southbendin.gov/resource/mqet-2q6r.json';
    $.getJSON(url,points);
  }

  function points(data){
    data.forEach(d=>addMarker(d.location.latitude, d.location.longitude, d.business_name));
  }


})();
