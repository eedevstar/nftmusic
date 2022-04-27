import styled from "styled-components";
import VerticalItem from "./VerticalItem";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const VerticalTimeLine = ({ labels, index }) => {
  const items = labels.map((item, i) => ({
    last: i === labels.length - 1,
    current: index == i,
    status: i < index ? "active" : "inactive",
    label: item,
  }));

  return (
    <Wrapper>
      {items.map((item) => (
        <VerticalItem
          key={item.label}
          status={item.current ? "current" : item.status}
          isLast={item.last}
        >
          {item.label}
        </VerticalItem>
      ))}
    </Wrapper>
  );
};

export default VerticalTimeLine;
