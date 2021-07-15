const MainPage = require('../pageobjects/main.page');
const SearchPage = require('../pageobjects/search.page');
const ProductCard = require('../pageobjects/productCard.page');

const item = 'Фенибут';

describe('Open product with recipe', () => {
    it('Card should be open with true product name', async () => {
        // Open eapteka.ru
        await MainPage.open();
        await expect(browser).toHaveTitle(MainPage.title);

        // Enter 'Фенибут' in the searchbar
        // Press the find button
        await MainPage.search(item);
        await expect(browser).toHaveUrlContaining(SearchPage.url);
        await expect(browser).toHaveTitle(item);

        // Wait search result
        await expect(SearchPage.searchCount).toBeExisting();
        await expect(SearchPage.searchCount).toHaveTextContaining(item);

        const title = await SearchPage.itemFirstWithRecipe;
        const titleText = await SearchPage.getItemText(title);

        // Open first item marked 'with recipe'
        await SearchPage.openItemCard(title);

        // Item title in card should be present
        await expect(ProductCard.productName).toHaveTextContaining(item);
        await expect(ProductCard.productName).toHaveTextContaining(titleText);
    });
});