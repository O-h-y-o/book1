import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import {FaCircle} from 'react-icons/fa';
import styled from 'styled-components';


const Weekend = (props) => {
  const day = props.week;
  const number = props.number;

  const [rating, setRating] = useState(null);

  const moveHref = () => {
    document.location.href = "/"
  }

  return (
    <>
      <Title><Day>{day[number]}요일</Day>평점 남기기</Title>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;

        return (
          <RatingWrap>
            <Input type="radio" name="rating" value={ratingValue} onClick={() => setRating(ratingValue)} />
            <FaCircle className="star" color={ratingValue <= rating ? "yellow" : "gray"} size={35} />
          </RatingWrap>
        )
      }
      )}
      <LinkTo>
        <div onClick={moveHref}>평점남기기</div>
      </LinkTo>
    </>
  )
}

const Day = styled.span`
  margin: 10px;
  display: inline-block;
  background-color: orange;
  border-radius: 5px;
  color: #fff;
  font-size: 20px;
  font-weight: 800;
  padding: 5px;
`;

const Title = styled.div`
  font-weight: 800;
  font-size: 20px;
  margin: 50px auto 15px;
`;

const RatingWrap = styled.label`
  margin : 5px;
  cursor: pointer;
`;

const Input = styled.input`
  display: none;
  margin : 10px;
`;

const LinkTo = styled.div`
  width: 240px;
  height: 50px;
  margin: 10px auto;
  background-color: purple;
  border-radius: 5px;

  & div {
    font-size: 20px;
    color: #fff;
    text-decoration: none;
    line-height: 2.5;
    display: block;
    cursor: pointer;
  }
`;

export default Weekend;