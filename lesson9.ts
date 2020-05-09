
// tu khoa this
var employee={
    id:1,
    greet:function(){
        console.log(this.id);
    },
    // greet1:function(){
    //     var self=this;
    //     setTimeout(() => {
    //         console.log(self.id);
    //     }, 1000);
    // },
    greet2:function(){
        setTimeout(() =>console.log(this.id), 1000);
    }
}
//console.log(employee.greet);
employee.greet();
//employee.greet1();
//employee.greet2();