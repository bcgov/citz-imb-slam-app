import { useSoftware } from "hooks";
import { useRouter } from "next/router";
import { useCallback, useState, useMemo } from "react";
import { Field } from "formik";
import { BaseControl } from "../common/BaseControl";
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import MoreHorizSharpIcon from "@mui/icons-material/MoreHorizSharp";
import {ListMenu} from "../../common/ListMenu"

import {
  Alert,
  AlertTitle,
  Box,
  Button,
  Grid,
  Input,
  Stack,
  Typography,
} from "@mui/material";

export const MultiUserControl = (props) => {
  const {
    name,
    label,
    required,
    type = "text",
    disabled,
    ...remainingProps
  } = props;

  const router = useRouter();

  const { id } = router.query;

  const software = useSoftware(id);

  const availability = useMemo(() => {
    if (
      software.isLoading ||
      software.isError ||
      software.data.length === 0 ||
      !software.data.__licenseeConnection__
    )
      return `(${software.data[0].__licenseeConnection__.length} assigned of ${software.data[0].quantity})`;

    return `(${software.data[0].__licenseeConnection__.length} assigned of ${software.data[0].quantity})`;
  }, [software.data, software.isError, software.isLoading]);

  const licenseeList = software.data[0].__licenseeConnection__.map(
    (item, index) => (
      <>
        <Grid
          container
          spacing={3}
          className="user-info"
          key={index}
          sx={{
            marginTop: "0px !important",
            margin: "0px !important",
            padding: "0.75rem 1rem !important",
            borderBottom: "1px solid #ddd",
            display: "grid",
            gridTemplateColumns: "40px auto 24px",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Avatar
            alt={item.__licensee__.name}
            sx={{
              width: "34px",
              height: "34px",
              fontSize: "0.8rem",
              fontWeight: "500",
              fontFamily: "var(--body-font-family)",
              bgcolor: "#ddd",
              color: "#888",
              display: "flex",
            }}
          >
            <PersonOutlineOutlinedIcon />
          </Avatar>
          <Stack>
            <Typography
              variant="span"
              sx={{ fontSize: "0.9rem" }}
              className="user-name"
            >
              {item.__licensee__.name}
            </Typography>
            <Typography
              variant="span"
              sx={{ fontSize: "0.7rem" }}
              className="user-email"
            >
              maytheforce@be.with.you | R2D2
            </Typography>
          </Stack>
          {disabled? null : (<ListMenu />)}
        </Grid>
      </>
    )
  );

  return (
    <Field name={name}>
      {({ field, form }) => {
        return (
          <BaseControl
            error={!!form.errors[field.name]}
            label={label}
            availability={availability}
            {...remainingProps}
          >
            {disabled ? null : (
              <TextField disabled={disabled} placeholder="Search" />
            )}
            <fieldset className="user-list" disabled={disabled}>
              <Stack spacing={2}>{licenseeList}</Stack>
            </fieldset>
          </BaseControl>
        );
      }}
    </Field>
  );
};
