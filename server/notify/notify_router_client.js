function stringUtil(str, o) {
    if (typeof str !== "string" || typeof o !== "object") {
        return;
    }
    var regex = /%s\(([a-zA-Z0-9_]{1,15})\)/g,
        i;
    if (regex.test(str)) {
        str = str.replace(regex, function (found, match) {
            return o[ match ];
        });
    } else {
        for (i in o) {
            str = str.replace(/%s/, o[ i ]);
        }
    }
    return str;
}

function getMessageForNotify(notify) {
    let message = "";
    const user = notify.tag;
    switch (notify.notifyType) {
        case EXAMPLE:
            if (isHtml) {
                message = '';
            } else {
                message = '';
            }
        default:
            message = "";
            break;
    }
    return message;
}