module.exports = {
    selectPoint: "A helyi magyarázat megjelenítéséhez válassza ki a kívánt pontot",
    defaultClassNames: "{0} osztály",
    defaultFeatureNames: "{0} funkció",
    absoluteAverage: "Abszolút érték átlaga",
    predictedClass: "Előre jelzett osztály",
    datasetExplorer: "Adathalmaz-böngésző",
    dataExploration: "Adathalmaz-felderítés",
    aggregateFeatureImportance: "Aggregált jellemzőfontosság",
    globalImportance: "Globális fontosság",
    explanationExploration: "Magyarázatvizsgálat",
    individualAndWhatIf: "Egyéni jellemzőfontosság és lehetőségelemzés",
    summaryImportance: "Összegzés fontossága",
    featureImportance: "Jellemzőfontosság",
    featureImportanceOf: "A(z) {0} jellemzőfontossága",
    perturbationExploration: "Perturbációvizsgálat",
    localFeatureImportance: "Helyi jellemzőfontosság",
    ice: "ICE",
    clearSelection: "Kijelölés törlése",
    feature: "Funkciófrissítés:",
    intercept: "Metszéspont",
    modelPerformance: "Modell teljesítménye",
    ExplanationScatter: {
        dataLabel: "Adatok: {0}",
        importanceLabel: "Fontosság: {0}",
        predictedY: "Előre jelzett Y",
        index: "Index",
        dataGroupLabel: "Adatok",
        output: "Kimenet",
        probabilityLabel: "Valószínűség: {0}",
        trueY: "Igaz Y",
        class: "osztály: ",
        xValue: "X érték",
        yValue: "Y érték",
        colorValue: "Szín:",
        count: "Mennyiség",
    },
    CrossClass: {
        label: "Többosztályos súlyozás:",
        info: "Az osztályok közötti számítással kapcsolatos információk",
        overviewInfo:
            "A többosztályos modellek minden osztály esetében létrehoznak egy független jellemzőfontossági vektort. Az egyes osztályok jellemzőfontossági vektora azt mutatja, hogy mely jellemzők növelték vagy csökkentették egy adott osztály valószínűségét. Megadhatja, hogy az osztályonkénti jellemzőfontossági vektorok súlyai miként legyenek összegezve egyetlen értékbe:",
        absoluteValInfo:
            "Az abszolút érték átlaga: a funkció fontosságának összege az összes lehetséges osztályra vonatkoztatva, osztva az osztályok számával",
        predictedClassInfo:
            "Előre jelzett osztály: a jellemzőfontossági érték megjelenítése egy adott pont előre jelzett osztálya esetében",
        enumeratedClassInfo:
            "Enumerált osztálynevek: csak a megadott osztály jellemzőfontossági értékeinek megjelenítése az összes adatpontra vonatkozóan.",
        close: "Bezárás",
        crossClassWeights: "Több osztályra vonatkozó súlyozás",
    },
    AggregateImportance: {
        scaledFeatureValue: "Skálázott funkció értéke",
        low: "Kicsi",
        high: "Magas",
        featureLabel: "Funkció: {0}",
        valueLabel: "Funkció értéke: {0}",
        importanceLabel: "Fontosság: {0}",
        predictedClassTooltip: "Előre jelzett osztály: {0}",
        trueClassTooltip: "Igaz osztály: {0}",
        predictedOutputTooltip: "Előre jelzett kimenet: {0}",
        trueOutputTooltip: "Igaz kimenet: {0}",
        topKFeatures: "Első K funkció:",
        topKInfo: "A k legfontosabb jellemző kiszámítása",
        predictedValue: "Előre jelzett érték",
        predictedClass: "Előre jelzett osztály",
        trueValue: "Igaz érték",
        trueClass: "Igaz osztály",
        noColor: "Nincs",
        tooManyRows: "A megadott adathalmaz nagyobb a diagram által támogatott méretnél",
    },
    BarChart: {
        classLabel: "Osztály: {0}",
        sortBy: "Rendezési szempont",
        noData: "Nincs adat",
        absoluteGlobal: "Abszolút globális",
        absoluteLocal: "Abszolút helyi",
        calculatingExplanation: "Magyarázat kiszámítása",
    },
    IcePlot: {
        numericError: "Numerikus karakternek kell lennie",
        integerError: "Egész számnak kell lennie",
        prediction: "Előrejelzés",
        predictedProbability: "Előre jelzett valószínűség",
        predictionLabel: "Előrejelzés: {0}",
        probabilityLabel: "Valószínűség: {0}",
        noModelError: "Adjon meg egy üzembe helyezett modellt az ICE-diagramokban lévő előrejelzések vizsgálatához.",
        featurePickerLabel: "Funkciófrissítés:",
        minimumInputLabel: "Minimum:",
        maximumInputLabel: "Maximum:",
        stepInputLabel: "Lépések:",
        loadingMessage: "Adatok betöltése...",
        submitPrompt: "Adja meg az ICE-diagramon megtekinteni kívánt tartományt",
        topLevelErrorMessage: "Hiba a paraméterben",
        errorPrefix: "Hiba történt: {0}",
    },
    PerturbationExploration: {
        loadingMessage: "Betöltés...",
        perturbationLabel: "Perturbáció:",
    },
    PredictionLabel: {
        predictedValueLabel: "Előre jelzett érték: {0}",
        predictedClassLabel: "Előre jelzett osztály: {0}",
    },
    Violin: {
        groupNone: "Nincs csoportosítás",
        groupPredicted: "Előre jelzett Y",
        groupTrue: "Igaz Y",
        groupBy: "Csoportosítási szempont",
    },
    FeatureImportanceWrapper: {
        chartType: "Diagram típusa:",
        violinText: "Hegedű",
        barText: "Sáv",
        boxText: "Doboz",
        beehiveText: "Swarm",
        globalImportanceExplanation:
            "A globális jellemzőfontosság az összes pont (L1 normalizálás) abszolút jellemzőfontossági értékének átlagolásával számítható ki. ",
        multiclassImportanceAddendum:
            "A funkciófontosság összes osztályra vonatkozóan történő kiszámítása minden pontot magában foglal, tehát nem használ különbségi súlyozást. Így egy olyan funkció, amelynek nagy negatív fontossága van számos nem „A osztályúként” előrejelzett pont esetében, nagy mértékben növelni fogja a funkció „A osztályú” fontosságát.",
    },
    Filters: {
        equalComparison: "Egyenlő",
        greaterThanComparison: "Nagyobb, mint",
        greaterThanEqualToComparison: "Nagyobb vagy egyenlő",
        lessThanComparison: "Kevesebb, mint",
        lessThanEqualToComparison: "Kisebb vagy egyenlő",
        inTheRangeOf: "A következő tartományban:",
        categoricalIncludeValues: "Belefoglalt értékek:",
        numericValue: "Érték",
        numericalComparison: "Művelet",
        minimum: "Minimum",
        maximum: "Maximum",
        min: "Minimum: {0}",
        max: "Maximum: {0}",
        uniqueValues: "egyedi értékek száma: {0}",
    },
    Columns: {
        regressionError: "Regressziós hiba",
        error: "Hiba",
        classificationOutcome: "Besorolás eredménye",
        truePositive: "Valós pozitív",
        trueNegative: "Valós negatív",
        falsePositive: "Vakriasztás",
        falseNegative: "Álnegatív",
        dataset: "Adathalmaz",
        predictedProbabilities: "Előrejelzési valószínűségek",
        none: "Mennyiség",
    },
    WhatIf: {
        closeAriaLabel: "Bezárás",
        defaultCustomRootName: "{0}. sor másolata",
        filterFeaturePlaceholder: "Jellemzők keresése",
    },
    Cohort: {
        cohort: "Kohorsz",
        defaultLabel: "Minden adat",
    },
    GlobalTab: {
        helperText:
            "Megtekintheti azokat a top-k típusú fontos jellemzőket, amelyek hatással vannak az általános modell-előrejelzésekre (más néven globális értelmezésre). A jellemzőfontossági értékeket a csúszka segítségével jelenítheti meg csökkenő sorrendben. Legfeljebb három kohorszot kiválasztva egymás mellet jelenítheti meg azok jellemzőfontosságát. A diagram bármely jellemzősávjára kattintva megtekintheti, hogy a kiválasztott jellemző értékei miként befolyásolják a modell előrejelzését.",
        topAtoB: "Első {0}-{1} jellemző",
        datasetCohorts: "Adathalmazi kohorszok",
        legendHelpText: "A jelmagyarázat elemeire kattintva be- és kikapcsolhatja a kohorszokat a diagramon.",
        sortBy: "Rendezés szempontja",
        viewDependencePlotFor: "Függőségi terület megtekintése:",
        datasetCohortSelector: "Adathalmazkohorsz kiválasztása",
        aggregateFeatureImportance: "Aggregált jellemzőfontosság",
        missingParameters: "Ezen a lapon meg kell adni a helyi jellemzőfontossági paramétert.",
        weightOptions: "Osztály fontossági súlyozása",
        dependencePlotTitle: "Függőségi ábrák",
        dependencePlotHelperText:
            "Ez a függőségi ábra a funkció értéke és a funkció kohorszban betöltött fontossága közötti kapcsolatot mutatja meg.",
        dependencePlotFeatureSelectPlaceholder: "Jellemző kiválasztása",
        datasetRequired:
            "A függőségi ábrák megkövetelik a kiértékelési adathalmazt és a helyi jellemzőfontossági tömböt.",
    },
    CohortBanner: {
        dataStatistics: "Adatstatisztikák",
        datapoints: "{0} adatpont",
        features: "{0} jellemző",
        filters: "{0} szűrő",
        binaryClassifier: "Bináris osztályozó",
        regressor: "Magyarázó változó",
        multiclassClassifier: "Többosztályos osztályozó",
        datasetCohorts: "Adathalmazi kohorszok",
        editCohort: "Kohorsz szerkesztése",
        duplicateCohort: "Ismétlődő kohorsz",
        addCohort: "Kohorsz hozzáadása",
        copy: " másolás",
    },
    ModelPerformance: {
        helperText:
            "Megvizsgálhatja a modell teljesítményét a becslési értékek eloszlásának és a modell teljesítménymetrika-értékeinek feltárásával. A modell további vizsgálatával áttekintheti a modellnek az adathalmaz különböző kohorszaiban vagy alcsoportjában mutatott teljesítményét összehasonlító elemzést. Kiválaszthatja az y-értékhez és az x-értékhez a szűrőket a különböző dimenziók kivágásához. A diagram típusát a fogaskerék kiválasztásával módosíthatja a grafikonon.",
        modelStatistics: "Modell statisztikái",
        cohortPickerLabel: "Válassza ki a böngészni kívánt adathalmazkohorszt",
        missingParameters: "Ezen a lapon meg kell adni a modell előrejelzett értékeinek tömbjét.",
        missingTrueY:
            "A modell teljesítménystatisztikáihoz arra van szükség, hogy az előrejelzett kimenetek mellett a tényleges kimenetek is meg legyenek adva",
    },
    Charts: {
        yValue: "Y-érték",
        numberOfDatapoints: "Adatpontok száma",
        xValue: "X-érték",
        rowIndex: "Sorindex",
        featureImportance: "Funkció fontossága",
        countTooltipPrefix: "Számláló: {0}",
        count: "Mennyiség",
        featurePrefix: "Funkció:",
        importancePrefix: "Fontosság:",
        cohort: "Kohorsz",
        howToRead: "A diagram értelmezése",
    },
    DatasetExplorer: {
        helperText:
            "Ha szeretné megtekinteni az adathalmaz-statisztikákat, adjon meg szűrőket az X, az Y és a színtengelyen az adatok különböző dimenziók szerint történő szeleteléséhez. Fent adathalmaz-kohorszokat hozhat létre, ha olyan szűrőkkel szeretné elemezni az adathalmaz-statisztikákat, mint például a becsült eredmény, az adathalmaz-funkciók vagy a hibacsoportok. A diagram jobb felső sarkában lévő fogaskerékikonra kattintva módosíthatja a diagramtípusokat.",
        colorValue: "Színérték",
        individualDatapoints: "Egyéni adatpontok",
        aggregatePlots: "Aggregált diagramok",
        chartType: "Diagram típusa",
        missingParameters: "Ehhez a laphoz meg kell adni egy kiértékelési adathalmazt.",
        noColor: "Nincs",
    },
    DependencePlot: {
        featureImportanceOf: "A következő jellemzőfontossága:",
        placeholder: "Kattintson a fenti oszlopdiagram egyik funkciójára a függőségi diagram megjelenítéséhez",
    },
    WhatIfTab: {
        helperText:
            "A pontdiagram kívánt adatpontjára kattintva megtekintheti az adatpont helyi jellemzőfontossági értékeit (helyi értelmezését) és ICE-diagramját. Egy ismert adatpont jellemzőinek perturbálásához hozzon létre egy hipotetikus „mi lenne, ha” adatpontot a jobb oldalon lévő panelen. A jellemzőfontossági értékek nem az előrejelzések „okán”, hanem számos approximáción alapulnak. Az ok–okozati következtetés szilárd matematikai megalapozottsága nélkül nem tanácsoljuk a felhasználóknak, hogy a valós helyzetekben ezen eszköz alapján hozzanak döntéseket.",
        panelPlaceholder: "Az új adatpontokra vonatkozó előrejelzések készítéséhez modell szükséges.",
        cohortPickerLabel: "Válassza ki a böngészni kívánt adathalmazkohorszt",
        scatterLegendText: "A jelmagyarázat elemeire kattintva be- és kikapcsolhatja a adatpontokat a diagramon.",
        realPoint: "Valós adatpontok",
        noneSelectedYet: "Még nincs kiválasztott",
        whatIfDatapoints: "Lehetőségelemzési adatpontok",
        noneCreatedYet: "Még nincs létrehozott",
        showLabel: "Megjelenítés:",
        featureImportancePlot: "Jellemzőfontosság ábrázolása",
        icePlot: "ICE-diagram",
        featureImportanceLackingParameters:
            "Adja meg a helyi jellemzőfontosságokat, ha meg szeretné tekinteni, hogy az egyes jellemzők hogyan befolyásolják a különálló előrejelzéseket.",
        featureImportanceGetStartedText: "Válasszon ki egy pontot a jellemzőfontosság megtekintéséhez",
        iceLackingParameters:
            "Az ICE-ábrákhoz arra van szükség, hogy egy operacionalizált modell előrejelzéseket készítsen feltételes adatpontokkal kapcsolatban.",
        IceGetStartedText:
            "Válasszon ki egy pontot vagy hozzon létre egy lehetőségelemzési pontot az ICE-diagramok megtekintéséhez",
        whatIfDatapoint: "Lehetőségelemzési adatpont",
        whatIfHelpText:
            "Válasszon ki egy pontot a diagramon, vagy adjon meg egy ismert adatpontindexet manuálisan a perturbáláshoz és lehetőségelemzési pontként való mentéshez.",
        indexLabel: "Adatindex perturbáláshoz",
        rowLabel: "Rekord: {0}",
        whatIfNameLabel: "Lehetőségelemzési adatpont neve",
        featureValues: "Jellemző értékei",
        predictedClass: "Előrejelzett osztály: ",
        predictedValue: "Előrejelzett érték: ",
        probability: "Valószínűség: ",
        trueClass: "Igaz osztály: ",
        trueValue: "Igaz érték: ",
        "trueValue.comment": "a tényleges regressziós címke előtagja",
        newPredictedClass: "Új előrejelzett osztály: ",
        newPredictedValue: "Új előrejelzett érték: ",
        newProbability: "Új valószínűség: ",
        saveAsNewPoint: "Mentés új pontként",
        saveChanges: "Módosítások mentése",
        loading: "Betöltés...",
        classLabel: "Osztály: {0}",
        minLabel: "Min",
        maxLabel: "Max",
        stepsLabel: "Lépések",
        disclaimer:
            "Jogi nyilatkozat: ezek a magyarázatok számos közelítésen alapulnak, és nem az előrejelzések okai. Az ok-okozati megállapítás szigorú matematikai szilárdsága nélkül nem tanácsoljuk a felhasználóknak, hogy az eszközre alapozva hozzanak valós döntéseket.",
        missingParameters: "Ehhez a laphoz meg kell adni egy kiértékelési adathalmazt.",
        selectionLimit: "Legfeljebb 3 kiválasztott pont",
        classPickerLabel: "Osztály",
        tooltipTitleMany: "{0} leggyakoribb előrejelzett osztály",
        whatIfTooltipTitle: "Lehetőségelemzés által előrejelzett osztályok",
        tooltipTitleFew: "Előrejelzett osztályok",
        probabilityLabel: "Valószínűség",
        deltaLabel: "Különbözet",
        nonNumericValue: "Numerikus értéknek kell lennie",
        icePlotHelperText:
            "Az ICE-diagramok azt mutatják be, hogy a kiválasztott adatpont előrejelzési értékei miként változnak egy adott jellemzőérték-tartomány minimális és a maximális értéke között.",
    },
    CohortEditor: {
        selectFilter: "Válasszon szűrőt",
        TreatAsCategorical: "Kezelés kategorikusként",
        addFilter: "Szűrő hozzáadása",
        addedFilters: "Hozzáadott szűrők",
        noAddedFilters: "Még nincsenek hozzáadva szűrők",
        defaultFilterState: "Válasszon ki egy szűrőt a paraméterek az adatkészlet kohorszához való hozzáadásához.",
        cohortNameLabel: "Adatkészlet kohorszának neve",
        cohortNamePlaceholder: "Adja meg a kohorsz nevét",
        save: "Mentés",
        delete: "Törlés",
        cancel: "Mégse",
        cohortNameError: "Hiányzik a kohorsznév",
        placeholderName: "{0} kohorsz",
    },
    AxisConfigDialog: {
        select: "Kiválasztás",
        ditherLabel: "Árnyalás",
        selectFilter: "Tengely értékének kiválasztása",
        selectFeature: "Jellemző kiválasztása",
        binLabel: "Dobozolás alkalmazása az adatokra",
        TreatAsCategorical: "Kezelés kategorikusként",
        numOfBins: "Dobozok száma",
        groupByCohort: "Csoportosítás kohorsz szerint",
        selectClass: "Osztály kijelölése",
        countHelperText: "A pontok számának hisztogramja",
    },
    ValidationErrors: {
        predictedProbability: "Előrejelzett valószínűség",
        predictedY: "Előrejelzett Y",
        evalData: "Értékelési adathalmaz",
        localFeatureImportance: "Helyi jellemzőfontosság",
        inconsistentDimensions: "Inkonzisztens dimenziók. A(z) {0} dimenziói: {1}, a várt érték: {2}",
        notNonEmpty: "A(z) {0} bemenet nem egy nem üres tömb",
        varyingLength: "Inkonzisztens dimenziók. A(z) {0} eltérő hosszúságú elemekkel rendelkezik",
        notArray: "A(z) {0} nem tömb. A tömb várt dimenziója: {1}",
        errorHeader: "Néhány bemeneti paraméter nem volt konzisztens, és nem lesz használva: ",
        datasizeWarning:
            "A kiértékelési adathalmaz túl nagy ahhoz, hogy néhány diagramon hatékonyan megjelenjen. Adjon hozzá szűrőket a kohorsz csökkentéséhez.",
        datasizeError: "A kiválasztott kohorsz túl nagy. Adjon hozzá szűrőket a kohorsz csökkentéséhez.",
        addFilters: "Szűrők hozzáadása",
    },
    FilterOperations: {
        equals: " = {0}",
        lessThan: " < {0}",
        greaterThan: " > {0}",
        lessThanEquals: " <= {0}",
        greaterThanEquals: " >= {0}",
        includes: " tartalmazza: {0} ",
        inTheRangeOf: "[ {0} ]",
        overflowFilterArgs: "{0} és {1} további",
    },
    Statistics: {
        mse: "MSE: {0}",
        rSquared: "R-négyzet: {0}",
        meanPrediction: "Előrejelzési átlag: {0}",
        accuracy: "Pontosság: {0}",
        precision: "Pontosság: {0}",
        recall: "Felidézés: {0}",
        fpr: "FPR: {0}",
        fnr: "FNR: {0}",
    },
    GlobalOnlyChart: {
        helperText:
            "Áttekintheti a modell egészére kiható top k számú legfontosabb jellemzőt. A csúszka segítségével megtekintheti a jellemzők fontosságát csökkenő sorrendben.",
    },
    ExplanationSummary: {
        whatDoExplanationsMean: "Mit jelentenek ezek az értelmezések?",
        clickHere: "További információ",
        shapTitle: "Shapley-értékek",
        shapDescription:
            "Ez az értelmező az SHAP módszert használja, amely egy olyan játékelméleti modellértelmezési megközelítés, amely a jellemzőhalmazok fontosságát úgy méri, hogy a jellemzőket marginalizálással „elrejti” a modell elől. További információért kattintson az alábbi hivatkozásra.",
        limeTitle: "LIME (helyi értelmezhető modellagnosztikus magyarázatok)",
        limeDescription:
            "Ez az értelmező a LIME módszert használja, amely a modell lineáris approximációján alapul. Az értelmezést a következőképpen kaphatjuk meg: perturbáljuk a példányt, beolvassuk a modell előrejelzéseit, és ezeket címkeként használjuk egy olyan ritka lineáris modell betanítására, amely helyileg hű. E lineáris modell súlyozásai jellemzőfontosságokként használhatók. További információért kattintson az alábbi hivatkozásra.",
        mimicTitle: "Utánzás (globális helyettesítő értelmezések)",
        mimicDescription:
            "Ez az értelmezés a globális helyettesítő modellek feketedoboz-modellek utánzására történő betanításának ötletén alapul. A globális helyettesítő modell olyan belsőleg értelmezhető modell, amely a feketedoboz-modellek predikcióinak lehető legpontosabb megközelítésére van betanítva. A jellemzőfontossági értékek a mögöttes helyettesítő modell (LightGBM, lineáris regresszió, sztochasztikus gradiensesés vagy döntési fa) modellalapú jellemzőfontossági értékei",
        pfiTitle: "Permutációs jellemzőfontosság (PFI)",
        pfiDescription:
            "Ez az értelmező a teljes adathalmaz esetében jellemzőnként összekeveri az adatokat, és kiszámítja, hogy a fontosság teljesítménymetrikája milyen mértékben változik (alapértelmezett teljesítménymetrikák: F1 bináris besorolás esetén, F1-mérték átlagos mikro pontossággal többosztályos besorolás esetén és átlagos abszolút hiba regresszió esetén). Minél nagyobb mértékű a változás, annál fontosabb a jellemző. Ez az értelmező csak az alapul szolgáló modell általános viselkedését képes értelmezni, az egyes előrejelzéseket nem. A jellemző fontossági értéke a modell teljesítményének az adott jellemző perturbálásával kiszámított változását jelzi.",
    },
};