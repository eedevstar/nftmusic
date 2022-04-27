import styled from "styled-components";

const Tooltip = styled.div`
  position: absolute;
  top: ${(props) => props.bottom ? "calc(100% + " + props.bottom + "px)" : "auto" };
  left: ${(props) => props.left ? props.left+"px" : "auto" };
  visibility: hidden;
  font-size: 16px;
  font-weight: 100;
  line-height: 23px;
  letter-spacing: 0.01em;
  color: ${(props) => props.type ?
        props.theme.tooltip[props.type].color :
        props.theme.tooltip.default.color
  };
  backdrop-filter: ${(props) => props.type ?
        props.theme.tooltip[props.type].backdropFilter :
        props.theme.tooltip.default.backdropFilter
  };
  background: ${(props) => props.type ?
        props.theme.tooltip[props.type].background :
        props.theme.tooltip.default.background
  };
  opacity: 0;
  padding: 10px 17px;
  border-radius: 4px;
  transition: visibility 0.1s, opacity 0.5s ease-in-out;
`;

export default Tooltip;
