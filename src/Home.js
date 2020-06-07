import React, { Component } from 'react';
import Products from './Products';
class Home extends Component {

    render() {
        return (
            <div>
                <h1>Inside the Home component</h1>
                <Products />
            </div>
        )
    }

}
      <table>
                  <tr>
                      <th>Type</th>
                      <th>Default Value</th>
                      <th>Valid</th>
                  </tr>
                  <tr>
                      <td>Array</td>
                      <td>{this.props.propArray}</td>
                      <td>{this.props.propArray ? "True" : "False"}</td>
                  </tr>
                  <tr>
                      <td>Boolean</td>
                      <td>{this.props.propBool ? "True" : "False"}</td>
                      <td> {this.props.propBool ? "True" : "False"}</td>
                  </tr>

export default Home;