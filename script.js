angular.module('sortApp', [])

.controller('mainController', function($scope) {
  $scope.sortType     = 'usefullness'; // set the default sort type
  $scope.sortReverse  = false;  // set the default sort order
  $scope.searchTechnique   = '';     // set the default search/filter term
  
  // create the list of winning techniques 
  $scope.sumo = [
    { name: 'Yori-kiri', technique: 'Force Out', usefullness: 1 },
    { name: 'Yori-taoshi', technique: 'Force Down', usefullness: 2 },
    { name: 'Oshi-dashi', technique: 'Push Out', usefullness: 3 },
    { name: 'Oshi-taoshi', technique: 'Push Down', usefullness: 4 }
  ];
  
});