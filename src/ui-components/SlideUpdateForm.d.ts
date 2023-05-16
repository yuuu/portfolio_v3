/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Slide } from "../models";
export declare type ValidationResponse = {
  hasError: boolean;
  errorMessage?: string;
};
export declare type ValidationFunction<T> = (
  value: T,
  validationResponse: ValidationResponse
) => ValidationResponse | Promise<ValidationResponse>;
export declare type SlideUpdateFormInputValues = {
  link?: string;
  image?: string;
  title?: string;
  body?: string;
  publishedAt?: number;
};
export declare type SlideUpdateFormValidationValues = {
  link?: ValidationFunction<string>;
  image?: ValidationFunction<string>;
  title?: ValidationFunction<string>;
  body?: ValidationFunction<string>;
  publishedAt?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> &
  React.DOMAttributes<HTMLDivElement>;
export declare type SlideUpdateFormOverridesProps = {
  SlideUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
  link?: PrimitiveOverrideProps<TextFieldProps>;
  image?: PrimitiveOverrideProps<TextFieldProps>;
  title?: PrimitiveOverrideProps<TextFieldProps>;
  body?: PrimitiveOverrideProps<TextFieldProps>;
  publishedAt?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SlideUpdateFormProps = React.PropsWithChildren<
  {
    overrides?: SlideUpdateFormOverridesProps | undefined | null;
  } & {
    id?: string;
    slide?: Slide;
    onSubmit?: (
      fields: SlideUpdateFormInputValues
    ) => SlideUpdateFormInputValues;
    onSuccess?: (fields: SlideUpdateFormInputValues) => void;
    onError?: (
      fields: SlideUpdateFormInputValues,
      errorMessage: string
    ) => void;
    onChange?: (
      fields: SlideUpdateFormInputValues
    ) => SlideUpdateFormInputValues;
    onValidate?: SlideUpdateFormValidationValues;
  } & React.CSSProperties
>;
export default function SlideUpdateForm(
  props: SlideUpdateFormProps
): React.ReactElement;
