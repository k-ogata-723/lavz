var MessageBox = React.createClass({
  getInitialState: function() {
    // isLoading = true : ロード中を表示
    return { messages: [], isLoading: true };
  },

  componentDidMount: function() {
    $.ajax({
      url: 'microposts/111',
      dataType: 'json',
      type: "GET",
      cache:     false,
      success: function(messages) {
        this.setState({ messages: messages, isLoading: false });
      }.bind(this),
      error: function(_xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },

  handleMessageSubmit: function(message) {
    // console.log(this.state.messages);
    // messagesがからのときにマイクロポストを作成する
    if (this.state.messages == "") {
      $.ajax({
        url: 'microposts',
        datatype: 'json',
        type: 'POST',
        beforeSend: function(xhr) {xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'))},
        data: {
          micropost: { content: message }
        },
        success: function(message) {
          var newMessages = this.state.messages.concat(message);
          this.setState({ messages: newMessages });
          console.log(message);
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
          console.log(message);
          console.log('yobidasuyo-');
        }.bind(this),
        error: function(_xhr, status, err) {
          console.error(this.props.url, status, err.toString());
        }.bind(this)
    })
    }
  },

  render: function() {

    var messageItems = this.state.messages.map(function(message) {
      return (
        <MessageItem key={message.id} message={message}/>
      );
    });

    return (
      <div>
        <h1>Message Box</h1>
        <div className="messageBox">
          {messageItems}
          <MessageForm onMessageSubmit={this.handleMessageSubmit} micropostValue={this.state.messages}/>
        </div>
      </div>
    );
  }
});