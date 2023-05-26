class Family {
  constructor(members, size){
    this.members = members;
    this.size = size;
  }

  displayFamily(){
    return this.members + " " + this.size;
  }
}

const oyedele = new Family("5 Generations", 12);

console.log(oyedele.size);