import {
  Root as AvatarContainer,
  Image as AvatarImage,
} from "@radix-ui/react-avatar";
import githubIcon from "../../../assets/github-mark.svg";
import classes from "./styles.module.scss";
export const Header = () => {
  return (
    <section className={classes.header}>
      <AvatarContainer>
        <AvatarImage src={githubIcon} />
      </AvatarContainer>
      <div className={classes.content}>
        <h1>GitHub Searcher</h1>
        <p>Search users or repositories below</p>
      </div>
    </section>
  );
};
