var $ = {
    //get方法
    get: function (url,handler) {
        var xhr = new XMLHttpRequest();
        xhr.open("get", url);
        xhr.responseType = "json";
        xhr.send();
        xhr.onreadystatechange = function () {
            if (this.readyState===4){
                if (this.status===200){
                    var response = this.response;
                    handler.call(this,response);
                }
            }
        };
    },
    //post提交
    post: function (url,data,handler,type) {
        var xhr = new XMLHttpRequest();
        xhr.open("post", url);
        xhr.responseType = "json";
        if (!type){
            type="application/x-www-form-urlencoded";
        }
        xhr.setRequestHeader("Content-Type", type);
        xhr.send(data);
        xhr.onreadystatechange = function () {
            if (this.readyState===4){
                if (this.status===200){
                    var response = this.response;
                    handler.call(this,response);
                }
            }
        }
    }
};