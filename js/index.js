var quotes = [ "A programmer has two weapons: logical thinking and search",
               "Programming is like playing a musical instrument, you will not excel unless you train daily",
               "Work Hard",
               "Programming is understanding",
               "Think twice, code once",
               "Keep calm and start debugging",
               "Programming is beautiful",
               "We have to develope a passion for learning",
               "Code is poetry",
               "The best way to learn a language is to use it"
               ]

var i = Math.round(Math.random()*100)%quotes.length;

var temp = {
      template: '<p>'+quotes[i] +'</p>'
    }

var vm9 = new Vue({
    el: '#q',
    data: {

    },
    components: {
        'my-q': temp
    }
})