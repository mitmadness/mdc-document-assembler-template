import { translateWithLocale } from '@mitm/intl';
import { Cart } from '@mydecocloud/interfaces/scrapper';
import { PageSizes } from 'pdf-lib';
import { DocumentChunk } from '../../../../mydecocloud/document-assembler/index.js';
import { defaultRegistry } from '../../../intl/index.js';
import { importScss } from '../../../scss.js';
import { roundTo } from '../../maths.js';
import { getPageSizeInPixels } from '../../units.js';
import { Building, getQuantitativeSurveyFromCart } from '../common.js';
import { Page } from '../page.js';

const style = importScss(import.meta, 'index.scss');

export function create(
    cart: Cart,
    logoSrc: string): DocumentChunk {

    const building = getQuantitativeSurveyFromCart(cart);

    const t = translateWithLocale(defaultRegistry, 'fr');

    /**
     * Liste des roomType qui corresponde à la liste des labels dits habitable
     */
    const habitablesRoomType: string[] = ['habitable', 'dining', 'kitchen', 'bathroom', 'dressing', 'hall', 'livable',
        'bedroom', 'living', 'wc'];

    /**
     * Liste des roomType qui corresponde à la liste des labels dits annexe
     */
    const annexesRoomType: string[] = ['annex', 'cellar', 'technical', 'installations'];

    /**
     * Liste des roomType qui corresponde à la liste des labels dits extérieur
     */
    const exteriorRoomType: string[] = ['exterior'];

    /**
     * Liste des roomType qui corresponde à la liste des labels dits garage
     */
    const garageRoomType: string[] = ['garage'];

    /**
     * Liste des roomType qui corresponde à la liste des labels dits sans plancher
     */
    const withoutFloorRoomType: string[] = ['serviceShaft', 'ceilingHole'];

    //=> On va récupérer pour chaque type de label les pièces correspondantes triées par étage
    // avec l'aire totale que ça représente
    const habitableLabelsAreaInfos = computeLabelArea(building, habitablesRoomType);
    const habitableFloorsArea: number[] = habitableLabelsAreaInfos[0];
    const habitableBuildingArea: number = habitableLabelsAreaInfos[1];

    const annexeLabelsAreaInfos = computeLabelArea(building, annexesRoomType);
    const annexeFloorsArea: number[] = annexeLabelsAreaInfos[0];
    const annexeBuildingArea: number = annexeLabelsAreaInfos[1];

    const exteriorLabelsAreaInfos = computeLabelArea(building, exteriorRoomType);
    const exteriorFloorsArea: number[] = exteriorLabelsAreaInfos[0];
    const exteriorBuildingArea: number = exteriorLabelsAreaInfos[1];

    const garageLabelsAreaInfos = computeLabelArea(building, garageRoomType);
    const garageFloorsArea: number[] = garageLabelsAreaInfos[0];
    const garageBuildingArea: number = garageLabelsAreaInfos[1];

    const withoutFloorLabelsAreaInfos = computeLabelArea(building, withoutFloorRoomType);
    const withoutFloorsArea: number[] = withoutFloorLabelsAreaInfos[0];
    const withoutFloorBuildingArea: number = withoutFloorLabelsAreaInfos[1];

    return {
        kind: 'puppeteer',
        title: `Récapitulatif`,
        pdfOptions: getPageSizeInPixels(PageSizes.A4),
        async renderDom() {
            return <Page styles={[style]} logoSrc={logoSrc}
                         title={<h2>Récapitulatif</h2>}>

                <div class="info-page">
                    <h3>Détails des surfaces par étage</h3>

                    {building.floors.map(floor =>
                        <><table className="table-layer">
                            <thead class="table-layer-header">
                                <th class="text-left">{floor.index == 0 ? 'REZ-DE-CHAUSSÉE' :
                                    'ÉTAGE ' + floor.index}</th>
                                <th class="text-right">HABITABLES</th>
                                <th class="text-right">ANNEXES</th>
                                <th class="text-right">SANS PLANCHER</th>
                                <th class="text-right">EXTÉRIEURES</th>
                                <th class="text-right">GARAGE</th>
                            </thead>
                            <tbody>
                                {floor.rooms.map(room => room.roomType == 'undefined' ? undefined :
                                    <><tr class={room.index % 2 == 0 ? 'layer-even' : 'layer-odd'}>
                                        <td class="text-left">
                                            {t('ScrapperReport.Common.RoomLabel.' + room.name.replace(/\s/g, ''))}
                                        </td>
                                    <td class={habitablesRoomType.includes(room.roomType) ?
                                        'text-right' : 'text-right-na'}>
                                        {habitablesRoomType.includes(room.roomType) ?
                                            <>{roundTo(room.flooringArea, 2)} m²</> : <>n/a</>}
                                    </td>
                                    <td class={annexesRoomType.includes(room.roomType) ?
                                        'text-right' : 'text-right-na'}>
                                        {annexesRoomType.includes(room.roomType) ?
                                            <>{roundTo(room.flooringArea, 2)} m²</> : <>n/a</>}
                                    </td>
                                    <td class={withoutFloorRoomType.includes(room.roomType) ?
                                        'text-right' : 'text-right-na'}>
                                        {withoutFloorRoomType.includes(room.roomType) ?
                                            <>{roundTo(room.flooringArea, 2)} m²</> : <>n/a</>}
                                    </td>
                                    <td class={exteriorRoomType.includes(room.roomType) ?
                                        'text-right' : 'text-right-na'}>
                                        {exteriorRoomType.includes(room.roomType) ?
                                            <>{roundTo(room.flooringArea, 2)} m²</> : <>n/a</>}
                                    </td>
                                    <td class={garageRoomType.includes(room.roomType) ?
                                        'text-right' : 'text-right-na'}>
                                        {garageRoomType.includes(room.roomType) ?
                                            <>{roundTo(room.flooringArea, 2)} m²</> : <>n/a</>}
                                    </td>
                                    </tr></>
                                )}
                                <tr class="total-floor">
                                    <td class="text-right total-floor-label">TOTAL</td>
                                    <td class="text-right total-floor-type">{habitableFloorsArea[floor.index] != 0 ?
                                        <>{habitableFloorsArea[floor.index]} m²</> : undefined}</td>
                                    <td class="text-right total-floor-type">{annexeFloorsArea[floor.index] != 0 ?
                                        <>{annexeFloorsArea[floor.index]} m²</> : undefined}</td>
                                    <td class="text-right total-floor-type">{withoutFloorsArea[floor.index] != 0 ?
                                        <>{withoutFloorsArea[floor.index]} m²</> : undefined}</td>
                                    <td class="text-right total-floor-type">{exteriorFloorsArea[floor.index] != 0 ?
                                        <>{exteriorFloorsArea[floor.index]} m²</> : undefined}</td>
                                    <td class="text-right total-floor-type">{garageFloorsArea[floor.index] != 0 ?
                                        <>{garageFloorsArea[floor.index]} m²</> : undefined}</td>
                                </tr>
                            </tbody >
                        </table><br></br></>
                    )}

                   <><h3 style="padding-top: 1cm;">Total des surfaces par type</h3>
                        <table className="table-layer">
                            <thead class="table-layer-header">
                                <th class="text-left">TYPE</th>
                                <th class="text-right">TOTAL</th>
                            </thead>
                            <tbody>
                                <tr class="layer-even">
                                    <td class="text-left">Surfaces habitables</td>
                                    <td class="text-right">{habitableBuildingArea} m²</td>
                                </tr>
                                <tr class="layer-odd">
                                    <td class="text-left">Surfaces annexes</td>
                                    <td class="text-right">{annexeBuildingArea} m²</td>
                                </tr>
                                <tr class="layer-even">
                                    <td class="text-left">Surfaces sans plancher</td>
                                    <td class="text-right">{withoutFloorBuildingArea} m²</td>
                                </tr>
                                <tr class="layer-odd">
                                    <td class="text-left">Surfaces extérieures</td>
                                    <td class="text-right">{exteriorBuildingArea} m²</td>
                                </tr>
                                <tr class="layer-even">
                                    <td class="text-left">Garage</td>
                                    <td class="text-right">{garageBuildingArea} m²</td>
                                </tr>
                            </tbody>
                        </table></>
                </div>
            </Page>;
        }
    };
}

export function computeLabelArea(building: Building, specifiedRoomType: string[]) {
    // Le total de l'aire des labels du type indiqué en paramètre de l'étage
    let totalFloorArea: number = 0;
    // Le total de l'aire de tous les labels de ce type
    let totalBuildingArea: number = 0;
    // La liste des labels de ce type à afficher et trier par étage
    const totalFloorAreaList: number[] = [];

    // Pour chaque étage, on regarde les pièces et on stocke l'aire de celles qui correspondent
    // au type demandé. Elles sont ensuite stockées dans la liste des labels à afficher
    building.floors.forEach(floor => {
        totalFloorArea = 0;
        floor.rooms.forEach(room => {
            if (specifiedRoomType.includes(room.roomType)) {
                totalFloorArea += roundTo(room.flooringArea, 2);
                totalBuildingArea += roundTo(room.flooringArea, 2);
            }
        });

        totalFloorAreaList.push(roundTo(totalFloorArea, 2));
    });

    // On retourne la liste des labels à afficher et l'aire totale de ceux-ci
    return [totalFloorAreaList, roundTo(totalBuildingArea, 2)] as const;
}
