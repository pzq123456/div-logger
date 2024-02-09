import { renderObject, logStyles } from './renderer.js';

const divName = 'console-output';

export function renderConsoleToDiv(customDivId) {
    let targetDiv = customDivId ? document.getElementById(customDivId) : document.getElementById(divName);
    if (!targetDiv && !customDivId) {
        // console.error('Error: No div found with id "console-output" in the document.');
        // 打印警告，创建一个默认的 div 并添加到 body 上
        console.warn('Warning: No div found with id "console-output" in the document. Creating a default div and appending to body.');
        const div = document.createElement('div');
        div.id = divName;
        div.style.cssText = 'position: fixed; bottom: 0; left: 0; width: 100%; height: 400px; overflow: auto; background-color: #000; color: #fff; padding: 10px; box-sizing: border-box; font-family: monospace; font-size: 14px;';
        document.body.appendChild(div);
        targetDiv = div;
    }
    const consoleTypes = ['log', 'warn', 'error', 'info', 'debug'];

    consoleTypes.forEach(type => {
        const oldConsole = console[type];
        console[type] = function (...args) {
            args.forEach(arg => {
                if (typeof arg === 'object') {
                    renderObject(arg, targetDiv);
                } else {
                    const div = document.createElement('div');
                    div.style.cssText = logStyles[type];
                    div.style.borderBottom = `1px dashed ${logStyles[type].split(':')[1]}`;
                    div.textContent = arg;
                    targetDiv.appendChild(div);
                }
            });
            oldConsole.apply(console, args);
        };
    });

    window.onerror = function (message, source, lineno, colno, error) {
        console.error(message, source, lineno, colno, error);
        return true;
    };

}

