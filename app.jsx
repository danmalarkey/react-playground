String.prototype.reverse=function(){
    return this.split("").reverse().join("");
};
Number.prototype.withCommas=function(){
    var x=6,
        y=parseFloat(this).toFixed(2).toString().reverse();

    while(x < y.length){y=y.substring(0,x)+","+y.substring(x);x+=4;}
    return y.reverse();
};
Number.prototype.toCurrency=function(){
    return(arguments[0]?arguments[0]:"$")+this.withCommas();
};



// CARD DESIGN:

// Design a product card of a piece of furniture

var ProductCard = React.createClass({
    getInitialState: function () {
        return {
            selectedImageIndex: 0
        }
    },
    render() {
        var imgs = [
            "http://www.specsserver.com/CACHE/FRTWEMFYUDTH.JPG?width=800&height=-1",
            "http://www.specsserver.com/CACHE/FRTWEMFYUDTH.JPG?width=800&height=-1",
            "http://www.specsserver.com/CACHE/FRTWEMFYUDTH.JPG?width=800&height=-1"
        ];

        return (
            <div className="product-card">
                <div className="leftside">
                    <ProductImage imgs={imgs} />
                    <ImageNavDots imgCount={imgs.length} selectedImageIndex={this.state.selectedImageIndex} />
                </div>
                <div className="rightside">
                    <ProductTitle />
                    <div className="quant-price">
                        <ProductQuantity />
                    </div>
                    <DescNav />
                    <BuyBtn />
                </div>
            </div>
        )
    }

});

// Product Image — Main
// This component is the design of the big main image
// on the left side of the Product Card
var ProductImage = React.createClass({

    render() {
        return (
            <div className="product-image">
                {this.props.imgs.map(imgUrl =>
                    <img className="main-thumbnail" src={imgUrl} alt=""/>
                )}
            </div>
        )
    }

});

// Product Image Navigation buttons
// The circles underneath the main thumbnail
// to show different images of the product
var ImageNavDots = React.createClass({

    render() {
        var listItems = [];
        for(var i = 0; i < this.props.imgCount; i++) {
            listItems.push(<li key={i} className={this.props.selectedImageIndex === i ? "img-nav-dot-isactive" : ""}></li>);
        }

        return (
            <ul className="img-nav-dots">
                {listItems}
            </ul>
        )
    }

});



var ProductTitle = React.createClass({

    render() {
        return (
            <h1 className="product-title">Modern Orange Leather Lounge Chair + Ottoman</h1>
        )
    }

});

var ProductQuantity = React.createClass({
    getDefaultProps: function() {
        return {
            maxCount: 20
        }
    },
    render() {
        return (
            <div className="product-quantity">
                <div className="product-quant">
                    <div className="quant-total">
                        {this.state.value}
                    </div>
                    <div className="quant-controls">
                        <span className="fa fa-caret-up quant-inc" onClick={this.decQuantity}></span>
                        <span className="fa fa-caret-down quant-dec" onClick={this.incQuantity}></span>
                    </div>
                </div>
                <div className="total-amount">{(this.state.price * this.state.value).toCurrency()}</div>
            </div>
        )
    },

    getInitialState: function() {
        return {
            value: 1,
            price: 289.99
        };
    },

    decQuantity: function() {
        if (this.state.value < this.props.maxCount) {

            this.setState({
                value: this.state.value + 1
            });
        }
    },

    incQuantity: function() {
        if (this.state.value > 1) {

            this.setState({
                value: this.state.value - 1
            });
        }
    }
});

var DescNav = React.createClass({
    render() {
        return (
            <div className="details-wrap">
                <ul className="desc-nav">
                    <li><a href="#" className="active">Description</a></li>
                    <li><a href="#">Details</a></li>
                    <li><a href="#">Specifications</a></li>
                </ul>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. In nostrum quas rem soluta! A, alias amet corporis ea eos
                    exercitationem, fuga ipsam magnam minus quam qui quo quos similique totam.
                </p>
            </div>
        )
    }
});

var BuyBtn = React.createClass({
    render() {
        return (
            <div className="buy-btn">
                <a href="#" className="btn">Purchase Chair</a>
            </div>
        )
    }
});


React.render(React.createElement(ProductCard), document.getElementById('container'));