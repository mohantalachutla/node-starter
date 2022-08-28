const { merge } = require("webpack-merge")

module.exports = (env, args) => {
    const environment = args.mode | env.NODE_ENV
    const common = require("./webpack.common.js")

    switch(environment){
        case "development" | "dev": 
            const dev = require("./webpack.dev.js")
            return merge(common, dev)
        case "production" | "prod": 
            const prod = require("./webpack.prod.js")
            return merge(common, prod)
        default: 
            throw new Error("webpack/webpack.config.js: Environment not set or not found")
    }
}