var ProtocolBox = React.createClass({
  getInitialState: function() {
    return { protocols: [], isLoading: true};
  },

  handleprotocolsubmit: function(protocol) {
    // console.log(this.state.protocols);
    // protocolsがからのときにプロトコールを作成する
    console.log('micropost_idを出力するlog', this.props.protocolValue[0].id);
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
          console.log(protocol);
        }.bind(this),
        error: function(_xhr, status, err) {
          console.error(this.props.url, status, err.toString());
        }.bind(this)
      });
      // protocolsがすでに存在しているときに、マイクロポストをupdateする
    } else {
      // console.log("else");
      // console.log(this.state.protocols)
      $.ajax({
        url: 'microposts/' + this.state.protocols[0].id,
        datatype: 'json',
        type: 'PATCH',
        beforeSend: function(xhr) {xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'))},
        data: {
          protocol: { procedure: protocol, micropost_id: 10}
        },
        success: function(protocol) {
          initial_protocols = [];
          var newprotocols = initial_protocols.concat(protocol);
          // console.log(newprotocols);
          this.setState({ protocols: newprotocols });
          console.log(protocol);
        }.bind(this),
        error: function(_xhr, status, err) {
          console.error(this.props.url, status, err.toString());
        }.bind(this)
      })
    }
  },


  render: function() {
    var protocolItems = this.state.protocols.map(function(protocol) {
      return (
        <ProtocolItem key={protocol.id} protocol={protocol}/>
      );
    });

    return (
      <div>
        <h1>ProtocolBoxs</h1>
        <div className="protocolBox">
          {protocolItems}
          <ProtocolForm onprotocolsubmit={this.handleprotocolsubmit}/>
        </div>
      </div>
    );
  }
});
