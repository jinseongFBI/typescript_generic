class Person<T>{
  private _name:T;
  private _age:K;

  constructor(name:T,age:K){
    this._name=name;
    this._age=age;
  }
}
new Person("mark",27);
// new Person<string>(39);
// new Person<string,number>("mark",27);