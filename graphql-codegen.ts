import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
    overwrite: true,
    schema: 'https://mydecocloud.com/graphql',
    emitLegacyCommonJSImports: false,
    documents: ['src/**/*.graphql'],
    generates: {
        'schema.graphql': {
            plugins: ['schema-ast']
        },
        './src/graphql.generated.ts': {
            plugins: ['typescript', 'typescript-operations', 'typed-document-node']
        }
    }
};

export default config;
