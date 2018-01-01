var EditMessageBox = React.createClass({
  getInitialState: function() {
    console.log(this.props.sample);
    // isLoading = true : ロード中を表示
    return { messages: [], isLoading: true };
  },

  componentDidMount: function() {
    var micropost_id = this.refs.selectedMicropostId.value;
    console.log(micropost_id);

    this.setState({ isMounted: true });
    if (this.isMounted = true ) {
      $.ajax({
        url: 'microposts/111',
        dataType: 'json',
        type: "GET",
        cache:     false,
        success: function(messages) {
          this.setState({ messages: messages, isLoading: false });
          console.log("componentDidMount success");
        }.bind(this),
        error: function(_xhr, status, err) {
          console.log("componentDidMount error");
        }.bind(this)
      });
    }
  },

  handleMessageSubmit: function(message) {
    // console.log(this.state.messages);
    // micropostのidに紐づくidを取得する
    if (this.state.messages == "") {
      $.ajax({
        url: 'microposts/893',
        datatype: 'json',
        type: 'GET',
        data: {message: "test"},
        beforeSend: function(xhr) {xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'))},
        success: function(message) {
          var newMessages = this.state.messages.concat(message);
          this.setState({ messages: newMessages });
          console.log('micropostの取得に成功', this.state.messages);
          console.log('micropostの取得に成功', message);
        }.bind(this),
        error: function(_xhr, status, err) {
          console.error(this.props.url, status, err.toString());
        }.bind(this)
      });
    // messagesがすでに存在しているときに、マイクロポストをupdateする
    } else {
      // console.log("else");
      // console.log(this.state.messages)
      $.ajax({
        url: 'microposts/' + this.state.messages[0].id,
        datatype: 'json',
        type: 'PATCH',
        beforeSend: function(xhr) {xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'))},
        data: {
          micropost: { content: message }
        },
        success: function(message) {
          initial_messages = [];
          var newMessages = initial_messages.concat(message);
          this.setState({ messages: newMessages });
          console.log('2回目以降のmicropostのPATCHの後', this.state.messages);
        }.bind(this),
        error: function(_xhr, status, err) {
          console.error(this.props.url, status, err.toString());
        }.bind(this)
    })
    }
  },

  render: function() {
    // console.log('test message', this.state.messages[0]['id']);

    var messageItems = this.state.messages.map(function(message) {
      return (
        <EditMessageItem key={message.id} message={message}/>
      );
    });

    return (
      <div>
        <h2 className="title">Protocol Title</h2>
        <div className="messageBox">
          {messageItems}
          <EditMessageForm onMessageSubmit={this.handleMessageSubmit} micropostValue={this.state.messages}/>
        </div>
      </div>
    );
  }
});
