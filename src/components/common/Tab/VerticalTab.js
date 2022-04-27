import { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import Icon from "@components/common/Icon";

const VerticalTab = (props) => {
  const { children } = props;

  const [selectedTab, setSelectedTab] = useState(0);

  const onSelectTab = (tabIndex) => (event) => {
    setSelectedTab(tabIndex);
  };

  return (
    <TabsWrapper>
      <TabList>
        {children.map((comp, index) => {
          const tabLabel = comp.props.label;
          return (
            <TabButton
              key={index}
              selected={selectedTab === index}
              onClick={onSelectTab(index)}
            >
              {tabLabel}
            </TabButton>
          );
        })}
      </TabList>

      <TabContent>
        {children.map((comp, index) => {
          const contentComp = comp.props.children;

          return selectedTab === index ? contentComp : undefined;
        })}
      </TabContent>
    </TabsWrapper>
  );
};

export default VerticalTab;

const TabsWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

const TabButton = styled.button`
  flex: 1;
  box-sizing: border-box;
  padding: 5px 24px;
  margin: 0px 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  cursor: pointer;
  color: ${(props) => props.varient ?
    props.theme.tab[props.varient].color :
    props.theme.tab.default.color};
  background: ${(props) => props.varient ?
    props.theme.tab[props.varient].background :
    props.theme.tab.default.background};
  outline: none;
  transition: background 0.15s ease-in;
  border: none;

  ${(props) => props.selected && css `
    color: ${(props) => props.varient ?
    props.theme.tab[props.varient].active.color :
    props.theme.tab.default.active.color};
    background: ${(props) => props.varient ?
    props.theme.tab[props.varient].active.background :
    props.theme.tab.default.active.background};
    box-shadow: ${(props) => props.theme.shadows.shadow10};
    border-radius: 2px;
  `};

  &:hover {
    color: ${(props) => props.varient ?
    props.theme.tab[props.varient].active.color :
    props.theme.tab.default.active.color};
    background: ${(props) => props.varient ?
    props.theme.tab[props.varient].active.background :
    props.theme.tab.default.active.background};

    box-shadow: ${(props) => props.theme.shadows.shadow10};
    border-radius: 2px;
  }
`;

const TabList = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: row;
  width: 100%;
  background: rgba(0, 0, 0, 0.06);
  padding: 5px;
  border-radius: 2px;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}px) {
    flex-direction: column;
    & > div,
    & > div > button {
      width: 100%;
    }
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}px) {
    flex-direction: column;
    & > div,
    & > div > button {
      width: 100%;
    }
  }
`;

const TabContent = styled.div`
  flex: 1;
  box-sizing: border-box;
  width: 100%;
`;
