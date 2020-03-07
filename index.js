const unmask = (val) => {
    return val.replace(/[^0-9]+/g, '')
}

module.exports = unmask