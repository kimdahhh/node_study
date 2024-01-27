const cities = require("cities");
var myCity = cities.zip_lookup("10016");
//console.log(myCity);


// callback 함수 쓸 때 function 대신 => 사용

exports.addNum = (x,y) => {
    return x+y;
}

// 서버 연결
// 1. 바로 app 에서 연결해서 호출
/*
const port = 3000,
      http = require("http"),
      httpStatus = require("http-status-codes"),
      app = http.createServer((request, response) => { // 요청이 항상 먼저 그 뒤에 응답
        console.log("Received an incoming request!");
        response.writeHead(httpStatus.OK, {
            "Content-Type" : "text/html"    
        });
        
        let responseMessage = "<h1>Hello, node</h1>";
        response.write(responseMessage);
        response.end();
        console.log(`Sent a response : $(responseMessage)`);
      });

*/
// 2. 이벤트 리스너를 추가 후 서버 구현
/*
const port = 3000, 
    http = require("http"),
    httpStatus = require("http-status-codes"),
    app = http.createServer();

    app.on("request", (req,res) => { // 
        // 요청 이벤트 핸들러 추가해 들어오는 데이터 읽기
        // 서버에 대한 요청이 있을 때마다 콜백 함수에서 코드 실행
        // post 된 요청 처리
        var body = [];                  // 청크 콘텐츠를 위한 배열 선언
        
        req.on("data", (bodyData) => {  // 또 다른 콜백 함수에서 처리
            body.push(bodyData);        // body 배열에 수신 데이터 추가
        }); 
        
        req.on("end", () => {                           // 데이터 전송 종료시 코드 수행
            body = Buffer.concat(body).toString();      // body 배열의 string 텍스트 변환
            console.log(`Request Body Conents : ${body}`);  // 콘솔에 요청 콘텐츠 로깅
        });

        console.log(`method : ${getJSONString(req.method)}`);   // 사용된 http 메소드 로그
        console.log(`url : ${getJSONString(req.url)}`);         // 요청된 url 의 로그
        console.log(`headers : ${getJSONString(req.headers)}`);  // 요청 헤더

        res.writeHead(httpStatus.OK, {
            "Content-Type" : "text/html"
        });

        let responseMessage = "<h1>This will show on the screen.</h1>";
        // 요청 로깅
        //console.log(req.method);    // 사용된 http 메소드 로그
        //console.log(req.url);       // 요청된 url 의 로그
        //console.log(req.headers);   // 요청 헤더
        

        // 요청 데이터 로깅
        const getJSONString = (obj) => {
            return JSON.stringify(obj, null, 2);
        }

        res.end(responseMessage); // html 로 응답
    });

    app.listen(port); // 어플리케이션 서버에 3000번 포트를 수신하도록 한다.
*/

// 3. 간단 웹 서버 예제
/*
const port = 3000,
      http = require("http"),
      httpStatus = require("http-status_codes"),
      app = http.
        createServer((req, res) => {
            res.writeHead(httpStatus, OK, {
                "Content-Type" : "text/html"
            });
            let responseMessage = "<h1>simple Web Example</H1>";
            res.end(responseMessage);
        })
        .listen(port);
*/

// 간단한 라우팅
// 라우트란 "/" : 애플리케이션의 홈페이지를 의미 
const routeResponseMap = {  // 요청에 따른 라우트의 매핑 정의
    "/info"     : "<h1>Info page</h1>",
    "/contact"  : "<h1>Contact Us</h1>",
    "/about"    : "<h1>Learn More About Us</h1>",
    "/hello"    : "<h1>Say hello by emailing us here</h1>",
    "/error"    : "<h1>Sorry the page you are looking for is not here.</h1>"
};

const port = 3000,
    http = require("http"),
    httpStatus = require("http-status-codes"),
    app = http.createServer((req, res) => {
            res.writeHead(200, {
                "Content-Type" : "text/html"
            });
            
            if (routeResponseMap[req.url]) {    // 요청 라우트가 정의된 맵에 있는지 체크
                res.end(routeResponseMap[req.url]);
            } else {
                setTimeout(() => {
                    res.end("<h1>simple route page</h1>");  // 기본 html 문구 출력
                }, 2000);
            }
        });

    app.listen(port);
console.log(`The server has started and is listening on port number : ${port}`);

