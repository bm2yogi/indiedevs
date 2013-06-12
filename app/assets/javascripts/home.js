'use strict';

var eventsApp = angular.module('eventsApp', []);

eventsApp.controller('HomeController',
    function HomeController($scope){
        $scope.events = [
            {name:'Kickoff',host:'bm2yogi'},
            {name:'Barbecue',host:'phil'} ];

        $scope.magicNumber = 4;

        $scope.incr = function(){
            console.log('incr');
            $scope.magicNumber++;
        }

        $scope.decr = function(){
            console.log('decr');
            $scope.magicNumber--;
        }
    }
);