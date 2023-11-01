import "reflect-metadata";

function Prop() {
  return function (target: object, propertyKey: any) {
    const type = Reflect.getMetadata("design:type", target, propertyKey);
    console.log("--type", type);
  };
}

class User {
  @Prop()
  id: string = "";

  @Prop()
  age: number = 0;
}

const user = new User();
