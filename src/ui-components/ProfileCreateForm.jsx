/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Profile } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function ProfileCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    introduction: "",
    residence: "",
    birthplace: "",
    birthday: "",
    hobby: "",
  };
  const [introduction, setIntroduction] = React.useState(
    initialValues.introduction
  );
  const [residence, setResidence] = React.useState(initialValues.residence);
  const [birthplace, setBirthplace] = React.useState(initialValues.birthplace);
  const [birthday, setBirthday] = React.useState(initialValues.birthday);
  const [hobby, setHobby] = React.useState(initialValues.hobby);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setIntroduction(initialValues.introduction);
    setResidence(initialValues.residence);
    setBirthplace(initialValues.birthplace);
    setBirthday(initialValues.birthday);
    setHobby(initialValues.hobby);
    setErrors({});
  };
  const validations = {
    introduction: [{ type: "Required" }],
    residence: [{ type: "Required" }],
    birthplace: [{ type: "Required" }],
    birthday: [{ type: "Required" }],
    hobby: [{ type: "Required" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  const convertTimeStampToDate = (ts) => {
    if (Math.abs(Date.now() - ts) < Math.abs(Date.now() - ts * 1000)) {
      return new Date(ts);
    }
    return new Date(ts * 1000);
  };
  const convertToLocal = (date) => {
    const df = new Intl.DateTimeFormat("default", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      calendar: "iso8601",
      numberingSystem: "latn",
      hourCycle: "h23",
    });
    const parts = df.formatToParts(date).reduce((acc, part) => {
      acc[part.type] = part.value;
      return acc;
    }, {});
    return `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}`;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          introduction,
          residence,
          birthplace,
          birthday,
          hobby,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(new Profile(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "ProfileCreateForm")}
      {...rest}
    >
      <TextField
        label="Introduction"
        isRequired={true}
        isReadOnly={false}
        value={introduction}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              introduction: value,
              residence,
              birthplace,
              birthday,
              hobby,
            };
            const result = onChange(modelFields);
            value = result?.introduction ?? value;
          }
          if (errors.introduction?.hasError) {
            runValidationTasks("introduction", value);
          }
          setIntroduction(value);
        }}
        onBlur={() => runValidationTasks("introduction", introduction)}
        errorMessage={errors.introduction?.errorMessage}
        hasError={errors.introduction?.hasError}
        {...getOverrideProps(overrides, "introduction")}
      ></TextField>
      <TextField
        label="Residence"
        isRequired={true}
        isReadOnly={false}
        value={residence}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              introduction,
              residence: value,
              birthplace,
              birthday,
              hobby,
            };
            const result = onChange(modelFields);
            value = result?.residence ?? value;
          }
          if (errors.residence?.hasError) {
            runValidationTasks("residence", value);
          }
          setResidence(value);
        }}
        onBlur={() => runValidationTasks("residence", residence)}
        errorMessage={errors.residence?.errorMessage}
        hasError={errors.residence?.hasError}
        {...getOverrideProps(overrides, "residence")}
      ></TextField>
      <TextField
        label="Birthplace"
        isRequired={true}
        isReadOnly={false}
        value={birthplace}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              introduction,
              residence,
              birthplace: value,
              birthday,
              hobby,
            };
            const result = onChange(modelFields);
            value = result?.birthplace ?? value;
          }
          if (errors.birthplace?.hasError) {
            runValidationTasks("birthplace", value);
          }
          setBirthplace(value);
        }}
        onBlur={() => runValidationTasks("birthplace", birthplace)}
        errorMessage={errors.birthplace?.errorMessage}
        hasError={errors.birthplace?.hasError}
        {...getOverrideProps(overrides, "birthplace")}
      ></TextField>
      <TextField
        label="Birthday"
        isRequired={true}
        isReadOnly={false}
        type="datetime-local"
        value={birthday && convertToLocal(convertTimeStampToDate(birthday))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : Number(new Date(e.target.value));
          if (onChange) {
            const modelFields = {
              introduction,
              residence,
              birthplace,
              birthday: value,
              hobby,
            };
            const result = onChange(modelFields);
            value = result?.birthday ?? value;
          }
          if (errors.birthday?.hasError) {
            runValidationTasks("birthday", value);
          }
          setBirthday(value);
        }}
        onBlur={() => runValidationTasks("birthday", birthday)}
        errorMessage={errors.birthday?.errorMessage}
        hasError={errors.birthday?.hasError}
        {...getOverrideProps(overrides, "birthday")}
      ></TextField>
      <TextField
        label="Hobby"
        isRequired={true}
        isReadOnly={false}
        value={hobby}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              introduction,
              residence,
              birthplace,
              birthday,
              hobby: value,
            };
            const result = onChange(modelFields);
            value = result?.hobby ?? value;
          }
          if (errors.hobby?.hasError) {
            runValidationTasks("hobby", value);
          }
          setHobby(value);
        }}
        onBlur={() => runValidationTasks("hobby", hobby)}
        errorMessage={errors.hobby?.errorMessage}
        hasError={errors.hobby?.hasError}
        {...getOverrideProps(overrides, "hobby")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
