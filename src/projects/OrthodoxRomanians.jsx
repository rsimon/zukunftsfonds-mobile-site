import React from 'react';
import PageWithMenu from '../PageWithMenu';
import { useLang } from '../i18n';

const DESCRIPTION_GERMAN = 
  <>
    <p className="project-description">
      Dieses MA 7-Projekt präsentiert Persönlichkeiten, Orte und besondere historische Ereignisse der Repräsentanz 
      und des Engagements der orthodoxen Wiener RumänInnen. Tatsächlich reicht deren Geschichte und  Präsenz in 
      Österreich weit in das 17. Jahrhundert zurück. Die Zahl der rumänisch-orthodoxen Gläubigen war Mitte des 19. 
      Jahrhunderts  beeindruckend: eine Million in Ungarn und im Banat, zwei Millionen in Siebenbürgen und in der 
      Bukowina. Es war also eine ethnische und religiöse Gruppe, die nicht übersehen werden konnte. Zu Beginn des
      Ersten Weltkrieges hatte Österreich-Ungarn 53 Millionen Einwohner, davon waren 7% RumänInnen. Im Jahr 1910 
      lebten 4.757 orthodoxe RumänInnen in Wien. Nicht nur für die drei Millionen RumänInnen unter der Herrschaft
      der Habsburger, sondern auch für alle anderen RumänInnen war Wien lange Zeit das wichtigste europäische 
      Kulturzentrum. Dieses Forschungsprojekt veranschaulicht anhand biographischer Daten orthodoxer RumänInnen 
      in Wien im Zeitraum von 235 Jahren (1683-1918), wie die Orthodoxen nach Wien migrierten und wie sich
      die orthodoxen Händler hier niederließen. Anhand von in österreichischen Archiven recherchierten Daten 
      werden die Lebensgeschichten berühmter RumänInnen in Wien nachvollzogen und deren Wirkungsstätten lokalisiert.
    </p>
    <table className="project-meta">
      <tbody>
        <tr>
          <td>Laufzeit des Projekts:</td>
          <td>1. Oktober 2020 bis 31. Dezember 2021</td>
        </tr>

        <tr>
          <td>Gef&ouml;rdert von:</td>
          <td>Magistratsabteilung (MA) 7 - Kultur, Wissenschafts- und Forschungsförderung der Stadt Wien</td>            
        </tr>

        <tr>
          <td>Siehe dazu im Detail:</td>
          <td>
            <a href="https://orthodoxes-europa.at/projekte/Ein-Blick-in-die-gemeinsame-Vergangenheit">
              https://orthodoxes-europa.at/projekte/Ein-Blick-in-die-gemeinsame-Vergangenheit
            </a>
          </td>
        </tr>
    </tbody>
    </table>
  </>

const DESCRIPTION_ENGLISH = 
  <>
    <p className="project-description">
      This project, which is funded by the MA 7, presents personalities, places and special historical 
      events of the representation and commitment of the Orthodox Viennese Romanians. In fact, their history 
      and presence in Austria goes back far into the 17th century. The number of Romanian Orthodox believers 
      was impressive in the mid-19th century: one million in Hungary and the Banat, two million in 
      Transylvania and Bukovina. It was an ethnic and religious group which could not be overlooked. At 
      the beginning of the First World War, Austria-Hungary had 53 million inhabitants, 7% of whom were Romanians. 
      In 1910, 4,757 Orthodox Romanians lived in Vienna. For a long time, Vienna was not only the most important 
      European cultural centre for the three million Romanians under the rule of the Habsburgs, but also for all 
      other Romanians. This research project uses biographical data of Orthodox Romanians in Vienna over a period of 
      235 years (1683-1918) in order to illustrate how the Orthodox migrated to Vienna and how the Orthodox 
      merchants settled here. Based on data researched in Austrian archives, the lives of famous Romanians in 
      Vienna are traced and their places of work are localised.
    </p>
    <table className="project-meta">
      <tbody>
        <tr>
          <td>Duration of the Project:</td>
          <td>1 October 2020-31 December 2021</td>
        </tr>

        <tr>
          <td>Sponsored by:</td>
          <td>Magistratsabteilung (MA) 7 - Kultur, Wissenschafts- und Forschungsförderung der Stadt Wien</td> 
        </tr>

        <tr>
          <td>Cf. in detail:</td>
          <td>
            <a href="https://orthodoxes-europa.at/projekte/Ein-Blick-in-die-gemeinsame-Vergangenheit">
              https://orthodoxes-europa.at/projekte/Ein-Blick-in-die-gemeinsame-Vergangenheit
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </>

const PAGE_TITLE = {
  'de': 'Die orthodoxen RumänInnen (1683-1918)',
  'en': 'The Orthodox Romanians (1683-1918)'
}

const TEXT_TITLE = {
  'de': 'Ein Blick in die gemeinsame Vergangenheit: Die orthodoxen RumänInnen (1683-1918) in Wien und ihre digitale Verortung im Stadtbild',
  'en': 'A Look into the Common Past: The Orthodox Romanians (1683-1918) in Vienna and their Digital Location in the Cityscape'
}

const DESCRIPTION = {
  'de': DESCRIPTION_GERMAN,
  'en': DESCRIPTION_ENGLISH
}

const OrthodoxRomanians = props => {

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

  return (
    <PageWithMenu
      backButton  
      current="SerbsInVienna"
      title={PAGE_TITLE[lang]}
      {...props}>

      {content}

    </PageWithMenu>
  )

}

export default OrthodoxRomanians;