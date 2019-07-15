app.controller("myNoteCtrl",function ($scope) {
    $scope.message="";
    $scope.left=function () {
        return 100 - $scope.message.length;
    };
    $scope.save=function () {
        alert("Note saved!")
    };
    $scope.clear=function () {
        $scope.message=""
    };
});