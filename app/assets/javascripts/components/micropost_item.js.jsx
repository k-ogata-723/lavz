var MessageItem = React.createClass ({
  render: function() {
    return (
      <div className="message">
        <h2 className="messageUser">{this.props.message.content}</h2>
      </div>
    );
  }
});
