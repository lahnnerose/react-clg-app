import { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import React from 'react';


function Recipe() {
  let params = useParams();
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState("instructions");


 useEffect(() => {
    fetchDetails();
  }, [params.name]);

  const fetchDetails = async () => {
    const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
    const detailData = await data.json();
    setDetails(detailData);
    console.log(detailData);
  };

 


// Recipe Details

  return (
    <DetailWrapper>
      <div>
        <h2>{details.title}</h2>
        <img src={details.image} alt={details.title} />
      </div>
      <Info>
        <Button className={activeTab === "instructions" ? "active" : ""} onClick={() => setActiveTab("instructions")}>Instructions
        </Button>

        <Button className={activeTab === "ingredients" ? "active" : ""} onClick={() => setActiveTab("ingredients")}>Ingredients
        </Button>
        {activeTab === "instructions" && (
        <div>
          <h3 dangerouslySetInnerHTML={{__html: details.summary}}></h3>
          <h3 dangerouslySetInnerHTML={{__html: details.instructions}}></h3>
        </div>

        )}

        {activeTab === "ingredients" && (
        <ul>
          {details.extendedIngredients.map((ingredient) => (
          <li key={ingredient.id}>{ingredient.original}</li>
          ))}
        </ul>
        )}
      </ Info>
      </ DetailWrapper>
  );
}


// STYLING

const DetailWrapper = styled.div`
 color: black;
 margin-top: 10rem;
 margin-bottom: 5rem;
 display: flex;

 .active {
  background: linear-gradient(35deg, #494949, #313131);
  color: white;
 }

 img {
  border-radius: 2rem;
 }

 h3 {
  text-align: left;
  font-size: 1rem;
  color: #313131;

 }

 h2 {
  margin-bottom: 2rem;

 }

 li {
  font-size: 1rem;
  line-height: 2.5rem;
 }

 ul {
  margin-top: 2rem;
 }

`;


// const Button = styled.button`
//   padding: 1rem; 2rem;
//   color: #313131;
//   background: white;
//   border: 2px solid black;
//   margin-right: 2rem;
//   font-weight: 600;
// `

{/* <button class="button-17" role="button">Button 17</button> */}

const Button = styled.button`
  background-color: #fff;
  border-radius: 2rem;
  border-style: none;
  box-shadow: rgba(0, 0, 0, .2) 0 3px 5px -1px,rgba(0, 0, 0, .14) 0 6px 10px 0,rgba(0, 0, 0, .12) 0 1px 18px 0;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  height: 48px;
  letter-spacing: .5px;
  padding: 2px 24px;
`

const Info = styled.div`
 margin-left: 10rem;
`

export default Recipe;
