function helloBasic<T,U>(message:T,comment: U):T{
  return message;
}

helloBasic<string,number>("Mark",39);//넣고 사용하면 뒤에 제한
helloBasic(36,39);//안넣고 사용하면 T가 추론