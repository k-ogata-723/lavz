var ProtocolItem = React.createClass ({
  render: function() {
    return (
      <div className="message">
        <h2 className="messageUser">{this.props.message.concat}</h2>
      </div>
    );
  }
});
