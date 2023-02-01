import { LogoContainer, LogoImg, LogoTitle } from "./StyledLogo";

import s from "./style.module.css";

/* const Logo = ({ image, title, subtitle }) => (
  <div>
    <div className={s.container}>
      <img src={image} className={s.img} alt="logo" />
      <span className={s.title}>{title}</span>
    </div>
    <span className={s.subtitle}>{subtitle}</span>
  </div>
); */

const Logo = ({ image, title }) => (
  <div>
    <LogoContainer>
      <LogoImg src={image} />
      <LogoTitle>{title}</LogoTitle>
    </LogoContainer>
  </div>
);

export default Logo;
