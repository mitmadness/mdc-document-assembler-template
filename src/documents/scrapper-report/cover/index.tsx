import { ensureNonNull, ensureString } from '@mitm/common';
import { InputDocumentManifest } from '@mydecocloud/interfaces/documents';
import { Cart } from '@mydecocloud/interfaces/scrapper';
import { PageSizes } from 'pdf-lib';
import { DocumentChunk } from '../../../../mydecocloud/document-assembler/index.js';
import { importScss } from '../../../scss.js';
import { getPageSizeInPixels } from '../../units.js';
import { ExportData } from '../index.js';
import { Page } from '../page.js';

const style = importScss(import.meta, 'index.scss');

type SalesPersonInfo = NonNullable<InputDocumentManifest<'scrapper-report'>['input']['member']>;

export async function create(
    cart: Cart,
    salesPerson: SalesPersonInfo,
    logoSrc: string): Promise<DocumentChunk> {

    // Contient les informations du formulaire de contact, soit les coordonnées du client et l'adresse du projet.
    const data = ensureString(cart.exportData);

    const exportData = JSON.parse(data) as ExportData;
    const customer = ensureNonNull(exportData.customer);
    const today = new Date();

    const hasAdditionalCustomer = !!customer.surnameAdditional || !!customer.firstnameAdditional;

    // On récupère le premier world screenshot pour servir de couverture.
    const front = cart.pictures?.find(picture => picture.name == 'house');

    return {
        kind: 'puppeteer',
        title: `Informations projet`,
        warnings: [],
        pdfOptions: getPageSizeInPixels(PageSizes.A4),
        renderDom: () => <Page
            styles={[style]}
            logoSrc={logoSrc}
            title={<h1>Votre projet</h1>}
            subtitle={<h2>{cart.saveName}</h2>}>

            <div class="cover-picture">
                <img src={front!.fileContent} class="cover-picture-img"></img>
            </div>

            <div class="info-columns">
                <h2 className="section-title">INFORMATIONS CLIENT</h2>
                <table class="customer-table">
                    <tr class="odd">
                        <td class="data-item">Nom</td>
                        <td class="data-emphasis">{customer.surname}</td>
                    </tr>
                    <tr class="even">
                        <td class="data-item">Prénom</td>
                        <td class="data-emphasis">{customer.firstname}</td>
                    </tr>
                    {!hasAdditionalCustomer ? null : <>
                        <tr className="odd">
                            <td className="data-item">Nom (Acquéreur 2)</td>
                            <td className="data-emphasis">{customer.surnameAdditional}</td>
                        </tr>
                        <tr className="even">
                            <td className="data-item">Prénom (Acquéreur 2)</td>
                            <td className="data-emphasis">{customer.firstnameAdditional}</td>
                        </tr>
                    </>}
                    <tr class="odd">
                        <td class="data-item">eMail</td>
                        <td class="data-emphasis">{customer.email}</td>
                    </tr>
                    <tr class="even">
                        <td class="data-item">Adresse</td>
                        <td class="data-emphasis">{customer.address}</td>
                    </tr>
                    <tr class="odd">
                        <td class="data-item">Code Postal</td>
                        <td class="data-emphasis">{customer.zipCode}</td>
                    </tr>
                    <tr class="even">
                        <td class="data-item">Ville</td>
                        <td class="data-emphasis">{customer.city}</td>
                    </tr>
                    <tr class="odd">
                        <td class="data-item">Téléphone</td>
                        <td class="data-emphasis">{customer.phone}</td>
                    </tr>
                </table>
            </div>
            <div class="info-contact">
                <h2 className="section-title" style="margin-top: 1.5cm">CONTACT</h2>
                <table className="salesman-table">
                    <tr className="odd">
                        <td className="data-item">Responsable affaire</td>
                        <td className="data-emphasis">{salesPerson.userName}</td>
                    </tr>
                    <tr className="even">
                        <td className="data-item">eMail</td>
                        <td className="data-emphasis">{salesPerson.userEmail}</td>
                    </tr>
                    <tr className="odd">
                        <td className="data-item">Date de création</td>
                        <td className="data-emphasis">{today.toLocaleDateString('fr-FR')}</td>
                    </tr>
                </table>
            </div>
        </Page>
    };
}
