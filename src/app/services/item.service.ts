import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  items: Array<any> = [
    {
      'id': "1",
      'title': "Tarefa 1",
      'description': 'Estudar Ionic'
    },
    {
      'id': "2",
      'title': "Tarefa 2",
      'description': 'Praticar guitarra'
    },
    {
      'id': "3",
      'title': "Tarefa 3",
      'description': 'Cuidar da família'
    },
    {
      'id': "4",
      'title': "Tarefa 4",
      'description': 'Trabalhar'
    }
  ]

  constructor() { }

  createItem(title, description){
    let randomId = Math.random().toString(36).substr(2, 5);
    this.items.push({
      'id': randomId,
      'title': title,
      'description': description
    });
  }

  getItems(){
    return this.items;
  }

  updateItem(newValues){
    let itemIndex = this.items.findIndex(item => item.id == newValues.id);
    this.items[itemIndex] = newValues;
  }


}
