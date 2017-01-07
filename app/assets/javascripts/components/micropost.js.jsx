var MessageBox = React.createClass({
  getInitialState: function() {
    // isLoading = true : ロード中を表示
    return { messages: [], isLoading: true };
  },

  handleMessageSubmit: function(message) {
    $.ajax({
      url: 'microposts',
      datatype: 'json',
      type: 'POST',
      beforeSend: function(xhr) {xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'))},
      data: message,
      success: function(message) {
        var newMessages = this.state.messages.concat(message);
        this.setState({ messages: newMessages });
      }.bind(this),
      error: function(_xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },

  render: function() {
    var messageItems = this.state.messages.map(function(message) {
      return (
        <MessageItem key={message.id} message={message}/>
      );
    });

  // データを取得しないので、ロードする必要もない。コメントアウト
    return (
      <div>
        <h1>Message Box</h1>
          <div className="messageBox">
            {messageItems}
            <MessageForm onMessageSubmit={this.handleMessageSubmit}/>
          </div>
        </div>
      );
  }
});
