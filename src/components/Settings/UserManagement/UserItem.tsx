import {
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Tooltip,
  IconButton,
} from "@mui/material";
import CopyIcon from "assets/icons/Copy";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";

import MultiSelect from "@rowy/multiselect";
import { User } from "pages/Settings/UserManagement";

export default function UserItem({
  id,
  user: { displayName, email, photoURL },
}: User) {
  return (
    <ListItem
      children={
        <>
          <ListItemAvatar>
            <Avatar src={photoURL}>SM</Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={displayName}
            secondary={email}
            sx={{
              overflowX: "hidden",
              "& > *": { userSelect: "all" },
            }}
            primaryTypographyProps={{ variant: "body1" }}
          />
        </>
      }
      secondaryAction={
        <>
          <MultiSelect
            label="Roles"
            value={["ADMIN"]}
            options={["ADMIN"]}
            onChange={console.log}
            freeText
            TextFieldProps={{
              fullWidth: false,

              sx: {
                mr: 0.5,

                "& .MuiInputLabel-root": {
                  opacity: 0,
                  mt: -3,
                },

                "& .MuiFilledInput-root": {
                  bgcolor: "transparent",
                  boxShadow: 0,
                  "&::before": { content: "none" },

                  "&:hover, &.Mui-focused": { bgcolor: "action.hover" },
                },
                "& .MuiSelect-select.MuiFilledInput-input": {
                  typography: "button",
                  pl: 1,
                  pr: 3.25,
                },
                "& .MuiSelect-icon": {
                  right: 2,
                },
              },
            }}
          />

          <Tooltip title="Copy UID">
            <IconButton
              aria-label="Copy UID"
              onClick={() => navigator.clipboard.writeText(id)}
            >
              <CopyIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Delete">
            <IconButton aria-label="Delete" color="error">
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        </>
      }
      sx={{
        pr: 1,

        "& .MuiListItemSecondaryAction-root": {
          position: "static",
          transform: "none",
          marginLeft: "auto",

          display: "flex",
          alignItems: "center",
        },
      }}
    />
  );
}
