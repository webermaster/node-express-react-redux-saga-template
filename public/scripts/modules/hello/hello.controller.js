import mod from './hello.module';

mod.controller('HelloController', ['$scope', ($scope) => {
    $scope.name = "World";
}]);