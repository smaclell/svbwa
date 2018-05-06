import { Sup } from './sup';

export default function myBlockRenderer(contentBlock) {
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
}
