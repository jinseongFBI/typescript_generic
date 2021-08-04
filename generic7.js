"use strict";
const People = {
    name: "Mark",
    age: 27,
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
function getProp(obj, key) {
    return obj[key];
}
getProp(People, 'age');
function setProp(obj, key, value) {
    obj[key] = value;
}
setProp(People, "name", "anna");
