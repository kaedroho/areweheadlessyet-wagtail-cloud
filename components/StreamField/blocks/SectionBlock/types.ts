import StreamFieldBlock from '../../../types';
import { RichTextBlock } from '../../../WagtailRichText';

export interface RichTextBlockItem extends StreamFieldBlock {
    type: 'paragraph';
    value: RichTextBlock[];
}

export interface LinkBlockValue {
    link: string;
    linkText: string;
}

export interface LinkBlockItem extends StreamFieldBlock {
    type: 'link';
    value: LinkBlockValue;
}

export interface LinkGroupBlockItem extends StreamFieldBlock {
    type: 'link_group';
    value: Array<LinkBlockItem>;
}

export type SectionBlockItem = RichTextBlockItem | LinkGroupBlockItem;

export type SectionBlockProps = {
    title: string;
    content: Array<SectionBlockItem>;
};
