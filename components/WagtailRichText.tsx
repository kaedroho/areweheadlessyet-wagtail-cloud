interface RichTextParagraphBlock {
    type: "paragraph";
    id: string;
    value: {
        html: string;
    }
}

interface RichTextHeadingBlock {
    type: "heading";
    id: string;
    value: {
        html: string;
        level: 1 | 2 | 3 | 4 | 5;
    }
}

interface RichTextBlockQuoteBlock {
    type: "blockquote";
    id: string;
    value: {
        html: string;
    }
}

interface RichTextListBlock {
    type: "ordered-list" | "unordered-list";
    id: string;
    value: {
        html: string;
    }[]
}

interface RichTextImageBlock {
    type: "image";
    value: {
        image: {
            id: number;
            title: string
            width: number;
            height: number;
            downloadUrl: string;
        }
        alt: string,
        format: "fullwidth" | "left" | "right"
    }
}

interface RichTextEmbedBlock {
    type: "embed";
    value: {
        url: string,
        type: string;
        html: string;
        title: string;
        authorName: string;
        providerName: string;
        thumbnailUrl: string;
        width: number;
        height: number
    }
}

export type RichTextBlock = RichTextParagraphBlock | RichTextHeadingBlock | RichTextBlockQuoteBlock | RichTextListBlock | RichTextImageBlock | RichTextEmbedBlock;

export interface WagtailRichTextProps {
    value: RichTextBlock[];
}

export const WagtailRichText = ({ value }: WagtailRichTextProps) => (
    <>
        {value.map((block) => {
            if (block.type === "paragraph") {
                return <p key={block.id} dangerouslySetInnerHTML={{__html: block.value.html}} />
            } else if (block.type === "heading") {
                return {
                    1: <h1 key={block.id} dangerouslySetInnerHTML={{__html: block.value.html}} />,
                    2: <h2 key={block.id} dangerouslySetInnerHTML={{__html: block.value.html}} />,
                    3: <h3 key={block.id} dangerouslySetInnerHTML={{__html: block.value.html}} />,
                    4: <h4 key={block.id} dangerouslySetInnerHTML={{__html: block.value.html}} />,
                    5: <h5 key={block.id} dangerouslySetInnerHTML={{__html: block.value.html}} />,
                }[block.value.level];
            } else if (block.type === "blockquote") {
                return <blockquote key={block.id} dangerouslySetInnerHTML={{__html: block.value.html}} />
            } else if (block.type === "unordered-list") {
                return <ul key={block.id}>
                    {block.value.map((item) => <li key={item.html} dangerouslySetInnerHTML={{__html: item.html}} />)}
                </ul>
            } else if (block.type === "ordered-list") {
                return <ol key={block.id}>
                    {block.value.map((item) => <li key={item.html} dangerouslySetInnerHTML={{__html: item.html}} />)}
                </ol>
            } else if (block.type === "image") {
                /* TODO fullwidth/left/right, next Image support */
                return <img key={block.value.image.id} src={block.value.image.downloadUrl} alt={block.value.alt} />
            } else if (block.type === "embed") {
                return <div key={block.value.url} dangerouslySetInnerHTML={{__html: block.value.html}} />
            }
        })}
    </>
);

export default WagtailRichText;
