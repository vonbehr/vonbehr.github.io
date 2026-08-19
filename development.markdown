---
title: Development
permalink: /development/
---

Auswahl technischer Werkzeuge und Workflows, die ich als CG Supervisor und Pipeline Engineer bei The Scope GmbH konzipiert und entwickelt habe. Alle Tools sind in Python realisiert, größtenteils mit PySide/Qt-Oberflächen, und laufen produktiv innerhalb der Maya/V-Ray Pipeline für automotive CGI Produktionen.

# Python Pipeline Tools
Python Scripte zur Automatisierung wiederkehrender Aufgaben in Maya. Von der Szenenvalidierung über Shading und Beleuchtung bis zur automatisierten Qualitätssicherung. Ziel war es, manuelle Fehlerquellen im Produktionsalltag zu reduzieren und den Weg von der fertigen Szene bis zur Abgabe zu standardisieren und zu beschleunigen.

## Render Toolbox
Python-Tool zur automatisierten Vorbereitung von Maya Szenen für das Rendering. Es prüft Szene und Rendersettings gegen definierte Standards, bevor eine Szene freigegeben wird, und wendet Rendersettings über konfigurierbare Presets an, statt sie manuell pro Shot einzustellen. Darüber hinaus legt es automatisch die für die jeweilige Szene benötigten AOVs an, setzt notwendige Motionblur Overrides und erzeugt custom Renderlayer inklusive individueller Framerange pro Kamera. Dadurch wird der Setup Prozess für komplexe Multi-Kamera Shots deutlich beschleunigt und fehlerhafte Renderings vermieden.

<figure class="dev-gallery third">
  <img src="{{ '/assets/images/development/RenderToolbox.jpg' | relative_url }}" alt="Render Setup UI" loading="lazy">
  <figcaption>Render Setup</figcaption>
</figure>

## Shader Sync
Werkzeug zum Export und Import von V-Ray Shadern zwischen Maya Szenen, um konsistentes Look Development über Shots und Projekte hinweg zu gewährleisten. Shader können projektgebunden oder in einer studioweiten, universellen Bibliothek abgelegt werden. Eine integrierte Vergleichslogik erkennt anhand von Fingerprints bzw. Versionsständen, welche Shader sich seit dem letzten Sync verändert haben, und synchronisiert ausschließlich diese, inklusive eines Vorschau Modus, der alle geplanten Änderungen vor der Ausführung anzeigt. Das verhindert unnötige Datenübertragung und versehentliches Überschreiben bereits abgestimmter Looks.

<figure class="dev-gallery third">
  <img src="{{ '/assets/images/development/ShaderSync.jpg' | relative_url }}" alt="Shader Sync UI" loading="lazy">
  <figcaption>Shader Sync</figcaption>
</figure>

## V-Ray Scenes Tool
Batch Werkzeug zur Analyse von V-Ray Scenes und aller damit verknüpften Assets. Es prüft referenzierte Pfade auf fehlende oder außerhalb des Projekts liegende Abhängigkeiten, sucht gezielt in wählbaren Ordnern nach fehlenden Dateien und verknüpft diese und kopiert und ändert die Pfade der Szenen samt aller Abhängigkeiten, wahlweise für eine einzelne .vrscene Datei oder im Batch Modus für alle geladenen V-Ray Scenes, inklusive verlinkter Assets. Ein Vorschau-Modus zeigt sämtliche geplanten Kopier- und Relink-Schritte vorab an, bevor etwas verändert wird, und optionale Analyse- bzw. Vorschau Berichte dokumentieren den Vorgang für Team-Reviews und Abgaben.

<figure class="dev-gallery third">
  <img src="{{ '/assets/images/development/vrsceneTools.jpg' | relative_url }}" alt="V-Ray Scenes Tool UI" loading="lazy">
  <figcaption>V-Ray Scenes Tool</figcaption>
</figure>

## Lightselect Manager
UI-Tool zum gezielten anlegen von Light-Select AOVs für das Compositing. Zusätzlich können Lichter geschaltet werden. Eine integrierte Prüfung stellt sicher, dass die Output-Namen der AOVs korrekt und eindeutig sind. Zusätzlich lässt sich die Liste der angezeigten Lichter nach Sichtbarkeit und Status (an/aus) filtern, was die Arbeit mit umfangreichen Licht-Rigs auf komplexen Produktszenen deutlich übersichtlicher macht. Für eine bessere Übersichtlichkeit werden instanzierte Lichter gruppiert.

<figure class="dev-gallery third">
  <img src="{{ '/assets/images/development/LightselectManager.jpg' | relative_url }}" alt="Lightselect Manager UI" loading="lazy">
  <figcaption>Lightselect Manager</figcaption>
</figure>

## Save Sun
Kompaktes Tool zum Speichern und Laden der V-Ray Sun Attribute als JSON Preset. Beleuchtungssetups (Sonnenstand, Intensität, Trübung etc.) lassen sich damit einmal definieren und anschließend reproduzierbar über verschiedene Szenen und Projekte hinweg wiederverwenden, ohne sie jedes Mal manuell neu einzustellen.

<figure class="dev-gallery third">
  <img src="{{ '/assets/images/development/saveTheSun.jpg' | relative_url }}" alt="Save Sun UI" loading="lazy">
  <figcaption>Save Sun</figcaption>
</figure>

## Groupie
Werkzeug zur halb-automatisierten Gruppierung von Geometrie in Maya Szenen. Zielhierarchien werden in JSON Presets definiert und als Buttons in einem Qt Dialog dargestellt. Ein Klick erzeugt bei Bedarf die fehlende Gruppenstruktur und ordnet die aktuell selektierten Objekte automatisch dort ein. Da für unterschiedliche Projekte oder Fahrzeugkonfigurationen (z. B. verschiedene Tür- und Sitzreihen-Layouts) eigene Presets hinterlegt werden können, reduziert das Tool den manuellen Aufwand beim Strukturieren komplexer Automotive Assets erheblich.

<figure class="dev-gallery third">
  <img src="{{ '/assets/images/development/Groupie.jpg' | relative_url }}" alt="Groupie UI" loading="lazy">
  <figcaption>Groupie</figcaption>
</figure>

## Shader Marking Menu
Marking Menu in Maya zur schnellen Umwandlung von Maya Shadern in V-Ray Materialien über vordefinierte Presets. Zum Beispiel Glas, Leder, Carpaint, Chrom, Aluminium sowie Spezialfälle wie Carlight Reflektoren, Primer Shader oder V-Ray Scanned Materials. Bei einigen Presets wie Aluminium oder Chrom bleibt die ursprüngliche Diffuse Farbe des Shaders erhalten, andere ersetzen den Shader komplett. Über dasselbe Menü lässt sich zudem die Glossiness des am selektierten Mesh hängenden Shaders in vordefinierten Stufen setzen. Der Aufruf per Hotkey direkt im Viewport beschleunigt Look-Dev Iterationen im Arbeitsalltag spürbar.

<figure class="dev-gallery third">
  <img src="{{ '/assets/images/development/RadialMenu_Shader.jpg' | relative_url }}" alt="Shader Marking Menu" loading="lazy">
  <figcaption>Shader Marking Menu</figcaption>
</figure>

## VRay Shadertools
Sammlung von Werkzeugen zur Beschleunigung von Shading-Netzwerken in Maya. Fügt auf Knopfdruck HSV-, RemapValue- oder Triplanar-Nodes (inklusive eines Triplanar-Controllers zur zentralen Steuerung mehrerer Triplanar-Nodes) hinter ausgewählten File Nodes ein, konsolidiert mehrfach vorhandene place2dTexture- und File-Nodes zu jeweils einem gemeinsamen Node. Ergänzend lassen sich Subdivision- und Displacement-Attribute sowie prozedurale Round Edges direkt am Shader anlegen, auslesen und wieder entfernen, inklusive gespeicherter Displacement-Settings zum schnellen Übertragen auf andere Shader.

<figure class="dev-gallery half">
  <img src="{{ '/assets/images/development/VRayShadertools.jpg' | relative_url }}" alt="VRay Shadertools UI" loading="lazy">
  <img src="{{ '/assets/images/development/RadialMenu_Tools.jpg' | relative_url }}" alt="VRay Shadertools Marking Menu" loading="lazy">
  <figcaption>VRay Shadertools</figcaption>
</figure>

## SpecChecker
Automatisierungstool, das aus fertigen Renderings direkt PDF Dokumente für die interne und externe Qualitätskontrolle erzeugt. Hersteller- und Produktnamen werden automatisch aus der Dateinamenskonvention der Renderings extrahiert und in das PDF übernommen. Nach der Erstellung lädt das Tool das fertige Dokument selbstständig über die Slack API in den jeweils passenden Slack Channel hoch. Die Review Übergabe läuft damit ohne manuelles Zusammensuchen und Verschicken von Dateien.

<figure class="dev-gallery third">
  <img src="{{ '/assets/images/development/SpecChecker.jpg' | relative_url }}" alt="SpecChecker UI" loading="lazy">
  <figcaption>SpecChecker</figcaption>
</figure>

## Masks Manager
Tool zur Zuweisung von Object-IDs und Material-IDs über konfigurierbare Presets, das gleichzeitig automatisch die dafür benötigten AOVs (MultiMatte-Renderelemente) anlegt. Sorgt für konsistente Compositing Masken über unterschiedliche Shots und Kameras hinweg, ohne dass ID-Zuweisungen manuell gepflegt werden müssen.

<figure class="dev-gallery third">
  <img src="{{ '/assets/images/development/MaskManager.jpg' | relative_url }}" alt="Masks Manager UI" loading="lazy">
  <figcaption>Masks Manager</figcaption>
</figure>

# USD Workflow

Konzeption und Umsetzung moderner, USD-basierter Material- und Austausch-Workflows, um Assets aus der Maya/V-Ray Pipeline für Echtzeitanwendungen wie NVIDIA Omniverse, Chaos Vantage oder Unreal Engine nutzbar zu machen.

## USD Audit
Diagnose- und Reparaturwerkzeug für USD-Dateien. Es verifiziert Pfade auf referenzierte Assets, repariert fehlerhafte oder gebrochene Referenzen und kann Pfadtypen (relativ/absolut) ineinander umwandeln. Zusätzlich lässt sich eine USD-Datei inklusive aller verknüpften Assets in einem Schritt kopieren, etwa für Archivierung oder Weitergabe an externe Partner. Die komplette USD Dateistruktur kann in einer Baumansicht visualisiert werden, was das Debugging auch bei umfangreichen, tief verschachtelten Stages deutlich erleichtert.

<figure class="dev-gallery third">
  <img src="{{ '/assets/images/development/USDLinkAudit.jpg' | relative_url }}" alt="USD Audit UI" loading="lazy">
  <figcaption>USD Audit</figcaption>
</figure>

## USD Converter
Kernwerkzeug der USD-Pipeline: konvertiert Maya Szenen mit V-Ray Materialien nach USD und übersetzt die Shading Netzwerke wahlweise nach MDL oder MaterialX für den Einsatz in NVIDIA Omniverse, Chaos Vantage oder Unreal Engine. Unterstützt werden sowohl intern referenzierte als auch extern verpackte Shader, wobei benötigte Texturen automatisch eingesammelt und mit exportiert werden. Über JSON Presets, etwa für Isaac Sim oder für MaterialX Export nach Chaos Vantage, lässt sich der komplette Export einer Szene oder gezielt ausgewählter Shader automatisieren.

<figure class="dev-gallery third">
  <img src="{{ '/assets/images/development/MayaShaderToUSD.jpg' | relative_url }}" alt="USD Converter UI" loading="lazy">
  <figcaption>USD Converter</figcaption>
</figure>

## Logging
Zentrale Logging Infrastruktur für sämtliche internen Python Tools: rotierende Logs mit strukturierten Metadaten (Level, User, Skript, Hostname, ID) damit Fehler in produktiv genutzten Tools zeitnah auffallen statt in lokalen Logfiles unterzugehen. Ergänzend wird die Nutzung der einzelnen Tools pro User protokolliert — diese Daten dienen als Grundlage, um Schulungsbedarf zu identifizieren und die Einführung neuer Werkzeuge im Team gezielt zu begleiten.

# Cloud Rendering

Einführung von Cloud Rendering auf Basis von AWS Deadline mit V-Ray Standalone, um die lokale Renderkapazität bei Lastspitzen flexibel zu erweitern. Dazu gehörten die Konfiguration und Inbetriebnahme der virtuellen Maschinen unter Linux, das Rollout und die laufende Aktualisierung der Render-Software auf allen Cloud Instanzen sowie die fortlaufende Verwaltung und Betreuung der externen Renderfarm im laufenden Produktionsbetrieb.

Um den tatsächlichen Nutzen der Farm laufend zu überprüfen, habe ich zusätzlich ein Auswertungstool für die von Deadline exportierten Job-Daten gebaut. Es aggregiert Renderzeiten pro Node, Auslastung gegenüber Leerlauf, Warteschlangenzeiten sowie RAM- und Fehlertrends und erzeugt daraus wahlweise über eine CLI oder eine PySide-Oberfläche HTML-, PDF-, XLSX- oder Parquet-Reports für Wrangler, Produktion und Facility-Management, inklusive konfigurierbarer Alerts für Fehlerraten, Wartezeiten oder geschätzte Kosten.

<figure class="dev-gallery third">
  <img src="{{ '/assets/images/development/DeadlineStatistics.jpg' | relative_url }}" alt="Deadline Statistics Report UI" loading="lazy">
  <figcaption>Deadline Statistics</figcaption>
</figure>
