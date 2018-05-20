/*
 * A place to put some custom debug functions so that they can be reused without
 * cluttering up files that shouldn't be cluttered up
 */

function testIfUndefined(val){
    if (typeof val) {
        console.log("it exists with the type " + typeof val);
    } else {
        console.log("it does not exist");
    }
}