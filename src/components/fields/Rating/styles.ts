import { makeStyles, createStyles } from "@mui/styles";

export const useRatingStyles = makeStyles((theme) =>
  createStyles({
    root: { color: theme.palette.text.secondary },
    iconEmpty: { color: theme.palette.text.secondary },
  })
);
