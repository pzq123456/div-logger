// style for each log type
export const logStyles = {
    log: 'color: #fff',
    warn: 'color: #ff0',
    error: 'color: #f00',
    info: 'color: #0f0',
    debug: 'color: #1ff',
};

// 递归渲染 obj 对象，创建可折叠的树形结构
export function renderObject(obj, parent) {
    // 如果 obj 是数组，则渲染数组
    if (Array.isArray(obj)) {
        renderArray(obj, parent);
        return;
    }

    let button = document.createElement('button');
    // 
    button.style.cssText = 'background-color: #3da1ac69; color: #fff; border: 0; cursor: pointer; padding: 0 5px';
    button.textContent = '+';
    button.onclick = function () {
        ul.style.display = ul.style.display === 'none' ? 'block' : 'none';
        button.textContent = ul.style.display === 'none' ? '+' : '-';
    };
    parent.appendChild(button);
    // 渲染大括号
    let span = document.createElement('span');
    span.textContent = '{';
    span.style.cssText = 'color: orange';
    parent.appendChild(span);

    let ul = document.createElement('ul');
    // ul 背景色
    ul.style.cssText = 'background-color: #3da1ac69';
    // ul 显示状态
    ul.style.display = 'none';
    // ul 下边框
    ul.style.borderBottom = '1px solid rgba(255, 255, 255, 0.1)';
    parent.appendChild(ul);
    for (let key in obj) {
        let li = document.createElement('li');
        ul.appendChild(li);
        let span = document.createElement('span');
        // style for key
        span.style.cssText = 'color: orange';
        span.textContent = key;
        // add : after key
        span.textContent += ': ';
        li.appendChild(span);
        if (typeof obj[key] === 'object') {
            renderObject(obj[key], li);
        } else if (
            typeof obj[key] === 'function' ||
            typeof obj[key] === 'symbol'
        ) {
            let pre = document.createElement('pre');
            let code = document.createElement('code');
            code.textContent = obj[key];

            code.className = 'language-js';
            pre.appendChild(code);
            li.appendChild(pre);
        }
        else{
            let span = document.createElement('span');
            // style for value
            span.style.cssText = 'color: #fff';
            span.textContent = obj[key];
            li.appendChild(span);
        }
    }
    // 渲染大括号
    let span2 = document.createElement('span');
    span2.textContent = '}';
    span2.style.cssText = 'color: orange';
    parent.appendChild(span2);
}

// 渲染数组
export function renderArray(arr, parent) {
    let button = document.createElement('button');
    button.textContent = '+';
    // 添加button样式
    button.style.cssText = 'background-color: #3da1ac69; color: #fff; border: 0; cursor: pointer; padding: 0 5px';
    button.onclick = function () {
        ul.style.display = ul.style.display === 'none' ? 'block' : 'none';
        button.textContent = ul.style.display === 'none' ? '+' : '-';
    };
    parent.appendChild(button);

    let ul = document.createElement('ul');
    ul.style.display = 'none';
    ul.style.borderBottom = '1px solid rgba(255, 255, 255, 0.8)';
    parent.appendChild(ul);
    for (let i = 0; i < arr.length; i++) {
        let li = document.createElement('li');
        ul.appendChild(li);
        if (typeof arr[i] === 'object') {
            renderObject(arr[i], li);
        } else {
            let span = document.createElement('span');
            span.textContent = arr[i];
            li.appendChild(span);
        }
    }
}