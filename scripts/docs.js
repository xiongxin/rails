// adds css classes to tables
function addTableClass(){
    var tables = document.getElementsByTagName('table');
    if (tables.length > 0) {
        for (var i=0; i<tables.length; i++) {
            tables[i].className = 'table table-bordered';
        }
    }
}

window.onload = function(){
    addTableClass();
};
