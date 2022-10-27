import { SectionBlock, IssuesBlock, NewsBlock, TopicsBlock } from './blocks';
import type { StreamFieldProps } from './types';
import styles from './StreamField.module.scss';
import { RichTextBlock } from './blocks/SectionBlock';
import { RichTextBlockItem } from './blocks/SectionBlock/types';
import { RichTextBlock as RichTextBlockValue } from '../WagtailRichText';

const BLOCKS = {
    section: SectionBlock,
    issues: IssuesBlock,
    news: NewsBlock,
} as const;
type BlockType = keyof typeof BLOCKS;

const StreamField = ({ body, topics, className }: StreamFieldProps) => {
    if (!body) {
        return null;
    }

    return (
        <div className={styles[className]}>
            {body.map((block, i) => {
                const blockType = block.type;
                if (blockType === 'topics') {
                    return (
                        <div key={i} className={styles.section}>
                            <TopicsBlock {...block.value} topics={topics} />
                        </div>
                    );
                }
                if (blockType === 'paragraph') {
                    return (
                        <div key={i} className={styles.text}>
                            <RichTextBlock id={block.id} type="paragraph" value={block.value.paragraph as RichTextBlockValue[]} />
                        </div>
                    );
                }
                const BlockComponent = BLOCKS[blockType as BlockType];
                return (
                    <div key={i} className={styles.section}>
                        <BlockComponent {...block.value} />
                    </div>
                );
            })}
        </div>
    );
};

export default StreamField;
