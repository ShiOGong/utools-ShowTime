window.exports = {
    "showTime": { // 注意：键对应的是 plugin.json 中的 features.code
        mode: "list",  // 用于无需 UI 显示，执行一些简单的代码
        args: {
            // 进入插件时调用
            enter: (action, callbackSetList) => {
                callbackSetList([
                    {
                        title: GetFormattedDate(new Date()),
                        description: '退出',
                        icon: 'showTime.png', // 图标(可选)
                    }
                ]);
            },

            select: (action, itemData, callbackSetList) => {
                window.utools.hideMainWindow()
                window.utools.outPlugin()
            },
        }
    }
}

function GetFormattedDate(date) {
    let month = ("0" + (date.getMonth() + 1)).slice(-2);
    let day = ("0" + (date.getDate())).slice(-2);
    let year = date.getFullYear();
    let hour = ("0" + (date.getHours())).slice(-2);
    let min = ("0" + (date.getMinutes())).slice(-2);
    let seg = ("0" + (date.getSeconds())).slice(-2);
    return year + "-" + month + "-" + day + " " + hour + ":" + min + ":" + seg;
}
