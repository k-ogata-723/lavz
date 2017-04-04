var MessageItem = React.createClass ({
  edit: function (todo) {
    this.setState({editing: "test"});
  },

  handleEdit: function() {
    this.edit();
    this.setState({editText: "test"});
  },

  render: function() {
    return (
      <div className="message">
        <label className="messageUser" onDoubleClick={this.handleEdit}>{this.props.message.content}</label>
      </div>
    );
  }
});
