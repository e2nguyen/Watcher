import CustomImageComponent from 'components/CustomImageComponent';

function ComponentsPlayground() {
  return(
    <>
      <style jsx>
        {`
          h1 {
            text-align: center;
          }
        `}
      </style>
      <div>
        <h1>PLAYGROUND</h1>
        <div className="custom-image-component-playground-container">
          <h3>Custom Image Component</h3>
          <CustomImageComponent
            alt="sprites"
            className="custom-image-component-example"
            height="450"
            src="/character-sprites-sample.png"
            width="750"
          />
        </div>  
      </div>
    </>
  );
};

export default ComponentsPlayground;