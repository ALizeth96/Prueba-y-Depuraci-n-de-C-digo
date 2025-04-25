const UserController = require("./user-controller");
const User = require("./user");

test('add user to userController', () => {    
    let userController = new UserController();  // << aquí creamos un nuevo controlador
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    expect(userController.getUsers()).toContain(user);
});

test('remove user to userController', () => {    
    let userController = new UserController();  // << también aquí
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    userController.remove(user);
    expect(userController.getUsers()).not.toContain(user);
});

test('add new user that does not already exist', () => {
  let userController = new UserController();
  let user = new User(5678, "Pedro", "pedro@example.com");
  userController.add(user);
  expect(userController.getUsers()).toContain(user);
});

test('attempt to remove non-existent user', () => {
  let userController = new UserController();
  let user = new User(9999, "Lucía", "lucia@example.com");
  // No añadimos el usuario antes
  userController.remove(user);
  expect(userController.getUsers()).not.toContain(user);
});

test('find user by email', () => {
  let userController = new UserController();
  let user = new User(1, "Lizeth", "lizeth@example.com");
  userController.add(user);

  const found = userController.findByEmail("lizeth@example.com");
  expect(found).toEqual(user);
});

test('find user by id', () => {
  let userController = new UserController();
  let user = new User(2, "Carlos", "carlos@example.com");
  userController.add(user);

  const found = userController.findById(2);
  expect(found).toEqual(user);
});


