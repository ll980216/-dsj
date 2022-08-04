const getUserInfo = () => {
    $.ajax({
        type: 'GET',
        url: '/my/userinfo',
        data: null,
        // headers: {
        //     Authorization: localStorage.getItem("token")
        //  },
        success: res => {
            console.log(res)

            //得到的res.data传给reder当实参
            const { status, message } = res
            if (status !== 0) return layer.msg(message)
            rederAvatar(res.data)
        }
    })
}

const rederAvatar = data => {
    let name = data.nickname || data.username
    console.log(name);
    $('#welcome').html('欢迎' + name)
    if (data.user_pic !== null) {
        // 渲染图片头像
        $(".layui-nav-img").attr("src", user.user_pic).show();
        $(".text-avatar").hide();
    } else {
        // 渲染文本头像
        $(".layui-nav-img").hide();
        let firstName = name[0].toUpperCase();
        $(".text-avatar").html(firstName);
    }

}
$("#exitBtn").click(() => {
    layer.confirm(
        "确定退出登录？",
        { icon: 3, title: "提示" },
        function (index) {
            // 清空本地存储里面的 token
            localStorage.removeItem("token");
            // 重新跳转到登录页面
            location.href = "/login.html";
        }
    )
});


getUserInfo()