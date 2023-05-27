/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
  hasError: boolean;
  errorMessage?: string;
};
export declare type ValidationFunction<T> = (
  value: T,
  validationResponse: ValidationResponse
) => ValidationResponse | Promise<ValidationResponse>;
export declare type BookCreateFormInputValues = {
  link?: string;
  image?: string;
  title?: string;
  description?: string;
};
export declare type BookCreateFormValidationValues = {
  link?: ValidationFunction<string>;
  image?: ValidationFunction<string>;
  title?: ValidationFunction<string>;
  description?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> &
  React.DOMAttributes<HTMLDivElement>;
export declare type BookCreateFormOverridesProps = {
  BookCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
  link?: PrimitiveOverrideProps<TextFieldProps>;
  image?: PrimitiveOverrideProps<TextFieldProps>;
  title?: PrimitiveOverrideProps<TextFieldProps>;
  description?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type BookCreateFormProps = React.PropsWithChildren<
  {
    overrides?: BookCreateFormOverridesProps | undefined | null;
  } & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: BookCreateFormInputValues) => BookCreateFormInputValues;
    onSuccess?: (fields: BookCreateFormInputValues) => void;
    onError?: (fields: BookCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BookCreateFormInputValues) => BookCreateFormInputValues;
    onValidate?: BookCreateFormValidationValues;
  } & React.CSSProperties
>;
export default function BookCreateForm(
  props: BookCreateFormProps
): React.ReactElement;
