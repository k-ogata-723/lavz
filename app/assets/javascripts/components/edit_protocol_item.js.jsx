var EditProtocolItem = React.createClass ({
  render: function() {
    // デバッグ用に表示
    // console.log("protocol array", this.props.protocol);
    console.log("protocol array [0]", this.props.protocol[0]);
    // console.log("protocol の要素（procedure）", this.props.protocol[0].procedure);
    // for文の中で、protocolオブジェクトのprocedure要素を順に表示
    // for ( i = 0; i < this.props.protocol.length; i++) {
      // protocol = this.props.protocol[i];
      // console.log('loop protocol', protocol);
      return (
        <div className="protocol">
          <h2 className="protocolUser">{this.props.protocol}</h2>
        </div>
      );
    // }
  }
});
