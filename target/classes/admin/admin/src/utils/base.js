const base = {
    get() {
        return {
            url : "http://localhost:8080/jingfangyaoshiliangyongfuwupingtai/",
            name: "jingfangyaoshiliangyongfuwupingtai",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/jingfangyaoshiliangyongfuwupingtai/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "经方药食两用服务平台"
        } 
    }
}
export default base
