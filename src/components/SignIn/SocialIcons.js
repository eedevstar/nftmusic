import styled from "styled-components";
import Icon from "@components/common/Icon";

const SocialIconsBox = styled.div`
  margin: auto;
  display: flex;
`;
const IconBox = styled.div`
  position: inline-block;
  margin-right: 20px;
  cursor: pointer;
`;

const SocialIcons = () => {
  return (
    <SocialIconsBox>
      <IconBox>
        <Icon type="Facebook" viewBox="0 0 48 48" width="48" height="48" />
      </IconBox>
      <IconBox>
        <Icon type="Google" viewBox="0 0 48 48" width="48" height="48" />
      </IconBox>
      <IconBox>
        <Icon type="Apple" viewBox="0 0 48 48" width="48" height="48" />
      </IconBox>
      <IconBox>
        <Icon type="SocialTwitter" viewBox="0 0 48 48" width="48" height="48" />
      </IconBox>
      <IconBox>
        <Icon type="Kakaotalk" viewBox="0 0 48 48" width="48" height="48" />
      </IconBox>
    </SocialIconsBox>
  );
};

export default SocialIcons;
