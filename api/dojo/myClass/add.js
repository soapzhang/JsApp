define(["dojo/_base/declare"],function (declare) {
    return declare("aClass",null,{
        munum:10,
        constructor:function(num){
            // this.munum=num;
            this.munum=num;
            // console.log(this.munum+""+num);
        },

        add:function (num1) {
            return num1 + this.munum;
        },
        getMyNum:function () {
            return this.munum;
        },
        myNumAdd:function () {
            this.munum++;
            return this.munum;
        }
    })
})