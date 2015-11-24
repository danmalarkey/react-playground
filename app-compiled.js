"use strict";

var App = React.createClass({
    displayName: "App",

    getInitialState: function getInitialState() {
        return {
            userIsCompleted: false,
            keyIsCompleted: false
        };
    },

    render: function render() {

        var OauthWrap = {
            display: "flex",
            height: "100vh",
            width: "100vw",
            justifyContent: "center"
        };

        var OauthForm = {
            width: "400",
            backgroundColor: "#fff",
            display: "flex",
            flexDirection: "column",
            border: "1px solid #eee",
            borderRadius: "2px",
            margin: "auto",
            padding: "2rem",
            boxShadow: "0 1px 3px rgba(0, 0, 0, .04)"
        };

        var userInputClass = '';

        if (this.state.userIsCompleted) userInputClass += 'is-completed';

        var keyInputClass = '';

        if (this.state.keyIsCompleted) keyInputClass += 'is-completed';

        return React.createElement(
            "div",
            { style: OauthWrap },
            React.createElement(
                "div",
                { style: OauthForm },
                React.createElement(
                    "div",
                    { id: "user-input", className: userInputClass, className: "parent-div" },
                    React.createElement(
                        "label",
                        { htmlFor: "OauthUser", className: "oauth-label" },
                        "Username"
                    ),
                    React.createElement("input", { id: "OauthUser", className: "oauth-input", type: "text", onChange: this._userInputChanged })
                ),
                React.createElement(
                    "div",
                    { id: "key-input", className: keyInputClass, className: "parent-div" },
                    React.createElement(
                        "label",
                        { htmlFor: "OauthKey", className: "oauth-label" },
                        "Password"
                    ),
                    React.createElement("input", { id: "OauthKey", className: "oauth-input", type: "password", onChange: this._keyInputChanged })
                ),
                React.createElement(
                    "div",
                    { id: "submit-btn" },
                    React.createElement(
                        "button",
                        { id: "OauthBtn", className: "oauth-btn", type: "button" },
                        "Let Me In"
                    )
                )
            )
        );
    },

    _userInputChanged: function _userInputChanged(e) {
        var completed = e.target.value.length > 0;

        this.setState({ userIsCompleted: completed });
    },

    _keyInputChanged: function _keyInputChanged(e) {
        var completed = e.target.value.length > 0;

        this.setState({ keyIsCompleted: completed });
    }

});

var userInputField = document.getElementById("oauth-user");
var keyInputField = document.getElementById("oauth-key");

function showAlert() {
    alert("hello");
}

userInputField.onclick = function () {
    showAlert();
};

var MagicInput = React.createClass({
    displayName: "MagicInput",

    getInitialState: function getInitialState() {
        return {
            focused: false
        };
    },

    render: function render() {

        var className = 'parent-div';

        if (this.state.focused) {
            className += ' is-active is-completed';
        }

        return React.createElement(
            "div",
            { id: "key-input", className: className },
            React.createElement(
                "label",
                { htmlFor: "OauthKey", className: "oauth-label" },
                "Password"
            ),
            React.createElement("input", { className: "oauth-input", ref: "inputValue", onChange: this.onChange })
        );
    },

    onChange: function onChange() {
        var inputValue = React.findDOMNode(this.refs.inputValue).value;
        this.props.onInputChanged(inputValue);
    },

    onFocus: function onFocus() {
        this.setState({
            focused: true
        });
    },

    onBlur: function onBlur() {
        this.setState({
            focused: false
        });
    }
});

var Parent = React.createClass({
    displayName: "Parent",

    getInitialState: function getInitialState() {
        return {
            firstValue: '',
            secondValue: ''
        };
    },

    render: function render() {
        return React.createElement(
            "div",
            { className: "oauth-wrap" },
            React.createElement(
                "div",
                { className: "oauth-form" },
                React.createElement(MagicInput, { inputValue: this.state.firstValue, onInputChanged: this.firstInputChanged, propertyNane: "Something" }),
                React.createElement(MagicInput, { inputValue: this.state.secondValue, onInputChanged: this.secondInputChanged })
            )
        );
    },

    firstInputChanged: function firstInputChanged(newValue) {
        this.setState({
            firstValue: newValue
        });
    },

    secondInputChanged: function secondInputChanged(newValue) {
        this.setState({
            secondValue: newValue
        });
    }
});

React.render(React.createElement(Parent), document.getElementById('container'));

//$(".oauth-input").focus(function(){
//    $(this).parent().addClass("is-active is-completed");
//});
//
//$(".oauth-input").focusout(function(){
//    if($(this).val() === "")
//        $(this).parent().removeClass("is-completed");
//    $(this).parent().removeClass("is-active");
//})

//# sourceMappingURL=app-compiled.js.map