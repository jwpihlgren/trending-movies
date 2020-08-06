import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Container, Card, Image, Button, Header, Grid, CardGroup} from 'semantic-ui-react';

const genres = [{"id":28,"name":"Action"},{"id":12,"name":"Adventure"},{"id":16,"name":"Animation"},{"id":35,"name":"Comedy"},{"id":80,"name":"Crime"},{"id":99,"name":"Documentary"},{"id":18,"name":"Drama"},{"id":10751,"name":"Family"},{"id":14,"name":"Fantasy"},{"id":36,"name":"History"},{"id":27,"name":"Horror"},{"id":10402,"name":"Music"},{"id":9648,"name":"Mystery"},{"id":10749,"name":"Romance"},{"id":878,"name":"Science Fiction"},{"id":10770,"name":"TV Movie"},{"id":53,"name":"Thriller"},{"id":10752,"name":"War"},{"id":37,"name":"Western"}]

function About(props){

    let loc = useLocation().pathname.replace(props.path, "");
  
    return(
      <Container>
      <Button basic color="blue" as={Link} to={props.path}>Back</Button>
        {props.movies.results.map(movie => {
      return movie.id === Number(loc) ? (<>
        <Header textAlign='center' size='medium'>{movie.title +  " ("+ movie.release_date +")"}</Header>
        <Grid columns={2}>
        <Grid.Column>
        <Image size="large" src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path}
        />
  
     
      </Grid.Column>
  
      <Grid.Column> 
        
        <CardGroup stackable itemsPerRow={2}>
        <Card color="blue">
        <Card.Content>
          <Card.Header>Synopsis</Card.Header>
          <Card.Description>
          {movie.overview}
          </Card.Description>
        </Card.Content>
      </Card>
  
      <Card color="blue">
        <Card.Content>
          <Card.Header>Genre</Card.Header>
          <Card.Description>
          {genres.map((gen) => {
              return movie.genre_ids.includes(gen.id) ? <p>{gen.name}</p> : undefined
             })}
          </Card.Description>
        </Card.Content>
      </Card>
  
      <Card color="blue">
        <Card.Content>
          <Card.Header>Rating</Card.Header>
          <Card.Description>
          {movie.vote_average} / 10
          </Card.Description>
        </Card.Content>
      </Card>
      </CardGroup>
   </Grid.Column>
  </Grid>
        
  
  
  
      </>)
    : <></>;
    })}
      </Container>
    )
  }

export default About;