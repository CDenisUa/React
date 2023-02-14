// Core
import { FC } from 'react';
// Types
import { ImagePropTypes } from './Image.types';

const Image: FC<ImagePropTypes> = (props) => {
    const { id, src, width, height, alt } = props;

    return <img id={id} src={src} width={width} height={height} alt={alt} />;
};

export default Image;
