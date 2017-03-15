var ProtocolItem = React.createClass ({
  render: function() {
    return (
      <div className="protocol">
        <h2 className="protocolUser">{this.props.protocol.concat}</h2>
      </div>
    );
  }
});
