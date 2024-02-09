import {renderConsoleToDiv} from './src/logger.js';
import { myObj } from "./test.js";
import { marked } from "https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js";
// 异步获取 README.md 文件内容并渲染到页面
fetch('README.md')
    .then(response => response.text())
    .then(text => {
        document.getElementById('content').innerHTML = marked.parse(text);
    })
renderConsoleToDiv();
console.log(myObj);
console.log('Hello, world!');
