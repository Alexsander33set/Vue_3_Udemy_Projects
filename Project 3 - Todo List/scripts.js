new Vue({
    el:'#app',
    data(){
        return{
            todo_list:[],
            input_new_todo:'',
            message:'pirueta',
        }
    },
    created() {
        this.localStorage_verification();
    },
    updated() {
        this.update_todo_list_in_localStorage();
    },
    methods: {
        localStorage_verification(){
            this.todo_list = localStorage.getItem("todo_list") ? JSON.parse(localStorage.getItem("todo_list")) : this.todo_list
        },
        update_todo_list_in_localStorage(){
            localStorage.setItem("todo_list", JSON.stringify(this.todo_list))
        },
        add_new_todo(){
            if(this.input_new_todo != ''){
            var export_todo = {
                todo_text: this.input_new_todo,
                active: false
            }
            this.todo_list.push(export_todo)
            this.input_new_todo= ''
            }
        },
        clear_all_todos(){
            this.todo_list = [];
            localStorage.removeItem("todo_list")

        }
    },

})