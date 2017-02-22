var ProtocolForm = React.createClass({
  handleSubmit: function(event) {
  event.preventDefault();
  var user = this.refs.user.value.trim();
  // 親コンポーネントのMessageBocのイベントを呼び出す
  this.props.onMessageSubmit( user );
  // フォームの内容を削除
  this.refs.user.value = '';
},

render: function() {
  return (
    <form className="protocolForm" onSubmit={this.handleSubmit}>
      <input type="text" placeholder="Protocols" ref='user' />
      <input type="submit" value="Post" />
    </form>
  );
}
});
