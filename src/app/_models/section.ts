// Section class definition, derived from Mongo backend schema

import { Item } from './item';

export class Section {
  _id: string;
  name: string;
  items: Array<Item>;
  constructor(arg?:any){
    this.name = arg && arg.name;
  }
}
