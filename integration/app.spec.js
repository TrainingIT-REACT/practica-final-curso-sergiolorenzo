/* eslint-env page */

describe("App", () => {
    // Navegamos a la página
    beforeEach(async () => {
      await page.goto('http://localhost:8080');
    });
  
    it("should display the title", async () => {
      // Comprobamos que el título sea correcto
      await expect(page).toMatchElement('h1', { text: 'Reactify' });
    });

  });