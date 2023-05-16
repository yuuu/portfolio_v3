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
export declare type SlideCreateFormInputValues = {
  link?: string;
  image?: string;
  title?: string;
  body?: string;
  publishedAt?: number;
};
export declare type SlideCreateFormValidationValues = {
  link?: ValidationFunction<string>;
  image?: ValidationFunction<string>;
  title?: ValidationFunction<string>;
  body?: ValidationFunction<string>;
  publishedAt?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> &
  React.DOMAttributes<HTMLDivElement>;
export declare type SlideCreateFormOverridesProps = {
  SlideCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
  link?: PrimitiveOverrideProps<TextFieldProps>;
  image?: PrimitiveOverrideProps<TextFieldProps>;
  title?: PrimitiveOverrideProps<TextFieldProps>;
  body?: PrimitiveOverrideProps<TextFieldProps>;
  publishedAt?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SlideCreateFormProps = React.PropsWithChildren<
  {
    overrides?: SlideCreateFormOverridesProps | undefined | null;
  } & {
    clearOnSuccess?: boolean;
    onSubmit?: (
      fields: SlideCreateFormInputValues
    ) => SlideCreateFormInputValues;
    onSuccess?: (fields: SlideCreateFormInputValues) => void;
    onError?: (
      fields: SlideCreateFormInputValues,
      errorMessage: string
    ) => void;
    onChange?: (
      fields: SlideCreateFormInputValues
    ) => SlideCreateFormInputValues;
    onValidate?: SlideCreateFormValidationValues;
  } & React.CSSProperties
>;
export default function SlideCreateForm(
  props: SlideCreateFormProps
): React.ReactElement;
