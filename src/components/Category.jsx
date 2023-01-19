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
    background: rgba(245, 118, 33, 0.88);
    border-radius: 50%;
    width: 7rem;
    height: 7rem;
    text-decoration: none;
    cursor: pointer;
    transform: scale(0.6);
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

h4 {
    color: white;
    font-size: 1.25rem;
    padding: 0rem;
}

svg {
    color: white;
    transform: scale(2);
    margin-bottom: 1rem;
}

&.active {
    background: linear-gradient(to right, #f27121, #e94057);
`;



export default Category;