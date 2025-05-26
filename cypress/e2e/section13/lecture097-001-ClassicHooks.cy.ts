describe('Mi Suite de Pruebas', function() {
  let dbConnection;

  before(function() {
    // Se ejecuta una vez antes de TODAS las pruebas en esta suite
    cy.log('before: Conectando a la base de datos...');
    dbConnection = 'conexión_activa';
  });

  after(function() {
    // Se ejecuta una vez después de TODAS las pruebas en esta suite
    cy.log('after: Cerrando conexión a la base de datos...');
    dbConnection = null;
  });

  beforeEach(function() {
    // Se ejecuta antes de CADA 'it()' en esta suite
    cy.log('  beforeEach: Reseteando datos de prueba...');
  });

  afterEach(function() {
    // Se ejecuta después de CADA 'it()' en esta suite
    cy.log('  afterEach: Limpiando datos de prueba...');
  });

  it('debería hacer algo en la prueba 1', function() {
    cy.log('    it: Ejecutando prueba 1');
    // Usar dbConnection aquí
  });

  it('debería hacer algo en la prueba 2', function() {
    cy.log('    it: Ejecutando prueba 2');
    // Usar dbConnection aquí
  });

  describe('Sub-suite anidada', function() {
    beforeEach(function() {
      cy.log('    beforeEach (anidado): Configurando para sub-suite...');
    });

    it('debería hacer algo en la sub-prueba 1', function() {
      cy.log('      it: Ejecutando sub-prueba 1');
    });
  });
});