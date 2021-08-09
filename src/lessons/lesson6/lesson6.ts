console.log("Lesson 6");

// Class
// https://learn.javascript.ru/classes
// https://medium.com/front-stories/%D0%BA%D0%B0%D0%BA-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B0%D1%8E%D1%82-%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D1%8B-%D0%B2-javascript-7978c0003f1d
// https://www.typescriptlang.org/docs/handbook/classes.html
// https://www.youtube.com/watch?v=BASquaxab_w
// https://www.youtube.com/watch?v=uLY9GXGMXaA

// Task 01
// Создайте структуру с именем student, содержащую поля: имя и фамилия, номер группы, успеваемость (массив из пяти элементов).
// Создать массив из десяти элементов такого типа, упорядочить записи по возрастанию среднего балла.
// Добавить возможность вывода фамилий и номеров групп студентов, имеющих оценки, равные только 4 или 5.
interface IStudent {
  name: string;
  family: string;
  numberGroup: number;
  progress: [number, number, number, number, number];
  averageMark: number;
}
class Student implements IStudent {
  averageMark: number;
  constructor(
    public name: string,
    public family: string,
    public numberGroup: number,
    public progress: [number, number, number, number, number]
  ) {
    this.name = name;
    this.family = family;
    this.numberGroup = numberGroup;
    this.progress = progress;
    this.averageMark =
      this.progress.reduce((sum, mark) => sum + mark) / this.progress.length;
  }
  private static sortStudent(s1: IStudent, s2: IStudent) {
    if (s1.averageMark > s2.averageMark) {
      return 1;
    } else if (s1.averageMark < s2.averageMark) {
      return -1;
    } else {
      return 0;
    }
  }
  static sort(arr: Array<IStudent>) {
    const temp = [...arr];
    return temp.sort(this.sortStudent);
  }
  private static isAllMarksEqual(marks: number[], mark: number) {
    return marks.every((mk) => mk === mark);
  }

  private static filterStudent(arr: Array<IStudent>) {
    const result: Array<IStudent> = [];
    arr.forEach((s) => {
      if (
        this.isAllMarksEqual(s.progress, 4) ||
        this.isAllMarksEqual(s.progress, 5)
      ) {
        result.push(s);
      }
    });
    return result;
  }
  static printGoodStudents(arr: Array<IStudent>) {
    this.filterStudent(arr).forEach((s) => {
      console.log(`Student - ${s.name} ${s.family},Group-${s.numberGroup}`);
    });
  }
}
let One = new Student("Kirill", "Uvarov", 1, [5, 5, 5, 5, 5]);
let Two = new Student("Dima", "Ilyushin", 1, [5, 5, 5, 5, 5]);
let Three = new Student("Vasya", "Kolin", 1, [5, 2, 4, 2, 4]);
let Four = new Student("Jenya", "Vasin", 1, [5, 1, 1, 5, 5]);
let Five = new Student("Kolya", "Mashin", 1, [5, 4, 4, 5, 3]);
let Six = new Student("Masha", "Kolina", 1, [5, 5, 4, 5, 3]);
let Seven = new Student("Vika", "Mishina", 1, [2, 5, 4, 2, 5]);
let Eight = new Student("Katya", "Sanina", 1, [4, 4, 4, 4, 4]);
let Nine = new Student("Vitya", "Mitin", 1, [2, 5, 2, 3, 4]);
let Ten = new Student("Sasha", "Filin", 1, [3, 2, 4, 5, 5]);

let arrayStudents = [One, Two, Three, Four, Five, Six, Seven, Eight, Nine, Ten];
Student.printGoodStudents(arrayStudents);

// Task 02
// Создать класс с двумя переменными. Добавить конструктор с входными параметрами и инициализирующий члены класса по умолчанию.
// Можно ли создать метод на экземпляре класса который будет удалять сам экземпляр класса?
// Можно ли создать метод класса который будет удалять экземпляр класса?
interface IClass{
    oneParam:string
    twoParam:number
}
class Class implements IClass {
    constructor(public oneParam:string,public twoParam:number){
this.oneParam = oneParam
this.twoParam = twoParam
    }
 deleteMeth(Class:IClass){
    //@ts-ignore
 Class = null
 return null
}
}
let resClass = new Class("L",7)

resClass.deleteMeth(resClass)
console.log(Class);
console.log(resClass);

// Task 03
// Составить описание класса для представления времени. Предусмотреть возможности установки времени и изменения его отдельных
// полей (час, минута, секунда) с проверкой допустимости вводимых значений. В случае недопустимых значений полей выбрасываются исключения.
// Создать методы изменения времени на заданное количество часов, минут и секунд.
// Создать метод выводящий время в строке формата HH:MM:SS
// Создать класс по вышеуказанному описанию



// Task 04
// Класс Покупатель: Фамилия, Имя, Адрес, Номер банковского счета;
// Методы: установка значений атрибутов, получение значений атрибутов, вывод информации.
// Создать массив объектов данного класса.
// Вывести список покупателей в алфавитном порядке и список покупателей, у которых номер кредитной карточки находится в заданном диапазоне.
interface ICustomer {
  surName: string;
  name: string;
  adress: string;
  numberBankCards: number;
}

class Customer implements ICustomer {
  constructor(
    public surName: string,
    public name: string,
    public adress: string,
    public numberBankCards: number
  ) {
    this.adress = adress;
    this.name = name;
    this.numberBankCards = numberBankCards;
    this.surName = surName;
    
  }
  settingAttributes(
    surName: string,
    name: string,
    adress: string,
    numberBankCards: number
  ) {
    return new Customer(surName,name,adress,numberBankCards)
  }
  gettingAttributes(){
      return new Customer(this.surName,this.name,this.adress,this.numberBankCards)
  }
writeAtt(){
    console.log('Фамилия:'+this.surName+' '+'Имя:'+this.name+' '+'Адресс:'+this.adress+' '+'Номер карты:'+this.numberBankCards);
    
}
 sortCustomer(s1: ICustomer, s2: ICustomer) {
    if (s1.surName > s2.surName) {
      return 1;
    } else if (s1.surName < s2.surName) {
      return -1;
    } else {
      return 0;
    }
  }
 sort(arr: Array<ICustomer>) {
    const temp = [...arr];
    return temp.sort(this.sortCustomer);
  }
public isAllCardsEqual(cards: ICustomer[],min:number,max:number) {
    return cards.every((c) => min<=c.numberBankCards&&c.numberBankCards<=max );
  }
  public filterStudent(arr: Array<ICustomer>,min:number,max:number) {
    const result: Array<ICustomer> = [];
    
    arr.forEach((s) => {
      if (
        this.isAllCardsEqual(Array(s),min,max)
      ) {
        result.push(s);
        
      }
    });
    return result;
  }
}
let Men = new Customer('Uvarov','Kirill','Sverdlov Street',111111)
let Bro = new Customer('Ilyushin','Dmitry','Sverdlov Street',654321)
let Girl = new Customer('Natashkina','Anna','Barabulkina Street',53241)
let array = [Men,Bro,Girl]
let newArray =Customer.prototype.sort(array)
let newArray2 =Customer.prototype.filterStudent(newArray,0,111111)
console.log(newArray2);



// Task 05
// Создать класс машина - имеющий марку, число цилиндров, мощность. Определить конструктор и функцию печати.
// Создать производный класс – грузовик, имеющий грузоподъемность кузова.
// Определить функции переназначения марки и грузоподъемности.
interface IVehicle {
  mark: string;
  cilindr: number;
  mosh: number;
}

class Vehicle implements IVehicle {
  constructor(
    public mark: string,
    public cilindr: number,
    public mosh: number
  ) {
    this.mark = mark;
    this.cilindr = cilindr;
    this.mosh = mosh;
  }
  print() {
    console.log(this);
  }
}
class BigVehicle extends Vehicle {
  BLC: number;
  constructor(
    public bodyLoadCapacity: number,
    mark: string,
    public cilindr: number,
    public mosh: number
  ) {
    super(mark, cilindr, mosh);
    this.BLC = bodyLoadCapacity;
  }
  newBLC(newCapacity: number) {
    this.BLC = newCapacity;
  }
  newMark(newMark: string) {
    this.mark = newMark;
  }
}

let Machine = new BigVehicle(300, "BMW", 4, 200);
Machine.print();
Machine.newBLC(500);
Machine.print();

// just a plug
export default () => {};
