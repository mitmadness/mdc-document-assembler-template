import { Maybe } from '@mitm/common';
import config from '../config.js';
import { Query } from '../graphql.generated.js';

/**
 * Fetches resources URLs using Pictures GraphQL endpoint of myDecoCloud.
 *
 * @returns an object with resources names as keys and their url in values
 */
export async function getResourcesUrls(brandId: string, resourcesNames: string[]): Promise<Record<string, string>> {
    if (!resourcesNames.length) {
        return {};
    }

    // Prepare the request, we need a `pictureFindOne` GraphQL query for each resource, but we can do it in one HTTP
    // request
    const resourcesResponse = await fetch(config.mydecocloud.graphqlUrl, {
        method: 'POST',
        body: JSON.stringify({
            operationName: 'FindPictures',
            query: `query FindPictures {
                ${resourcesNames.map((resourceName, index) => `
                    ${queryAlias(index)}: pictureFindOne(filter: { brandId: "${brandId}", name: "${resourceName}" }) {
                        url
                    }
                `)}
            }`,
            variables: {}
        }),
        headers: {
            'Content-Type': 'application/json',
            'X-Client': 'Document Assembler HomePlan'
        }
    });

    const resourcesResponseJson = await resourcesResponse.json();

    if (resourcesResponseJson.errors) {
        throw new Error(resourcesResponseJson.errors?.[0]?.message ?? 'Error fetching resources');
    }

    const resources = resourcesResponseJson.data as {
        [key: `resource${number}`]: Maybe<Pick<NonNullable<Query['pictureFindOne']>, 'url'>>
    };

    // Map the URLs from
    return Object.fromEntries(resourcesNames
        .filter((_name, index) => !!resources[queryAlias(index)])
        .map((name, index) => [name, resources[queryAlias(index)]!.url]));

    function queryAlias(index: number): `resource${number}` {
        return `resource${index}`;
    }
}
