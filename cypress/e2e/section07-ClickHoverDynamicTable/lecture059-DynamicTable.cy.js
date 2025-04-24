//Cypress.config("defaultCommandTimeout", 16000);
import "cypress-real-events/support";

describe("Dynamic table challenge", () => {
  let name = "Chrome";
  beforeEach(() => {
    cy.visit("http://uitestingplayground.com/");
    cy.get('[href="/dynamictable"]').click();
  });

  it.skip("Hover with Cypress workaround", () => {
    // 2. Selector del primer span dentro de la fila
    const primerSpanSelector = 'div[role="row"] span:nth-child(1)';

    // 3. Obtener el texto del primer span y verificar si es "BOLITA"
    cy.get(primerSpanSelector)
      .invoke("text")
      .then((textoPrimerSpan) => {
        expect(textoPrimerSpan).to.equal("Firefox");
        cy.log("El texto del span es:", textoPrimerSpan);

        // Si necesitas volver al padre (que sería el elemento con role='row' según tu contexto anterior)
        cy.get('span[role="cell"]')
          .parent('[role="row"]') // Especificamos el tipo y atributo del padre al que queremos ir
          .as("filaPadre");

        cy.get("@filaPadre")
          .find("span")
          .each(($spanHijo, index, $lista) => {
            const textoSpanHijo = $spanHijo.text();
            cy.log(`Texto del span hijo ${index + 1}:`, textoSpanHijo);
          });
      });
  });

  it(`verifies ${name} row percentages`, () => {
    // Get all rows and iterate through them
    cy.get('div[role="row"] span:nth-child(1)').each(($nameCell, index) => {
      // Get the text from the first cell (Name column)
      const cellText = $nameCell.text().trim();

      // Check if the cell text is `${name}`
      if (cellText === name) {
        cy.log(`Found ${name} at row ${index + 1}`);

        // Get the parent row and its children
        const parentRow = $nameCell.parent('div[role="row"]');

        // Get all span children in the row
        cy.wrap(parentRow)
          .find('span[role="cell"]')
          .each(($cell, cellIndex) => {
            const cellContent = $cell.text().trim();

            // Check if cell content contains percentage
            if (cellContent.includes("%")) {
              cy.log(`CPU for ${name} is: ${cellContent}`);
            }
          });
      } else {
        cy.log(`Skipping row ${index + 1} with name: ${cellText}`);
      }
    });
  });

  it("most concise version", () => {
    cy.contains('div[role="row"]', name).within(() => {
      cy.get('span[role="cell"]').each(($cell) => {
        const text = $cell.text();
        if (text.includes("%")) cy.log(`Percentage: ${text}`);
      });
    });
  });
});
