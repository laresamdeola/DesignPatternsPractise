class Family {
  constructor(members, size){
    this.members = members;
    this.size = size;
  }

  displayFamily(){
    return this.member + " " + this.size;
  }
}

const lare = new Family("son", 3);

Object.freeze(lare);