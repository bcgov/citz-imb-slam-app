import { Field } from "formik";
import { ErrorMessage } from "./ErrorMessage";
import Moment from "react-moment";
import { useState } from "react";
import SemanticDatepicker from 'react-semantic-ui-datepickers';
import 'react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css';




/**
 *
 * @param {*} props
 * @returns {React.jsx}
 */
export const DateInput = (props) => {
  const { label, name, required = false, id, ...remainingProps } = props;

  const moment = require("moment");
  const [currentDate, setNewDate] = useState(null);
  const onChange = (event, data) => setNewDate(data.value);


  return (
    <Field name={name} id={id}>
      {(props) => {
        const { field, meta } = props;
        console.log("prop", props);
        return (
          <div className="flex-large">
            <label htmlFor={id}>
              {label}
              {required ? <span>*</span> : null}
            </label>

            <input
              type="datetime"
              {...field}
              {...remainingProps}
              className={meta.touched && meta.error ? "has-error" : ""}
              value={
                props.field.value
                  ? moment(props.field.value).format("YYYY-MMM-DD")
                  : ""
              }
            />
            {/* <SemanticDatepicker onChange={onChange}               
                // value={
                //     props.field.value
                //     ? moment(props.field.value).format("YYYY-MM-DD")
                //     : ""
                // } 
                value = { data.value

                }
            /> */}
            {meta.touched && meta.error ? (
              <ErrorMessage>{meta.error}</ErrorMessage>
            ) : null}
          </div>
        );
      }}
    </Field>
  );
};
