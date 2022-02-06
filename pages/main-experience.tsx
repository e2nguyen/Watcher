import Button from "components/button/button";
import Avatar from "components/Avatar";
import CustomDiv from "components/CustomDiv";

function MainExperience() {
  return ( <>
    <CustomDiv
      color="bg-pink-100"
      header="first div"
      height="h-custom-div-height"
      width="w-custom-div-width"
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
        backgroundImage="bg-cat"
        height="h-50"
        width="w-50"
      />
    </CustomDiv>
    <CustomDiv
      color="bg-emerald-100"
      header="second div"
      height="h-custom-div-height"
      width="w-custom-div-width"
    >
      2nd exp
      <Button 
        onClick={() => console.log("you clicked the cat!")}
        backgroundImage = "bg-girl-black"
        height="h-50"
        width="w-50"
      /> 
    </CustomDiv>
    <CustomDiv
      color = "bg-blue-100"
      header = "third div"
      height = "h-custom-div-height"
      width="w-custom-div-width"
    >
      3rd exp
      <Button
        onClick={() => console.log("you clicked the cat!")}
        backgroundImage = "bg-girl-pink"
        height="h-50"
        width="w-50"
      /> 
    </CustomDiv>  
  </>)
}

export default MainExperience;
