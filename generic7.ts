interface Iperson{
  name:string;
  age:number;
}

const People:Iperson={
  name:"Mark",
  age:27,
};

// type keys=keyof Iperson;

// const keys:keys="name";

// function getProp(obj:Iperson,key:"name"|"age"):string |number {
//   return obj[key];
// }

//key 해서
//iperson[keyof IPerson]
// function getProp(obj:Iperson,key: keyof Iperson):Iperson[keyof Iperson] {
//   return obj[key];
// }
function getProp<T, K extends keyof T>(obj: T , key: K ):T[K] {
  return obj[key];
}
getProp(People,'age');

function setProp<T,K extends keyof T>(obj:T,key:K,value:T[K]):void{
  obj[key]=value;
}
setProp(People,"name","anna")