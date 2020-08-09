import React from 'react';
import { Container, Grid} from 'semantic-ui-react';
import TrendingCard from './TrendingCard'

function Movies(props) {

    return(
      <Container>
        <Grid  centered columns={6} doubling >

        
            {props.movies.results.map( (movie) => {
              return (
                movie.title ? <Grid.Column > 
                                <TrendingCard 
                                  title={movie.title} 
                                  releasedate={movie.release_date} 
                                  synopsis={movie.overview} 
                                  vote_average={movie.vote_average} 
                                  backdrop={movie.poster_path} 
                                  key={movie.id} id={movie.id} 
              path={props.path}/></Grid.Column>  : "");
            })
            }
      </Grid>
    </Container>
    );
  }

export default Movies;