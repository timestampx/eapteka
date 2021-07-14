const Page = require('./page');

class SearchPage extends Page {

    get searchCount () { return $('.search-count') }
    get itemFirstWithRecipe() { return $('[data-ga-offer*="PKU"]:nth-of-type(1) .cc-item--title')}
    get url () { return 'search'}

    async openItemCard (item) {
        await (await item).click();
    }

    async getItemDataName (item) {
        // await (await item).getAttribute('data-name');
        const form = $('[data-ga-offer*="PKU"]:nth-of-type(1) .cc-item--title')
        const attr = form.getText();
        console.log('!!!!!!!!!!' + attr);
        { return attr };
    }
}

module.exports = new SearchPage();
