class TodoApp {
    constructor() {
      this.todoList = [];
    }
    add(item) {
        this.todoList.unshift(item);
        if(item.canExpire === true) {
            setTimeout(() => {
                let index = this.todoList.findIndex(item => item.canExpire === true);
                this.todoList.splice(index, 1);
            }, item.delay);
        }
    }
    remove(id) {
        for (let i = this.todoList.length; i-- ;) {
            if (this.todoList[i].id === id) {
                this.todoList.splice(i, 1);
            }
        }
    }
    clear() {this.todoList.length = 0}
}

class TodoItem {
    constructor({ name}) {
      this.name = name;
    }
    updateName(newName) {
        this.name = newName;
    }
     idRand(){
        return Math.random().toString(16).slice(2);
     } 
     createdDate() {
    return new Date().toLocaleString().slice(0, -3);
    }
}

class PinnedTodoItem extends TodoItem {
    isPinned = true;
    constructor(name){
        super(name);
        this.name = name;
        this.id = super.idRand();
        this.createdDate = super.createdDate();
    }
}

class ExpireTodoItem extends TodoItem {
    canExpire = true;
    constructor(name, delay) {
        super(name);
        this.name = name;
        this. delay = delay;
        this.id = super.idRand();
        this.createdDate = super.createdDate();
    }
}
const todo = new TodoApp();
const isPinned1 = new PinnedTodoItem('Alex');
const isPinned2 = new PinnedTodoItem('Peter');
const canExpire1 = new ExpireTodoItem('Maria', 5000);
const canExpire2 = new ExpireTodoItem('Anna', 3000);

console.log(todo);

todo.add(canExpire1);
todo.add(isPinned1);
todo.add(isPinned2);
todo.add(canExpire2);
//todo.clear();
//todo.remove(isPinned1.id)
isPinned1.updateName('Nick');

