describe("Empty spec", () => {
  it("Typescript introduction", () => {
    /* Complains:
        let stringVariable: string = true;
        let stringVariable: string = false;
        let stringVariable: string = -9;
        let stringVariable: string = 0;
        */
    let stringVariable: string = "9";

    /* complains:
        let numberVariable: number = '8';
        let numberVariable: number = true;
        let numberVariable: number = false;
        */
    let numberVariable: number = 9;

    /* complains:
       let booleanVariable: boolean = '14'
       let booleanVariable: boolean = 'hello'
       let booleanVariable: boolean = 9
       let booleanVariable: boolean = -12.867
       let booleanVariable: boolean = 'true'
       let booleanVariable: boolean = 'false'
       */
    let booleanVariable1: boolean = true;
    let booleanVariable2: boolean = false;
  });

  it("Typescript intro - Functions", () => {
    /* Functions:
    a: number => a must be a number type.
    b: number => b must be a number type.

    function addTwoNumber(...): number{...}
    => that means this function return a number type.
    */
    function addTwoNumbers(a: number, b: number): number {
      return a + b;
    }
  });

  it("Typescript intro - Interface", () => {
    interface Persona {
      username: string;
      lastname: string;
      age: number;
    }

    function returnUserInfo(person: Persona): void {
      console.log(`This is the username: ${person.username}`);
      console.log(`This is the lastname: ${person.lastname}`);
      console.log(`This is the age: ${person.age}`);
    }
  });
});
