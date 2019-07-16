define([
    "dojo/_base/declare",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dojo/text!template.html",
    "dojo/on",
    "dojo/dom",
    "dojo/query"],function (declare,_WidgetBase,_TemplateMixin,template,on,dom,query) {
    return declare("template",[_WidgetBase,_TemplateMixin],{
        name:"这是一个模板的文件",
        baseClass:"templateClass",
        templateString:template,
        postCreate:function () {
            this.inherited(arguments);
            this.aEvent();
        },
        aEvent:function () {
            var self= this;
            var temp=query(".nodetest");
            temp[0].innerHTML="haha";
            on(this.node,"click",function () {
                self.node.innerHTML+="<br>----添加了一些内容";
            })
            console.log(temp[0].innerHTML);
        }
    })
})