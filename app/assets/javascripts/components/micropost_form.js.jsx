var MessageForm = React.createClass({
  handleSubmit: function(event) {
    event.preventDefault();
    var user = this.refs.user.value.trim();
    // var text = this.refs.text.value.trim();
    //どちらか入力されなければ何もしない
    // if (!user || !text) {
    //   return;
    // }
    //親コンポーネントのMessageBocのイベントを呼び出す
    this.props.onMessageSubmit({ user: user });
    //フォームの内容を削除
    this.refs.user.value = '';
    // this.refs.text.value = '';
  },

  render: function() {
    return (
      <form className="commentForm" onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Title" ref='user'/>
        <input type="submit" value="Post" />
      </form>
    );
  }
});
