var MessageBox = React.createClass({
  getInitialState: function() {
    // isLoading = true : ロード中を表示
    return { messages: [], isLoading: true };
  },

  // データを取得する必要がないので、コメントアウト
  // componentDidMount: function() {
  //   $.ajax({
  //     url: this.props.url,
  //     dataType: 'json',
  //     cache: false,
  //     success: function(messages) {
  //       //isLoading = false : ロード中を表示しない
  //       this.setState({ messages: messages, isLoading: false });
  //     }.bind(this),
  //     error: function(_xhr, status, err) {
  //       console.error(this.props.url, status, err.toString());
  //     }.bind(this)
  //   });
  // },

  handleMessageSubmit: function(message) {
    $.ajax({
      url: this.props.url,
      datatype: 'json',
      type: 'POST',
      data: message,
      success: function(message) {
        var newMessages = this.state.messages.concat(message);
        this.setState({ messages: newMessages });
      }.bind(this),
      error: function(_xhr, status, err) {
        console.error(this.props.url, status, err.roString());
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
