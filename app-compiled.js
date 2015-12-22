"use strict";

String.prototype.reverse = function () {
    return this.split("").reverse().join("");
};
Number.prototype.withCommas = function () {
    var x = 6,
        y = parseFloat(this).toFixed(2).toString().reverse();

    while (x < y.length) {
        y = y.substring(0, x) + "," + y.substring(x);x += 4;
    }
    return y.reverse();
};
Number.prototype.toCurrency = function () {
    return (arguments[0] ? arguments[0] : "$") + this.withCommas();
};

// CARD DESIGN:

// Design a product card of a piece of furniture

var ProductCard = React.createClass({
    displayName: "ProductCard",

    getInitialState: function getInitialState() {
        return {
            selectedImageIndex: 0
        };
    },
    render: function render() {
        var imgs = ["http://www.specsserver.com/CACHE/FRTWEMFYUDTH.JPG?width=800&height=-1", "http://www.specsserver.com/CACHE/FRTWEMFYUDTH.JPG?width=800&height=-1", "http://www.specsserver.com/CACHE/FRTWEMFYUDTH.JPG?width=800&height=-1"];

        return React.createElement(
            "div",
            { className: "product-card" },
            React.createElement(
                "div",
                { className: "leftside" },
                React.createElement(ProductImage, { imgs: imgs }),
                React.createElement(ImageNavDots, { imgCount: imgs.length, selectedImageIndex: this.state.selectedImageIndex })
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
            this.props.imgs.map(function (imgUrl) {
                return React.createElement("img", { className: "main-thumbnail", src: imgUrl, alt: "" });
            })
        );
    }

});

// Product Image Navigation buttons
// The circles underneath the main thumbnail
// to show different images of the product
var ImageNavDots = React.createClass({
    displayName: "ImageNavDots",

    render: function render() {
        var listItems = [];
        for (var i = 0; i < this.props.imgCount; i++) {
            listItems.push(React.createElement("li", { key: i, className: this.props.selectedImageIndex === i ? "img-nav-dot-isactive" : "" }));
        }

        return React.createElement(
            "ul",
            { className: "img-nav-dots" },
            listItems
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

    getDefaultProps: function getDefaultProps() {
        return {
            maxCount: 20
        };
    },
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
                    this.state.value
                ),
                React.createElement(
                    "div",
                    { className: "quant-controls" },
                    React.createElement("span", { className: "fa fa-caret-up quant-inc", onClick: this.decQuantity }),
                    React.createElement("span", { className: "fa fa-caret-down quant-dec", onClick: this.incQuantity })
                )
            ),
            React.createElement(
                "div",
                { className: "total-amount" },
                (this.state.price * this.state.value).toCurrency()
            )
        );
    },

    getInitialState: function getInitialState() {
        return {
            value: 1,
            price: 289.99
        };
    },

    decQuantity: function decQuantity() {
        if (this.state.value < this.props.maxCount) {

            this.setState({
                value: this.state.value + 1
            });
        }
    },

    incQuantity: function incQuantity() {
        if (this.state.value > 1) {

            this.setState({
                value: this.state.value - 1
            });
        }
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