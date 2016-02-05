var app = angular.module("app", ['angularUtils.directives.dirPagination','ngSanitize', 'ngCsv','ngRoute']);

app.config(function($routeProvider){

    $routeProvider
    .when('/',{
        templateUrl: 'pages/login.html',
        controller: 'basicsCtrl'
    })
    .when('/app',{
    	templateUrl:'pages/app.html',
    	controller:'basicsCtrl'
    })
    .when('/signup',{
        templateUrl:'pages/signup.html',
        controller:'basicsCtrl'
    })
   
});
app.controller('basicsCtrl', ['$scope', function ($scope) {
    
    	$scope.rowCollection = [
        {firstName: 'siddartha', lastName: 'kandukury',  email: 'whatever@gmail.com'},
        {firstName: 'Blandine', lastName: 'Faivre', email: 'oufblandou@gmail.com'},
        {firstName: 'jane', lastName: 'doe', email: 'doe@gmail.com'},
        {firstName: 'ironman', lastName: 'tonystark', email: 'ironman@gmail.com'},
        {firstName: 'hulk', lastName: 'green', email: 'hulk@gmail.com'},
        {firstName: 'thor', lastName: 'hammer', email: 'thor@gmail.com'},
        {firstName: 'arnold', lastName: 'swazniger', email: 'arnold@gmail.com'},
        {firstName: 'rambo', lastName: 'treek', email: 'rambo@gmail.com'},
        {firstName: 'jin', lastName: 'katama', email: 'jin@gmail.com'},
        {firstName: 'minka', lastName: 'kelly', email: 'kelly@gmail.com'},
        {firstName: 'rose', lastName: 'byrene', email: 'rose@gmail.com'},
        {firstName: 'cris', lastName: 'topher', email: 'cris@gmail.com'},
        {firstName: 'eva', lastName: 'mendas', email: 'eva@gmail.com'},
        {firstName: 'michelli', lastName: 'rodgius', email: 'michelli@gmail.com'},
        {firstName: 'megonfox', lastName: 'fox', email: 'megonfox@gmail.com'},
        {firstName: 'kristene', lastName: 'stewart', email: 'stewart@gmail.com'},
        {firstName: 'ema', lastName: 'watson', email: 'ema@gmail.com'},
        {firstName: 'scarlet', lastName: 'johnson', email: 'johnson@gmail.com'},
        {firstName: 'jennefer', lastName: 'lorence', email: 'jennefer@gmail.com'},
        {firstName: 'ketty', lastName: 'perry', email: 'ketty@gmail.com'},
        {firstName: 'selina', lastName: 'gomenz', email: 'selina@gmail.com'},
        {firstName: 'tailor', lastName: 'swift', email: 'swift@gmail.com'},
        {firstName: 'nikky', lastName: 'manaj', email: 'manaj@gmail.com'},
        {firstName: 'shawn', lastName: 'mendes', email: 'shawn@gmail.com'},
        {firstName: 'michel', lastName: 'jackson', email: 'michel@gmail.com'},
        {firstName: 'mark', lastName: 'zuk', email: 'zuk@gmail.com'},
        {firstName: 'nickolas', lastName: 'cage', email: 'cage@gmail.com'},
        {firstName: 'sean', lastName: 'ben', email: 'ben@gmail.com'},
        {firstName: 'kim', lastName: 'kardishen', email: 'kim@gmail.com'},
        {firstName: 'kevin', lastName: 'hart', email: 'hart@gmail.com'},
        {firstName: 'roman', lastName: 'atword', email: 'atword@gmail.com'},
        {firstName: 'mkbhd', lastName: 'hd', email: 'mkbhd@gmail.com'},
        {firstName: 'peddi', lastName: 'pie', email: 'pie@gmail.com'},
        {firstName: 'kee', lastName: 'pelli', email: 'kee@gmail.com'},
        {firstName: 'peeli', lastName: 'kim', email: 'peeli@gmail.com'},
        {firstName: 'suki', lastName: 'dommin', email: 'suki@gmail.com'},
        {firstName: 'neha', lastName: 'kumari', email: 'neha@gmail.com'},
        {firstName: 'archana', lastName: 'nommimi', email: 'archana@gmail.com'},
        {firstName: 'bomika', lastName: 'bhomi', email: 'bomika@gmail.com'},
        {firstName: 'ravali', lastName: 'bittamani', email: 'ravali@gmail.com'},

    ];
    $scope.sortColum = "name";
    $scope.reverseSort = false;
    $scope.sortData = function(colum){
    	$scope.reverseSort = ($scope.sortColum == colum)? !$scope.reverseSort:false;
    	$scope.sortColum = colum;
    }
    $scope.getSortClass = function(colum){
    	if($scope.sortColum == colum){
    		return $scope.reverseSort? 'arrow-down':'arrow-up'
    	}
    } 

    //Login Check

    $scope.logIn = function(){
    var pass = document.getElementById("password").value;
    for(var i=0 ; i<=$scope.rowCollection.length;i++)
    {
        if(($scope.username === $scope.rowCollection[i].firstName)&&(pass === $scope.rowCollection[i].lastName))
        {
            $scope.session = $scope.rowCollection[i].firstName;

            window.location="#/app";
        }
    }
}

  
    
}]);
