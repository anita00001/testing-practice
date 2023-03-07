const capitalize = (str) => {
  return (str.split('')[0].toUpperCase() + str.slice(1))
}

module.exports = capitalize;