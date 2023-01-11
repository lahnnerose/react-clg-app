import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';
import { GiNoodles, GiChopsticks } from 'react-icons/gi';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';


function Category() {
  return (
    <List>
        <SLink to={"/cuisine/Italian"}>
            <FaPizzaSlice/>
            <h4>Italian</h4>
        </SLink>
        <SLink to={"/cuisine/American"}>
            <FaHamburger/>
            <h4>American</h4>
        </SLink>
        <SLink to={"/cuisine/Thai"}>
            <GiNoodles/>
            <h4>Thai</h4>
        </SLink>
        <SLink to={"/cuisine/Japanese"}>
            <GiChopsticks/>
            <h4>Japanese</h4>
        </SLink>
    </List>
  )
}

const List = styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem 0rem;
    color: rgb(58, 58, 58);
`
const SLink = styled(NavLink)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    background: linear-gradient(35deg, #494949, #313131);
    border-radius: 50%;
    width: 7rem;
    height: 7rem;
    text-decoration: none;
    cursor: pointer;
    transform: scale(0.5);

h4 {
    color: rgb(255, 255, 255);
    font-size: 1.25rem;
    padding: 0rem;
}

svg {
    color: rgb(255, 255, 255);
    transform: scale(2);
    margin-bottom: 1rem;
}

&.active {
    background: linear-gradient(to right, #f27121, #e94057);
`;



export default Category;