# material-design-icons-rough
the react component that draw material design icons via rough.js
![example](https://github.com/hermeslin/material-design-icons-rough/blob/master/example.png)

## icon list
you can find all icons from [https://material.io/icons/](https://material.io/icons/)

## install
```sh
$ npm install material-design-icons-rough
```

## usage
```
import React, { Component } from 'react';
import MaterialRough from 'material-design-icons-rough';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ul>
          <li><MaterialRough name="action/accessibility" size="24" options={{ fill: 'red' }} /></li>
          <li><MaterialRough name="action/accessibility" size="48" options={{ fill: 'red' }} /></li>
          <li><MaterialRough name="action/accessible" size="24" /></li>
          <li><MaterialRough name="action/accessible" size="48" /></li>
          <li><MaterialRough name="action/account_circle" size="24" /></li>
          <li><MaterialRough name="action/account_circle" size="48" /></li>
          <li><MaterialRough name="action/android" size="24" /></li>
          <li><MaterialRough name="action/android" size="48" /></li>      
          <li><MaterialRough name="action/face" size="24" /></li>
          <li><MaterialRough name="action/face" size="48" /></li>
          <li><MaterialRough name="action/favorite" size="24" /></li>
          <li><MaterialRough name="action/favorite" size="48" /></li>     
        </ul>
      </div>
    );
  }
}

export default App;
```