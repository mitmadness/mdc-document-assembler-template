import { ensureNonNull, ensureString } from '@mitm/common';
import { rgb } from 'pdf-lib';
import speakingurl from 'speakingurl';
import {
    Document, DocumentChunksMap, DocumentParameters, withParameters
} from '../../../mydecocloud/document-assembler/index.js';
import * as coverChunk from './cover/index.js';
import * as quoteChunk from './quote/index.js';
import * as rendersChunk from './renders/index.js';
import { centimetersPerInch, inToPt } from '../units.js';
import fetch from 'node-fetch';
import { getResourcesUrls } from '../mydecocloud-resources.js';

// @todo have this in Cart?
export type Customer = {
    firstname: string;
    surname: string;

    firstnameAdditional?: string;
    surnameAdditional?: string;

    email?: string;
    city?: string;
    zipCode?: string;
    address?: string;
    phone?: string;
}

export type ExportData = {
    customer: Customer | null;
}

export function generateScrapperReport(parameters: DocumentParameters<'scrapper-report'>): Document {
    const { brandId, cart, member: salesPerson } = parameters.input;

    // On ne devrait pas recevoir un utilisateur null dans le tunnel Home Plan
    // qui s'utilise uniquement en mode connecté.
    ensureNonNull.assert(salesPerson);

    const data = ensureString(cart.exportData);

    const exportData = JSON.parse(data) as ExportData;
    const customer = ensureNonNull(exportData.customer);
    const today = new Date();

    const customerName = customer.surname.toUpperCase() + ' ' + customer.firstname;
    const footer = 'Client : ' + customerName + ' - Date : ' + today.toLocaleDateString('fr-FR');

    return {
        fallbackTitle: `Projet Home Plan`,
        fallbackAuthor: `Home Plan`,
        chunks: {
            report: withParameters<{ logoResource: string, footerResource: string }>({
                parametersJtd: {
                    properties: {
                        logoResource: { type: 'string' },
                        footerResource: { type: 'string' }
                    }
                },
                defaultParameters: {
                    logoResource: 'Unknown',
                    footerResource: 'Unknown'
                },
                chunk: async ({ logoResource, footerResource }) => {
                    const picturesUrls = await getResourcesUrls(brandId, [logoResource, footerResource]);

                    const logoSrc = picturesUrls[logoResource];
                    const footerSrc = picturesUrls[footerResource];

                    return {
                        kind: 'group',
                        title: 'Devis',
                        render: !!logoSrc && !!footerSrc,
                        warnings: [
                            {
                                condition: !logoSrc,
                                message: `L'image "${logoResource} ne peut être trouvée dans les ressources de la marque.`
                            },
                            {
                                condition: !footerSrc,
                                message: `L'image "${footerResource} ne peut être trouvée dans les ressources de la marque.`
                            },
                        ],
                        children: {
                            cover: withParameters<{}>({
                                parametersJtd: {
                                    properties: {
                                    }
                                },
                                defaultParameters: {
                                },
                                chunk: ({}) => coverChunk.create(cart, salesPerson, logoSrc!)
                            }),
                            renders: rendersChunk.create(cart, logoSrc!),
                            options: quoteChunk.create(cart, logoSrc!)
                        }
                    };
                }
            }),
            pdfs: withParameters<{ documents: Array<{ name: string, resource: string }> }>({
                parametersJtd: {
                    properties: {
                        documents: {
                            elements: {
                                properties: {
                                    name: { type: 'string' },
                                    resource: { type: 'string' }
                                }
                            }
                        }
                    }
                },
                defaultParameters: {
                    documents: []
                },
                async chunk({ documents }) {
                    const pdfsUrls = await getResourcesUrls(brandId, documents.map(doc => doc.resource));

                    return {
                        kind: 'group',
                        title: 'Documents',
                        render: Object.keys(pdfsUrls).length > 0,
                        children: documents.reduce<DocumentChunksMap>((map, { name, resource }) => {
                            const pdfUrl = pdfsUrls[resource];

                            map[speakingurl(name)] = {
                                kind: 'merge',
                                title: name,
                                render: !!pdfUrl,
                                warnings: [
                                    {
                                        condition: !pdfUrl,
                                        message: `Le PDF "${resource}" de la section "${name}" ne peut-être trouvé dans les ressources de la marque.`
                                    }
                                ],
                                async load() {
                                    const response = await fetch(pdfUrl!);
                                    const document = await response.arrayBuffer()

                                    return { document };
                                }
                            };

                            return map;
                        }, {})
                    };
                }
            })
        },
        paginate: (_) => (page, pageNumber) => {
            const margin = inToPt(0.5 / centimetersPerInch)
            const color = rgb(.7, .7, .7);
            const pageColor = rgb(.1, .1, .1);

            page.drawText(footer, {
                x: margin,
                y: margin,
                size: 12,
                color
            });

            page.drawText(pageNumber.toString(), {
                x: page.getWidth() - 3 * margin,
                y: margin,
                size: 12,
                color: pageColor
            });
        }
    };
}

export default generateScrapperReport;
