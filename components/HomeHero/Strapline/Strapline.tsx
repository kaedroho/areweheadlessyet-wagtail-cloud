import WagtailRichText from '../../WagtailRichText';
import styles from './Strapline.module.scss';
import type { StraplineProps } from './types';

export const Strapline = ({ icon, text }: StraplineProps) => (
    <div className={styles.strapline}>
        <strong className={styles.strapline__icon}>
            {icon === 'thumbs-up' ? '👍 Yes!' : '👎 No!'}
        </strong>
        <WagtailRichText value={text} />
    </div>
);

export default Strapline;
