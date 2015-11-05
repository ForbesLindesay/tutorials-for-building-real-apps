var React = require('react');
var ReactDOM = require('react-dom');

var container = document.getElementById('container');

var NewItemForm = React.createClass({
  displayName: 'NewItemForm',

  propTypes: {
    onAdd: React.PropTypes.func.isRequired
  },

  getInitialState: function () {
    return {
      name: ''
    };
  },

  _onChange: function (e) {
    this.setState({
      name: e.target.value
    });
  },

  _onSubmit: function (e) {
    // by defualt, the form will be sent to the server
    // but we want to handle it in JavaScript
    e.preventDefault();
    this.props.onAdd(this.state.name);
    this.setState({name: ''});
  },

  render: function () {
    return React.createElement(
      'form',
      {onSubmit: this._onSubmit},
      React.createElement(
        'input',
        {
          value: this.state.name,
          onChange: this._onChange
        }
      ),
      React.createElement(
        'button',
        {type: 'submit'},
        'Add'
      )
    );
  }
});

var List = React.createClass({
  displayName: 'List',

  getInitialState: function () {
    return {
      items: []
    };
  },

  _onAdd: function (item) {
    this.setState({
      items: this.state.items.concat([item])
    });
  },
  
  render: function () {
    return React.createElement(
      'div',
      {},
      React.createElement(
        'ul',
        {},
        this.state.items.map(function (item, i) {
          return React.createElement(
            'li',
            {key: i},
            item
          );
        })
      ),
      React.createElement(
        NewItemForm,
        {onAdd: this._onAdd}
      )
    );
  }
});

ReactDOM.render(
  React.createElement(List, {}),
  container
);