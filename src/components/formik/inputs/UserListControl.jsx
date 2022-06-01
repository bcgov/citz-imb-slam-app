import {
    Stack
} from "@mui/material";
import TextField from "@mui/material/TextField";
import { Field } from "formik";
import React from 'react';
import { BaseControl } from "../common/BaseControl";
import { UserItemControl } from "./UserItemControl";

export const UserListControl = (props) => {
    const {
        name,
        label,
        required,
        type = "text",
        disabled,
        licenseeList,
        ...remainingProps
      } = props;

    return (
        <Field name={name}>
          {({ field, form }) => {
            return (
              <BaseControl
                error={!!form.errors[field.name]}
                label={`${label} ${form.values[field.name].length} / ${form.values.quantity}`}
                {...remainingProps}
              >
                {disabled ? null : (
                  <TextField disabled={disabled} placeholder="Search" />
                )}
                <fieldset className="user-list" disabled={disabled}>
                  <Stack spacing={2}>{form.values[field.name].map((value, index)=> {return <UserItemControl disabled={disabled} key={index} value={value} />})}</Stack>
                </fieldset>
              </BaseControl>
            );
          }}
        </Field>
      );
}
