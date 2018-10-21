const app = new Vue({
    el: '#app',
    data: {
        title: "Hello i am Vue ToDo",
        errEmpty: [],
        toDoName: "",
        newToDo: "",
        ToDos: []
    },
    methods: {
        addToDo() {
            this.errEmpty=[];
            if (this.toDoName !== '' && this.newToDo !== '') {
                this.ToDos.push({
                    name: this.toDoName,
                    title: this.newToDo,
                    done: false
                })
            }
            if (!this.toDoName) {
                this.errEmpty.push({
                    err: "Enter ToDo Name"
                });
            }
            if (!this.newToDo) {
                this.errEmpty.push({
                    err: "Enter ToDo Details"
                });
            }


            this.toDoName = '';
            this.newToDo = '';
        },
        emptyField() {
            console.log("Emptyy");
        }
    }
});