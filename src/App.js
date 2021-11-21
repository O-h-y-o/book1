import './App.css';
import styled from 'styled-components';
import { Route , Link } from 'react-router-dom';
import Weekend from './Weekend';

function App() {

  let randomRatings = [0,0,0,0,0,0,0];
  for(let i=0; i<randomRatings.length; i++) {
    randomRatings[i] = Math.floor(Math.random() * 5) +1;
  }

  let noneStars = [0,0,0,0,0,0,0];
  for(let i=0; i<randomRatings.length; i++) {
    noneStars[i] = 5-randomRatings[i]
  }

  let week = ['월','화','수','목','금','토','일'];
  return (
    <Wrap>
      <ReviewModal>
        <Route path='/' exact>
          <ReviewTitle>
            내 일주일은?
          </ReviewTitle>

          <Center>
          {week.map((week, index) => {
            console.log(index)
            return (
                <RatingArea>
                  <Day>{week}</Day>
                  <Stars>
                    {[ ...Array(randomRatings[index])].map(() => {
                      return <YellowStars />
                    })}
                    {[ ...Array(noneStars[index])].map(() => {
                      return <NoneStars />
                    })}
                  </Stars>
                  
                  <Link to = {week}>
                    <CheckRating />
                  </Link>
                </RatingArea>
            )
          })}
          </Center>
        </Route>
        
          <Route path='/월'>
            <Weekend week={week} 
              number={0}/>
          </Route>
          <Route path='/화'>
            <Weekend week={week} 
              number={1}/>
          </Route>
          <Route path='/수'>
            <Weekend week={week} 
              number={2}/>
          </Route>
          <Route path='/목'>
            <Weekend week={week} 
              number={3}/>
          </Route>
          <Route path='/금'>
            <Weekend week={week} 
              number={4}/>
          </Route>
          <Route path='/토'>
            <Weekend week={week} 
              number={5}/>
          </Route>
          <Route path='/일'>
            <Weekend week={week} 
              number={6}/>
          </Route>

      </ReviewModal>
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 100%;
`;

const ReviewModal = styled.div`
  width: 400px;
  height: 700px;
  margin: 100px auto;
  text-align: center;
  border: 1px solid #999;
  border-radius: 5px;
`;

const Center = styled.div`
  margin:auto;
`;

const ReviewTitle = styled.div`
  margin-top: 100px;
  margin-bottom: 20px;
  font-size: 25px;
  font-weight: 900;
`;

const RatingArea = styled.div`
  display: flex;
  margin: 30px 80px;
`;

const Day = styled.div`
  font-weight: 600;
  font-size:18px;
  margin-right: 10px;
`;

const Stars = styled.div`
  display: flex;
`;

const YellowStars = styled.div`
  width: 30px;
  height: 30px;
  background-color: yellow;
  border-radius: 100%;
  margin: auto 4px;
`;

const NoneStars = styled.div`
  width: 30px;
  height: 30px;
  background-color: gray;
  border-radius: 100%;
  margin: auto 4px;
`;

const CheckRating = styled.div`
  border-top: 15px solid transparent;
  border-bottom: 15px solid transparent;
  border-left: 30px solid purple;
`;

export default App;
