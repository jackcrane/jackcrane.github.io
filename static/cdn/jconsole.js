var jconsole = { 
	color:{
		red:{
			log:function(arg,css) {console.log('%c'+arg,'color:red')} 
        },
        orange:{
			log:function(arg) {console.log('%c'+arg,'color:orange')} 
        },
        yellow:{
			log:function(arg) {console.log('%c'+arg,'color:yellow')} 
        },
        green:{
			log:function(arg) {console.log('%c'+arg,'color:green')} 
        },
        blue:{
			log:function(arg) {console.log('%c'+arg,'color:blue')} 
        },
        purple:{
			log:function(arg) {console.log('%c'+arg,'color:purple')} 
        },
        teal:{
			log:function(arg) {console.log('%c'+arg,'color:teal')} 
        }
    },
    css:{
		log:function(arg,css) {console.log('%c'+arg,css)} 
    }
}