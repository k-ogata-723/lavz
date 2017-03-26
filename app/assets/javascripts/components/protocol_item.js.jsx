var ProtocolItem = React.createClass ({
  render: function() {
    console.log("ProtocolItem", this.props.protocol);
    return (
      <div className="protocol">
        <h2 className="protocolUser">{this.props.protocol.procedure}</h2>
      </div>
    );
  }
});
