
var binder = {
    getEventName(){
        var event
        if(window.onanimationend !== undefined ){
            event = 'animationend'
        } else if(window.onwebkitanimationend !== undefined) {
            event = 'webkitAnimationEnd'
        }
        console.log("bound event name:", event)
        this.eventName = event
        return event
    },

    bind(el, bind, vnode) {
        var event = this.getEventName()
        if(! event) {
            console.error("animation end event not support")
            this.bindError = true
            return
        }
        if(document.addEventListener){
            el.addEventListener(this.eventName, bind.value)
        } else {
            this.bindError = true
            console.error("document.addEventListener not support")
        }
    },

    unbind(el, bind, vnode){
        if(! this.bindError) {
            el.removeEventListener(this.eventName, bind.value)
        }
    }
}

export default {
    bind(el, bind, vnode){
        binder.bind(el, bind, vnode)
    },
    unbind(el, bind, vnode) {
        binder.unbind(el, bind, vnode)
    }
}
