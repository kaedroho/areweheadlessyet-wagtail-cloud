import { RichTextBlock } from "../../WagtailRichText";

type IconChoice = 'thumbs-up' | 'thumbs-down';

type StraplineProps = {
    icon: IconChoice;
    text: RichTextBlock[];
};

export type { IconChoice, StraplineProps };
