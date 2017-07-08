var EditMessageItem = React.createClass ({
  edit: function (todo) {
    this.setState({editing: "test"});
  },

  handleEdit: function() {
    this.edit();
    this.setState({editText: "test"});
  },

  render: function() {
    // console.log("this.props.message", this.props.message.id);
    return (
      <div className="message">
        <label className="messageUser" onDoubleClick={this.handleEdit}>{this.props.message.content}</label>
      </div>
    );
  }
});
