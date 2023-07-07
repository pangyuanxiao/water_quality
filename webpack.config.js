import { resolve as _resolve } from 'path';

import HTMLWebpackPlugin from 'html-webpack-plugin'; // 自动生成 html 插件
// eslint-disable-next-line @typescript-eslint/no-var-requires
//const nodeExternals = require('webpack-node-externals');
export const mode = "none";
export const entry = "./src/index.ts";
export const output = {
    path: _resolve(__dirname, 'dist'),
    filename: "barry.js",
    //配置打包环境,告诉webpack不使用箭头函数
    environment: {
        arrowFunction: false
    }
};
export const module = {
    rules: [
        {
            test: /\.ts$/,
            use: [
                {
                    // 指定加载器
                    loader: "babel-loader",
                    // 设置 babel
                    options: {
                        // 设置预定义环境
                        presets: [
                            [
                                // 指定环境插件
                                "@babel/preset-env",
                                {
                                    // 要兼容的目标浏览器
                                    targets: {
                                        "chrome": "88",
                                        "ie": "11"
                                    },
                                    // core-js 使用版本
                                    "corejs": "3",
                                    "useBuiltIns": "usage"
                                }
                            ]
                        ]
                    }
                },
                "ts-loader"
            ],
            exclude: /node-modules/
        }
    ],
    //target: 'node', 设置目标为 Node.js 环境
    externals: [
     // nodeExternals(),插件
      {
        // 排除 lodash 库
        //'lodash': 'commonjs lodash'
      }
    ],
};
export const plugins = [
    new HTMLWebpackPlugin({ template: "./src/index.html" })
];
export const resolve = {
    extensions: ['.ts', '.js']
};