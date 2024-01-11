const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors')
const port = 4000;

//다른 포트에서도 사용할 수 있도록 cors 선언
app.use(cors());
app.use(express.json())

app.get('/', (req, res)=>{
    res.send('안녕하세요!');
});

app.post('/', (req, res)=>{
    console.log(req.body);
    res.json(req.body);
});

//uploads 폴더 내의 파일에 접근할 수 있게 함
//path.join을 통해 절대경로로 설정함
app.use(express.static(path.join(__dirname,'../uploads')));

app.listen(port, ()=>{
    console.log(`${port}번에서 실행이 되었습니다.`)
});