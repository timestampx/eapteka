const Page = require('./page');

class SearchPage extends Page {

    get searchCount () { return $('.search-count') }
    get itemFirstWithRecipe() { return $('[data-ga-offer*="PKU"]:nth-of-type(1) .cc-item--title')}
    get url () { return 'search'}

    async openItemCard (item) {
        await (await item).click();
    }

    async getItemText (item) {
        return await item.getText();
    }
}

module.exports = new SearchPage();
