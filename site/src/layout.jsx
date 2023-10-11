import React from "react";
import { Bar, Title } from "@ui5/webcomponents-react";
import { spacing } from "@ui5/webcomponents-react-base";
import "./layout.scss";
import Index from "./pages/index";
function Layout() {
  return (
    <>
      <Bar style={{ height: "auto" }}>
        <Title style={{ ...spacing.sapUiLargeMarginTopBottom }} level="H3">
          Super Teste do Bart
        </Title>
      </Bar>

      {/* aqui deveria vir um sistema de rotas que inclui <Index/> */}
      <Index />
    </>
  );
}

export default Layout;
