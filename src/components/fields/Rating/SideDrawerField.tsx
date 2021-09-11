import { Controller } from "react-hook-form";
import { ISideDrawerFieldProps } from "../types";

import { Grid } from "@mui/material";
import { Rating as MuiRating } from "@mui/material";
import "@mui/lab";
import StarBorderIcon from "@mui/icons-material/StarBorder";

import { useFieldStyles } from "components/SideDrawer/Form/utils";
import { useRatingStyles } from "./styles";

export default function Rating({
  control,
  column,
  disabled,
}: ISideDrawerFieldProps) {
  const fieldClasses = useFieldStyles();
  const ratingClasses = useRatingStyles();

  // Set max and precision from config
  const {
    max,
    precision,
  }: {
    max: number;
    precision: number;
  } = {
    max: 5,
    precision: 1,
    ...column.config,
  };

  return (
    <Controller
      control={control}
      name={column.key}
      render={({ onChange, value }) => (
        <Grid container alignItems="center" className={fieldClasses.root}>
          <MuiRating
            name={column.key}
            id={`sidedrawer-field-${column.key}`}
            value={typeof value === "number" ? value : 0}
            disabled={disabled}
            onChange={(_, newValue) => onChange(newValue)}
            emptyIcon={<StarBorderIcon fontSize="inherit" />}
            max={max}
            precision={precision}
            classes={ratingClasses}
          />
        </Grid>
      )}
    />
  );
}
