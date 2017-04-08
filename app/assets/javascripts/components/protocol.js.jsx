var ProtocolBox = React.createClass({
  getInitialState: function() {
    return { protocols: [], isLoading: true};
  },

  handleprotocolsubmit: function(protocol) {
    // console.log(this.state.protocols);
    // protocolsがからのときにプロトコールを作成する
    console.log('micropost_idを出力するlog', this.props.protocolValue[0].id);
    console.log('1回目のprotocol POSTの前');
    if (this.state.protocols == "") {
      $.ajax({
        url: 'protocols',
        datatype: 'json',
        type: 'POST',
        beforeSend: function(xhr) {xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'))},
        data: {
          protocol: { procedure: protocol, micropost_id: this.props.protocolValue[0].id }
        },
        success: function(protocol) {
          var newprotocols = this.state.protocols.concat(protocol);
          this.setState({ protocols: newprotocols });
          console.log('protocol POST success at first', this.state.protocols);
        }.bind(this),
        error: function(_xhr, status, err) {
          console.error(this.props.url, status, err.toString());
        }.bind(this)
      });
      // protocolsがすでに存在しているときに、マイクロポストをupdateする
    } else {
      console.log('before protocol PATCH',this.state.protocols[0].id);
      // console.log("else");
      // console.log(this.state.protocols)
      $.ajax({
        url: 'protocols/',
        datatype: 'json',
        type: 'POST',
        beforeSend: function(xhr) {xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'))},
        data: {
          protocol: { procedure: protocol, micropost_id: this.props.protocolValue[0].id }
        },
        success: function(protocol) {
          // initial_protocols = [];
          var newprotocols = this.state.protocols.concat(protocol);
          console.log('protocols POST success again');
          console.log('newprotocols', newprotocols);
          this.setState({ protocols: newprotocols });
          console.log('2回目のprotocolのsetSteteの後のprotocols', this.state.protocols);
        }.bind(this),
        error: function(_xhr, status, err) {
          console.error(this.props.url, status, err.toString());
        }.bind(this)
      })
    }
  },

  // render: function() {
  //   return (
  //     <ProtocolItem key={protocol.id} protocol={protocol}/>
  //   )
  // },

  render: function() {
    // protocols = this.state.protocols[0];
    // console.log('protocolItems', this.state.protocols[0]);
    // console.log('protocolItems', protocols["id"]);
    // var protocolItems = function() {
    //   return (
    //     <ProtocolItem key={protocol.id} protocol={this.state.protocols}/>
    //   );
    // };

    var protocolItems = this.state.protocols.map(function(protocol) {
      console.log('map protocol', protocol.procedure);
      return (
        <div className="protocol">
          <h2 className="protocolUser">{protocol.procedure}</h2>
        </div>
      );
    });

    return (
      <div>
        <h2 className="procedures">Procedures</h2>
        <div className="protocolBox">
          {protocolItems}
          <ProtocolForm onprotocolsubmit={this.handleprotocolsubmit}/>
        </div>
      </div>
    );
  }
});
