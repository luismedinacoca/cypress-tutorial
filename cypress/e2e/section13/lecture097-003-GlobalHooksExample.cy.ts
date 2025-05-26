// cypress/e2e/login.cy.ts

interface User {
  username: string;
  password: string;
  status: 'valid' | 'invalid' | 'locked';
}

interface DBConfig {
  host: string;
  user: string;
  password: string;
}

// --- SIMULACIÓN DE FUNCIONES DE BASE DE DATOS ---

// Array de usuarios simulado
const MOCK_USERS: User[] = [
  { username: 'standard_user', password: 'secret_sauce', status: 'valid' },
  { username: 'performance_glitch_user', password: 'secret_sauce', status: 'valid' },
  { username: 'problem_user', password: 'secret_sauce', status: 'invalid' }, // Simulamos un usuario inválido
  { username: 'locked_out_user', password: 'secret_sauce', status: 'locked' },
];

const connectToDB = (config: DBConfig): Promise<void> => {
  return new Promise((resolve) => {
    console.log(`Simulando conexión a la base de datos en: ${config.host}`);
    // Simula un retraso de 100ms para la conexión
    setTimeout(() => {
      console.log('Conexión a la base de datos simulada exitosa.');
      resolve();
    }, 100);
  });
};

const fetchUsers = async (): Promise<User[]> => {
  return new Promise((resolve) => {
    console.log('Simulando la obtención de usuarios de la base de datos...');
    // Simula un retraso de 200ms para la obtención de usuarios
    setTimeout(() => {
      console.log('Usuarios simulados obtenidos:', MOCK_USERS);
      resolve(MOCK_USERS);
    }, 200);
  });
};

const closeDBConnection = (): Promise<void> => {
  return new Promise((resolve) => {
    console.log('Simulando el cierre de la conexión a la base de datos...');
    // Simula un retraso de 50ms para el cierre
    setTimeout(() => {
      console.log('Cierre de la conexión a la base de datos simulado exitoso.');
      resolve();
    }, 50);
  });
};

// Global database configuration
const DB_CONFIG: DBConfig = {
  host: 'localhost',
  user: 'admin',
  password: 'secret',
};

// Global hooks (run once per spec file)
before(async () => {
  // Conectar a la base de datos y obtener usuarios
  await connectToDB(DB_CONFIG);
  const users = await fetchUsers(); // Esperar la resolución de la promesa
  cy.wrap(users).as('dbUsers'); // Almacenar usuarios para uso posterior
});

after(async () => {
  // Cerrar conexión a la base de datos
  await closeDBConnection();
});

// ----------------------------
// Test Suite: Login Functionality
// ----------------------------
describe('Login Tests with Database Validation', () => {
  let validUser: User;
  let invalidUser: User;
  let lockedUser: User;

  // Scoped to this describe block
  before(function () {
    // Acceder a los usuarios obtenidos del hook global
    const users: User[] = this.dbUsers;

    validUser = users.find(u => u.status === 'valid')!;
    // Asegúrate de que estás buscando el usuario "problem_user" que hemos definido como 'invalid'
    invalidUser = users.find(u => u.status === 'invalid' && u.username === 'problem_user')!;
    lockedUser = users.find(u => u.status === 'locked')!;
  });

  beforeEach(() => {
    // Navegar a la página de login una vez para todas las pruebas en este bloque describe
    cy.visit('https://www.saucedemo.com');

    // Limpiar el almacenamiento de sesión y las cookies antes de cada prueba
    cy.clearCookies();
    cy.clearLocalStorage();
  });

  // Test 1: Credenciales válidas
  it('should log in with valid credentials', () => {
    cy.get('#user-name').type(validUser.username);
    cy.get('#password').type(validUser.password);
    cy.get('#login-button').click();

    // Verificar el inicio de sesión exitoso
    cy.url().should('include', '/inventory.html');
  });

  // Test 2: Credenciales inválidas
  it('should show error for invalid credentials', () => {
    cy.get('#user-name').type(invalidUser.username);
    cy.get('#password').type(invalidUser.password);
    cy.get('#login-button').click();

    /// Verificar el inicio de sesión exitoso
    cy.url().should('include', '/inventory.html');
  });

  // Test 3: Usuario bloqueado
  it('should block locked users', () => {
    cy.get('#user-name').type(lockedUser.username);
    cy.get('#password').type(lockedUser.password);
    cy.get('#login-button').click();

    // Verificar la advertencia de cuenta bloqueada
    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain', 'Epic sadface: Sorry, this user has been locked out.');
  });

  afterEach(() => {
    // Opcional: Tomar captura de pantalla en caso de fallo
    if (this.currentTest?.state === 'failed') {
      cy.screenshot(`failed-${this.currentTest.title}`);
    }
  });

  after(() => {
    // Limpiar datos específicos de la prueba (hipotético)
    cy.log('Limpiando usuarios de prueba...');
  });
});