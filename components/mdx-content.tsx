import { MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc";
import { JSX } from "react";
import { highlight } from "sugar-high";

/* eslint-disable @typescript-eslint/no-explicit-any */

function Code({ children, ...props }: any) {
    const codeHTML = highlight(children);
    return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
}

/* eslint-enable @typescript-eslint/no-explicit-any */


const components = {
    code: Code,
};

export default function MDXContent(
    props: JSX.IntrinsicAttributes & MDXRemoteProps,
) {
    return (
        <MDXRemote
            {...props}
            components={{ ...components, ...(props.components || {}) }}
        />
    );
}