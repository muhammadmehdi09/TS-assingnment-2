abstract  class Vehicle{
 
   private make : string
   private model : string
   private year : Number 
   private rented : boolean
   public price : Number
    constructor(ma:string, mo:string, y:number, r:boolean, p:Number){
        this.make = ma;
        this.model = mo;
        this.year = y;
        this.rented = r;
        this.price = p;
       }
    get Ma():string{
        return this.make
    }

    get Mo():string{
        return this.model
    }

    get Y():Number{
        return this.year
    }

    get R():boolean{
        return this.rented
    }  
    
    get p():Number{
        return this.price
    }

    set R(newR:boolean){
        if (!newR){
        throw new Error("Please define if the  car is rented or not")
    }
   this.rented = newR

}

abstract rentalRate(input : Vehicle) : number;

rent(Veh: Vehicle){
    if (!Veh.rented)
    {
        return "Vehicle is not avalible"
    }
    
    else{
         Veh.rented = true
         return "uccsefully Rented"
    }
    }

    return(Veh: Vehicle){
        if (!Veh.rented)
        {
            return "Vehicle is avalible"
        }
        
        else{
             Veh.rented = false
             return "uccsefully Returned"
        }
        }

}

class Car extends Vehicle
{
   public highestSpeed: number
   public colour: string
   rentalRate(input: Vehicle): number {
    if(input.Ma == "Ferrari")
    {
        return 150;
    }
    else if (input.Ma == "Lamborghini")
    {
        return 200;
    }
    else if (input.Ma == "BMW")
    {
        return 500;
    }
    else if (input.Ma == "Toyota")
    {
        return 120;
    }
    else if (input.Ma == "Honda")
    {
        return 112;
    }
    else
    {
        return 100;
    }     
}
}


class Truck extends Vehicle
{
   public MaxCarryLoad: number
   public colour: string

rentalRate(input: Vehicle): number {
    if(input.Ma == "Ferrari")
    {
        return 150;
    }
    else if (input.Ma == "Lamborghini")
    {
        return 200;
    }
    else if (input.Ma == "Daimler AG")
    {
        return 500;
    }
    else if (input.Ma == "Toyota")
    {
        return 120;
    }
    else if (input.Ma == "Honda")
    {
        return 112;
    }
    else
    {
        return 100;
    }     
}
}


class Motorcycle extends Vehicle
{
   public highestSpeed: number
   public weight : string
   rentalRate(input: Vehicle): number {
    if(input.Ma == "Aprilia")
    {
        return 150;
    }
    else if (input.Ma == "Can-Am")
    {
        return 200;
    }
    else if (input.Ma == "BMW")
    {
        return 500;
    }
    else if (input.Ma == "Toyota")
    {
        return 120;
    }
    else if (input.Ma == "Honda")
    {
        return 112;
    }
    else
    {
        return 100;
    }     
}
}


