define(function(require) {
    require('ie7Patch')();

    var CatNavMenuLeft = require('./cat-nav-menu-left');
    var catNavMenuLeft = new CatNavMenuLeft('#J_CatSlide');
    catNavMenuLeft.render();

    var CatNavFirst = require('./cat-nav-first');
    var catNavFirst = new CatNavFirst('#cat-nav-1');
    catNavFirst.render();
});

