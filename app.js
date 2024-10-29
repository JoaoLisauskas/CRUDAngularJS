let app = angular.module("aplicacao", ["ngRoute"])

app.config(($routeProvider) => {
    $routeProvider
        .when("/cadastrar", {
            templateUrl: "cadastrar.html",
            controller: "cadastrarController"
        })
        .when("/itensCadastrados", {
            templateUrl: "itensCadastrados.html",
            
        })

})

app.controller("cadastrarController", function($scope, $http){
    $scope.funcionario = {}
    
    $scope.submit = () => {
        
        $http.post("http://localhost:3000/funcionario", $scope.funcionario)

    }
    
})

app.controller("itensCadastradosController", ($scope, $http) => {
    $scope.carregaLista = () => {
        $http.get("http://localhost:3000/funcionario").then((response) => {
            $scope.listaFuncionario = response.data 
        })
    }

    

    $scope.carregaLista()
})