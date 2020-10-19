import React from "react";
import { Link } from "react-router-dom";
import QuestionOfTheDay from "./QuestionOfTheDay";
import { Button } from 'reactstrap';


function Home(props) {
  
  return (
  
      <div>
      <QuestionOfTheDay/>
      <Link to="/Parameters">
      <Button className="largeBtn"color="primary" size="lg" block>Start to play</Button>
      </Link>
      <br/>
      </div>
    
     
  );
}

export default Home;
