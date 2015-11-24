var App = React.createClass({

    getInitialState() {
        return {
            userIsCompleted: false,
            keyIsCompleted: false
        };
    },

    render() {

        var OauthWrap = {
            display:                 "flex",
            height:                  "100vh",
            width:                   "100vw",
            justifyContent:          "center"
        };

        var OauthForm = {
            width:                  "400",
            backgroundColor:        "#fff",
            display:                "flex",
            flexDirection:          "column",
            border:                 "1px solid #eee",
            borderRadius:           "2px",
            margin:                 "auto",
            padding:                "2rem",
            boxShadow:              "0 1px 3px rgba(0, 0, 0, .04)"
        };

        var userInputClass = '';

        if (this.state.userIsCompleted)
            userInputClass += 'is-completed';

        var keyInputClass = '';

        if (this.state.keyIsCompleted)
            keyInputClass += 'is-completed';

        return (
            <div style={OauthWrap}>
                <div style={OauthForm}>
                    <div id="user-input" className={userInputClass} className="parent-div">
                        <label htmlFor="OauthUser" className="oauth-label">Username</label>
                        <input id="OauthUser" className="oauth-input" type="text" onChange={this._userInputChanged} />
                    </div>
                    <div id="key-input" className={keyInputClass} className="parent-div">
                        <label htmlFor="OauthKey" className="oauth-label">Password</label>
                        <input id="OauthKey" className="oauth-input" type="password" onChange={this._keyInputChanged} />
                    </div>
                    <div id="submit-btn">
                        <button id="OauthBtn" className="oauth-btn" type="button">Let Me In</button>
                    </div>
                </div>
            </div>
        )
    },

    _userInputChanged(e) {
        var completed = e.target.value.length > 0;

        this.setState({ userIsCompleted: completed });
    },

    _keyInputChanged(e) {
        var completed = e.target.value.length > 0;

        this.setState({ keyIsCompleted: completed });
    }

});

var userInputField = document.getElementById("oauth-user");
var keyInputField = document.getElementById("oauth-key");

function showAlert() {
    alert("hello");
}

userInputField.onclick = function() {
    showAlert();
};


var MagicInput = React.createClass({

    getInitialState() {
        return {
            focused: false
        }
    },

    render() {

        var className = 'parent-div';

        if(this.state.focused) {
            className += ' is-active is-completed';
        }

        return (
            <div id="key-input" className={className}>
                <label htmlFor="OauthKey" className="oauth-label">Password</label>
                <input className="oauth-input" ref="inputValue" onChange={this.onChange}/>
            </div>
        )
    },

    onChange() {
        var inputValue = React.findDOMNode(this.refs.inputValue).value;
        this.props.onInputChanged(inputValue);
    },

    onFocus() {
        this.setState({
            focused: true
        });
    },

    onBlur() {
        this.setState({
            focused: false
        });
    }
});


var Parent = React.createClass({

    getInitialState() {
        return {
            firstValue: '',
            secondValue: ''
        }
    },

    render() {
        return (
            <div className="oauth-wrap">
                <div className="oauth-form">
                    <MagicInput inputValue={this.state.firstValue} onInputChanged={this.firstInputChanged} propertyNane="Something"/>
                    <MagicInput inputValue={this.state.secondValue} onInputChanged={this.secondInputChanged}/>
                </div>
            </div>
        )
    },

    firstInputChanged(newValue) {
        this.setState({
            firstValue: newValue
        });
    },

    secondInputChanged(newValue) {
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