What are some differences between interfaces and types in TypeScript?

    Interfaces and Types are used for defining type in typescript but they have few differences too.
    * Interfaces can define type only for non premetive types where types can define all premitive and non premitives.
    * Interface can not represent union or intersection types where types can which allows type for more complex type definition.
    * Interface can use extends keyword to inherit types from another interface where type does using intersections.
    
    interface A{
        name:string;
    }
    interface B extends A{
        address:string;
    }

    type A={
        name:string;
    }
    type B=A & {
        address:string;
    }

What is the use of the keyof keyword in TypeScript? Provide an example.

    keyof is a powerful keyword in typescript,using this we can produce cleaner code.
    keyof is used to get the union of all the keys in a object type

    interface Person{
        name:string;
        address:string;
    }
    type PersonKeys=keyof Person;
    
    //'name'|'address' -->which means person keys only be 'name' or 'address'

    