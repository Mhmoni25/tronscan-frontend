(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{2414:function(e,a,t){"use strict";t.d(a,"a",function(){return i});var n=t(2415),l=t.n(n),r=t(6),i=function(e){return console.log(e,"==="),new l.a(r.y).encrypt(e,"base64")}},3503:function(e,a,t){"use strict";t.r(a);var n,l,r,i,o=t(1413),c=t.n(o),m=t(31),s=t(2),u=t.n(s),p=t(5),d=t(13),f=t(14),b=t(20),E=t(19),h=t(21),S=t(0),v=t.n(S),k=t(10),g=t(30),y=t(3),O=t(1498),w=t.n(O),T=t(1497),I=t.n(T),P=t(1385),D=t.n(P),j=(t(253),t(52)),R=t.n(j),A=Object(g.connect)(function(e,a){return{account:e.app.account,wallet:e.wallet.current,form:a.form,params:a.params}})(n=function(e){function a(e){var t;return Object(d.a)(this,a),(t=Object(b.a)(this,Object(E.a)(a).call(this,e))).state={},t}return Object(h.a)(a,e),Object(f.a)(a,[{key:"render",value:function(){var e=this.props.params,a=e.tokenProceedsUsage,t=e.tokenReleaseSchedule,n=e.currentTokenUtility,l=e.futureTokenUtility,r=e.seedSaleTokenPrice,i=e.amountRaisedInSeedSale,o=e.seedSaleStartAndEndDate,m=e.seedSaleDisPlan,s=e.privateSaleTokenPrice,u=e.amountRaisedInPrivateSale,p=e.privateSaleStartAndCompletionDate,d=e.privateSaleDisPlan,f=e.publicSaleTokenPrice,b=e.publicSaleTargetAmount,E=e.publicSaleStartAndEndDate,h=e.publicSaleDisPlan,S=e.totalAmountOfFundsRaised,k=e.initialCirculatingSupply,g=this.props.form.getFieldDecorator,y=v.a.createElement(I.a,{span:24,md:24},v.a.createElement(c.a.Item,{label:"Token Proceeds Uage"},g("tokenProceedsUsage",{initialValue:a})(v.a.createElement(D.a,null)))),O=v.a.createElement(I.a,{span:24,md:24},v.a.createElement(c.a.Item,{label:"Token Release Schedule"},g("tokenReleaseSchedule",{initialValue:t})(v.a.createElement(D.a,null)))),T=v.a.createElement(I.a,{span:24,md:24},v.a.createElement(c.a.Item,{label:"Current Token Utility"},g("currentTokenUtility",{initialValue:n})(v.a.createElement(D.a,null)))),P=v.a.createElement(I.a,{span:24,md:24},v.a.createElement(c.a.Item,{label:"Future Token Utility"},g("futureTokenUtility",{initialValue:l})(v.a.createElement(D.a,null)))),j=v.a.createElement(I.a,{span:24,md:11},v.a.createElement(c.a.Item,{label:"Seed Sale Token Price"},g("seedSaleTokenPrice",{initialValue:r})(v.a.createElement(D.a,null)))),R=v.a.createElement(I.a,{span:24,md:11},v.a.createElement(c.a.Item,{label:"Amount Raised in Seed Sale"},g("amountRaisedInSeedSale",{initialValue:i})(v.a.createElement(D.a,null)))),A=v.a.createElement(I.a,{span:24,md:24},v.a.createElement(c.a.Item,{label:"Seed Sale Start Date and End Date"},g("seedSaleStartAndEndDate",{initialValue:o})(v.a.createElement(D.a,null)))),V=v.a.createElement(I.a,{span:24,md:24},v.a.createElement(c.a.Item,{label:"Seed Sale Distribution Plan"},g("seedSaleDisPlan",{initialValue:m})(v.a.createElement(D.a,null)))),x=v.a.createElement(I.a,{span:24,md:11},v.a.createElement(c.a.Item,{label:"Private Sale Token Price"},g("privateSaleTokenPrice",{initialValue:s})(v.a.createElement(D.a,null)))),M=v.a.createElement(I.a,{span:24,md:11},v.a.createElement(c.a.Item,{label:"Amount Raised in Private Sale"},g("amountRaisedInPrivateSale",{initialValue:u})(v.a.createElement(D.a,null)))),C=v.a.createElement(I.a,{span:24,md:24},v.a.createElement(c.a.Item,{label:"Private Sale Start Date and Completion Date"},g("privateSaleStartAndCompletionDate",{initialValue:p})(v.a.createElement(D.a,null)))),B=v.a.createElement(I.a,{span:24,md:24},v.a.createElement(c.a.Item,{label:"Private Sale Distribution Plan"},g("privateSaleDisPlan",{initialValue:d})(v.a.createElement(D.a,null)))),N=v.a.createElement(I.a,{span:24,md:11},v.a.createElement(c.a.Item,{label:"Public Sale Token Price"},g("publicSaleTokenPrice",{initialValue:f})(v.a.createElement(D.a,null)))),L=v.a.createElement(I.a,{span:24,md:11},v.a.createElement(c.a.Item,{label:"Amount Raised in Public Sale"},g("publicSaleTargetAmount",{initialValue:b})(v.a.createElement(D.a,null)))),U=v.a.createElement(I.a,{span:24,md:24},v.a.createElement(c.a.Item,{label:"Public Sale Start Date and Completion Date"},g("publicSaleStartAndEndDate",{initialValue:E})(v.a.createElement(D.a,null)))),_=v.a.createElement(I.a,{span:24,md:24},v.a.createElement(c.a.Item,{label:"Public Sale Distribution Plan"},g("publicSaleDisPlan",{initialValue:h})(v.a.createElement(D.a,null)))),Y=v.a.createElement(I.a,{span:24,md:11},v.a.createElement(c.a.Item,{label:"Total Amount of Funds Raised"},g("totalAmountOfFundsRaised",{initialValue:S})(v.a.createElement(D.a,null)))),F=v.a.createElement(I.a,{span:24,md:11},v.a.createElement(c.a.Item,{label:"Initial Circulating Supply"},g("initialCirculatingSupply",{initialValue:k})(v.a.createElement(D.a,null))));return v.a.createElement("main",null,v.a.createElement("h4",{className:"mb-3 mt-3"},"Token Information"),v.a.createElement("hr",null),v.a.createElement(w.a,{gutter:24,type:"flex",justify:"space-between",className:"px-2"},y,O,T,P),v.a.createElement("h4",{className:"mb-3"},"Sale Information"),v.a.createElement("hr",null),v.a.createElement(w.a,{gutter:24,type:"flex",justify:"space-between",className:"px-2"},j,R,A,V,x,M,C,B,N,L,U,_,Y,F))}}]),a}(S.Component))||n,V=c.a.create({name:"market_info2"})(Object(k.h)(A)),x=Object(g.connect)(function(e,a){return{account:e.app.account,wallet:e.wallet.current,form:a.form,params:a.params}})(l=function(e){function a(e){var t;return Object(d.a)(this,a),(t=Object(b.a)(this,Object(E.a)(a).call(this,e))).showModal=function(e){var a=t.props.intl;t.setState({modal:v.a.createElement(R.a,{error:!0,confirmBtnText:a.formatMessage({id:"confirm"}),confirmBtnBsStyle:"success",onConfirm:t.hideModal,style:{marginLeft:"-240px",marginTop:"-195px"}},Object(y.c)(e))})},t.hideModal=function(){t.setState({modal:null})},t.state={},t}return Object(h.a)(a,e),Object(f.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.props.params,a=e.teamOverview,t=e.howDidYourTeamMeet,n=e.teamMembersBased,l=e.teamMemberFullTime,r=e.teamLockUpPlan,i=e.technicalOverview,o=e.topGithubRep,m=e.socialCommunityOverview,s=e.competitorOverview,u=e.DappRadarOrDappReviewRanking,p=e.productUsage,d=e.roadmap,f=e.marketingPlan,b=(this.state.modal,this.props.form.getFieldDecorator),E=v.a.createElement(I.a,{span:24,md:24},v.a.createElement(c.a.Item,{label:"Team Overview"},b("teamOverview",{initialValue:a})(v.a.createElement(D.a,null)))),h=v.a.createElement(I.a,{span:24,md:24},v.a.createElement(c.a.Item,{label:"How did your team meet"},b("howDidYourTeamMeet",{initialValue:t})(v.a.createElement(D.a,null)))),S=v.a.createElement(I.a,{span:24,md:24},v.a.createElement(c.a.Item,{label:"Where are all your team members based"},b("teamMembersBased",{initialValue:n})(v.a.createElement(D.a,null)))),k=v.a.createElement(I.a,{span:24,md:24},v.a.createElement(c.a.Item,{label:"How many full-time team members do you have"},b("teamMemberFullTime",{initialValue:l})(v.a.createElement(D.a,null)))),g=v.a.createElement(I.a,{span:24,md:24},v.a.createElement(c.a.Item,{label:"What is your lock up plan for the team and are you willing to do a 1/12th per month lock up schedule for 12-24 months after TRX market listing"},b("teamLockUpPlan",{initialValue:r})(v.a.createElement(D.a,null)))),y=v.a.createElement(I.a,{span:24,md:24},v.a.createElement(c.a.Item,{label:"Technical Overview"},b("technicalOverview",{initialValue:i})(v.a.createElement(D.a,null)))),O=v.a.createElement(I.a,{span:24,md:24},v.a.createElement(c.a.Item,{label:"Top Github Repositories"},b("topGithubRep",{initialValue:o})(v.a.createElement(D.a,null)))),T=v.a.createElement(I.a,{span:24,md:24},v.a.createElement(c.a.Item,{label:"Social Community Overview"},b("socialCommunityOverview",{initialValue:m})(v.a.createElement(D.a,null)))),P=v.a.createElement(I.a,{span:24,md:24},v.a.createElement(c.a.Item,{label:"Competitor Overview"},b("competitorOverview",{initialValue:s})(v.a.createElement(D.a,null)))),j=v.a.createElement(I.a,{span:24,md:24},v.a.createElement(c.a.Item,{label:"DappRadar or DappReview rankings"},b("DappRadarOrDappReviewRanking",{initialValue:u})(v.a.createElement(D.a,null)))),R=v.a.createElement(I.a,{span:24,md:24},v.a.createElement(c.a.Item,{label:"Product Usage & Metrics (MAU's, DAU's)"},b("productUsage",{initialValue:p})(v.a.createElement(D.a,null)))),A=v.a.createElement(I.a,{span:24,md:24},v.a.createElement(c.a.Item,{label:"Roadmap"},b("roadmap",{initialValue:d})(v.a.createElement(D.a,null)))),V=v.a.createElement(I.a,{span:24,md:24},v.a.createElement(c.a.Item,{label:"Marketing Plan"},b("marketingPlan",{initialValue:f})(v.a.createElement(D.a,null))));return v.a.createElement("main",null,v.a.createElement("h4",{className:"mb-3 mt-3"},"Team Information"),v.a.createElement("hr",null),v.a.createElement(w.a,{gutter:24,type:"flex",justify:"space-between",className:"px-2"},E,h,S,k,g),v.a.createElement("h4",{className:"mb-3"},"Overview"),v.a.createElement("hr",null),v.a.createElement(w.a,{gutter:24,type:"flex",justify:"space-between",className:"px-2"},y,O,T,P,j,R,A,V))}}]),a}(S.Component))||l,M=Object(g.connect)(function(e,a){return{account:e.app.account,wallet:e.wallet.current}})(r=function(e){function a(e){var t;return Object(d.a)(this,a),(t=Object(b.a)(this,Object(E.a)(a).call(this,e))).showModal=function(e){var a=t.props.intl;t.setState({modal:v.a.createElement(R.a,{error:!0,confirmBtnText:a.formatMessage({id:"confirm"}),confirmBtnBsStyle:"success",onConfirm:t.hideModal,style:{marginLeft:"-240px",marginTop:"-195px"}},Object(y.c)(e))})},t.hideModal=function(){t.setState({modal:null})},t.submit=function(e){var a=t.state,n=a.iconList,l=a.count;e.preventDefault(),t.props.form.validateFields(function(e,a){t.props.nextState({paramData:a,iconList:n,social_current:l}),t.props.nextStep(1)})},t.state={},t}return Object(h.a)(a,e),Object(f.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.props.params,a=e.keyBusDevAndPart,t=e.linkToAllTronWallet,n=e.relationshipWithAnyTronSR,l=e.whichExchangesTradedOn,r=e.yourAvg24HVolume,i=e.theTop3ReasonsYouShouldBeListed,o=e.citeYourSources,m=e.top3Things,s=e.youSupportYourCoinProjectTime,u=e.productDemoLink,p=e.allYourProductsLink,d=e.circulatingSupply,f=e.top5HoldersOfYourToken,b=(this.state.modal,this.props.form.getFieldDecorator),E=v.a.createElement(I.a,{span:24,md:24},v.a.createElement(c.a.Item,{label:"Key Business Development and Partners"},b("keyBusDevAndPart",{initialValue:a})(v.a.createElement(D.a,null)))),h=v.a.createElement(I.a,{span:24,md:24},v.a.createElement(c.a.Item,{label:"Link to all Tron wallet address used for token sale (to collect money)"},b("linkToAllTronWallet",{initialValue:t})(v.a.createElement(D.a,null)))),S=v.a.createElement(I.a,{span:24,md:24},v.a.createElement(c.a.Item,{label:"Relationship with any TRON SR's"},b("relationshipWithAnyTronSR",{initialValue:n})(v.a.createElement(D.a,null)))),k=v.a.createElement(I.a,{span:24,md:24},v.a.createElement(c.a.Item,{label:"Which exchanges is it traded on"},b("whichExchangesTradedOn",{initialValue:l})(v.a.createElement(D.a,null)))),g=v.a.createElement(I.a,{span:24,md:24},v.a.createElement(c.a.Item,{label:"If you have listed on other exchanges, what is your average 24H volume"},b("yourAvg24HVolume",{initialValue:r})(v.a.createElement(D.a,null)))),y=v.a.createElement(I.a,{span:24,md:24},v.a.createElement(c.a.Item,{label:"What are the top3 reasons you should be listed"},b("theTop3ReasonsYouShouldBeListed",{initialValue:i})(v.a.createElement(D.a,null)))),O=v.a.createElement(I.a,{span:24,md:24},v.a.createElement(c.a.Item,{label:"How big is the market that you are trying to target? ($M, $B)? Please cite your sources"},b("citeYourSources",{initialValue:o})(v.a.createElement(D.a,null)))),T=v.a.createElement(I.a,{span:24,md:24},v.a.createElement(c.a.Item,{label:"How are the top 3 things that show that your metrics and company traction is growing"},b("top3Things",{initialValue:m})(v.a.createElement(D.a,null)))),P=v.a.createElement(I.a,{span:24,md:24},v.a.createElement(c.a.Item,{label:"How do we know that you will support your coin project for the medium or long term"},b("youSupportYourCoinProjectTime",{initialValue:s})(v.a.createElement(D.a,null)))),j=v.a.createElement(I.a,{span:24,md:24},v.a.createElement(c.a.Item,{label:"Please give us a link to an intro video that explains your product or serves as product demo"},b("productDemoLink",{initialValue:u})(v.a.createElement(D.a,null)))),R=v.a.createElement(I.a,{span:24,md:24},v.a.createElement(c.a.Item,{label:"Please link all you products that you have live on app store or on your website and how many users or downloads you have for each product"},b("allYourProductsLink",{initialValue:p})(v.a.createElement(D.a,null)))),A=v.a.createElement(I.a,{span:24,md:24},v.a.createElement(c.a.Item,{label:"Do you have > 10% circulating supply"},b("circulatingSupply",{initialValue:d})(v.a.createElement(D.a,null)))),V=v.a.createElement(I.a,{span:24,md:24},v.a.createElement(c.a.Item,{label:"Who are the top 5 holders of your token and what % do they hold"},b("top5HoldersOfYourToken",{initialValue:f})(v.a.createElement(D.a,null))));return v.a.createElement("main",null,v.a.createElement("h4",{className:"mb-3 mt-3"},"Team Information"),v.a.createElement("hr",null),v.a.createElement(w.a,{gutter:24,type:"flex",justify:"space-between",className:"px-2"},E,h,S,k,g,y,O,T,P,j,R,A,V))}}]),a}(S.Component))||r,C=(t(16),t(6)),B=t(15),N=t.n(B),L=t(2288),U=t.n(L),_=t(2414);function Y(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,n)}return t}t.d(a,"MarketCreate",function(){return F});var F=Object(g.connect)(function(e,a){return{account:e.app.account,wallet:e.wallet.current,page:a.match.params.page,tokenId:a.match.params.tokenId,id:a.match.params.id}})(i=function(e){function a(e){var t;return Object(d.a)(this,a),(t=Object(b.a)(this,Object(E.a)(a).call(this,e))).isLoggedIn=function(){var e=t.props,a=e.account,n=e.intl;return a.isLoggedIn||t.setState({modal:v.a.createElement(R.a,{warning:!0,title:Object(y.c)("not_signed_in"),confirmBtnText:n.formatMessage({id:"confirm"}),confirmBtnBsStyle:"danger",onConfirm:function(){t.setState({modal:null}),t.goAccount()}})}),a.isLoggedIn},t.goAccount=function(){t.props.history.push("/account")},t.getMarketInfoToken=Object(p.a)(u.a.mark(function e(){var a,n,l,r,i;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.props.tokenId,n={tokenIdOrAddr:a},e.next=4,N.a.post("".concat(C.B,"/api/token/getTokenInfoByTokenIdOrAddr"),n);case 4:l=e.sent,r=l.data.data,i=void 0===r?{}:r,t.setState({params:t.formatData(i)});case 8:case"end":return e.stop()}},e)})),t.formatData=function(e){var a=e.additionalInfoN1,t=e.additionalInfoN2,n=e.additionalInfoN3,l=a&&JSON.parse(a)||{},r=l.saleInformatiom,i=l.tokenInformation,o=t&&JSON.parse(t)||{};return function(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?Y(t,!0).forEach(function(a){Object(m.a)(e,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Y(t).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}return e}({},r,{},i,{},o.overview,{},o.teamInfomation,{},(n&&JSON.parse(n)||{}).otherInformation)},t.showSucessModal=function(){var e=t.props.intl;t.setState({modal:v.a.createElement(R.a,{success:!0,title:"",confirmBtnText:e.formatMessage({id:"confirm"}),confirmBtnBsStyle:"danger",onConfirm:t.goAccount},v.a.createElement("p",null,Object(y.c)("market_other_success")),v.a.createElement("p",null,Object(y.c)("market_other_success_desc_left"),v.a.createElement("a",{href:"https://support.poloniex.org/hc/en-us/requests/new"},v.a.createElement("label",{className:"color-red"},Object(y.c)("market_other_success_desc_right")))))})},t.showErrorModal=function(e){var a=t.props.intl;t.setState({modal:v.a.createElement(R.a,{error:!0,title:"",confirmBtnText:a.formatMessage({id:"confirm"}),confirmBtnBsStyle:"danger",onConfirm:t.hideModal},e)})},t.hideModal=function(){t.setState({modal:null})},t.prevStep=function(){var e=t.state.step,a=e;switch(e){case 1:case 2:a-=1;break;case 0:default:t.props.history.replace("/account")}t.setState({step:a})},t.submit=function(){var e=t.props.form.getFieldsValue,a=t.state,n=a.step,l=a.params,r=e(),i=Object.assign(l,r),o=n;switch(n){case 1:o+=1;break;case 2:t.additionalInfo();break;case 0:default:o+=1}t.setState({step:o,params:i})},t.getPage=function(){var e=t.props.form,a=t.state,n=a.step,l=a.params,r=Object(y.c)("sign_out"),i=Object(y.c)("next"),o=v.a.createElement(V,{form:e,params:l});switch(n){case 1:r=Object(y.c)("prev_step"),i=Object(y.c)("next"),o=v.a.createElement(x,{form:e,params:l});break;case 2:r=Object(y.c)("prev_step"),i=Object(y.c)("submit"),o=v.a.createElement(M,{form:e,params:l});break;case 0:default:r=Object(y.c)("sign_out"),i=Object(y.c)("next"),o=v.a.createElement(V,{form:e,params:l})}return v.a.createElement("div",null,o,v.a.createElement("div",{className:"text-right px-2"},v.a.createElement("a",{className:"btn btn-default btn-lg",onClick:t.prevStep},r),v.a.createElement("button",{className:"ml-4 btn btn-danger btn-lg",onClick:t.submit},i)))},t.assemblyData=function(){var e=t.props.id,a=t.state.params;return{tokenAdditionalInfoN1:{tokenInformation:{tokenProceedsUsage:a.tokenProceedsUsage,tokenReleaseSchedule:a.tokenReleaseSchedule,currentTokenUtility:a.currentTokenUtility,futureTokenUtility:a.futureTokenUtility},saleInformatiom:{seedSaleTokenPrice:a.seedSaleTokenPrice,amountRaisedInSeedSale:a.amountRaisedInSeedSale,seedSaleStartAndEndDate:a.seedSaleStartAndEndDate,seedSaleDisPlan:a.seedSaleDisPlan,privateSaleTokenPrice:a.privateSaleTokenPrice,amountRaisedInPrivateSale:a.amountRaisedInPrivateSale,privateSaleStartAndCompletionDate:a.privateSaleStartAndCompletionDate,privateSaleDisPlan:a.privateSaleDisPlan,publicSaleTokenPrice:a.publicSaleTokenPrice,publicSaleTargetAmount:a.publicSaleTargetAmount,publicSaleStartAndEndDate:a.publicSaleStartAndEndDate,publicSaleDisPlan:a.publicSaleDisPlan,totalAmountOfFundsRaised:a.totalAmountOfFundsRaised,initialCirculatingSupply:a.initialCirculatingSupply}},tokenAdditionalInfoN2:{teamInfomation:{teamOverview:a.teamOverview,howDidYourTeamMeet:a.howDidYourTeamMeet,teamMembersBased:a.teamMembersBased,teamMemberFullTime:a.teamMemberFullTime,teamLockUpPlan:a.teamLockUpPlan},overview:{technicalOverview:a.technicalOverview,topGithubRep:a.topGithubRep,socialCommunityOverview:a.socialCommunityOverview,competitorOverview:a.competitorOverview,DappRadarOrDappReviewRanking:a.DappRadarOrDappReviewRanking,productUsage:a.productUsage,roadmap:a.roadmap,marketingPlan:a.marketingPlan}},tokenAdditionalInfoN3:{otherInformation:{keyBusDevAndPart:a.keyBusDevAndPart,linkToAllTronWallet:a.linkToAllTronWallet,relationshipWithAnyTronSR:a.relationshipWithAnyTronSR,whichExchangesTradedOn:a.whichExchangesTradedOn,yourAvg24HVolume:a.yourAvg24HVolume,theTop3ReasonsYouShouldBeListed:a.theTop3ReasonsYouShouldBeListed,citeYourSources:a.citeYourSources,top3Things:a.top3Things,youSupportYourCoinProjectTime:a.youSupportYourCoinProjectTime,productDemoLink:a.productDemoLink,allYourProductsLink:a.allYourProductsLink,circulatingSupply:a.circulatingSupply,top5HoldersOfYourToken:a.top5HoldersOfYourToken}},id:e}},t.additionalInfo=Object(p.a)(u.a.mark(function e(){var a,n,l;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.props.intl,t.validateForm()){e.next=5;break}return t.showErrorModal(a.formatMessage({id:"market_other_v_required"})),e.abrupt("return",!1);case 5:return n={data:Object(_.a)(JSON.stringify(t.assemblyData()))},e.next=8,N.a.post("".concat(C.B,"/api/token/additionalInfo"),n);case 8:l=e.sent,200===l.data.code?(t.showSucessModal(),t.setState({isSubmitSuccess:!0})):t.showErrorModal(a.formatMessage({id:"market_other_error"}));case 11:case"end":return e.stop()}},e)})),t.validateForm=function(){for(var e=t.state.params,a=e&&Object.keys(e),n=!1,l=0;l<a.length;l++)if(e[a[l]]){n=!0;break}return n},t.state={step:0,params:{},isSubmitSuccess:!1},t}return Object(h.a)(a,e),Object(f.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.location.state;this.isLoggedIn()&&(e&&e.tokenInfo?this.setState({params:this.formatData(e.tokenInfo)}):this.getMarketInfoToken())}},{key:"navigationchange",value:function(e){var a=this.props.account,t=this.state.isSubmitSuccess;return e&&-1==e.pathname.indexOf("/tokens/markets/add")&&a.isLoggedIn&&!t}},{key:"render",value:function(){var e=this,a=this.state.modal;return v.a.createElement("main",{className:"container pb-4 mb-4 token-create header-overlap tokencreated token_black bg-white",style:{marginTop:"-40px"}},a,v.a.createElement(c.a,{className:"ant-advanced-search-form"},this.getPage()),v.a.createElement(U.a,{when:function(a,t){return e.navigationchange(t)}},function(e){var a=e.onConfirm,t=e.onCancel;return v.a.createElement(R.a,{info:!0,showCancel:!0,title:Object(y.c)("leave_tip"),confirmBtnText:Object(y.c)("confirm"),cancelBtnText:Object(y.c)("cancel"),cancelBtnBsStyle:"default",confirmBtnBsStyle:"danger",onConfirm:a,onCancel:t})}))}}]),a}(S.Component))||i;a.default=c.a.create({name:"market_info"})(Object(k.h)(F))}}]);