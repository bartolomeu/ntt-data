import React, { useState } from "react";
import { Button, Input } from "@ui5/webcomponents-react";
import { spacing } from "@ui5/webcomponents-react-base";
import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";

function SearchBar({callBack}) {
  const [term, setTerm] = useState('');
  return (
    <form
      style={spacing.sapUiLargeMarginTopBottom}
      className="centerText itemSpacing"
      onSubmit={(e) => {
        e.preventDefault();
        term && callBack(term);
      }}
    >
      <Input value={term} onChange={(e) => setTerm(e.target.value)} />
      <Button design="Emphasized" type="Submit">Search</Button>
      <Button design="Emphasized" type="Reset" onClick={() => setTerm('')}>Reset</Button>

    </form>
  );
}

export default SearchBar;
