import { Box } from "@material-ui/core";
import { toRem } from "./typography";

export default function CheckboxIndeterminateIcon() {
  return (
    <Box
      component="span"
      sx={{
        width: toRem(18),
        height: toRem(18),
        margin: toRem((24 - 18) / 2),
        borderRadius: 1,

        position: "relative",

        bgcolor: "action.input",
        border: "1px solid",
        borderColor: "text.disabled",
        color: "primary.main",

        transition: (theme) =>
          theme.transitions.create(["background-color", "border-color"], {
            easing: theme.transitions.easing.easeIn,
            duration: theme.transitions.duration.shortest,
            delay: theme.transitions.duration.shortest,
          }),

        "& svg": {
          position: "absolute",
          top: -1,
          right: -1,
          bottom: -1,
          left: -1,
          color: "inherit",
        },
        "& .tick": {
          stroke: (theme) => theme.palette.primary.contrastText,
          strokeDasharray: 10,
          strokeDashoffset: 10,
          transition: (theme) =>
            theme.transitions.create(["stroke-dashoffset"], {
              easing: theme.transitions.easing.easeIn,
              duration: theme.transitions.duration.shortest,
            }),

          boxShadow: 1,
        },

        ".Mui-checked &": {
          backgroundColor: "currentColor",
          borderColor: "currentColor",

          transition: (theme) =>
            theme.transitions.create(["background-color", "border-color"], {
              easing: theme.transitions.easing.easeOut,
              duration: theme.transitions.duration.shortest,
            }),

          "& .tick": {
            strokeDashoffset: 0,
            transition: (theme) =>
              theme.transitions.create(["stroke-dashoffset"], {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.shortest,
                delay: theme.transitions.duration.shortest,
              }),
          },
        },
      }}
    >
      <svg viewBox="0 0 18 18">
        <line x1="4" y1="9" x2="14" y2="9" stroke-width="2" className="tick" />
      </svg>
    </Box>
  );
}
