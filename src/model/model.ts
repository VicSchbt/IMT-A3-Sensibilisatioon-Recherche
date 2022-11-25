export abstract class Avatar {
  id: string;
  nameWorld: string;

  constructor(id: string, nameWorld: string) {
    this.id = id;
    this.nameWorld = nameWorld;
  }
}

export abstract class World {
  id: string;
  name: string;
  
  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
}