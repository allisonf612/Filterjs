// The function 'filter' will use the DOM to remove
// Craigslist rows that do not contain a price
// in its brief description.
var filter = function () {
    
    // Obtains the element specified by the className.
    // Tests the innerHTML against the specified reg ex.
    // @param className a string which identifies the class
    //                  to be searched for.
    // @param re        a Regular Expression pattern by which the 
    //                  innerHTML is tested.
    // @return          The result of the reg ex test
    var regExProcessing=function(className, re) {
        var allElements, element;
        
        allElements=row.getElementsByClassName(className);
        element=allElements[0];

        return re.test(element.innerHTML);
    }
    
    // Simple wrapper around the regular expression
    // matching.  itemph must be the parent of a text Node
    // that is an integer dollar amount.
    // @return      The result of the reg ex for match for
    //              /\$(\d+)/
    var parse=function() {
        return (regExProcessing('itemph', /\$(\d+)/));
    };
    
    // Iterate backward through the rows and removing
    // the ones which do not match the reg ex parsing.
    // Because JavaScript is pass by reference, deleting
    // the row while iterating causes every other row
    // to be skipped because the arrays elements shift
    // upon deletion.
    var rows, row, i;
    rows=document.getElementsByClassName('row');
    i=rows.length;
    while (i--) {
        row=rows[i];
        if (!parse()) {
            row.parentNode.removeChild(row);
        }
    }    
};

