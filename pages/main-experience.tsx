import Button from "components/button/button";
import Avatar from "components/Avatar";
import CustomDiv from "components/CustomDiv";

function MainExperience() {
  return ( <>
    <CustomDiv
      className="sampleDiv"
      color="green"
      header="first div"
      height="500px"
      width="100%"
    >
      text above the Avatar here
      <br></br>
      <Avatar
        alt="alt text herefsafdsafas"
        className="avatarClassNameOne"
        src="/character-sprites-sample.png"
      >
        <p>avatar component 1</p>
      </Avatar>
      <Button 
        onClick={() => console.log("you clicked the cat!")}
        backgroundSize="50px"
        backgroundURL="/cat.png"
        height="50px"
        width="50px"
      />
    </CustomDiv>
    <CustomDiv
      className="sampleDiv2"
      color="pink"
      header="second div"
      height="500px"
      width="100%"
    >
      2nd exp
      <Button 
        onClick={() => console.log("you clicked the cat!")}
        backgroundSize="50px"
        backgroundURL = "/girl-black.png"
        height="50px"
        width="50px"
      /> 
    </CustomDiv>
    <CustomDiv
      className = "sampleDiv2"
      color = "grey"
      header = "third div"
      height = "500px"
      width = "100%"
    >
      3rd exp
      <Button
        onClick={() => console.log("you clicked the cat!")}
        backgroundSize="50px"
        backgroundURL = "/girl-pink.png"
        height="50px"
        width="50px"
      /> 
    </CustomDiv>  
  </>)
}

export default MainExperience;
