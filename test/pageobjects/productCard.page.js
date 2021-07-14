const Page = require('./page');

class ProductCardPage extends Page {

    get productName () { return $('.new-offer-box h1')}

    open (id) {
        return super.open('goods' + id);
    }
}

module.exports = new ProductCardPage();
