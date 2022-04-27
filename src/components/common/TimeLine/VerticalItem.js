import styled, {css} from "styled-components";
import Icon from "@components/common/Icon";

const Wrapper = styled.div`
  display: flex;
`;

const CircleBox = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 1 0%;
  align-items: center;
`;

const Circle = styled.div`
  background: ${(props) => props.theme.timeline[props.status].iconColor};
  box-shadow: ${(props) => props.theme.timeline[props.status].boxShadow};
  border-radius: 50%;
  width: 15px;
  height: 15px;
  padding: 4px 0px 0px 2px;
  box-sizing: border-box;
`;

const Line = styled.div`
  width: 2px;
  background: ${(props) => props.theme.timeline[props.status].lineColor};
  flex-grow: 1;
  height: 30px;
`;

const Content = styled.div`
  margin-left: 25px;
  color: ${(props) => props.theme.timeline[props.status].color};
  font-size: ${(props) => props.theme.timeline[props.status].fontSize};

  ${props => props.status == "current" && css `
    margin-top: -3px;
  `}
`;

const Item = ({ status, ...props }) => {
  return (
    <Wrapper>
      <CircleBox>
        <Circle status={status}>
          {status == "active" &&
            <Icon type="WhiteCheck" viewBox="0 0 10 10" />
          }
        </Circle>

        {!props.isLast &&
          <Line status={status} isLast={props.isLast}></Line>
        }
      </CircleBox>
      <Content status={status}>{props.children}</Content>
    </Wrapper>
  );
};

export default Item;
