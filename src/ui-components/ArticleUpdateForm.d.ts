/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Article } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ArticleUpdateFormInputValues = {
    link?: string;
    imageUrl?: string;
    title?: string;
    body?: string;
    publishedAt?: number;
    type?: string;
};
export declare type ArticleUpdateFormValidationValues = {
    link?: ValidationFunction<string>;
    imageUrl?: ValidationFunction<string>;
    title?: ValidationFunction<string>;
    body?: ValidationFunction<string>;
    publishedAt?: ValidationFunction<number>;
    type?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ArticleUpdateFormOverridesProps = {
    ArticleUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    link?: PrimitiveOverrideProps<TextFieldProps>;
    imageUrl?: PrimitiveOverrideProps<TextFieldProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    body?: PrimitiveOverrideProps<TextFieldProps>;
    publishedAt?: PrimitiveOverrideProps<TextFieldProps>;
    type?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ArticleUpdateFormProps = React.PropsWithChildren<{
    overrides?: ArticleUpdateFormOverridesProps | undefined | null;
} & {
    id?: {
        type: string;
        publishedAt: number;
    };
    article?: Article;
    onSubmit?: (fields: ArticleUpdateFormInputValues) => ArticleUpdateFormInputValues;
    onSuccess?: (fields: ArticleUpdateFormInputValues) => void;
    onError?: (fields: ArticleUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ArticleUpdateFormInputValues) => ArticleUpdateFormInputValues;
    onValidate?: ArticleUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ArticleUpdateForm(props: ArticleUpdateFormProps): React.ReactElement;
