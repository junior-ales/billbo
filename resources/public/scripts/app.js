!function(){"use strict";var e="undefined"==typeof window?global:window;if("function"!=typeof e.require){var t={},n={},r={}.hasOwnProperty,a={},i=function(e,t){var n=0;t&&(t.indexOf(!1)&&(n="components/".length),t.indexOf("/",n)>0&&(t=t.substring(n,t.indexOf("/",n))));var r=a[e+"/index.js"]||a[t+"/deps/"+e+"/index.js"];return r?"components/"+r.substring(0,r.length-".js".length):e},l=function(){var e=/^\.\.?(\/|$)/;return function(t,n){var r,a,i=[];r=(e.test(n)?t+"/"+n:n).split("/");for(var l=0,o=r.length;o>l;l++)a=r[l],".."===a?i.pop():"."!==a&&""!==a&&i.push(a);return i.join("/")}}(),o=function(e){return e.split("/").slice(0,-1).join("/")},c=function(t){return function(n){var r=l(o(t),n);return e.require(r,t)}},s=function(e,t){var r={id:e,exports:{}};return n[e]=r,t(r.exports,c(e),r),r.exports},u=function(e,a){var o=l(e,".");if(null==a&&(a="/"),o=i(e,a),r.call(n,o))return n[o].exports;if(r.call(t,o))return s(o,t[o]);var c=l(o,"./index");if(r.call(n,c))return n[c].exports;if(r.call(t,c))return s(c,t[c]);throw new Error('Cannot find module "'+e+'" from "'+a+'"')};u.alias=function(e,t){a[t]=e},u.register=u.define=function(e,n){if("object"==typeof e)for(var a in e)r.call(e,a)&&(t[a]=e[a]);else t[e]=n},u.list=function(){var e=[];for(var n in t)r.call(t,n)&&e.push(n);return e},u.brunch=!0,e.require=u}}(),require.register("views/components/billList",function(e,t,n){"use strict";var r=React.createClass({displayName:"ReserveConfirmation",getInitialState:function(){return{modalVisible:!1}},handleDonateClick:function(){this.setState({modalVisible:!0})},handleCloseModal:function(){this.setState({modalVisible:!1})},handleConfirmDonation:function(){this.setState({modalVisible:!1})},render:function(){var e="reserve-confirmation__modal";return this.state.modalVisible&&(e+="--active"),React.createElement("article",{className:"reserve-confirmation"},React.createElement("button",{onClick:this.handleDonateClick},"Donate"),React.createElement("div",{className:e},React.createElement("div",{className:"reserve-confirmation__modal__content"},React.createElement("h2",null,"Doar"),React.createElement("input",{type:"email"}),React.createElement("button",{onClick:this.handleConfirmDonation},"confirmar"),React.createElement("button",{className:"secondary",onClick:this.handleCloseModal},"cancelar"))))}}),a=React.createClass({displayName:"Bill",render:function(){return React.createElement("div",{className:"th"},React.createElement("img",{src:this.props.data["picture-link"],alt:"Conta"}),React.createElement("h2",null,this.props.data["issued-by"]),React.createElement("p",null,"R$ ",this.props.data["total-amount"]),React.createElement("p",null,"Vencimento: ",this.props.data["due-date"]),React.createElement(r,null))}}),i=React.createClass({displayName:"BillList",getInitialState:function(){return{bills:[]}},componentDidMount:function(){var e=this,t=new XMLHttpRequest;t.open("GET",encodeURI(e.props.source)),t.onload=function(){e.isMounted()&&e.setState({bills:JSON.parse(t.responseText)})},t.send()},render:function(){var e=function(e){return"open"===e["current-status"]};return React.createElement("ul",{className:"small-block-grid-2 medium-block-grid-3"},this.state.bills.filter(e).map(function(e){return React.createElement("li",{key:"billId"+e["bill-id"]},React.createElement(a,{data:e}))}))}});n.exports=i}),require.register("views/home",function(e,t,n){"use strict";var r=t("./components/billList"),a={init:function(){ReactDOM.render(React.createElement(r,{source:"/bills"}),document.getElementById("bill-list"))}};n.exports=a});