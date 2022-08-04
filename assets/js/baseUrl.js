
const baseUrl1 = "http://www.liulongbin.top:3007"

$.ajaxPrefilter(Option => {
    if (Option.url.includes('/my')) {
        Option.headers = {
            Authorization: localStorage.getItem('token'),
        }
    }
    Option.url = baseUrl1 + Option.url

    Option.complete = (res) => {
        // 在 complete 回调函数中，可以使用 res.responseJSON 拿到服务器响应回来的数据
        if (res.responseJSON.status === 1 && res.responseJSON.message === "身份认证失败！") {
            //  强制清空 token
            localStorage.removeItem("token");
            location.href = "/login.html"
        } else {
            console.log('没有token');
        }
    }
})