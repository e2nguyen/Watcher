import Button from "components/button/button"
import AvatarComponent from "components/AvatarComponent"
import CustomDivComponent from "components/CustomDivComponent"

function MainExperience() {
  return ( <>
    <CustomDivComponent 
      className="sampleDiv"
      color="green"
      header="first div"
      height="500px"
      width="100%"
    >
      text above the AvatarComponent here
      <br></br>
      <AvatarComponent
        alt="alt text herefsafdsafas"
        className="avatarClassNameOne"
        imageClassName="imageclass"
        src="/character-sprites-sample.png"
      >
        <p>avatar component 1</p>
      </AvatarComponent>
      <Button 
        onClick={() => console.log("you clicked the cat!")}
        backgroundURL = "/cat.png"
        height = "200px"
        width = "200px"
      />
    </CustomDivComponent>
    <CustomDivComponent 
      className="sampleDiv2"
      color="pink"
      header="second div"
      height="500px"
      width="100%"
    >
      2nd exp
      <Button 
        onClick={() => console.log("you clicked the cat!")}
        backgroundURL = "/girl-black.png"
        height = "200px"
        width = "200px"
      /> 
    </CustomDivComponent>
    <CustomDivComponent 
      className = "sampleDiv2"
      color = "grey"
      header = "third div"
      height = "500px"
      width = "100%"
    >
      3rd exp
      <Button onClick={() => console.log("you clicked the cat!")}
        backgroundURL = "/girl-pink.png"
        height = "200px"
        width = "200px"
      /> 
    </CustomDivComponent>  
  </>)
}

export default MainExperience;
