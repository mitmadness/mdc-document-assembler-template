import { stripIndent } from 'common-tags';
import { ComponentChildren, VNode } from 'preact';

// language=scss
const baseStyle = stripIndent`
    *, *:before, *:after {
        box-sizing: border-box;
    }

    html {
        font-family: sans-serif;
        font-size: 11pt;
    }

    body {
        margin: 0;
        padding: 0;
        -webkit-print-color-adjust: exact;
    }

    h1, h2, h3, h4, h5, h6, p {
        margin-top: 0;
    }

    table {
        border-collapse: collapse;
    }

    img {
        max-width: 100%;
        height: auto;
    }`;

interface HtmlDocumentProps {
    styles?: string[];

    children?: ComponentChildren;
}

/**
 * Fournit un squelette HTML5 complet avec un style CSS global effectuant un reset CSS simple.
 */
export function HtmlDocument({ children, styles }: HtmlDocumentProps): VNode {
    const allStyles = [baseStyle, ...(styles ?? [])];

    // noinspection HtmlRequiredTitleElement
    return (
        <html>
        <head>
            <meta charSet="UTF-8"/>
            <base href="/"/>

            {allStyles.map(style => <style dangerouslySetInnerHTML={{ __html: style }}></style>)}
        </head>

        <body>{children}</body>
        </html>);
}

HtmlDocument.injectOverridingStyles = (node: VNode, styles: readonly string[], override = true) => {
    if (node.type != HtmlDocument) {
        throw new Error(`Expected root node to be a HtmlDocument.`);
    }

    const htmlDocument = node as VNode<Parameters<typeof HtmlDocument>[0]>;

    const oldStyles = htmlDocument.props.styles ?? [];

    htmlDocument.props.styles = override ? [...oldStyles, ...styles] : [...styles, ...oldStyles];
};
