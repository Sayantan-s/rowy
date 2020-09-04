import React from "react";
import queryString from "query-string";
import { Link as RouterLink } from "react-router-dom";

import {
  makeStyles,
  createStyles,
  Breadcrumbs as MuiBreadcrumbs,
  Link,
  Typography,
} from "@material-ui/core";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";

import { useFiretableContext } from "contexts/firetableContext";
import useRouter from "hooks/useRouter";
import routes from "constants/routes";
import { DRAWER_COLLAPSED_WIDTH } from "components/SideDrawer";

const useStyles = makeStyles((theme) =>
  createStyles({
    ol: {
      alignItems: "baseline",

      paddingLeft: theme.spacing(2),
      paddingRight: DRAWER_COLLAPSED_WIDTH,

      userSelect: "none",
    },

    li: {
      display: "flex",
      alignItems: "center",

      textTransform: "capitalize",
      "&:first-of-type": { textTransform: "uppercase" },
    },

    separator: {
      alignSelf: "flex-end",
      marginBottom: -2,
    },
  })
);

export default function Breadcrumbs() {
  const classes = useStyles();

  const { tableState } = useFiretableContext();
  const collection = tableState?.tablePath || "";

  const router = useRouter();
  const parentLabel = decodeURIComponent(
    queryString.parse(router.location.search).parentLabel as string
  );

  const breadcrumbs = collection.split("/");

  return (
    <MuiBreadcrumbs
      separator={<ArrowRightIcon />}
      aria-label="sub-table breadcrumbs"
      classes={classes}
      component="div"
    >
      {breadcrumbs.map((crumb: string, index) => {
        // If it’s the first breadcrumb, show with specific style
        const crumbProps = {
          key: index,
          variant: index === 0 ? "h6" : "caption",
          component: index === 0 ? "h1" : "div",
          color: index === 0 ? "textPrimary" : "textSecondary",
        } as const;

        // If it’s the last crumb, just show the label without linking
        if (index === breadcrumbs.length - 1)
          return (
            <Typography {...crumbProps}>
              {crumb.replace(/([A-Z])/g, " $1")}
            </Typography>
          );

        // If odd: breadcrumb points to a document — don’t show a link
        // TODO: show a picker here to switch between sub tables
        if (index % 2 === 1)
          return (
            <Typography {...crumbProps}>
              {parentLabel.split(",")[Math.ceil(index / 2) - 1] || crumb}
            </Typography>
          );

        // Otherwise, even: breadcrumb points to a Firestore collection
        return (
          <Link
            key={crumbProps.key}
            component={RouterLink}
            to={`${routes.table}/${encodeURIComponent(
              breadcrumbs.slice(0, index + 1).join("/")
            )}`}
            variant={crumbProps.variant}
            color={crumbProps.color}
          >
            {crumb.replace(/([A-Z])/g, " $1")}
          </Link>
        );
      })}
    </MuiBreadcrumbs>
  );
}
