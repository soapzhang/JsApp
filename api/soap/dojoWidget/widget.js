dojo.provide("dojoWidget.widget");
dojo.require("dijit._Widget");
dojo.require("dijit._Templated");
dojo.declare("dojoWidget.widget",[dijit._widget,dijit._Template],{
    name:"no name",
    avatar:dojo.moduleUrl("dojoWidget.widget","templates/widget.html"),
    bio:"",
    templateString:dojo.cache("dojoWidget.widget","templates/widget.html"),
    baseClass:"authorWidget",
    mouseAnim:null,
    baseBackgroundColor:"#fff",
    mouseBackgroundColor:"#def"
});
postCreate:function f() {
    var domNode=this.domNode;
    this.inherited(arguments);
    dojo.style(domNode,"backgroundColor",this.baseBackgroundColor);
    this.connect(domNode,"onmouseenter",function (e) {
        this._changeBackground(this.mouseBackgroundColor);
    });
    this.connect(domNode,"onmouseleave",function (e) {
        this._changeBackground(this.baseBackgroundColor);
    })
};
_changeBackground: function f(toCol) {
    // If we have an animation, stop it
    if (this.mouseAnim) { this.mouseAnim.stop(); }

    // Set up the new animation
    this.mouseAnim = dojo.animateProperty({
        node: this.domNode,
        properties: {
            backgroundColor: toCol
        },
        onEnd: dojo.hitch(this, function() {
            // Clean up our mouseAnim property
            this.mouseAnim = null;
        })
    }).play();
}
_setAvatarAttr: function f(av) {
    // We only want to set it if it's a non-empty string
    if (av != "") {
        // Save it on our widget instance - note that
        // we're using _set, to support anyone using
        // our widget's Watch functionality, to watch values change
        this._set("avatar", av);

        // Using our avatarNode attach point, set its src value
        this.avatarNode.src = av;
    }
}