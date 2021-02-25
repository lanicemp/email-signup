
import EmailSignup from './components/EmailSignup'
import styled from "styled-components";
import './App.css';


const Triangle = styled.div`
  width: clamp(25vw, 50vw, 65vw);
  height: clamp(25vw, 60vw, 50vh);
  background: linear-gradient(
    to top right,
    #fff 0%,
    #fff 50%,
    #3abbced9 50.5%,
    #086794 100%
  );
  position: absolute;
  right: 10px;
  z-index: -1;
`;
export const Logo = styled.div`
  display: flex;
  position: absolute;
  top: 25px;
  left: 35px;
`;

export const H3 = styled.h3`
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "#00ABC4"};
  color: ${(props) => (props.fontColor ? props.fontColor : "#FFF")};
  padding: 3px 4px;
`;



function App() {
  return (
    <div className="App">
      <Logo>
        <H3>Work</H3>
        <H3 backgroundColor="#FFF" fontColor="#00ABC4">
          Reactor
        </H3>
      </Logo>

     
     <Triangle/>
      <EmailSignup/>
       
        
        
     
    </div>
  );
}

export default App;
