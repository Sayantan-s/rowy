import React from "react";
import clsx from "clsx";
import { IPopoverInlineCellProps } from "../types";

import { makeStyles, createStyles } from "@mui/styles";
import { ButtonBase, Grid } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import { sanitiseValue } from "./utils";
import FormattedChip from "components/FormattedChip";
import { ConvertStringToArray } from "./ConvertStringToArray";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      height: "100%",
      padding: theme.spacing(0, 1, 0, 1.5),

      font: "inherit",
      color: "inherit !important",
      letterSpacing: "inherit",
      textAlign: "inherit",
      justifyContent: "flex-start",
    },

    value: {
      flex: 1,
      maxWidth: `calc(100% - 24px + 4px)`,
      overflow: "hidden",
      marginRight: 0,
    },
    chip: {
      display: "flex",
      cursor: "inherit",
      height: 24,
    },
    chipLabel: { whiteSpace: "nowrap" },

    icon: {
      display: "block",
      color: theme.palette.action.active,
    },
    disabled: {
      color: theme.palette.action.disabled,
    },
  })
);

export const MultiSelect = React.forwardRef(function MultiSelect(
  { value, showPopoverCell, disabled, onSubmit }: IPopoverInlineCellProps,
  ref: React.Ref<any>
) {
  const classes = useStyles();

  if (typeof value === "string" && value !== "")
    return <ConvertStringToArray value={value} onSubmit={onSubmit} />;

  return (
    <ButtonBase
      className={clsx("cell-collapse-padding", classes.root)}
      onClick={() => showPopoverCell(true)}
      ref={ref}
      disabled={disabled}
    >
      <Grid
        container
        wrap="nowrap"
        alignItems="center"
        spacing={1}
        className={classes.value}
      >
        {sanitiseValue(value).map(
          (item) =>
            typeof item === "string" && (
              <Grid item key={item}>
                <FormattedChip
                  label={item}
                  classes={{ root: classes.chip, label: classes.chipLabel }}
                />
              </Grid>
            )
        )}
      </Grid>

      <ArrowDropDownIcon
        className={clsx(classes.icon, disabled && classes.disabled)}
      />
    </ButtonBase>
  );
});
export default MultiSelect;
