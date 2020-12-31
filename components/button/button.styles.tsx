import CSS from "csstype";
import styled from '@emotion/styled'
import { css, jsx } from "@emotion/react"; 

const divStyles: CSS.Properties = {
    position: "relative",
    padding: "1rem",
    color: 'green'
  };

const divStyle = css({...divStyles});

const Button = styled.button`
    color: ${props => props.color}
`

export default divStyle;