

console.log("=========")
const user = {
  name: 'Alice',
  sayName: () => {
    console.log(this.name)
  }
}

user.sayName()