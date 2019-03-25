// Webpack to bundle our assets like JavaScript and CSS into a single file which then get imported in our HTML page
// Babel transpiler: trans-pile our ES06 code to ES05 or less as most of the browsers don’t support ES06 natively
var path = require("path");
var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "src");
var config = {
    entry: SRC_DIR + "/app/index.js", //top file or set of files to include in a build
    output: {
        path: DIST_DIR + "/app",
        filename: "bundle.js", //name of the file want Webpack to build - javascript files will be bundled into bundle.js, need to import it into index.html
        publicPath: "/app/"
    },
    module: {
        rules: [{ //loaders are how webpack learns new functionality - preprocess files as you load them
            test: /\.js?/, //tests what kind of files to run through the loader
            include: SRC_DIR,
            loader: "babel-loader",
            query: { //pass options to the loader
                presets: ["@babel/react", "@babel/preset-env"] //uses the presets that were installed earlier
            }
        },
        {
            //loaders are how webpack learns new functionality - preprocess files as you load them
            test: /\.css$/, //tests what kind of files to run through the loader
            loader: "style-loader!css-loader",
        }]
    }
};
module.exports = config; //export config document