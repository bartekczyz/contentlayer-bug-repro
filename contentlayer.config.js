import { defineDocumentType, makeSource } from 'contentlayer/source-files';

const ComponentDoc = defineDocumentType(() => ({
  name: 'ComponentDoc',
  filePathPattern: '**/*.mdx',
  contentType: 'mdx',
  fields: {
    title: { type: 'string' },
    category: { type: 'enum', options: ['form'] },
  },
  computedFields: {
    frontMatter: {
      type: 'json',
      resolve: (doc) => ({
        title: doc.title,
        slug: doc._raw.sourceFileName.replace('.mdx', ''),
      }),
    },
  },
}));



const contentLayerConfig = makeSource({
  contentDirPath: 'src',
  documentTypes: [ComponentDoc],

});

export default contentLayerConfig;
