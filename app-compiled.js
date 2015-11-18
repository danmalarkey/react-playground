"use strict";

var App = React.createClass({
    displayName: "App",

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

        return React.createElement(
            "div",
            { style: OauthWrap },
            React.createElement(
                "div",
                { style: OauthForm },
                React.createElement(
                    "div",
                    { id: "user-input" },
                    React.createElement("input", { id: "OauthUser", className: "oauth-input", type: "text" }),
                    React.createElement(
                        "label",
                        { htmlFor: "OauthUser" },
                        "Username"
                    )
                ),
                React.createElement(
                    "div",
                    { id: "key-input" },
                    React.createElement("input", { id: "OauthKey", className: "oauth-input", type: "password" })
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
    }

});

//# sourceMappingURL=app-compiled.js.map