/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { App } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type AppUpdateFormInputValues = {
    link?: string;
    image?: string;
    title?: string;
    category?: string;
    description?: string;
};
export declare type AppUpdateFormValidationValues = {
    link?: ValidationFunction<string>;
    image?: ValidationFunction<string>;
    title?: ValidationFunction<string>;
    category?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AppUpdateFormOverridesProps = {
    AppUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    link?: PrimitiveOverrideProps<TextFieldProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    category?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AppUpdateFormProps = React.PropsWithChildren<{
    overrides?: AppUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    app?: App;
    onSubmit?: (fields: AppUpdateFormInputValues) => AppUpdateFormInputValues;
    onSuccess?: (fields: AppUpdateFormInputValues) => void;
    onError?: (fields: AppUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AppUpdateFormInputValues) => AppUpdateFormInputValues;
    onValidate?: AppUpdateFormValidationValues;
} & React.CSSProperties>;
export default function AppUpdateForm(props: AppUpdateFormProps): React.ReactElement;
