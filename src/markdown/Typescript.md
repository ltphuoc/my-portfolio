---
slug: typescript
title: Learn Typescript
author: Phuoclt
author_title:
author_url:
author_image_url:
image:
tags: [typescript, phỏng vấn reactjs]
---

Typescript cheat sheet

<!-- truncate-->

- Install typescript
```bash
npm i -g typescript ts-node ts-lib @types/node
```
- Create tsconfig.json
```bash
tsc --init
```
- Install unit test
```bash
npm i --save-dev jest typescript ts-jest @types/jest
```
```bash
npx ts-jest config:init
```

- Intersection Type
```ts
interface Contact {
  email: string;
  phone: string;
}
interface Info {
  name: string;
  age: number;
}
// interface
interface Student extends Info, Contact {}
// type alias
type Student = Info & Contact;
```
- Union Type
```ts
type StudentId = number | string;
```
```ts
// Multiple Interface (work)
interface Info {
  email: string;
  phone: string;
}
interface Info {
  name: string;
  age: number;
}

// Mutilple Type (error)
```
- Class
```ts
class Student {
  public name: string;
  private age: number;
  readonly sex: string;
  constructor(name: string, age: number, sex: string) {
    this.name = name;
    this.age = age;
    this.sex = sex;
  }
  printAge(){
    return `Age: ${this.age}`;
  }
}

const studentOne = new Student('phuoc', 22, 'male');
// studentOne.sex = 'female'; Can't
// studentOne.age = 13; Can't
studentOne.name = 'thanh';
console.log(studentOne.name); // thanh
console.log(studentOne.sex); // male
console.log(studentOne.printAge()); // 22
```
- Short way class
```ts
class Student {
  constructor(
    public name: string,
    private age: number,
    readonly sex: string
    ) {}

  printAge() {
    return `Age: ${this.age}`;
  }
}
```
- Generics
```ts
// Ex1
interface List<T> {
  length: number;
  [index: number]: T;
}
const numberList: List<number> = [1, 2, 3];
const wordList: List<string> = ['a', 'b'];

// Ex2
interface Person {
  fName: string;
  lName: string;
}
const info = <T extends Person>(obj: T) => ({
  ...obj,
});
const a = info({ fName: 'Thanh', lName: 'Le', age: 22 });
const b = info({ fName: 'Phuoc', lName: 'Le', age: 22, gender: "Male", city: "HCM" });

// Ex3
interface Student<T> {
  fName: string;
  lName: string;
  data: T;
}
const studentOne: Student<object> = {
  fName: '',
  lName: '',
  data: {},
};
```
- Mapped
```ts
// Ex1
interface Student {
  id: number;
  name: string;
}
type MappedTypes = {
  [Key in keyof Student]: boolean;
};
// MappedTypes = {
// id: true;
// name: true;
// }

// Ex2
interface Person {
  name: string;
  age: number;
  email: string;
}

type Optional<T> = {
  [P in keyof T]?: T[P];
};

type OptionalPerson = Optional<Person>;

const person: OptionalPerson = {
  name: 'John Doe',
  age: 30,
  // email is optional because it's defined in the OptionalPerson type
};
```
- Utility Types
```ts
interface Student {
  id: number | string;
  name: string;
}

// `Partial<Type>`` - optional.
let a: Partial<Student>;

// `Required<Type>` - required.
let b: Required<Student>;

// `Readonly<Type>` - readonly.
let c: Readonly<Student>;

// `Record<KeyType, ValueType>`
type StudentName = 'phuoc' | 'thanh' | 'le';
const studentList: Record<StudentName, Student> = {
  le: { id: 1, name: 'le' },
  thanh: { id: 2, name: 'thanh' },
  phuoc: { id: 3, name: 'phuoc' },
};

// `Pick<Type, Keys>` - With
type StudentId = Pick<Student, 'id'>;
const sId: StudentId = {
  id: '1',
};

// `Omit<Type, Keys>` - Without
type StudentWithoutName = Omit<Student, 'name'>;
const sId: StudentId = {
  id: '1',
};

// `Exclude<Type, ExcludedUnion>` - (Omit with unions types)
type Numbers = 1 | 2 | 3 | 4;
type ExcludedNumbers = Exclude<Numbers, 1 | 2>; // 3 | 4

// `ReturnType<Type>`
class Student {
  constructor(public name: string, private age: number, readonly sex: string) {}
  printAge(): string {
    return `Age: ${this.age}`;
  }
  doubleAge(): number {
    return this.age * 2;
  }
}
const studentOne = new Student('phuoc', 22, 'male');
type doubleAge = ReturnType<typeof studentOne.doubleAge>; // number
type stringAge = ReturnType<typeof studentOne.printAge>; // string

// `Awaited<Type>`
async function fetchData(): Promise<Person> {
  const response = await fetch('https://api.example.com/data');
  return await response.json();
}
type FetchDataResult = Awaited<ReturnType<typeof fetchData>>;
async function displayData(): Promise<void> {
  const data: FetchDataResult = await fetchData();
}
```
