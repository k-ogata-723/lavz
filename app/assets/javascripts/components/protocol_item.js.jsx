var ProtocolItem = React.createClass ({
  render: function() {
    // console.log("protocol array length", this.props.protocol.length);
    console.log("protocol array", this.props.protocol);
    console.log("protocol array [0]", this.props.protocol[0]);
    // for ( i = 0; i < this.props.protocol.length; i++) {
      return (
        <div className="protocol">
          <h2 className="protocolUser">{this.props.protocol}</h2>
        </div>
      );
    // }
  }
});
