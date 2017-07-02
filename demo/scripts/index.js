
window.a = document.querySelector(".page-container")
var vm = new Vue({
    el: '.page-container',
    data:  function(){
        return {
            animation: false,
        }
    },
    mounted: function(){
        setTimeout(function(){
            this.animation = true
        }.bind(this), 0)
    },
    methods: {
        handleAnimationEnd: function(){
            console.log("animationend")
            this.animation = false
            setTimeout(function(){
                this.animation = true
            }.bind(this), 500)
        }
    }
})
