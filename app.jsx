var App = React.createClass({

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
        

        return (
            <div style={OauthWrap}>
                <div style={OauthForm}>
                    <div id="user-input">
                        <input id="OauthUser" className="oauth-input" type="text" />
                        <label htmlFor="OauthUser">Username</label>
                    </div>
                    <div id="key-input">
                        <input id="OauthKey" className="oauth-input" type="password" />
                    </div>
                    <div id="submit-btn">
                        <button id="OauthBtn" className="oauth-btn" type="button">Let Me In</button>
                    </div>
                </div>
            </div>
        )
    }

});