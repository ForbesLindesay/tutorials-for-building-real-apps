var React = require('react');
var ReactDOM = require('react-dom');

var container = document.getElementById('container');

var ListOfNumbers = React.createClass({
  displayName: 'ListOfNumbers',

  propTypes: {
    max: React.PropTypes.number.isRequired,
  },

  render: function () {
    var numbers = [];
    for (var i = 0; i < this.props.max; i++) {
      numbers.push(i);
    }
    return React.createElement(
      'ul',
      {},
      numbers.map(function (number) {
        return React.createElement(
          'li',
          {key: number},
          number
        );
      })
    );
  }
});

ReactDOM.render(
  React.createElement(ListOfNumbers, {max: 10}),
  container
);