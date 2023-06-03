class Family {
  constructor(father, mother, children, familySize){
    this.father = father;
    this.mother = mother;
    this.children = children;
    this.familySize = familySize
  }

  displayFamilySize(){
    return familySize;
  }
}

const adeola = new Family("Father", "Mother", "Children", 4);

Object.freeze(adeola);

console.log(adeola);