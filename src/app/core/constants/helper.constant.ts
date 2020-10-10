import {IMG_FORMAT} from './variables.constant';

export const IMG_FORMAT_PARSE = IMG_FORMAT.map(f => `.${f}`).join(', ');
