import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Card, Col, Container, Row} from "react-bootstrap";

const MovieList = () => {
    const [recipes, setRecipes] = useState([])
    const getRecipesList = async () =>{
        const query = 'italian wedding soup';
        try {
            const url = `https://api.api-ninjas.com/v1/recipe?query=${query}`;
            // const url = `https://api.api-ninjas.com/v1/cats`;
            const options = {
                headers : {
                    'X-Api-Key': `MmJvj/keK8PdTpyBMrn/8g==E2Fuzj1jYNBmCqDR`
                }
            }
            const { data } = await axios.get(url, options);
            console.log('data ? ', data)
            if( data.length > 0 ){
                setRecipes(data);
            }
        } catch (err){
            console.log('error message : ', err.message)
        }
    }
    useEffect(() => {
        getRecipesList();
    }, []);
    return (
        <Container >
            <h1>Recipes List</h1>
            <Row>
                { recipes && recipes.map((item, i)=>(
                    <Col className={'mb-3'} key={i}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">{item.servings}</Card.Subtitle>
                                <Card.Text>
                                    {item.instructions}
                                </Card.Text>
                                {/*<Card.Link href="#">Card Link</Card.Link>*/}
                                {/*<Card.Link href="#">Another Link</Card.Link>*/}
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default MovieList;