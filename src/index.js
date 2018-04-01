'use strict';

import React, { Component } from 'react';
import Rough from 'roughjs';

class MaterialRough extends React.Component {
  
  constructor(props) {
    super(props);
  }

  getDefaultOptions() {
    return {
      roughness: 0.5, 
      fill: 'gray', 
      fillWeight: 2
    };
  };

  componentDidMount() {
    let canvas = this.canvas;
    let rc = Rough.canvas(canvas);
    let icon = require('./icons/' + canvas.width + 'px/' + canvas.title + '.js');
    let options = Object.assign({}, this.getDefaultOptions(), this.options);

    // drawing svg icons
    icon.forEach((element) => {
      if ('circle' === element.name) {
        Object.keys(element.attribs).map((key, index) => {
          element.attribs[key] = parseInt(element.attribs[key], 10);
        });        
        rc.circle(element.attribs.cx, element.attribs.cy, element.attribs.r, options);
      }
            
      if ('path' == element.name) {
        rc.path(element.attribs.d, options);
      }
    });
  }
  
  render() {
    let { name, size, options } = this.props;
    let id = 'r_' + name + '_' + size;
    let ref = (canvas) => {
      this.canvas = canvas;
      this.options = options;
    };
    return (
      <canvas id={id} title={name} width={size} height={size} ref={ref}></canvas>
    );
  }
}
export default MaterialRough;