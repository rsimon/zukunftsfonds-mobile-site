import React from 'react';
import PageWithMenu from '../../PageWithMenu';
import { useLang } from '../../i18n';

const DESCRIPTION_GERMAN = 
  <>
    <p className="project-description">
      In diesem Projekt beschäftigen wir uns mit dem schweren Los der Zivilbevölkerung im 
      Ersten Weltkrieg (1914-1918) und hier im besonderen mit der östlichen Front 
      Österreich-Ungarns in diesem weltumspannenden Konflikt. Mit dem Ausbruch des Ersten 
      Weltkriegs am 28. Juli 1914 gelang es der Armee des Zarenreichs Russland zunächst, in 
      der Bukowina und in Ostgalizien (d. h. im heutigen Polen, Rumänien und der Ukraine) tief auf
      das Staatsgebiet Österreich-Ungarns einzudringen. Dies hatte zur Folge, dass die
      dortige – zu einem beträchtlichen Teil orthodoxe – Bevölkerung floh/fliehen musste und 
      in der Folge in andere Teile der Monarchie evakuiert werden musste. Daraufhin begann die 
      Statthalterei von Niederösterreich (damals das Erzherzogtum Österreich unter der Enns), 
      zivile Flüchtlingslager – unter anderem in Oberhollabrunn – für die eigenen Staatsbürger 
      einzurichten.
    </p>
    <p className="project-description">
      Unser Forschungsprojekt verwendet unveröffentlichte Bestände des Archivs der griechisch-orthodoxen 
      Kirchengemeinde zur Heiligen Dreifaltigkeit in der Metropolis von Austria (1010 Wien). 
      Basierend auf 343 Totenbeschaubefunden zu den orthodoxen Flüchtlingen im Flüchtlingslager 
      Oberhollabrunn können wir nachvollziehen, wo die Verstorbenen geboren wurden, welchen Beruf sie 
      hatten, aus welchen Orten sie geflohen sind etc. Dadurch entsteht ein Bild ihrer Flucht und ihres 
      Schicksals vor unseren Augen. Dieses holen wir mit digitalen Karten und datenbankbasierten 
      Suchfunktionen aus der Vergessenheit und machen es der interessierten Öffentlichkeit zugänglich.
    </p>
    <table className="project-meta">
      <tbody>
        <tr>
          <td>Laufzeit des Projekts:</td>
          <td>1. Juli 2020 bis 1. August 2021</td>
        </tr>

        <tr>
          <td>Gefördert von:</td>
          <td>Zukunftsfonds der Republik Österreich</td>            
        </tr>

        <tr>
          <td>Siehe dazu im Detail:</td>
          <td>
            <a href="https://orthodoxes-europa.at/projekte/Flucht-Gefangenschaft-Neubeginn-und-Widerstand">
              Flucht, Gefangenschaft, Neubeginn und Widerstand
            </a>
          </td>
        </tr>
    </tbody>
    </table>
  </>

const DESCRIPTION_ENGLISH = 
  <>
    <p className="project-description">
      In this project we deal with the severe fate of the civilian population in the First 
      World War (1914-1918) and in particular with the Eastern Front of Austria-Hungary in 
      this worldwide conflict. With the outbreak of the First World War on 28 July 1914, 
      the army of the Tsardom of Russia first succeeded in penetrating deeply into the 
      territory of Austria-Hungary in Bukovina and in Eastern Galicia (i.e. in today's 
      Poland, Romania and Ukraine). As a result, the local population – to a considerable 
      extent Orthodox – fled/had to flee and had to be evacuated to other parts of the 
      Austro-Hungarian Monarchy. As a result, the governorship of Lower Austria (then the 
      Archduchy of Austria below the River Enns) began to set up civilian refugee 
      camps – amongst others in Oberhollabrunn – for their own citizens.
    </p>
    <p className="project-description">
      Our research project uses unpublished holdings of the archive of the Greek-Orthodox 
      parish of the Holy Trinity in the Metropolis of Austria (1010 Vienna). Based on 343 
      post mortem examinations of the Orthodox refugees in the refugee camp Oberhollabrunn, 
      we can trace where the deceased were born, what profession they had, from which places 
      they fled, etc. This creates a vivid picture of their flight and their subsequent 
      fate before our eyes. By means of digital maps and database-related search 
      functions we bring this picture out of oblivion and make it accessible to the 
      interested public.  
    </p>
    <table className="project-meta">
      <tbody>
        <tr>
          <td>Duration of the Project:</td>
          <td>1 July 2020-1 August 2021</td>
        </tr>

        <tr>
          <td>Sponsored by:</td>
          <td>Zukunftsfonds der Republik Österreich</td> 
        </tr>

        <tr>
          <td>Cf. in detail:</td>
          <td>
            <a href="https://orthodoxes-europa.at/projekte/Flucht-Gefangenschaft-Neubeginn-und-Widerstand">
              Flucht, Gefangenschaft, Neubeginn und Widerstand
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </>

const PAGE_TITLE = {
  'de': 'Auf der Flucht in der Monarchie',
  'en': 'On the Run in the Austro-Hungarian Monarchy'
}

const TEXT_TITLE = {
  'de': 'Auf der Flucht in der Monarchie – das Schicksal der orthodoxen Flüchtlinge im Lager Oberhollabrunn (1914-1918)',
  'en': 'On the Run in the Austro-Hungarian Monarchy – the Fate of Orthodox Refugees in the Camp Oberhollabrunn (1914-1918)'
}

const DESCRIPTION = {
  'de': DESCRIPTION_GERMAN,
  'en': DESCRIPTION_ENGLISH
}

const CampOberhollabrunn = props => {

  const lang = useLang();

  return(
    <PageWithMenu
      title={PAGE_TITLE[lang]}
      navigator={props.navigator}
      backButton>
      <div className="page-container">
        <h1>{TEXT_TITLE[lang]}</h1>
        <div>
          {DESCRIPTION[lang]}
        </div>
      </div>
      <footer>
        <img src="images/zf_logo.png" alt="Logo Zukunftsfonds der Republik Österreich"></img>
      </footer>
    </PageWithMenu>
  )
}

export default CampOberhollabrunn;