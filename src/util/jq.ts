function addClass(obj: any, cls: string) {
    if (obj) {
        const objClass = obj.className; //获取 class 内容.
        const blank = objClass != '' ? ' ' : ''; //判断获取到的 class 是否为空, 如果不为空在前面加个'空格'.
        const added = objClass + blank + cls; //组合原来的 class 和需要添加的 class.
        obj.className = added; //替换原来的 class.
    }
}

function removeClass(obj: any, cls: string) {
    if (obj) {
        let objClass = ' ' + obj.className + ' '; //获取 class 内容, 并在首尾各加一个空格. ex) 'abc    bcd' -> ' abc    bcd '
        objClass = objClass.replace(/(\s+)/gi, ' '); //将多余的空字符替换成一个空格. ex) ' abc    bcd ' -> ' abc bcd '
        let removed = objClass.replace(' ' + cls + ' ', ' '); //在原来的 class 替换掉首尾加了空格的 class. ex) ' abc bcd ' -> 'bcd '
        removed = removed.replace(/(^\s+)|(\s+$)/g, ''); //去掉首尾空格. ex) 'bcd ' -> 'bcd'
        obj.className = removed; //替换原来的 class.
    }
}

function hasClass(obj: any, cls: string) {
    if (obj) {
        const objClass = obj.className; //获取 class 内容.
        const objClassList = objClass.split(/\s+/); //通过split空字符将cls转换成数组.
        for (const x in objClassList) {
            if (objClassList[x] == cls) {
                //循环数组, 判断是否包含cls
                return true;
            }
        }
        return false;
    }
}

export { addClass, removeClass, hasClass };
