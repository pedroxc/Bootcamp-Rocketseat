import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*{
  margin:0;
  padding:0;
  outline:0;
  box-sizing: border-box;
}
html,body,#root{
  mini-height: 100%;
}
body{
  background: #110594;

  -webkit-font-smoothing: antialiased !important;

}
body,input,button{
  color: #231000;
  font-size: 14px;
  font-family: Arial, Helvetica, sans-serif;
}
button{
  cursor: pointer;

}
`;
