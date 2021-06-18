import React from 'react';
import PageWithMenu from '../../PageWithMenu';
import DesktopPageWithMenu from '../../DesktopPageWithMenu';
import { useLang } from '../../i18n';

const DESCRIPTION_GERMAN = 
  <>
    <p className="project-description">
      In diesem Forschungsprojekt wurden biographische Daten zu den orthodoxen 
      Wiener SerbInnen von 1741 bis 1918, und hier zu bedeutenden Persönlichkeiten 
      des politischen, sozialen, wirtschaftlichen, wissenschaftlichen und 
      kulturellen Lebens der Zeit, in den Wiener Archiven, zu ihren Wohnorten und 
      zu ihren Wirkungsst&auml;tten in Wien recherchiert. Die biographischen Abrisse und 
      Lokalisierungen von Wohnorten und Wirkungsstätten wurden in eine OpenAtlas 
      Datenbank eingegeben und sind online über das &quot;Digitale Geoportal der Geschichte 
      der Orthodoxen in &Ouml;sterreich&quot; für interessierte InternetnutzerInnen frei 
      abrufbar. Die Daten umfassen insgesamt 282 Personen und 256 Orte. Solch eine 
      Forschung ist für Wien unter anderem deshalb von großer Bedeutung, weil die 
      Spuren berühmter SerbInnen in Wien derzeit lediglich mit einigen wenigen 
      Gedenktafeln im &ouml;ffentlichen Raum dokumentiert sind. Mit Hilfe des Geoportals 
      k&ouml;nnen Stadtspazierg&auml;nge gezielt geplant und interessante, historische 
      Pl&auml;tze aufgesucht werden.
    </p>
    <table className="project-meta">
      <tbody>
        <tr>
          <td>Laufzeit des Projekts:</td>
          <td>1. J&auml;nner 2018-30. Juni 2019</td>
        </tr>

        <tr>
          <td>Gef&ouml;rdert von:</td>
          <td>Magistratsabteilung (MA) 7 –Kultur, Wissenschafts-und Forschungsf&ouml;rderung der Stadt Wien für 2017</td>            
        </tr>

        <tr>
          <td>Siehe dazu im Detail:</td>
          <td>
            <a href="https://orthodoxes-europa.at/projekte/Digitales-Geoportal-der-Geschichte-der-SerbInnen-in-Wien">
              Digitales Geoportal der Geschichte der SerbInnen in Wien
            </a>
          </td>
        </tr>
    </tbody>
    </table>
  </>

const DESCRIPTION_ENGLISH = 
  <>
    <p className="project-description">
      In this project research on the biographies of the Orthodox Viennese Serbs from 1741 until 1918, 
      i.e. significant personalities of the political, social, economic, scientific and cultural life of 
      the time, was conducted in Viennese archives as well as on their places of residence and of work 
      in Vienna. The biographical data and the respective localisations of places of residence and of 
      work were embedded into an OpenAtlas database and may be accessed freely online by the general 
      public via the &quot;Digital Geoportal of the History of the Orthodox in Austria&quot;. The data 
      comprises 282 personalities and 256 places. Such research is of great importance for Vienna, amongst 
      others, because the traces of famous Serbs in Vienna are currently only documented with a few 
      memorial plaques in public space. Based on the Geoportal specific city walks can be planned and 
      interesting, historic places can be visited.  
    </p>
    <table className="project-meta">
      <tbody>
        <tr>
          <td>Duration of the Project:</td>
          <td>1 January 2018-30 June 2019</td>
        </tr>

        <tr>
          <td>Sponsored by:</td>
          <td>Magistratsabteilung (MA) 7 –Kultur, Wissenschafts-und Forschungsförderung der Stadt Wien für 2017</td> 
        </tr>

        <tr>
          <td>Cf. in detail:</td>
          <td>
            <a href="https://orthodoxes-europa.at/projekte/Digitales-Geoportal-der-Geschichte-der-SerbInnen-in-Wien">
              Digitales Geoportal der Geschichte der SerbInnen in Wien
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </>

const PAGE_TITLE = {
  'de': 'SerbInnen in Wien 1741-1918',
  'en': 'Serbs in Vienna 1741-1918'
}

const TEXT_TITLE = {
  'de': 'Ein digitales Geoportal der Geschichte der SerbInnen in Wien (1741-1918)',
  'en': 'A Digital Geoportal of the History of the Serbs in Vienna (1741-1918)'
}

const DESCRIPTION = {
  'de': DESCRIPTION_GERMAN,
  'en': DESCRIPTION_ENGLISH
}

const SerbsInVienna = props => {

  const lang = useLang();

  const content = 
    <div className="fill-height">
      <div className="page-container fill-height">
        <h1>{TEXT_TITLE[lang]}</h1>
        <div>
          {DESCRIPTION[lang]}
        </div>
      </div>
      <footer>
        <img src="images/wienkultur_logo_RGB.png" alt="Logo Wien Kultur"></img>
      </footer>
    </div>

  return props.isDesktop ?
    <DesktopPageWithMenu
      navigator={props.navigator}>
      {content}
    </DesktopPageWithMenu> :

    <PageWithMenu
      title={PAGE_TITLE[lang]}
      navigator={props.navigator}
      backButton>
    </PageWithMenu>

}

export default SerbsInVienna;