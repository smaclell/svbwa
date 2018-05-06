import { CompositeDecorator } from 'draft-js';

import { ChapterDecorator, VerseDecorator } from './sup';

export default new CompositeDecorator([
  ChapterDecorator,
  VerseDecorator,
]);
