
const baseUrl1 = "http://www.liulongbin.top:3007"

$.ajaxPrefilter(Option=> {
    Option.url=baseUrl1+Option.url
})