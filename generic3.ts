function helloArray<T>(message:T[]):T{
  return message[0];
}


helloArray(["Hello","world"]);
helloArray(["Hello",5]);

function helloTuple<T,k>(message: [T,k]):T{
  return message[0];
}

helloTuple(["Hello","world"]);
helloTuple(["Hello",5]);