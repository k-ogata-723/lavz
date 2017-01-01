// var MicropostView = React.createClass({
//
//   getInitialState: function(){
//     return {
//       //ここでなにも記入していない状態をセット
//     };
//   },
//
//   ajaxMain: function(method){
//     console.log("hello world!");
//     //ここで投稿があった後にマイクロポスト作成のURLを叩く
//     $.ajax({
//       url:this.props.url,
//       type:method,
//       dataType:'json',
//       cache:false,
//       //ここは後で設定
//       data: {post_id: this.props.post},
//       success: function(data) {
//            //ここはあとで活きてきます笑
//            if(data.like){
//              this.setState({is_liked: data.liked});
//               //responseのlikedをstateのis_likedに反映させます
//            };
//            this.setState({counts: data.counts});
//        //bindしないとthisが使えなくてエラりますw
//        }.bind(this),
//       error: function(xhr, status, err) {
//         console.error(this.props.url, status, err.toString());
//       }.bind(this)
//     });
//   },
//
//   render: function(){
//     return(
//       <button onClick={this.ajaxMain.bind(this, "POST")}>いいね!</button>
//     );
//   },
// });
