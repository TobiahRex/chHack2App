'use strict';

angular.module('ourApp')
.controller('mapController', function() {
  AmCharts.makeChart( "mapdiv", {
    "type": "map",
    "theme": "dark",
    "imagesSettings": {
      "balloonText": "[[title]] [[description]]",

    },
    "areasSettings": {
      "autoZoom": true,
      "selectedColor": "#CC0000"
    },
    "dataProvider": {
      "map": "worldLow",
      "images": []/////// MAP DATA ARRAY GOES HERE!
    }
  });
});
