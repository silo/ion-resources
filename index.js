'use strict';
var configFile = './config.xml';
var fs = require('fs');
var xml2js = require('xml2js');

var parser = new xml2js.Parser();
fs.readFile(configFile, function(err, data) {
    parser.parseString(data, function (err, result) {
      var android = result.widget.platform[0];
      var ios = result.widget.platform[1];

      var androidIconObj = [];

      for(var i = 0; i < android.icon.length; i++) {
        var androidIcon = android.icon[i];
        console.log(androidIcon.$);
        var regex = /[^\/]+$/;
        var srcMatch = regex.exec(androidIcon.$.src);
        var obj = {
          density: androidIcon.$.density,
          name: srcMatch[0]
        };
        androidIconObj.push(obj);
      }
      console.log(androidIconObj)

    });
});
