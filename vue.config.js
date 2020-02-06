const path = require('path')

module.exports = {
    chainWebpack: config => {
        config
            .entry('app')
            .clear()
            .add('./demo/main.js')
            .end()
        config.resolve.alias
            .set('@', path.join(__dirname, './demo'))
            .set('@src', path.join(__dirname, './src'))
    }
}
