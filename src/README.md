# div-logger
frontend debug UI for console.

## Introduction

**div-logger** is a lightweight JavaScript library that redirects messages, errors, and other outputs from the browser console directly into a specified `<div>` element on a web page. With this package, frontend developers can easily view and analyze console outputs without the need to open developer tools, thus enhancing development efficiency and debugging experience.

### Key Features:
- **Easy to Use:** Integrates seamlessly into existing projects with just a few lines of code.
- **Real-time Output:** Console messages are displayed in real-time within the specified `<div>`, facilitating immediate observation.
- **Improved Efficiency:** Eliminates the need for frequent switching to developer tools, speeding up development and debugging processes.
- **Customizable:** Supports custom output styles and positions to meet the needs of different projects.

## Usage Example

```javascript
import {renderConsoleToDiv} from 'div-logger';
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
```

## Supported Environments

Compatible with modern browser environments and mainstream frontend frameworks.

## GitHub Repository

[https://github.com/pzq123456/div-logger](https://github.com/pzq123456/div-logger)

## Author

[pzq](https://github.com/pzq123456/)

## License

This project is licensed under the MIT License.
