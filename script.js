new Vue({
    el: '#app',

    data:{

        currentTask: '', //store information from input

      burgerActive: false ,
      
      menuUlOpen: false,

      pushTask: false,

      menuBtn:[ //button menu

          {
              name: 'Общий список задач',
              classBtn: 'commonList',
              link: 'index.html'
          },
          {
              name: 'Важное',
              classBtn: 'important',
              link: 'important.html'
          },
          {
              name: 'Список не выполненных',
              classBtn: 'notFinished',
              link: 'notFinished.html'
          },
          {
              name: 'Список выполненных',
              classBtn: 'finished',
              link: 'finished.html'
          },

      ],
    
      tasks: JSON.parse(localStorage.getItem('tasks')) || []
       //push array for localStorage

    },
    

    methods:{

        addTask: function () {

            if(this.currentTask !== ' ' && this.currentTask !== ''){

             this.tasks.push({            //push new task in array tasks
                text: this.currentTask, 
                starActive: false,
                isComplete: false
 
             })

          } 
  
            this.currentTask = '';

               },

         removeText: function (text) {                 //remove task
            this.tasks = this.tasks.filter(task => {
               return task.text !== text
            })
        }

        


       },

    computed:{

    },
     
    beforeCreate(){
        
        
    },
    

    updated(){ //adds all to-do list changes to localstorage
 
        window.localStorage.setItem('tasks', JSON.stringify(this.tasks));
        
    }

})

