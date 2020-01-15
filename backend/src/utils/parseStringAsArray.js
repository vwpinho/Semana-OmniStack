module.exports = function paseStringAsArray(array) {
 return array.split(',').map(tech => tech.trim());
}