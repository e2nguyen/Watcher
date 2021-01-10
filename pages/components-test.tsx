import Button from "components/button/button"

function Playground() {
  return ( <>
    <Button onClick={() => console.log("you clicked me")}
    backgroundURL = "https://64.media.tumblr.com/tumblr_lri7cqp5sD1qd8xmf.gif"
    > 
    this is primary button </Button>
    <Button onClick={() => console.log("you clicked me")}
    backgroundURL = "https://64.media.tumblr.com/0b3f814266ec5ebdac890b1e9bb7f2e6/d7d2397e3c8eb503-2d/s75x75_c1/de5e1bdab000062aab416bc45ddf69db4036d1d5.gifv"
    > 
    this is another cute button </Button>
  </> )
}

export default Playground;