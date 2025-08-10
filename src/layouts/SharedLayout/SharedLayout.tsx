import * as SC from "./SharedLayoutStyled"

import { IChild } from "@/utils/types";

const SharedLayout: React.FC<IChild> = ({ children }) => {
  return <SC.SharedList>{children}</SC.SharedList>;
};

export default SharedLayout;
