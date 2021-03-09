const name = 'name';
const yastName = 'lastName';
const age = 20;
 
function sum(x, y) {
  return x + y;
}


export class User {
  constructor(username, password) {
    this.username = username;
    this.password = password
  }
}

export { name, yastName, age, sum };