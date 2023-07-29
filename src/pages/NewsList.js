// import React from 'react';
// import axios from 'axios';
//
// const App = () => {
// const error = null ;
//     const getNewsData = async ()=>{
//         try {
//             const dataInfo = {
//                 path: `https://newsapi.org/v2/everything?q=tesla&from=2023-06-29&sortBy=publishedAt&apiKey=f1c87e2bb86248de9f9492e513f93e1f`,
//                 method: 'GET',
//             };
//             const {data} = await axios({
//                 method: dataInfo.method,
//                 url: dataInfo.path,
//             })
//         }　catch (error){
//             // error
//         }
//
//     }
//
//     return (
//         <div>
//           <hi>Hello, world</hi>
//             <div>{getNewsData}</div>
//         </div>
//     );
// };
//
// export default App;

import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Button, Card, Col, Container, Row} from "react-bootstrap";

const NewsList = () => {
    // 상수, 변수, 상태, 함수 등 정의
    // ***1. 뉴스데이터가 담긴 그릇
    const [newsData, setNewsData] = useState([]);
    // ***2. 데이터를 가져오는 함수선언
    const getNewsList = async () => {
        console.log('+++++++++++++');
        // ***4. 네트워킹 및 데이터 파싱
        try {
            const url = `https://newsapi.org/v2/everything?q=tesla&from=2023-06-29&sortBy=publishedAt&apiKey=f1c87e2bb86248de9f9492e513f93e1f`;
            // const result = await axios.get(url);
            const {data, status} = await axios.get(url);
            console.log('data ? ', data.articles)
            console.log('status ? ', status)
            if (status === 200){
                setNewsData(data.articles);
            }
        } catch (err) {
            console.log('error message : ', err.message)
        }
    }
    // ***3. 자동으로 데이터 가져오기
    useEffect(() => {
        getNewsList();
    }, []);
    return ( // ***5. 화면에 출력
        <Container >
            <h1>News List</h1>
            <Row>
                { newsData && newsData.map((item, i) => (
                    <Col className={"mb-3"} key={i}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img style={{height: '250px', width: '100%'}} variant="top" src={item.urlToImage ? item.urlToImage : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkCMT1rKQSmpSiWrjn460FlW3dI2WThcBiwA&usqp=CAU"} />
                            <Card.Body>
                                <Card.Title>{item.title.slice(0,20)}...</Card.Title>
                                <Card.Text>
                                    {item.description.slice(0,80)}...
                                </Card.Text>
                                <Button variant="primary">Go News</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                ))}
            </Row>

        </Container>
    );
};

export default NewsList;