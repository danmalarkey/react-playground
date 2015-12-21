//var App = React.createClass({
//
//    getInitialState() {
//        return {
//            userIsCompleted: false,
//            keyIsCompleted: false
//        };
//    },
//
//    render() {
//
//        var OauthWrap = {
//            display:                 "flex",
//            height:                  "100vh",
//            width:                   "100vw",
//            justifyContent:          "center"
//        };
//
//        var OauthForm = {
//            width:                  "400",
//            backgroundColor:        "#fff",
//            display:                "flex",
//            flexDirection:          "column",
//            border:                 "1px solid #eee",
//            borderRadius:           "2px",
//            margin:                 "auto",
//            padding:                "2rem",
//            boxShadow:              "0 1px 3px rgba(0, 0, 0, .04)"
//        };
//
//        var userInputClass = '';
//
//        if (this.state.userIsCompleted)
//            userInputClass += 'is-completed';
//
//        var keyInputClass = '';
//
//        if (this.state.keyIsCompleted)
//            keyInputClass += 'is-completed';
//
//        return (
//            <div style={OauthWrap}>
//                <div style={OauthForm}>
//                    <div id="user-input" className={userInputClass} className="parent-div">
//                        <label htmlFor="OauthUser" className="oauth-label">Username</label>
//                        <input id="OauthUser" className="oauth-input" type="text" onChange={this._userInputChanged}
// />
//                    </div>
//                    <div id="key-input" className={keyInputClass} className="parent-div">
//                        <label htmlFor="OauthKey" className="oauth-label">Password</label>
//                        <input id="OauthKey" className="oauth-input" type="password" onChange={this._keyInputChanged}
// /> </div> <div id="submit-btn"> <button id="OauthBtn" className="oauth-btn" type="button">Let Me In</button> </div>
// </div> </div> ) },  _userInputChanged(e) { var completed = e.target.value.length > 0;  this.setState({
// userIsCompleted: completed }); },  _keyInputChanged(e) { var completed = e.target.value.length > 0;  this.setState({
// keyIsCompleted: completed }); }  });  var userInputField = document.getElementById("oauth-user"); var keyInputField
// = document.getElementById("oauth-key");  function showAlert() { alert("hello"); }  userInputField.onclick =
// function() { showAlert(); };   var MagicInput = React.createClass({  getInitialState() { return { focused: false }
// },  render() {  var className = 'parent-div';  if(this.state.focused) { className += ' is-active is-completed'; }
// return ( <div id="key-input" className={className}> <label htmlFor="OauthKey"
// className="oauth-label">Password</label> <input className="oauth-input" ref="inputValue" onChange={this.onChange}/>
// </div> ) },  onChange() { var inputValue = React.findDOMNode(this.refs.inputValue).value;
// this.props.onInputChanged(inputValue); },  onFocus() { this.setState({ focused: true }); },  onBlur() {
// this.setState({ focused: false }); } });   var Parent = React.createClass({  getInitialState() { return {
// firstValue: '', secondValue: '' } },  render() { return ( <div className="oauth-wrap"> <div className="oauth-form">
// <MagicInput inputValue={this.state.firstValue} onInputChanged={this.firstInputChanged} propertyNane="Something"/>
// <MagicInput inputValue={this.state.secondValue} onInputChanged={this.secondInputChanged}/> </div> </div> ) },
// firstInputChanged(newValue) { this.setState({ firstValue: newValue }); },  secondInputChanged(newValue) {
// this.setState({ secondValue: newValue }); } });  React.render(React.createElement(Parent),
// document.getElementById('container'));

// ========================================================================================
//
// Jquery working version
//
// ========================================================================================

//$(".oauth-input").focus(function(){
//    $(this).parent().addClass("is-active is-completed");
//});
//
//$(".oauth-input").focusout(function(){
//    if($(this).val() === "")
//        $(this).parent().removeClass("is-completed");
//    $(this).parent().removeClass("is-active");
//})

// ========================================================================================

// CARD DESIGN:

// Design a product card of a piece of furniture

"use strict";

var ProductCard = React.createClass({
    displayName: "ProductCard",

    render: function render() {
        return React.createElement(
            "div",
            { className: "product-card" },
            React.createElement(
                "div",
                { className: "leftside" },
                React.createElement(ProductImage, null),
                React.createElement(ImageNavDots, null)
            ),
            React.createElement(
                "div",
                { className: "rightside" },
                React.createElement(ProductTitle, null),
                React.createElement(
                    "div",
                    { className: "quant-price" },
                    React.createElement(ProductQuantity, null)
                ),
                React.createElement(DescNav, null),
                React.createElement(BuyBtn, null)
            )
        );
    }

});

// Product Image — Main
// This component is the design of the big main image
// on the left side of the Product Card
var ProductImage = React.createClass({
    displayName: "ProductImage",

    render: function render() {
        return React.createElement(
            "div",
            { className: "product-image" },
            React.createElement("img", { className: "main-thumbnail", src: "http://www.specsserver.com/CACHE/FRTWEMFYUDTH.JPG?width=800&height=-1", alt: "" })
        );
    }

});

// Product Image Navigation buttons
// The circles underneath the main thumbnail
// to show different images of the product
var ImageNavDots = React.createClass({
    displayName: "ImageNavDots",

    render: function render() {
        return React.createElement(
            "ul",
            { className: "img-nav-dots" },
            React.createElement("li", { className: "img-nav-dot-isactive" }),
            React.createElement("li", null),
            React.createElement("li", null),
            React.createElement("li", null)
        );
    }

});

var ProductTitle = React.createClass({
    displayName: "ProductTitle",

    render: function render() {
        return React.createElement(
            "h1",
            { className: "product-title" },
            "Modern Orange Leather Lounge Chair + Ottoman"
        );
    }

});

var ProductQuantity = React.createClass({
    displayName: "ProductQuantity",

    render: function render() {
        return React.createElement(
            "div",
            { className: "product-quantity" },
            React.createElement(
                "div",
                { className: "product-quant" },
                React.createElement(
                    "div",
                    { className: "quant-total" },
                    "1"
                ),
                React.createElement(
                    "div",
                    { className: "quant-controls" },
                    React.createElement("span", { className: "fa fa-caret-up quant-inc" }),
                    React.createElement("span", { className: "fa fa-caret-down quant-dec" })
                )
            ),
            React.createElement(
                "div",
                { className: "total-amount" },
                "$289.99"
            )
        );
    }
});

var DescNav = React.createClass({
    displayName: "DescNav",

    render: function render() {
        return React.createElement(
            "div",
            { className: "details-wrap" },
            React.createElement(
                "ul",
                { className: "desc-nav" },
                React.createElement(
                    "li",
                    null,
                    React.createElement(
                        "a",
                        { href: "#", className: "active" },
                        "Description"
                    )
                ),
                React.createElement(
                    "li",
                    null,
                    React.createElement(
                        "a",
                        { href: "#" },
                        "Details"
                    )
                ),
                React.createElement(
                    "li",
                    null,
                    React.createElement(
                        "a",
                        { href: "#" },
                        "Specifications"
                    )
                )
            ),
            React.createElement(
                "p",
                null,
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. In nostrum quas rem soluta! A, alias amet corporis ea eos exercitationem, fuga ipsam magnam minus quam qui quo quos similique totam."
            )
        );
    }
});

var BuyBtn = React.createClass({
    displayName: "BuyBtn",

    render: function render() {
        return React.createElement(
            "div",
            { className: "buy-btn" },
            React.createElement(
                "a",
                { href: "#", className: "btn" },
                "Purchase Chair"
            )
        );
    }
});

React.render(React.createElement(ProductCard), document.getElementById('container'));

//# sourceMappingURL=app-compiled.js.map