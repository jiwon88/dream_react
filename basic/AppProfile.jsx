import './App.css';
import Avartar from './components/Avartar';
import Profile from './components/Profile';

function AppProfile() {
  const handleClick = (event) => {
    console.log(event);
    alert("버튼이 클릭됨!");
  };
  return (
    <>
      <button onClick={handleClick}>버튼</button>

      <Avartar
        image= 'https://images.unsplash.com/photo-1678260102701-67dddc6b73d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1442&q=80' 
        isNew={true}/>
      <Profile 
        image = 'https://images.unsplash.com/photo-1678260102701-67dddc6b73d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1442&q=80'
        name = 'James Kim' 
        title = '프론트엔드 개발자'
        isNew = {true}
      />
      <Profile 
        image = 'https://images.unsplash.com/photo-1678188575046-4cad367dd8df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDIyfHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=700&q=60'
        name = 'Anna Young'
        title = '백엔드 개발자'/>
      <Profile 
        image = 'https://images.unsplash.com/photo-1624655007001-65a0d6298853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDU1fHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=700&q=60'
        name = 'Bob Yu'
        title = '프론트엔드 개발자' />
    </>
  );
}

export default AppProfile;
