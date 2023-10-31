import { ComponentChild, ComponentChildren, VNode } from 'preact';
import { importScss } from '../../scss.js';
import { HtmlDocument } from '../html-document.js';

const style = importScss(import.meta, 'page.scss');

interface HomePlanPageProps {
    /**
     * Logo à afficher (dans un format compatible avec CSS url()).
     */
    logoSrc: string;

    /**
     * Un élément <h*> à insérer en tête de page.
     */
    title: ComponentChild;

    /**
     * Un élément <h*> à insérer juste en dessous du titre
     */
    subtitle?: ComponentChild

    /**
     * Contenu de la page.
     */
    children: ComponentChildren;

    /**
     * Styles CSS à appliquer en plus de ceux appliqués par {@link HtmlDocument} et {@link Page}.
     */
    styles?: string[];
}

/**
 * Fournit un squelette HTML5 complet avec un style CSS global effectuant un reset CSS simple.
 */
export function Page({ logoSrc, title, subtitle, children, styles }: HomePlanPageProps): VNode {
    const allStyles = [style, ...(styles ?? [])];

    // noinspection JSNonASCIINames,HtmlRequiredAltAttribute
    return <HtmlDocument styles={allStyles}>
        <main class="page">
            <header class="page-header">
                <div class="page-logo">
                    <img src={logoSrc} class="logo-brand"></img>
                </div>
                <div class="page-title">
                    <div>{title}</div>
                    <div>{subtitle}</div>
                </div>
            </header>
            {children}
        </main>
    </HtmlDocument>;
}
