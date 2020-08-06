import React, {useEffect} from 'react';
import { Image, Button, Rating, Card} from 'semantic-ui-react';
import { Link} from 'react-router-dom';


function TrendingCard(props) {

    useEffect(() => {
      
    }, [props.vote_average]);
    return(  
    <Card>
      <Image src={"https://image.tmdb.org/t/p/w500/" + props.backdrop} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{props.title}</Card.Header>
        <Card.Meta>{props.releasedate}</Card.Meta>
        <Card.Description>
          {props.synopsis.slice(0, 80) + " ..."}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Rating disabled maxRating={5} rating={props.vote_average} icon='star' /> 
        <Button basic color={"blue"} as={Link} to={{pathname: props.path + props.id, state: {id: props.id}}}>    
        Read more
         </Button>
      </Card.Content>
    </Card>);
}

export default TrendingCard;