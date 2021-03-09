import {name, age, yastName, sum, User} from './modules/sample01Export'

console.log('just a simple template with webpack configs');
console.log('name:', name);
console.log('age:', age);
console.log('yastName:', yastName);
console.log('sum:', sum(3,1));


const someUser = new User('someUsername', 'somePassword');
console.log('user..:', someUser);