var MessageForm = React.createClass({
  handleSubmit: function(event) {
    event.preventDefault();
    var user = this.refs.user.value.trim();
    // 親コンポーネントのMessageBoxのイベントを呼び出す
    this.props.onMessageSubmit( user );
    // フォームの内容を削除
    this.refs.user.value = '';
  },

  render: function() {
    console.log('kore', this.props.micropostValue.length);
    if (this.props.micropostValue.length !== 0) {
      return (
        <div>
          <form className="commentForm" onSubmit={this.handleSubmit}>
            <input type="text" placeholder="Title" ref='user'/>
            <input type="submit" value="Post" />
          </form>
          <div><ProtocolBox /></div>
        </div>
      );
    } else {
      return (
        <div>
          <form className="commentForm" onSubmit={this.handleSubmit}>
            <input type="text" placeholder="Title" ref='user'/>
            <input type="submit" value="Post" />
          </form>
        </div>
      );
    }
  }
});
