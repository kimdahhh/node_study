// ***** exports 객체에 함수 추가 *****
// 라우트를 새로운 파일로 분리해서 관리
const httpStatus = require("http-status-codes"),
    htmlContentType = {
        "Content-Type" : "text/html"
    },
    routes = {                                      // POST 및 GET 요청에 매핑된 라우트를 저장할 routes 객체의 정의
        "GET" : {
            "/info": (req, res) => {
                res.writeHead(httpStatus.OK, {
                    "Content-Type" : "text/plain"
                });
                res.end("Welcome to the Info Page!");
            }
        },
        "POST" : {}
    };

    exports.handle = (req, res) => {                // 라우트에 따른 콜백 함수를 처리하기 위한 함수 handle의 생성
        try {
            if (routes[req.method] && routes[req.method][req.url]) {
                routes[req.method][req.url](req, res);
            } else {
                res.writeHead(httpStatus.NOT_FOUND, htmlContentType);
                res.end("<h1>No such file exists</h1>");
            }
        } catch (ex) {
            console.log("error" + ex);
        }
    };

    exports.get = (url, action) => {                // main.js 로부터 routes에 등록하기 위한 get 및 post 함수 생성
        routes["GET"][url] = action;
    };

    exports.post = (url, action) => {              
        routes["POST"][url] = action;
    }
    
    // get 또는 post를 호출하면 해당 라우트에 도달할 때 실행할 라우트와 함수를 전달
    // 이 함수는 라우트를 routes 객체에 추가해 등록, handle 함수에 의해 사용
    // 다른 파일들은 exports 객체 내여서 접근 권한 가짐 -> get, post, handle 함수는 router.js 내에서 접근 가능