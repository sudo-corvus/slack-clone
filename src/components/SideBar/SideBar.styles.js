import styled from "styled-components";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CreateIcon from "@material-ui/icons/Create";
export const SideBarWrapper = styled.div`
  background-color: var(--slack-color);
  border-top: 1px solid #49274b;
  max-width: 260px;
  color: #fff;
`;
export const SideBarHeader = styled.div`
  display: flex;
  border-bottom: 1px solid #49274b;
  padding-bottom: 10px;
  padding: 13px;
`;
export const TitleMedium = styled.h2`
  font-size: 15px;
  font-weight: 900;
  margin-bottom: 5px;
`;
export const TitleSmall = styled.h3`
  display: flex;
  align-items: center;
  font-size: 30px;
  font-weight: 400;
`;
export const SideBarInfo = styled.div`
  flex: 1;
`;
export const StyledFiber = styled(FiberManualRecordIcon)``;
export const StyledCreate = styled(CreateIcon)`
  padding: 8px;
  color: #49274b;
  font-size: 18px;
  background-color: #fff;
  border-radius: 999px;
`;
