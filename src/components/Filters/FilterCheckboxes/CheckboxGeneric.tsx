import React, { type ReactElement } from "react";
import { Text, Checkbox } from "evergreen-ui";
import { colors, fontSizes } from "theme/constants";
import type { CriteriaMapFlattened } from "types";

type FieldProp =
  | string
  | {
      fields: { key: string };
    };

const getFieldProp = (val: FieldProp, prop: string): string =>
  typeof val === "string" ? val : val.fields[prop];

interface CheckboxGenericProps {
  selected: CriteriaMapFlattened;
  name: string;
  element: FieldProp;
  toggleFilter: Function;
}

export const CheckboxGeneric = ({
  selected,
  name,
  element,
  toggleFilter,
}: CheckboxGenericProps): ReactElement => {
  return (
    <Checkbox
      checked={selected[name].includes(getFieldProp(element, "slug"))}
      label={
        <Text size={fontSizes.base} color={colors.secondarySoft}>
          {getFieldProp(element, "title")}
        </Text>
      }
      onChange={() => toggleFilter(getFieldProp(element, "slug"), name)}
    />
  );
};
