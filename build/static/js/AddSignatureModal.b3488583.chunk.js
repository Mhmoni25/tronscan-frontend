(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{3488:function(e,t,n){"use strict";n.r(t);var a=n(13),c=n(14),o=n(20),i=n(19),l=n(21),r=n(30),s=n(0),d=n.n(s),u=n(8),h=n(2682),m=n(153),b=n.n(m),p=function(e){function t(){var e;return Object(a.a)(this,t),(e=Object(o.a)(this,Object(i.a)(t).call(this))).hideModal=function(){var t=e.props.onClose;t&&t()},e.signWithQRCode=function(){e.setState({body:d.a.createElement("div",null,d.a.createElement(h.a,{onScan:e.onCodeScan}))})},e.onCodeScan=function(t){var n=t.code;e.setState({body:d.a.createElement("div",null,d.a.createElement("h1",null,n))})},e.state={body:null},e}return Object(l.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.transaction;this.setState({body:d.a.createElement("div",{className:"text-center"},d.a.createElement(b.a,{size:512,style:{width:"100%",height:"auto"},value:e}),d.a.createElement("br",null),d.a.createElement("button",{className:"btn btn-primary",onClick:this.signWithQRCode},"Sign with QR Code"))})}},{key:"render",value:function(){var e=this.state.body;this.props.transaction;return d.a.createElement(u.c,{isOpen:!0,toggle:this.hideModal,fade:!1,className:"modal-dialog-centered"},d.a.createElement(u.f,{className:"text-center",toggle:this.hideModal},"Sign Transaction"),d.a.createElement(u.d,null,e))}}]),t}(d.a.Component);t.default=Object(r.connect)(function(e){return{account:e.app.account}},{})(p)}}]);