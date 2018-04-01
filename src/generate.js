'use strict';

const iconsPath = require('material-design-icons').STATIC_PATH;
const fs = require('fs');
const fsPath = require('fs-path');
const cheerio = require("cheerio");

const categoryList = [
  'action',
  'alert',
  'av',
  'communication',
  'content',
  'device',
  'editor',
  'file',
  'hardware',
  'image',
  'maps',
  'navigation',
  'notification',
  'places',
  'social',
  'toggle'
];

const icons = [];

//generate icon list
categoryList.forEach((category) => {

  let path = iconsPath + '/' + category + '/svg/production';
  let pattern = /^ic_(\w+)_(24px|48px)\.svg$/;
  let nameList = [];

  fs.readdirSync(path).filter((file) => {
    return pattern.test(file);
  }).forEach((file) => {

    let content = fs.readFileSync(path + '/' + file);
    let $ = cheerio.load(content);
    let svgContant = [];

    $('svg').children().each((index, element) => {
      svgContant.push({
        name: element.name,
        attribs: element.attribs
      });
    });

    //save file
    let match = file.match(pattern);
    let size = match[2];
    let name = match[1];
    let svgFile = [
      './src/icons',
      size,
      category,
      name + '.js'
    ];

    let data = 'module.exports = ' + JSON.stringify(svgContant) + ';';
    fsPath.writeFileSync(svgFile.join('/'), data);
  });
});