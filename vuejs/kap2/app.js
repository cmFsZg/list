new Vue({
  el: '#exercise',
  data: {
  	isHighLighted: false,
    enteredClassName: '',
    timer1: '',
    timer2: '',   
    isVisible: true,    
		isVisible: true,    
    myStyle: {
      backgroundColor: 'red',
    	width: '100px',
      height: '25px',
    },
		progressBar: {
  		width: '0px',
    	backgroundColor: 'red'
    },    
  },
  methods: {
    startEffect: function() {	
    	var vm = this;
      vm.timer1 = setInterval(function() {
				vm.isHighLighted= !vm.isHighLighted;
      }, 1000);    
    },
    stopEffect: function() {	
    	var vm = this;
      clearInterval(vm.timer1);
    },
    
		startProgress: function() {
    	var vm = this;
      var width = 0;
     
    	vm.timer2 = setInterval(function() {
      	width += 1;
      	vm.progressBar.width = width + 'px';
        if (width > 100) clearInterval(vm.timer2);
      }, 5);
    },
  },
  computed: {
  	divClasses: function() {
    	return {
      	highlight: this.isHighLighted,
        shrink: !this.isHighLighted
      };
    }
  }  
});

