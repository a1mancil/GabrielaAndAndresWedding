// Watch lesson:
// "watch is lazy by default: the callback won't be called 
// until the watched source has changed. But in some cases we may 
// want the same callback logic to be run eagerly - for example, 
// we may want to fetch some initial data, and then re-fetch the 
// data whenever relevant state changes.

// We can force a watcher's callback to be executed immediately 
// by declaring it using an object with a handler function 
// and the immediate: true"
// https://vuejs.org/guide/essentials/watchers.html

// also learned about basic watcher, deep watcher and eager watcher in
// link above

// "A callback is a function passed as an argument to another function"
// https://www.w3schools.com/js/js_callback.asp


const app = Vue.createApp({

    data(){
      return{
        // 'daysLeft' will update at the start of every refresh
        daysLeft: 0,
        beforeWeddingMessage: " DAYS TO GO!!",
        afterWeddingMessage: "WE ARE STOKED CAUSE WE ARE YOKED!!",
      };
    },
    computed:{
      countDownMessage(){
        if(this.daysLeft == 0){
          return this.afterWeddingMessage;
        }
        return this.daysLeft + this.beforeWeddingMessage;
      }
    },
    // will reload everytime the page refreshes
    watch:{
      // below is an example of an eager watcher:
      daysLeft:{
        // Note function below needs to be named 'handler'
        handler(value){
          const remainingDays = 
              Math.floor(
                        (  new Date("Oct 28, 2023").getTime() 
                         - new Date().getTime()
                        ) 
                        / (1000 * 60 * 60 * 24)
              );
          if(value != remainingDays ){
            this.daysLeft = remainingDays;
          }
        },
        // 'handler' function executes immediately
        immediate: true
      }
    }
  });
  app.mount('#countDownVueApp');
  
  
  
  
  