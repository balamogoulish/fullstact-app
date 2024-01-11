const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const port = 4000;

//다른 포트에서도 사용할 수 있도록 cors 선언
app.use(cors());
app.use(express.json())
dotenv.config();

//MongoDB와 연결함
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log('MongoDB Connected...')
})
.catch(err=>console.log(err))

app.get('/', (req, res)=>{
    res.send('안녕하세요!');
});

//에러 처리기
app.use((error, req, res, next)=>{
    res.status(err.status || 500); //error status 코드가 없다면, 서버 문제이므로 500을 전송함
    res.send(error.message || '서버에서 에러가 발생했습니다.');
})

//uploads 폴더 내의 파일에 접근할 수 있게 함
//path.join을 통해 절대경로로 설정함
app.use(express.static(path.join(__dirname,'../uploads')));

app.listen(port, ()=>{
    console.log(`${port}번에서 실행이 되었습니다.`)
});