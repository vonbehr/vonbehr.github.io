---
title: Projekte
permalink: /projekte/
lang_alt_url: /en/projects/
---

Neben der täglichen Produktionsarbeit habe ich bei The Scope GmbH mehrere grundlegende Technologie- und Infrastrukturprojekte umgesetzt. Die folgenden Abschnitte geben einen Überblick über Ausgangslage, Vorgehen und meine Rolle in diesen Projekten.

# Umstieg von Maxwell Render auf V-Ray

## Ausgangslage

Maxwell Render war über lange Zeit der Renderer der Wahl für unsere Projekte. Mit der wachsenden Zahl an Anfragen nach Animationen stieß die Software jedoch zunehmend an ihre Grenzen. Gerade bei Bewegtbild waren die Renderzeiten von Maxwell viel zu hoch. Hinzu kam, dass die Weiterentwicklung von Maxwell nur noch in geringem Umfang sichtbar war und die Zukunft der Software insgesamt fraglich erschien. Es galt daher, eine Alternative zu finden.

## Evaluierung

Für die Auswahl habe ich Arnold und V-Ray für Maya in einer strukturierten Evaluierung gegenübergestellt. In die Bewertung flossen Lizenzkosten, Look & Feel der Renderings, Features, die Integration in bestehende Workflows sowie die Renderperformance ein. Auf Grundlage dieser Ergebnisse fiel die Entscheidung auf V-Ray.

## Migration

Im Anschluss habe ich die Umstellung der Produktion konzipiert und begleitet. Dazu gehörten die Definition neuer Standards und Workflows sowie eine umfassende Dokumentation, die dem Team den Umstieg erleichterte. Parallel dazu wurde der gesamte Asset-Bestand nach V-Ray überführt – von der Shaderbibliothek über einzelne Assets bis hin zu kompletten Sets.

# Renderfarm & Deadline

Mit dem Umstieg auf V-Ray und dem steigenden Anteil an Animationen wuchs auch der Bedarf an Renderkapazität. Ich habe die Hardwarekonfiguration der Render Nodes festgelegt und sowohl Hardware als auch Software installiert. Nach einer Evaluierung verschiedener Renderfarm-Manager fiel die Wahl auf Deadline, das ich anschließend eingeführt, konfiguriert und dokumentiert habe. Auch das laufende Troubleshooting im Produktionsbetrieb lag in meiner Verantwortung.

## AWS Cloud Rendering

Um Lastspitzen flexibel abfangen zu können, habe ich die Renderfarm um cloudbasierte Rechenkapazität erweitert. Nach einer Testphase folgten die Einführung und Konfiguration von Deadline mit Render Nodes auf Basis von AWS Spot Fleet, über die Renderjobs bei Bedarf in die AWS Cloud ausgelagert werden. Neben der Konfiguration der AWS-Umgebung gehörte auch die kontinuierliche Überwachung der Kosten zu meinen Aufgaben. Weitere Details sowie das dafür entwickelte Auswertungstool finden sich auf der Seite [Development](/development/#cloud-rendering).

# Produktionspipeline

## openPipeline

Den ersten Schritt hin zu einer strukturierten Produktionspipeline bildete die Einführung von [openPipeline](https://openpipeline.cc). Ich habe Standards und Workflows definiert und dokumentiert und das Tool an die Anforderungen des Studios angepasst, insbesondere im Hinblick auf Dateibenennung und Projektstruktur.

## OpenPype (heute AYON) & ftrack

Mit wachsenden Anforderungen folgte der Umstieg auf [OpenPype](https://ayon.app), heute AYON, als Pipeline-Tool und [ftrack](https://www.ftrack.com/en) als Projektmanagement-Plattform.

Kern des neuen Systems ist ein klar definierter Publishing-Prozess: Bevor Assets weiterverarbeitet werden, durchlaufen sie eine Reihe festgelegter Validierungen, die sicherstellen, dass sie den Anforderungen entsprechen. Erst danach wird eine unveränderliche Master-Version gespeichert, auf der alle weiteren Arbeitsschritte aufbauen. So ist jederzeit nachvollziehbar, mit welchem Stand gearbeitet wird.

Ich habe die zugrunde liegenden Standards für Dateibenennung, Ordnerstruktur und Asset-Validierung definiert und OpenPype entsprechend konfiguriert – von den Studio-Standards über die Einbindung der eingesetzten Software bis hin zu den Plugins. Darüber hinaus habe ich die Dokumentation erstellt, die Kolleg:innen geschult und den laufenden Betrieb im Troubleshooting betreut. Gegenüber den Entwicklern von OpenPype war ich Ansprechpartner für auftretende Probleme und habe die Anforderungen unseres Studios in die künftige Weiterentwicklung eingebracht.

## Dataprep-Workflow für Automotive-Assets

Innerhalb der neuen Pipeline habe ich einen vollständig neuen Dataprep-Workflow entwickelt, der Automotive-Daten für die Weiterverarbeitung in unserer Pipeline aufbereitet. Die Daten werden halbautomatisch sortiert, Shader projektübergreifend synchronisiert und automatisiert konvertiert. Für die Qualitätssicherung habe ich passende Validierungen definiert und in OpenPype umgesetzt. Zur Abnahme der Produktkorrektheit werden standardisierte Renderings erstellt, aus denen automatisch PDF-Dokumente generiert werden – eine verlässliche Grundlage für interne und externe Reviews.
