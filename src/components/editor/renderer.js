import { Sup } from './sup';
import { Blockquote } from './blockquote';

export default function renderer(contentBlock) {
  const type = contentBlock.getType();
  if (type === 'sup') {
    return {
      component: Sup,
      editable: false,
      props: {
        foo: 'bar',
      },
    };
  }

  /*
  if (type === 'blockquote') {
    return {
      component: Blockquote,
      editable: true,
    };
  }
  */
}
