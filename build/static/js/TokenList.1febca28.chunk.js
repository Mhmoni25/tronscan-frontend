(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{1392:function(e,t,a){"use strict";a.d(t,"a",function(){return C});var n=a(1404),r=a.n(n),l=a(45),o=a.n(l),c=a(192),s=a.n(c),i=a(1385),u=a.n(i),m=a(2),p=a.n(m),d=a(31),f=a(5),g=a(13),b=a(14),h=a(20),E=a(19),w=a(21),x=a(0),y=a.n(x),k=a(3),v=a(16);function O(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function N(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?O(a,!0).forEach(function(t){Object(d.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):O(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var C=function(e){function t(e){var a;return Object(g.a)(this,t),(a=Object(h.a)(this,Object(E.a)(t).call(this,e))).loadDatas=Object(f.a)(p.a.mark(function e(){var t,n,r,l,o=arguments;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=o.length>0&&void 0!==o[0]?o[0]:1,n=o.length>1&&void 0!==o[1]?o[1]:40,r=a.state.filter,e.next=5,v.a.getTokens(N({sort:"rank",limit:n,start:(t-1)*n},r));case 5:return l=e.sent,e.abrupt("return",l);case 7:case"end":return e.stop()}},e)})),a.handleTableChange=function(e,t,n){var r=N({},a.state.pagination);r.current=e.current,a.setState({pagination:r}),a.fetch(N({pageSize:e.pageSize,page:e.current,sortField:n.field,sortOrder:n.order},t))},a.fetch=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};a.setState({loading:!0}),a.props.onPageChange?(a.props.onPageChange(e.page,e.pageSize),a.setState({loading:!1})):a.setState({loading:!1})},a.onInputChange=function(e){a.setState({searchText:e.target.value})},a.onReset=function(){a.setState({searchText:""},function(){a.onSearch()})},a.onSearch=function(){var e=a.props.tableData,t=a.state.searchText,n=new RegExp(t,"gi");a.setState({filterDropdownVisible:!1,filtered:!!t,data:e.map(function(e){return e.name.match(n)?N({},e,{name:y.a.createElement("span",null," ",e.name.split(new RegExp("(?<=".concat(t,")|(?=").concat(t,")"),"i")).map(function(e,a){return e.toLowerCase()===t.toLowerCase()?y.a.createElement("span",{key:a,className:"highlight"}," ",e," "):e})," ")}):null}).filter(function(e){return!!e})})},a.setColumn=function(e){function t(e){return function(t,a){return t[e]>a[e]?1:t[e]<a[e]?-1:0}}var n={filterDropdown:y.a.createElement("div",{className:"custom-filter-dropdown"},y.a.createElement(u.a,{ref:function(e){return a.searchInput=e},placeholder:"Search name",value:a.state.searchText,onChange:a.onInputChange,onPressEnter:a.onSearch})," ",y.a.createElement(s.a,{type:"primary",onClick:a.onSearch}," ",Object(k.c)("search")," ")," ",y.a.createElement(s.a,{className:"btn-secondary ml-1",onClick:a.onReset}," ",Object(k.c)("reset")," ")," "),filterIcon:y.a.createElement(o.a,{type:"filter",style:{color:a.state.filtered?"#108ee9":"#aaa"}}),filterDropdownVisible:a.state.filterDropdownVisible,onFilterDropdownVisibleChange:function(e){a.setState({filterDropdownVisible:e},function(){a.searchInput&&a.searchInput.focus()})}},r=[],l=!0,c=!1,i=void 0;try{for(var m,p=e[Symbol.iterator]();!(l=(m=p.next()).done);l=!0){var d=m.value;if(d.sorter&&!d.filterDropdown){var f={sorter:t(d.key)};r.push(N({},d,{},f))}else if(!d.sorter&&d.filterDropdown){var g=N({},n);r.push(N({},d,{},g))}else if(d.sorter&&d.filterDropdown){var b=N({sorter:t(d.key)},n);r.push(N({},d,{},b))}else r.push(d)}}catch(h){c=!0,i=h}finally{try{l||null==p.return||p.return()}finally{if(c)throw i}}return r},a.state={filterDropdownVisible:!1,data:[],searchText:"",filtered:!1,pagination:{showQuickJumper:!0,position:e.position||"both",showSizeChanger:!0,defaultPageSize:20,current:e.current||1},loading:!1},a}return Object(w.a)(t,e),Object(b.a)(t,[{key:"componentDidMount",value:function(){}},{key:"componentDidUpdate",value:function(e){var t=this.props.current,a=this.state.pagination;e.current!=t&&this.setState({pagination:N({},a,{current:t})})}},{key:"render",value:function(){var e=this.props,t=e.total,a=e.loading,n=e.data,l=e.column,o=e.bordered,c=e.pagination,s=void 0===c||c,i=e.scroll,u=e.locale,m=e.addr,p=e.transfers,d=(e.contractAddress,e.isPaddingTop,this.setColumn(l)),f=s?N({total:t},this.state.pagination):s;return y.a.createElement("div",null," ",m?y.a.createElement("div",{className:"card table_pos table_pos_addr "+(0==n.length?"table_pos_addr_data":"")+("address"==p?" transfer-mt-100":" transfer-pt-100")},y.a.createElement(r.a,{bordered:o,columns:d,rowKey:function(e,t){return t},dataSource:n,locale:u,scroll:i,pagination:f,loading:a,onChange:this.handleTableChange})," "):y.a.createElement("div",{className:"card table_pos"},y.a.createElement(r.a,{bordered:o,columns:d,rowKey:function(e,t){return t},dataSource:n,locale:u,scroll:i,pagination:f,loading:a,onChange:this.handleTableChange})," ")," ")}}]),t}(x.Component)},1394:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAQAAABvygHQAAAClUlEQVR4AcWXRXLkMBSGJ7uhdV8gN8pR+gKhU6gxzMzMzMzMKAX2+cbVdqlJ7nTANf43gqq/nt7/yD/+w/eUq/yyUg2rXfkqX9WuGrZ2/qfcT9K9+lSRXJe4YF0Vvfo+RMhflW9Zxjt4Vfn8zZJS5akbSXZQNyrvfRtzVL56k2QP9abyyclE+UvVST4OVccvdys15cdpXay1xOHzUPlmeRxfttHCCCsc8/Ax3+alB5FWfAHhIEgtPcyww3VWkcBf16ffEUYQYZ4VRmmlFGGhjDZrt8IJj9m54NWXHOr9lNNJgAVnf8020/RQQxBBiDr6ODGmQ0KWqeLky0MEe0wgGEyx64Fj5gkhiHJosrVIk6bneB09SNYJ08xt0s0ldUTZoo0Ie4aaoCtR2hULhGJkx5RTmfDUA0qp4Txmcychi1ymwKlgyp96YYs16/izkQibSAsrhGjTlt/RSJC1VAf47cdXmpTsp0b7sQ/BNKMIRrhgkym6qSaAsNCOTEalbemwvTWIpXezMYogkRhRhUU1xjJlFvVtqqXDNumuvTWKpdFGOQPMs6dpuolylq7/boxUx6iLWDZqGU26nSTAjjFWbdIXM+mtI5aNKPNIjQ2E3qfgxfB8s1h3CDb1+TFhBtxSddcglFmsYwTHOmnLaXKtAGrYPaS0J22xNhHcOQHWSAU3SDdUGoLfLNY8Ueekj4i22QTlT0lTs1hzSEapteNV+9YNT7mGgmIWqzuWOdsEmEJmwnq89BVJMovVwBCnRGwPZ4AqMhZps1iljFNFvblrmYt05k5qF+UI5Vx9rKPqxuciliDE4Ucbn27RLmIJVj/eojO74JCxjw8THo49ngxoHo2SHg29no3n+kei+OM/Ep7+8njw/QOnF3WHklwUswAAAABJRU5ErkJggg=="},1906:function(e,t,a){var n=a(115);e.exports=function(e){return n(e).toLowerCase()}},2013:function(e,t,a){"use strict";var n=a(192),r=a.n(n),l=a(1385),o=a.n(l),c=a(13),s=a(14),i=a(20),u=a(19),m=a(21),p=a(0),d=a.n(p),f=a(3),g=a(95),b=a.n(g);d.a.Component},3464:function(e,t,a){"use strict";a.r(t);var n,r=a(1906),l=a.n(r),o=a(254),c=a.n(o),s=a(38),i=a.n(s),u=a(2),m=a.n(u),p=a(5),d=a(13),f=a(14),g=a(20),b=a(19),h=a(21),E=a(0),w=a.n(E),x=a(30),y=a(364),k=a(10),v=a(52),O=a.n(v),N=a(3),C=a(16),S=a(23),j=a(255),T=a(371),A=(a(2013),a(78)),_=a(1392),D=a(6),R=a(18),P=a(53),U=a(87),M=a(63),I=a(15),V=a.n(I),B=a(11),W=a.n(B),F=a(137),J=a(65),L=Object(F.a)(n=function(e){function t(e){var n;Object(d.a)(this,t),(n=Object(g.a)(this,Object(b.a)(t).call(this,e))).loadPage=Object(p.a)(m.a.mark(function e(){var t,a,r,l,o,c,s,i,u=arguments;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=u.length>0&&void 0!==u[0]?u[0]:1,a=u.length>1&&void 0!==u[1]?u[1]:20,r=n.state.filter,l=n.props.intl,n.setState({loading:!0}),!r.name){e.next=13;break}return e.next=8,V.a.get(D.e+"/api/token?sort=rank&limit="+a+"&start="+(t-1)*a+"&name="+r.name);case 8:o=e.sent,c=o.data.data.length,s=o.data.totalAll,e.next=18;break;case 13:return e.next=15,V.a.get(D.e+"/api/token?sort=rank&limit="+a+"&start="+(t-1)*a+"&totalAll=1&showAll=2");case 15:o=e.sent,c=o.data.total,s=o.data.totalAll;case 18:return 0===(i=o.data.data).length&&A.toastr.warning(l.formatMessage({id:"warning"}),l.formatMessage({id:"record_not_found"})),n.setState({loading:!1,tokens:i,total:c,totalAll:s}),e.abrupt("return",c);case 22:case"end":return e.stop()}},e)})),n.setSearch=function(){var e=i()(Object(T.a)(n.props.location,"search"));e.length>0?n.setState({filter:{name:"".concat(e)}}):n.setState({filter:{}})},n.onChange=function(e,t){n.loadPage(e,t)},n.searchName=function(e){e.length>0?n.setState({filter:{name:"%25".concat(e,"%25")}}):"#/tokens/list"!==window.location.hash?window.location.hash="#/tokens/list":n.setState({filter:{}})},n.onBuyInputChange=function(e,t,a){var r=n.props.intl;e>a&&(e=a),e=e.replace(/^0|[^\d*]/g,""),n.setState({buyAmount:e}),n.buyAmount.value=e;var l=e*t;n.priceTRX.innerHTML=r.formatNumber(l,{maximumFractionDigits:6})},n.preBuyTokens=function(e){n.state.buyAmount;var t=n.props;t.currentWallet;t.wallet.isOpen?n.setState({alert:w.a.createElement(O.a,{showConfirm:!1},w.a.createElement("div",{className:"mt-5 token-sweet-alert",style:{textAlign:"left"}},w.a.createElement("a",{style:{float:"right",marginTop:"-45px"},onClick:function(){n.setState({alert:null})}},w.a.createElement("i",{className:"fa fa-times"})),w.a.createElement("h5",{style:{color:"black"}},Object(N.c)("buy_token_info")),0===e.remaining&&w.a.createElement("span",null," ",Object(N.c)("no_token_to_buy")),w.a.createElement("div",{className:"input-group mt-5"},w.a.createElement("input",{type:"number",ref:function(e){return n.buyAmount=e},className:"form-control",max:e.remaining,min:1,onKeyUp:function(e){e.target.value=e.target.value.replace(/^0|[^\d*]/g,"")},onChange:function(t){n.onBuyInputChange(t.target.value,e.trxNum/e.num*Math.pow(10,e.precision)/D.E,e.remaining)}})),w.a.createElement("div",{className:"text-center mt-3 text-muted"},w.a.createElement("b",null,"= ",w.a.createElement("span",{ref:function(e){return n.priceTRX=e}},"0")," TRX")),w.a.createElement("button",{className:"btn btn-danger btn-block mt-3",onClick:function(){n.buyTokens(e)}},Object(N.c)("participate"))))}):n.setState({alert:w.a.createElement(O.a,{info:!0,showConfirm:!1},w.a.createElement("div",{className:"token-sweet-alert"},w.a.createElement("a",{className:"close",onClick:function(){n.setState({alert:null})}},w.a.createElement("i",{className:"fa fa-times"})),w.a.createElement("span",null,Object(N.c)("login_first")),w.a.createElement("button",{className:"btn btn-danger btn-block mt-3",onClick:function(){n.setState({alert:null})}},Object(N.c)("OK"))))})},n.buyTokens=function(e){var t=e.trxNum/e.num*Math.pow(10,e.precision),a=n.state.buyAmount;if(!(a<=0)){var r=n.props,l=r.currentWallet,o=(r.wallet,a*(t/D.E));l.balance/D.E<o?n.setState({alert:w.a.createElement(O.a,{warning:!0,showConfirm:!1,style:{marginLeft:"-240px",marginTop:"-195px",width:"450px",height:"300px"}},w.a.createElement("div",{className:"mt-5 token-sweet-alert"},w.a.createElement("a",{style:{float:"right",marginTop:"-155px"},onClick:function(){n.setState({alert:null})}},w.a.createElement("i",{className:"fa fa-times",ariaHidden:"true"})),w.a.createElement("span",null,Object(N.c)("not_enough_trx_message")),w.a.createElement("button",{className:"btn btn-danger btn-block mt-3",onClick:function(){n.setState({alert:null})}},Object(N.c)("confirm"))))}):n.setState({alert:w.a.createElement(O.a,{warning:!0,showConfirm:!1,style:{marginLeft:"-240px",marginTop:"-195px",width:"450px",height:"300px"}},w.a.createElement("div",{className:"mt-5 token-sweet-alert"},w.a.createElement("a",{style:{float:"right",marginTop:"-155px"},onClick:function(){n.setState({alert:null})}},w.a.createElement("i",{className:"fa fa-times",ariaHidden:"true"})),w.a.createElement("p",{className:"ml-auto buy_confirm_message"},Object(N.c)("buy_confirm_message_1")),w.a.createElement("span",null,a," ",e.name," ",Object(N.b)("for")," ",parseFloat((a*(t/D.E)).toFixed(6))," TRX?"),w.a.createElement("button",{className:"btn btn-danger btn-block mt-3",onClick:function(){n.confirmTransaction(e)}},Object(N.c)("confirm"))))})}},n.submit=function(){var e=Object(p.a)(m.a.mark(function e(t){var a,r,l,o,c,s,i,u,p,d,f,g,b,h,E;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.trxNum/t.num*Math.pow(10,t.precision),r=n.props,l=r.account,o=r.currentWallet,c=n.state.buyAmount,!W.a.get("islogin")&&"ACCOUNT_LEDGER"!==n.props.walletType.type&&"ACCOUNT_TRONLINK"!==n.props.walletType.type){e.next=32;break}if(i=n.props.tronWeb(),u=n.props.account.tronWeb,e.prev=6,"ACCOUNT_LEDGER"!==n.props.walletType.type){e.next=16;break}return e.next=10,i.transactionBuilder.purchaseToken(t.ownerAddress,t.id+"",parseInt((c*a).toFixed(0)),n.props.walletType.address).catch(function(e){return!1});case 10:return p=e.sent,e.next=13,Object(M.c)(p,i);case 13:d=e.sent,f=d.result,s=f;case 16:if("ACCOUNT_TRONLINK"!==n.props.walletType.type){e.next=25;break}return e.next=19,u.transactionBuilder.purchaseToken(t.ownerAddress,t.id+"",parseInt((c*a).toFixed(0)),u.defaultAddress.hex).catch(function(e){return!1});case 19:return g=e.sent,e.next=22,Object(M.c)(g,u);case 22:b=e.sent,h=b.result,s=h;case 25:e.next=30;break;case 27:e.prev=27,e.t0=e.catch(6),console.log(e.t0);case 30:e.next=36;break;case 32:return e.next=34,C.a.participateAsset(o.address,t.ownerAddress,t.id+"",parseInt((c*a).toFixed(0)))(l.key);case 34:E=e.sent,s=E.success;case 36:if(!s){e.next=41;break}return n.setState({activeToken:null,confirmedParticipate:!0,participateSuccess:s,buyAmount:0}),e.abrupt("return",!0);case 41:return e.abrupt("return",!1);case 42:case"end":return e.stop()}},e,null,[[6,27]])}));return function(t){return e.apply(this,arguments)}}(),n.confirmTransaction=function(){var e=Object(p.a)(m.a.mark(function e(t){var a,r;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.props,a.account,r=a.intl,n.state.buyAmount,n.setState({alert:w.a.createElement(O.a,{showConfirm:!1,showCancel:!1,cancelBtnBsStyle:"default",title:r.formatMessage({id:"transferring"}),style:{marginLeft:"-240px",marginTop:"-195px",width:"450px",height:"300px"}})}),e.next=5,n.submit(t);case 5:if(!e.sent){e.next=9;break}n.setState({alert:w.a.createElement(O.a,{success:!0,showConfirm:!1,style:{marginLeft:"-240px",marginTop:"-195px",width:"450px",height:"300px"}},w.a.createElement("div",{className:"mt-5 token-sweet-alert"},w.a.createElement("a",{style:{float:"right",marginTop:"-155px"},onClick:function(){n.setState({alert:null})}},w.a.createElement("i",{className:"fa fa-times",ariaHidden:"true"})),w.a.createElement("h5",{style:{color:"black"}},Object(N.c)("transaction")," ",Object(N.c)("confirm")),w.a.createElement("span",null,Object(N.c)("success_receive")," ",t.name," ",Object(N.c)("tokens")),w.a.createElement("button",{className:"btn btn-danger btn-block mt-3",onClick:function(){n.setState({alert:null})}},Object(N.c)("OK"))))}),e.next=10;break;case 9:n.setState({alert:w.a.createElement(O.a,{danger:!0,title:"Error",onConfirm:function(){return n.setState({alert:null})}},Object(N.c)("fail_transaction"))});case 10:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),n.customizedColumn=function(){var e=n.props.intl,t=a(1394);return[{title:"#",dataIndex:"index",key:"index",align:"center",className:"ant_table _text_nowrap"},{title:c()(e.formatMessage({id:"token"})),dataIndex:"name",key:"name",width:"50%",render:function(e,n,r){return w.a.createElement("div",{className:"table-imgtext"},n.imgUrl?w.a.createElement("div",{style:{width:"42px",height:"42px",marginRight:"18px"}},1002e3==n.id?w.a.createElement("div",{className:"token-img-top"},w.a.createElement("img",{style:{width:"42px",height:"42px"},src:n.imgUrl,onError:function(e){e.target.onerror=null,e.target.src=t}}),w.a.createElement("i",null)):w.a.createElement("img",{style:{width:"42px",height:"42px"},src:n.imgUrl,onError:function(e){e.target.onerror=null,e.target.src=t}})):w.a.createElement("div",{style:{width:"42px",height:"42px",marginRight:"18px"}},w.a.createElement("img",{style:{width:"42px",height:"42px"},src:a(1394)})),w.a.createElement("div",null,w.a.createElement("h5",null,w.a.createElement(S.f,{name:n.name,id:n.id,namePlus:n.name+" ("+n.abbr+")",address:n.ownerAddress})),w.a.createElement("p",{style:{wordBreak:"break-all"}},n.description)))}},{title:"ID",render:function(e,t,a){return w.a.createElement("div",null,t.id)},align:"center",className:"ant_table d-none d-md-table-cell _text_nowrap"},{title:e.formatMessage({id:"fund_raised"}),render:function(e,t,a){return w.a.createElement("div",null,w.a.createElement(k.c,{value:t.participated/D.E,maximumFractionDigits:1})," ","TRX")},align:"center",className:"ant_table d-none d-md-table-cell _text_nowrap"},{title:e.formatMessage({id:"reputation"}),dataIndex:"reputation",key:"reputation",align:"center",className:"ant_table",render:function(t,a,n){var r=l()(t);return w.a.createElement("div",null,r&&e.formatMessage({id:r}))}},{title:e.formatMessage({id:"issue_progress"}),dataIndex:"issuedPercentage",key:"issuedPercentage",render:function(e,t,a){return null===e&&(e=0),w.a.createElement("div",null,w.a.createElement(k.c,{value:e,maximumFractionDigits:1}),"%")},align:"center",className:"ant_table _text_nowrap"},{title:e.formatMessage({id:"created_token_time"}),dataIndex:"dateCreated",key:"dateCreated",render:function(e,t,a){return w.a.createElement(k.a,{value:e})},align:"center",className:"ant_table d-none d-sm-table-cell"},{title:e.formatMessage({id:"participate"}),align:"center",render:function(e,t,a){return t.isBlack?w.a.createElement("button",{className:"btn btn-secondary btn-sm",disabled:!0},Object(N.c)("participate")):t.endTime<new Date||100===t.issuedPercentage?w.a.createElement("span",{style:{fontWeight:"normal"}},Object(N.c)("finish")):t.startTime>new Date?w.a.createElement("span",{style:{fontWeight:"normal"}},Object(N.c)("not_started")):w.a.createElement("button",{className:"btn btn-default btn-block btn-sm",onClick:function(){return n.preBuyTokens(t)}},Object(N.c)("participate"))},className:"ant_table"}]},n.state={tokens:[],buyAmount:0,loading:!1,total:0,totalAll:0,filter:{}};var r=i()(Object(T.a)(e.location,"search"));return r.length>0&&(n.state.filter.name="".concat(r)),n}return Object(h.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){this.loadPage()}},{key:"componentDidUpdate",value:function(e,t){this.props.location!==e.location&&this.setSearch(),this.state.filter!==t.filter&&(console.log("SEARCH CHANGED!"),this.loadPage())}},{key:"render",value:function(){var e=this,t=this.state,a=t.tokens,n=t.alert,r=t.loading,l=t.total,o=t.totalAll,c=this.props,s=(c.match,c.intl),i=this.customizedColumn(),u=s.formatMessage({id:"part_total"})+" "+l+"/"+o+" "+s.formatMessage({id:"part_pass"});return w.a.createElement("main",{className:"container header-overlap token_black"},n,r&&w.a.createElement("div",{className:"loading-style"},w.a.createElement(U.b,null)),w.a.createElement("div",{className:"row"},w.a.createElement("div",{className:"col-md-12 table_pos"},l?w.a.createElement("div",{className:"table_pos_info d-none d-md-block",style:{left:"auto"}},u," ",w.a.createElement("span",null,w.a.createElement(j.a,{placement:"top",text:"newly_issued_token_by_tronscan",className:"token-list-info"}))," ","\xa0\xa0"," ",w.a.createElement(J.a,{to:"/exchange/trc10"},Object(N.b)("Trade_on_Poloni DEX"),">")):"",w.a.createElement(_.a,{bordered:!0,loading:r,column:i,data:a,total:l,rowClassName:"table-row",onPageChange:function(t,a){e.loadPage(t,a)}}))))}}]),t}(E.Component))||n;var q={loadTokens:y.b,login:R.v,reloadWallet:P.c};t.default=Object(x.connect)(function(e){return{account:e.app.account,walletType:e.app.wallet,tokens:e.tokens.tokens,wallet:e.wallet,currentWallet:e.wallet.current}},q)(Object(k.h)(L))}}]);