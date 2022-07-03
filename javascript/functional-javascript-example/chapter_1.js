function splat(fun) {
  return function (array) {
    return fun.apply(null, array)
  }
}

function unsplat(fun) {
  return function () {
    return fun.call(null, [...arguments])
  }
}

module.exports = {
  splat,
  unsplat
}