const Page = require('./page');

/**
 * General page eApteka
 */
class MainPage extends Page {

    get inputLabel () { return $('#search') }
    get searchButton () { return $('.searchbar [type="submit"]') }
    get title () { return 'Интернет-аптека, поиск лекарств в аптеках Москвы, купить онлайн лекарственные препараты и медикаменты'}

    async search (product) {
        await (await this.inputLabel).setValue(product);
        await (await this.searchButton).click();
    }

    open () {
        return super.open('');
    }

}

module.exports = new MainPage();