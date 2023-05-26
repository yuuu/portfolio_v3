/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Profile } from "../models";
export declare type ValidationResponse = {
  hasError: boolean;
  errorMessage?: string;
};
export declare type ValidationFunction<T> = (
  value: T,
  validationResponse: ValidationResponse
) => ValidationResponse | Promise<ValidationResponse>;
export declare type ProfileUpdateFormInputValues = {
  introduction?: string;
  residence?: string;
  birthplace?: string;
  birthday?: number;
  hobby?: string;
};
export declare type ProfileUpdateFormValidationValues = {
  introduction?: ValidationFunction<string>;
  residence?: ValidationFunction<string>;
  birthplace?: ValidationFunction<string>;
  birthday?: ValidationFunction<number>;
  hobby?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> &
  React.DOMAttributes<HTMLDivElement>;
export declare type ProfileUpdateFormOverridesProps = {
  ProfileUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
  introduction?: PrimitiveOverrideProps<TextFieldProps>;
  residence?: PrimitiveOverrideProps<TextFieldProps>;
  birthplace?: PrimitiveOverrideProps<TextFieldProps>;
  birthday?: PrimitiveOverrideProps<TextFieldProps>;
  hobby?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ProfileUpdateFormProps = React.PropsWithChildren<
  {
    overrides?: ProfileUpdateFormOverridesProps | undefined | null;
  } & {
    id?: string;
    profile?: Profile;
    onSubmit?: (
      fields: ProfileUpdateFormInputValues
    ) => ProfileUpdateFormInputValues;
    onSuccess?: (fields: ProfileUpdateFormInputValues) => void;
    onError?: (
      fields: ProfileUpdateFormInputValues,
      errorMessage: string
    ) => void;
    onChange?: (
      fields: ProfileUpdateFormInputValues
    ) => ProfileUpdateFormInputValues;
    onValidate?: ProfileUpdateFormValidationValues;
  } & React.CSSProperties
>;
export default function ProfileUpdateForm(
  props: ProfileUpdateFormProps
): React.ReactElement;
