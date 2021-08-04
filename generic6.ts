class PersonExtends<T extends string |number>{//항상 작은 범위로 지정
  private _name:T;

  constructor(name:T){
    this._name=name;
  }
}

new PersonExtends("mark");
new PersonExtends(93);
// new PersonExtends(true);