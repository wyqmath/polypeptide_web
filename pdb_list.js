const pdbList = [
  {
    "id": "185D",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1995-02-07",
    "note": "SEQUENCE SPECIFICITY OF QUINOXALINE ANTIBIOTICS. 1. SOLUTION STRUCTURE OF A 1:1 COMPLEX BETWEEN TRIOSTIN A AND [D(GACGTC)]2 AND COMPARISON WITH THE SOLUTION STRUCTURE OF THE [N-MECYS3, N-MECYS7]TANDEM-[D(GATATC)]2 COMPLEX"
  },
  {
    "id": "193D",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1995-02-27",
    "note": "SOLUTION STRUCTURE OF A QUINOMYCIN BISINTERCALATOR-DNA COMPLEX"
  },
  {
    "id": "1A0M",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.10 \u00c5",
    "date": "1999-01-13",
    "note": "1.1 ANGSTROM CRYSTAL STRUCTURE OF A-CONOTOXIN [TYR15]-EPI"
  },
  {
    "id": "1A1P",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1998-04-08",
    "note": "COMPSTATIN, NMR, 21 STRUCTURES"
  },
  {
    "id": "1A3P",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1998-07-29",
    "note": "ROLE OF THE 6-20 DISULFIDE BRIDGE IN THE STRUCTURE AND ACTIVITY OF EPIDERMAL GROWTH FACTOR, NMR, 20 STRUCTURES"
  },
  {
    "id": "1A7F",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1998-07-15",
    "note": "INSULIN MUTANT B16 GLU, B24 GLY, DES-B30, NMR, 20 STRUCTURES"
  },
  {
    "id": "1AB1",
    "method": "X-RAY DIFFRACTION",
    "resolution": "0.89 \u00c5",
    "date": "1997-08-12",
    "note": "SI FORM CRAMBIN"
  },
  {
    "id": "1ACW",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1997-04-01",
    "note": "SOLUTION NMR STRUCTURE OF P01, A NATURAL SCORPION PEPTIDE STRUCTURALLY ANALOGOUS TO SCORPION TOXINS SPECIFIC FOR APAMIN-SENSITIVE POTASSIUM CHANNEL, 25 STRUCTURES"
  },
  {
    "id": "1ADX",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1997-12-24",
    "note": "FIFTH EGF-LIKE DOMAIN OF THROMBOMODULIN (TMEGF5), NMR, 14 STRUCTURES"
  },
  {
    "id": "1AG7",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1998-04-08",
    "note": "CONOTOXIN GS, NMR, 20 STRUCTURES"
  },
  {
    "id": "1AGG",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1996-03-08",
    "note": "THE SOLUTION STRUCTURE OF OMEGA-AGA-IVB, A P-TYPE CALCIUM CHANNEL ANTAGONIST FROM THE VENOM OF AGELENOPSIS APERTA"
  },
  {
    "id": "1AGT",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1995-07-10",
    "note": "SOLUTION STRUCTURE OF THE POTASSIUM CHANNEL INHIBITOR AGITOXIN 2: CALIPER FOR PROBING CHANNEL GEOMETRY"
  },
  {
    "id": "1AHL",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1995-11-14",
    "note": "ANTHOPLEURIN-A,NMR, 20 STRUCTURES"
  },
  {
    "id": "1AI0",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1997-11-12",
    "note": "R6 HUMAN INSULIN HEXAMER (NON-SYMMETRIC), NMR, 10 STRUCTURES"
  },
  {
    "id": "1AIY",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1997-11-12",
    "note": "R6 HUMAN INSULIN HEXAMER (SYMMETRIC), NMR, 10 STRUCTURES"
  },
  {
    "id": "1AJJ",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.70 \u00c5",
    "date": "1997-07-07",
    "note": "LDL RECEPTOR LIGAND-BINDING MODULE 5, CALCIUM-COORDINATING"
  },
  {
    "id": "1AKG",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.10 \u00c5",
    "date": "1998-05-20",
    "note": "ALPHA-CONOTOXIN PNIB FROM CONUS PENNACEUS"
  },
  {
    "id": "1AN1",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.03 \u00c5",
    "date": "1998-07-01",
    "note": "LEECH-DERIVED TRYPTASE INHIBITOR/TRYPSIN COMPLEX"
  },
  {
    "id": "1ANS",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1994-08-31",
    "note": "THREE-DIMENSIONAL STRUCTURE IN SOLUTION OF NEUROTOXIN III FROM THE SEA ANEMONE ANEMONIA SULCATA"
  },
  {
    "id": "1APF",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1996-07-11",
    "note": "ANTHOPLEURIN-B, NMR, 20 STRUCTURES"
  },
  {
    "id": "1APH",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.00 \u00c5",
    "date": "1993-01-15",
    "note": "CONFORMATIONAL CHANGES IN CUBIC INSULIN CRYSTALS IN THE PH RANGE 7-11"
  },
  {
    "id": "1APO",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1994-01-31",
    "note": "THREE-DIMENSIONAL STRUCTURE OF THE APO FORM OF THE N-TERMINAL EGF-LIKE MODULE OF BLOOD COAGULATION FACTOR X AS DETERMINED BY NMR SPECTROSCOPY AND SIMULATED FOLDING"
  },
  {
    "id": "1AS5",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1998-10-14",
    "note": "SOLUTION STRUCTURE OF CONOTOXIN Y-PIIIE FROM CONUS PURPURASCENS, NMR, 14 STRUCTURES"
  },
  {
    "id": "1ATX",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1991-04-15",
    "note": "THREE-DIMENSIONAL STRUCTURE OF THE NEUROTOXIN ATX IA FROM ANEMONIA SULCATA IN AQUEOUS SOLUTION DETERMINED BY NUCLEAR MAGNETIC RESONANCE SPECTROSCOPY"
  },
  {
    "id": "1AV3",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1998-10-14",
    "note": "POTASSIUM CHANNEL BLOCKER KAPPA CONOTOXIN PVIIA FROM C. PURPURASCENS, NMR, 20 STRUCTURES"
  },
  {
    "id": "1AXH",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1997-11-12",
    "note": "ATRACOTOXIN-HVI FROM HADRONYCHE VERSUTA (AUSTRALIAN FUNNEL-WEB SPIDER, NMR, 20 STRUCTURES"
  },
  {
    "id": "1AZ6",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1998-04-08",
    "note": "THREE-DIMENSIONAL STRUCTURES OF THREE ENGINEERED CELLULOSE-BINDING DOMAINS OF CELLOBIOHYDROLASE I FROM TRICHODERMA REESEI, NMR, 23 STRUCTURES"
  },
  {
    "id": "1AZH",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1998-04-08",
    "note": "THREE-DIMENSIONAL STRUCTURES OF THREE ENGINEERED CELLULOSE-BINDING DOMAINS OF CELLOBIOHYDROLASE I FROM TRICHODERMA REESEI, NMR, 14 STRUCTURES"
  },
  {
    "id": "1AZJ",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1998-04-29",
    "note": "THREE-DIMENSIONAL STRUCTURES OF THREE ENGINEERED CELLULOSE-BINDING DOMAINS OF CELLOBIOHYDROLASE I FROM TRICHODERMA REESEI, NMR, 18 STRUCTURES"
  },
  {
    "id": "1AZK",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1998-04-29",
    "note": "THREE-DIMENSIONAL STRUCTURES OF THREE ENGINEERED CELLULOSE-BINDING DOMAINS OF CELLOBIOHYDROLASE I FROM TRICHODERMA REESEI, NMR, 19 STRUCTURES"
  },
  {
    "id": "1B17",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.70 \u00c5",
    "date": "2003-04-08",
    "note": "PH AFFECTS GLU B13 SWITCHING AND SULFATE BINDING IN CUBIC INSULIN CRYSTALS (PH 5.00 COORDINATES)"
  },
  {
    "id": "1B18",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.80 \u00c5",
    "date": "2003-04-08",
    "note": "PH AFFECTS GLU B13 SWITCHING AND SULFATE BINDING IN CUBIC INSULIN CRYSTALS (PH 5.53 COORDINATES)"
  },
  {
    "id": "1B19",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.80 \u00c5",
    "date": "2003-04-08",
    "note": "PH AFFECTS GLU B13 SWITCHING AND SULFATE BINDING IN CUBIC INSULIN CRYSTALS (PH 5.80 COORDINATES)"
  },
  {
    "id": "1B1V",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1998-12-02",
    "note": "NMR STRUCTURE OF PSP1, PLASMATOCYTE-SPREADING PEPTIDE FROM PSEUDOPLUSIA INCLUDENS"
  },
  {
    "id": "1B2A",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.70 \u00c5",
    "date": "2003-04-08",
    "note": "PH AFFECTS GLU B13 SWITCHING AND SULFATE BINDING IN CUBIC INSULIN CRYSTALS (PH 6.00 COORDINATES)"
  },
  {
    "id": "1B2B",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.80 \u00c5",
    "date": "2003-04-08",
    "note": "PH AFFECTS GLU B13 SWITCHING AND SULFATE BINDING IN CUBIC INSULIN CRYSTALS (PH 6.16 COORDINATES)"
  },
  {
    "id": "1B2C",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.80 \u00c5",
    "date": "2003-04-08",
    "note": "PH AFFECTS GLU B13 SWITCHING AND SULFATE BINDING IN CUBIC INSULIN CRYSTALS (PH 6.26 COORDINATES)"
  },
  {
    "id": "1B2D",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.70 \u00c5",
    "date": "2003-04-08",
    "note": "PH AFFECTS GLU B13 SWITCHING AND SULFATE BINDING IN CUBIC INSULIN CRYSTALS (PH 6.35 COORDINATES)"
  },
  {
    "id": "1B2E",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.90 \u00c5",
    "date": "2003-04-08",
    "note": "PH AFFECTS GLU B13 SWITCHING AND SULFATE BINDING IN CUBIC INSULIN CRYSTALS (PH 6.50 COORDINATES)"
  },
  {
    "id": "1B2F",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.90 \u00c5",
    "date": "2003-04-08",
    "note": "PH AFFECTS GLU B13 SWITCHING AND SULFATE BINDING IN CUBIC INSULIN CRYSTALS (PH 6.98 COORDINATES)"
  },
  {
    "id": "1B2G",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.80 \u00c5",
    "date": "2003-04-08",
    "note": "PH AFFECTS GLU B13 SWITCHING AND SULFATE BINDING IN CUBIC INSULIN CRYSTALS (PH 9.00 COORDINATES)"
  },
  {
    "id": "1B45",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1999-07-09",
    "note": "ALPHA-CNIA CONOTOXIN FROM CONUS CONSORS, NMR, 43 STRUCTURES"
  },
  {
    "id": "1B5N",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1999-01-13",
    "note": "NMR STRUCTURE OF PSP1, PLASMATOCYTE-SPREADING PEPTIDE FROM PSEUDOPLUSIA INCLUDENS"
  },
  {
    "id": "1B8W",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1999-09-15",
    "note": "DEFENSIN-LIKE PEPTIDE 1"
  },
  {
    "id": "1B9E",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.50 \u00c5",
    "date": "1999-11-17",
    "note": "HUMAN INSULIN MUTANT SERB9GLU"
  },
  {
    "id": "1BAH",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1997-01-11",
    "note": "A TWO DISULFIDE DERIVATIVE OF CHARYBDOTOXIN WITH DISULFIDE 13-33 REPLACED BY TWO ALPHA-AMINOBUTYRIC ACIDS, NMR, 30 STRUCTURES"
  },
  {
    "id": "1BBG",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1998-06-17",
    "note": "RAGWEED POLLEN ALLERGEN FROM AMBROSIA TRIFIDA V, NMR, MINIMIZED AVERAGE STRUCTURE"
  },
  {
    "id": "1BCK",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.80 \u00c5",
    "date": "1998-09-16",
    "note": "HUMAN CYCLOPHILIN A COMPLEXED WITH 2-THR CYCLOSPORIN"
  },
  {
    "id": "1BDS",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1989-01-09",
    "note": "DETERMINATION OF THE THREE-DIMENSIONAL SOLUTION STRUCTURE OF THE ANTIHYPERTENSIVE AND ANTIVIRAL PROTEIN BDS-I FROM THE SEA ANEMONE ANEMONIA SULCATA. A STUDY USING NUCLEAR MAGNETIC RESONANCE AND HYBRID DISTANCE GEOMETRY-DYNAMICAL SIMULATED ANNEALING"
  },
  {
    "id": "1BEI",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1998-12-02",
    "note": "Shk-dnp22: A Potent Kv1.3-specific immunosuppressive polypeptide, NMR, 20 structures"
  },
  {
    "id": "1BEN",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.40 \u00c5",
    "date": "1996-07-11",
    "note": "INSULIN COMPLEXED WITH 4-HYDROXYBENZAMIDE"
  },
  {
    "id": "1BF9",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1999-02-16",
    "note": "N-TERMINAL EGF-LIKE DOMAIN FROM HUMAN FACTOR VII, NMR, 23 STRUCTURES"
  },
  {
    "id": "1BGK",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1997-01-27",
    "note": "SEA ANEMONE TOXIN (BGK) WITH HIGH AFFINITY FOR VOLTAGE DEPENDENT POTASSIUM CHANNEL, NMR, 15 STRUCTURES"
  },
  {
    "id": "1BH4",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1999-06-15",
    "note": "CIRCULIN A FROM CHASSALIA PARVIFLORA, NMR, 12 STRUCTURES"
  },
  {
    "id": "1BHP",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.70 \u00c5",
    "date": "1996-03-15",
    "note": "STRUCTURE OF BETA-PUROTHIONIN AT ROOM TEMPERATURE AND 1.7 ANGSTROMS RESOLUTION"
  },
  {
    "id": "1BIG",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1999-01-13",
    "note": "SCORPION TOXIN BMTX1 FROM BUTHUS MARTENSII KARSCH, NMR, 25 STRUCTURES"
  },
  {
    "id": "1BK8",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2000-01-05",
    "note": "DETERMINATION OF THE THREE-DIMENSIONAL SOLUTION STRUCTURE OF AESCULUS HIPPOCASTANUM ANTIMICROBIAL PROTEIN 1 (AH-AMP1) BY 1H NMR, 25 STRUCTURES"
  },
  {
    "id": "1BKT",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1999-01-13",
    "note": "BMKTX TOXIN FROM SCORPION BUTHUS MARTENSII KARSCH, NMR, 25 STRUCTURES"
  },
  {
    "id": "1BKU",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1999-01-13",
    "note": "EFFECTS OF GLYCOSYLATION ON THE STRUCTURE AND DYNAMICS OF EEL CALCITONIN, NMR, 10 STRUCTURES"
  },
  {
    "id": "1BNB",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1995-10-15",
    "note": "SOLUTION STRUCTURE OF BOVINE NEUTROPHIL BETA-DEFENSIN 12: THE PEPTIDE FOLD OF THE BETA-DEFENSINS IS IDENTICAL TO THAT OF THE CLASSICAL DEFENSINS"
  },
  {
    "id": "1BOE",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1998-12-16",
    "note": "STRUCTURE OF THE IGF BINDING DOMAIN OF THE INSULIN-LIKE GROWTH FACTOR-BINDING PROTEIN-5 (IGFBP-5): IMPLICATIONS FOR IGF AND IGF-I RECEPTOR INTERACTIONS"
  },
  {
    "id": "1BOM",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1994-11-01",
    "note": "THREE-DIMENSIONAL STRUCTURE OF BOMBYXIN-II, AN INSULIN-RELATED BRAIN-SECRETORY PEPTIDE OF THE SILKMOTH BOMBYX MORI: COMPARISON WITH INSULIN AND RELAXIN"
  },
  {
    "id": "1BON",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1995-01-26",
    "note": "THREE-DIMENSIONAL STRUCTURE OF BOMBYXIN-II, AN INSULIN-RELATED BRAIN-SECRETORY PEPTIDE OF THE SILKMOTH BOMBYX MORI: COMPARISON WITH INSULIN AND RELAXIN"
  },
  {
    "id": "1BPH",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.00 \u00c5",
    "date": "1993-01-15",
    "note": "CONFORMATIONAL CHANGES IN CUBIC INSULIN CRYSTALS IN THE PH RANGE 7-11"
  },
  {
    "id": "1BQF",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1998-12-09",
    "note": "GROWTH-BLOCKING PEPTIDE (GBP) FROM PSEUDALETIA SEPARATA"
  },
  {
    "id": "1BRV",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1997-06-05",
    "note": "SOLUTION NMR STRUCTURE OF THE IMMUNODOMINANT REGION OF PROTEIN G OF BOVINE RESPIRATORY SYNCYTIAL VIRUS, 48 STRUCTURES"
  },
  {
    "id": "1BYV",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1998-10-28",
    "note": "GLYCOSYLATED EEL CALCITONIN"
  },
  {
    "id": "1BZB",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1998-11-11",
    "note": "GLYCOSYLATED EEL CALCITONIN"
  },
  {
    "id": "1BZV",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1999-05-18",
    "note": "[D-ALAB26]-DES(B27-B30)-INSULIN-B26-AMIDE A SUPERPOTENT SINGLE-REPLACEMENT INSULIN ANALOGUE, NMR, MINIMIZED AVERAGE STRUCTURE"
  },
  {
    "id": "1C2U",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1999-11-10",
    "note": "SOLUTION STRUCTURE OF [ABU3,35]SHK12-28,17-32"
  },
  {
    "id": "1C49",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2000-03-22",
    "note": "STRUCTURAL AND FUNCTIONAL DIFFERENCES OF TWO TOXINS FROM THE SCORPION PANDINUS IMPERATOR"
  },
  {
    "id": "1C4B",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1999-08-25",
    "note": "A BETA-HAIRPIN MIMIC FROM FCERI-ALPHA-CYCLO(RD-262)"
  },
  {
    "id": "1C4E",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1999-08-27",
    "note": "GURMARIN FROM GYMNEMA SYLVESTRE"
  },
  {
    "id": "1C55",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2000-07-19",
    "note": "NMR SOLUTION STRUCTURE OF BUTANTOXIN"
  },
  {
    "id": "1C5F",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.47 \u00c5",
    "date": "1999-12-03",
    "note": "CRYSTAL STRUCTURE OF THE CYCLOPHILIN-LIKE DOMAIN FROM BRUGIA MALAYI COMPLEXED WITH CYCLOSPORIN A"
  },
  {
    "id": "1C6W",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2000-09-06",
    "note": "MAUROCALCIN FROM SCORPIO MAURUS"
  },
  {
    "id": "1CBH",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1990-01-15",
    "note": "DETERMINATION OF THE THREE-DIMENSIONAL STRUCTURE OF THE C-TERMINAL DOMAIN OF CELLOBIOHYDROLASE I FROM TRICHODERMA REESEI. A STUDY USING NUCLEAR MAGNETIC RESONANCE AND HYBRID DISTANCE GEOMETRY-DYNAMICAL SIMULATED ANNEALING"
  },
  {
    "id": "1CBN",
    "method": "X-RAY DIFFRACTION",
    "resolution": "0.83 \u00c5",
    "date": "1994-01-31",
    "note": "ATOMIC RESOLUTION (0.83 ANGSTROMS) CRYSTAL STRUCTURE OF THE HYDROPHOBIC PROTEIN CRAMBIN AT 130 K"
  },
  {
    "id": "1CCF",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1994-05-31",
    "note": "How an Epidermal Growth Factor (EGF)-Like Domain Binds Calcium-High Resolution NMR Structure of the Calcium Form of the NH2-Terminal EGF-Like Domain in Coagulation Factor X"
  },
  {
    "id": "1CCM",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1993-10-31",
    "note": "DIRECT NOE REFINEMENT OF CRAMBIN FROM 2D NMR DATA USING A SLOW-COOLING ANNEALING PROTOCOL"
  },
  {
    "id": "1CCN",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1993-10-31",
    "note": "DIRECT NOE REFINEMENT OF CRAMBIN FROM 2D NMR DATA USING A SLOW-COOLING ANNEALING PROTOCOL"
  },
  {
    "id": "1CE4",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1999-03-18",
    "note": "CONFORMATIONAL MODEL FOR THE CONSENSUS V3 LOOP OF THE ENVELOPE PROTEIN GP120 OF HIV-1"
  },
  {
    "id": "1CFH",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1995-07-10",
    "note": "STRUCTURE OF THE METAL-FREE GAMMA-CARBOXYGLUTAMIC ACID-RICH MEMBRANE BINDING REGION OF FACTOR IX BY TWO-DIMENSIONAL NMR SPECTROSCOPY"
  },
  {
    "id": "1CFI",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1996-06-20",
    "note": "NMR STRUCTURE OF CALCIUM ION-BOUND GAMMA-CARBOXY-GLUTAMIC ACID-RICH DOMAIN OF FACTOR IX"
  },
  {
    "id": "1CHL",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1995-02-07",
    "note": "NMR SEQUENTIAL ASSIGNMENTS AND SOLUTION STRUCTURE OF CHLOROTOXIN, A SMALL SCORPION TOXIN THAT BLOCKS CHLORIDE CHANNELS"
  },
  {
    "id": "1CIX",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2002-05-01",
    "note": "THREE-DIMENSIONAL STRUCTURE OF ANTIMICROBIAL PEPTIDE TACHYSTATIN A ISOLATED FROM HORSESHOE CRAB"
  },
  {
    "id": "1CLV",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.00 \u00c5",
    "date": "2000-05-03",
    "note": "YELLOW MEAL WORM ALPHA-AMYLASE IN COMPLEX WITH THE AMARANTH ALPHA-AMYLASE INHIBITOR"
  },
  {
    "id": "1CMR",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1996-08-01",
    "note": "NMR SOLUTION STRUCTURE OF A CHIMERIC PROTEIN, DESIGNED BY TRANSFERRING A FUNCTIONAL SNAKE BETA-HAIRPIN INTO A SCORPION ALPHA/BETA SCAFFOLD (PH 3.5, 20C), NMR, 18 STRUCTURES"
  },
  {
    "id": "1CNL",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1999-05-27",
    "note": "ALPHA-CONOTOXIN IMI"
  },
  {
    "id": "1CNN",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2000-05-31",
    "note": "OMEGA-CONOTOXIN MVIIC FROM CONUS MAGUS"
  },
  {
    "id": "1CNR",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.05 \u00c5",
    "date": "1994-08-31",
    "note": "CORRELATED DISORDER OF THE PURE PRO22(SLASH)LEU25 FORM OF CRAMBIN AT 150K REFINED TO 1.05 ANGSTROMS RESOLUTION"
  },
  {
    "id": "1CPH",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.90 \u00c5",
    "date": "1993-01-15",
    "note": "CONFORMATIONAL CHANGES IN CUBIC INSULIN CRYSTALS IN THE PH RANGE 7-11"
  },
  {
    "id": "1CR8",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1998-12-23",
    "note": "LOW DENSITY LIPOPROTEIN RECEPTOR-RELATED PROTEIN COMPLEMENT REPEAT 8"
  },
  {
    "id": "1CRN",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.50 \u00c5",
    "date": "1981-07-28",
    "note": "WATER STRUCTURE OF A HYDROPHOBIC PROTEIN AT ATOMIC RESOLUTION. PENTAGON RINGS OF WATER MOLECULES IN CRYSTALS OF CRAMBIN"
  },
  {
    "id": "1CSA",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1994-04-30",
    "note": "THE MUTANT E.COLI F112W CYCLOPHILIN BINDS CYCLOSPORIN A IN NEARLY IDENTICAL CONFORMATION AS HUMAN CYCLOPHILIN"
  },
  {
    "id": "1CSB",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.00 \u00c5",
    "date": "1996-04-03",
    "note": "Crystal structure of cathepsin b inhibited with CA030 at 2.1 angstroms resolution: A basis for the design of specific epoxysuccinyl inhibitors"
  },
  {
    "id": "1CTI",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1992-01-15",
    "note": "DETERMINATION OF THE COMPLETE THREE-DIMENSIONAL STRUCTURE OF THE TRYPSIN INHIBITOR FROM SQUASH SEEDS IN AQUEOUS SOLUTION BY NUCLEAR MAGNETIC RESONANCE AND A COMBINATION OF DISTANCE GEOMETRY AND DYNAMICAL SIMULATED ANNEALING"
  },
  {
    "id": "1CW5",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1999-09-07",
    "note": "SOLUTION STRUCTURE OF CARNOBACTERIOCIN B2"
  },
  {
    "id": "1CW6",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1999-09-08",
    "note": "REFINED SOLUTION STRUCTURE OF LEUCOCIN A"
  },
  {
    "id": "1CWA",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.10 \u00c5",
    "date": "1996-01-29",
    "note": "X-RAY STRUCTURE OF A MONOMERIC CYCLOPHILIN A-CYCLOSPORIN A CRYSTAL COMPLEX AT 2.1 ANGSTROMS RESOLUTION"
  },
  {
    "id": "1CWB",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.20 \u00c5",
    "date": "1996-01-29",
    "note": "THE X-RAY STRUCTURE OF (MEBM2T)1-CYCLOSPORIN COMPLEXED WITH CYCLOPHILIN A PROVIDES AN EXPLANATION FOR ITS ANOMALOUSLY HIGH IMMUNOSUPPRESSIVE ACTIVITY"
  },
  {
    "id": "1CWC",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.86 \u00c5",
    "date": "1996-01-29",
    "note": "IMPROVED BINDING AFFINITY FOR CYCLOPHILIN A BY A CYCLOSPORIN DERIVATIVE SINGLY MODIFIED AT ITS EFFECTOR DOMAIN"
  },
  {
    "id": "1CWF",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.86 \u00c5",
    "date": "1998-07-15",
    "note": "HUMAN CYCLOPHILIN A COMPLEXED WITH 2-VAL CYCLOSPORIN"
  },
  {
    "id": "1CWI",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.90 \u00c5",
    "date": "1998-08-12",
    "note": "HUMAN CYCLOPHILIN A COMPLEXED WITH 2-VAL 3-(N-METHYL)-D-ALANINE CYCLOSPORIN"
  },
  {
    "id": "1CWJ",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.80 \u00c5",
    "date": "1998-08-26",
    "note": "HUMAN CYCLOPHILIN A COMPLEXED WITH 2-VAL 3-S-METHYL-SARCOSINE CYCLOSPORIN"
  },
  {
    "id": "1CWK",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.80 \u00c5",
    "date": "1998-07-15",
    "note": "HUMAN CYCLOPHILIN A COMPLEXED WITH 1-(6,7-DIHYDRO)MEBMT 2-VAL 3-D-(2-S-METHYL)SARCOSINE CYCLOSPORIN"
  },
  {
    "id": "1CWL",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.80 \u00c5",
    "date": "1998-07-15",
    "note": "HUMAN CYCLOPHILIN A COMPLEXED WITH 4 4-HYDROXY-MELEU CYCLOSPORIN"
  },
  {
    "id": "1CWM",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.00 \u00c5",
    "date": "1998-07-15",
    "note": "HUMAN CYCLOPHILIN A COMPLEXED WITH 4 MEILE CYCLOSPORIN"
  },
  {
    "id": "1CWO",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.86 \u00c5",
    "date": "1998-08-12",
    "note": "HUMAN CYCLOPHILIN A COMPLEXED WITH THR2, LEU5, D-HIV8, LEU10 CYCLOSPORIN"
  },
  {
    "id": "1CXR",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1999-09-07",
    "note": "AUTOMATED 2D NOESY ASSIGNMENT AND STRUCTURE CALCULATION OF CRAMBIN(S22/I25) WITH SELF-CORRECTING DISTANCE GEOMETRY BASED NOAH/DIAMOD PROGRAMS"
  },
  {
    "id": "1CYA",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1994-01-31",
    "note": "NMR STUDIES OF (U-13C)CYCLOSPORIN A BOUND TO CYCLOPHILIN: BOUND CONFORMATION AND PORTIONS OF CYCLOSPORIN INVOLVED IN BINDING"
  },
  {
    "id": "1CYB",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1994-01-31",
    "note": "NMR STUDIES OF (U-13C)CYCLOSPORIN A BOUND TO CYCLOPHILIN: BOUND CONFORMATION AND PORTIONS OF CYCLOSPORIN INVOLVED IN BINDING"
  },
  {
    "id": "1CYN",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.85 \u00c5",
    "date": "1996-01-29",
    "note": "CYCLOPHILIN B COMPLEXED WITH [D-(CHOLINYLESTER)SER8]-CYCLOSPORIN"
  },
  {
    "id": "1CZ6",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2000-01-12",
    "note": "SOLUTION STRUCTURE OF ANDROCTONIN"
  },
  {
    "id": "1CZQ",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.50 \u00c5",
    "date": "1999-10-13",
    "note": "CRYSTAL STRUCTURE OF THE D10-P1/IQN17 COMPLEX: A D-PEPTIDE INHIBITOR OF HIV-1 ENTRY BOUND TO THE GP41 COILED-COIL POCKET."
  },
  {
    "id": "1D1H",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2000-09-20",
    "note": "SOLUTION STRUCTURE OF HANATOXIN 1"
  },
  {
    "id": "1D2J",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2000-03-22",
    "note": "LDL RECEPTOR LIGAND-BINDING MODULE 6"
  },
  {
    "id": "1D2L",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2000-01-14",
    "note": "NMR SOLUTION STRUCTURE OF COMPLEMENT-LIKE REPEAT CR3 FROM THE LOW DENSITY LIPOPROTEIN RECEPTOR-RELATED PROTEIN (LRP). EVIDENCE FOR SPECIFIC BINDING TO THE RECEPTOR BINDING DOMAIN OF HUMAN ALPHA-2 MACROGLOBULIN"
  },
  {
    "id": "1D5Q",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2000-10-11",
    "note": "SOLUTION STRUCTURE OF A MINI-PROTEIN REPRODUCING THE CORE OF THE CD4 SURFACE INTERACTING WITH THE HIV-1 ENVELOPE GLYCOPROTEIN"
  },
  {
    "id": "1D6B",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2000-06-21",
    "note": "SOLUTION STRUCTURE OF DEFENSIN-LIKE PEPTIDE-2 (DLP-2) FROM PLATYPUS VENOM"
  },
  {
    "id": "1D6G",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1999-11-17",
    "note": "MOLECULAR COMPLEX OF CHOLECYSTOKININ-8 AND N-TERMINUS OF THE CHOLECYSTOKININ A RECEPTOR BY NMR SPECTROSCOPY"
  },
  {
    "id": "1DEC",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1994-08-31",
    "note": "STRUCTURE OF THE RGD PROTEIN DECORSIN: CONSERVED MOTIF AND DISTINCT FUNCTION IN LEECH PROTEINS THAT AFFECT BLOOD CLOTTING"
  },
  {
    "id": "1DEI",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.60 \u00c5",
    "date": "1997-06-16",
    "note": "DESHEPTAPEPTIDE (B24-B30) INSULIN"
  },
  {
    "id": "1DF6",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2000-03-01",
    "note": "1H NMR SOLUTION STRUCTURE OF CYCLOVIOLACIN O1"
  },
  {
    "id": "1DFN",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.90 \u00c5",
    "date": "1992-07-15",
    "note": "CRYSTAL STRUCTURE OF DEFENSIN HNP-3, AN AMPHIPHILIC DIMER: MECHANISMS OF MEMBRANE PERMEABILIZATION"
  },
  {
    "id": "1DG2",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2000-02-25",
    "note": "SOLUTION CONFORMATION OF A-CONOTOXIN AUIB"
  },
  {
    "id": "1DKC",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2000-12-13",
    "note": "SOLUTION STRUCTURE OF PAFP-S, AN ANTIFUNGAL PEPTIDE FROM THE SEEDS OF PHYTOLACCA AMERICANA"
  },
  {
    "id": "1DL0",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2000-09-15",
    "note": "SOLUTION STRUCTURE OF THE INSECTICIDAL NEUROTOXIN J-ATRACOTOXIN-HV1C"
  },
  {
    "id": "1DN2",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.70 \u00c5",
    "date": "2000-05-17",
    "note": "FC FRAGMENT OF HUMAN IGG1 IN COMPLEX WITH AN ENGINEERED 13 RESIDUE PEPTIDE DCAWHLGELVWCT-NH2"
  },
  {
    "id": "1DPH",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.90 \u00c5",
    "date": "1993-01-15",
    "note": "CONFORMATIONAL CHANGES IN CUBIC INSULIN CRYSTALS IN THE PH RANGE 7-11"
  },
  {
    "id": "1DU9",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2000-02-04",
    "note": "SOLUTION STRUCTURE OF BMP02, A NATURAL SCORPION TOXIN WHICH BLOCKS APAMIN-SENSITIVE CALCIUM-ACTIVATED POTASSIUM CHANNELS, 25 STRUCTURES"
  },
  {
    "id": "1DVA",
    "method": "X-RAY DIFFRACTION",
    "resolution": "3.00 \u00c5",
    "date": "2000-05-12",
    "note": "Crystal Structure of the Complex Between the Peptide Exosite Inhibitor E-76 and Coagulation Factor VIIA"
  },
  {
    "id": "1DW4",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2000-03-01",
    "note": "NMR STRUCTURE OF OMEGA-CONOTOXIN MVIIA: CONSTRAINTS ON DISULPHIDE BRIDGES"
  },
  {
    "id": "1DW5",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2000-03-01",
    "note": "NMR STRUCTURE OF OMEGA-CONOTOXIN MVIIA: NO CONSTRAINTS ON DISULPHIDE BRIDGES"
  },
  {
    "id": "1E4Q",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2001-07-12",
    "note": "Solution structure of the human defensin hBD-2"
  },
  {
    "id": "1E4R",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2001-07-12",
    "note": "Solution structure of the mouse defensin mBD-8"
  },
  {
    "id": "1E4S",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2001-07-12",
    "note": "Solution structure of the human defensin hBD-1"
  },
  {
    "id": "1E4T",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2001-07-12",
    "note": "Solution structure of the mouse defensin mBD-7"
  },
  {
    "id": "1E74",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2000-12-27",
    "note": "NMR SOLUTION STRUCTURE OF ALPHA-CONOTOXIN IM1 POINT MUTATION VARIANT R11E"
  },
  {
    "id": "1E75",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2000-12-27",
    "note": "NMR SOLUTION STRUCTURE OF ALPHA-CONOTOXIN IM1 POINT MUTATION VARIANT R7L"
  },
  {
    "id": "1E76",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2000-12-27",
    "note": "NMR SOLUTION STRUCTURE OF ALPHA-CONOTOXIN IM1 POINT MUTATION VARIANT D5N"
  },
  {
    "id": "1E8P",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2001-09-07",
    "note": "Characterisation of the cellulose docking domain from Piromyces equi"
  },
  {
    "id": "1E8Q",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2001-09-07",
    "note": "Characterisation of the cellulose docking domain from Piromyces equi"
  },
  {
    "id": "1E8R",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2000-10-03",
    "note": "SOLUTION STRUCTURE OF TYPE X CBD"
  },
  {
    "id": "1EBA",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.70 \u00c5",
    "date": "1998-11-11",
    "note": "COMPLEX BETWEEN THE EXTRACELLULAR DOMAIN OF ERYTHROPOIETIN (EPO) RECEPTOR [EBP] AND AN INACTIVE PEPTIDE [EMP33] CONTAINS 3,5-DIBROMOTYROSINE IN POSITION 4 (DENOTED DBY)"
  },
  {
    "id": "1EBP",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.80 \u00c5",
    "date": "1997-07-29",
    "note": "COMPLEX BETWEEN THE EXTRACELLULAR DOMAIN OF ERYTHROPOIETIN (EPO) RECEPTOR [EBP] AND AN AGONIST PEPTIDE [EMP1]"
  },
  {
    "id": "1ECI",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1995-12-07",
    "note": "ECTATOMIN (WATER SOLUTION, NMR 20 STRUCTURES)"
  },
  {
    "id": "1ED0",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2000-02-04",
    "note": "NMR structural determination of viscotoxin A3 from Viscum album L."
  },
  {
    "id": "1EDM",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.50 \u00c5",
    "date": "1996-10-14",
    "note": "EPIDERMAL GROWTH FACTOR-LIKE DOMAIN FROM HUMAN FACTOR IX"
  },
  {
    "id": "1EDN",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.18 \u00c5",
    "date": "1995-10-15",
    "note": "HUMAN ENDOTHELIN-1"
  },
  {
    "id": "1EDP",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1993-10-31",
    "note": "CONFORMATIONAL ISOMERISM OF ENDOTHELIN IN ACIDIC AQUEOUS MEDIA: A QUANTITATIVE NOESY ANALYSIS"
  },
  {
    "id": "1EGT",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1995-11-15",
    "note": "THROMBIN-BOUND STRUCTURE OF AN EGF SUBDOMAIN FROM HUMAN THROMBOMODULIN DETERMINED BY TRANSFERRED NUCLEAR OVERHAUSER EFFECTS"
  },
  {
    "id": "1EHL",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.40 \u00c5",
    "date": "2001-02-21",
    "note": "64M-2 ANTIBODY FAB COMPLEXED WITH D(5HT)(6-4)T"
  },
  {
    "id": "1EHS",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1995-09-15",
    "note": "THE STRUCTURE OF ESCHERICHIA COLI HEAT-STABLE ENTEROTOXIN B BY NUCLEAR MAGNETIC RESONANCE AND CIRCULAR DICHROISM"
  },
  {
    "id": "1EI0",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2001-02-23",
    "note": "NMR STRUCTURE OF THE ALPHA-HELICAL HAIRPIN OF P8MTCP1"
  },
  {
    "id": "1EIT",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1996-04-03",
    "note": "NMR STUDY OF MU-AGATOXIN"
  },
  {
    "id": "1EJG",
    "method": "X-RAY DIFFRACTION",
    "resolution": "0.54 \u00c5",
    "date": "2000-04-05",
    "note": "CRAMBIN AT ULTRA-HIGH RESOLUTION: VALENCE ELECTRON DENSITY."
  },
  {
    "id": "1EMX",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2001-01-24",
    "note": "SOLUTION STRUCTURE OF HPTX2, A TOXIN FROM HETEROPODA VENATORIA SPIDER VENOM THAT BLOCKS KV4.2 POTASSIUM CHANNEL"
  },
  {
    "id": "1EPT",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.80 \u00c5",
    "date": "1995-02-07",
    "note": "REFINED 1.8 ANGSTROMS RESOLUTION CRYSTAL STRUCTURE OF PORCINE EPSILON-TRYPSIN"
  },
  {
    "id": "1ERC",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1994-10-15",
    "note": "THE NMR SOLUTION STRUCTURE OF THE PHEROMONE ER-1 FROM THE CILIATED PROTOZOAN EUPLOTES RAIKOVI"
  },
  {
    "id": "1ERD",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1994-10-15",
    "note": "THE NMR SOLUTION STRUCTURE OF THE PHEROMONE ER-2 FROM THE CILIATED PROTOZOAN EUPLOTES RAIKOVI"
  },
  {
    "id": "1ERP",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1993-10-31",
    "note": "NUCLEAR MAGNETIC RESONANCE SOLUTION STRUCTURE OF THE PHEROMONE ER-10 FROM THE CILIATED PROTOZOAN EUPLOTES RAIKOVI"
  },
  {
    "id": "1ERY",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1996-08-17",
    "note": "PHEROMONE ER-11, NMR"
  },
  {
    "id": "1ETL",
    "method": "X-RAY DIFFRACTION",
    "resolution": "0.89 \u00c5",
    "date": "1996-01-29",
    "note": "STRUCTURAL CHARACTERISTICS FOR BIOLOGICAL ACTIVITY OF HEAT-STABLE ENTEROTOXIN PRODUCED BY ENTEROTOXIGENIC ESCHERICHIA COLI: X-RAY CRYSTALLOGRAPHY OF WEAKLY TOXIC AND NONTOXIC ANALOGS"
  },
  {
    "id": "1ETM",
    "method": "X-RAY DIFFRACTION",
    "resolution": "0.89 \u00c5",
    "date": "1996-01-29",
    "note": "STRUCTURAL CHARACTERISTICS FOR BIOLOGICAL ACTIVITY OF HEAT-STABLE ENTEROTOXIN PRODUCED BY ENTEROTOXIGENIC ESCHERICHIA COLI: X-RAY CRYSTALLOGRAPHY OF WEAKLY TOXIC AND NONTOXIC ANALOGS"
  },
  {
    "id": "1ETN",
    "method": "X-RAY DIFFRACTION",
    "resolution": "0.89 \u00c5",
    "date": "1996-01-29",
    "note": "MOLECULAR STRUCTURE OF THE TOXIC DOMAIN OF HEAT-STABLE ENTEROTOXIN PRODUCED BY A PATHOGENIC STRAIN OF ESCHERICHIA COLI"
  },
  {
    "id": "1EU2",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2001-01-24",
    "note": "DIMERIC SOLUTION STRUCTURE OF THE CYCLIC OCTAMER CD(TGCTCGCT)"
  },
  {
    "id": "1EU6",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2001-01-24",
    "note": "DIMERIC SOLUTION STRUCTURE OF THE CYCLIC OCTAMER CD(CATTCATT)"
  },
  {
    "id": "1EV3",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.78 \u00c5",
    "date": "2000-12-04",
    "note": "Structure of the rhombohedral form of the M-cresol/insulin R6 hexamer"
  },
  {
    "id": "1EV6",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.90 \u00c5",
    "date": "2000-12-04",
    "note": "Structure of the monoclinic form of the M-cresol/insulin R6 hexamer"
  },
  {
    "id": "1EVA",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1996-11-08",
    "note": "NMR structure of cyanobacterial toxin, phosphatase-1/-2A inhibitor"
  },
  {
    "id": "1EVB",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1996-11-08",
    "note": "NMR structure of cyanobacterial toxin, phosphatase-1/-2A inhibitor"
  },
  {
    "id": "1EVR",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.90 \u00c5",
    "date": "2000-12-04",
    "note": "The structure of the resorcinol/insulin R6 hexamer"
  },
  {
    "id": "1EWS",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2001-05-02",
    "note": "THE THREE-DIMENSIONAL SOLUTION STRUCTURE OF THE RABBIT KIDNEY DEFENSIN, RK-1"
  },
  {
    "id": "1EYO",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2000-09-06",
    "note": "SOLUTION STRUCTURE OF CONOTOXIN TVIIA FROM CONUS TULIPA"
  },
  {
    "id": "1F2S",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.79 \u00c5",
    "date": "2000-06-05",
    "note": "CRYSTAL STRUCTURE OF THE COMPLEX FORMED BETWEEN BOVINE BETA-TRYPSIN AND MCTI-A, A TRYPSIN INHIBITOR OF SQUASH FAMILY AT 1.8 A RESOLUTION"
  },
  {
    "id": "1F3K",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2000-12-13",
    "note": "THREE-DIMENSIONAL SOLUTION STRUCTURE OF OMEGA-CONOTOXIN TXVII, AN L-TYPE CALCIUM CHANNEL BLOCKER"
  },
  {
    "id": "1F7E",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1999-06-16",
    "note": "THE FIRST EGF-LIKE DOMAIN FROM HUMAN BLOOD COAGULATION FVII, NMR, 20 STRUCTURES"
  },
  {
    "id": "1F7M",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1999-06-16",
    "note": "THE FIRST EGF-LIKE DOMAIN FROM HUMAN BLOOD COAGULATION FVII, NMR, MINIMIZED AVERAGE STRUCTURE"
  },
  {
    "id": "1F8Z",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2000-10-18",
    "note": "NMR STRUCTURE OF THE SIXTH LIGAND-BINDING MODULE OF THE LDL RECEPTOR"
  },
  {
    "id": "1FD3",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.35 \u00c5",
    "date": "2000-11-01",
    "note": "HUMAN BETA-DEFENSIN 2"
  },
  {
    "id": "1FD4",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.70 \u00c5",
    "date": "2000-11-01",
    "note": "HUMAN BETA-DEFENSIN 2"
  },
  {
    "id": "1FEO",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2000-08-23",
    "note": "Solution structure of omega-conotoxin MVIIA with C-terminal Gly"
  },
  {
    "id": "1FF7",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1999-06-16",
    "note": "THE FIRST EGF-LIKE DOMAIN FROM HUMAN BLOOD COAGULATION FVII (FUCOSYLATED AT SER-60), NMR, 20 STRUCTURES"
  },
  {
    "id": "1FFM",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1999-06-16",
    "note": "THE FIRST EGF-LIKE DOMAIN FROM HUMAN BLOOD COAGULATION FVII (FUCOSYLATED AT SER-60), NMR, MINIMIZED AVERAGE STRUCTURE"
  },
  {
    "id": "1FGD",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1996-06-20",
    "note": "EPIDERMAL GROWTH FACTOR (EGF) SUBDOMAIN OF HUMAN THROMBOMODULIN (NMR, 11 STRUCTURES)"
  },
  {
    "id": "1FGE",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1996-06-20",
    "note": "EPIDERMAL GROWTH FACTOR (EGF) SUBDOMAIN OF HUMAN THROMBOMODULIN (NMR, 14 STRUCTURES)"
  },
  {
    "id": "1FJM",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.10 \u00c5",
    "date": "1996-06-20",
    "note": "Protein serine/threonine phosphatase-1 (alpha isoform, type 1) complexed with microcystin-LR toxin"
  },
  {
    "id": "1FJN",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2000-12-20",
    "note": "SOLUTION STRUCTURE AND ACTIVITY OF THE FOUR DISULFIDE BOND MEDITERRANEAN MUSSEL DEFENSIN MGD-1"
  },
  {
    "id": "1FQQ",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2001-04-11",
    "note": "SOLUTION STRUCTURE OF HUMAN BETA-DEFENSIN-2"
  },
  {
    "id": "1FSB",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1997-04-01",
    "note": "STRUCTURE OF THE EGF DOMAIN OF P-SELECTIN, NMR, 19 STRUCTURES"
  },
  {
    "id": "1FU2",
    "method": "POWDER DIFFRACTION",
    "resolution": "N/A",
    "date": "2000-10-16",
    "note": "FIRST PROTEIN STRUCTURE DETERMINED FROM X-RAY POWDER DIFFRACTION DATA"
  },
  {
    "id": "1FU3",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2002-09-20",
    "note": "THREE-DIMENSIONAL STRUCTURE IN SOLUTION OF THE SODIUM CHANNEL AGONIST/ANTAGONIST DELTA-CONOTOXIN TXVIA"
  },
  {
    "id": "1FUB",
    "method": "POWDER DIFFRACTION",
    "resolution": "N/A",
    "date": "2000-10-16",
    "note": "FIRST PROTEIN STRUCTURE DETERMINED FROM X-RAY POWDER DIFFRACTION DATA"
  },
  {
    "id": "1FUL",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2001-05-16",
    "note": "SOLUTION STRUCTURE OF AN RGD PEPTIDE ISOMER-B"
  },
  {
    "id": "1FUV",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2001-05-16",
    "note": "SOLUTION STRUCTURE OF AN RGD PEPTIDE ISOMER-A"
  },
  {
    "id": "1FWO",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2001-05-09",
    "note": "THE SOLUTION STRUCTURE OF A 35-RESIDUE FRAGMENT FROM THE GRANULIN/EPITHELIN-LIKE SUBDOMAIN OF RICE ORYZAIN BETA (ROB 382-416 (C398S,C399S,C407S,C413S))"
  },
  {
    "id": "1FYG",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2000-10-18",
    "note": "Solution structure of omega conotoxin SO3 determined by 1H-NMR"
  },
  {
    "id": "1G1P",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2000-11-01",
    "note": "NMR Solution Structures of delta-Conotoxin EVIA from Conus ermineus that Selectively Acts on Vertebrate Neuronal Na+ Channels"
  },
  {
    "id": "1G1Z",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2000-11-01",
    "note": "NMR Solution Structures of delta-Conotoxin EVIA from Conus ermineus that Selectively Acts on Vertebrate Neuronal Na+ Channels, LEU12-PRO13 Cis isomer"
  },
  {
    "id": "1G26",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2000-11-01",
    "note": "THE SOLUTION STRUCTURE OF A WELL-FOLDED PEPTIDE BASED ON THE 31-RESIDUE AMINO-TERMINAL SUBDOMAIN OF HUMAN GRANULIN A"
  },
  {
    "id": "1G2G",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2000-11-08",
    "note": "MINIMAL CONFORMATION OF THE ALPHA-CONOTOXIN IMI FOR THE ALPHA7 NEURONAL NICOTINIC ACETYLCHOLINE RECEPTOR RECOGNITION"
  },
  {
    "id": "1G7A",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.20 \u00c5",
    "date": "2001-08-03",
    "note": "1.2 A structure of T3R3 human insulin at 100 K"
  },
  {
    "id": "1G7B",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.30 \u00c5",
    "date": "2001-08-03",
    "note": "1.3 A STRUCTURE OF T3R3 HUMAN INSULIN AT 100 K"
  },
  {
    "id": "1G9I",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.20 \u00c5",
    "date": "2000-12-06",
    "note": "CRYSTAL STRUCTURE OF BETA-TRYSIN COMPLEX IN CYCLOHEXANE"
  },
  {
    "id": "1G9P",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2002-02-21",
    "note": "SOLUTION STRUCTURE OF THE INSECTICIDAL CALCIUM CHANNEL BLOCKER OMEGA-ATRACOTOXIN-HV2A"
  },
  {
    "id": "1GIB",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1996-11-08",
    "note": "MU-CONOTOXIN GIIIB, NMR"
  },
  {
    "id": "1GJE",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2001-05-30",
    "note": "Peptide Antagonist of IGFBP-1, Minimized Average Structure"
  },
  {
    "id": "1GK5",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2002-08-08",
    "note": "Solution Structure the mEGF/TGFalpha44-50 chimeric growth factor"
  },
  {
    "id": "1GL0",
    "method": "X-RAY DIFFRACTION",
    "resolution": "3.00 \u00c5",
    "date": "2001-11-28",
    "note": "structure of the complex between bovine alpha-chymotrypsin and PMP-D2v, an inhibitor from the insect Locusta migratoria"
  },
  {
    "id": "1GL1",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.10 \u00c5",
    "date": "2001-11-28",
    "note": "structure of the complex between bovine alpha-chymotrypsin and PMP-C, an inhibitor from the insect Locusta migratoria"
  },
  {
    "id": "1GM2",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2002-08-29",
    "note": "The independent structure of the antitryptic reactive site loop of Bowman-Birk inhibitor and sunflower trypsin inhibitor-1"
  },
  {
    "id": "1GNA",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1994-09-30",
    "note": "DETERMINATION OF THE SOLUTION STRUCTURE OF THE PEPTIDE HORMONE GUANYLIN: OBSERVATION OF A NOVEL FORM OF TOPOLOGICAL STEREOISOMERISM"
  },
  {
    "id": "1GNB",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1994-09-30",
    "note": "DETERMINATION OF THE SOLUTION STRUCTURE OF THE PEPTIDE HORMONE GUANYLIN: OBSERVATION OF A NOVEL FORM OF TOPOLOGICAL STEREOISOMERISM"
  },
  {
    "id": "1GPS",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1993-10-31",
    "note": "SOLUTION STRUCTURE OF GAMMA 1-H AND GAMMA 1-P THIONINS FROM BARLEY AND WHEAT ENDOSPERM DETERMINED BY 1H-NMR: A STRUCTURAL MOTIF COMMON TO TOXIC ARTHROPOD PROTEINS"
  },
  {
    "id": "1GPT",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1993-10-31",
    "note": "SOLUTION STRUCTURE OF GAMMA 1-H AND GAMMA 1-P THIONINS FROM BARLEY AND WHEAT ENDOSPERM DETERMINED BY 1H-NMR: A STRUCTURAL MOTIF COMMON TO TOXIC ARTHROPOD PROTEINS"
  },
  {
    "id": "1GUJ",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.62 \u00c5",
    "date": "2002-03-08",
    "note": "Insulin at pH 2: structural analysis of the conditions promoting insulin fibre formation."
  },
  {
    "id": "1H0G",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.00 \u00c5",
    "date": "2002-06-27",
    "note": "Complex of a chitinase with the natural product cyclopentapeptide argadin from Clonostachys"
  },
  {
    "id": "1H0I",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.00 \u00c5",
    "date": "2002-06-27",
    "note": "Complex of a chitinase with the natural product cyclopentapeptide argifin from Gliocladium"
  },
  {
    "id": "1H20",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2003-05-09",
    "note": "Solution structure of the potato carboxypeptidase inhibitor"
  },
  {
    "id": "1H5O",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2003-05-09",
    "note": "Solution structure of Crotamine, a neurotoxin from Crotalus durissus terrificus"
  },
  {
    "id": "1H9H",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.50 \u00c5",
    "date": "2004-07-26",
    "note": "COMPLEX OF EETI-II WITH PORCINE TRYPSIN"
  },
  {
    "id": "1H9I",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.90 \u00c5",
    "date": "2004-07-26",
    "note": "COMPLEX OF EETI-II MUTANT WITH PORCINE TRYPSIN"
  },
  {
    "id": "1HA9",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2001-04-12",
    "note": "SOLUTION STRUCTURE OF THE SQUASH TRYPSIN INHIBITOR MCoTI-II, NMR, 30 STRUCTURES."
  },
  {
    "id": "1HD6",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2000-12-10",
    "note": "PHEROMONE ER-22, NMR"
  },
  {
    "id": "1HD9",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2001-03-29",
    "note": "The Bowman-Birk Inhibitor Reactive Site Loop Sequence Represents an Independent Structural Beta-Hairpin Motif"
  },
  {
    "id": "1HEV",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1994-01-31",
    "note": "HEVEIN: THE NMR ASSIGNMENT AND AN ASSESSMENT OF SOLUTION-STATE FOLDING FOR THE AGGLUTININ-TOXIN MOTIF"
  },
  {
    "id": "1HIA",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.40 \u00c5",
    "date": "1997-12-24",
    "note": "KALLIKREIN COMPLEXED WITH HIRUSTASIN"
  },
  {
    "id": "1HIQ",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1994-01-31",
    "note": "PARADOXICAL STRUCTURE AND FUNCTION IN A MUTANT HUMAN INSULIN ASSOCIATED WITH DIABETES MELLITUS"
  },
  {
    "id": "1HIS",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1994-01-31",
    "note": "Structure and dynamics of des-pentapeptide-insulin in solution: the molten-globule hypothesis."
  },
  {
    "id": "1HIT",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1994-01-31",
    "note": "Receptor binding redefined by a structural switch in a mutant Human Insulin"
  },
  {
    "id": "1HJE",
    "method": "X-RAY DIFFRACTION",
    "resolution": "0.75 \u00c5",
    "date": "2003-06-26",
    "note": "Crystal structure of alpha-conotoxin SI"
  },
  {
    "id": "1HLS",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1995-09-15",
    "note": "NMR STRUCTURE OF THE HUMAN INSULIN-HIS(B16)"
  },
  {
    "id": "1HLY",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2003-09-30",
    "note": "SOLUTION STRUCTURE OF HONGOTOXIN 1"
  },
  {
    "id": "1HP2",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2001-06-13",
    "note": "SOLUTION STRUCTURE OF A TOXIN FROM THE SCORPION TITYUS SERRULATUS (TSTX-K ALPHA) DETERMINED BY NMR."
  },
  {
    "id": "1HP3",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2002-12-11",
    "note": "C-TERMINAL TRUNCATION OF OMEGA-ATRACOTOXIN-HV2A (CT-HV2A)"
  },
  {
    "id": "1HP9",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2002-08-28",
    "note": "kappa-Hefutoxins: a novel Class of Potassium Channel Toxins from Scorpion venom"
  },
  {
    "id": "1HQQ",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.70 \u00c5",
    "date": "2003-09-16",
    "note": "MINIPROTEIN MP-2 (M9A) COMPLEX WITH STREPTAVIDIN"
  },
  {
    "id": "1HRL",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2001-01-10",
    "note": "STRUCTURE OF A PARALYTIC PEPTIDE FROM AN INSECT, MANDUCA SEXTA"
  },
  {
    "id": "1HTV",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.90 \u00c5",
    "date": "2001-05-23",
    "note": "CRYSTAL STRUCTURE OF DESTRIPEPTIDE (B28-B30) INSULIN"
  },
  {
    "id": "1HTX",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2001-07-18",
    "note": "SOLUTION STRUCTURE OF THE MAIN ALPHA-AMYLASE INHIBITOR FROM AMARANTH SEEDS"
  },
  {
    "id": "1HUC",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.10 \u00c5",
    "date": "1995-01-26",
    "note": "THE REFINED 2.15 ANGSTROMS X-RAY CRYSTAL STRUCTURE OF HUMAN LIVER CATHEPSIN B: THE STRUCTURAL BASIS FOR ITS SPECIFICITY"
  },
  {
    "id": "1HUI",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1997-03-12",
    "note": "INSULIN MUTANT (B1, B10, B16, B27)GLU, DES-B30, NMR, 25 STRUCTURES"
  },
  {
    "id": "1HVW",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2001-01-17",
    "note": "HAIRPINLESS MUTANT OF OMEGA-ATRACOTOXIN-HV1A"
  },
  {
    "id": "1HVZ",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2001-05-30",
    "note": "RTD-1, A CYCLIC ANTIMICROBIAL DEFENSIN FROM RHESUS MACAQUE LEUKOCYTES"
  },
  {
    "id": "1HXL",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.80 \u00c5",
    "date": "2003-06-17",
    "note": "MINIPROTEIN MP-2 (V10A) COMPLEX WITH STREPTAVIDIN"
  },
  {
    "id": "1HXZ",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.80 \u00c5",
    "date": "2003-06-17",
    "note": "MINIPROTEIN MP-2 COMPLEX WITH STREPTAVIDIN"
  },
  {
    "id": "1HY2",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.00 \u00c5",
    "date": "2003-06-17",
    "note": "MINIPROTEIN MP-1 COMPLEX WITH STREPTAVIDIN"
  },
  {
    "id": "1HY9",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2001-08-29",
    "note": "COCAINE AND AMPHETAMINE REGULATED TRANSCRIPT"
  },
  {
    "id": "1HYK",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2001-02-07",
    "note": "AGOUTI-RELATED PROTEIN (87-132) (AC-AGRP(87-132))"
  },
  {
    "id": "1I25",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2001-02-14",
    "note": "Three dimensional solution structure of huwentoxin-II by 2D 1H-NMR"
  },
  {
    "id": "1I26",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2001-11-21",
    "note": "SOLUTION STRUCTURE OF PTU-1, A TOXIN FROM THE ASSASSIN BUGS PEIRATES TURPIS THAT BLOCKS THE VOLTAGE SENSITIVE CALCIUM CHANNEL N-TYPE"
  },
  {
    "id": "1I2U",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2002-02-12",
    "note": "NMR SOLUTION STRUCTURES OF ANTIFUNGAL HELIOMICIN"
  },
  {
    "id": "1I2V",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2002-02-12",
    "note": "NMR SOLUTION STRUCTURES OF AN ANTIFUNGAL AND ANTIBACTERIAL MUTANT OF HELIOMICIN"
  },
  {
    "id": "1I6Y",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2002-07-10",
    "note": "NMR ENSEMBLE OF ION-SELECTIVE LIGAND A1 FOR PLATELET INTEGRIN ALPHAIIB-BETA3"
  },
  {
    "id": "1I8E",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2002-07-10",
    "note": "NMR ENSEMBLE OF ION-SELECTIVE LIGAND A22 FOR PLATELET INTEGRIN ALPHAIIB-BETA3"
  },
  {
    "id": "1I8X",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2002-04-17",
    "note": "SEMI-AUTOMATIC STRUCTURE DETERMINATION OF THE CG1 1-30 PEPTIDE BASED ON ARIA"
  },
  {
    "id": "1I8Y",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2002-04-17",
    "note": "SEMI-AUTOMATIC STRUCTURE DETERMINATION OF THE CG1 3-30 PEPTIDE BASED ON ARIA"
  },
  {
    "id": "1I93",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2002-07-10",
    "note": "NMR ENSEMBLE OF ION-SELECTIVE LIGAND D16 FOR PLATELET INTEGRIN ALPHAIIB-BETA3"
  },
  {
    "id": "1I98",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2002-07-10",
    "note": "NMR ENSEMBLE OF ION-SELECTIVE LIGAND D18 FOR PLATELET INTEGRIN ALPHAIIB-BETA3"
  },
  {
    "id": "1IB9",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2001-07-18",
    "note": "SOLUTION STRUCTURE OF MCOTI-II, A MACROCYCLIC TRYPSIN INHIBITOR"
  },
  {
    "id": "1IC9",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2001-04-11",
    "note": "NMR SOLUTION STRUCTURE OF THE DESIGNED BETA-SHEET MINI-PROTEIN TH10AOX"
  },
  {
    "id": "1ICA",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1995-07-10",
    "note": "REFINED THREE-DIMENSIONAL STRUCTURE OF INSECT DEFENSIN A"
  },
  {
    "id": "1ICL",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2001-04-11",
    "note": "SOLUTION STRUCTURE OF DESIGNED BETA-SHEET MINI-PROTEIN TH1OX"
  },
  {
    "id": "1ICO",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2001-04-11",
    "note": "SOLUTION STRUCTURE OF DESIGNED BETA-SHEET MINI-PROTEIN TH10BOX"
  },
  {
    "id": "1IDG",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2001-04-25",
    "note": "THE NMR SOLUTION STRUCTURE OF THE COMPLEX FORMED BETWEEN ALPHA-BUNGAROTOXIN AND AN 18MER COGNATE PEPTIDE"
  },
  {
    "id": "1IDH",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2001-04-25",
    "note": "THE NMR SOLUTION STRUCTURE OF THE COMPLEX FORMED BETWEEN ALPHA-BUNGAROTOXIN AND AN 18MER COGNATE PEPTIDE"
  },
  {
    "id": "1IE6",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2003-06-10",
    "note": "SOLUTION STRUCTURE OF IMPERATOXIN A"
  },
  {
    "id": "1IEN",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2002-04-03",
    "note": "SOLUTION STRUCTURE OF TIA"
  },
  {
    "id": "1IEO",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2002-04-03",
    "note": "SOLUTION STRUCTURE OF MRIB-NH2"
  },
  {
    "id": "1IJU",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.40 \u00c5",
    "date": "2001-10-24",
    "note": "HUMAN BETA-DEFENSIN-1"
  },
  {
    "id": "1IJV",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.20 \u00c5",
    "date": "2001-10-24",
    "note": "HUMAN BETA-DEFENSIN-1"
  },
  {
    "id": "1IM1",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1999-06-15",
    "note": "NMR SOLUTION STRUCTURE OF ALPHA-CONOTOXIN IM1, 20 STRUCTURES"
  },
  {
    "id": "1IM7",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2002-10-23",
    "note": "Solution structure of synthetic cyclic peptide mimicking the loop of HIV-1 gp41 glycoprotein envelope"
  },
  {
    "id": "1IMI",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1999-04-23",
    "note": "SOLUTION STRUCTURE OF ALPHA-CONOTOXIN IM1"
  },
  {
    "id": "1IMW",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2001-05-30",
    "note": "Peptide Antagonist of IGFBP-1"
  },
  {
    "id": "1IOD",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.30 \u00c5",
    "date": "2001-06-27",
    "note": "CRYSTAL STRUCTURE OF THE COMPLEX BETWEEN THE COAGULATION FACTOR X BINDING PROTEIN FROM SNAKE VENOM AND THE GLA DOMAIN OF FACTOR X"
  },
  {
    "id": "1IOG",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1999-01-13",
    "note": "INSULIN MUTANT A3 GLY,(B1, B10, B16, B27)GLU, DES-B30, NMR, 19 STRUCTURES"
  },
  {
    "id": "1IOH",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1999-01-13",
    "note": "INSULIN MUTANT A8 HIS,(B1, B10, B16, B27)GLU, DES-B30, NMR, 26 STRUCTURES"
  },
  {
    "id": "1IRR",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2003-02-11",
    "note": "Solution structure of paralytic peptide of the silkworm, Bombyx mori"
  },
  {
    "id": "1IVA",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1995-02-07",
    "note": "STRUCTURE-ACTIVITY RELATIONSHIPS FOR P-TYPE CALCIUM CHANNEL SELECTIVE OMEGA-AGATOXINS"
  },
  {
    "id": "1IXA",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1993-10-31",
    "note": "THE THREE-DIMENSIONAL STRUCTURE OF THE FIRST EGF-LIKE MODULE OF HUMAN FACTOR IX: COMPARISON WITH EGF AND TGF-A"
  },
  {
    "id": "1IXT",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2003-01-28",
    "note": "Structure of a Novel P-Superfamily Spasmodic Conotoxin Reveals an Inhibitory Cystine Knot Motif"
  },
  {
    "id": "1IYC",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2003-06-24",
    "note": "Solution structure of antifungal peptide, scarabaecin"
  },
  {
    "id": "1IZA",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.50 \u00c5",
    "date": "1993-10-31",
    "note": "ROLE OF B13 GLU IN INSULIN ASSEMBLY: THE HEXAMER STRUCTURE OF RECOMBINANT MUTANT (B13 GLU-> GLN) INSULIN"
  },
  {
    "id": "1IZB",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.00 \u00c5",
    "date": "1993-10-31",
    "note": "ROLE OF B13 GLU IN INSULIN ASSEMBLY: THE HEXAMER STRUCTURE OF RECOMBINANT MUTANT (B13 GLU-> GLN) INSULIN"
  },
  {
    "id": "1J34",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.55 \u00c5",
    "date": "2003-07-08",
    "note": "Crystal Structure of Mg(II)-and Ca(II)-bound Gla Domain of Factor IX Complexed with Binding Protein"
  },
  {
    "id": "1J35",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.80 \u00c5",
    "date": "2003-07-08",
    "note": "Crystal Structure of Ca(II)-bound Gla Domain of Factor IX Complexed with Binding Protein"
  },
  {
    "id": "1J5J",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2002-11-20",
    "note": "Solution structure of HERG-specific scorpion toxin BeKm-1"
  },
  {
    "id": "1J73",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.00 \u00c5",
    "date": "2001-05-30",
    "note": "Crystal structure of an unstable insulin analog with native activity."
  },
  {
    "id": "1J8E",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.85 \u00c5",
    "date": "2001-12-19",
    "note": "Crystal structure of ligand-binding repeat CR7 from LRP"
  },
  {
    "id": "1J8N",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2003-07-01",
    "note": "Solution structure of beta3-analogue peptide corresponding to the gp41 600-612 loop of HIV."
  },
  {
    "id": "1JBF",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2001-08-22",
    "note": "Hairpin Peptide that Inhibits IgE Activity by Binding to the High Affinity IgE Receptor"
  },
  {
    "id": "1JBL",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2001-08-22",
    "note": "Solution structure of SFTI-1, A cyclic trypsin inhibitor from sunflower seeds"
  },
  {
    "id": "1JBN",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2001-08-22",
    "note": "Solution structure of an acyclic permutant of SFTI-1, A trypsin inhibitor from sunflower seeds"
  },
  {
    "id": "1JBU",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.00 \u00c5",
    "date": "2001-07-11",
    "note": "Coagulation Factor VII Zymogen (EGF2/Protease) in Complex with Inhibitory Exosite Peptide A-183"
  },
  {
    "id": "1JCA",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.50 \u00c5",
    "date": "2001-06-20",
    "note": "Non-standard Design of Unstable Insulin Analogues with Enhanced Activity"
  },
  {
    "id": "1JCO",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2001-10-03",
    "note": "Solution structure of the monomeric [Thr(B27)->Pro,Pro(B28)->Thr] insulin mutant (PT insulin)"
  },
  {
    "id": "1JDP",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.00 \u00c5",
    "date": "2001-09-05",
    "note": "Crystal Structure of Hormone/Receptor Complex"
  },
  {
    "id": "1JJZ",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2002-06-12",
    "note": "REFINED STRUCTURE AND DISULFIDE PAIRING OF THE KALATA B1 PEPTIDE"
  },
  {
    "id": "1JK4",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.30 \u00c5",
    "date": "2003-02-04",
    "note": "DES 1-6 BOVINE NEUROPHYSIN II COMPLEX WITH VASOPRESSIN"
  },
  {
    "id": "1JKZ",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2002-02-06",
    "note": "NMR Solution Structure of Pisum sativum defensin 1 (Psd1)"
  },
  {
    "id": "1JLO",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2003-06-24",
    "note": "Solution Structure of the Noncompetitive Skeletal Muscle Nicotinic Acetylcholine Receptor Antagonist Psi-conotoxin PIIIE"
  },
  {
    "id": "1JLP",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2003-06-24",
    "note": "Solution Structure of the Noncompetitive Skeletal Muscle Nicotinic Acetylcholine Receptor Antagonist Psi-conotoxin PIIIF"
  },
  {
    "id": "1JLZ",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2002-02-06",
    "note": "Solution Structure of a K+-Channel Blocker from the Scorpion Toxin of Tityus cambridgei"
  },
  {
    "id": "1JMN",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2003-06-24",
    "note": "Solution Structure of the Viscotoxin A2"
  },
  {
    "id": "1JMP",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2003-11-11",
    "note": "Solution Structure of the Viscotoxin B"
  },
  {
    "id": "1JRF",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2002-03-08",
    "note": "NMR Solution Structure of the Viral Receptor Domain of Tva"
  },
  {
    "id": "1JU8",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2003-06-17",
    "note": "Solution structure of Leginsulin, a plant hormon"
  },
  {
    "id": "1JXT",
    "method": "X-RAY DIFFRACTION",
    "resolution": "0.89 \u00c5",
    "date": "2001-10-31",
    "note": "CRAMBIN MIXED SEQUENCE FORM AT 160 K. PROTEIN/WATER SUBSTATES"
  },
  {
    "id": "1JXU",
    "method": "X-RAY DIFFRACTION",
    "resolution": "0.99 \u00c5",
    "date": "2001-10-31",
    "note": "CRAMBIN MIXED SEQUENCE FORM AT 240 K. PROTEIN/WATER SUBSTATES"
  },
  {
    "id": "1JXW",
    "method": "X-RAY DIFFRACTION",
    "resolution": "0.89 \u00c5",
    "date": "2001-10-31",
    "note": "CRAMBIN MIXED SEQUENCE FORM AT 180 K. PROTEIN/WATER SUBSTATES"
  },
  {
    "id": "1JXX",
    "method": "X-RAY DIFFRACTION",
    "resolution": "0.89 \u00c5",
    "date": "2001-10-31",
    "note": "CRAMBIN MIXED SEQUENCE FORM AT 200 K. PROTEIN/WATER SUBSTATES"
  },
  {
    "id": "1JXY",
    "method": "X-RAY DIFFRACTION",
    "resolution": "0.89 \u00c5",
    "date": "2001-10-31",
    "note": "CRAMBIN MIXED SEQUENCE FORM AT 220 K. PROTEIN/WATER SUBSTATES"
  },
  {
    "id": "1K36",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2003-09-30",
    "note": "NMR Structure of human Epiregulin"
  },
  {
    "id": "1K37",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2003-09-30",
    "note": "NMR Structure of human Epiregulin"
  },
  {
    "id": "1K3M",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2001-10-17",
    "note": "NMR STRUCTURE OF HUMAN INSULIN MUTANT ILE-A2-ALA, HIS-B10-ASP, PRO-B28-LYS, LYS-B29-PRO, 15 STRUCTURES"
  },
  {
    "id": "1K48",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2002-04-10",
    "note": "REFINED STRUCTURE AND DISULFIDE PAIRING OF THE KALATA B1 PEPTIDE"
  },
  {
    "id": "1K64",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2003-09-09",
    "note": "NMR Structue of alpha-conotoxin EI"
  },
  {
    "id": "1K7B",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2001-12-19",
    "note": "NMR Solution Structure of sTva47, the Viral-Binding Domain of Tva"
  },
  {
    "id": "1K83",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.80 \u00c5",
    "date": "2002-02-13",
    "note": "Crystal Structure of Yeast RNA Polymerase II Complexed with the Inhibitor Alpha Amanitin"
  },
  {
    "id": "1KAL",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1995-03-31",
    "note": "ELUCIDATION OF THE PRIMARY AND THREE-DIMENSIONAL STRUCTURE OF THE UTEROTONIC POLYPEPTIDE KALATA B1"
  },
  {
    "id": "1KAT",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2002-11-02",
    "note": "Solution Structure of a Phage-Derived Peptide Antagonist in Complex with Vascular Endothelial Growth Factor"
  },
  {
    "id": "1KB7",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1996-01-29",
    "note": "A COMPARISON OF NMR SOLUTION STRUCTURES OF THE RECEPTOR BINDING DOMAINS OF PSEUDOMONAS AERUGINOSA PILI STRAINS PAO, KB7, AND PAK: IMPLICATIONS FOR RECEPTOR BINDING AND SYNTHETIC VACCINE DESIGN"
  },
  {
    "id": "1KB8",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1996-01-29",
    "note": "A COMPARISON OF NMR SOLUTION STRUCTURES OF THE RECEPTOR BINDING DOMAINS OF PSEUDOMONAS AERUGINOSA PILI STRAINS PAO, KB7, AND PAK: IMPLICATIONS FOR RECEPTOR BINDING AND SYNTHETIC VACCINE DESIGN"
  },
  {
    "id": "1KBE",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2002-01-23",
    "note": "Solution structure of the cysteine-rich C1 domain of Kinase Suppressor of Ras"
  },
  {
    "id": "1KBF",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2002-01-23",
    "note": "Solution Structure of the Cysteine-Rich C1 Domain of Kinase Suppressor of Ras"
  },
  {
    "id": "1KC4",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2002-03-13",
    "note": "NMR Structural Analysis of the Complex Formed Between alpha-Bungarotoxin and the Principal alpha-Neurotoxin Binding Sequence on the alpha7 Subunit of a Neuronal Nicotinic Acetylcholine Receptor"
  },
  {
    "id": "1KCN",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2002-03-06",
    "note": "Structure of e109 Zeta Peptide, an Antagonist of the High-Affinity IgE Receptor"
  },
  {
    "id": "1KCO",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2002-03-06",
    "note": "Structure of e131 Zeta Peptide, a Potent Antagonist of the High-Affinity IgE Receptor"
  },
  {
    "id": "1KCP",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1998-10-14",
    "note": "3D STRUCTURE OF K-CONOTOXIN PVIIA, A NOVEL POTASSIUM CHANNEL-BLOCKING TOXIN FROM CONE SNAILS, NMR, 22 STRUCTURES"
  },
  {
    "id": "1KFP",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2002-04-10",
    "note": "Solution structure of the antimicrobial 18-residue gomesin"
  },
  {
    "id": "1KGM",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2001-12-12",
    "note": "SOLUTION STRUCTURE OF THE SMALL SERINE PROTEASE INHIBITOR SGCI"
  },
  {
    "id": "1KIO",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2001-12-12",
    "note": "SOLUTION STRUCTURE OF THE SMALL SERINE PROTEASE INHIBITOR SGCI[L30R, K31M]"
  },
  {
    "id": "1KJ0",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2001-12-12",
    "note": "SOLUTION STRUCTURE OF THE SMALL SERINE PROTEASE INHIBITOR SGTI"
  },
  {
    "id": "1KJ5",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2002-03-20",
    "note": "Solution Structure of Human beta-defensin 1"
  },
  {
    "id": "1KJ6",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2002-03-20",
    "note": "Solution Structure of Human beta-Defensin 3"
  },
  {
    "id": "1KL8",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2002-03-13",
    "note": "NMR STRUCTURAL ANALYSIS OF THE COMPLEX FORMED BETWEEN ALPHA-BUNGAROTOXIN AND THE PRINCIPAL ALPHA-NEUROTOXIN BINDING SEQUENCE ON THE ALPHA7 SUBUNIT OF A NEURONAL NICOTINIC ACETYLCHOLINE RECEPTOR"
  },
  {
    "id": "1KMF",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2002-01-09",
    "note": "NMR STRUCTURE OF HUMAN INSULIN MUTANT ILE-A2-ALLO-ILE, HIS-B10-ASP, PRO-B28-LYS, LYS-B29-PRO, 15 STRUCTURES"
  },
  {
    "id": "1KOZ",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2002-08-28",
    "note": "SOLUTION STRUCTURE OF OMEGA-GRAMMOTOXIN SIA"
  },
  {
    "id": "1KQH",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2002-02-06",
    "note": "NMR Solution Structure of the cis Pro30 Isomer of ACTX-Hi:OB4219"
  },
  {
    "id": "1KQI",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2002-02-06",
    "note": "NMR Solution Structure of the trans Pro30 Isomer of ACTX-Hi:OB4219"
  },
  {
    "id": "1KTX",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1995-01-26",
    "note": "KALIOTOXIN (1-37) SHOWS STRUCTURAL DIFFERENCES WITH RELATED POTASSIUM CHANNEL BLOCKERS"
  },
  {
    "id": "1KVF",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2002-03-06",
    "note": "EMP-18 Erythropoietin Receptor Agonist Peptide"
  },
  {
    "id": "1KVG",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2002-03-06",
    "note": "EPO-3 beta Hairpin Peptide"
  },
  {
    "id": "1KWD",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2003-06-17",
    "note": "SOLUTION STRUCTURE OF THE CENTRAL CONSERVED REGION OF HUMAN RESPIRATORY SYNCYTIAL VIRUS ATTACHMENT GLYCOPROTEIN G 187"
  },
  {
    "id": "1KWE",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2003-06-17",
    "note": "SOLUTION STRUCTURE OF THE CENTRAL CONSERVED REGION OF HUMAN RESPIRATORY SYNCYTIAL VIRUS ATTACHMENT GLYCOPROTEIN G"
  },
  {
    "id": "1L3Y",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2002-04-01",
    "note": "INTEGRIN EGF-LIKE MODULE 3 FROM THE BETA-2 SUBUNIT"
  },
  {
    "id": "1L4V",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2002-03-27",
    "note": "SOLUTION STRUCTURE OF SAPECIN"
  },
  {
    "id": "1L4W",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2002-07-17",
    "note": "NMR structure of an AChR-peptide (Torpedo Californica, alpha-subunit residues 182-202) in complex with alpha-Bungarotoxin"
  },
  {
    "id": "1L6X",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.65 \u00c5",
    "date": "2002-04-10",
    "note": "FC FRAGMENT OF RITUXIMAB BOUND TO A MINIMIZED VERSION OF THE B-DOMAIN FROM PROTEIN A CALLED Z34C"
  },
  {
    "id": "1LA4",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2003-11-11",
    "note": "Solution Structure of SGTx1"
  },
  {
    "id": "1LB7",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2002-06-19",
    "note": "IGF-F1-1, A PEPTIDE ANTAGONIST OF IGF-1"
  },
  {
    "id": "1LCM",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1996-12-07",
    "note": "NMR minimized average structure of microcystin-LR"
  },
  {
    "id": "1LDL",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1996-03-08",
    "note": "THREE-DIMENSIONAL STRUCTURE OF A CYSTEINE-RICH REPEAT FROM THE LOW-DENSITY LIPOPROTEIN RECEPTOR"
  },
  {
    "id": "1LDR",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1996-03-08",
    "note": "SECOND REPEAT OF THE LDL RECEPTOR LIGAND-BINDING DOMAIN"
  },
  {
    "id": "1LFC",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1998-11-04",
    "note": "BOVINE LACTOFERRICIN (LFCINB), NMR, 20 STRUCTURES"
  },
  {
    "id": "1LGL",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2002-11-20",
    "note": "Solution structure of HERG-specific scorpion toxin BeKm-1"
  },
  {
    "id": "1LIR",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1998-06-17",
    "note": "LQ2 FROM LEIURUS QUINQUESTRIATUS, NMR, 22 STRUCTURES"
  },
  {
    "id": "1LJZ",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2002-07-17",
    "note": "NMR structure of an AChR-peptide (Torpedo Californica, alpha-subunit residues 182-202) in complex with alpha-Bungarotoxin"
  },
  {
    "id": "1LKQ",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2002-05-22",
    "note": "NMR STRUCTURE OF HUMAN INSULIN MUTANT ILE-A2-GLY, VAL-A3-GLY, HIS-B10-ASP, PRO-B28-LYS, LYS-B29-PRO, 20 STRUCTURES"
  },
  {
    "id": "1LMM",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2003-11-25",
    "note": "Solution Structure of Psmalmotoxin 1, the First Characterized Specific Blocker of ASIC1a NA+ channel"
  },
  {
    "id": "1LMR",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2003-08-19",
    "note": "Solution of ADO1, a Toxin from the Assassin Bugs Agriosphodrus dohrni that Blocks the Voltage Sensitive Calcium Channel L-type"
  },
  {
    "id": "1LPH",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.30 \u00c5",
    "date": "1996-06-20",
    "note": "LYS(B28)PRO(B29)-HUMAN INSULIN"
  },
  {
    "id": "1LQV",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.60 \u00c5",
    "date": "2002-06-19",
    "note": "Crystal structure of the Endothelial protein C receptor with phospholipid in the groove in complex with Gla domain of protein C."
  },
  {
    "id": "1LU0",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.03 \u00c5",
    "date": "2002-08-28",
    "note": "Atomic Resolution Structure of Squash Trypsin Inhibitor: Unexpected Metal Coordination"
  },
  {
    "id": "1LU8",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2004-01-27",
    "note": "Solution structure of GsMTx-4"
  },
  {
    "id": "1LUP",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2002-08-07",
    "note": "Solution structure of a toxin (GsMTx2) from the tarantula, Grammostola spatulata, which inhibits mechanosensitive ion channels"
  },
  {
    "id": "1LXG",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2002-11-20",
    "note": "Solution structure of alpha-cobratoxin complexed with a cognate peptide (structure ensemble)"
  },
  {
    "id": "1LXH",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2002-11-20",
    "note": "Solution structure of alpha-cobratoxin complexed with a cognate peptide (minimized average structure)"
  },
  {
    "id": "1M2C",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1998-12-09",
    "note": "THREE-DIMENSIONAL STRUCTURE OF ALPHA-CONOTOXIN MII, NMR, 14 STRUCTURES"
  },
  {
    "id": "1M2S",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2004-04-06",
    "note": "Solution Structure of A New Potassium Channels Blocker from the Venom of Chinese Scorpion Buthus martensi Karsch"
  },
  {
    "id": "1M4E",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2002-11-06",
    "note": "Solution Structure of Hepcidin-20"
  },
  {
    "id": "1M4F",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2002-11-06",
    "note": "Solution Structure of Hepcidin-25"
  },
  {
    "id": "1M5A",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.20 \u00c5",
    "date": "2002-08-14",
    "note": "Crystal Structure of 2-Co(2+)-Insulin at 1.2A Resolution"
  },
  {
    "id": "1M63",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.80 \u00c5",
    "date": "2002-09-25",
    "note": "Crystal structure of calcineurin-cyclophilin-cyclosporin shows common but distinct recognition of immunophilin-drug complexes"
  },
  {
    "id": "1MA2",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2002-10-16",
    "note": "Tachyplesin I Wild type peptide NMR Structure"
  },
  {
    "id": "1MA5",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2002-10-16",
    "note": "Tachyplesin I solution structure in the presence of 300mM Dodecylphosphocholine micelles"
  },
  {
    "id": "1MB6",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2002-08-21",
    "note": "Three dimensional solution structure of huwentoxin-IV by 2D 1H-NMR"
  },
  {
    "id": "1MCT",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.60 \u00c5",
    "date": "1994-01-31",
    "note": "THE REFINED 1.6 ANGSTROMS RESOLUTION CRYSTAL STRUCTURE OF THE COMPLEX FORMED BETWEEN PORCINE BETA-TRYPSIN AND MCTI-A, A TRYPSIN INHIBITOR OF SQUASH FAMILY"
  },
  {
    "id": "1MCV",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.80 \u00c5",
    "date": "2003-02-04",
    "note": "Crystal Structure Analysis of a Hybrid Squash Inhibitor in Complex with Porcine Pancreatic Elastase"
  },
  {
    "id": "1MF8",
    "method": "X-RAY DIFFRACTION",
    "resolution": "3.10 \u00c5",
    "date": "2002-10-16",
    "note": "Crystal Structure of human calcineurin complexed with cyclosporin A and human cyclophilin"
  },
  {
    "id": "1MHI",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1995-10-15",
    "note": "THREE-DIMENSIONAL SOLUTION STRUCTURE OF AN INSULIN DIMER. A STUDY OF THE B9(ASP) MUTANT OF HUMAN INSULIN USING NUCLEAR MAGNETIC RESONANCE DISTANCE GEOMETRY AND RESTRAINED MOLECULAR DYNAMICS"
  },
  {
    "id": "1MHJ",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1995-10-15",
    "note": "SOLUTION STRUCTURE OF THE SUPERACTIVE MONOMERIC DES-[PHE(B25)] HUMAN INSULIN MUTANT. ELUCIDATION OF THE STRUCTURAL BASIS FOR THE MONOMERIZATION OF THE DES-[PHE(B25)] INSULIN AND THE DIMERIZATION OF NATIVE INSULIN"
  },
  {
    "id": "1MII",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1998-10-21",
    "note": "SOLUTION STRUCTURE OF ALPHA-CONOTOXIN MII"
  },
  {
    "id": "1MIK",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.76 \u00c5",
    "date": "1996-03-08",
    "note": "THE ROLE OF WATER MOLECULES IN THE STRUCTURE-BASED DESIGN OF (5-HYDROXYNORVALINE)-2-CYCLOSPORIN: SYNTHESIS, BIOLOGICAL ACTIVITY, AND CRYSTALLOGRAPHIC ANALYSIS WITH CYCLOPHILIN A"
  },
  {
    "id": "1MKC",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1999-03-23",
    "note": "C-TERMINAL DOMAIN OF MIDKINE"
  },
  {
    "id": "1MM0",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2003-05-13",
    "note": "Solution structure of termicin, an antimicrobial peptide from the termite Pseudacanthotermes spiniger"
  },
  {
    "id": "1MMC",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1996-03-08",
    "note": "1H NMR STUDY OF THE SOLUTION STRUCTURE OF AC-AMP2"
  },
  {
    "id": "1MOX",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.50 \u00c5",
    "date": "2003-09-10",
    "note": "Crystal Structure of Human Epidermal Growth Factor Receptor (residues 1-501) in complex with TGF-alpha"
  },
  {
    "id": "1MPJ",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.30 \u00c5",
    "date": "1996-01-29",
    "note": "X-RAY CRYSTALLOGRAPHIC STUDIES ON HEXAMERIC INSULINS IN THE PRESENCE OF HELIX-STABILIZING AGENTS, THIOCYANATE, METHYLPARABEN AND PHENOL"
  },
  {
    "id": "1MPV",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2002-10-30",
    "note": "Structure of bhpBR3, the BAFF-binding loop of BR3 embedded in a beta-hairpin peptide"
  },
  {
    "id": "1MPZ",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2003-02-11",
    "note": "NMR solution structure of native Viperidae lebetina obtusa protein"
  },
  {
    "id": "1MR0",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2002-10-02",
    "note": "SOLUTION NMR STRUCTURE OF AGRP(87-120; C105A)"
  },
  {
    "id": "1MR4",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2003-09-18",
    "note": "Solution Structure of NaD1 from Nicotiana alata"
  },
  {
    "id": "1MSO",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.00 \u00c5",
    "date": "2003-03-04",
    "note": "T6 Human Insulin at 1.0 A Resolution"
  },
  {
    "id": "1MTQ",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2003-02-11",
    "note": "THREE-DIMENSIONAL SOLUTION STRUCTURE OF ALPHA-CONOTOXIN GID BY NMR SPECTROSCOPY"
  },
  {
    "id": "1MTX",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1995-11-14",
    "note": "DETERMINATION OF THE THREE-DIMENSIONAL STRUCTURE OF MARGATOXIN BY 1H, 13C, 15N TRIPLE-RESONANCE NUCLEAR MAGNETIC RESONANCE SPECTROSCOPY"
  },
  {
    "id": "1MVI",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1997-08-12",
    "note": "N-TYPE CALCIUM CHANNEL BLOCKER, OMEGA-CONOTOXIN MVIIA, NMR, 15 STRUCTURES"
  },
  {
    "id": "1MVJ",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1997-08-12",
    "note": "N-TYPE CALCIUM CHANNEL BLOCKER, OMEGA-CONOTOXIN MVIIA NMR, 15 STRUCTURES"
  },
  {
    "id": "1MXN",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2002-12-30",
    "note": "Solution structure of alpha-conotoxin AuIB"
  },
  {
    "id": "1MXP",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2002-12-30",
    "note": "Solution structure of the ribbon disulfide bond isomer of alpha-conotoxin AuIB"
  },
  {
    "id": "1MYN",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1997-12-31",
    "note": "SOLUTION STRUCTURE OF DROSOMYCIN, THE FIRST INDUCIBLE ANTIFUNGAL PROTEIN FROM INSECTS, NMR, 15 STRUCTURES"
  },
  {
    "id": "1N09",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2003-02-04",
    "note": "A minimal beta-hairpin peptide scaffold for beta-turn display"
  },
  {
    "id": "1N0A",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2003-10-21",
    "note": "Turn stability in beta-hairpin peptides: 3:5 type I G1 bulge turns"
  },
  {
    "id": "1N0C",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2003-10-21",
    "note": "Stability of cyclic beta-hairpins: Asymmetric contibutions from side chains of hydrogen bonded cross-strand residue pair"
  },
  {
    "id": "1N0D",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2003-02-04",
    "note": "Stability of cyclic beta-hairpins: Asymmetric contibutions from side chains of hydrogen bonded cross-strand residue pair"
  },
  {
    "id": "1N1U",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2003-02-25",
    "note": "NMR structure of [Ala1,15]kalata B1"
  },
  {
    "id": "1N2Y",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2002-11-13",
    "note": "SOLUTION STRUCTURE OF SS-CYCLIZED CATESTATIN FRAGMENT FROM CHROMOGRANIN A"
  },
  {
    "id": "1N4N",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2003-11-01",
    "note": "Structure of the Plant Defensin PhD1 from Petunia Hybrida"
  },
  {
    "id": "1N8M",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2003-09-02",
    "note": "Solution structure of Pi4, a four disulfide bridged scorpion toxin active on potassium channels"
  },
  {
    "id": "1N96",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2003-05-13",
    "note": "DIMERIC SOLUTION STRUCTURE OF THE CYCLIC OCTAMER CD(CGCTCATT)"
  },
  {
    "id": "1NB1",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2003-03-18",
    "note": "High resolution solution structure of kalata B1"
  },
  {
    "id": "1NBJ",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2003-03-18",
    "note": "High-resolution solution structure of cycloviolacin O1"
  },
  {
    "id": "1NBL",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2003-03-11",
    "note": "NMR Structure of Hellethionin D"
  },
  {
    "id": "1NC8",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1999-05-25",
    "note": "HIGH-RESOLUTION SOLUTION NMR STRUCTURE OF THE MINIMAL ACTIVE DOMAIN OF THE HUMAN IMMUNODEFICIENCY VIRUS TYPE-2 NUCLEOCAPSID PROTEIN, 15 STRUCTURES"
  },
  {
    "id": "1NE5",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2003-04-01",
    "note": "Solution Structure of HERG Specific Scorpion Toxin CnErg1"
  },
  {
    "id": "1NIL",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1996-01-29",
    "note": "A COMPARISON OF NMR SOLUTION STRUCTURES OF THE RECEPTOR BINDING DOMAINS OF PSEUDOMONAS AERUGINOSA PILI STRAINS PAO, KB7, AND PAK: IMPLICATIONS FOR RECEPTOR BINDING AND SYNTHETIC VACCINE DESIGN"
  },
  {
    "id": "1NIM",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1996-01-29",
    "note": "A COMPARISON OF NMR SOLUTION STRUCTURES OF THE RECEPTOR BINDING DOMAINS OF PSEUDOMONAS AERUGINOSA PILI STRAINS PAO, KB7, AND PAK: IMPLICATIONS FOR RECEPTOR BINDING AND SYNTHETIC VACCINE DESIGN"
  },
  {
    "id": "1NIX",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2003-01-14",
    "note": "THREE DIMENSIONAL SOLUTION STRUCTURE OF HAINANTOXIN-I BY 2D 1H-NMR"
  },
  {
    "id": "1NIY",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2003-01-14",
    "note": "THREE DIMENSIONAL SOLUTION STRUCTURE OF HAINANTOXIN-IV BY 2D 1H-NMR"
  },
  {
    "id": "1NOT",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.20 \u00c5",
    "date": "1996-12-07",
    "note": "THE 1.2 ANGSTROM STRUCTURE OF G1 ALPHA CONOTOXIN"
  },
  {
    "id": "1NPO",
    "method": "X-RAY DIFFRACTION",
    "resolution": "3.00 \u00c5",
    "date": "1997-02-12",
    "note": "BOVINE NEUROPHYSIN II COMPLEX WITH OXYTOCIN"
  },
  {
    "id": "1NXN",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2003-03-04",
    "note": "SOLUTION STRUCTURE OF CONTRYPHAN-VN"
  },
  {
    "id": "1O8Y",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2003-03-13",
    "note": "Solution structure of SFTI-1(6,5), an acyclic permutant of the proteinase inhibitor SFTI-1, trans-trans-trans conformer (tt-A)"
  },
  {
    "id": "1O8Z",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2003-03-13",
    "note": "Solution structure of SFTI-1(6,5), an acyclic permutant of the proteinase inhibitor SFTI-1, cis-trans-trans conformer (ct-A)"
  },
  {
    "id": "1OAV",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1995-10-15",
    "note": "OMEGA-AGATOXIN IVA"
  },
  {
    "id": "1OAW",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1995-10-15",
    "note": "OMEGA-AGATOXIN IVA"
  },
  {
    "id": "1OG7",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2003-09-22",
    "note": "Three-dimensional structure in lipid micelles of the pediocin-like antimicrobial peptide sakacin P."
  },
  {
    "id": "1OHM",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2003-09-22",
    "note": "Sakacin P variant that is structurally stabilized by an inserted C-terminal disulfide bridge."
  },
  {
    "id": "1OHN",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2003-09-22",
    "note": "Three-dimensional structure in lipid micelles of the pediocin-like antimicrobial peptide sakacin P."
  },
  {
    "id": "1OIG",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2003-06-26",
    "note": "The solution structure of the DPY module from the Dumpy protein"
  },
  {
    "id": "1OKH",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.75 \u00c5",
    "date": "2003-12-04",
    "note": "Viscotoxin A3 from Viscum album L."
  },
  {
    "id": "1OMA",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1993-10-31",
    "note": "SEQUENTIAL ASSIGNMENT AND STRUCTURE DETERMINATION OF SPIDER TOXIN OMEGA-AGA-IVB"
  },
  {
    "id": "1OMB",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1993-10-31",
    "note": "SEQUENTIAL ASSIGNMENT AND STRUCTURE DETERMINATION OF SPIDER TOXIN OMEGA-AGA-IVB"
  },
  {
    "id": "1OMC",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1994-01-31",
    "note": "SOLUTION STRUCTURE OF OMEGA-CONOTOXIN GVIA USING 2-D NMR SPECTROSCOPY AND RELAXATION MATRIX ANALYSIS"
  },
  {
    "id": "1OMG",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1996-04-03",
    "note": "NMR STUDY OF OMEGA-CONOTOXIN MVIIA"
  },
  {
    "id": "1OMN",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1995-12-01",
    "note": "SOLUTION STRUCTURE OF OMEGA-CONOTOXIN MVIIC, A HIGH AFFINITY OF P-TYPE CALCIUM CHANNELS, USING 1H NMR SPECTROSCOPY AND COMPLETE RELAXATION MATRIX ANALYSIS"
  },
  {
    "id": "1OQD",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.60 \u00c5",
    "date": "2003-05-13",
    "note": "Crystal structure of sTALL-1 and BCMA"
  },
  {
    "id": "1OQE",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.50 \u00c5",
    "date": "2003-05-13",
    "note": "Crystal structure of sTALL-1 with BAFF-R"
  },
  {
    "id": "1OQO",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.30 \u00c5",
    "date": "2003-03-20",
    "note": "Complex between G0 version of an Fc bound to a minimized version of Protein A called Mini-Z"
  },
  {
    "id": "1OQX",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.60 \u00c5",
    "date": "2003-03-25",
    "note": "G-2 glycovariant of human IgG Fc bound to minimized version of Protein A called Z34C"
  },
  {
    "id": "1ORL",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2003-04-01",
    "note": "1H NMR structure determination of Viscotoxin C1"
  },
  {
    "id": "1ORX",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2003-06-24",
    "note": "Solution Structure of the acyclic permutant des-(24-28)-kalata B1."
  },
  {
    "id": "1OS3",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.95 \u00c5",
    "date": "2003-07-29",
    "note": "Dehydrated T6 human insulin at 100 K"
  },
  {
    "id": "1OS4",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.25 \u00c5",
    "date": "2003-07-29",
    "note": "Dehydrated T6 human insulin at 295 K"
  },
  {
    "id": "1OSG",
    "method": "X-RAY DIFFRACTION",
    "resolution": "3.00 \u00c5",
    "date": "2003-05-27",
    "note": "Complex between BAFF and a BR3 derived peptide presented in a beta-hairpin scaffold"
  },
  {
    "id": "1OX1",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.00 \u00c5",
    "date": "2004-05-18",
    "note": "crystal structure of the bovine trypsin complex with a synthetic 11 peptide inhibitor"
  },
  {
    "id": "1OZZ",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2004-03-09",
    "note": "NMR structure of antifungal defensin ARD1 from Archaeoprepona demophon"
  },
  {
    "id": "1P00",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2004-03-09",
    "note": "NMR structure of ETD151, mutant of the antifungal defensin ARD1 from Archaeoprepona demophon"
  },
  {
    "id": "1P0A",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2004-03-09",
    "note": "NMR structure of ETD135, mutant of the antifungal defensin ARD1 from Archaeoprepona demophon"
  },
  {
    "id": "1P1P",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1997-07-07",
    "note": "[PRO7,13] AA-CONOTOXIN PIVA, NMR, 12 STRUCTURES"
  },
  {
    "id": "1P8B",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2003-11-25",
    "note": "SOLUTION STRUCTURE OF PA1B, A 37-AMINO ACID INSECTICIDAL PROTEIN EXTRACTED FROM PEA SEEDS (PISUM SATIVUM)"
  },
  {
    "id": "1P9G",
    "method": "X-RAY DIFFRACTION",
    "resolution": "0.84 \u00c5",
    "date": "2004-06-01",
    "note": "Crystal structure of a novel antifungal protein distinct with five disulfide bridges from Ecommia ulmoides Oliver at atomic resolution"
  },
  {
    "id": "1P9Z",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2004-05-25",
    "note": "The Solution Structure of Antifungal Peptide Distinct With a Five-disulfide Motif from Eucommia ulmoides Oliver"
  },
  {
    "id": "1PAJ",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1994-01-31",
    "note": "NMR SOLUTION STRUCTURE AND FLEXIBILITY OF A PEPTIDE ANTIGEN REPRESENTING THE RECEPTOR BINDING DOMAIN OF PSEUDOMONAS AERUGINOSA"
  },
  {
    "id": "1PAK",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1994-01-31",
    "note": "NMR SOLUTION STRUCTURE AND FLEXIBILITY OF A PEPTIDE ANTIGEN REPRESENTING THE RECEPTOR BINDING DOMAIN OF PSEUDOMONAS AERUGINOSA"
  },
  {
    "id": "1PAN",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1996-01-29",
    "note": "A COMPARISON OF NMR SOLUTION STRUCTURES OF THE RECEPTOR BINDING DOMAINS OF PSEUDOMONAS AERUGINOSA PILI STRAINS PAO, KB7, AND PAK: IMPLICATIONS FOR RECEPTOR BINDING AND SYNTHETIC VACCINE DESIGN"
  },
  {
    "id": "1PAO",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1996-01-29",
    "note": "A COMPARISON OF NMR SOLUTION STRUCTURES OF THE RECEPTOR BINDING DOMAINS OF PSEUDOMONAS AERUGINOSA PILI STRAINS PAO, KB7, AND PAK: IMPLICATIONS FOR RECEPTOR BINDING AND SYNTHETIC VACCINE DESIGN"
  },
  {
    "id": "1PB5",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2003-06-17",
    "note": "NMR Structure of a Prototype LNR Module from Human Notch1"
  },
  {
    "id": "1PCG",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.70 \u00c5",
    "date": "2003-10-28",
    "note": "Helix-stabilized cyclic peptides as selective inhibitors of steroid receptor-coactivator interactions"
  },
  {
    "id": "1PDC",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1994-01-31",
    "note": "REFINED SOLUTION STRUCTURE AND LIGAND-BINDING PROPERTIES OF PDC-109 DOMAIN B. A COLLAGEN-BINDING TYPE II DOMAIN"
  },
  {
    "id": "1PEN",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.10 \u00c5",
    "date": "1997-04-21",
    "note": "ALPHA-CONOTOXIN PNI1"
  },
  {
    "id": "1PFE",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.10 \u00c5",
    "date": "2004-06-08",
    "note": "Echinomycin-(gcgtacgc)2 complex"
  },
  {
    "id": "1PG1",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1998-05-27",
    "note": "PROTEGRIN 1 (PG1) FROM PORCINE LEUKOCYTES, NMR, 20 STRUCTURES"
  },
  {
    "id": "1PID",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.30 \u00c5",
    "date": "1996-12-07",
    "note": "BOVINE DESPENTAPEPTIDE INSULIN"
  },
  {
    "id": "1PJV",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2004-03-09",
    "note": "Cobatoxin 1 from Centruroides noxius Scorpion venom: Chemical Synthesis, 3-D Structure in Solution, Pharmacology and Docking on K+ channels"
  },
  {
    "id": "1PMC",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1996-01-29",
    "note": "PROTEINASE INHIBITOR PMP-C (NMR, 36 STRUCTURES)"
  },
  {
    "id": "1PMX",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2003-10-21",
    "note": "INSULIN-LIKE GROWTH FACTOR-I BOUND TO A PHAGE-DERIVED PEPTIDE"
  },
  {
    "id": "1PNH",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1994-01-31",
    "note": "SOLUTION STRUCTURE OF PO5-NH2, A SCORPION TOXIN ANALOG WITH HIGH AFFINITY FOR THE APAMIN-SENSITIVE POTASSIUM CHANNEL"
  },
  {
    "id": "1PPE",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.00 \u00c5",
    "date": "1994-01-31",
    "note": "THE REFINED 2.0 ANGSTROMS X-RAY CRYSTAL STRUCTURE OF THE COMPLEX FORMED BETWEEN BOVINE BETA-TRYPSIN AND CMTI-I, A TRYPSIN INHIBITOR FROM SQUASH SEEDS (CUCURBITA MAXIMA): TOPOLOGICAL SIMILARITY OF THE SQUASH SEED INHIBITORS WITH THE CARBOXYPEPTIDASE A INHIBITOR FROM POTATOES"
  },
  {
    "id": "1PQR",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2003-11-04",
    "note": "Solution Conformation of alphaA-Conotoxin EIVA"
  },
  {
    "id": "1PT4",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2004-08-10",
    "note": "Solution structure of the Moebius cyclotide kalata B2"
  },
  {
    "id": "1PVZ",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2004-05-18",
    "note": "Solution Structure of BmP07, A Novel Potassium Channel Blocker from Scorpion Buthus martensi Karsch, 15 structures"
  },
  {
    "id": "1PX9",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2004-06-22",
    "note": "Solution structure of the native CnErg1 Ergtoxin, a highly specific inhibitor of HERG channel"
  },
  {
    "id": "1PXQ",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2004-06-22",
    "note": "Structure of Subtilisin A"
  },
  {
    "id": "1Q01",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2005-05-03",
    "note": "Lebetin peptides, a new class of potent aggregation inhibitors"
  },
  {
    "id": "1Q2J",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2004-02-24",
    "note": "Structural basis for tetrodotoxin-resistant sodium channel binding by mu-conotoxin SmIIIA"
  },
  {
    "id": "1Q2K",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2003-09-09",
    "note": "Solution structure of BmBKTx1 a new potassium channel blocker from the Chinese Scorpion Buthus martensi Karsch"
  },
  {
    "id": "1Q3J",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2003-12-23",
    "note": "Solution structure of ALO3: a new knottin-type antifungal peptide from the insect Acrocinus longimanus"
  },
  {
    "id": "1Q3M",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2003-09-16",
    "note": "1H NMR structure bundle of bovine Ca2+-osteocalcin"
  },
  {
    "id": "1Q4V",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.00 \u00c5",
    "date": "2003-08-19",
    "note": "CRYSTAL STRUCTURE OF ALLO-ILEA2-INSULIN, AN INACTIVE CHIRAL ANALOGUE: IMPLICATIONS FOR THE MECHANISM OF RECEPTOR"
  },
  {
    "id": "1Q8H",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.00 \u00c5",
    "date": "2003-11-11",
    "note": "Crystal structure of porcine osteocalcin"
  },
  {
    "id": "1Q9B",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.50 \u00c5",
    "date": "2004-01-13",
    "note": "CRYSTAL STRUCTURE ANALYSIS OF Hev b 6.02 (HEVEIN) AT 1.5 ANGSTROMS RESOLUTION"
  },
  {
    "id": "1QDP",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1998-01-14",
    "note": "SOLUTION STRUCTURE OF ROBUSTOXIN, THE LETHAL NEUROTOXIN FROM THE FUNNEL WEB SPIDER ATRAX ROBUSTUS, NMR, 20 STRUCTURES"
  },
  {
    "id": "1QFB",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1999-09-29",
    "note": "THE CYCLIC PEPTIDE CONTRYPHAN-R FROM CONUS RADIATUS"
  },
  {
    "id": "1QFD",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1999-07-16",
    "note": "NMR SOLUTION STRUCTURE OF ALPHA-AMYLASE INHIBITOR (AAI)"
  },
  {
    "id": "1QGM",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1999-12-22",
    "note": "THE SOLUTION STRUCTURE OF A 30 RESIDUE AMINO-TERMINAL DOMAIN OF THE CARP GRANULIN-1 PROTEIN."
  },
  {
    "id": "1QH2",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1999-05-24",
    "note": "CHYMOTRYPSIN INHIBITOR (C2) FROM NICOTIANA ALATA"
  },
  {
    "id": "1QIY",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.30 \u00c5",
    "date": "1999-06-22",
    "note": "HUMAN INSULIN HEXAMERS WITH CHAIN B HIS MUTATED TO TYR COMPLEXED WITH PHENOL"
  },
  {
    "id": "1QIZ",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.00 \u00c5",
    "date": "1999-06-22",
    "note": "HUMAN INSULIN HEXAMERS WITH CHAIN B HIS MUTATED TO TYR COMPLEXED WITH RESORCINOL"
  },
  {
    "id": "1QJ0",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.40 \u00c5",
    "date": "1999-06-22",
    "note": "HUMAN INSULIN HEXAMERS WITH CHAIN B HIS MUTATED TO TYR"
  },
  {
    "id": "1QK6",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1999-08-20",
    "note": "Solution structure of huwentoxin-I by NMR"
  },
  {
    "id": "1QK7",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1999-08-20",
    "note": "Solution structure of Selenocosmia huwena lectin-I(SHL-I) by 2D-NMR"
  },
  {
    "id": "1QKY",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2000-02-03",
    "note": "Solution structure of PI7, a non toxic peptide isolated from the scorpion Pandinus Imperator."
  },
  {
    "id": "1QLD",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2000-02-06",
    "note": "Solution structure of type X CBM"
  },
  {
    "id": "1QMW",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2000-08-25",
    "note": "Solution structure of alpha-conotoxin SI"
  },
  {
    "id": "1QS3",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1999-10-06",
    "note": "NMR SOLUTION CONFORMATION OF AN ANTITOXIC ANALOG OF ALPHA-CONOTOXIN GI"
  },
  {
    "id": "1QUZ",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2000-07-07",
    "note": "Solution structure of the potassium channel scorpion toxin HSTX1"
  },
  {
    "id": "1QVK",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2004-09-28",
    "note": "Structure of the antimicrobial hexapeptide cyc-(RRWWRF) bound to DPC micelles"
  },
  {
    "id": "1QVL",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2004-09-28",
    "note": "Structure of the antimicrobial hexapeptide cyc-(RRWWRF) bound to SDS micelles"
  },
  {
    "id": "1QX9",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2003-12-30",
    "note": "Structure of a cyclic indolicidin peptide derivative with higher charge"
  },
  {
    "id": "1R02",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2004-09-19",
    "note": "Solution structure of Human Orexin-A:Regulator of Appetite and Wakefulness"
  },
  {
    "id": "1R1F",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2004-04-06",
    "note": "Solution Structure of the Cyclotide Palicourein: Implications for the development of pharmaceutical and agricultural applications"
  },
  {
    "id": "1R1G",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.72 \u00c5",
    "date": "2004-03-02",
    "note": "Crystal Structure of the Scorpion Toxin BmBKTtx1"
  },
  {
    "id": "1R8T",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2005-02-15",
    "note": "Solution structures of high affinity miniprotein ligands to Streptavidin"
  },
  {
    "id": "1R9I",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2003-11-18",
    "note": "NMR Solution Structure of PIIIA toxin, NMR, 20 structures"
  },
  {
    "id": "1RJI",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2003-12-09",
    "note": "Solution Structure of BmKX, a novel potassium channel blocker from the Chinese Scorpion Buthus martensi Karsch"
  },
  {
    "id": "1RKK",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2004-08-31",
    "note": "POLYPHEMUSIN I NMR SOLUTION STRUCTURE"
  },
  {
    "id": "1RMK",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2004-09-07",
    "note": "Solution structure of conotoxin MrVIB"
  },
  {
    "id": "1RO3",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2003-12-09",
    "note": "New structural insights on short disintegrin echistatin by NMR"
  },
  {
    "id": "1ROO",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1997-01-27",
    "note": "NMR SOLUTION STRUCTURE OF SHK TOXIN, NMR, 20 STRUCTURES"
  },
  {
    "id": "1RPB",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1994-01-31",
    "note": "SOLUTION STRUCTURE OF RP 71955, A NEW 21 AMINO ACID TRICYCLIC PEPTIDE ACTIVE AGAINST HIV-1 VIRUS"
  },
  {
    "id": "1RPC",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1994-01-31",
    "note": "SOLUTION STRUCTURE OF RP 71955, A NEW 21 AMINO ACID TRICYCLIC PEPTIDE ACTIVE AGAINST HIV-1 VIRUS"
  },
  {
    "id": "1RPQ",
    "method": "X-RAY DIFFRACTION",
    "resolution": "3.00 \u00c5",
    "date": "2004-07-20",
    "note": "High Affinity IgE Receptor (alpha chain) Complexed with Tight-Binding E131 'zeta' Peptide from Phage Display"
  },
  {
    "id": "1RWE",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.80 \u00c5",
    "date": "2005-02-15",
    "note": "Enhancing the activity of insulin at receptor edge: crystal structure and photo-cross-linking of A8 analogues"
  },
  {
    "id": "1RYG",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2004-01-13",
    "note": "Three dimensional solution structure of the R29A MUTANT of sodium channels inhibitor HAINANTOXIN-IV by 2D 1H-NMR"
  },
  {
    "id": "1RYV",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2004-01-13",
    "note": "Three dimensional solution structure of the K27A MUTANT of sodium channels inhibitor HAINANTOXIN-IV BY 2D 1H-NMR"
  },
  {
    "id": "1S6W",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2004-12-14",
    "note": "Solution Structure of hybrid white striped bass hepcidin"
  },
  {
    "id": "1S6X",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2005-03-22",
    "note": "Solution structure of VSTx"
  },
  {
    "id": "1S8K",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2005-02-08",
    "note": "Solution Structure of BmKK4, A Novel Potassium Channel Blocker from Scorpion Buthus martensii Karsch, 25 structures"
  },
  {
    "id": "1SBW",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.80 \u00c5",
    "date": "1999-05-06",
    "note": "CRYSTAL STRUCTURE OF MUNG BEAN INHIBITOR LYSINE ACTIVE FRAGMENT COMPLEX WITH BOVINE BETA-TRYPSIN AT 1.8A RESOLUTION"
  },
  {
    "id": "1SCO",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1997-01-27",
    "note": "SCORPION TOXIN (OSK1 TOXIN) WITH HIGH AFFINITY FOR SMALL CONDUCTANCE CA(2+)-ACTIVATED K+ CHANNEL IN NEUROBLASTOMA-X-GLUOMA NG 108-15 HYBRID CELLS, NMR, 30 STRUCTURES"
  },
  {
    "id": "1SCY",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1995-01-26",
    "note": "DETERMINATION OF THE THREE-DIMENSIONAL STRUCTURE OF SCYLLATOXIN BY 1H NUCLEAR MAGNETIC RESONANCE"
  },
  {
    "id": "1SDB",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.65 \u00c5",
    "date": "1997-02-12",
    "note": "PORCINE DESB1-2 DESPENTAPEPTIDE(B26-B30) INSULIN"
  },
  {
    "id": "1SF1",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2004-03-30",
    "note": "NMR STRUCTURE OF HUMAN INSULIN under Amyloidogenic Condition, 15 STRUCTURES"
  },
  {
    "id": "1SFI",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.65 \u00c5",
    "date": "1999-07-09",
    "note": "High resolution structure of a potent, cyclic protease inhibitor from sunflower seeds"
  },
  {
    "id": "1SH1",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1991-10-15",
    "note": "SOLUTION STRUCTURE OF NEUROTOXIN I FROM THE SEA ANEMONE STICHODACTYLA HELIANTHUS. A NUCLEAR MAGNETIC RESONANCE, DISTANCE GEOMETRY AND RESTRAINED MOLECULAR DYNAMICS STUDY"
  },
  {
    "id": "1SHI",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1995-02-07",
    "note": "REFINED STRUCTURE IN SOLUTION OF THE SEA ANEMONE NEUROTOXIN SHI"
  },
  {
    "id": "1SIS",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1994-04-30",
    "note": "SPATIAL STRUCTURE OF INSECTOTOXIN I5A BUTHUS EUPEUS BY 1H NUCLEAR MAGNETIC RESONANCE SPECTROSCOPY (RUSSIAN)"
  },
  {
    "id": "1SJT",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1998-03-18",
    "note": "MINI-PROINSULIN, TWO CHAIN INSULIN ANALOG MUTANT: DES B30, HIS(B 10)ASP, PRO(B 28)ASP, NMR, 20 STRUCTURES"
  },
  {
    "id": "1SJU",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1998-03-18",
    "note": "MINI-PROINSULIN, SINGLE CHAIN INSULIN ANALOG MUTANT: DES B30, HIS(B 10)ASP, PRO(B 28)ASP AND PEPTIDE BOND BETWEEN LYS B 29 AND GLY A 1, NMR, 20 STRUCTURES"
  },
  {
    "id": "1SKI",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2005-03-15",
    "note": "Structure of the antimicrobial hexapeptide cyc-(RRYYRF) bound to DPC micelles"
  },
  {
    "id": "1SKK",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2005-03-15",
    "note": "Structure of the antimicrobial hexapeptide cyc-(KKWWKF) bound to DPC micelles"
  },
  {
    "id": "1SKL",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2005-03-15",
    "note": "Structure of the antimicrobial hexapeptide cyc-(RRNalNalRF) bound to DPC micelles"
  },
  {
    "id": "1SLD",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.50 \u00c5",
    "date": "1996-04-03",
    "note": "STREPTAVIDIN, PH 7.5, BOUND TO CYCLIC DISULFIDE-BONDED PEPTIDE LIGAND AC-CHPQFC-NH2"
  },
  {
    "id": "1SLE",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.00 \u00c5",
    "date": "1996-04-03",
    "note": "STREPTAVIDIN, PH 5.0, BOUND TO CYCLIC PEPTIDE AC-CHPQGPPC-NH2"
  },
  {
    "id": "1SMF",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.10 \u00c5",
    "date": "1994-07-31",
    "note": "Studies on an artificial trypsin inhibitor peptide derived from the mung bean inhibitor"
  },
  {
    "id": "1SOC",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1997-04-21",
    "note": "NMR STUDY OF THE BACKBONE CONFORMATIONAL EQUILIBRIA OF SANDOSTATIN, MINIMIZED AVERAGE BETA-SHEET STRUCTURE"
  },
  {
    "id": "1SOP",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2004-04-27",
    "note": "C-terminal cystine-rich domain of Minicollagen-I from Hydra"
  },
  {
    "id": "1SP4",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.20 \u00c5",
    "date": "2004-05-04",
    "note": "Crystal structure of NS-134 in complex with bovine cathepsin B: a two headed epoxysuccinyl inhibitor extends along the whole active site cleft"
  },
  {
    "id": "1SP7",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2004-05-18",
    "note": "Structure of the Cys-rich C-terminal domain of Hydra minicollagen"
  },
  {
    "id": "1SRB",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1994-11-01",
    "note": "CONFORMATIONAL STUDIES ON SRTB, A NON-SELECTIVE ENDOTHELIN RECEPTOR AGONIST, AND ON IRL 1620, AN ETB RECEPTOR SPECIFIC AGONIST"
  },
  {
    "id": "1SS3",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2004-08-03",
    "note": "Solution structure of Ole e 6, an allergen from olive tree pollen"
  },
  {
    "id": "1SSL",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2004-10-12",
    "note": "Solution structure of the PSI domain from the Met receptor"
  },
  {
    "id": "1SSZ",
    "method": "INFRARED SPECTROSCOPY",
    "resolution": "N/A",
    "date": "2004-06-15",
    "note": "Conformational Mapping of Mini-B: An N-terminal/C-terminal Construct of Surfactant Protein B Using 13C-Enhanced Fourier Transform Infrared (FTIR) Spectroscopy"
  },
  {
    "id": "1SXM",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1996-01-29",
    "note": "SCORPION TOXIN (NOXIUSTOXIN) WITH HIGH AFFINITY FOR VOLTAGE DEPENDENT POTASSIUM CHANNEL AND LOW AFFINITY FOR CALCIUM DEPENDENT POTASSIUM CHANNEL (NMR AT 20 DEGREES, PH3.5, 39 STRUCTURES)"
  },
  {
    "id": "1T0W",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2004-09-28",
    "note": "25 NMR structures of Truncated Hevein of 32 aa (Hevein-32) complex with N,N,N-triacetylglucosamina"
  },
  {
    "id": "1T1K",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2004-08-10",
    "note": "NMR STRUCTURE OF HUMAN INSULIN MUTANT HIS-B10-ASP, VAL-B12-ALA, PRO-B28-LYS, LYS-B29-PRO, 15 STRUCTURES"
  },
  {
    "id": "1T1P",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2004-08-10",
    "note": "NMR STRUCTURE OF HUMAN INSULIN MUTANT HIS-B10-ASP, VAL-B12-THR, PRO-B28-LYS, LYS-B29-PRO, 15 STRUCTURES"
  },
  {
    "id": "1T1Q",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2004-08-10",
    "note": "NMR STRUCTURE OF HUMAN INSULIN MUTANT HIS-B10-ASP, VAL-B12-ABA, PRO-B28-LYS, LYS-B29-PRO, 15 STRUCTURES"
  },
  {
    "id": "1T34",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.95 \u00c5",
    "date": "2004-08-03",
    "note": "ROTATION MECHANISM FOR TRANSMEMBRANE SIGNALING BY THE ATRIAL NATRIURETIC PEPTIDE RECEPTOR"
  },
  {
    "id": "1T7H",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.13 \u00c5",
    "date": "2004-12-21",
    "note": "X-ray structure of [Lys(-2)-Arg(-1)-des(17-21)]-endothelin-1 peptide"
  },
  {
    "id": "1T9E",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2005-05-03",
    "note": "NMR solution structure of a disulfide analogue of the cyclic sunflower trypsin inhibitor SFTI-1"
  },
  {
    "id": "1TCG",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1994-01-31",
    "note": "STRUCTURE-ACTIVITY RELATIONSHIPS OF MU-CONOTOXIN GIIIA: STRUCTURE DETERMINATION OF ACTIVE AND INACTIVE SODIUM CHANNEL BLOCKER PEPTIDES BY NMR AND SIMULATED ANNEALING CALCULATIONS"
  },
  {
    "id": "1TCH",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1994-01-31",
    "note": "STRUCTURE-ACTIVITY RELATIONSHIPS OF MU-CONOTOXIN GIIIA: STRUCTURE DETERMINATION OF ACTIVE AND INACTIVE SODIUM CHANNEL BLOCKER PEPTIDES BY NMR AND SIMULATED ANNEALING CALCULATIONS"
  },
  {
    "id": "1TCJ",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1994-01-31",
    "note": "STRUCTURE-ACTIVITY RELATIONSHIPS OF MU-CONOTOXIN GIIIA: STRUCTURE DETERMINATION OF ACTIVE AND INACTIVE SODIUM CHANNEL BLOCKER PEPTIDES BY NMR AND SIMULATED ANNEALING CALCULATIONS"
  },
  {
    "id": "1TCK",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1994-01-31",
    "note": "STRUCTURE-ACTIVITY RELATIONSHIPS OF MU-CONOTOXIN GIIIA: STRUCTURE DETERMINATION OF ACTIVE AND INACTIVE SODIUM CHANNEL BLOCKER PEPTIDES BY NMR AND SIMULATED ANNEALING CALCULATIONS"
  },
  {
    "id": "1TER",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1995-02-07",
    "note": "SOLUTION STRUCTURE OF TERTIAPIN DETERMINED USING NUCLEAR MAGNETIC RESONANCE AND DISTANCE GEOMETRY"
  },
  {
    "id": "1TI5",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2005-07-26",
    "note": "Solution structure of plant defensin"
  },
  {
    "id": "1TK2",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.54 \u00c5",
    "date": "2004-06-22",
    "note": "Crystal Structure of the Complex formed between Alkaline Proteinase Savinase and Gramicidin S at 1.5A Resolution"
  },
  {
    "id": "1TMR",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1995-06-08",
    "note": "THE STRUCTURE OF A 19 RESIDUE FRAGMENT FROM THE C-LOOP OF THE FOURTH EPIDERMAL GROWTH FACTOR-LIKE DOMAIN OF THROMBOMODULIN"
  },
  {
    "id": "1TPM",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1994-01-31",
    "note": "SOLUTION STRUCTURE OF THE FIBRIN BINDING FINGER DOMAIN OF TISSUE-TYPE PLASMINOGEN ACTIVATOR DETERMINED BY 1H NUCLEAR MAGNETIC RESONANCE"
  },
  {
    "id": "1TPN",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1994-01-31",
    "note": "SOLUTION STRUCTURE OF THE FIBRIN BINDING FINGER DOMAIN OF TISSUE-TYPE PLASMINOGEN ACTIVATOR DETERMINED BY 1H NUCLEAR MAGNETIC RESONANCE"
  },
  {
    "id": "1TR6",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2004-07-13",
    "note": "NMR solution structure of omega-conotoxin [K10]GVIA, a cyclic cysteine knot peptide"
  },
  {
    "id": "1TRZ",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.60 \u00c5",
    "date": "1994-01-31",
    "note": "CRYSTALLOGRAPHIC EVIDENCE FOR DUAL COORDINATION AROUND ZINC IN THE T3R3 HUMAN INSULIN HEXAMER"
  },
  {
    "id": "1TSK",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1997-08-12",
    "note": "SCORPION TOXIN (TS KAPPA) FROM TITYUS SERRULATUS ACTIVE ON SMALL CONDUCTANCE POTASSIUM CHANNEL, NMR, 30 STRUCTURES"
  },
  {
    "id": "1TT3",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2004-07-06",
    "note": "NMR soulution structure of omega-conotoxin [K10]MVIIA"
  },
  {
    "id": "1TTK",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2004-07-06",
    "note": "NMR solution structure of omega-conotoxin MVIIA, a N-type calcium channel blocker"
  },
  {
    "id": "1TTL",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2004-07-13",
    "note": "Omega-conotoxin GVIA, a N-type calcium channel blocker"
  },
  {
    "id": "1TV0",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2005-01-04",
    "note": "Solution structure of cryptdin-4, the most potent alpha-defensin from mouse Paneth cells"
  },
  {
    "id": "1TXM",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1997-06-05",
    "note": "SCORPION TOXIN (MAUROTOXIN) FROM SCORPIO MAURUS, NMR, 35 STRUCTURES"
  },
  {
    "id": "1TYK",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2004-07-13",
    "note": "SOLUTION STRUCTURE OF A TOXIN FROM THE TARANTULA, GRAMMOSTOLA SPATULATA, WHICH INHIBITS MECHANOSENSITIVE ION CHANNELS"
  },
  {
    "id": "1TYL",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.90 \u00c5",
    "date": "1994-09-30",
    "note": "THE STRUCTURE OF A COMPLEX OF HEXAMERIC INSULIN AND 4'-HYDROXYACETANILIDE"
  },
  {
    "id": "1TYM",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.90 \u00c5",
    "date": "1994-09-30",
    "note": "THE STRUCTURE OF A COMPLEX OF HEXAMERIC INSULIN AND 4'-HYDROXYACETANILIDE"
  },
  {
    "id": "1U8P",
    "method": "X-RAY DIFFRACTION",
    "resolution": "3.23 \u00c5",
    "date": "2004-10-05",
    "note": "Crystal structure of the HIV-1 Cross Neutralizing Monoclonal Antibody 2F5 in complex with gp41 Peptide ECDKWCS"
  },
  {
    "id": "1UGL",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2003-09-30",
    "note": "Solution structure of S8-SP11"
  },
  {
    "id": "1UL2",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2004-07-20",
    "note": "Solution Conformation of alpha-Conotoxin GIC"
  },
  {
    "id": "1UT3",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2004-05-06",
    "note": "Solution Structure of Spheniscin-2, a beta-Defensin from Penguin Stomach Preserving Food"
  },
  {
    "id": "1UYA",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1998-03-18",
    "note": "THE SOLUTION STRUCTURE OF THE A-FORM OF UROGUANYLIN-16 NMR, 10 STRUCTURES"
  },
  {
    "id": "1UYB",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1998-03-18",
    "note": "THE SOLUTION STRUCTURE OF THE B-FORM OF UROGUANYLIN-16 NMR, 10 STRUCTURES"
  },
  {
    "id": "1UZ9",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.60 \u00c5",
    "date": "2005-03-03",
    "note": "Crystallographic and solution studies of N-lithocholyl insulin: a new generation of prolonged-acting insulins."
  },
  {
    "id": "1V28",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2004-10-26",
    "note": "Solution structure of paralytic peptide of the wild Silkmoth, Antheraea yamamai"
  },
  {
    "id": "1V46",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2004-12-14",
    "note": "Solution Structure of CCAP (Crustacean Cardioactive Peptide) from Drosophila melanogaster"
  },
  {
    "id": "1V4Q",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2005-03-01",
    "note": "Three-dimensional solution structure of the analogue peptide of omega-conotoxin MVIIC"
  },
  {
    "id": "1V5A",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2005-03-01",
    "note": "Solution Structure of Covalitoxin I"
  },
  {
    "id": "1V6R",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2004-03-16",
    "note": "Solution Structure of Endothelin-1 with its C-terminal Folding"
  },
  {
    "id": "1V7F",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2004-11-23",
    "note": "Solution structure of phrixotoxin 1"
  },
  {
    "id": "1V90",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2005-03-29",
    "note": "Solution structure by NMR means of delta-paluIT1-NH2"
  },
  {
    "id": "1V91",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2005-03-29",
    "note": "Solution structure of insectidal toxin delta-paluIT2-NH2"
  },
  {
    "id": "1V9U",
    "method": "X-RAY DIFFRACTION",
    "resolution": "3.60 \u00c5",
    "date": "2004-05-04",
    "note": "Human Rhinovirus 2 bound to a fragment of its cellular receptor protein"
  },
  {
    "id": "1VB8",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2004-12-21",
    "note": "solution structure of vhr1, the first cyclotide from root tissue"
  },
  {
    "id": "1VPP",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.90 \u00c5",
    "date": "1999-02-23",
    "note": "COMPLEX BETWEEN VEGF AND A RECEPTOR BLOCKING PEPTIDE"
  },
  {
    "id": "1VS2",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.00 \u00c5",
    "date": "2006-06-27",
    "note": "Interactions of quinoxaline antibiotic and DNA: the molecular structure of a TRIOSTIN A-D(GCGTACGC) complex"
  },
  {
    "id": "1VTG",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.67 \u00c5",
    "date": "2011-07-13",
    "note": "THE MOLECULAR STRUCTURE OF A DNA-TRIOSTIN A COMPLEX"
  },
  {
    "id": "1VTX",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1998-01-28",
    "note": "DELTA-ATRACOTOXIN-HV1 (VERSUTOXIN) FROM HADRONYCHE VERSUTA, NMR, 20 STRUCTURES"
  },
  {
    "id": "1VWB",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.82 \u00c5",
    "date": "1998-03-18",
    "note": "STREPTAVIDIN-CYCLO-AC-[CHPQFC]-NH2, PH 11.8"
  },
  {
    "id": "1VWC",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.86 \u00c5",
    "date": "1998-03-18",
    "note": "STREPTAVIDIN-CYCLO-AC-[CHPQFC]-NH2, PH 2.0"
  },
  {
    "id": "1VWD",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.87 \u00c5",
    "date": "1998-03-18",
    "note": "STREPTAVIDIN-CYCLO-AC-[CHPQFC]-NH2, PH 3.0"
  },
  {
    "id": "1VWE",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.50 \u00c5",
    "date": "1998-03-18",
    "note": "STREPTAVIDIN-CYCLO-AC-[CHPQFC]-NH2, PH 3.6"
  },
  {
    "id": "1VWF",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.92 \u00c5",
    "date": "1998-03-18",
    "note": "STREPTAVIDIN COMPLEXED WITH CYCLO-AC-[CHPQGPPC]-NH2 MONOMER, PH 3.67"
  },
  {
    "id": "1VWM",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.60 \u00c5",
    "date": "1998-03-18",
    "note": "STREPTAVIDIN-CYCLO-AC-[CHPQFC]-NH2, PH 4.2"
  },
  {
    "id": "1VWO",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.65 \u00c5",
    "date": "1998-03-18",
    "note": "STREPTAVIDIN COMPLEXED WITH CYCLO-AC-[CHPQGPPC]-NH2 MONOMER, PH 2.85"
  },
  {
    "id": "1VWP",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.75 \u00c5",
    "date": "1998-03-18",
    "note": "STREPTAVIDIN COMPLEXED WITH CYCLO-AC-[CHPQGPPC]-NH2 MONOMER, PH 2.5"
  },
  {
    "id": "1VY7",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.80 \u00c5",
    "date": "2014-08-20",
    "note": "Crystal structure of the Thermus thermophilus 70S ribosome in the pre-attack state of peptide bond formation containing short substrate-mimic Cytidine-Cytidine-Puromycin in the A site and acylated tRNA in the P site."
  },
  {
    "id": "1VZM",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.40 \u00c5",
    "date": "2004-09-10",
    "note": "OSTEOCALCIN FROM FISH ARGYROSOMUS REGIUS"
  },
  {
    "id": "1W1N",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2005-03-16",
    "note": "The solution structure of the FATC Domain of the Protein Kinase TOR1 from yeast"
  },
  {
    "id": "1W7Z",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.67 \u00c5",
    "date": "2005-11-01",
    "note": "Crystal structure of the free (uncomplexed) Ecballium elaterium trypsin inhibitor (EETI-II)"
  },
  {
    "id": "1W8P",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.08 \u00c5",
    "date": "2005-02-03",
    "note": "Structural properties of the B25Tyr-NMe-B26Phe insulin mutant."
  },
  {
    "id": "1WAV",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.50 \u00c5",
    "date": "1997-02-28",
    "note": "CRYSTAL STRUCTURE OF FORM B MONOCLINIC CRYSTAL OF INSULIN"
  },
  {
    "id": "1WCT",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1999-06-08",
    "note": "A NOVEL CONOTOXIN FROM CONUS TEXTILE WITH UNUSUAL POST-TRANSLATIONAL MODIFICATIONS REDUCES PRESYNAPTIC CALCIUM INFLUX, NMR, 1 STRUCTURE, GLYCOSYLATED PROTEIN"
  },
  {
    "id": "1WKX",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.70 \u00c5",
    "date": "2005-07-19",
    "note": "Crystal Structure of a Hev b 6.02 Isoallergen"
  },
  {
    "id": "1WM7",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2004-07-27",
    "note": "Solution Structure of BmP01 from the Venom of Scorpion Buthus martensii Karsch, 9 structures"
  },
  {
    "id": "1WM8",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2004-07-27",
    "note": "Solution Structure of BmP03 from the Venom of Scorpion Buthus martensii Karsch, 10 structures"
  },
  {
    "id": "1WMT",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2004-10-19",
    "note": "Scorpion toxin (IsTX) from Opisthacanthus madagascariensis"
  },
  {
    "id": "1WO0",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2005-08-09",
    "note": "Solution structure of tachyplesin I in H2O"
  },
  {
    "id": "1WO1",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2005-08-09",
    "note": "Tachyplesin I in dodecylphosphocholine micelles"
  },
  {
    "id": "1WO9",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2004-09-07",
    "note": "Selective inhibition of trypsins by insect peptides: role of P6-P10 loop"
  },
  {
    "id": "1WPD",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2004-10-19",
    "note": "Evidence for domain-specific recognition of SK and Kv channels by MTX and HsTx1 scorpion toxins"
  },
  {
    "id": "1WQB",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2005-12-13",
    "note": "Three-dimensional Solution Strucutre of Aptotoxin VII, from the venom of a Trap-door Spider"
  },
  {
    "id": "1WQC",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2005-01-18",
    "note": "An unusual fold for potassium channel blockers : NMR structure of three toxins from the scorpion Opisthacanthus madagascariensis"
  },
  {
    "id": "1WQD",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2005-01-18",
    "note": "An unusual fold for potassium channel blockers: NMR structure of three toxins from the scorpion Opisthacanthus madagascariensis"
  },
  {
    "id": "1WQE",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2005-01-18",
    "note": "An unusual fold for potassium channel blockers: NMR structure of three toxins from the scorpion Opisthacanthus madagascariensis"
  },
  {
    "id": "1WQK",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2005-03-08",
    "note": "Solution structure of APETx1, a specific peptide inhibitor of human Ether-a-go-go-related gene potassium channels from the venom of the sea anemone Anthopleura elegantissima: a new fold for an HERG toxin"
  },
  {
    "id": "1WSO",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2004-11-30",
    "note": "The solution structures of human Orexin-A"
  },
  {
    "id": "1WT7",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2004-11-30",
    "note": "Solution structure of BuTX-MTX: a butantoxin-maurotoxin chimera"
  },
  {
    "id": "1WT8",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2005-04-19",
    "note": "Solution Structure of BmP08 from the Venom of Scorpion Buthus martensii Karsch, 20 structures"
  },
  {
    "id": "1WUW",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.90 \u00c5",
    "date": "2005-01-11",
    "note": "Crystal Structure of beta hordothionin"
  },
  {
    "id": "1WXN",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2005-08-16",
    "note": "Solution structure of APETx2, a specific peptide inhibitor of ASIC3 proton-gated channels"
  },
  {
    "id": "1WZ5",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2005-04-19",
    "note": "Solution structure of Pi1-3p"
  },
  {
    "id": "1X5V",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2006-04-04",
    "note": "NMR Structure of PcFK1"
  },
  {
    "id": "1X7K",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2005-07-26",
    "note": "PV5 nmr solution structure"
  },
  {
    "id": "1XBH",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1999-02-21",
    "note": "A BETA-HAIRPIN MIMIC FROM FCERI-ALPHA-CYCLO(L-262)"
  },
  {
    "id": "1XDA",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.80 \u00c5",
    "date": "1997-07-07",
    "note": "STRUCTURE OF INSULIN"
  },
  {
    "id": "1XGA",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1999-02-16",
    "note": "ALPHA CONOTOXIN GI: 2-7;3-13 (NATIVE) DISULFIDE BOND ISOMER, NMR, 35 STRUCTURES"
  },
  {
    "id": "1XGB",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1999-02-16",
    "note": "ALPHA CONOTOXIN GI: 2-13;3-7 DISULFIDE BOND ISOMER NMR, 24 STRUCTURES"
  },
  {
    "id": "1XGC",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1999-02-02",
    "note": "ALPHA CONOTOXIN GI: 2-3;7-13 DISULFIDE BOND ISOMER, NMR, 25 STRUCTURES"
  },
  {
    "id": "1XGL",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1997-04-01",
    "note": "HUMAN INSULIN DISULFIDE ISOMER, NMR, 10 STRUCTURES"
  },
  {
    "id": "1XQ7",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.07 \u00c5",
    "date": "2004-12-21",
    "note": "Cyclophilin from Trypanosoma cruzi bound to cyclosporin A"
  },
  {
    "id": "1XSW",
    "method": "SOLID-STATE NMR",
    "resolution": "N/A",
    "date": "2005-04-05",
    "note": "The solid-state NMR structure of Kaliotoxin"
  },
  {
    "id": "1XU1",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.90 \u00c5",
    "date": "2004-11-09",
    "note": "The crystal structure of APRIL bound to TACI"
  },
  {
    "id": "1XU2",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.35 \u00c5",
    "date": "2004-11-09",
    "note": "The crystal structure of APRIL bound to BCMA"
  },
  {
    "id": "1XUT",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2004-11-09",
    "note": "Solution structure of TACI-CRD2"
  },
  {
    "id": "1XV3",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2005-02-15",
    "note": "NMR structure of the synthetic penaeidin 4"
  },
  {
    "id": "1XVK",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.26 \u00c5",
    "date": "2005-04-12",
    "note": "X-ray structure of an Echinomycin-(GCGTACGC)2 complex"
  },
  {
    "id": "1XVN",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.50 \u00c5",
    "date": "2005-04-12",
    "note": "echinomycin (ACGTACGT)2 complex"
  },
  {
    "id": "1XVR",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.40 \u00c5",
    "date": "2005-04-12",
    "note": "echinomycin (CGTACG)2 complex"
  },
  {
    "id": "1XXZ",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2005-02-15",
    "note": "Solution structure of sst1-selective somatostatin (SRIF) analog"
  },
  {
    "id": "1XY4",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2005-02-15",
    "note": "NMR strcutre of sst1-selective somatostatin (SRIF) analog 1"
  },
  {
    "id": "1XY5",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2005-02-15",
    "note": "NMR strcutre of sst1-selective somatostatin (SRIF) analog 1"
  },
  {
    "id": "1XY6",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2005-02-15",
    "note": "NMR strcutre of sst1-selective somatostatin (SRIF) analog 1"
  },
  {
    "id": "1XY8",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2005-02-15",
    "note": "NMR strcutre of sst1-selective somatostatin (SRIF) analog 1"
  },
  {
    "id": "1XY9",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2005-02-15",
    "note": "NMR strcutre of sst1-selective somatostatin (SRIF) analog 1"
  },
  {
    "id": "1Y1B",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2005-07-19",
    "note": "Solution structure of Anemonia elastase inhibitor"
  },
  {
    "id": "1Y1C",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2005-07-19",
    "note": "Solution structure of Anemonia elastase inhibitor analogue"
  },
  {
    "id": "1Y29",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2004-12-07",
    "note": "Three dimensional solution structure of huwentoxin-x by 2D 1H-NMR"
  },
  {
    "id": "1Y2P",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2005-11-01",
    "note": "Solution structure of Hstx3P"
  },
  {
    "id": "1Y49",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2005-11-30",
    "note": "Solution Structure of CCAP (Crustacean Cardioactive Peptide) from Drosophila melanogaster"
  },
  {
    "id": "1Y58",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2005-03-22",
    "note": "The structure of a lactoferricinB derivative bound to micelles"
  },
  {
    "id": "1YF4",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.98 \u00c5",
    "date": "2005-05-24",
    "note": "Crystal Structure of trypsin-vasopressin complex"
  },
  {
    "id": "1YK0",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.40 \u00c5",
    "date": "2006-04-18",
    "note": "structure of natriuretic peptide receptor-C complexed with atrial natriuretic peptide"
  },
  {
    "id": "1YK1",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.90 \u00c5",
    "date": "2006-04-18",
    "note": "structure of natriuretic peptide receptor-C complexed with brain natriuretic peptide"
  },
  {
    "id": "1YL8",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2005-09-20",
    "note": "3D Solution Structure of [Tyr3]Octreotate derivatives in DMSO"
  },
  {
    "id": "1YL9",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2005-09-20",
    "note": "3D Solution Structure of [Tyr3]Octreotate derivatives in DMSO"
  },
  {
    "id": "1YP8",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2005-05-24",
    "note": "Solution structure of the cyclotide tricyclon A"
  },
  {
    "id": "1YT6",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2005-09-27",
    "note": "NMR structure of peptide SD"
  },
  {
    "id": "1YUF",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1996-08-17",
    "note": "TYPE ALPHA TRANSFORMING GROWTH FACTOR, NMR, 16 MODELS WITHOUT ENERGY MINIMIZATION"
  },
  {
    "id": "1YUG",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1996-08-17",
    "note": "TYPE ALPHA TRANSFORMING GROWTH FACTOR, NMR, 15 MODELS AFTER ECEPP/3 ENERGY MINIMIZATION"
  },
  {
    "id": "1YV8",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2006-03-07",
    "note": "Solution structure of crambin in acetone/water mixed solvent"
  },
  {
    "id": "1YVA",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2006-03-07",
    "note": "NMR solution structure of crambin in DPC micelles"
  },
  {
    "id": "1YYL",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.75 \u00c5",
    "date": "2005-05-03",
    "note": "crystal structure of CD4M33, a scorpion-toxin mimic of CD4, in complex with HIV-1 YU2 gp120 envelope glycoprotein and anti-HIV-1 antibody 17b"
  },
  {
    "id": "1YYM",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.20 \u00c5",
    "date": "2005-05-03",
    "note": "crystal structure of F23, a scorpion-toxin mimic of CD4, in complex with HIV-1 YU2 gp120 envelope glycoprotein and anti-HIV-1 antibody 17b"
  },
  {
    "id": "1YZ2",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2006-02-07",
    "note": "Solution structure of Am2766"
  },
  {
    "id": "1Z6V",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2005-08-16",
    "note": "Human lactoferricin"
  },
  {
    "id": "1Z6W",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2005-08-16",
    "note": "Human Lactoferricin"
  },
  {
    "id": "1ZA8",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2005-04-12",
    "note": "NMR solution structure of a leaf-specific-expressed cyclotide vhl-1"
  },
  {
    "id": "1ZAQ",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1996-01-29",
    "note": "FOURTH EGF-LIKE DOMAIN OF THROMBOMODULIN, NMR, 12 STRUCTURES"
  },
  {
    "id": "1ZDC",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1997-09-17",
    "note": "DISULFIDE-STABILIZED MINI PROTEIN A DOMAIN, Z34C, NMR, 24 STRUCTURES"
  },
  {
    "id": "1ZDD",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1997-09-17",
    "note": "DISULFIDE-STABILIZED MINI PROTEIN A DOMAIN, Z34C, NMR, MINIMIZED MEAN STRUCTURE"
  },
  {
    "id": "1ZEG",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.60 \u00c5",
    "date": "1998-07-15",
    "note": "STRUCTURE OF B28 ASP INSULIN IN COMPLEX WITH PHENOL"
  },
  {
    "id": "1ZEH",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.50 \u00c5",
    "date": "1998-12-09",
    "note": "STRUCTURE OF INSULIN"
  },
  {
    "id": "1ZFU",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2005-10-18",
    "note": "Plectasin:A peptide antibiotic with therapeutic potential from a saprophytic fungus"
  },
  {
    "id": "1ZJQ",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2005-05-24",
    "note": "Solution structure of Jingzhaotoxin-VII"
  },
  {
    "id": "1ZLC",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2006-05-02",
    "note": "Solution Conformation of alpha-conotoxin PIA"
  },
  {
    "id": "1ZMH",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.50 \u00c5",
    "date": "2005-08-16",
    "note": "Crystal structure of human neutrophil peptide 2, HNP-2 (variant Gly16-> D-Ala)"
  },
  {
    "id": "1ZMI",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.15 \u00c5",
    "date": "2005-08-16",
    "note": "Crystal structure of human alpha_defensin-2 (variant GLY16->D-ALA), P 32 2 1 space group )"
  },
  {
    "id": "1ZMK",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.30 \u00c5",
    "date": "2005-08-16",
    "note": "Crystal structure of human alpha-defensin-2 (variant Gly16-> D-ALA), P 42 21 2 space group"
  },
  {
    "id": "1ZMM",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.60 \u00c5",
    "date": "2006-05-30",
    "note": "Crystal structure of human alpha-defensin-4"
  },
  {
    "id": "1ZMP",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.65 \u00c5",
    "date": "2006-05-30",
    "note": "Crystal structure of human defensin-5"
  },
  {
    "id": "1ZMQ",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.10 \u00c5",
    "date": "2006-05-30",
    "note": "Crystal structure of human alpha-defensin-6"
  },
  {
    "id": "1ZNI",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.50 \u00c5",
    "date": "1998-01-28",
    "note": "INSULIN"
  },
  {
    "id": "1ZNJ",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.00 \u00c5",
    "date": "1998-01-28",
    "note": "INSULIN, MONOCLINIC CRYSTAL FORM"
  },
  {
    "id": "1ZNT",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2005-12-06",
    "note": "18 NMR structures of AcAMP2-Like Peptide with non Natural Fluoroaromatic Residue (AcAMP2F18Pff/Y20Pff) complex with N,N,N-triacetylchitotriose"
  },
  {
    "id": "1ZPX",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2005-11-15",
    "note": "NMR Structure of Mcol1-[13-33] from Hydra"
  },
  {
    "id": "1ZUE",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2005-08-02",
    "note": "Revised Solution Structure of DLP-2"
  },
  {
    "id": "1ZUF",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2005-08-02",
    "note": "Solution Structure of DLP-4"
  },
  {
    "id": "1ZUV",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2005-12-06",
    "note": "24 NMR structures of AcAMP2-Like Peptide with Phenylalanine 18 mutated to Tryptophan"
  },
  {
    "id": "1ZWU",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2005-12-06",
    "note": "30 NMR structures of AcAMP2-like peptide with non natural beta-(2-naphthyl)-alanine residue."
  },
  {
    "id": "1ZY6",
    "method": "SOLID-STATE NMR",
    "resolution": "N/A",
    "date": "2006-06-13",
    "note": "Membrane-bound dimer structure of Protegrin-1 (PG-1), a beta-Hairpin Antimicrobial Peptide in Lipid Bilayers from Rotational-Echo Double-Resonance Solid-State NMR"
  },
  {
    "id": "284D",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.10 \u00c5",
    "date": "1997-06-11",
    "note": "THE BI-LOOP, A NEW GENERAL FOUR-STRANDED DNA MOTIF"
  },
  {
    "id": "2A2B",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2006-06-13",
    "note": "Curvacin A"
  },
  {
    "id": "2A2V",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2005-07-05",
    "note": "The solution structure of Jingzhaotoxin-XI"
  },
  {
    "id": "2A3G",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.25 \u00c5",
    "date": "2005-10-25",
    "note": "The structure of T6 bovine insulin"
  },
  {
    "id": "2A9H",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2006-01-10",
    "note": "NMR structural studies of a potassium channel / charybdotoxin complex"
  },
  {
    "id": "2A9X",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2005-11-01",
    "note": "TAR RNA recognition by a cyclic peptidomimetic of Tat protein"
  },
  {
    "id": "2AAP",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2005-08-02",
    "note": "Solution structure of jingzhaotoxin-vii"
  },
  {
    "id": "2AB9",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2005-07-26",
    "note": "Discovery, structural determination and processing of the precursor protein that produces the cyclic trypsin inhibitor SFTI-1"
  },
  {
    "id": "2ADW",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.60 \u00c5",
    "date": "2006-03-28",
    "note": "Crystal structure of Echinomycin-(ACGTACGT)2 solved by SAD"
  },
  {
    "id": "2ADX",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1997-12-24",
    "note": "FIFTH EGF-LIKE DOMAIN OF THROMBOMODULIN (TMEGF5), NMR, MINIMIZED AVERAGE STRUCTURE"
  },
  {
    "id": "2AIY",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2000-02-28",
    "note": "R6 HUMAN INSULIN HEXAMER (SYMMETRIC), NMR, 20 STRUCTURES"
  },
  {
    "id": "2AJW",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2005-09-06",
    "note": "Structure of the cyclic conotoxin MII-6"
  },
  {
    "id": "2AK0",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2005-09-06",
    "note": "Structure of cyclic conotoxin MII-7"
  },
  {
    "id": "2ATG",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2005-09-06",
    "note": "NMR structure of Retrocyclin-2 in SDS"
  },
  {
    "id": "2AXK",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2006-06-20",
    "note": "Solution structure of discrepin, a scorpion venom toxin blocking K+ channels."
  },
  {
    "id": "2B38",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2006-01-31",
    "note": "Solution structure of kalata B8"
  },
  {
    "id": "2B5B",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2006-06-27",
    "note": "A reptilian defensin with anti-bacterial and anti-viral activity"
  },
  {
    "id": "2B5K",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2005-10-11",
    "note": "PV5 NMR solution structure in DPC micelles"
  },
  {
    "id": "2B5P",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2006-08-29",
    "note": "Solution structure of ribbon isoform of CMrVIA lambda conotoxin"
  },
  {
    "id": "2B5Q",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2006-08-29",
    "note": "Solution structure of globular conformation of CMrVIA lambda conotoxin"
  },
  {
    "id": "2B68",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2005-11-29",
    "note": "Solution structure of the recombinant Crassostrea gigas defensin"
  },
  {
    "id": "2BBG",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1998-06-17",
    "note": "RAGWEED POLLEN ALLERGEN FROM AMBROSIA TRIFIDA V, NMR, 30 STRUCTURES"
  },
  {
    "id": "2BBX",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2006-08-08",
    "note": "NMR solution structure of the TSR domain of malaria TRAP protein"
  },
  {
    "id": "2BC7",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2006-03-14",
    "note": "Solution structure of [Sec2,8]-ImI"
  },
  {
    "id": "2BCD",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.10 \u00c5",
    "date": "2006-01-17",
    "note": "X-ray crystal structure of Protein Phosphatase-1 with the marine toxin motuporin bound"
  },
  {
    "id": "2BDS",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1989-04-19",
    "note": "DETERMINATION OF THE THREE-DIMENSIONAL SOLUTION STRUCTURE OF THE ANTIHYPERTENSIVE AND ANTIVIRAL PROTEIN BDS-I FROM THE SEA ANEMONE ANEMONIA SULCATA. A STUDY USING NUCLEAR MAGNETIC RESONANCE AND HYBRID DISTANCE GEOMETRY-DYNAMICAL SIMULATED ANNEALING"
  },
  {
    "id": "2BDX",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.30 \u00c5",
    "date": "2006-01-17",
    "note": "X-ray Crystal Structure of dihydromicrocystin-LA bound to Protein Phosphatase-1"
  },
  {
    "id": "2BEY",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2005-10-17",
    "note": "Solution Structure of a Novel C2 Symmetrical Bifunctional Bicyclic Inhibitor Based on SFTI-1"
  },
  {
    "id": "2BI6",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1996-04-03",
    "note": "NMR STUDY OF BROMELAIN INHIBITOR VI FROM PINEAPPLE STEM"
  },
  {
    "id": "2BMT",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1999-01-13",
    "note": "SCORPION TOXIN BMTX2 FROM BUTHUS MARTENSII KARSCH, NMR, 25 STRUCTURES"
  },
  {
    "id": "2BN1",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.40 \u00c5",
    "date": "2005-09-07",
    "note": "Insulin after a high dose x-ray burn"
  },
  {
    "id": "2BN3",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.40 \u00c5",
    "date": "2005-09-07",
    "note": "Insulin before a high dose x-ray burn"
  },
  {
    "id": "2BR8",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.40 \u00c5",
    "date": "2005-06-07",
    "note": "Crystal Structure of Acetylcholine-binding Protein (AChBP) from Aplysia californica in complex with an alpha-conotoxin PnIA variant"
  },
  {
    "id": "2BTC",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.50 \u00c5",
    "date": "2000-01-19",
    "note": "BOVINE TRYPSIN IN COMPLEX WITH SQUASH SEED INHIBITOR (CUCURBITA PEPO TRYPSIN INHIBITOR II)"
  },
  {
    "id": "2BYP",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.07 \u00c5",
    "date": "2005-10-05",
    "note": "Crystal structure of Aplysia californica AChBP in complex with alpha- conotoxin ImI"
  },
  {
    "id": "2C8Q",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.95 \u00c5",
    "date": "2006-03-08",
    "note": "insuline(1sec) and UV laser excited fluorescence"
  },
  {
    "id": "2C8R",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.50 \u00c5",
    "date": "2006-03-08",
    "note": "insuline(60sec) and UV laser excited fluorescence"
  },
  {
    "id": "2CBH",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1990-01-15",
    "note": "DETERMINATION OF THE THREE-DIMENSIONAL STRUCTURE OF THE C-TERMINAL DOMAIN OF CELLOBIOHYDROLASE I FROM TRICHODERMA REESEI. A STUDY USING NUCLEAR MAGNETIC RESONANCE AND HYBRID DISTANCE GEOMETRY-DYNAMICAL SIMULATED ANNEALING"
  },
  {
    "id": "2CCO",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1998-07-15",
    "note": "STRUCTURE OF THE CALCIUM CHANNEL BLOCKER OMEGA CONOTOXIN GVIA, NMR, 20 STRUCTURES"
  },
  {
    "id": "2CEU",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.80 \u00c5",
    "date": "2006-03-03",
    "note": "Despentapeptide insulin in acetic acid (pH 2)"
  },
  {
    "id": "2CK0",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.20 \u00c5",
    "date": "2003-08-05",
    "note": "ANTI-ANTI-IDIOTYPIC ANTIBODY AGAINST HUMAN ANGIOTENSIN II, COMPLEX WITH A SYNTHETIC CYCLIC PEPTIDE"
  },
  {
    "id": "2CK4",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2007-05-15",
    "note": "Solution Structure of aOSK1"
  },
  {
    "id": "2CK5",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2007-05-15",
    "note": "Solution structure of Delta 1-7 aOSK1"
  },
  {
    "id": "2CMY",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.25 \u00c5",
    "date": "2007-05-22",
    "note": "Crystal complex between bovine trypsin and Veronica hederifolia trypsin inhibitor"
  },
  {
    "id": "2CQ7",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2005-11-19",
    "note": "Solution structure of RSGI RUH-032, a cystein-rich domain of CRISP-2 from human cDNA"
  },
  {
    "id": "2CRD",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1993-07-15",
    "note": "ANALYSIS OF SIDE-CHAIN ORGANIZATION ON A REFINED MODEL OF CHARYBDOTOXIN: STRUCTURAL AND FUNCTIONAL IMPLICATIONS"
  },
  {
    "id": "2CTI",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1992-01-15",
    "note": "DETERMINATION OF THE COMPLETE THREE-DIMENSIONAL STRUCTURE OF THE TRYPSIN INHIBITOR FROM SQUASH SEEDS IN AQUEOUS SOLUTION BY NUCLEAR MAGNETIC RESONANCE AND A COMBINATION OF DISTANCE GEOMETRY AND DYNAMICAL SIMULATED ANNEALING"
  },
  {
    "id": "2DA8",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1994-01-31",
    "note": "SOLUTION STRUCTURE OF A COMPLEX BETWEEN (N-MECYS3,N-MECYS7)TANDEM AND (D(GATATC))2"
  },
  {
    "id": "2DCO",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2007-01-23",
    "note": "S1P4 First Extracellular Loop Peptidomimetic"
  },
  {
    "id": "2DCV",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2007-01-23",
    "note": "The solution structure of horseshoe crab antimicrobial peptide tachystatin b with the inhibitory cystine-knot motif"
  },
  {
    "id": "2DCW",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2007-01-23",
    "note": "The solution structure of horseshoe crab antimicrobial peptide tachystatin b with the inhibitory cystine-knot motif"
  },
  {
    "id": "2DDL",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2007-04-24",
    "note": "Lei4P"
  },
  {
    "id": "2DJ9",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2007-03-31",
    "note": "Solution structure of growth-blocking peptide of the cabbage armyworm, Mamestra brassicae"
  },
  {
    "id": "2DJC",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2007-03-31",
    "note": "Solution structure of growth-blocking peptide of the tobacco cutworm, Spodoptera litura"
  },
  {
    "id": "2DWF",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2007-07-03",
    "note": "NMR structure of Mini-B, an N-terminal- C-terminal construct from human Surfactant Protein B (SP-B), in Sodium dodecyl sulfate (SDS) micelles"
  },
  {
    "id": "2E1X",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2007-06-05",
    "note": "NMR structure of the HIV-2 nucleocapsid protein"
  },
  {
    "id": "2E2S",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2007-08-07",
    "note": "Solution structure of agelenin, an insecticidal peptide from the venom of Agelena opulenta"
  },
  {
    "id": "2E3E",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2007-11-13",
    "note": "NMR structure of DEF-BBB, a mutant of anopheles defensin DEF-AAA"
  },
  {
    "id": "2E3F",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2007-11-13",
    "note": "NMR structure of DEF-BAT, a mutant of anopheles defensin DEF-AAA"
  },
  {
    "id": "2E3G",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2007-11-13",
    "note": "NMR structure of DEF-DAA, a mutant of anopheles defensin DEF-AAA"
  },
  {
    "id": "2ECH",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1993-10-31",
    "note": "ECHISTATIN-THE REFINED STRUCTURE OF A DISINTEGRIN IN SOLUTION BY 1H NMR"
  },
  {
    "id": "2EEM",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2007-10-09",
    "note": "Solution structure of the synthetic mytilin"
  },
  {
    "id": "2EFA",
    "method": "NEUTRON DIFFRACTION",
    "resolution": "N/A",
    "date": "2008-01-22",
    "note": "Neutron crystal structure of cubic insulin at pD6.6"
  },
  {
    "id": "2EFZ",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2007-05-08",
    "note": "Solution Structure of an M-1 Conotoxin with a novel disulfide linkage"
  },
  {
    "id": "2EQH",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2008-04-01",
    "note": "Solution structure of growth-blocking peptide of the armyworm, Pseudaletia separata"
  },
  {
    "id": "2EQQ",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2008-04-01",
    "note": "Solution structure of growth-blocking peptide of the armyworm, Pseudaletia separata"
  },
  {
    "id": "2EQT",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2008-04-01",
    "note": "Micelle-bound structure of growth-blocking peptide of the armyworm, Pseudaletia separata"
  },
  {
    "id": "2ERI",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2005-11-15",
    "note": "Solution structure of circulin B"
  },
  {
    "id": "2ERL",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.00 \u00c5",
    "date": "1996-07-11",
    "note": "PHEROMONE ER-1 FROM"
  },
  {
    "id": "2ESL",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.90 \u00c5",
    "date": "2005-12-13",
    "note": "Human Cyclophilin C in Complex with Cyclosporin A"
  },
  {
    "id": "2ETI",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1991-10-15",
    "note": "USE OF RESTRAINED MOLECULAR DYNAMICS IN WATER TO DETERMINE THREE-DIMENSIONAL PROTEIN STRUCTURE: PREDICTION OF THE THREE-DIMENSIONAL STRUCTURE OF ECBALLIUM ELATERIUM TRYPSIN INHIBITOR II"
  },
  {
    "id": "2EW4",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2005-11-15",
    "note": "Solution structure of MrIA"
  },
  {
    "id": "2EYA",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2006-05-23",
    "note": "DMSO refined solution structure of crambin in acetone/water"
  },
  {
    "id": "2EYB",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2006-05-23",
    "note": "Water refined solution structure of crambin in ACETONE/WATER"
  },
  {
    "id": "2EYC",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2006-05-23",
    "note": "DMSO refined solution structure of crambin in dpc micelles"
  },
  {
    "id": "2EYD",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2006-05-23",
    "note": "Water refined solution structure of crambin in dpc micelles"
  },
  {
    "id": "2F2I",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2006-01-31",
    "note": "Solution structure of [P20D,V21K]-kalata B1"
  },
  {
    "id": "2F2J",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2006-01-31",
    "note": "Solution structure of [W19K, P20N, V21K]-kalata B1"
  },
  {
    "id": "2F58",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.80 \u00c5",
    "date": "1999-02-09",
    "note": "IGG1 FAB FRAGMENT (58.2) COMPLEX WITH 12-RESIDUE CYCLIC PEPTIDE (INCLUDING RESIDUES 315-324 OF HIV-1 GP120) (MN ISOLATE)"
  },
  {
    "id": "2F91",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.20 \u00c5",
    "date": "2006-04-18",
    "note": "1.2A resolution structure of a crayfish trypsin complexed with a peptide inhibitor, SGTI"
  },
  {
    "id": "2FD7",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.75 \u00c5",
    "date": "2007-01-16",
    "note": "X-ray Crystal Structure of Chemically Synthesized Crambin"
  },
  {
    "id": "2FD9",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.60 \u00c5",
    "date": "2007-01-16",
    "note": "X-ray Crystal Structure of Chemically Synthesized Crambin-{alpha}carboxamide"
  },
  {
    "id": "2FLG",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2006-02-21",
    "note": "Solution structure of an EGF-LIKE domain from the Plasmodium falciparum merozoite surface protein 1"
  },
  {
    "id": "2FQA",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2006-01-31",
    "note": "Violacin A"
  },
  {
    "id": "2FQC",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2006-07-18",
    "note": "Solution structure of conotoxin pl14a"
  },
  {
    "id": "2FR9",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2006-05-30",
    "note": "NMR structure of the alpha-conotoxin GI (SER12)-benzoylphenylalanine derivative"
  },
  {
    "id": "2FRB",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2006-05-30",
    "note": "NMR structure of the alpha-conotoxin GI (ASN4)-benzoylphenylalanine derivative"
  },
  {
    "id": "2G4M",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.80 \u00c5",
    "date": "2007-02-20",
    "note": "Insulin collected at 2.0 A wavelength"
  },
  {
    "id": "2G6U",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2007-04-10",
    "note": "Solution structures of MP-2: a high affinity miniprotein ligand to Streptavidin"
  },
  {
    "id": "2G9L",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2007-01-16",
    "note": "The High-resolution Solution Conformation of an Antimicrobial Peptide Gaegurin 4 and Its Mode of Membrane Interaction"
  },
  {
    "id": "2GCZ",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2006-07-25",
    "note": "Solution Structure of alpha-Conotoxin OmIA"
  },
  {
    "id": "2GIC",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.92 \u00c5",
    "date": "2006-08-22",
    "note": "Crystal Structure of a vesicular stomatitis virus nucleocapsid-RNA complex"
  },
  {
    "id": "2GJ0",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2006-04-11",
    "note": "Cycloviolacin O14"
  },
  {
    "id": "2GL1",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2007-04-03",
    "note": "NMR solution structure of Vigna radiata Defensin 2 (VrD2)"
  },
  {
    "id": "2GLG",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2006-06-20",
    "note": "NMR structure of the [L23,A24]-sCT mutant"
  },
  {
    "id": "2GLH",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2006-06-20",
    "note": "Solution Conformation of Salmon Calcitonin in Sodium Dodecyl Sulfate Micelles"
  },
  {
    "id": "2GW9",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2006-07-25",
    "note": "High-resolution solution structure of the mouse defensin Cryptdin4"
  },
  {
    "id": "2GWP",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2006-07-25",
    "note": "High-resolution solution structure of the salt-bridge defficient mouse defensin (E15D)-Cryptdin4"
  },
  {
    "id": "2GX1",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2006-12-05",
    "note": "Solution structure and alanine scan of a spider toxin that affects the activation of mammalian sodium channels"
  },
  {
    "id": "2H1Z",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2007-05-22",
    "note": "Structure of a dual-target spider toxin"
  },
  {
    "id": "2H67",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2006-07-18",
    "note": "NMR structure of human insulin mutant HIS-B5-ALA, HIS-B10-ASP PRO-B28-LYS, LYS-B29-PRO, 20 structures"
  },
  {
    "id": "2H8B",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2006-08-01",
    "note": "Solution structure of INSL3"
  },
  {
    "id": "2H8S",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2006-06-27",
    "note": "Solution structure of alpha-conotoxin Vc1.1"
  },
  {
    "id": "2H9X",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2007-06-05",
    "note": "NMR structure for the CgNa toxin from the sea anemone Condylactis gigantea"
  },
  {
    "id": "2HGO",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2007-02-27",
    "note": "NMR structure of Cassiicolin"
  },
  {
    "id": "2HH4",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2006-07-18",
    "note": "NMR structure of human insulin mutant GLY-B8-D-SER, HIS-B10-ASP PRO-B28-LYS, LYS-B29-PRO, 20 structures"
  },
  {
    "id": "2HHO",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2006-07-18",
    "note": "NMR structure of human insulin mutant GLY-B8-SER, HIS-B10-ASP PRO-B28-LYS, LYS-B29-PRO, 20 structures"
  },
  {
    "id": "2HIU",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1997-04-01",
    "note": "NMR STRUCTURE OF HUMAN INSULIN IN 20% ACETIC ACID, ZINC-FREE, 10 STRUCTURES"
  },
  {
    "id": "2HK4",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2007-03-20",
    "note": "Dimeric solution structure of the cyclic octamer d(CCGTCCGT)"
  },
  {
    "id": "2HLG",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2008-04-29",
    "note": "NMR solution structure of a new tomato peptide"
  },
  {
    "id": "2HM3",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2007-02-06",
    "note": "Nematocyst outer wall antigen, cysteine rich domain NW1"
  },
  {
    "id": "2HM4",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2007-02-06",
    "note": "Nematocyst Outer Wall Antigen, NW1 K21P"
  },
  {
    "id": "2HM5",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2007-02-06",
    "note": "NW1, K21P, Structural Species II"
  },
  {
    "id": "2HM6",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2007-02-06",
    "note": "Nematocyst outer wall antigen, NW1 G11V K21P"
  },
  {
    "id": "2I1P",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2007-02-13",
    "note": "Solution structure of the twelfth cysteine-rich ligand-binding repeat in rat megalin"
  },
  {
    "id": "2I1T",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2006-08-29",
    "note": "Solution structure of Jingzhaotoxin-III, a novel toxin inhibiting both Nav and Kv channels"
  },
  {
    "id": "2I28",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2006-10-31",
    "note": "Solution Structure of alpha-Conotoxin BuIA"
  },
  {
    "id": "2I5Y",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.20 \u00c5",
    "date": "2006-10-10",
    "note": "Crystal structure of CD4M47, a scorpion-toxin mimic of CD4, in complex with HIV-1 YU2 GP120 envelope glycoprotein and anti-HIV-1 antibody 17B"
  },
  {
    "id": "2I60",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.40 \u00c5",
    "date": "2006-10-10",
    "note": "Crystal structure of [Phe23]M47, a scorpion-toxin mimic of CD4, in complex with HIV-1 YU2 GP120 envelope glycoprotein and anti-HIV-1 antibody 17B"
  },
  {
    "id": "2IAE",
    "method": "X-RAY DIFFRACTION",
    "resolution": "3.50 \u00c5",
    "date": "2006-12-26",
    "note": "Crystal structure of a protein phosphatase 2A (PP2A) holoenzyme."
  },
  {
    "id": "2IE3",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.80 \u00c5",
    "date": "2006-11-07",
    "note": "Structure of the Protein Phosphatase 2A Core Enzyme Bound to Tumor-inducing Toxins"
  },
  {
    "id": "2IFI",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2007-08-14",
    "note": "Ala6 Variant of ImI Conotoxin"
  },
  {
    "id": "2IFJ",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2007-08-14",
    "note": "Lys6 deamidated variant of ImI conotoxin"
  },
  {
    "id": "2IFZ",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2007-08-14",
    "note": "Lys6 Variant of ImI Conotoxin"
  },
  {
    "id": "2IGU",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2007-08-14",
    "note": "Deamidated analogue of ImI Conotoxin"
  },
  {
    "id": "2IGZ",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2006-10-03",
    "note": "NMR structure of the sterol-dependent antifungal antibiotic bacillomycin Lc"
  },
  {
    "id": "2IH0",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2006-10-03",
    "note": "NMR structure determination of a synthetic analogue of the iturinic antibiotic bacillomycin Lc"
  },
  {
    "id": "2IH6",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2007-08-14",
    "note": "Pro6 variant of CMrVIA conotoxin"
  },
  {
    "id": "2IH7",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2007-08-14",
    "note": "Amidated Pro6 Analogue of CMrVIA conotoxin"
  },
  {
    "id": "2IHA",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2007-08-14",
    "note": "Amidated variant of CMrVIA conotoxin"
  },
  {
    "id": "2INS",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.50 \u00c5",
    "date": "1982-08-05",
    "note": "THE STRUCTURE OF DES-PHE B1 BOVINE INSULIN"
  },
  {
    "id": "2IPP",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.15 \u00c5",
    "date": "2006-12-12",
    "note": "Crystal Structure of the tetragonal form of human liver cathepsin B"
  },
  {
    "id": "2IT7",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2007-10-02",
    "note": "Solution structure of the squash trypsin inhibitor EETI-II"
  },
  {
    "id": "2IT8",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2007-10-02",
    "note": "Solution structure of a linear analog of the cyclic squash trypsin inhibitor MCoTI-II"
  },
  {
    "id": "2J15",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2006-11-01",
    "note": "Cyclic MrIA: An exceptionally stable and potent cyclic conotoxin with a novel topological fold that targets the norepinephrine transporter."
  },
  {
    "id": "2J4U",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.99 \u00c5",
    "date": "2007-02-13",
    "note": "E.coli OmpC - camel Lactoferrin complex"
  },
  {
    "id": "2J5H",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2006-10-02",
    "note": "NMR analysis of mouse CRIPTO CFC domain"
  },
  {
    "id": "2JM2",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2007-03-27",
    "note": "Structure of the N-terminal subdomain of insulin-like growth factor (IGF) binding protein-6 and its interactions with IGFs"
  },
  {
    "id": "2JM4",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2006-12-12",
    "note": "The solution NMR structure of the relaxin (RXFP1) receptor LDLa module."
  },
  {
    "id": "2JMN",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2006-12-05",
    "note": "NMR structure of human insulin mutant His-B10-Asp, Pro-B28-Lys, Lys-B29-Pro, 20 structures"
  },
  {
    "id": "2JNI",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2007-08-07",
    "note": "Spatial structure of antimicrobial peptide arenicin-2 in aqueous solution"
  },
  {
    "id": "2JNR",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2007-05-08",
    "note": "Discovery and optimization of a natural HIV-1 entry inhibitor targeting the gp41 fusion peptide"
  },
  {
    "id": "2JP6",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2008-04-29",
    "note": "Structural and functional characterization of the recombinant form of the Kv1.3 channel blocker Tc32"
  },
  {
    "id": "2JQW",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2008-06-17",
    "note": "A novel lectin-like peptide from Odorrana grahami"
  },
  {
    "id": "2JR3",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2008-05-27",
    "note": "Antibacterial Peptide from Eggshell Matrix: Structure and Self-assembly of beta-defensin Like Peptide from the Chinese Soft-shelled Turtle Eggshell"
  },
  {
    "id": "2JRW",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2008-07-01",
    "note": "Solution structure of Cyclic extended Pep1(Cyc.ext.Pep.1) for autoimmune myasthenia gravis"
  },
  {
    "id": "2JRY",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2007-10-23",
    "note": "Structure and Sodium Channel Activity of an Excitatory I1-Superfamily Conotoxin"
  },
  {
    "id": "2JSB",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2008-02-05",
    "note": "Solution structure of arenicin-1"
  },
  {
    "id": "2JTB",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2007-08-21",
    "note": "Three dimensional solution structure of hainantoxin-III by 2D 1H-NMR"
  },
  {
    "id": "2JTU",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2008-08-19",
    "note": "NMR structure of iota-RXIA(38)"
  },
  {
    "id": "2JUM",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2007-10-16",
    "note": "ThrA3-DKP-insulin"
  },
  {
    "id": "2JUQ",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2011-05-25",
    "note": "alpha-RgIA, a Novel Conotoxin that Blocks the alpha9-alpha10 nAChR"
  },
  {
    "id": "2JUR",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2011-05-25",
    "note": "alpha RgIA, a Novel Conotoxin that Blocks the alpha9-alpha10 nAChR"
  },
  {
    "id": "2JUS",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2011-05-25",
    "note": "alpha RgIA, a Novel Conotoxin that Blocks the alpha9-alpha10 nAChR"
  },
  {
    "id": "2JUT",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2011-05-25",
    "note": "alpha RgIA, a Novel Conotoxin that Blocks the alpha9-alpha10 nAChR"
  },
  {
    "id": "2JUU",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2007-10-16",
    "note": "allo-ThrA3 DKP-insulin"
  },
  {
    "id": "2JUV",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2007-10-16",
    "note": "AbaA3-DKP-insulin"
  },
  {
    "id": "2JUY",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2008-08-26",
    "note": "NMR ensemble of Neopetrosiamide A"
  },
  {
    "id": "2JV1",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2007-12-11",
    "note": "NMR structure of human insulin monomer in 35% CD3CN zinc free, 50 structures"
  },
  {
    "id": "2JWG",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2007-11-13",
    "note": "Structure of a Glycosylphosphatidylinositol-anchored Domain from a Trypanosome Variant Surface Glycoprotein"
  },
  {
    "id": "2JWH",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2007-11-13",
    "note": "Structure of a Glycosylphosphatidylinositol-anchored Domain from a Trypanosome Variant Surface Glycoprotein"
  },
  {
    "id": "2JWM",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2008-03-11",
    "note": "NMR spatial srtucture of ternary complex kalata B7/Mn2+/DPC micelle"
  },
  {
    "id": "2JXZ",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2008-11-25",
    "note": "Solution Conformation of A Non-Amyloidogenic Analogue of Human Calcitonin in Sodium Dodecyl Sulfate Micelles"
  },
  {
    "id": "2JYP",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2008-02-12",
    "note": "Coordinates for lowest energy structure of Aragonite protein-7, C-terminal domain"
  },
  {
    "id": "2K10",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2008-04-15",
    "note": "Confirmational analysis of the broad-spectrum antibacterial peptide, rantuerin-2csa: identification of a full length helix-turn-helix motif"
  },
  {
    "id": "2K1I",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2008-10-28",
    "note": "Synthesis, Structure and Activities of an Oral Mucosal Alpha-Defensin from Rhesus Macaque"
  },
  {
    "id": "2K1V",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2008-04-08",
    "note": "R3/I5 relaxin chimera"
  },
  {
    "id": "2K2Y",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2009-01-27",
    "note": "Solution structure of the folded domain of intermediate IIIa of Tick Carboxypeptidase Inhibitor"
  },
  {
    "id": "2K2Z",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2009-01-27",
    "note": "Solution structure of the folded domain of intermediate IIIb of Tick Carboxypeptidase Inhibitor"
  },
  {
    "id": "2K4U",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2008-12-09",
    "note": "Solution structure of the SCORPION TOXIN ADWX-1"
  },
  {
    "id": "2K6T",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2008-12-16",
    "note": "Solution structure of the relaxin-like factor"
  },
  {
    "id": "2K6U",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2008-12-16",
    "note": "The Solution Structure of a Conformationally Restricted Fully Active Derivative of the Human Relaxin-like Factor (RLF)"
  },
  {
    "id": "2K72",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2010-01-05",
    "note": "Solution NMR structure of toxin-like potassium channel blocking domain in MMP23"
  },
  {
    "id": "2K9E",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2009-01-20",
    "note": "NMR Solution Structure for ShK-192: A Potent KV1.3-Specific Immunosuppressive Polypeptide"
  },
  {
    "id": "2K9O",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2009-11-03",
    "note": "Solution structure of Vm24 synthetic scorpion toxin"
  },
  {
    "id": "2KB8",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2009-02-24",
    "note": "The dynamic alpha-helix structure of micelle-bound human amylin."
  },
  {
    "id": "2KB9",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2009-07-28",
    "note": "Human Jagged-1, exon 6"
  },
  {
    "id": "2KBC",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2009-03-24",
    "note": "Solution structure of human insulin-like peptide 5 (INSL5)"
  },
  {
    "id": "2KCG",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2009-07-21",
    "note": "Solution structure of cycloviolacin O2"
  },
  {
    "id": "2KCH",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2009-07-21",
    "note": "Solution structure of micelle-bound kalata B2"
  },
  {
    "id": "2KDQ",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2009-06-23",
    "note": "Simultaneous recognition of HIV-1 TAR RNA bulge and loop sequences by cyclic peptide mimic of Tat protein"
  },
  {
    "id": "2KEF",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2009-06-23",
    "note": "Solution NMR structures of human hepcidin at 325K"
  },
  {
    "id": "2KGH",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2009-12-15",
    "note": "Solution structure of Brachyperma ruhnaui toxin 2"
  },
  {
    "id": "2KGU",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2010-03-31",
    "note": "Spatial structure of purotoxin-1 in water"
  },
  {
    "id": "2KHB",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2010-03-31",
    "note": "Solution structure of linear kalata B1 (loop 6)"
  },
  {
    "id": "2KIO",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2010-01-19",
    "note": "NMR structure of the oxidized yeast TOR1 FATC domain bound to DPC micelles at 318K"
  },
  {
    "id": "2KIR",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2009-12-29",
    "note": "Solution structure of a designer toxin, mokatoxin-1"
  },
  {
    "id": "2KJ7",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2009-06-23",
    "note": "Three-Dimensional NMR Structure of Rat Islet Amyloid Polypeptide in DPC micelles"
  },
  {
    "id": "2KJI",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2009-06-16",
    "note": "A divergent ins protein in c. elegans structurally resemble insulin and activates the human insulin receptor"
  },
  {
    "id": "2KJJ",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2010-06-16",
    "note": "Dynamics of insulin probed by 1H-NMR amide proton exchange anomalous flexibility of the receptor-binding surface"
  },
  {
    "id": "2KJU",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2010-06-16",
    "note": "NMR structure of human insulin mutant glu-b21-d-glu, his-b10 asp pro-b28-lys, lys-b29-pro, 20 structures"
  },
  {
    "id": "2KM9",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2010-07-28",
    "note": "Omega conotoxin-FVIA"
  },
  {
    "id": "2KMO",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2009-11-10",
    "note": "Solution structure of native Leech-derived tryptase inhibitor, LDTI"
  },
  {
    "id": "2KMP",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2009-11-10",
    "note": "Solution structure of intermeidate IIa of Leeck-derived tryptase inhibitor, LDTI."
  },
  {
    "id": "2KMQ",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2009-11-10",
    "note": "Solution structure of intermediate IIb of Leech-derived tryptase inhibitor, LDTI."
  },
  {
    "id": "2KMR",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2009-11-10",
    "note": "Solution structure of intermediate IIc of Leech-derived tryptase inhibitor, LDTI."
  },
  {
    "id": "2KNI",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2010-09-01",
    "note": "High-resolution solution structure of the ASIC1a blocker PcTX1"
  },
  {
    "id": "2KNM",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2010-03-09",
    "note": "Solution structure of the cyclotide cycloviolacin O2"
  },
  {
    "id": "2KNN",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2010-03-09",
    "note": "Solution structure of the cyclotide cycloviolacin O2 with Glu6 methylated (cyO2Me)"
  },
  {
    "id": "2KNP",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2009-11-10",
    "note": "Isolation and characterization of peptides from Momordica cochinchinensis seeds."
  },
  {
    "id": "2KNX",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2010-04-14",
    "note": "Solution Structure of complement repeat CR17 from LRP-1"
  },
  {
    "id": "2KOZ",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2010-10-06",
    "note": "Solution structure of nasonin-1"
  },
  {
    "id": "2KP0",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2010-10-06",
    "note": "Solution structure of nasonin-1M"
  },
  {
    "id": "2KQQ",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2010-11-24",
    "note": "NMR structure of human insulin mutant gly-b8-d-ala, his-b10-asp, pro-b28-lys, lys-b29-pro, 20 structures"
  },
  {
    "id": "2KRI",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2010-03-31",
    "note": "Structure of a complex between domain V of beta2-glycoprotein I and the fourth ligand-binding module from LDLR determined with Haddock"
  },
  {
    "id": "2KTC",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2011-02-02",
    "note": "Solution Structure of a Novel hKv1.1 inhibiting scorpion toxin from Mesibuthus tamulus"
  },
  {
    "id": "2KTX",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1997-06-16",
    "note": "COMPLETE KALIOTOXIN FROM ANDROCTONUS MAURETANICUS MAURETANICUS, NMR, 18 STRUCTURES"
  },
  {
    "id": "2KUK",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2011-01-12",
    "note": "Solution structure of vhl-2"
  },
  {
    "id": "2KUS",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2011-03-02",
    "note": "Spatial structure of Antimicrobial Peptide Sm-AMP-1.1a"
  },
  {
    "id": "2KUX",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2010-03-23",
    "note": "Solution structure of the cyclotide kalata B5 from Oldenlandia affinis"
  },
  {
    "id": "2KUY",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2011-05-04",
    "note": "Structure of Glycocin F"
  },
  {
    "id": "2KVH",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2010-04-14",
    "note": "Structure of the three-Cys2His2 domain of mouse testis zinc finger protein"
  },
  {
    "id": "2KVX",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2011-03-09",
    "note": "Solution structure of kalata B12"
  },
  {
    "id": "2KX5",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2010-07-07",
    "note": "Recognition of HIV TAR RNA by peptide mimetic of Tat protein"
  },
  {
    "id": "2KXK",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2011-06-01",
    "note": "Human Insulin Mutant A22Gly-B31Lys-B32Arg"
  },
  {
    "id": "2KY3",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2011-06-01",
    "note": "Solution structure of GS-alfa-Ktx5.4 synthetic scorpion like"
  },
  {
    "id": "2KYJ",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2011-06-01",
    "note": "Structure of the scorpion toxin U1-Liotoxin-Lw1a"
  },
  {
    "id": "2L07",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2011-06-22",
    "note": "1H, 13C, and 15N chemical shifts and structure of brazzein-derived peptide CKR-PNG"
  },
  {
    "id": "2L1J",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2010-09-01",
    "note": "1H assignments for ASIP(93-126, P103A, P105A, P111A, Q115Y, S124Y)"
  },
  {
    "id": "2L1Q",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2010-09-22",
    "note": "Solution structure of human Liver Expressed Antimicrobial Peptide 2"
  },
  {
    "id": "2L1Y",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2011-08-31",
    "note": "NMR Structure of human insulin mutant GLY-B20-D-ALA, GLY-B23-D-ALA PRO-B28-LYS, LYS-B29-PRO, 20 Structures"
  },
  {
    "id": "2L1Z",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2011-08-31",
    "note": "NMR Structure of human insulin mutant GLY-B20-D-ALA, GLY-B23-D-ALA PRO-B28-LYS, LYS-B29-PRO, 20 Structures"
  },
  {
    "id": "2L2R",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2011-05-11",
    "note": "Helical hairpin structure of a novel antimicrobial peptide EcAMP1 from seeds of barnyard grass (Echinochloa crus-galli)"
  },
  {
    "id": "2L37",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2011-01-19",
    "note": "3D solution structure of arginine/glutamate-rich polypeptide Luffin P1 from the seeds of sponge gourd (Luffa cylindrical)"
  },
  {
    "id": "2L3I",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2011-09-14",
    "note": "Oxki4a, spider derived antimicrobial peptide"
  },
  {
    "id": "2L86",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2011-07-13",
    "note": "Solution NMR structure of human amylin in SDS micelles at pH 7.3"
  },
  {
    "id": "2L8X",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2011-12-14",
    "note": "Spatial structure of antimicrobial peptide Arenicin-2 dimer in DPC micelles"
  },
  {
    "id": "2LAM",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2011-05-18",
    "note": "Three-dimensional structure of the cyclotide Cter M"
  },
  {
    "id": "2LAQ",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2011-04-27",
    "note": "Solution structure of the Sex Peptide from Drosophila melanogaster"
  },
  {
    "id": "2LB7",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2011-04-13",
    "note": "Hevein-type Antifungal Peptide with a Unique 10-Cysteine Motif"
  },
  {
    "id": "2LDE",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2011-09-21",
    "note": "Solution structure of the long sarafotoxin srtx-i3"
  },
  {
    "id": "2LDF",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2011-09-21",
    "note": "Solution structure of the long sarafotoxin srtx-m"
  },
  {
    "id": "2LDS",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2011-09-14",
    "note": "Solution Structure of a Short-chain LaIT1 from the Venom of Scorpion Liocheles australasiae"
  },
  {
    "id": "2LER",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2012-04-11",
    "note": "Conotoxin pc16a"
  },
  {
    "id": "2LET",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1994-05-31",
    "note": "AN 1H NMR DETERMINATION OF THE THREE DIMENSIONAL STRUCTURES OF MIRROR IMAGE FORMS OF A LEU-5 VARIANT OF THE TRYPSIN INHIBITOR ECBALLIUM ELATERIUM (EETI-II)"
  },
  {
    "id": "2LEU",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1997-11-26",
    "note": "HIGH RESOLUTION 1H NMR STUDY OF LEUCOCIN A IN 90% AQUEOUS TRIFLUOROETHANOL (TFE) (0.1% TFA), 18 STRUCTURES"
  },
  {
    "id": "2LEW",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2012-05-16",
    "note": "Structural Plasticity of Paneth cell alpha-Defensins: Characterization of Salt-Bridge Deficient Analogues of Mouse Cryptdin-4"
  },
  {
    "id": "2LEY",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2012-05-16",
    "note": "Solution structure of (R7G)-Crp4"
  },
  {
    "id": "2LG4",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2012-07-25",
    "note": "3D solution structure of antimicrobial peptide aurelin"
  },
  {
    "id": "2LG5",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2012-04-25",
    "note": "NMR structure of Chicken AvBD2 defensin"
  },
  {
    "id": "2LG6",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2012-04-25",
    "note": "NMR structure of chicken AvBD2-K31A mutant"
  },
  {
    "id": "2LGB",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2012-04-11",
    "note": "Modified A22Gly-B31Arg Human Insulin"
  },
  {
    "id": "2LI3",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2012-01-11",
    "note": "Structural and functional analysis of a novel potassium toxin argentinean scorpion Tityus trivittatus reveals a new kappa sub-family"
  },
  {
    "id": "2LIX",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2012-07-25",
    "note": "Solution structure Analysis of the ImKTx104"
  },
  {
    "id": "2LIY",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2012-09-05",
    "note": "Plant peptide hormone regulating stomatal density"
  },
  {
    "id": "2LJ7",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2012-09-12",
    "note": "3D solution structure of plant defensin Lc-def"
  },
  {
    "id": "2LJS",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2012-08-08",
    "note": "Solution structure of MCoTI-V"
  },
  {
    "id": "2LL1",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2012-10-24",
    "note": "High-resolution solution structure of the orally active insecticidal spider venom peptide U1-TRTX-Sp1a"
  },
  {
    "id": "2LL5",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2012-07-18",
    "note": "Cyclo-TC1 Trp-cage"
  },
  {
    "id": "2LLD",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2012-03-21",
    "note": "The Insect Defensin Lucifensin from Lucilia sericata"
  },
  {
    "id": "2LLR",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2012-12-19",
    "note": "NMR structure of Alvinellacin"
  },
  {
    "id": "2LMZ",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2012-03-14",
    "note": "Solution NMR structure of the novel conotoxin im23a from Conus imperialis"
  },
  {
    "id": "2LN4",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2012-11-28",
    "note": "Insight into the antimicrobial activities based on the Structure-activity relationships of coprisin isolated from the Dung Beetle, Copris tripartitus"
  },
  {
    "id": "2LO7",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2012-03-14",
    "note": "Ts16 NMR solution structure"
  },
  {
    "id": "2LO9",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2013-01-23",
    "note": "NMR solution structure of Mu-contoxin BuIIIB"
  },
  {
    "id": "2LOC",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2013-01-23",
    "note": "Conotoxin analogue [D-Ala2]BuIIIB"
  },
  {
    "id": "2LQA",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2013-02-06",
    "note": "Solution NMR structure of Asteropsin A from marine sponge Asteropus sp."
  },
  {
    "id": "2LQX",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2012-05-30",
    "note": "NMR spatial structure of the trypsin inhibitor BWI-2c from the buckwheat seeds"
  },
  {
    "id": "2LR3",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2012-09-26",
    "note": "Solution structure of the anti-fungal defensin DEF4 (MTR_8g070770) from Medicago truncatula (barrel clover)"
  },
  {
    "id": "2LR5",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2012-06-27",
    "note": "1H chemical shift assignments for micasin"
  },
  {
    "id": "2LR7",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2013-03-27",
    "note": "Cathelicidin-PY"
  },
  {
    "id": "2LR9",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2012-05-02",
    "note": "High-resolution solution NMR structure of the rho-conotoxin TIA."
  },
  {
    "id": "2LS1",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2012-08-15",
    "note": "Structure of Sviceucin, an antibacterial type I lasso peptide from Streptomyces sviceus"
  },
  {
    "id": "2LSQ",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2013-05-08",
    "note": "Analog of the fragment 197-221 of beta-1 adrenoreceptor"
  },
  {
    "id": "2LSX",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2012-10-17",
    "note": "Solution structure of a mini i-motif"
  },
  {
    "id": "2LT8",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2012-10-31",
    "note": "Eurocin solution structure"
  },
  {
    "id": "2LU6",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2012-06-27",
    "note": "NMR solution structure of Midi peptide designed based on m-conotoxins"
  },
  {
    "id": "2LU9",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2013-12-11",
    "note": "NMR solution structure of recombinant Tamapin"
  },
  {
    "id": "2LUR",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2012-08-29",
    "note": "NMR solution structure of Kb1[ghrw;23-28]"
  },
  {
    "id": "2LWB",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2013-07-31",
    "note": "Structural model of BAD-1 repeat loop by NMR"
  },
  {
    "id": "2LWL",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2013-08-21",
    "note": "Structural Basis for the Interaction of Human \u03b2-Defensin 6 and Its Putative Chemokine Receptor CCR2 and Breast Cancer Microvesicles"
  },
  {
    "id": "2LWQ",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2013-08-21",
    "note": "NMR solution structure of PawS derived peptide 11 (PDP-11)"
  },
  {
    "id": "2LWS",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2013-08-21",
    "note": "NMR solution structure of PawS Derived Peptide 4 (PDP-4)"
  },
  {
    "id": "2LWT",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2013-08-21",
    "note": "NMR solution structure of PawS Derived Peptide 5 (PDP-5)"
  },
  {
    "id": "2LWU",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2013-08-21",
    "note": "NMR solution structure of PawS Derived Peptide 7 (PDP-7)"
  },
  {
    "id": "2LWV",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2013-08-21",
    "note": "NMR solution structure of PawS Derived Peptide 6 (PDP-6)"
  },
  {
    "id": "2LXG",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2013-02-06",
    "note": "NMR solution structure of Mu-conotoxin KIIIA"
  },
  {
    "id": "2LXO",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2013-08-14",
    "note": "Identification of the Structural Traits Mediating the Antimicrobial Activity of a Chimeric Peptide of HBD2 and HBD3"
  },
  {
    "id": "2LXZ",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2012-11-28",
    "note": "Solution Structure of the Antimicrobial Peptide Human Defensin 5"
  },
  {
    "id": "2LYE",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2012-11-28",
    "note": "High resolution NMR solution structure of a symmetrical theta-defensin, BTD-2"
  },
  {
    "id": "2LYF",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2012-11-28",
    "note": "High resolution NMR solution structure of the theta-defensin RTD-1"
  },
  {
    "id": "2LZ5",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2012-12-05",
    "note": "Solution structure of a Novel Alpha-Conotoxin TxIB"
  },
  {
    "id": "2LZI",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2012-11-28",
    "note": "High resolution NMR structure of the theta-defensin HTD-2 (retrocyclin 2)"
  },
  {
    "id": "2LZO",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2013-07-03",
    "note": "Spatial structure of Pi-AnmTX Ugr 9a-1"
  },
  {
    "id": "2LZX",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2013-10-23",
    "note": "Solution NMR structure of Asteropsin B from a marine sponge Asteropus sp."
  },
  {
    "id": "2LZY",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2013-10-23",
    "note": "Solution NMR structure of asteropsin c from a marine sponge asteropus sp."
  },
  {
    "id": "2M1D",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2013-02-27",
    "note": "Biosynthetic engineered B28K-B29P human insulin monomer structure in in water/acetonitrile solutions."
  },
  {
    "id": "2M1E",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2013-02-27",
    "note": "Biosynthetic engineered B28K-B29P human insulin monomer structure in in water solutions."
  },
  {
    "id": "2M1P",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2013-02-27",
    "note": "[Aba5,14]BTD-2"
  },
  {
    "id": "2M2G",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2013-02-27",
    "note": "Solution structure of the antimicrobial peptide [Aba3,16]BTD-2"
  },
  {
    "id": "2M2H",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2013-02-27",
    "note": "Solution structure of the antimicrobial peptide [Aba3,7,12,16]BTD-2"
  },
  {
    "id": "2M2M",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2013-03-06",
    "note": "Structure of [L-HisB24] insulin analogue at pH 1.9"
  },
  {
    "id": "2M2N",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2013-03-06",
    "note": "Structure of [L-HisB24] insulin analogue at pH 8.0"
  },
  {
    "id": "2M2O",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2013-03-06",
    "note": "Structure of [D-HisB24] insulin analogue at pH 1.9"
  },
  {
    "id": "2M2P",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2013-03-06",
    "note": "Structure of [D-HisB24] insulin analogue at pH 8.0"
  },
  {
    "id": "2M2Q",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2013-11-06",
    "note": "Solution structure of MCh-1: A novel inhibitor cystine knot peptide from Momordica charantia"
  },
  {
    "id": "2M2R",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2013-11-06",
    "note": "Solution structure of MCh-2: A novel inhibitor cystine knot peptide from Momordica charantia"
  },
  {
    "id": "2M2S",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2013-02-27",
    "note": "Solution structure of the antimicrobial peptide [Aba5,7,12,14]BTD-2"
  },
  {
    "id": "2M2X",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2013-02-27",
    "note": "Solution structure of the antimicrobial peptide [Aba3,5,7,12,14,16]BTD-2"
  },
  {
    "id": "2M2Y",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2013-02-27",
    "note": "Solution structure of the antimicrobial peptide Btd-2[3,4]"
  },
  {
    "id": "2M36",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2013-03-27",
    "note": "Solution structure of the insecticidal spider-venom peptide Aps III"
  },
  {
    "id": "2M3I",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2013-12-04",
    "note": "Characterization of a Novel Alpha4/6-Conotoxin TxIC from Conus textile that Potently Blocks alpha3beta4 Nicotinic Acetylcholine Receptors"
  },
  {
    "id": "2M3J",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2014-03-12",
    "note": "Solution Structure of Marine Sponge-Derived Asteropsin E Which is Highly Resistant to Gastrointestinal Proteases"
  },
  {
    "id": "2M3N",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2013-09-11",
    "note": "Peptide leucine arginine"
  },
  {
    "id": "2M4X",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2013-06-19",
    "note": "Analysis of the structural and molecular basis of voltage-sensitive sodium channel inhibition by the spider toxin, Huwentoxin-IV (-TRTX-Hh2a)."
  },
  {
    "id": "2M4Z",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2013-06-19",
    "note": "Analysis of the structural and molecular basis of voltage-sensitive sodium channel inhibition by the spider toxin, Huwentoxin-IV (-TRTX-Hh2a)."
  },
  {
    "id": "2M50",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2013-06-19",
    "note": "Analysis of the structural and molecular basis of voltage-sensitive sodium channel inhibition by the spider toxin, Huwentoxin-IV (-TRTX-Hh2a)."
  },
  {
    "id": "2M5X",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2014-03-12",
    "note": "Novel method of protein purification for structural research. Example of ultra high resolution structure of SPI-2 inhibitor by X-ray and NMR spectroscopy."
  },
  {
    "id": "2M61",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2014-04-16",
    "note": "NMR and Mass Spectrometric Studies of M-2 Branch Mini-M Conotoxins from Indian Cone Snails"
  },
  {
    "id": "2M62",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2014-04-16",
    "note": "Solution Structure of a Chi/Lambda Conotoxin fron Conus araneosus"
  },
  {
    "id": "2M6A",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2014-04-02",
    "note": "NMR spatial structure of the antimicrobial peptide Tk-Amp-X2"
  },
  {
    "id": "2M6C",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2013-10-30",
    "note": "NMR solution structure of cis (minor) form of In936 in water"
  },
  {
    "id": "2M6D",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2013-10-30",
    "note": "NMR solution structure of trans (major) form of In936 in water"
  },
  {
    "id": "2M6E",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2013-10-30",
    "note": "NMR solution structure of cis (minor) form of In936 in Methanol"
  },
  {
    "id": "2M6F",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2013-10-30",
    "note": "NMR solution structure of trans (major) form of In936 in Methanol"
  },
  {
    "id": "2M6G",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2013-10-30",
    "note": "Solution structure of cis(C2-P3) trans (D5-P6) form of lO959 in water"
  },
  {
    "id": "2M6H",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2013-10-30",
    "note": "Solution structure of trans(C2-P3) trans (D5-P6) of LO959 in methanol"
  },
  {
    "id": "2M6J",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2014-04-09",
    "note": "Structure of a vertebrate toxin from the badge huntsman spider"
  },
  {
    "id": "2M77",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2014-02-05",
    "note": "[Asp2]RTD-1"
  },
  {
    "id": "2M78",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2014-02-05",
    "note": "[Asp11]RTD-1"
  },
  {
    "id": "2M79",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2014-02-05",
    "note": "[Asp2,11]RTD-1"
  },
  {
    "id": "2M7I",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2013-09-11",
    "note": "Solution structure of a Beta-Hairpin Peptidomimetic antibiotic that targets LptD in Pseudomonas sp."
  },
  {
    "id": "2M7J",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2013-09-11",
    "note": "Solution Structure of a Beta-Hairpin Peptidomimetic antibiotic that target LptD in Pseudomonas sp."
  },
  {
    "id": "2M7P",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2013-08-14",
    "note": "RXFP1 utilises hydrophobic moieties on a signalling surface of the LDLa module to mediate receptor activation"
  },
  {
    "id": "2M7T",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2014-05-07",
    "note": "Solution NMR Structure of Engineered Cystine Knot Protein 2.5D"
  },
  {
    "id": "2M8V",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2014-05-21",
    "note": "Solution Structure and Activity Study of Bovicin HJ50, a Particular Type AII Lantibiotic"
  },
  {
    "id": "2M96",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2014-06-04",
    "note": "Solution NMR structure of the RXFP2 LDLa module"
  },
  {
    "id": "2M9L",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2014-04-30",
    "note": "Solution structure of protoxin-1"
  },
  {
    "id": "2M9O",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2013-11-20",
    "note": "Solution structure of kalata B7"
  },
  {
    "id": "2MAU",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2014-07-23",
    "note": "Solution structure of alpha-amylase inhibitor wrightide R1 (wR1) peptide from Wrightia religiosa"
  },
  {
    "id": "2MBD",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2014-01-15",
    "note": "Lasiocepsin"
  },
  {
    "id": "2MCR",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2014-07-02",
    "note": "Solution structure of ShK-like immunomodulatory peptide from Brugia malayi (filarial worm)"
  },
  {
    "id": "2MD6",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2014-03-05",
    "note": "NMR SOLUTION STRUCTURE OF ALPHA CONOTOXIN LO1A FROM Conus longurionis"
  },
  {
    "id": "2MDB",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2014-02-19",
    "note": "Tachyplesin I in the presence of lipopolysaccharide"
  },
  {
    "id": "2MDL",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2014-09-17",
    "note": "Structure and NMR assignments of Scylla Serrata anti lipopolysaccharide Factor-24 (SsALF-24)"
  },
  {
    "id": "2MDQ",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2014-02-12",
    "note": "A Novel 4/7-Conotoxin LvIA from Conus lividus that Selectively Blocks 3 2 vs. 6/3 2 3 Nicotinic Acetylcholine Receptors"
  },
  {
    "id": "2ME7",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2014-05-28",
    "note": "NMR solution structure of the GS-TAMAPIN MUTATION R6A"
  },
  {
    "id": "2MEL",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2014-05-28",
    "note": "NMR solution structure of the GS-TAMAPIN MUTATION R7A"
  },
  {
    "id": "2MEN",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2014-05-28",
    "note": "NMR solution structure of the GS-TAMAPIN MUTATION R13A"
  },
  {
    "id": "2MEO",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2014-05-28",
    "note": "NMR solution structure of the double GS-Tamapin mutation R6A/R7A"
  },
  {
    "id": "2MF3",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2014-10-15",
    "note": "SGTX-Sf1a"
  },
  {
    "id": "2MFP",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2013-11-27",
    "note": "Solution structure of the circular g-domain analog from the wheat metallothionein Ec-1"
  },
  {
    "id": "2MFS",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2014-11-12",
    "note": "Solution NMR structure of the cactus-derived antimicrobial peptide Ep-AMP1"
  },
  {
    "id": "2MFX",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2013-12-18",
    "note": "Non-reducible analogues of alpha-conotoxin Vc1.1: [2,8]-cis dicarba Vc1.1"
  },
  {
    "id": "2MFY",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2013-12-18",
    "note": "Non-reducible analogues of alpha-conotoxin Vc1.1: [2,8]-trans dicarba Vc1.1"
  },
  {
    "id": "2MG6",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2013-12-18",
    "note": "Non-reducible analogues of alpha-conotoxin Vc1.1: [3,16]-trans dicarba Vc1.1"
  },
  {
    "id": "2MG9",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2014-04-02",
    "note": "Truncated EGF-A"
  },
  {
    "id": "2MGO",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2014-10-22",
    "note": "NMR solution structure of oxytocin"
  },
  {
    "id": "2MH1",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2014-01-22",
    "note": "Enzymatic cyclisation of kalata B1 using sortase A"
  },
  {
    "id": "2MI1",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2014-05-07",
    "note": "Somatostatin-14 solution structure in 5% D-mannitol"
  },
  {
    "id": "2MI9",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2015-01-14",
    "note": "Solution structure of allatide C4, conformation 1"
  },
  {
    "id": "2MIA",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2015-01-14",
    "note": "Solution structure of allatide C4, conformation 2"
  },
  {
    "id": "2MIJ",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2014-03-12",
    "note": "NMR structure of the S-linked glycopeptide sublancin 168"
  },
  {
    "id": "2MIT",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2014-09-17",
    "note": "Solution structure of oxidized dimeric form of human defensin 5"
  },
  {
    "id": "2MIX",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2014-12-03",
    "note": "Structure of a novel venom peptide toxin from sample limited terebrid marine snail"
  },
  {
    "id": "2MJK",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2014-01-22",
    "note": "Nmr structure of hen egg beta-defensin gallin (chicken ovo-defensin)"
  },
  {
    "id": "2ML7",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2015-03-04",
    "note": "Ginsentides: Characterization, Structure and Application of a New Class of Highly Stable Cystine Knot Peptides in Ginseng"
  },
  {
    "id": "2MLA",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2015-02-25",
    "note": "Solution structure of BmKTX-D19K"
  },
  {
    "id": "2MLD",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2015-02-25",
    "note": "Solution structure of BmKTX-D19K/K6D"
  },
  {
    "id": "2MLI",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2014-08-20",
    "note": "NMR structure of B25-(alpha, beta)-dehydro-phenylalanine insulin"
  },
  {
    "id": "2MM5",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2014-11-26",
    "note": "solution structure of alpha-amylase inhibitor peptide aS4 from Allatide scholaris"
  },
  {
    "id": "2MM6",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2014-11-26",
    "note": "solution structure of alpha amylase inhibitor peptide aS1 from Allatide scholaris"
  },
  {
    "id": "2MN1",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2015-05-27",
    "note": "Solution Structure of kalata B1[W23WW]"
  },
  {
    "id": "2MN3",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2014-09-17",
    "note": "Structure of Platypus 'Intermediate' Defensin-like Peptide (Int-DLP)"
  },
  {
    "id": "2MPG",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2014-06-11",
    "note": "Solution structure of the [AibB8,LysB28,ProB29]-insulin analogue"
  },
  {
    "id": "2MPI",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2014-12-24",
    "note": "Solution structure of B24G insulin"
  },
  {
    "id": "2MPQ",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2015-03-25",
    "note": "Solution structure of the sodium channel toxin Hd1a"
  },
  {
    "id": "2MQF",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2015-07-15",
    "note": "NMR structure of spider toxin-TRTX-Hhn2b"
  },
  {
    "id": "2MQU",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2014-11-05",
    "note": "Spatial structure of Hm-3, a membrane-active spider toxin affecting sodium channels"
  },
  {
    "id": "2MSF",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2015-08-26",
    "note": "NMR SOLUTION STRUCTURE OF SCORPION VENOM TOXIN Ts11 (TsPep1) FROM Tityus serrulatus"
  },
  {
    "id": "2MSO",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2015-07-22",
    "note": "Solution study of cGm9a"
  },
  {
    "id": "2MSQ",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2015-07-22",
    "note": "Solution study of cBru9a"
  },
  {
    "id": "2MT7",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2015-08-19",
    "note": "Solution structure of spider-venom peptide Hs1a"
  },
  {
    "id": "2MT8",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2015-10-14",
    "note": "Solution structure MTAbl13, a grafted MCoTI-II"
  },
  {
    "id": "2MTM",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2015-09-02",
    "note": "NMR structure of RCB-1 peptide"
  },
  {
    "id": "2MTO",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2014-11-26",
    "note": "Non-reducible analogues of alpha-conotoxin RgIA: [2,8]-cis dicarba RgIA"
  },
  {
    "id": "2MTT",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2014-11-26",
    "note": "Non-reducible analogues of alpha-conotoxin RgIA: [3,12]-cis dicarba RgIA"
  },
  {
    "id": "2MTU",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2014-11-26",
    "note": "Non-reducible analogues of alpha-conotoxin RgIA: [3,12]-trans dicarba RgIA"
  },
  {
    "id": "2MUB",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2014-12-24",
    "note": "Solution structure of the analgesic sea anemone peptide APETx2"
  },
  {
    "id": "2MUH",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2014-12-10",
    "note": "High-resolution NMR structure of the protegrin-2 docked to DPC Micelles"
  },
  {
    "id": "2MUN",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2015-06-24",
    "note": "Solution structure of mu-SLPTX3-Ssm6a"
  },
  {
    "id": "2MV1",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2015-02-04",
    "note": "Solution NMR structure of Human Relaxin-2"
  },
  {
    "id": "2MVA",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2015-10-14",
    "note": "Solution structure of the toxin, RhTx"
  },
  {
    "id": "2MVC",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2014-12-10",
    "note": "Solution structure of human insulin at pH 1.9"
  },
  {
    "id": "2MVD",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2014-12-10",
    "note": "Solution structure of [GlnB22]-insulin mutant at pH 1.9"
  },
  {
    "id": "2MVI",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2014-12-10",
    "note": "Structure of the S-glycosylated bacteriocin ASM1"
  },
  {
    "id": "2MVT",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2015-09-23",
    "note": "Solution structure of scoloptoxin SSD609 from Scolopendra mutilans"
  },
  {
    "id": "2MW0",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2015-12-23",
    "note": "Kalata B7 Ser mutant"
  },
  {
    "id": "2MW7",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2015-09-23",
    "note": "Solution NMR structure of a novel cysteine framework containing Conus peptide Mo3964"
  },
  {
    "id": "2MWJ",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2015-09-02",
    "note": "Solution structure of Family 1 Carbohydrate-Binding Module from Trichoderma reesei Cel7A with O-mannose residues at Thr1 and Ser3"
  },
  {
    "id": "2MWK",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2015-09-02",
    "note": "Family 1 Carbohydrate-Binding Module from Trichoderma reesei Cel7A with O-mannose residues at Thr1, Ser3, and Ser14"
  },
  {
    "id": "2MXM",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2015-06-03",
    "note": "NMR solution structure of TRTX-Tp1a from the tarantula Thrixopelma pruriens"
  },
  {
    "id": "2MXO",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2015-12-23",
    "note": "NMR structure of spider toxin- G7W/N24S mutant of TRTX-Hhn2b"
  },
  {
    "id": "2MXQ",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2015-04-22",
    "note": "The solution structure of DEFA1, a highly potent antimicrobial peptide from the horse"
  },
  {
    "id": "2MYH",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2015-12-09",
    "note": "Omega-Tbo-IT1: selective inhibitor of insect calcium channels isolated from Tibellus oblongus spider venom"
  },
  {
    "id": "2MZ4",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2016-02-17",
    "note": "Solution Structure of mu-SLPTX-Ssm6a"
  },
  {
    "id": "2MZ6",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2015-03-25",
    "note": "NMR structure of Protegrin-3 (PG3) in the presence of DPC micelles"
  },
  {
    "id": "2N07",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2016-04-13",
    "note": "Design of a Highly Stable Disulfide-Deleted Mutant of Analgesic Cyclic alpha-Conotoxin Vc1.1"
  },
  {
    "id": "2N1N",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2016-03-02",
    "note": "Solution structure of VSTx1"
  },
  {
    "id": "2N1S",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2016-06-29",
    "note": "Spatial Structure of Antimicrobial Peptide SmAMP2-2c from Seeds of Stellaria media"
  },
  {
    "id": "2N24",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2016-02-03",
    "note": "Solution NMR structure of Contryphan-Vc1"
  },
  {
    "id": "2N2G",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2016-06-08",
    "note": "SOLUTION NMR STRUCTURE of ASTEROPSIN F FROM MARINE SPONGE ASTEROPUS"
  },
  {
    "id": "2N2S",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2016-04-27",
    "note": "NMR solution structure of the pheromone Ep-1 from Euplotes petzi"
  },
  {
    "id": "2N2V",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2016-02-03",
    "note": "Solution structure of [B26-B29 triazole cross-linked]-insulin analogue at pH 1.9"
  },
  {
    "id": "2N2W",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2016-02-03",
    "note": "Solution structure of [B26-B29 triazole cross-linked]-insulin analogue at pH 8.0"
  },
  {
    "id": "2N2X",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2016-02-03",
    "note": "Solution structure of [GlyB24,B27-B29 triazole cross-linked]-insulin analogue at pH 1.9"
  },
  {
    "id": "2N3P",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2016-06-08",
    "note": "SOLUTION NMR STRUCTURE of ASTEROPSIN G from MARINE SPONGE ASTEROPUS"
  },
  {
    "id": "2N4K",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2015-12-02",
    "note": "Solution Structure of Enterocin HF, an Antilisterial Bacteriocin Produced by Enterococcus faecium M3K31"
  },
  {
    "id": "2N5K",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2016-03-16",
    "note": "Regnase-1 Zinc finger domain"
  },
  {
    "id": "2N5Q",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2016-07-27",
    "note": "Solution structure of cystein-rich peptide jS1 from Jasminum sambac"
  },
  {
    "id": "2N6B",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2015-12-16",
    "note": "NMR structure of the de-novo toxin Hui1"
  },
  {
    "id": "2N6N",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2016-08-31",
    "note": "Structure Determination for spider toxin, U4-agatoxin-Ao1a"
  },
  {
    "id": "2N6O",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2016-09-07",
    "note": "Structure of spider-venom peptide Hm1a"
  },
  {
    "id": "2N71",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2016-09-07",
    "note": "NMR structure of CmPI-II, a serin protease inhibitor isolated from mollusk Cenchitis muricatus"
  },
  {
    "id": "2N7F",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2016-04-06",
    "note": "NMR solution structure of muO-conotoxin MfVIA"
  },
  {
    "id": "2N8B",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2016-11-02",
    "note": "Cysteine knot with integrin avb6 cancer recognition site"
  },
  {
    "id": "2N8C",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2016-11-02",
    "note": "Cystein knot with 2fp integrin avb6 cancer recognition site"
  },
  {
    "id": "2N8E",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2016-08-24",
    "note": "Three-dimensional structure of cyclic PVIIA"
  },
  {
    "id": "2N8H",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2016-02-03",
    "note": "Structural basis for the inhibition of voltage-gated sodium channels with conotoxin-muOxi-GVIIJ"
  },
  {
    "id": "2N9T",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2016-07-06",
    "note": "NMR solution structure of ProTx-II"
  },
  {
    "id": "2N9Z",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2016-03-02",
    "note": "Solution structure of K1 lobe of double-knot toxin"
  },
  {
    "id": "2NAJ",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2016-03-02",
    "note": "Solution structure of K2 lobe of double-knot toxin"
  },
  {
    "id": "2NAV",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2016-05-04",
    "note": "NMR solution structure of Ex-4[1-16]/pl14a"
  },
  {
    "id": "2NAW",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2016-05-18",
    "note": "NMR solution structure of Exendin-4/conotoxin chimera (Ex-4[1-27]/pl14a)"
  },
  {
    "id": "2NAY",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2016-02-03",
    "note": "The structure of the Bt1.8 peptide synthesized by solid-phase method"
  },
  {
    "id": "2NB2",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2017-01-25",
    "note": "Nigellin-1.1"
  },
  {
    "id": "2NB5",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2016-06-29",
    "note": "NMR solution structure of PawS Derived Peptide 9 (PDP-9)"
  },
  {
    "id": "2NB6",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2016-06-29",
    "note": "NMR solution structure of PawS Derived Peptide 10 (PDP-10)"
  },
  {
    "id": "2NBC",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2017-01-11",
    "note": "Resonance assignments and structure determination of poneritoxin, omega-PONTX-Ae1a, from Anochetus emarginatus"
  },
  {
    "id": "2NC7",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2017-04-19",
    "note": "Antimicrobial peptide protegrin PG-5"
  },
  {
    "id": "2ND2",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2016-09-21",
    "note": "Solution structure of the de novo mini protein gHHH_06"
  },
  {
    "id": "2ND3",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2016-09-21",
    "note": "Solution structure of the de novo mini protein gEEH_04"
  },
  {
    "id": "2NDB",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2017-09-13",
    "note": "NMR structure of omega-agatoxin IVA in DPC micelles"
  },
  {
    "id": "2NDD",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2017-05-31",
    "note": "Structure-activity relationship of peptide toxin HelaTx1: a new kappa-KTx subfamily affecting K+ channel"
  },
  {
    "id": "2NDI",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2017-06-07",
    "note": "Solution structure of the toxin ISTX-I from Ixodes scapularis"
  },
  {
    "id": "2NDL",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2016-12-07",
    "note": "NMR solution structure of PawS Derived Peptide 22 (PDP-22)"
  },
  {
    "id": "2NDM",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2016-08-24",
    "note": "NMR solution structure of PawS Derived Peptide 21 (PDP-21)"
  },
  {
    "id": "2NDN",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2016-08-24",
    "note": "NMR solution structure of PawS Derived Peptide 20 (PDP-20)"
  },
  {
    "id": "2NLB",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.85 \u00c5",
    "date": "2006-10-31",
    "note": "Human beta-defensin-1 (Mutant Asn4Ala)"
  },
  {
    "id": "2NLC",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.65 \u00c5",
    "date": "2006-10-31",
    "note": "Human beta-defensin-1 (mutant Ser8Ala)"
  },
  {
    "id": "2NLD",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.49 \u00c5",
    "date": "2006-10-31",
    "note": "Human beta-defensin-1 (Mutant Gln11Ala)"
  },
  {
    "id": "2NLE",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.35 \u00c5",
    "date": "2006-10-31",
    "note": "Human beta-defensin-1 (Mutant Gln11Ala)"
  },
  {
    "id": "2NLF",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.45 \u00c5",
    "date": "2006-10-31",
    "note": "Human beta-defensin-1 (Mutant Leu13Glu)"
  },
  {
    "id": "2NLG",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.65 \u00c5",
    "date": "2006-10-31",
    "note": "Human beta-defensin-1 (Mutant Lys22Glu)"
  },
  {
    "id": "2NLH",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.85 \u00c5",
    "date": "2006-10-31",
    "note": "Human beta-defensin-1 (Mutant GLN24ALA)"
  },
  {
    "id": "2NLP",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.85 \u00c5",
    "date": "2006-10-31",
    "note": "Human beta-defensin-1 (Mutant Gln24Glu)"
  },
  {
    "id": "2NLQ",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.80 \u00c5",
    "date": "2006-10-31",
    "note": "Human beta-defensin-1 (Mutant Lys31Ala)"
  },
  {
    "id": "2NLS",
    "method": "X-RAY DIFFRACTION",
    "resolution": "0.98 \u00c5",
    "date": "2006-10-31",
    "note": "Human beta-defensin-1 (Mutant Gln24Ala)"
  },
  {
    "id": "2NPP",
    "method": "X-RAY DIFFRACTION",
    "resolution": "3.30 \u00c5",
    "date": "2006-12-12",
    "note": "Structure of the Protein Phosphatase 2A Holoenzyme"
  },
  {
    "id": "2NS3",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2007-09-25",
    "note": "Solution structure of ribbon BuIA"
  },
  {
    "id": "2NS4",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2007-01-30",
    "note": "Solution structure of a Beta-Hairpin Peptidomimetic Inhibitor of the BIV Tat-Tar Interaction"
  },
  {
    "id": "2NVJ",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2007-10-02",
    "note": "NMR structures of transmembrane segment from subunit a from the yeast proton V-ATPase"
  },
  {
    "id": "2NWN",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.15 \u00c5",
    "date": "2007-10-16",
    "note": "New Pharmacophore for Serine Protease Inhibition Revealed by Crystal Structure of Human Urokinase-type Plasminogen Activator Complexed with a Cyclic Peptidyl Inhibitor, upain-1"
  },
  {
    "id": "2NX6",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2007-10-02",
    "note": "Structure of NOWA cysteine rich domain 6"
  },
  {
    "id": "2NX7",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2007-10-02",
    "note": "Structure of NOWA cysteine rich domain 8"
  },
  {
    "id": "2NY8",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2007-11-13",
    "note": "NMR structure of antibacterial defensin DEF-AAA from the insect anopheles gambiae"
  },
  {
    "id": "2NY9",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2007-11-13",
    "note": "NMR structure of DEF-ABB, a mutant of anopheles defensin DEF-AAA"
  },
  {
    "id": "2NYL",
    "method": "X-RAY DIFFRACTION",
    "resolution": "3.80 \u00c5",
    "date": "2006-12-12",
    "note": "Crystal structure of Protein Phosphatase 2A (PP2A) holoenzyme with the catalytic subunit carboxyl terminus truncated"
  },
  {
    "id": "2NYM",
    "method": "X-RAY DIFFRACTION",
    "resolution": "3.60 \u00c5",
    "date": "2006-12-12",
    "note": "Crystal Structure of Protein Phosphatase 2A (PP2A) with C-terminus truncated catalytic subunit"
  },
  {
    "id": "2NZ3",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2007-11-13",
    "note": "NMR structure of DEF-AcAA, a mutant of anopheles defensin DEF-AAA"
  },
  {
    "id": "2O9Q",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.70 \u00c5",
    "date": "2007-12-25",
    "note": "The crystal structure of Bovine Trypsin complexed with a small inhibition peptide ORB2K"
  },
  {
    "id": "2OJU",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.40 \u00c5",
    "date": "2008-01-22",
    "note": "X-ray structure of complex of human cyclophilin J with cyclosporin A"
  },
  {
    "id": "2OLY",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.70 \u00c5",
    "date": "2007-12-04",
    "note": "Structure of human insulin in presence of urea at pH 7.0"
  },
  {
    "id": "2OLZ",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.70 \u00c5",
    "date": "2007-12-04",
    "note": "Structure of human insulin in presence of thiocyanate at pH 7.0"
  },
  {
    "id": "2OM0",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.05 \u00c5",
    "date": "2007-12-04",
    "note": "Structure of human insulin in presence of urea at pH 6.5"
  },
  {
    "id": "2OM1",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.97 \u00c5",
    "date": "2007-12-04",
    "note": "Structure of human insulin in presence of thiocyanate at pH 6.5"
  },
  {
    "id": "2OMG",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.52 \u00c5",
    "date": "2007-03-27",
    "note": "Structure of human insulin cocrystallized with protamine and urea"
  },
  {
    "id": "2OMH",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.36 \u00c5",
    "date": "2007-03-27",
    "note": "Structure of human insulin cocrystallized with ARG-12 peptide in presence of urea"
  },
  {
    "id": "2OMI",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.24 \u00c5",
    "date": "2007-03-27",
    "note": "Structure of human insulin cocrystallized with protamine"
  },
  {
    "id": "2OQ9",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2007-12-18",
    "note": "Structure of the non-canonical Mcol5 of Hydra nematocysts"
  },
  {
    "id": "2OQJ",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.80 \u00c5",
    "date": "2008-01-15",
    "note": "Crystal structure analysis of Fab 2G12 in complex with peptide 2G12.1"
  },
  {
    "id": "2OSL",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.60 \u00c5",
    "date": "2007-04-10",
    "note": "Crystal structure of Rituximab Fab in complex with an epitope peptide"
  },
  {
    "id": "2OTQ",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2007-12-25",
    "note": "Structure of the antimicrobial peptide cyclo(RRWFWR) bound to DPC micelles"
  },
  {
    "id": "2OX2",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2007-12-25",
    "note": "Structure of the cantionic, antimicrobial hexapeptide cyclo(RRWWFR) bound to DPC-micelles"
  },
  {
    "id": "2P4L",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2007-09-25",
    "note": "Structure and sodium channel activity of an excitatory I1-superfamily conotoxin"
  },
  {
    "id": "2P7R",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2008-01-15",
    "note": "Cyclic pentapeptide which inhibits Hantavirus"
  },
  {
    "id": "2PLH",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.50 \u00c5",
    "date": "1996-04-03",
    "note": "STRUCTURE OF ALPHA-1-PUROTHIONIN AT ROOM TEMPERATURE AND 2.8 ANGSTROMS RESOLUTION"
  },
  {
    "id": "2PLX",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.56 \u00c5",
    "date": "2007-08-07",
    "note": "Trypsin complexed to a synthetic peptide from Veronica hederifolia"
  },
  {
    "id": "2PLZ",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.36 \u00c5",
    "date": "2007-05-29",
    "note": "Arg-modified human beta-defensin 1 (HBD1)"
  },
  {
    "id": "2PM1",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.60 \u00c5",
    "date": "2007-05-29",
    "note": "Derivative of human alpha-defensin 1 (HNP1)"
  },
  {
    "id": "2PM4",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.95 \u00c5",
    "date": "2007-05-29",
    "note": "Human alpha-defensin 1 (multiple Arg->Lys mutant)"
  },
  {
    "id": "2PM5",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.40 \u00c5",
    "date": "2007-05-29",
    "note": "Human alpha-defensin 1 derivative (HNP1)"
  },
  {
    "id": "2PO8",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2008-05-06",
    "note": "The structure of a two-disulfide intermediate of MCoTI-II"
  },
  {
    "id": "2POY",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.80 \u00c5",
    "date": "2007-05-08",
    "note": "Cryptosporidium parvum cyclophilin type peptidyl-prolyl cis-trans isomerase cgd2_4120 in complex with cyclosporin A"
  },
  {
    "id": "2PTA",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1997-12-10",
    "note": "PANDINUS TOXIN K-A (PITX-KA) FROM PANDINUS IMPERATOR, NMR, 20 STRUCTURES"
  },
  {
    "id": "2Q3I",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.50 \u00c5",
    "date": "2007-06-12",
    "note": "Crystal structure of the D10-P3/IQN17 complex: a D-peptide inhibitor of HIV-1 entry bound to the GP41 coiled-coil pocket"
  },
  {
    "id": "2QIU",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.00 \u00c5",
    "date": "2008-02-26",
    "note": "Structure of Human Arg-Insulin"
  },
  {
    "id": "2QKI",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.40 \u00c5",
    "date": "2007-08-14",
    "note": "Human C3c in complex with the inhibitor compstatin"
  },
  {
    "id": "2R34",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.25 \u00c5",
    "date": "2008-09-02",
    "note": "Crystal structure of MN human arg-insulin"
  },
  {
    "id": "2R35",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.08 \u00c5",
    "date": "2008-09-02",
    "note": "Crystal structure of RB human arg-insulin"
  },
  {
    "id": "2R36",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.00 \u00c5",
    "date": "2008-09-02",
    "note": "Crystal structure of ni human ARG-insulin"
  },
  {
    "id": "2R3C",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.73 \u00c5",
    "date": "2007-10-02",
    "note": "Structure of the gp41 N-peptide in complex with the HIV entry inhibitor PIE1"
  },
  {
    "id": "2R5B",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.00 \u00c5",
    "date": "2007-10-02",
    "note": "Structure of the gp41 N-trimer in complex with the HIV entry inhibitor PIE7"
  },
  {
    "id": "2R5D",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.66 \u00c5",
    "date": "2007-10-02",
    "note": "Structure of the gp41 N-trimer in complex with the HIV entry inhibitor PIE7"
  },
  {
    "id": "2RMA",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.10 \u00c5",
    "date": "1995-02-07",
    "note": "Crystal structures of cyclophilin A complexed with cyclosporin A and N-methyl-4-[(E)-2-butenyl]-4,4-dimethylthreonine cyclosporin A"
  },
  {
    "id": "2RMB",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.10 \u00c5",
    "date": "1995-02-07",
    "note": "Crystal structures of cyclophilin A complexed with cyclosporin A and N-methyl-4-[(E)-2-butenyl]-4,4-dimethylthreonine cyclosporin A"
  },
  {
    "id": "2RMC",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.64 \u00c5",
    "date": "1995-02-14",
    "note": "Crystal structure of murine cyclophilin C complexed with immunosuppressive drug cyclosporin A"
  },
  {
    "id": "2RN5",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2008-10-28",
    "note": "Humal Insulin Mutant B31Lys-B32Arg"
  },
  {
    "id": "2RNL",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2009-01-20",
    "note": "Solution structure of the EGF-like domain from human Amphiregulin"
  },
  {
    "id": "2ROO",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2009-04-07",
    "note": "Solution structure of Magi4, a spider toxin from Macrothele gigas"
  },
  {
    "id": "2RPJ",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2009-03-24",
    "note": "Solution structure of Fn14 CRD domain"
  },
  {
    "id": "2RQZ",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2010-10-13",
    "note": "Structure of sugar modified epidermal growth factor-like repeat 12 of mouse Notch-1 receptor"
  },
  {
    "id": "2RR0",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2010-10-13",
    "note": "Structure of epidermal growth factor-like repeat 12 of mouse Notch-1 receptor"
  },
  {
    "id": "2RR2",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2010-10-13",
    "note": "Structure of O-fucosylated epidermal growth factor-like repeat 12 of mouse Notch-1 receptor"
  },
  {
    "id": "2RTV",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2014-02-19",
    "note": "Tachyplesin I in water"
  },
  {
    "id": "2RTY",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2014-04-23",
    "note": "Solution structure of navitoxin"
  },
  {
    "id": "2RTZ",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2014-10-22",
    "note": "Solution structure of MarkTX-7"
  },
  {
    "id": "2RU0",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2014-10-22",
    "note": "Solution structure of actinomycesin"
  },
  {
    "id": "2RU2",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2014-10-22",
    "note": "NMR solution structure of [G5,T7,S9]-oxytocin"
  },
  {
    "id": "2SH1",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1991-10-15",
    "note": "SOLUTION STRUCTURE OF NEUROTOXIN I FROM THE SEA ANEMONE STICHODACTYLA HELIANTHUS. A NUCLEAR MAGNETIC RESONANCE, DISTANCE GEOMETRY AND RESTRAINED MOLECULAR DYNAMICS STUDY"
  },
  {
    "id": "2SOC",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1997-04-21",
    "note": "NMR STUDY OF THE BACKBONE CONFORMATIONAL EQUILIBRIA OF SANDOSTATIN, TWO REPRESENTATIVE MINIMUM ENERGY PARTIALLY HELICAL STRUCTURES"
  },
  {
    "id": "2STA",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.80 \u00c5",
    "date": "2000-01-19",
    "note": "ANIONIC SALMON TRYPSIN IN COMPLEX WITH SQUASH SEED INHIBITOR (CUCURBITA MAXIMA TRYPSIN INHIBITOR I)"
  },
  {
    "id": "2STB",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.80 \u00c5",
    "date": "2000-01-19",
    "note": "ANIONIC SALMON TRYPSIN IN COMPLEX WITH SQUASH SEED INHIBITOR (CUCURBITA PEPO TRYPSIN INHIBITOR II)"
  },
  {
    "id": "2TCI",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.80 \u00c5",
    "date": "1996-01-29",
    "note": "X-RAY CRYSTALLOGRAPHIC STUDIES ON HEXAMERIC INSULINS IN THE PRESENCE OF HELIX-STABILIZING AGENTS, THIOCYANATE, METHYLPARABEN AND PHENOL"
  },
  {
    "id": "2TGF",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1993-04-15",
    "note": "THE SOLUTION STRUCTURE OF HUMAN TRANSFORMING GROWTH FACTOR ALPHA"
  },
  {
    "id": "2UVS",
    "method": "SOLID-STATE NMR",
    "resolution": "N/A",
    "date": "2008-05-27",
    "note": "High Resolution Solid-state NMR structure of Kaliotoxin"
  },
  {
    "id": "2UZ6",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.40 \u00c5",
    "date": "2007-08-07",
    "note": "AChBP-targeted a-conotoxin correlates distinct binding orientations with nAChR subtype selectivity."
  },
  {
    "id": "2V1V",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2007-06-19",
    "note": "3D STRUCTURE OF THE M8L MUTANT OF SQUASH TRYPSIN INHIBITOR CMTI-I"
  },
  {
    "id": "2V9B",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.05 \u00c5",
    "date": "2008-06-17",
    "note": "X-ray structure of viscotoxin B2 from Viscum album"
  },
  {
    "id": "2VJZ",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.80 \u00c5",
    "date": "2008-09-16",
    "note": "Crystal structure form ultalente insulin microcrystals"
  },
  {
    "id": "2VK0",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.20 \u00c5",
    "date": "2008-09-16",
    "note": "Crystal structure form ultalente insulin microcrystals"
  },
  {
    "id": "2VU8",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.80 \u00c5",
    "date": "2008-12-23",
    "note": "Crystal structure of an insect inhibitor with a fungal trypsin"
  },
  {
    "id": "2VUM",
    "method": "X-RAY DIFFRACTION",
    "resolution": "3.40 \u00c5",
    "date": "2008-06-17",
    "note": "Alpha-amanitin inhibited complete RNA polymerase II elongation complex"
  },
  {
    "id": "2VUU",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.80 \u00c5",
    "date": "2008-07-29",
    "note": "Crystal structure of NADP-bound NmrA-AreA zinc finger complex"
  },
  {
    "id": "2W44",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.00 \u00c5",
    "date": "2009-12-22",
    "note": "Structure DeltaA1-A4 insulin"
  },
  {
    "id": "2W9O",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2010-03-31",
    "note": "Solution structure of jerdostatin from Trimeresurus jerdonii"
  },
  {
    "id": "2W9U",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2010-03-31",
    "note": "Solution structure of jerdostatin mutant R24K from Trimeresurus jerdonii"
  },
  {
    "id": "2W9V",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2010-03-31",
    "note": "Solution structure of jerdostatin from Trimeresurus jerdonii with end C-terminal residues N45G46 deleted"
  },
  {
    "id": "2W9W",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2010-03-31",
    "note": "Solution structure of jerdostatin mutant R24K from Trimeresurus jerdonii with end C-terminal residues N45G46 deleted"
  },
  {
    "id": "2WAQ",
    "method": "X-RAY DIFFRACTION",
    "resolution": "3.35 \u00c5",
    "date": "2009-05-19",
    "note": "The complete structure of the archaeal 13-subunit DNA-directed RNA Polymerase"
  },
  {
    "id": "2WB1",
    "method": "X-RAY DIFFRACTION",
    "resolution": "3.52 \u00c5",
    "date": "2009-05-19",
    "note": "The complete structure of the archaeal 13-subunit DNA-directed RNA Polymerase"
  },
  {
    "id": "2WBY",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.60 \u00c5",
    "date": "2009-03-24",
    "note": "Crystal structure of human insulin-degrading enzyme in complex with insulin"
  },
  {
    "id": "2WC0",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.80 \u00c5",
    "date": "2009-03-24",
    "note": "crystal structure of human insulin degrading enzyme in complex with iodinated insulin"
  },
  {
    "id": "2WFJ",
    "method": "X-RAY DIFFRACTION",
    "resolution": "0.75 \u00c5",
    "date": "2009-06-16",
    "note": "Atomic resolution crystal structure of the PPIase domain of human cyclophilin G in complex with cyclosporin A."
  },
  {
    "id": "2WFV",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.85 \u00c5",
    "date": "2010-05-26",
    "note": "Crystal structure of DILP5 variant C4"
  },
  {
    "id": "2WH9",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2010-05-26",
    "note": "Solution structure of GxTX-1E"
  },
  {
    "id": "2WRU",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.57 \u00c5",
    "date": "2010-02-09",
    "note": "Semi-synthetic highly active analogue of human insulin NMeAlaB26-DTI- NH2"
  },
  {
    "id": "2WRV",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.15 \u00c5",
    "date": "2010-02-09",
    "note": "Semi-synthetic highly active analogue of human insulin NMeHisB26-DTI- NH2"
  },
  {
    "id": "2WRW",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.41 \u00c5",
    "date": "2010-02-09",
    "note": "Semi-synthetic highly active analogue of human insulin D-ProB26-DTI- NH2"
  },
  {
    "id": "2WRX",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.50 \u00c5",
    "date": "2010-02-09",
    "note": "Semi-synthetic analogue of human insulin NMeAlaB26-insulin at pH 3.0"
  },
  {
    "id": "2WS0",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.10 \u00c5",
    "date": "2010-02-09",
    "note": "Semi-synthetic analogue of human insulin NMeAlaB26-insulin at pH 7.5"
  },
  {
    "id": "2WS1",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.60 \u00c5",
    "date": "2010-02-09",
    "note": "Semi-synthetic analogue of human insulin NMeTyrB26-insulin in monomer form"
  },
  {
    "id": "2WS4",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.90 \u00c5",
    "date": "2010-02-09",
    "note": "Semi-synthetic analogue of human insulin ProB26-DTI in monomer form"
  },
  {
    "id": "2WS6",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.50 \u00c5",
    "date": "2010-02-09",
    "note": "Semi-synthetic analogue of human insulin NMeTyrB26-insulin in hexamer form"
  },
  {
    "id": "2WS7",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.59 \u00c5",
    "date": "2010-02-09",
    "note": "Semi-synthetic analogue of human insulin ProB26-DTI"
  },
  {
    "id": "2X2C",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.41 \u00c5",
    "date": "2010-03-23",
    "note": "acetyl-CypA:cyclosporine complex"
  },
  {
    "id": "2X7K",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.15 \u00c5",
    "date": "2010-03-23",
    "note": "The crystal structure of PPIL1 in complex with cyclosporine A suggests a binding mode for SKIP"
  },
  {
    "id": "2XJH",
    "method": "X-RAY DIFFRACTION",
    "resolution": "0.92 \u00c5",
    "date": "2011-02-02",
    "note": "Structure and Copper-binding Properties of Methanobactins from Methylosinus trichosporium OB3b"
  },
  {
    "id": "2XJI",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.00 \u00c5",
    "date": "2011-02-02",
    "note": "Structure and Copper-binding Properties of Methanobactins from Methylosinus trichosporium OB3b"
  },
  {
    "id": "2XTT",
    "method": "X-RAY DIFFRACTION",
    "resolution": "0.93 \u00c5",
    "date": "2010-11-10",
    "note": "Bovine trypsin in complex with evolutionary enhanced Schistocerca gregaria protease inhibitor 1 (SGPI-1-P02)"
  },
  {
    "id": "2XUS",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.91 \u00c5",
    "date": "2011-07-27",
    "note": "Crystal Structure of the BRMS1 N-terminal region"
  },
  {
    "id": "2Y0S",
    "method": "X-RAY DIFFRACTION",
    "resolution": "3.80 \u00c5",
    "date": "2011-02-16",
    "note": "Crystal structure of Sulfolobus shibatae RNA polymerase in P21 space group"
  },
  {
    "id": "2Y8S",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.55 \u00c5",
    "date": "2011-08-03",
    "note": "Co-structure of an AMA1 mutant (Y230A) with a surface exposed region of RON2 from Toxoplasma gondii"
  },
  {
    "id": "2Y8T",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.95 \u00c5",
    "date": "2011-08-03",
    "note": "Co-structure of AMA1 with a surface exposed region of RON2 from Toxoplasma gondii"
  },
  {
    "id": "2YEN",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2012-02-08",
    "note": "Solution structure of the skeletal muscle and neuronal voltage gated sodium channel antagonist mu-conotoxin CnIIIC"
  },
  {
    "id": "2Z3S",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2008-04-22",
    "note": "NMR structure of AgTx2-MTX"
  },
  {
    "id": "2Z6W",
    "method": "X-RAY DIFFRACTION",
    "resolution": "0.96 \u00c5",
    "date": "2008-04-29",
    "note": "Crystal structure of human cyclophilin D in complex with cyclosporin A"
  },
  {
    "id": "2Z7F",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.70 \u00c5",
    "date": "2008-08-26",
    "note": "Crystal structure of the complex of human neutrophil elastase with 1/2SLPI"
  },
  {
    "id": "2ZP6",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.56 \u00c5",
    "date": "2008-07-22",
    "note": "Crystal structure of Bovine Insulin (Hexameric form)"
  },
  {
    "id": "3A7Q",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.60 \u00c5",
    "date": "2010-03-23",
    "note": "Structural basis for specific recognition of reelin by its receptors"
  },
  {
    "id": "3AIY",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2000-02-28",
    "note": "R6 HUMAN INSULIN HEXAMER (SYMMETRIC), NMR, REFINED AVERAGE STRUCTURE"
  },
  {
    "id": "3AV9",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.70 \u00c5",
    "date": "2012-01-18",
    "note": "Crystal structures of novel allosteric peptide inhibitors of HIV integrase in the LEDGF binding site"
  },
  {
    "id": "3AVA",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.70 \u00c5",
    "date": "2012-01-18",
    "note": "Crystal structures of novel allosteric peptide inhibitors of HIV integrase in the LEDGF binding site"
  },
  {
    "id": "3AVB",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.85 \u00c5",
    "date": "2012-01-18",
    "note": "Crystal structures of novel allosteric peptide inhibitors of HIV integrase in the LEDGF binding site"
  },
  {
    "id": "3AVF",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.70 \u00c5",
    "date": "2012-01-18",
    "note": "Crystal structures of novel allosteric peptide inhibitors of HIV integrase in the LEDGF binding site"
  },
  {
    "id": "3AVG",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.70 \u00c5",
    "date": "2012-01-18",
    "note": "Crystal structures of novel allosteric peptide inhibitors of HIV integrase in the LEDGF binding site"
  },
  {
    "id": "3AVH",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.88 \u00c5",
    "date": "2012-01-18",
    "note": "Crystal structures of novel allosteric peptide inhibitors of HIV integrase in the LEDGF binding site"
  },
  {
    "id": "3AVI",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.70 \u00c5",
    "date": "2012-02-15",
    "note": "Crystal structures of novel allosteric peptide inhibitors of HIV integrase in the LEDGF binding site"
  },
  {
    "id": "3AVJ",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.70 \u00c5",
    "date": "2012-01-18",
    "note": "Crystal structures of novel allosteric peptide inhibitors of HIV integrase in the LEDGF binding site"
  },
  {
    "id": "3AVK",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.75 \u00c5",
    "date": "2012-01-18",
    "note": "Crystal structures of novel allosteric peptide inhibitors of HIV integrase in the LEDGF binding site"
  },
  {
    "id": "3AVL",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.88 \u00c5",
    "date": "2012-01-18",
    "note": "Crystal structures of novel allosteric peptide inhibitors of HIV integrase in the LEDGF binding site"
  },
  {
    "id": "3AVM",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.88 \u00c5",
    "date": "2012-01-18",
    "note": "Crystal structures of novel allosteric peptide inhibitors of HIV integrase in the LEDGF binding site"
  },
  {
    "id": "3AVN",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.10 \u00c5",
    "date": "2012-01-18",
    "note": "Crystal structures of novel allosteric peptide inhibitors of HIV integrase in the LEDGF binding site"
  },
  {
    "id": "3AX3",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.10 \u00c5",
    "date": "2011-07-06",
    "note": "Crystal structure of rat TOM20-ALDH presequence complex: a complex (form2) between Tom20 and a disulfide-bridged presequence peptide containing D-Cys and L-Cys at the i and i+3 positions."
  },
  {
    "id": "3AX5",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.20 \u00c5",
    "date": "2011-07-06",
    "note": "Crystal structure of rat TOM20-ALDH presequence complex: A complex (form1) between Tom20 and a disulfide-bridged presequence peptide containing D-Cys and L-Cys at the i and i+3 positions."
  },
  {
    "id": "3B1J",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.20 \u00c5",
    "date": "2012-01-11",
    "note": "Crystal structure of Glyceraldehyde-3-Phosphate Dehydrogenase complexed with CP12 in the presence of copper from Synechococcus elongatus"
  },
  {
    "id": "3B1K",
    "method": "X-RAY DIFFRACTION",
    "resolution": "3.30 \u00c5",
    "date": "2012-01-11",
    "note": "Crystal structure of Glyceraldehyde-3-Phosphate Dehydrogenase complexed with CP12 in the absence of copper from Synechococcus elongatus"
  },
  {
    "id": "3BBG",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1998-06-17",
    "note": "MULTI-CONFORMER STRUCTURE OF RAGWEED POLLEN ALLERGEN FROM AMBROSIA TRIFIDA V, NMR, 2 STRUCTURES"
  },
  {
    "id": "3BKY",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.61 \u00c5",
    "date": "2008-04-29",
    "note": "Crystal Structure of Chimeric Antibody C2H7 Fab in complex with a CD20 Peptide"
  },
  {
    "id": "3BO7",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.35 \u00c5",
    "date": "2008-02-19",
    "note": "Crystal structure of Toxoplasma gondii peptidyl-prolyl cis-trans isomerase, 541.m00136"
  },
  {
    "id": "3BT1",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.80 \u00c5",
    "date": "2008-03-25",
    "note": "Structure of urokinase receptor, urokinase and vitronectin complex"
  },
  {
    "id": "3BT2",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.50 \u00c5",
    "date": "2008-03-25",
    "note": "Structure of urokinase receptor, urokinase and vitronectin complex"
  },
  {
    "id": "3BXQ",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.30 \u00c5",
    "date": "2008-05-20",
    "note": "The structure of a mutant insulin uncouples receptor binding from protein allostery. An electrostatic block to the TR transition"
  },
  {
    "id": "3C8P",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.25 \u00c5",
    "date": "2008-06-17",
    "note": "X-ray structure of Viscotoxin A1 from Viscum album L."
  },
  {
    "id": "3CQZ",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.80 \u00c5",
    "date": "2008-07-22",
    "note": "Crystal structure of 10 subunit RNA polymerase II in complex with the inhibitor alpha-amanitin"
  },
  {
    "id": "3CTI",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1992-04-15",
    "note": "RELAXATION MATRIX REFINEMENT OF THE SOLUTION STRUCTURE OF SQUASH TRYPSIN INHIBITOR"
  },
  {
    "id": "3DPR",
    "method": "X-RAY DIFFRACTION",
    "resolution": "3.50 \u00c5",
    "date": "2009-04-07",
    "note": "Human rhinovirus 2 bound to a concatamer of the VLDL receptor module V3"
  },
  {
    "id": "3DW8",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.85 \u00c5",
    "date": "2008-10-07",
    "note": "Structure of a Protein Phosphatase 2A Holoenzyme with B55 subunit"
  },
  {
    "id": "3E7R",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.00 \u00c5",
    "date": "2009-06-09",
    "note": "X-ray Crystal Structure of Racemic Plectasin"
  },
  {
    "id": "3EXX",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.35 \u00c5",
    "date": "2009-05-19",
    "note": "Structure of the T6 human insulin derivative with nickel at 1.35 A resolution"
  },
  {
    "id": "3FGA",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.70 \u00c5",
    "date": "2009-09-22",
    "note": "Structural Basis of PP2A and Sgo interaction"
  },
  {
    "id": "3FHP",
    "method": "NEUTRON DIFFRACTION",
    "resolution": "N/A",
    "date": "2009-10-20",
    "note": "A neutron crystallographic analysis of a porcine 2Zn insulin at 2.0 A resolution"
  },
  {
    "id": "3FP7",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.46 \u00c5",
    "date": "2009-02-17",
    "note": "Anionic trypsin variant S195A in complex with bovine pancreatic trypsin inhibitor (BPTI) cleaved at the scissile bond (LYS15-ALA16) determined to the 1.46 A resolution limit"
  },
  {
    "id": "3FQ9",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.35 \u00c5",
    "date": "2009-08-04",
    "note": "Design of an insulin analog with enhanced receptor-binding selectivity. Rationale, structure, and therapeutic implications"
  },
  {
    "id": "3G5V",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.00 \u00c5",
    "date": "2010-02-09",
    "note": "Antibodies Specifically Targeting a Locally Misfolded Region of Tumor Associated EGFR"
  },
  {
    "id": "3G5Y",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.59 \u00c5",
    "date": "2010-02-09",
    "note": "Antibodies Specifically Targeting a Locally Misfolded Region of Tumor Associated EGFR"
  },
  {
    "id": "3GKY",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.80 \u00c5",
    "date": "2009-03-24",
    "note": "The Structural Basis of an ER Stress-Associated Bottleneck in a Protein Folding Landscape"
  },
  {
    "id": "3GNY",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.56 \u00c5",
    "date": "2009-07-28",
    "note": "Crystal structure of human alpha-defensin 1 (HNP1)"
  },
  {
    "id": "3GO0",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.56 \u00c5",
    "date": "2009-07-28",
    "note": "Crystal structure of D-enantiomer of human alpha-defensin 1 (D-HNP1)"
  },
  {
    "id": "3GO3",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.10 \u00c5",
    "date": "2009-03-31",
    "note": "Interactions of an echinomycin-DNA complex with manganese(II) ions"
  },
  {
    "id": "3H6C",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.63 \u00c5",
    "date": "2010-03-09",
    "note": "Crystal structure of human alpha-defensin 1 (Mutant Gln22Ala)"
  },
  {
    "id": "3HGZ",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.91 \u00c5",
    "date": "2009-12-08",
    "note": "Crystal structure of human insulin-degrading enzyme in complex with amylin"
  },
  {
    "id": "3HJ2",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.40 \u00c5",
    "date": "2009-10-20",
    "note": "Crystal structure of covalent dimer of HNP1"
  },
  {
    "id": "3HJD",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.65 \u00c5",
    "date": "2009-10-13",
    "note": "X-ray structure of monomeric variant of HNP1"
  },
  {
    "id": "3I3Z",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.60 \u00c5",
    "date": "2010-01-05",
    "note": "Human insulin"
  },
  {
    "id": "3I40",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.85 \u00c5",
    "date": "2010-01-05",
    "note": "Human insulin"
  },
  {
    "id": "3I5W",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.63 \u00c5",
    "date": "2009-07-28",
    "note": "Crystal structure of human alpha-defensin 5 (mutant R13H)"
  },
  {
    "id": "3ILG",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.90 \u00c5",
    "date": "2010-08-11",
    "note": "Crystal structure of humnan insulin Sr+2 complex"
  },
  {
    "id": "3IM3",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.00 \u00c5",
    "date": "2010-02-02",
    "note": "Crystal structure of PKA RI alpha dimerization/docking domain"
  },
  {
    "id": "3INC",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.85 \u00c5",
    "date": "2010-08-18",
    "note": "Crystal structure of human insulin with Ni+2 complex"
  },
  {
    "id": "3INS",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.50 \u00c5",
    "date": "1989-01-09",
    "note": "STRUCTURE OF INSULIN. RESULTS OF JOINT NEUTRON AND X-RAY REFINEMENT"
  },
  {
    "id": "3IR0",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.20 \u00c5",
    "date": "2010-09-01",
    "note": "Crystal Structure of Human Insulin complexed with Cu+2 metal ion"
  },
  {
    "id": "3IUX",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.65 \u00c5",
    "date": "2009-10-27",
    "note": "Crystal structure of human MDM2 in complex with a potent miniature protein inhibitor (18-residues)"
  },
  {
    "id": "3J5L",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "6.60 \u00c5",
    "date": "2014-03-26",
    "note": "Structure of the E. coli 50S subunit with ErmBL nascent chain"
  },
  {
    "id": "3J7Z",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.90 \u00c5",
    "date": "2014-10-22",
    "note": "Structure of the E. coli 50S subunit with ErmCL nascent chain"
  },
  {
    "id": "3JSD",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.50 \u00c5",
    "date": "2010-09-15",
    "note": "Insulin's biosynthesis and activity have opposing structural requirements: a new factor in neonatal diabetes mellitus"
  },
  {
    "id": "3JTC",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.60 \u00c5",
    "date": "2011-04-06",
    "note": "Importance of Mg2+ in the Ca2+-Dependent Folding of the gamma-Carboxyglutamic Acid Domains of Vitamin K-Dependent clotting and anticlotting Proteins"
  },
  {
    "id": "3LEU",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1997-11-26",
    "note": "HIGH RESOLUTION 1H NMR STUDY OF LEUCOCIN A IN DODECYLPHOSPHOCHOLINE MICELLES, 19 STRUCTURES (1:40 RATIO OF LEUCOCIN A:DPC) (0.1% TFA)"
  },
  {
    "id": "3LO1",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.60 \u00c5",
    "date": "2010-03-09",
    "note": "Crystal structure of human alpha-defensin 1 (Y16A mutant)"
  },
  {
    "id": "3LO2",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.56 \u00c5",
    "date": "2010-03-09",
    "note": "Crystal structure of human alpha-defensin 1 (Y21A mutant)"
  },
  {
    "id": "3LO4",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.75 \u00c5",
    "date": "2010-03-09",
    "note": "Crystal structure of human alpha-defensin 1 (R24A mutant)"
  },
  {
    "id": "3LO6",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.56 \u00c5",
    "date": "2010-03-09",
    "note": "Crystal structure of human alpha-defensin 1 (W26Aba mutant)"
  },
  {
    "id": "3LO9",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.56 \u00c5",
    "date": "2010-03-09",
    "note": "Crystal structure of human alpha-defensin 1 (W26Ahp mutant)"
  },
  {
    "id": "3LOE",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.56 \u00c5",
    "date": "2010-03-09",
    "note": "Crystal structure of human alpha-defensin 1 (F28A mutant)"
  },
  {
    "id": "3LVX",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.63 \u00c5",
    "date": "2010-03-09",
    "note": "Crystal structure of human alpha-defensin 1 (I6A mutant)"
  },
  {
    "id": "3M17",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.60 \u00c5",
    "date": "2010-06-16",
    "note": "Crystal structure of human FcRn with a monomeric peptide inhibitor"
  },
  {
    "id": "3M1B",
    "method": "X-RAY DIFFRACTION",
    "resolution": "3.10 \u00c5",
    "date": "2010-06-16",
    "note": "Crystal structure of human FcRn with a dimeric peptide inhibitor"
  },
  {
    "id": "3M61",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.68 \u00c5",
    "date": "2010-04-07",
    "note": "Crystal structure of complex of urokinase and a upain-1 variant(W3A) in pH4.6 condition"
  },
  {
    "id": "3MGN",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.40 \u00c5",
    "date": "2011-03-02",
    "note": "D-Peptide inhibitor PIE71 in complex with IQN17"
  },
  {
    "id": "3MLS",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.50 \u00c5",
    "date": "2010-07-14",
    "note": "Crystal structure of anti-HIV-1 V3 mAb 2557 Fab in complex with a HIV-1 gp120 V3 mimotope"
  },
  {
    "id": "3MTH",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.90 \u00c5",
    "date": "1996-01-29",
    "note": "X-RAY CRYSTALLOGRAPHIC STUDIES ON HEXAMERIC INSULINS IN THE PRESENCE OF HELIX-STABILIZING AGENTS, THIOCYANATE, METHYLPARABEN AND PHENOL"
  },
  {
    "id": "3N7Y",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.02 \u00c5",
    "date": "2011-01-12",
    "note": "Crystal Structure of the Grb2 SH2 Domain in Complex with a 20-Membered Macrocyclic Ligand Having the Sequence pYVNV"
  },
  {
    "id": "3N84",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.00 \u00c5",
    "date": "2011-01-12",
    "note": "Crystal Structure of the Grb2 SH2 Domain in Complex with a 23-Membered Macrocyclic Ligand Having the Sequence pYVNVP"
  },
  {
    "id": "3NGG",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.33 \u00c5",
    "date": "2010-09-08",
    "note": "X-ray Structure of Omwaprin"
  },
  {
    "id": "3NI3",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.34 \u00c5",
    "date": "2010-09-15",
    "note": "54-Membered ring macrocyclic beta-sheet peptide"
  },
  {
    "id": "3NIR",
    "method": "X-RAY DIFFRACTION",
    "resolution": "0.48 \u00c5",
    "date": "2011-05-18",
    "note": "Crystal structure of small protein crambin at 0.48 A resolution"
  },
  {
    "id": "3NJP",
    "method": "X-RAY DIFFRACTION",
    "resolution": "3.30 \u00c5",
    "date": "2010-10-13",
    "note": "The Extracellular and Transmembrane Domain Interfaces in Epidermal Growth Factor Receptor Signaling"
  },
  {
    "id": "3NJW",
    "method": "X-RAY DIFFRACTION",
    "resolution": "0.86 \u00c5",
    "date": "2010-09-01",
    "note": "First High Resolution Crystal Structure of a Lasso Peptide"
  },
  {
    "id": "3ODI",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.20 \u00c5",
    "date": "2011-02-16",
    "note": "Crystal structure of cyclophilin A in complex with Voclosporin E-ISA247"
  },
  {
    "id": "3ODL",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.31 \u00c5",
    "date": "2011-02-16",
    "note": "Crystal structure of cyclophilin A in complex with Voclosporin Z-ISA247"
  },
  {
    "id": "3ODV",
    "method": "X-RAY DIFFRACTION",
    "resolution": "0.95 \u00c5",
    "date": "2010-10-20",
    "note": "X-ray structure of kaliotoxin by racemic protein crystallography"
  },
  {
    "id": "3OE0",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.90 \u00c5",
    "date": "2010-10-27",
    "note": "Crystal structure of the CXCR4 chemokine receptor in complex with a cyclic peptide antagonist CVX15"
  },
  {
    "id": "3OX7",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.58 \u00c5",
    "date": "2011-08-10",
    "note": "The crystal structure of uPA complex with peptide inhibitor MH027 at pH4.6"
  },
  {
    "id": "3OY5",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.31 \u00c5",
    "date": "2011-08-10",
    "note": "The crystal structure of uPA complex with peptide inhibitor MH027 at pH7.4"
  },
  {
    "id": "3OY6",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.31 \u00c5",
    "date": "2011-08-10",
    "note": "The crystal structure of uPA complex with peptide inhibitor MH036 at pH4.6"
  },
  {
    "id": "3P2X",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.00 \u00c5",
    "date": "2011-11-23",
    "note": "Insulin fibrillation is the Janus face of induced fit. A chiaral clamp stabilizes the native state at the expense of activity"
  },
  {
    "id": "3P33",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.30 \u00c5",
    "date": "2011-11-23",
    "note": "Insulin fibrillation is the Janus face of induced fit. A chiral clamp stabilizes the native state at the expense of activity"
  },
  {
    "id": "3P72",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.90 \u00c5",
    "date": "2010-11-24",
    "note": "structure of platelet Glycoprotein 1b alpha with a bound peptide inhibitor"
  },
  {
    "id": "3P8F",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.00 \u00c5",
    "date": "2011-08-10",
    "note": "Crystal Structure of MT-SP1 in complex with SFTI-1"
  },
  {
    "id": "3PBJ",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.20 \u00c5",
    "date": "2011-11-30",
    "note": "Hydrolytic catalysis and structural stabilization in a designed metalloprotein"
  },
  {
    "id": "3PIS",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.00 \u00c5",
    "date": "2010-12-08",
    "note": "Crystal Structure of Carcinoscorpius rotundicauda Serine Protease Inhibitor Domain 1"
  },
  {
    "id": "3PMP",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.47 \u00c5",
    "date": "2011-11-23",
    "note": "Crystal Structure of Cyclophilin A from Moniliophthora perniciosa in complex with Cyclosporin A"
  },
  {
    "id": "3PP4",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.60 \u00c5",
    "date": "2011-04-13",
    "note": "Epitope characterization and crystal structure of GA101 provide insights into the molecular basis for the type I / type II distinction of anti- CD20 antibodies"
  },
  {
    "id": "3PQZ",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.41 \u00c5",
    "date": "2011-07-20",
    "note": "Grb7 SH2 with peptide"
  },
  {
    "id": "3PSM",
    "method": "X-RAY DIFFRACTION",
    "resolution": "0.98 \u00c5",
    "date": "2010-12-29",
    "note": ".98A crystal structure of a dimeric plant defensin SPE10"
  },
  {
    "id": "3Q6E",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.05 \u00c5",
    "date": "2011-04-20",
    "note": "Human insulin in complex with cucurbit[7]uril"
  },
  {
    "id": "3Q8J",
    "method": "X-RAY DIFFRACTION",
    "resolution": "0.87 \u00c5",
    "date": "2012-04-18",
    "note": "Crystal Structure of Asteropsin A from Marine Sponge Asteropus sp."
  },
  {
    "id": "3Q9G",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.05 \u00c5",
    "date": "2011-06-08",
    "note": "VQIVY segment from Alzheimer's tau displayed on 42-membered macrocycle scaffold"
  },
  {
    "id": "3Q9H",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.25 \u00c5",
    "date": "2011-06-08",
    "note": "LVFFA segment from Alzheimer's Amyloid-Beta displayed on 42-membered macrocycle scaffold"
  },
  {
    "id": "3Q9I",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.99 \u00c5",
    "date": "2011-06-08",
    "note": "LVFFA segment from Alzheimer's Amyloid-Beta displayed on 42-membered macrocycle scaffold, bromide derivative"
  },
  {
    "id": "3Q9J",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.55 \u00c5",
    "date": "2011-06-08",
    "note": "AIIFL segment derived from Alzheimer's Amyloid-Beta displayed on 42-membered macrocycle scaffold"
  },
  {
    "id": "3QTE",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.95 \u00c5",
    "date": "2012-01-11",
    "note": "Crystal structure of human alpha-defensin 6 (H27W mutant)"
  },
  {
    "id": "3R0L",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.35 \u00c5",
    "date": "2011-10-12",
    "note": "Crystal structure of crotoxin"
  },
  {
    "id": "3R6R",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.40 \u00c5",
    "date": "2012-02-29",
    "note": "Structure of the complex of an intramolecular human telomeric DNA with Berberine formed in K+ solution"
  },
  {
    "id": "3ROV",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.30 \u00c5",
    "date": "2012-05-02",
    "note": "Insulin's biosynthesis and activity have opposing structural requirements: a new factor in neonatal diabetes mellitus"
  },
  {
    "id": "3RQD",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.14 \u00c5",
    "date": "2011-08-24",
    "note": "Ideal Thiolate-Zinc Coordination Geometry in Depsipeptide Binding to Histone Deacetylase 8"
  },
  {
    "id": "3RTO",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.80 \u00c5",
    "date": "2011-05-18",
    "note": "Acoustically mounted porcine insulin microcrystals yield an X-ray SAD structure"
  },
  {
    "id": "3S1B",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.90 \u00c5",
    "date": "2011-08-17",
    "note": "The Development of Peptide-based Tools for the Analysis of Angiogenesis"
  },
  {
    "id": "3S3X",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.99 \u00c5",
    "date": "2012-05-23",
    "note": "Structure of chicken acid-sensing ion channel 1 AT 3.0 A resolution in complex with psalmotoxin"
  },
  {
    "id": "3SRI",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.60 \u00c5",
    "date": "2012-07-11",
    "note": "Crystal structure of Plasmodium falciparum AMA1 in complex with a 29aa PfRON2 peptide"
  },
  {
    "id": "3SSB",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.80 \u00c5",
    "date": "2011-09-07",
    "note": "Structure of Insect Metalloproteinase Inhibitor in Complex with Thermolysin"
  },
  {
    "id": "3SZS",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.95 \u00c5",
    "date": "2012-07-25",
    "note": "Crystal structure analysis of hellethionin D"
  },
  {
    "id": "3T2A",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.10 \u00c5",
    "date": "2011-12-28",
    "note": "TMAO-grown cubic insulin (porcine)"
  },
  {
    "id": "3TGF",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1993-04-15",
    "note": "THE SOLUTION STRUCTURE OF HUMAN TRANSFORMING GROWTH FACTOR ALPHA"
  },
  {
    "id": "3TT8",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.12 \u00c5",
    "date": "2011-10-19",
    "note": "Crystal Structure Analysis of Cu Human Insulin Derivative"
  },
  {
    "id": "3TVJ",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.28 \u00c5",
    "date": "2012-04-25",
    "note": "Catalytic fragment of MASP-2 in complex with its specific inhibitor developed by directed evolution on SGCI scaffold"
  },
  {
    "id": "3U4N",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.98 \u00c5",
    "date": "2012-04-11",
    "note": "A novel covalently linked insulin dimer"
  },
  {
    "id": "3U4W",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.90 \u00c5",
    "date": "2012-02-22",
    "note": "Src in complex with DNA-templated macrocyclic inhibitor MC4b"
  },
  {
    "id": "3U7T",
    "method": "X-RAY DIFFRACTION",
    "resolution": "0.85 \u00c5",
    "date": "2012-02-08",
    "note": "Room temperature ultra-high resolution time-of-flight neutron and X-ray diffraction studies of H/D exchanged crambin"
  },
  {
    "id": "3UC7",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.10 \u00c5",
    "date": "2012-07-18",
    "note": "Trp-cage cyclo-TC1 - monoclinic crystal form"
  },
  {
    "id": "3UC8",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.33 \u00c5",
    "date": "2012-07-18",
    "note": "Trp-cage cyclo-TC1 - tetragonal crystal form"
  },
  {
    "id": "3UE7",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.08 \u00c5",
    "date": "2012-02-08",
    "note": "X-ray crystal structure of a novel topological analogue of crambin"
  },
  {
    "id": "3V19",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.00 \u00c5",
    "date": "2012-12-12",
    "note": "Forestalling insulin fibrillation by insertion of a chiral clamp mechanism-based application of protein engineering to global health"
  },
  {
    "id": "3V1G",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.20 \u00c5",
    "date": "2012-12-12",
    "note": "Forestalling insulin fibrillation by insertion of a chiral clamp mechanism-based application of protein engineering to global health"
  },
  {
    "id": "3V56",
    "method": "X-RAY DIFFRACTION",
    "resolution": "3.00 \u00c5",
    "date": "2012-03-28",
    "note": "Re-refinement of PDB entry 1OSG - Complex between BAFF and a BR3 derived peptide presented in a beta-hairpin scaffold - reveals an additonal copy of the peptide."
  },
  {
    "id": "3W11",
    "method": "X-RAY DIFFRACTION",
    "resolution": "3.90 \u00c5",
    "date": "2013-01-09",
    "note": "Insulin receptor ectodomain construct comprising domains L1-CR in complex with human insulin, Alpha-CT peptide(704-719) and FAB 83-7"
  },
  {
    "id": "3W12",
    "method": "X-RAY DIFFRACTION",
    "resolution": "4.30 \u00c5",
    "date": "2013-01-09",
    "note": "Insulin receptor ectodomain construct comprising domains L1-CR in complex with high-affinity insulin analogue [D-PRO-B26]-DTI-NH2, alpha-CT peptide(704-719) and FAB 83-7"
  },
  {
    "id": "3W13",
    "method": "X-RAY DIFFRACTION",
    "resolution": "4.30 \u00c5",
    "date": "2013-01-09",
    "note": "Insulin receptor ectodomain construct comprising domains L1-CR in complex with high-affinity insulin analogue [D-PRO-B26]-DTI-NH2, alphact peptide(693-719) and FAB 83-7"
  },
  {
    "id": "3W7Y",
    "method": "X-RAY DIFFRACTION",
    "resolution": "0.92 \u00c5",
    "date": "2013-07-03",
    "note": "0.92A structure of 2Zn human insulin at 100K"
  },
  {
    "id": "3W7Z",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.15 \u00c5",
    "date": "2013-07-03",
    "note": "1.15A structure of human 2Zn insulin at 293K"
  },
  {
    "id": "3W80",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.40 \u00c5",
    "date": "2013-07-03",
    "note": "Crystal structure of dodecamer human insulin with double C-axis length of the hexamer 2 Zn insulin cell"
  },
  {
    "id": "3WDC",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.18 \u00c5",
    "date": "2013-09-18",
    "note": "N-terminal domain of Mycobacterium tuberculosis ClpC1 bound to Cyclomarin A"
  },
  {
    "id": "3WDD",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.18 \u00c5",
    "date": "2013-09-18",
    "note": "Mutant N-terminal domain of Mycobacterium tuberculosis ClpC1, F2Y, bound to Cyclomarin A"
  },
  {
    "id": "3WDE",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.44 \u00c5",
    "date": "2013-09-18",
    "note": "Mutant N-terminal domain of Mycobacterium tuberculosis ClpC1, F80Y, bound to Cyclomarin A"
  },
  {
    "id": "3WNE",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.70 \u00c5",
    "date": "2013-12-25",
    "note": "Cyclic hexapeptide PKIDNG in complex with HIV-1 integrase"
  },
  {
    "id": "3WNF",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.45 \u00c5",
    "date": "2013-12-25",
    "note": "Cyclic hexapeptide CKIDNC in complex with HIV-1 integrase"
  },
  {
    "id": "3WNG",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.75 \u00c5",
    "date": "2013-12-25",
    "note": "Cyclic hexapeptide PKIDNp in complex with HIV-1 integrase"
  },
  {
    "id": "3WNH",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.50 \u00c5",
    "date": "2013-12-25",
    "note": "Cyclic hexapeptide PKZDNv in complex with HIV-1 integrase"
  },
  {
    "id": "3ZDF",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.34 \u00c5",
    "date": "2013-12-11",
    "note": "Structure of GAPDH with CP12 peptide from Thermosynechococcus elongatus"
  },
  {
    "id": "3ZI3",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.70 \u00c5",
    "date": "2013-03-06",
    "note": "Crystal structure of the B24His-insulin - human analogue"
  },
  {
    "id": "3ZKT",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2013-04-24",
    "note": "SOLUTION STRUCTURE OF THE SOMATOSTATIN SST3 RECEPTOR ANTAGONIST TAU- CONOTOXIN CnVA"
  },
  {
    "id": "3ZLD",
    "method": "X-RAY DIFFRACTION",
    "resolution": "3.10 \u00c5",
    "date": "2013-08-28",
    "note": "Crystal structure of Toxoplasma gondii sporozoite AMA1 in complex with a 36 aa region of sporozoite RON2"
  },
  {
    "id": "3ZQR",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.90 \u00c5",
    "date": "2011-08-24",
    "note": "NMePheB25 insulin analogue crystal structure"
  },
  {
    "id": "3ZRJ",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.94 \u00c5",
    "date": "2011-07-06",
    "note": "Complex of ClpV N-domain with VipB peptide"
  },
  {
    "id": "3ZS2",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.97 \u00c5",
    "date": "2011-08-31",
    "note": "TyrB25,NMePheB26,LysB28,ProB29-insulin analogue crystal structure"
  },
  {
    "id": "3ZU1",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.60 \u00c5",
    "date": "2011-08-03",
    "note": "Structure of LysB29(Nepsilon omega-carboxyheptadecanoyl) des(B30) Human Insulin"
  },
  {
    "id": "3ZWZ",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.10 \u00c5",
    "date": "2012-07-11",
    "note": "Crystal structure of Plasmodium falciparum AMA1 in complex with a 39aa PfRON2 peptide"
  },
  {
    "id": "4A7E",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.86 \u00c5",
    "date": "2011-11-30",
    "note": "X-ray crystal structure of porcine insulin flash-cooled at high pressure"
  },
  {
    "id": "4AAZ",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.40 \u00c5",
    "date": "2012-04-25",
    "note": "X-ray structure of Nicotiana alata Defensin 1 NaD1"
  },
  {
    "id": "4AB0",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.64 \u00c5",
    "date": "2012-04-25",
    "note": "X-ray crystal structure of Nicotiana alata defensin NaD1"
  },
  {
    "id": "4ABI",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.55 \u00c5",
    "date": "2012-03-07",
    "note": "Co-complex structure of bovine trypsin with a modified Bowman-Birk inhibitor (PtA)SFTI-1(1,14), that was 1,4-disubstituted with a 1,2,3- trizol to mimic a trans amide bond"
  },
  {
    "id": "4ABJ",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.45 \u00c5",
    "date": "2012-03-07",
    "note": "Co-complex structure of bovine trypsin with a modified Bowman-Birk inhibitor (IcA)SFTI-1(1,14), that was 1,5-disubstituted with 1,2,3- trizol to mimic a cis amide bond"
  },
  {
    "id": "4AIY",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2000-02-28",
    "note": "R6 HUMAN INSULIN HEXAMER (SYMMETRIC), NMR, 'GREEN' SUBSTATE, AVERAGE STRUCTURE"
  },
  {
    "id": "4AJX",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.20 \u00c5",
    "date": "2013-01-09",
    "note": "Ligand controlled assembly of hexamers, dihexamers, and linear multihexamer structures by an engineered acylated insulin"
  },
  {
    "id": "4AJZ",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.80 \u00c5",
    "date": "2013-01-09",
    "note": "Ligand controlled assembly of hexamers, dihexamers, and linear multihexamer structures by an engineered acylated insulin"
  },
  {
    "id": "4AK0",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.28 \u00c5",
    "date": "2013-01-09",
    "note": "Ligand controlled assembly of hexamers, dihexamers, and linear multihexamer structures by an engineered acylated insulin"
  },
  {
    "id": "4AKJ",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.01 \u00c5",
    "date": "2013-01-09",
    "note": "Ligand controlled assembly of hexamers, dihexamers, and linear multihexamer structures by an engineered acylated insulin"
  },
  {
    "id": "4AOQ",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.00 \u00c5",
    "date": "2013-01-09",
    "note": "Cationic trypsin in complex with mutated Spinacia oleracea trypsin inhibitor III (SOTI-III) (F14A)"
  },
  {
    "id": "4AOR",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.70 \u00c5",
    "date": "2013-01-09",
    "note": "Cationic trypsin in complex with the Spinacia oleracea trypsin inhibitor III (SOTI-III)"
  },
  {
    "id": "4AYB",
    "method": "X-RAY DIFFRACTION",
    "resolution": "3.20 \u00c5",
    "date": "2012-08-08",
    "note": "RNAP at 3.2Ang"
  },
  {
    "id": "4B1Q",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2013-02-06",
    "note": "NMR structure of the glycosylated conotoxin CcTx from Conus consors"
  },
  {
    "id": "4B2U",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2013-01-16",
    "note": "S67, A spider venom toxin peptide from Sicarius dolichocephalus"
  },
  {
    "id": "4B2V",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2013-01-16",
    "note": "S64, a spider venom toxin peptide from Sicarius dolichocephalus"
  },
  {
    "id": "4BFH",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.25 \u00c5",
    "date": "2013-07-10",
    "note": "Crystal structure of alpha-amylase inhibitor wrightide R1 (wR1) peptide from Wrightia religiosa"
  },
  {
    "id": "4BMF",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2013-05-22",
    "note": "Solution structure of the cellulose-binding domain of endoglucanase I from Trichoderma reesei and its interaction with cello- oligosaccharides"
  },
  {
    "id": "4BS3",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.30 \u00c5",
    "date": "2013-07-17",
    "note": "Bovin insulin structure determined by in situ crystal analysis and sulfur-SAD phasing at room temperature"
  },
  {
    "id": "4CPA",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.50 \u00c5",
    "date": "1982-07-29",
    "note": "REFINED CRYSTAL STRUCTURE OF THE POTATO INHIBITOR COMPLEX OF CARBOXYPEPTIDASE A AT 2.5 ANGSTROMS RESOLUTION"
  },
  {
    "id": "4CQK",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.60 \u00c5",
    "date": "2014-04-16",
    "note": "Crystal structure of ligand-bound NaD1"
  },
  {
    "id": "4CXL",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.50 \u00c5",
    "date": "2014-05-28",
    "note": "Human insulin analogue (D-ProB8)-insulin"
  },
  {
    "id": "4CXN",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.70 \u00c5",
    "date": "2014-05-28",
    "note": "Crystal structure of human insulin analogue (NMe-AlaB8)-insulin crystal form I"
  },
  {
    "id": "4CY7",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.40 \u00c5",
    "date": "2014-05-28",
    "note": "Crystal structure of human insulin analogue (NMe-AlaB8)-insulin crystal form II"
  },
  {
    "id": "4DCB",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.03 \u00c5",
    "date": "2012-06-06",
    "note": "Y. pestis Plasminogen Activator Pla in Complex with Human Plasminogen Activation Loop Peptide ALP11"
  },
  {
    "id": "4DGC",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.65 \u00c5",
    "date": "2012-02-08",
    "note": "TRIMCyp cyclophilin domain from Macaca mulatta: cyclosporin A complex"
  },
  {
    "id": "4DJZ",
    "method": "X-RAY DIFFRACTION",
    "resolution": "3.20 \u00c5",
    "date": "2012-04-25",
    "note": "Catalytic fragment of masp-1 in complex with its specific inhibitor developed by directed evolution on sgci scaffold"
  },
  {
    "id": "4DOQ",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.00 \u00c5",
    "date": "2013-08-14",
    "note": "Crystal structure of the complex of Porcine Pancreatic Trypsin with 1/2SLPI"
  },
  {
    "id": "4DU0",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.90 \u00c5",
    "date": "2012-04-11",
    "note": "Crystal structure of human alpha-defensin 1, HNP1 (G17A mutant)"
  },
  {
    "id": "4E7T",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.40 \u00c5",
    "date": "2012-04-04",
    "note": "The structure of T6 bovine insulin"
  },
  {
    "id": "4E7U",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.30 \u00c5",
    "date": "2012-04-04",
    "note": "The structure of T3R3 bovine insulin"
  },
  {
    "id": "4E7V",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.80 \u00c5",
    "date": "2012-04-04",
    "note": "The structure of R6 bovine insulin"
  },
  {
    "id": "4E82",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.70 \u00c5",
    "date": "2012-05-16",
    "note": "Crystal structure of monomeric variant of human alpha-defensin 5, HD5 (Glu21EMe mutant)"
  },
  {
    "id": "4E83",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.90 \u00c5",
    "date": "2012-05-16",
    "note": "Crystal structure of human alpha-defensin 5, HD5 (Leu29NLe mutant)"
  },
  {
    "id": "4E86",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.75 \u00c5",
    "date": "2012-05-16",
    "note": "Crystal structure of human alpha-defensin 5, HD5 (Leu29Aba mutant)"
  },
  {
    "id": "4EFX",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.98 \u00c5",
    "date": "2013-03-06",
    "note": "Highly biologically active insulin with additional disulfide bond"
  },
  {
    "id": "4EWW",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.30 \u00c5",
    "date": "2013-05-01",
    "note": "Human Insulin"
  },
  {
    "id": "4EWX",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.20 \u00c5",
    "date": "2013-05-01",
    "note": "Human Insulin"
  },
  {
    "id": "4EWZ",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.79 \u00c5",
    "date": "2013-05-01",
    "note": "Human Insulin"
  },
  {
    "id": "4EX0",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.86 \u00c5",
    "date": "2013-05-01",
    "note": "Human Insulin"
  },
  {
    "id": "4EX1",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.66 \u00c5",
    "date": "2013-05-01",
    "note": "Human Insulin"
  },
  {
    "id": "4EXX",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.55 \u00c5",
    "date": "2013-05-01",
    "note": "Human Insulin"
  },
  {
    "id": "4EY1",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.47 \u00c5",
    "date": "2013-05-01",
    "note": "Human Insulin"
  },
  {
    "id": "4EY9",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.47 \u00c5",
    "date": "2013-05-01",
    "note": "Human Insulin"
  },
  {
    "id": "4EYD",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.47 \u00c5",
    "date": "2013-05-01",
    "note": "Human Insulin"
  },
  {
    "id": "4EYN",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.53 \u00c5",
    "date": "2013-05-01",
    "note": "Human Insulin"
  },
  {
    "id": "4EYP",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.59 \u00c5",
    "date": "2013-05-01",
    "note": "Human Insulin"
  },
  {
    "id": "4EZ1",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.49 \u00c5",
    "date": "2013-05-08",
    "note": "Crystal structure of acetylcholine binding protein (AChBP) from Aplysia Californica in complex with alpha-conotoxin BuIA"
  },
  {
    "id": "4F0N",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.68 \u00c5",
    "date": "2013-05-08",
    "note": "Human Insulin"
  },
  {
    "id": "4F0O",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.67 \u00c5",
    "date": "2013-05-08",
    "note": "Human Insulin"
  },
  {
    "id": "4F1A",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.80 \u00c5",
    "date": "2013-05-08",
    "note": "Human Insulin"
  },
  {
    "id": "4F1B",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.59 \u00c5",
    "date": "2013-05-08",
    "note": "Human Insulin"
  },
  {
    "id": "4F1C",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.70 \u00c5",
    "date": "2013-05-08",
    "note": "Human Insulin"
  },
  {
    "id": "4F1D",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.64 \u00c5",
    "date": "2013-05-08",
    "note": "Human Insulin"
  },
  {
    "id": "4F1F",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.68 \u00c5",
    "date": "2013-05-08",
    "note": "Human Insulin"
  },
  {
    "id": "4F1G",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.64 \u00c5",
    "date": "2013-05-08",
    "note": "Human insulin"
  },
  {
    "id": "4F4T",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.64 \u00c5",
    "date": "2013-05-15",
    "note": "Human Insulin"
  },
  {
    "id": "4F4V",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.64 \u00c5",
    "date": "2013-05-15",
    "note": "Human Insulin"
  },
  {
    "id": "4F51",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.64 \u00c5",
    "date": "2013-05-15",
    "note": "Human Insulin"
  },
  {
    "id": "4F8F",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.68 \u00c5",
    "date": "2013-05-22",
    "note": "Human Insulin"
  },
  {
    "id": "4FC1",
    "method": "NEUTRON DIFFRACTION",
    "resolution": "N/A",
    "date": "2012-09-19",
    "note": "Ultra-high resolution neutron structure of crambin at room-temperature"
  },
  {
    "id": "4FG3",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.00 \u00c5",
    "date": "2013-06-12",
    "note": "Crystal Structure Analysis of the Human Insulin"
  },
  {
    "id": "4FKA",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.08 \u00c5",
    "date": "2013-02-13",
    "note": "High resolution structure of the manganese derivative of insulin"
  },
  {
    "id": "4FN5",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.90 \u00c5",
    "date": "2012-09-26",
    "note": "ELONGATION FACTOR G 1 (PSEUDOMONAS AERUGINOSA) IN COMPLEX WITH Argyrin B"
  },
  {
    "id": "4FZ0",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.80 \u00c5",
    "date": "2012-08-01",
    "note": "Crystal structure of acid-sensing ion channel in complex with psalmotoxin 1 at low pH"
  },
  {
    "id": "4FZ1",
    "method": "X-RAY DIFFRACTION",
    "resolution": "3.36 \u00c5",
    "date": "2012-08-01",
    "note": "Crystal structure of acid-sensing ion channel in complex with psalmotoxin 1 at high pH"
  },
  {
    "id": "4GBC",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.78 \u00c5",
    "date": "2013-06-12",
    "note": "Crystal structure of aspart insulin at pH 6.5"
  },
  {
    "id": "4GBI",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.50 \u00c5",
    "date": "2013-06-12",
    "note": "Crystal structure of aspart insulin at pH 6.5"
  },
  {
    "id": "4GBK",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.40 \u00c5",
    "date": "2013-06-12",
    "note": "Crystal structure of aspart insulin at pH 8.5"
  },
  {
    "id": "4GBL",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.50 \u00c5",
    "date": "2013-06-12",
    "note": "Crystal structure of aspart insulin at pH 8.5"
  },
  {
    "id": "4GBN",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.87 \u00c5",
    "date": "2013-06-12",
    "note": "Crystal structure of aspart insulin at pH 6.5"
  },
  {
    "id": "4GLY",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.52 \u00c5",
    "date": "2013-05-15",
    "note": "Human urokinase-type plasminogen activator uPA in complex with the two-disulfide bridge peptide UK504"
  },
  {
    "id": "4GUX",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.80 \u00c5",
    "date": "2013-09-04",
    "note": "Crystal structure of trypsin:MCoTi-II complex"
  },
  {
    "id": "4GV5",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.70 \u00c5",
    "date": "2013-09-04",
    "note": "X-ray structure of crotamine, a cell-penetrating peptide from the Brazilian snake Crotalus durissus terrificus"
  },
  {
    "id": "4GW1",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.24 \u00c5",
    "date": "2013-10-09",
    "note": "cQFD Meditope"
  },
  {
    "id": "4GW5",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.20 \u00c5",
    "date": "2013-10-09",
    "note": "cQYN meditope - Cetuximab Fab"
  },
  {
    "id": "4HGC",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.29 \u00c5",
    "date": "2013-10-09",
    "note": "Crystal structure of bovine trypsin complexed with sfti-1 analog containing a peptoid residue at position p1"
  },
  {
    "id": "4HGU",
    "method": "X-RAY DIFFRACTION",
    "resolution": "0.98 \u00c5",
    "date": "2013-10-09",
    "note": "Crystal Structure of Galleria mellonella Silk Protease Inhibitor 2"
  },
  {
    "id": "4HY7",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.20 \u00c5",
    "date": "2013-03-27",
    "note": "Structural and biochemical characterization of a cytosolic wheat cyclophilin TaCypA-1"
  },
  {
    "id": "4I5L",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.43 \u00c5",
    "date": "2013-05-08",
    "note": "Structural mechanism of trimeric PP2A holoenzyme involving PR70: insight for Cdc6 dephosphorylation"
  },
  {
    "id": "4I5N",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.80 \u00c5",
    "date": "2013-05-08",
    "note": "Structural mechanism of trimeric PP2A holoenzyme involving PR70: insight for Cdc6 dephosphorylation"
  },
  {
    "id": "4I5Y",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.80 \u00c5",
    "date": "2013-11-20",
    "note": "Insulin protein crystallization via langmuir-blodgett"
  },
  {
    "id": "4I5Z",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.80 \u00c5",
    "date": "2013-11-20",
    "note": "Insulin protein crystallization via langmuir-blodgett"
  },
  {
    "id": "4IB5",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.20 \u00c5",
    "date": "2013-03-20",
    "note": "Structure of human protein kinase CK2 catalytic subunit in complex with a CK2beta-competitive cyclic peptide"
  },
  {
    "id": "4IDW",
    "method": "POWDER DIFFRACTION",
    "resolution": "N/A",
    "date": "2013-06-05",
    "note": "Polycrystalline T6 Bovine Insulin: Anisotropic Lattice Evolution and Novel Structure Refinement Strategy"
  },
  {
    "id": "4IHN",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.16 \u00c5",
    "date": "2013-12-25",
    "note": "High Resolution Insulin by Langmuir-Blodgett Modified Hanging Drop Vapour Diffusion"
  },
  {
    "id": "4INS",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.50 \u00c5",
    "date": "1990-04-15",
    "note": "THE STRUCTURE OF 2ZN PIG INSULIN CRYSTALS AT 1.5 ANGSTROMS RESOLUTION"
  },
  {
    "id": "4IOI",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.95 \u00c5",
    "date": "2013-10-09",
    "note": "Meditope-enabled trastuzumab in complex with CQFDLSTRRLKC"
  },
  {
    "id": "4IPZ",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.67 \u00c5",
    "date": "2013-11-06",
    "note": "SmBz bound to Cyclophilin A"
  },
  {
    "id": "4IUZ",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.60 \u00c5",
    "date": "2013-02-13",
    "note": "High resolution crystal structure of racemic ester insulin"
  },
  {
    "id": "4IVH",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.77 \u00c5",
    "date": "2013-07-31",
    "note": "Crystal structure of QKLVFFAED nonapeptide segment from amyloid beta incorporated into a macrocyclic beta-sheet template"
  },
  {
    "id": "4IYD",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.66 \u00c5",
    "date": "2014-02-12",
    "note": "Insulin glargine crystal structure 1"
  },
  {
    "id": "4IYF",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.80 \u00c5",
    "date": "2014-02-12",
    "note": "Insulin glargine crystal structure 2"
  },
  {
    "id": "4JJM",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.09 \u00c5",
    "date": "2013-06-12",
    "note": "Structure of a cyclophilin from Citrus sinensis (CsCyp) in complex with cyclosporin A"
  },
  {
    "id": "4JNA",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.00 \u00c5",
    "date": "2014-03-05",
    "note": "Crystal structure of the DepH complex with dimethyl-FK228"
  },
  {
    "id": "4JTA",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.50 \u00c5",
    "date": "2013-06-12",
    "note": "Crystal structure of Kv1.2-2.1 paddle chimera channel in complex with Charybdotoxin"
  },
  {
    "id": "4JTC",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.56 \u00c5",
    "date": "2013-06-12",
    "note": "Crystal structure of Kv1.2-2.1 paddle chimera channel in complex with Charybdotoxin in Cs+"
  },
  {
    "id": "4JTD",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.54 \u00c5",
    "date": "2013-06-12",
    "note": "Crystal structure of Kv1.2-2.1 paddle chimera channel in complex with Lys27Met mutant of Charybdotoxin"
  },
  {
    "id": "4JZU",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.70 \u00c5",
    "date": "2013-05-08",
    "note": "Crystal structure of the Bacillus subtilis pyrophosphohydrolase BsRppH bound to a non-hydrolysable triphosphorylated dinucleotide RNA (pcp-pGpG) - first guanosine residue in guanosine binding pocket"
  },
  {
    "id": "4JZV",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.20 \u00c5",
    "date": "2013-05-08",
    "note": "Crystal structure of the Bacillus subtilis pyrophosphohydrolase BsRppH bound to a non-hydrolysable triphosphorylated dinucleotide RNA (pcp-pGpG) - second guanosine residue in guanosine binding pocket"
  },
  {
    "id": "4JZW",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.78 \u00c5",
    "date": "2013-06-12",
    "note": "Crystal structure of CD4-mimetic miniprotein M48U1 in complex with HIV-1 YU2 gp120 in P212121 space group"
  },
  {
    "id": "4JZZ",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.49 \u00c5",
    "date": "2013-06-12",
    "note": "Crystal structure of CD4-mimetic miniprotein M48U1 in complex with HIV-1 YU2 gp120 in C2221 space group"
  },
  {
    "id": "4K0A",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.13 \u00c5",
    "date": "2013-06-12",
    "note": "Crystal structure of CD4-mimetic miniprotein M48U7 in complex with HIV-1 YU2 gp120"
  },
  {
    "id": "4K1E",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.30 \u00c5",
    "date": "2014-04-09",
    "note": "Atomic resolution crystal structures of Kallikrein-Related Peptidase 4 complexed with a modified SFTI inhibitor FCQR"
  },
  {
    "id": "4K24",
    "method": "X-RAY DIFFRACTION",
    "resolution": "4.50 \u00c5",
    "date": "2014-02-26",
    "note": "Structure of anti-uPAR Fab ATN-658 in complex with uPAR"
  },
  {
    "id": "4K8Y",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.00 \u00c5",
    "date": "2014-04-23",
    "note": "Atomic resolution crystal structures of Kallikrein-Related Peptidase 4 complexed with Sunflower Trypsin Inhibitor (SFTI-1)"
  },
  {
    "id": "4KA2",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.79 \u00c5",
    "date": "2013-06-19",
    "note": "Crystal structure of CD4-mimetic miniprotein M48U12 in complex with HIV-1 YU2 gp120"
  },
  {
    "id": "4KEL",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.15 \u00c5",
    "date": "2014-04-30",
    "note": "Atomic resolution crystal structure of Kallikrein-Related Peptidase 4 complexed with a modified SFTI inhibitor FCQR(N)"
  },
  {
    "id": "4LAJ",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.14 \u00c5",
    "date": "2013-08-14",
    "note": "Crystal structure of HIV-1 YU2 envelope gp120 glycoprotein in complex with CD4-mimetic miniprotein, M48U1, and llama single-domain, broadly neutralizing, co-receptor binding site antibody, JM4"
  },
  {
    "id": "4LB1",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.00 \u00c5",
    "date": "2013-11-27",
    "note": "Crystal structure of human alpha-defensin 1 (HNP1) Y16A/F28A mutant"
  },
  {
    "id": "4LB7",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.90 \u00c5",
    "date": "2013-11-27",
    "note": "Crystal structure of human alpha-defensin 1 (HNP1) Y16A/I20A/L25A/F28A mutant."
  },
  {
    "id": "4LBB",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.72 \u00c5",
    "date": "2013-11-27",
    "note": "Crystal structure of human alpha-defensin 1 (HNP1) I20A mutant"
  },
  {
    "id": "4LBF",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.70 \u00c5",
    "date": "2013-11-27",
    "note": "Crystal structure of HUMAN ALPHA-DEFENSIN 1 (HNP1) I20A/L25A mutant"
  },
  {
    "id": "4LFQ",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.06 \u00c5",
    "date": "2013-08-14",
    "note": "High resolution x-ray crystal structure of L-ShK toxin"
  },
  {
    "id": "4LFS",
    "method": "X-RAY DIFFRACTION",
    "resolution": "0.97 \u00c5",
    "date": "2013-08-14",
    "note": "High resolution x-ray structure of racemic ShK toxin"
  },
  {
    "id": "4M1D",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.80 \u00c5",
    "date": "2013-09-04",
    "note": "Crystal structure of anti-HIV-1 Fab 447-52D in complex with V3 cyclic peptide MN"
  },
  {
    "id": "4M4F",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.90 \u00c5",
    "date": "2014-01-15",
    "note": "Radiation damage study of Cu T6-insulin - 0.01 MGy"
  },
  {
    "id": "4M4H",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.90 \u00c5",
    "date": "2014-01-15",
    "note": "Radiation damage study of Cu T6-insulin - 0.06 MGy"
  },
  {
    "id": "4M4I",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.90 \u00c5",
    "date": "2014-01-15",
    "note": "Radiation damage study of Cu T6-insulin - 0.12 MGy"
  },
  {
    "id": "4M4J",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.90 \u00c5",
    "date": "2014-01-15",
    "note": "Radiation damage study of Cu T6-insulin - 0.30 MGy"
  },
  {
    "id": "4M4L",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.45 \u00c5",
    "date": "2014-01-15",
    "note": "The structure of Cu T6 bovine insulin"
  },
  {
    "id": "4M4M",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.50 \u00c5",
    "date": "2014-01-15",
    "note": "The structure of Ni T6 bovine insulin"
  },
  {
    "id": "4M6E",
    "method": "X-RAY DIFFRACTION",
    "resolution": "0.95 \u00c5",
    "date": "2014-03-19",
    "note": "The high resolution structure of tyrocidine A reveals an amphipathic dimer"
  },
  {
    "id": "4MPI",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.60 \u00c5",
    "date": "2014-08-27",
    "note": "Crystal structure of the chitin-binding module (CBM18) of a chitinase-like protein from Hevea brasiliensis"
  },
  {
    "id": "4MQ9",
    "method": "X-RAY DIFFRACTION",
    "resolution": "3.35 \u00c5",
    "date": "2014-05-07",
    "note": "Crystal structure of Thermus thermophilus RNA polymerase holoenzyme in complex with GE23077"
  },
  {
    "id": "4MZZ",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.88 \u00c5",
    "date": "2013-11-27",
    "note": "Crystal structure of Bovine 3 Glu-Osteocalcin."
  },
  {
    "id": "4NE9",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.60 \u00c5",
    "date": "2014-09-10",
    "note": "PCSK9 in complex with LDLR peptide"
  },
  {
    "id": "4NEC",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.50 \u00c5",
    "date": "2014-01-15",
    "note": "Conversion of a Disulfide Bond into a Thioacetal Group during Echinomycin Biosynthesis"
  },
  {
    "id": "4NIB",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.40 \u00c5",
    "date": "2014-08-27",
    "note": "Crystal structure of human insulin mutant B20 D-ala, B23 D-ala"
  },
  {
    "id": "4NQS",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.64 \u00c5",
    "date": "2014-03-12",
    "note": "Knob-into-hole IgG Fc"
  },
  {
    "id": "4NTP",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.99 \u00c5",
    "date": "2014-04-02",
    "note": "Crystal structure of macrocycles containing A 17-23 (LV(PHI)FAED) and A 30-36 (AII(SAR)L(ORN)V)"
  },
  {
    "id": "4NTR",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.70 \u00c5",
    "date": "2014-04-02",
    "note": "Crystal structure of macrocycles containing Abeta 17-23 (LVFFAED) and Abeta 30-36 (AII(SAR)L(ORN)V)"
  },
  {
    "id": "4NW8",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.02 \u00c5",
    "date": "2014-04-02",
    "note": "Crystal structure of macrocycles containing Abeta17-23 (LV(PHI)(MEA)AED) and Abeta30-36 (AIIGL(ORN)V)"
  },
  {
    "id": "4NW9",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.66 \u00c5",
    "date": "2014-04-02",
    "note": "Crystal structure of macrocycles containing Abeta17-23 (LVF(MEA)AED) and Abeta30-36 (AIIGL(ORN)V)"
  },
  {
    "id": "4O3U",
    "method": "X-RAY DIFFRACTION",
    "resolution": "3.04 \u00c5",
    "date": "2014-06-04",
    "note": "Zymogen HGF-beta/MET with Zymogen Activator Peptide ZAP2.3"
  },
  {
    "id": "4OGA",
    "method": "X-RAY DIFFRACTION",
    "resolution": "3.50 \u00c5",
    "date": "2014-08-27",
    "note": "Insulin in complex with Site 1 of the human insulin receptor"
  },
  {
    "id": "4OIN",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.80 \u00c5",
    "date": "2014-05-07",
    "note": "Crystal structure of Thermus thermophilus transcription initiation complex soaked with GE23077"
  },
  {
    "id": "4OIP",
    "method": "X-RAY DIFFRACTION",
    "resolution": "3.40 \u00c5",
    "date": "2014-05-07",
    "note": "Crystal structure of Thermus thermophilus transcription initiation complex soaked with GE23077, ATP, and CMPcPP"
  },
  {
    "id": "4OIQ",
    "method": "X-RAY DIFFRACTION",
    "resolution": "3.62 \u00c5",
    "date": "2014-05-07",
    "note": "Crystal structure of Thermus thermophilus transcription initiation complex soaked with GE23077 and rifampicin"
  },
  {
    "id": "4OIR",
    "method": "X-RAY DIFFRACTION",
    "resolution": "3.10 \u00c5",
    "date": "2014-05-07",
    "note": "Crystal structure of Thermus thermophilus RNA polymerase transcription initiation complex soaked with GE23077 and rifamycin SV"
  },
  {
    "id": "4OU3",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.95 \u00c5",
    "date": "2014-11-05",
    "note": "Crystal structure of porcine aminopeptidase N complexed with CNGRCG tumor-homing peptide"
  },
  {
    "id": "4OZ7",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.65 \u00c5",
    "date": "2015-05-20",
    "note": "Methanobactin production by methanotrophic bacteria and their structural diversity from Methylosinus strains: Insights into copper release"
  },
  {
    "id": "4OZK",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.04 \u00c5",
    "date": "2014-11-12",
    "note": "Crystal structure of Laterosporulin, a broad spectrum leaderless bacteriocin produced by Brevibacillus laterosporus strain GI-9"
  },
  {
    "id": "4P4V",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.97 \u00c5",
    "date": "2015-05-06",
    "note": "Hexamer formed by a macrocyclic peptide derived from beta-2-microglobulin (63-69) - (ORN)YLL(PHI)YTE(ORN)KVA(MAA)AVK"
  },
  {
    "id": "4P4W",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.50 \u00c5",
    "date": "2015-05-06",
    "note": "Dodecamer formed by a macrocyclic peptide derived from beta-2-microglobulin (63-69) - (ORN)YLL(PHI)YTE(ORN)KVA(MVA)AVK"
  },
  {
    "id": "4P4X",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.90 \u00c5",
    "date": "2015-05-06",
    "note": "Dodecamer formed by a macrocyclic peptide derived from beta-2-microglobulin (63-69) - (ORN)YLL(PHI)YTE(ORN)KVA(MLE)AVK"
  },
  {
    "id": "4P4Y",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.51 \u00c5",
    "date": "2015-05-06",
    "note": "Hexamer formed by a macrocyclic peptide derived from beta-2-microglobulin (63-69) - (ORN)YLL(PHI)YTE(ORN)KVT(MAA)TVK"
  },
  {
    "id": "4P4Z",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.31 \u00c5",
    "date": "2015-05-06",
    "note": "Octomer formed by a macrocyclic peptide derived from beta-2-microglobulin (63-69) - (ORN)YLL(PHI)YTE(ORN)KVT(MVA)TVK"
  },
  {
    "id": "4P65",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.50 \u00c5",
    "date": "2014-10-22",
    "note": "Crystal structure of an cyclohexylalanine substituted insulin analog."
  },
  {
    "id": "4PXV",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.80 \u00c5",
    "date": "2015-03-25",
    "note": "Crystal Structure of LysM domain from pteris ryukyuensis chitinase A"
  },
  {
    "id": "4Q8D",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.75 \u00c5",
    "date": "2014-08-13",
    "note": "Crystal structure of a macrocyclic beta-sheet peptide containing two beta-strands from amyloid beta residues 15-23"
  },
  {
    "id": "4Q9I",
    "method": "X-RAY DIFFRACTION",
    "resolution": "3.78 \u00c5",
    "date": "2015-03-04",
    "note": "P-glycoprotein cocrystallised with QZ-Ala"
  },
  {
    "id": "4Q9J",
    "method": "X-RAY DIFFRACTION",
    "resolution": "3.60 \u00c5",
    "date": "2015-03-04",
    "note": "P-glycoprotein cocrystallised with QZ-Val"
  },
  {
    "id": "4Q9K",
    "method": "X-RAY DIFFRACTION",
    "resolution": "3.80 \u00c5",
    "date": "2015-03-04",
    "note": "P-glycoprotein cocrystallised with QZ-Leu"
  },
  {
    "id": "4Q9L",
    "method": "X-RAY DIFFRACTION",
    "resolution": "3.80 \u00c5",
    "date": "2015-03-04",
    "note": "P-glycoprotein cocrystallised with QZ-Phe"
  },
  {
    "id": "4QAE",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.10 \u00c5",
    "date": "2015-05-06",
    "note": "Crystal structure of an engineered lipocalin (Anticalin) in complex with human hepcidin"
  },
  {
    "id": "4QIW",
    "method": "X-RAY DIFFRACTION",
    "resolution": "3.50 \u00c5",
    "date": "2014-10-08",
    "note": "Crystal structure of euryarchaeal RNA polymerase from Thermococcus kodakarensis"
  },
  {
    "id": "4R4F",
    "method": "X-RAY DIFFRACTION",
    "resolution": "3.51 \u00c5",
    "date": "2014-09-17",
    "note": "Crystal structure of non-neutralizing, A32-like antibody 2.2c in complex with HIV-1 YU2 gp120"
  },
  {
    "id": "4R4L",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.25 \u00c5",
    "date": "2015-09-23",
    "note": "Crystal structure of wt cGMP dependent protein kinase I alpha (PKGI alpha) leucine zipper"
  },
  {
    "id": "4R4N",
    "method": "X-RAY DIFFRACTION",
    "resolution": "3.56 \u00c5",
    "date": "2014-11-05",
    "note": "Crystal structure of the anti-hiv-1 antibody 2.2c in complex with hiv-1 93ug037 gp120"
  },
  {
    "id": "4RBW",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.50 \u00c5",
    "date": "2015-07-29",
    "note": "Crystal structure of human alpha-defensin 5, HD5 (Thr7Arg Glu21Arg mutant)"
  },
  {
    "id": "4RBX",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.10 \u00c5",
    "date": "2015-07-29",
    "note": "Crystal structure of human alpha-defensin 5, HD5 (Glu21Arg mutant)"
  },
  {
    "id": "4RFN",
    "method": "X-RAY DIFFRACTION",
    "resolution": "3.21 \u00c5",
    "date": "2015-07-15",
    "note": "Crystal structure of ADCC-potent Rhesus macaque ANTIBODY JR4 in complex with HIV-1 CLADE A/E GP120 and M48"
  },
  {
    "id": "4RFO",
    "method": "X-RAY DIFFRACTION",
    "resolution": "3.20 \u00c5",
    "date": "2015-07-15",
    "note": "Crystal structure of the ADCC-Potent Antibody N60-I3 Fab in complex with HIV-1 Clade A/E gp120 and M48u1"
  },
  {
    "id": "4RXW",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.73 \u00c5",
    "date": "2015-01-21",
    "note": "Crystal Structure of the cobalt human insulin derivative"
  },
  {
    "id": "4TGF",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1991-10-15",
    "note": "SOLUTION STRUCTURES OF HUMAN TRANSFORMING GROWTH FACTOR ALPHA DERIVED FROM 1*H NMR DATA"
  },
  {
    "id": "4TOT",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.39 \u00c5",
    "date": "2014-11-12",
    "note": "Crystal structure of rat cyclophilin D in complex with a potent nonimmunosuppressive inhibitor"
  },
  {
    "id": "4TTK",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.25 \u00c5",
    "date": "2014-09-10",
    "note": "Racemic structure of Sunflower Trypsin Inhibitor-1 (SFTI-1)"
  },
  {
    "id": "4TTL",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.70 \u00c5",
    "date": "2014-09-10",
    "note": "Racemic structure of cyclic Vc1.1 (cVc1.1-1)"
  },
  {
    "id": "4TTM",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.90 \u00c5",
    "date": "2014-09-10",
    "note": "Racemic structure of kalata B1 (kB1)"
  },
  {
    "id": "4TTN",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.25 \u00c5",
    "date": "2014-09-10",
    "note": "Quasi-racemic structure of [G6A]kalata B1"
  },
  {
    "id": "4TTO",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.30 \u00c5",
    "date": "2014-09-10",
    "note": "Quasi-racemic structure of [V25A] kalata B1"
  },
  {
    "id": "4TUJ",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.89 \u00c5",
    "date": "2015-07-15",
    "note": "Crystal structure of monoclonal antibody against neuroblastoma associated antigen."
  },
  {
    "id": "4TUK",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.60 \u00c5",
    "date": "2015-07-15",
    "note": "Crystal structure of monoclonal antibody against neuroblastoma associated antigen."
  },
  {
    "id": "4TUL",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.40 \u00c5",
    "date": "2015-07-15",
    "note": "Crystal structure of monoclonal antibody against neuroblastoma associated antigen."
  },
  {
    "id": "4U1V",
    "method": "X-RAY DIFFRACTION",
    "resolution": "3.00 \u00c5",
    "date": "2014-07-30",
    "note": "Crystal structure of the E. coli ribosome bound to linopristin."
  },
  {
    "id": "4U20",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.90 \u00c5",
    "date": "2014-07-30",
    "note": "Crystal structure of the E. coli ribosome bound to flopristin."
  },
  {
    "id": "4U24",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.90 \u00c5",
    "date": "2014-07-30",
    "note": "Crystal structure of the E. coli ribosome bound to dalfopristin."
  },
  {
    "id": "4U26",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.80 \u00c5",
    "date": "2014-07-30",
    "note": "Crystal structure of the E. coli ribosome bound to dalfopristin and quinupristin."
  },
  {
    "id": "4U2W",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.00 \u00c5",
    "date": "2015-01-14",
    "note": "Atomic resolution crystal structure of HV-BBI protease inhibitor from amphibian skin in complex with bovine trypsin"
  },
  {
    "id": "4UJ0",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.70 \u00c5",
    "date": "2015-04-15",
    "note": "Crystal structure of the tomato defensin TPP3"
  },
  {
    "id": "4UNE",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.59 \u00c5",
    "date": "2014-10-15",
    "note": "Human insulin B26Phe mutant crystal structure"
  },
  {
    "id": "4UNG",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.81 \u00c5",
    "date": "2014-10-15",
    "note": "Human insulin B26Asn mutant crystal structure"
  },
  {
    "id": "4UNH",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.75 \u00c5",
    "date": "2014-10-15",
    "note": "Human insulin B26Gly mutant crystal structure"
  },
  {
    "id": "4UY8",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.80 \u00c5",
    "date": "2014-10-29",
    "note": "Molecular basis for the ribosome functioning as a L-tryptophan sensor - Cryo-EM structure of a TnaC stalled E.coli ribosome"
  },
  {
    "id": "4V4I",
    "method": "X-RAY DIFFRACTION",
    "resolution": "3.71 \u00c5",
    "date": "2014-07-09",
    "note": "Crystal Structure of a 70S Ribosome-tRNA Complex Reveals Functional Interactions and Rearrangements."
  },
  {
    "id": "4V4P",
    "method": "X-RAY DIFFRACTION",
    "resolution": "5.50 \u00c5",
    "date": "2014-07-09",
    "note": "Crystal structure of 70S ribosome with thrS operator and tRNAs."
  },
  {
    "id": "4V4R",
    "method": "X-RAY DIFFRACTION",
    "resolution": "5.90 \u00c5",
    "date": "2014-07-09",
    "note": "Crystal structure of the whole ribosomal complex."
  },
  {
    "id": "4V4S",
    "method": "X-RAY DIFFRACTION",
    "resolution": "6.76 \u00c5",
    "date": "2014-07-09",
    "note": "Crystal structure of the whole ribosomal complex."
  },
  {
    "id": "4V4T",
    "method": "X-RAY DIFFRACTION",
    "resolution": "6.46 \u00c5",
    "date": "2014-07-09",
    "note": "Crystal structure of the whole ribosomal complex with a stop codon in the A-site."
  },
  {
    "id": "4V4X",
    "method": "X-RAY DIFFRACTION",
    "resolution": "5.00 \u00c5",
    "date": "2014-07-09",
    "note": "Crystal structure of the 70S Thermus thermophilus ribosome showing how the 16S 3'-end mimicks mRNA E and P codons."
  },
  {
    "id": "4V4Y",
    "method": "X-RAY DIFFRACTION",
    "resolution": "5.50 \u00c5",
    "date": "2014-07-09",
    "note": "Crystal structure of the 70S Thermus thermophilus ribosome with translocated and rotated Shine-Dalgarno Duplex."
  },
  {
    "id": "4V4Z",
    "method": "X-RAY DIFFRACTION",
    "resolution": "4.51 \u00c5",
    "date": "2014-07-09",
    "note": "70S Thermus thermophilous ribosome functional complex with mRNA and E- and P-site tRNAs at 4.5A."
  },
  {
    "id": "4V5B",
    "method": "X-RAY DIFFRACTION",
    "resolution": "3.74 \u00c5",
    "date": "2014-07-09",
    "note": "Structure of PDF binding helix in complex with the ribosome."
  },
  {
    "id": "4V5K",
    "method": "X-RAY DIFFRACTION",
    "resolution": "3.20 \u00c5",
    "date": "2014-07-09",
    "note": "Structure of cytotoxic domain of colicin E3 bound to the 70S ribosome"
  },
  {
    "id": "4V5R",
    "method": "X-RAY DIFFRACTION",
    "resolution": "3.10 \u00c5",
    "date": "2014-07-09",
    "note": "The crystal structure of EF-Tu and Trp-tRNA-Trp bound to a cognate codon on the 70S ribosome."
  },
  {
    "id": "4V5S",
    "method": "X-RAY DIFFRACTION",
    "resolution": "3.10 \u00c5",
    "date": "2014-07-09",
    "note": "The crystal structure of EF-Tu and G24A-tRNA-Trp bound to a cognate codon on the 70S ribosome."
  },
  {
    "id": "4V68",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "6.40 \u00c5",
    "date": "2014-07-09",
    "note": "T. thermophilus 70S ribosome in complex with mRNA, tRNAs and EF-Tu.GDP.kirromycin ternary complex, fitted to a 6.4 A Cryo-EM map."
  },
  {
    "id": "4V6A",
    "method": "X-RAY DIFFRACTION",
    "resolution": "3.10 \u00c5",
    "date": "2014-07-09",
    "note": "Structure of EF-P bound to the 70S ribosome."
  },
  {
    "id": "4V6C",
    "method": "X-RAY DIFFRACTION",
    "resolution": "3.19 \u00c5",
    "date": "2014-07-09",
    "note": "Crystal structure of the E. coli 70S ribosome in an intermediate state of ratcheting"
  },
  {
    "id": "4V6D",
    "method": "X-RAY DIFFRACTION",
    "resolution": "3.81 \u00c5",
    "date": "2014-07-09",
    "note": "Crystal structure of the E. coli 70S ribosome in an intermediate state of ratcheting"
  },
  {
    "id": "4V6E",
    "method": "X-RAY DIFFRACTION",
    "resolution": "3.71 \u00c5",
    "date": "2014-07-09",
    "note": "Crystal structure of the E. coli 70S ribosome in an intermediate state of ratcheting"
  },
  {
    "id": "4V7B",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "6.80 \u00c5",
    "date": "2014-07-09",
    "note": "Visualization of two tRNAs trapped in transit during EF-G-mediated translocation"
  },
  {
    "id": "4V7L",
    "method": "X-RAY DIFFRACTION",
    "resolution": "3.00 \u00c5",
    "date": "2014-07-09",
    "note": "The structures of viomycin bound to the 70S ribosome."
  },
  {
    "id": "4V7S",
    "method": "X-RAY DIFFRACTION",
    "resolution": "3.25 \u00c5",
    "date": "2014-07-09",
    "note": "Crystal structure of the E. coli ribosome bound to telithromycin."
  },
  {
    "id": "4V7T",
    "method": "X-RAY DIFFRACTION",
    "resolution": "3.19 \u00c5",
    "date": "2014-07-09",
    "note": "Crystal structure of the E. coli ribosome bound to chloramphenicol."
  },
  {
    "id": "4V7U",
    "method": "X-RAY DIFFRACTION",
    "resolution": "3.10 \u00c5",
    "date": "2014-07-09",
    "note": "Crystal structure of the E. coli ribosome bound to erythromycin."
  },
  {
    "id": "4V7V",
    "method": "X-RAY DIFFRACTION",
    "resolution": "3.29 \u00c5",
    "date": "2014-07-09",
    "note": "Crystal structure of the E. coli ribosome bound to clindamycin."
  },
  {
    "id": "4V83",
    "method": "X-RAY DIFFRACTION",
    "resolution": "3.50 \u00c5",
    "date": "2014-07-09",
    "note": "Crystal structure of a complex containing domain 3 from the PSIV IGR IRES RNA bound to the 70S ribosome."
  },
  {
    "id": "4V84",
    "method": "X-RAY DIFFRACTION",
    "resolution": "3.40 \u00c5",
    "date": "2014-07-09",
    "note": "Crystal structure of a complex containing domain 3 of CrPV IGR IRES RNA bound to the 70S ribosome."
  },
  {
    "id": "4V85",
    "method": "X-RAY DIFFRACTION",
    "resolution": "3.20 \u00c5",
    "date": "2014-07-09",
    "note": "Crystal Structure of Release Factor RF3 Trapped in the GTP State on a Rotated Conformation of the Ribosome."
  },
  {
    "id": "4V89",
    "method": "X-RAY DIFFRACTION",
    "resolution": "3.70 \u00c5",
    "date": "2014-07-09",
    "note": "Crystal Structure of Release Factor RF3 Trapped in the GTP State on a Rotated Conformation of the Ribosome (without viomycin)"
  },
  {
    "id": "4V8S",
    "method": "X-RAY DIFFRACTION",
    "resolution": "4.32 \u00c5",
    "date": "2014-07-09",
    "note": "Archaeal RNAP-DNA binary complex at 4.32Ang"
  },
  {
    "id": "4V8X",
    "method": "X-RAY DIFFRACTION",
    "resolution": "3.35 \u00c5",
    "date": "2014-07-09",
    "note": "Structure of Thermus thermophilus ribosome"
  },
  {
    "id": "4V9C",
    "method": "X-RAY DIFFRACTION",
    "resolution": "3.30 \u00c5",
    "date": "2014-07-09",
    "note": "Allosteric control of the ribosome by small-molecule antibiotics"
  },
  {
    "id": "4V9H",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.86 \u00c5",
    "date": "2014-07-09",
    "note": "Crystal structure of the ribosome bound to elongation factor G in the guanosine triphosphatase state"
  },
  {
    "id": "4V9I",
    "method": "X-RAY DIFFRACTION",
    "resolution": "3.30 \u00c5",
    "date": "2014-07-09",
    "note": "Crystal structure of thermus thermophilus 70S in complex with tRNAs and mRNA containing a pseudouridine in a stop codon"
  },
  {
    "id": "4V9J",
    "method": "X-RAY DIFFRACTION",
    "resolution": "3.86 \u00c5",
    "date": "2014-07-09",
    "note": "70S ribosome translocation intermediate GDPNP-II containing elongation factor EFG/GDPNP, mRNA, and tRNA bound in the pe*/E state."
  },
  {
    "id": "4V9K",
    "method": "X-RAY DIFFRACTION",
    "resolution": "3.50 \u00c5",
    "date": "2014-07-09",
    "note": "70S ribosome translocation intermediate GDPNP-I containing elongation factor EFG/GDPNP, mRNA, and tRNA bound in the pe*/E state."
  },
  {
    "id": "4V9L",
    "method": "X-RAY DIFFRACTION",
    "resolution": "3.50 \u00c5",
    "date": "2014-07-09",
    "note": "70S Ribosome translocation intermediate FA-3.6A containing elongation factor EFG/FUSIDIC ACID/GDP, mRNA, and tRNA bound in the pe*/E state."
  },
  {
    "id": "4V9M",
    "method": "X-RAY DIFFRACTION",
    "resolution": "4.00 \u00c5",
    "date": "2014-07-09",
    "note": "70S Ribosome translocation intermediate FA-4.2A containing elongation factor EFG/FUSIDIC ACID/GDP, mRNA, and tRNA bound in the pe*/E state."
  },
  {
    "id": "4V9N",
    "method": "X-RAY DIFFRACTION",
    "resolution": "3.40 \u00c5",
    "date": "2014-07-09",
    "note": "Crystal structure of the 70S ribosome bound with the Q253P mutant of release factor RF2."
  },
  {
    "id": "4V9O",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.90 \u00c5",
    "date": "2014-07-09",
    "note": "Control of ribosomal subunit rotation by elongation factor G"
  },
  {
    "id": "4V9P",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.90 \u00c5",
    "date": "2014-07-09",
    "note": "Control of ribosomal subunit rotation by elongation factor G"
  },
  {
    "id": "4V9Q",
    "method": "X-RAY DIFFRACTION",
    "resolution": "3.40 \u00c5",
    "date": "2014-07-09",
    "note": "Crystal Structure of Blasticidin S Bound to Thermus Thermophilus 70S Ribosome."
  },
  {
    "id": "4V9R",
    "method": "X-RAY DIFFRACTION",
    "resolution": "3.00 \u00c5",
    "date": "2014-07-09",
    "note": "Crystal structure of antibiotic DITYROMYCIN bound to 70S ribosome"
  },
  {
    "id": "4V9S",
    "method": "X-RAY DIFFRACTION",
    "resolution": "3.10 \u00c5",
    "date": "2014-07-09",
    "note": "Crystal structure of antibiotic GE82832 bound to 70S ribosome"
  },
  {
    "id": "4W2H",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.70 \u00c5",
    "date": "2014-10-15",
    "note": "Crystal structure of the Thermus thermophilus 70S ribosome in complex with pactamycin (co-crystallized), mRNA and deacylated tRNA in the P site"
  },
  {
    "id": "4W4Z",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.41 \u00c5",
    "date": "2014-10-08",
    "note": "Structure of the EphA4 LBD in complex with peptide"
  },
  {
    "id": "4W50",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.42 \u00c5",
    "date": "2014-10-08",
    "note": "Structure of the EphA4 LBD in complex with peptide"
  },
  {
    "id": "4WC8",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.91 \u00c5",
    "date": "2015-05-06",
    "note": "Heterogeneous dodecamer formed from macrocycles containing a sequence from beta-2-microglobulin(63-69)."
  },
  {
    "id": "4WCE",
    "method": "X-RAY DIFFRACTION",
    "resolution": "3.53 \u00c5",
    "date": "2015-10-21",
    "note": "The crystal structure of the large ribosomal subunit of Staphylococcus aureus"
  },
  {
    "id": "4WFA",
    "method": "X-RAY DIFFRACTION",
    "resolution": "3.39 \u00c5",
    "date": "2015-10-21",
    "note": "The crystal structure of the large ribosomal subunit of Staphylococcus aureus in complex with linezolid"
  },
  {
    "id": "4WFB",
    "method": "X-RAY DIFFRACTION",
    "resolution": "3.43 \u00c5",
    "date": "2015-10-21",
    "note": "The crystal structure of the large ribosomal subunit of Staphylococcus aureus in complex with BC-3205"
  },
  {
    "id": "4WK4",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.50 \u00c5",
    "date": "2014-12-03",
    "note": "Metal Ion and Ligand Binding of Integrin"
  },
  {
    "id": "4WM0",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.37 \u00c5",
    "date": "2015-09-30",
    "note": "Crystal structure of mouse Xyloside xylosyltransferase 1 complexed with acceptor ligand"
  },
  {
    "id": "4WMA",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.62 \u00c5",
    "date": "2015-09-30",
    "note": "Crystal structure of mouse Xyloside xylosyltransferase 1 complexed with manganese,acceptor ligand and UDP-Glucose"
  },
  {
    "id": "4WMB",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.05 \u00c5",
    "date": "2015-09-30",
    "note": "crystal structure of mouse Xyloside xylosyltransferase 1 complexed with manganese, acceptor ligand and UDP"
  },
  {
    "id": "4WMI",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.87 \u00c5",
    "date": "2015-09-30",
    "note": "Crystal structure of mouse Xyloside xylosyltransferase 1 complexed with manganese, product ligand and UDP (Product complex I)"
  },
  {
    "id": "4WMK",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.08 \u00c5",
    "date": "2015-09-30",
    "note": "Crystal structure of mouse Xyloside xylosyltransferase 1 complexed with manganese, product ligand and UDP (Product complex II)"
  },
  {
    "id": "4WN2",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.95 \u00c5",
    "date": "2015-09-30",
    "note": "Crystal structure of mouse Xyloside xylosyltransferase 1 complexed with manganese, product ligand and UDP (Product complex III)"
  },
  {
    "id": "4WNH",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.95 \u00c5",
    "date": "2015-09-30",
    "note": "Crystal structure of mouse Xyloside xylosyltransferase 1 complexed with manganese,acceptor ligand and UDP-Xylose"
  },
  {
    "id": "4WOI",
    "method": "X-RAY DIFFRACTION",
    "resolution": "3.00 \u00c5",
    "date": "2015-08-05",
    "note": "4,5-linked aminoglycoside antibiotics regulate the bacterial ribosome by targeting dynamic conformational processes within intersubunit bridge B2"
  },
  {
    "id": "4WP4",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.43 \u00c5",
    "date": "2015-03-04",
    "note": "Hev b 6.02 (hevein) extracted from surgical gloves"
  },
  {
    "id": "4WPB",
    "method": "X-RAY DIFFRACTION",
    "resolution": "3.11 \u00c5",
    "date": "2015-04-15",
    "note": "Vascular endothelial growth factor in complex with alpha/beta-VEGF-1"
  },
  {
    "id": "4WQU",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.80 \u00c5",
    "date": "2015-01-28",
    "note": "Crystal structure of the Thermus thermophilus 70S ribosome in complex with elongation factor G trapped by the antibiotic dityromycin"
  },
  {
    "id": "4WT8",
    "method": "X-RAY DIFFRACTION",
    "resolution": "3.40 \u00c5",
    "date": "2015-01-21",
    "note": "Crystal Structure of bactobolin A bound to 70S ribosome-tRNA complex"
  },
  {
    "id": "4WWW",
    "method": "X-RAY DIFFRACTION",
    "resolution": "3.10 \u00c5",
    "date": "2014-12-24",
    "note": "Crystal structure of the E. coli ribosome bound to CEM-101"
  },
  {
    "id": "4X0N",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.60 \u00c5",
    "date": "2015-11-25",
    "note": "Porcine pancreatic alpha-amylase in complex with helianthamide, a novel proteinaceous inhibitor"
  },
  {
    "id": "4X0S",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.03 \u00c5",
    "date": "2015-05-06",
    "note": "Hexamer formed by a macrocycle containing a sequence from beta-2-microglobulin (63-69)."
  },
  {
    "id": "4X0W",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.10 \u00c5",
    "date": "2015-10-21",
    "note": "The crystal structure of mupain-1-17 in complex with murinised human uPA"
  },
  {
    "id": "4X1N",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.80 \u00c5",
    "date": "2015-03-25",
    "note": "The crystal structure of mupain-1-16 in complex with murinised human uPA at pH7.4"
  },
  {
    "id": "4X1P",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.60 \u00c5",
    "date": "2015-10-21",
    "note": "The crystal structure of mupain-1-17 in complex with murinised human uPA at pH4.6"
  },
  {
    "id": "4X1Q",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.28 \u00c5",
    "date": "2015-03-25",
    "note": "The crystal structure of mupain-1 in complex with murinised human uPA at pH7.4"
  },
  {
    "id": "4X1R",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.10 \u00c5",
    "date": "2015-03-25",
    "note": "The crystal structure of mupain-1-12 in complex with murinised human uPA at pH7.4"
  },
  {
    "id": "4X1S",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.90 \u00c5",
    "date": "2015-10-28",
    "note": "The crystal structure of mupain-1-16-D9A in complex with murinised human uPA at pH7.4"
  },
  {
    "id": "4X6S",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.55 \u00c5",
    "date": "2015-09-23",
    "note": "Grb7 SH2 domain with phosphotyrosine mimetic inhibitor peptide"
  },
  {
    "id": "4X9Z",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.50 \u00c5",
    "date": "2015-12-02",
    "note": "Dimeric conotoxin alphaD-GeXXA"
  },
  {
    "id": "4XC4",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.50 \u00c5",
    "date": "2015-02-11",
    "note": "Insulin co-crystallizes in the presence of it beta-cell chaperone sulfatide"
  },
  {
    "id": "4XEJ",
    "method": "X-RAY DIFFRACTION",
    "resolution": "3.80 \u00c5",
    "date": "2015-02-25",
    "note": "IRES bound to bacterial Ribosome"
  },
  {
    "id": "4XOJ",
    "method": "X-RAY DIFFRACTION",
    "resolution": "0.91 \u00c5",
    "date": "2015-08-12",
    "note": "Structure of bovine trypsin in complex with analogues of sunflower inhibitor 1 (SFTI-1)"
  },
  {
    "id": "4Y1D",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.93 \u00c5",
    "date": "2015-05-13",
    "note": "Cyclic hexapeptide cyc[NdPopPKID] in complex with HIV-1 integrase core domain"
  },
  {
    "id": "4YCU",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.10 \u00c5",
    "date": "2015-06-10",
    "note": "Crystal structure of cladosporin in complex with human lysyl-tRNA synthetase"
  },
  {
    "id": "4YDV",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.70 \u00c5",
    "date": "2015-08-12",
    "note": "STRUCTURE OF THE ANTIBODY 7B2 THAT CAPTURES HIV-1 VIRIONS"
  },
  {
    "id": "4YIZ",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.20 \u00c5",
    "date": "2015-05-20",
    "note": "Crystal structure of engineered TgAMA1 lacking the DII loop in complex with an Eimeria tenella RON2D3 peptide"
  },
  {
    "id": "4YPI",
    "method": "X-RAY DIFFRACTION",
    "resolution": "3.71 \u00c5",
    "date": "2015-04-08",
    "note": "Structure of Ebola virus nucleoprotein N-terminal fragment bound to a peptide derived from Ebola VP35"
  },
  {
    "id": "4YV9",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.95 \u00c5",
    "date": "2015-04-08",
    "note": "X-ray crystal structure of Streptococcus dysgalactiae SHP pheromone receptor Rgg2"
  },
  {
    "id": "4Z09",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.00 \u00c5",
    "date": "2016-08-03",
    "note": "Crystal structure of FVO strain Plasmodium falciparum AMA1 in complex with the RON2hp [Thr2040Ala] peptide"
  },
  {
    "id": "4Z0D",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.10 \u00c5",
    "date": "2016-08-03",
    "note": "Crystal structure of FVO strain Plasmodium falciparum AMA1 in complex with the RON2hp [Phe2038Trp] peptide"
  },
  {
    "id": "4Z0E",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.90 \u00c5",
    "date": "2016-08-03",
    "note": "Crystal structure of FVO strain Plasmodium falciparum AMA1 in complex with the RON2hp [Phe2038TRN] peptide"
  },
  {
    "id": "4Z0F",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.30 \u00c5",
    "date": "2016-08-03",
    "note": "Crystal structure of FVO strain Plasmodium falciparum AMA1 in complex with the RON2hp [Phe2038(6CW)] peptide"
  },
  {
    "id": "4Z7P",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.20 \u00c5",
    "date": "2015-09-09",
    "note": "X-ray structure of racemic ShK Q16K toxin"
  },
  {
    "id": "4Z80",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.53 \u00c5",
    "date": "2015-12-30",
    "note": "Crystal structure of Toxoplasma gondii AMA4 DI-DII-EGF1 in complex with a 33 aa TgRON2L1 peptide"
  },
  {
    "id": "4ZCE",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.55 \u00c5",
    "date": "2015-11-25",
    "note": "Crystal Structure of the dust mite allergen Der p 23 from Dermatophagoides pteronyssinus"
  },
  {
    "id": "4ZHL",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.06 \u00c5",
    "date": "2015-09-16",
    "note": "The crystal structure of mupain-1-IG in complex with murinised human uPA at pH7.4"
  },
  {
    "id": "4ZHM",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.90 \u00c5",
    "date": "2015-09-16",
    "note": "The crystal structure of mupain-1--16-IG in complex with murinised human uPA at pH7.4"
  },
  {
    "id": "4ZJX",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.94 \u00c5",
    "date": "2016-06-01",
    "note": "Crystal structure of the catalytic domain of botulinum neurotoxin serotype A with a Novel Cyclic Peptide Inhibitor"
  },
  {
    "id": "4ZKN",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.36 \u00c5",
    "date": "2016-05-18",
    "note": "The crystal structure of upain-1-W3A in complex with uPA at pH5.5"
  },
  {
    "id": "4ZKS",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.85 \u00c5",
    "date": "2016-05-18",
    "note": "The crystal structure of upain-1-W3A in complex with inactive uPA (uPA-S195A) at pH7.4"
  },
  {
    "id": "4ZQW",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.00 \u00c5",
    "date": "2015-10-28",
    "note": "CdiI from Escherichia coli EC869 in complex with a macrocyclic peptide"
  },
  {
    "id": "5A0E",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.25 \u00c5",
    "date": "2015-12-30",
    "note": "Crystal structure of cyclophilin D in complex with CsA analogue, JW47."
  },
  {
    "id": "5A9Z",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "4.70 \u00c5",
    "date": "2015-10-14",
    "note": "Complex of Thermous thermophilus ribosome bound to BipA-GDPCP"
  },
  {
    "id": "5AA0",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "5.00 \u00c5",
    "date": "2015-10-14",
    "note": "Complex of Thermous thermophilus ribosome (A-and P-site tRNA) bound to BipA-GDPCP"
  },
  {
    "id": "5AIY",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2000-02-28",
    "note": "R6 HUMAN INSULIN HEXAMER (SYMMETRIC), NMR, 'RED' SUBSTATE, AVERAGE STRUCTURE"
  },
  {
    "id": "5AZZ",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.45 \u00c5",
    "date": "2017-05-03",
    "note": "Crystal structure of seleno-insulin"
  },
  {
    "id": "5BJT",
    "method": "X-RAY DIFFRACTION",
    "resolution": "3.20 \u00c5",
    "date": "2017-03-22",
    "note": "Crystal structure of human FcRn with a peptide inhibitor at multiple sites"
  },
  {
    "id": "5BMM",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.50 \u00c5",
    "date": "2016-09-21",
    "note": "Src in complex with DNA-templated macrocyclic inhibitor MC25b"
  },
  {
    "id": "5BOQ",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.70 \u00c5",
    "date": "2016-02-03",
    "note": "Human insulin with intra-chain chemical crosslink between modified B24 and B29"
  },
  {
    "id": "5BPO",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.90 \u00c5",
    "date": "2016-02-03",
    "note": "Human insulin with intra-chain chemical crosslink between modified B27 and B29"
  },
  {
    "id": "5BQQ",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.54 \u00c5",
    "date": "2016-02-03",
    "note": "Human insulin with intra-chain chemical crosslink between modified B27 and B30"
  },
  {
    "id": "5BTS",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.77 \u00c5",
    "date": "2016-03-09",
    "note": "Structural and biophysical characterization of a covalent insulin dimer formed during storage of neutral formulation of human insulin"
  },
  {
    "id": "5BUM",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.50 \u00c5",
    "date": "2016-06-08",
    "note": "Crystal Structure of LysM domain from Equisetum arvense chitinase A"
  },
  {
    "id": "5CNY",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.70 \u00c5",
    "date": "2015-08-26",
    "note": "Crystal Structure of human zinc insulin at pH 5.5"
  },
  {
    "id": "5CO2",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.70 \u00c5",
    "date": "2015-08-26",
    "note": "Crystalization of human zinc insulin at pH 5.5"
  },
  {
    "id": "5CO5",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.10 \u00c5",
    "date": "2016-07-20",
    "note": "Crystal structure of Ac-AChBP in complex with conotoxin GIC"
  },
  {
    "id": "5CO6",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.80 \u00c5",
    "date": "2015-08-26",
    "note": "Crystal structure of human zinc insulin at pH 6.5"
  },
  {
    "id": "5CO9",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.92 \u00c5",
    "date": "2015-08-26",
    "note": "Crystal structure of human zinc insulin at pH 6.5"
  },
  {
    "id": "5CS2",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.65 \u00c5",
    "date": "2015-10-28",
    "note": "Crystal structure of Plasmodium falciparum diadenosine triphosphate hydrolase in complex with Cyclomarin A"
  },
  {
    "id": "5CUI",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.40 \u00c5",
    "date": "2016-07-27",
    "note": "Crystal structure of Human Defensin-5 R28A mutant."
  },
  {
    "id": "5CUJ",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.08 \u00c5",
    "date": "2016-07-27",
    "note": "Crystal structure of Human Defensin-5 Y27A mutant crystal form 2."
  },
  {
    "id": "5CUM",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.75 \u00c5",
    "date": "2016-07-27",
    "note": "Crystal structure of Human Defensin-5 Y27A mutant crystal form 1."
  },
  {
    "id": "5D2A",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.13 \u00c5",
    "date": "2016-02-10",
    "note": "Bifunctional dendrimers"
  },
  {
    "id": "5D52",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.80 \u00c5",
    "date": "2016-01-13",
    "note": "In meso in situ serial X-ray crystallography structure of insulin at room temperature"
  },
  {
    "id": "5D53",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.50 \u00c5",
    "date": "2016-01-13",
    "note": "In meso in situ serial X-ray crystallography structure of insulin at 100 K"
  },
  {
    "id": "5D54",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.50 \u00c5",
    "date": "2016-01-13",
    "note": "In meso X-ray crystallography structure of insulin at 100 K"
  },
  {
    "id": "5D5E",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.41 \u00c5",
    "date": "2016-01-13",
    "note": "In meso in situ serial X-ray crystallography structure of insulin by sulfur-SAD at 100 K"
  },
  {
    "id": "5DI8",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.90 \u00c5",
    "date": "2016-03-30",
    "note": "Fc Knob-Hole Heterodimer T366W + T366S/L368A/Y407V"
  },
  {
    "id": "5DJ0",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.28 \u00c5",
    "date": "2016-03-30",
    "note": "Fc Heterodimer Design 11.2 Y349S/K370Y + E357D/S364Q"
  },
  {
    "id": "5DJ2",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.56 \u00c5",
    "date": "2016-03-30",
    "note": "Fc Heterodimer Design 7.4 Y407A + T366V/K409V"
  },
  {
    "id": "5DJ6",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.00 \u00c5",
    "date": "2016-03-30",
    "note": "Fc Heterodimer Design 6.1 F405W/Y407A + T366M"
  },
  {
    "id": "5DJ8",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.40 \u00c5",
    "date": "2016-03-30",
    "note": "Fc Heterodimer Design 7.7 D399M/Y407A + T366V/K409I"
  },
  {
    "id": "5DJA",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.90 \u00c5",
    "date": "2016-03-30",
    "note": "Fc Heterodimer Design 9.1 Y407M + T366I"
  },
  {
    "id": "5DJC",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.10 \u00c5",
    "date": "2016-03-30",
    "note": "Fc Heterodimer Design 8.1 L368V/Y407A + T366V/K409F"
  },
  {
    "id": "5DJD",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.30 \u00c5",
    "date": "2016-03-30",
    "note": "Fc Heterodimer Design 5.1 T366V + Y407F"
  },
  {
    "id": "5DJX",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.25 \u00c5",
    "date": "2016-03-30",
    "note": "Fc Heterodimer Design 2.9 L368M/K370E + E357A/S364G"
  },
  {
    "id": "5DJY",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.15 \u00c5",
    "date": "2016-03-30",
    "note": "Fc Heterodimer Design 20.8 Y349S/T366V/K370Y/K409V + E357D/S364Q/Y407A"
  },
  {
    "id": "5DJZ",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.90 \u00c5",
    "date": "2016-03-30",
    "note": "Fc Heterodimer Design 7.8 D399M/Y407A + T366V/K409V"
  },
  {
    "id": "5DK0",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.30 \u00c5",
    "date": "2016-03-30",
    "note": "Fc Heterodimer Design 20.8.34 Y349S/T366M/K370Y/K409V + E356G/E357D/S364Q/Y407A"
  },
  {
    "id": "5DK2",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.60 \u00c5",
    "date": "2016-03-30",
    "note": "Fc Heterodimer E356K/D399K + K392D/K409D"
  },
  {
    "id": "5DRZ",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.54 \u00c5",
    "date": "2016-10-19",
    "note": "Crystal structure of anti-HIV-1 antibody F240 Fab in complex with gp41 peptide"
  },
  {
    "id": "5DVK",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.60 \u00c5",
    "date": "2016-03-30",
    "note": "Fc Design 7.7 B chain homodimer T366V/K409I"
  },
  {
    "id": "5DVL",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.90 \u00c5",
    "date": "2016-03-30",
    "note": "Fc Design 20.8.37 A chain homodimer Y349S/T366M/K370Y/K409V"
  },
  {
    "id": "5DVM",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.95 \u00c5",
    "date": "2016-03-30",
    "note": "Fc Design 20.8.37 B chain homodimer E357D/S364R/Y407A"
  },
  {
    "id": "5DVN",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.50 \u00c5",
    "date": "2016-03-30",
    "note": "Fc K392D/K409D homodimer"
  },
  {
    "id": "5E7W",
    "method": "X-RAY DIFFRACTION",
    "resolution": "0.95 \u00c5",
    "date": "2016-10-12",
    "note": "X-ray Structure of Human Recombinant 2Zn insulin at 0.92 Angstrom"
  },
  {
    "id": "5EEL",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.47 \u00c5",
    "date": "2016-06-15",
    "note": "Grb7 SH2 with bicyclic peptide inhibitor"
  },
  {
    "id": "5EEQ",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.60 \u00c5",
    "date": "2016-06-15",
    "note": "Grb7 SH2 with the G7-B1 bicyclic peptide inhibitor"
  },
  {
    "id": "5EFJ",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.73 \u00c5",
    "date": "2016-07-27",
    "note": "Crystal structure of Danio rerio histone deacetylase 6 catalytic domain 2 in complex with HC toxin"
  },
  {
    "id": "5EFM",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.95 \u00c5",
    "date": "2016-07-20",
    "note": "Beclin 1 Flexible-helical Domian (FHD) (141-171)"
  },
  {
    "id": "5EMS",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.30 \u00c5",
    "date": "2016-11-16",
    "note": "Crystal Structure of an iodinated insulin analog"
  },
  {
    "id": "5EN9",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.50 \u00c5",
    "date": "2016-01-13",
    "note": "High resolution x-ray crystal structure of isotope-labeled ester-insulin"
  },
  {
    "id": "5ENA",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.35 \u00c5",
    "date": "2016-01-13",
    "note": "Xray crystal structure of isotope-labeled human insulin"
  },
  {
    "id": "5EOC",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.98 \u00c5",
    "date": "2016-02-10",
    "note": "Crystal structure of Fab C2 in complex with a Cyclic variant of Hepatitis C Virus E2 epitope I"
  },
  {
    "id": "5EPM",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.75 \u00c5",
    "date": "2016-05-04",
    "note": "Ceratotoxin variant in complex with specific antibody Fab fragment"
  },
  {
    "id": "5ESQ",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.55 \u00c5",
    "date": "2016-06-15",
    "note": "Cetuximab Fab in complex with cyclic beta-alanine-linked meditope"
  },
  {
    "id": "5ETU",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.53 \u00c5",
    "date": "2016-10-26",
    "note": "Cetuximab Fab in complex with L5E meditope variant"
  },
  {
    "id": "5EUK",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.50 \u00c5",
    "date": "2016-10-26",
    "note": "Cetuximab Fab in complex with F3H meditope variant"
  },
  {
    "id": "5F1T",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.97 \u00c5",
    "date": "2016-03-16",
    "note": "Crystal structure of a macrocyclic peptide containing fragments from alpha-synuclein 36-55."
  },
  {
    "id": "5F1W",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.16 \u00c5",
    "date": "2016-03-16",
    "note": "Crystal structure of the enantiomer of a macrocyclic peptide containing fragments from alpha synuclein 36-55"
  },
  {
    "id": "5F84",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.50 \u00c5",
    "date": "2016-07-20",
    "note": "Crystal structure of Drosophila Poglut1 (Rumi) complexed with its glycoprotein product (glucosylated EGF repeat) and UDP"
  },
  {
    "id": "5F85",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.15 \u00c5",
    "date": "2016-07-20",
    "note": "Crystal structure of Drosophila Poglut1 (Rumi) complexed with its substrate protein (EGF repeat) and UDP"
  },
  {
    "id": "5F86",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.90 \u00c5",
    "date": "2016-07-20",
    "note": "Crystal structure of Drosophila Poglut1 (Rumi) complexed with its substrate protein (EGF repeat)"
  },
  {
    "id": "5F88",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.48 \u00c5",
    "date": "2016-10-26",
    "note": "Cetuximab Fab in complex with L5Y meditope variant"
  },
  {
    "id": "5F8T",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.75 \u00c5",
    "date": "2016-12-14",
    "note": "The crystal structure of human Plasma Kallikrein in complex with its peptide inhibitor pkalin-2"
  },
  {
    "id": "5F8X",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.55 \u00c5",
    "date": "2016-12-14",
    "note": "The crystal structure of human plasma kallikrein in complex with its peptide inhibitor pkalin-3"
  },
  {
    "id": "5F8Z",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.50 \u00c5",
    "date": "2016-12-14",
    "note": "The crystal structure of human Plasma Kallikrein in complex with its peptide inhibitor pkalin-1"
  },
  {
    "id": "5FB6",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.90 \u00c5",
    "date": "2016-06-15",
    "note": "Room-temperature macromolecular crystallography using a micro-patterned silicon chip with minimal background scattering"
  },
  {
    "id": "5FDV",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.80 \u00c5",
    "date": "2016-01-27",
    "note": "Crystal structure of the Pyrrhocoricin antimicrobial peptide bound to the Thermus thermophilus 70S ribosome"
  },
  {
    "id": "5FF6",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.50 \u00c5",
    "date": "2016-10-26",
    "note": "Cetuximab Fab in complex with L10Q meditope variant"
  },
  {
    "id": "5FZV",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2016-06-08",
    "note": "High resolution solution NMR structure of the spider venom peptide U3- scytotoxin-Sth1a"
  },
  {
    "id": "5FZW",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2016-06-08",
    "note": "High resolution solution NMR structure of the spider venom peptide U3- scytotoxin-Sth1h"
  },
  {
    "id": "5FZX",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2016-06-08",
    "note": "High resolution solution NMR structure of the spider venom peptide U5- scytotoxin-Sth1a"
  },
  {
    "id": "5GLH",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.80 \u00c5",
    "date": "2016-09-07",
    "note": "Human endothelin receptor type-B in complex with ET-1"
  },
  {
    "id": "5GRD",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.80 \u00c5",
    "date": "2017-08-09",
    "note": "Crystal structure of 10-mer peptide from EBV in complex with HLA-A1101."
  },
  {
    "id": "5GRG",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.94 \u00c5",
    "date": "2017-08-09",
    "note": "Crystal structure of dual peptide from EBV in complex with HLA-A*11:01"
  },
  {
    "id": "5GSF",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2017-01-25",
    "note": "Structure of roseltide rT1"
  },
  {
    "id": "5H1H",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2017-04-19",
    "note": "NMR structure of SLBA, a chimera of SFTI"
  },
  {
    "id": "5H1I",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2017-04-19",
    "note": "NMR structure of TIBA, a chimera of SFTI"
  },
  {
    "id": "5H1S",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.50 \u00c5",
    "date": "2017-02-01",
    "note": "Structure of the large subunit of the chloro-ribosome"
  },
  {
    "id": "5H5Q",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.10 \u00c5",
    "date": "2016-12-07",
    "note": "Crystal structure of human GPX4 in complex with GXpep-1"
  },
  {
    "id": "5H5R",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.20 \u00c5",
    "date": "2016-12-07",
    "note": "Crystal structure of human GPX4 in complex with GXpep-2"
  },
  {
    "id": "5H5S",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.85 \u00c5",
    "date": "2016-12-07",
    "note": "Crystal structure of human GPX4 in complex with GXpep-3"
  },
  {
    "id": "5H5U",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.01 \u00c5",
    "date": "2017-01-25",
    "note": "Mechanistic insights into the alternative translation termination by ArfA and RF2"
  },
  {
    "id": "5H5Z",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.74 \u00c5",
    "date": "2017-11-22",
    "note": "Crystal structure of bony fish MHC class I, peptide and B2m II"
  },
  {
    "id": "5HL7",
    "method": "X-RAY DIFFRACTION",
    "resolution": "3.55 \u00c5",
    "date": "2016-12-21",
    "note": "The crystal structure of the large ribosomal subunit of Staphylococcus aureus in complex with lefamulin"
  },
  {
    "id": "5HOW",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.29 \u00c5",
    "date": "2016-03-23",
    "note": "X-ray crystallographic structure of an Abeta 17-36 beta-hairpin. LV(PHI)FAEDCGSNKCAII(SAR)L(ORN)V"
  },
  {
    "id": "5HOX",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.90 \u00c5",
    "date": "2016-03-23",
    "note": "X-ray crystallographic structure of an A-beta 17_36 beta-hairpin. Synchrotron data set. (LVFFAEDCGSNKCAII(SAR)LMV)."
  },
  {
    "id": "5HOY",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.29 \u00c5",
    "date": "2016-03-23",
    "note": "X-ray crystallographic structure of an A-beta 17_36 beta-hairpin. X-ray diffractometer data set. (LVFFAEDCGSNKCAII(SAR)LMV)."
  },
  {
    "id": "5HPM",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.67 \u00c5",
    "date": "2016-06-15",
    "note": "Cetuximab Fab in complex with cyclic linked meditope"
  },
  {
    "id": "5HPP",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.08 \u00c5",
    "date": "2016-08-10",
    "note": "Crystal structure of a macrocyclic beta-sheet peptide derived from transthyretin (106-121) - (ORN)TIA(MAA)LLS(ORN)S(PHI)STTAV"
  },
  {
    "id": "5HPR",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.33 \u00c5",
    "date": "2017-01-25",
    "note": "Insulin with proline analog HyP at position B28 in the T2 state"
  },
  {
    "id": "5HPU",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.20 \u00c5",
    "date": "2017-01-25",
    "note": "Insulin with proline analog HyP at position B28 in the R6 state"
  },
  {
    "id": "5HQI",
    "method": "X-RAY DIFFRACTION",
    "resolution": "0.97 \u00c5",
    "date": "2017-01-25",
    "note": "Insulin with proline analog HzP at position B28 in the T2 state"
  },
  {
    "id": "5HRQ",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.28 \u00c5",
    "date": "2017-01-25",
    "note": "Insulin with proline analog HzP at position B28 in the R6 state"
  },
  {
    "id": "5HSV",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.50 \u00c5",
    "date": "2017-08-16",
    "note": "X-Ray structure of a CypA-Alisporivir complex at 1.5 angstrom resolution"
  },
  {
    "id": "5HYQ",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.48 \u00c5",
    "date": "2016-06-15",
    "note": "Cetuximab Fab in complex with amidated meditope"
  },
  {
    "id": "5I1X",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2017-02-08",
    "note": "Resonance assignments and NMR structure determination of tarantula toxin, F8A mutant of beta-TRTX-Pre1a"
  },
  {
    "id": "5I2I",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.55 \u00c5",
    "date": "2016-10-26",
    "note": "Structure of cetuximab Fab with cyclic F3Q variant of the meditope"
  },
  {
    "id": "5I2P",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2017-06-28",
    "note": "Resonance assignments and NMR structure determination of tarantula toxin- W7A mutant of mu-TRTX-Pre1a (W6A in native sequence numbering)"
  },
  {
    "id": "5I5A",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.20 \u00c5",
    "date": "2017-01-25",
    "note": "quasi racemic structure of allo-Ile7-ShK and D-ShK"
  },
  {
    "id": "5I5B",
    "method": "X-RAY DIFFRACTION",
    "resolution": "0.90 \u00c5",
    "date": "2017-01-25",
    "note": "quasi racemic structure of allo-Thr13-ShK and D-ShK"
  },
  {
    "id": "5I5C",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.30 \u00c5",
    "date": "2017-01-25",
    "note": "X-ray crystal structure of allo-Thr31-ShK"
  },
  {
    "id": "5ICX",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.60 \u00c5",
    "date": "2016-06-15",
    "note": "Cetuximab Fab in complex with CQFDLSTRRLRCGGSK meditope"
  },
  {
    "id": "5ICZ",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.55 \u00c5",
    "date": "2016-06-15",
    "note": "Cetuximab Fab in complex with GQFDLSTRRLKG peptide"
  },
  {
    "id": "5ID1",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.49 \u00c5",
    "date": "2016-06-15",
    "note": "Cetuximab Fab in complex with MPT-Cys meditope"
  },
  {
    "id": "5INZ",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.45 \u00c5",
    "date": "2016-04-27",
    "note": "Racemic structure of baboon theta defensin-2"
  },
  {
    "id": "5IOP",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.50 \u00c5",
    "date": "2016-10-26",
    "note": "Cetuximab Fab in complex with 4-bromophenylalanine meditope variant"
  },
  {
    "id": "5IPO",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2016-06-29",
    "note": "Solution Structure of Hge36: Scorpine-like Peptide from Hadrurus Gertschi"
  },
  {
    "id": "5IR1",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.48 \u00c5",
    "date": "2016-10-26",
    "note": "Cetuximab Fab in complex with 3-bromophenylalanine meditope variant"
  },
  {
    "id": "5IV2",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.48 \u00c5",
    "date": "2016-10-26",
    "note": "Cetuximab Fab in complex with Arg9Cir meditope variant"
  },
  {
    "id": "5IVZ",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.48 \u00c5",
    "date": "2016-10-26",
    "note": "Cetuximab Fab in complex with Arg8Cir meditope variant"
  },
  {
    "id": "5J8T",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2017-05-10",
    "note": "NMR structure of Excalibur domain of CbpL"
  },
  {
    "id": "5JBT",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.40 \u00c5",
    "date": "2016-11-09",
    "note": "Mesotrypsin in complex with cleaved amyloid precursor like protein 2 inhibitor (APLP2)"
  },
  {
    "id": "5JG9",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.09 \u00c5",
    "date": "2016-09-28",
    "note": "Crystal structure of the de novo mini protein gEHEE_06"
  },
  {
    "id": "5JHI",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2016-09-28",
    "note": "Solution structure of the de novo mini protein gEHE_06"
  },
  {
    "id": "5JI4",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2016-09-28",
    "note": "Solution structure of the de novo mini protein gEEHE_02"
  },
  {
    "id": "5JME",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.34 \u00c5",
    "date": "2016-05-11",
    "note": "Crystal structure of acetylcholine binding protein (AChBP) from Aplysia Californica in complex with alpha-conotoxin PeIA"
  },
  {
    "id": "5JPF",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.40 \u00c5",
    "date": "2016-08-31",
    "note": "Serine/Threonine phosphatase Z1 (Candida albicans) binds to inhibitor microcystin-LR"
  },
  {
    "id": "5JPL",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2017-03-01",
    "note": "LP2006, a handcuff-topology lasso peptide antibiotic"
  },
  {
    "id": "5JQY",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.99 \u00c5",
    "date": "2017-05-24",
    "note": "Aspartyl/Asparaginyl beta-hydroxylase (AspH)oxygenase and TPR domains in complex with manganese, N-oxalylglycine and factor X substrate peptide fragment(39mer-4Ser)"
  },
  {
    "id": "5JR2",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.75 \u00c5",
    "date": "2016-07-06",
    "note": "Crystal structure of the EphA4 LBD in complex with APYd3 peptide inhibitor"
  },
  {
    "id": "5JTC",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.24 \u00c5",
    "date": "2017-05-24",
    "note": "Aspartyl/Asparaginyl beta-hydroxylase (AspH)oxygenase and TPR domains in complex with manganese, 2,4-pyridine dicarboxylate and factor X substrate peptide fragment(39mer-4Ser)"
  },
  {
    "id": "5JYH",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2016-06-29",
    "note": "Solution Structure of Hge36: Scorpine-like Peptide from Hadrurus Gertschi"
  },
  {
    "id": "5JYQ",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.95 \u00c5",
    "date": "2016-09-07",
    "note": "Structure of Conus Geographus insulin G1"
  },
  {
    "id": "5JZ8",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.10 \u00c5",
    "date": "2017-05-24",
    "note": "Aspartyl/Asparaginyl beta-hydroxylase (AspH)oxygenase and TPR domains in complex with manganese, N-oxalylglycine, and factor X substrate peptide fragment (39mer)"
  },
  {
    "id": "5JZU",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.50 \u00c5",
    "date": "2017-06-07",
    "note": "Aspartyl/Asparaginyl beta-hydroxylase (AspH)oxygenase and TPR domains in complex with manganese, N-oxalylglycine and factor X substrate peptide fragment (26mer)"
  },
  {
    "id": "5K2L",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.20 \u00c5",
    "date": "2017-02-22",
    "note": "Crystal structure of LysM domain from Volvox carteri chitinase"
  },
  {
    "id": "5KI9",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.60 \u00c5",
    "date": "2017-06-28",
    "note": "Crystal structure of human beta-defensin 4 (HBD4)"
  },
  {
    "id": "5KJR",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.98 \u00c5",
    "date": "2016-07-20",
    "note": "Crystal structure of the ADCC-potent antibody N60-i3 Fab in complex with HIV-1 Clade A/E gp120 W69A/S115W mutant and M48U1."
  },
  {
    "id": "5KK4",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.70 \u00c5",
    "date": "2016-10-05",
    "note": "Crystal Structure of the Plant Defensin NsD7 bound to Phosphatidic Acid"
  },
  {
    "id": "5KKM",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2017-05-31",
    "note": "Con-Vc11-22"
  },
  {
    "id": "5KN5",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.80 \u00c5",
    "date": "2016-08-31",
    "note": "TGFalpha/Epiregulin complex with neutralizing antibody LY3016859"
  },
  {
    "id": "5KQV",
    "method": "X-RAY DIFFRACTION",
    "resolution": "4.40 \u00c5",
    "date": "2017-07-19",
    "note": "Insulin receptor ectodomain construct comprising domains L1,CR,L2, FnIII-1 and alphaCT peptide in complex with bovine insulin and FAB 83-14 (REVISED STRUCTURE)"
  },
  {
    "id": "5KVN",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2016-09-21",
    "note": "NMR Solution Structure of Designed Peptide NC_HEE_D1"
  },
  {
    "id": "5KWO",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2016-09-21",
    "note": "NMR Solution Structure of Designed Peptide NC_EHE_D1"
  },
  {
    "id": "5KWP",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2016-09-21",
    "note": "NMR Solution Structure of Designed Peptide NC_EEH_D2"
  },
  {
    "id": "5KWX",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2016-09-21",
    "note": "NMR Solution Structure of Designed Peptide NC_EEH_D1"
  },
  {
    "id": "5KWZ",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2016-09-21",
    "note": "NMR Solution Structure of Designed Peptide NC_cHH_D1"
  },
  {
    "id": "5KX0",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2016-09-21",
    "note": "NMR Solution Structure of Designed Peptide NC_cHh_DL_D1"
  },
  {
    "id": "5KX1",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2016-09-21",
    "note": "NMR Solution Structure of Designed Peptide NC_cHHH_D1"
  },
  {
    "id": "5KX2",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2016-09-21",
    "note": "NMR Solution Structure of Designed Peptide NC_cEE_D1"
  },
  {
    "id": "5KXH",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.33 \u00c5",
    "date": "2017-05-17",
    "note": "mouse POFUT1 in complex with mouse Factor VII EGF1 and GDP"
  },
  {
    "id": "5KY0",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.53 \u00c5",
    "date": "2017-05-17",
    "note": "mouse POFUT1 in complex with mouse Notch1 EGF12(D464G) and GDP"
  },
  {
    "id": "5KY2",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.47 \u00c5",
    "date": "2017-05-17",
    "note": "mouse POFUT1 in complex with O-glucosylated mouse Factor VII EGF1 and GDP"
  },
  {
    "id": "5KY3",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.53 \u00c5",
    "date": "2017-05-17",
    "note": "mouse POFUT1 in complex with mouse Factor VII EGF1 mutant (T101A) and GDP-fucose"
  },
  {
    "id": "5KY4",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.47 \u00c5",
    "date": "2017-05-17",
    "note": "mouse POFUT1 in complex with mouse Notch1 EGF26 and GDP"
  },
  {
    "id": "5KY5",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.50 \u00c5",
    "date": "2017-05-17",
    "note": "mouse POFUT1 in complex with EGF(+) and GDP"
  },
  {
    "id": "5KY7",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.60 \u00c5",
    "date": "2017-05-17",
    "note": "mouse POFUT1 in complex with O-glucosylated EGF(+) and GDP"
  },
  {
    "id": "5KY8",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.65 \u00c5",
    "date": "2017-05-17",
    "note": "mouse POFUT1 in complex with O-glucosylated mouse Notch1 EGF12 mutant (D464G) and GDP"
  },
  {
    "id": "5KY9",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.83 \u00c5",
    "date": "2017-05-17",
    "note": "mouse POFUT1 in complex with mouse Notch1 EGF12 mutant (D464G/A465G) and GDP"
  },
  {
    "id": "5KZP",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.26 \u00c5",
    "date": "2017-07-05",
    "note": "Structure of the HCV1-C1 Antibody-Antigen Complex"
  },
  {
    "id": "5L0R",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.50 \u00c5",
    "date": "2017-08-09",
    "note": "human POGLUT1 in complex with Notch1 EGF12 and UDP"
  },
  {
    "id": "5L0S",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.45 \u00c5",
    "date": "2017-08-09",
    "note": "human POGLUT1 in complex with Factor VII EGF1 and UDP"
  },
  {
    "id": "5L0T",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.43 \u00c5",
    "date": "2017-08-09",
    "note": "human POGLUT1 in complex with EGF(+) and UDP"
  },
  {
    "id": "5L0U",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.80 \u00c5",
    "date": "2017-08-09",
    "note": "human POGLUT1 in complex with EGF(+) and UDP-phosphono-glucose"
  },
  {
    "id": "5L0V",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.30 \u00c5",
    "date": "2017-08-09",
    "note": "human POGLUT1 in complex with 2F-glucose modified EGF(+) and UDP"
  },
  {
    "id": "5L1C",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2017-08-09",
    "note": "Heteronuclear Solution Structure of Chlorotoxin"
  },
  {
    "id": "5L34",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2017-03-08",
    "note": "Calculated solution structure of [D-Trp3]-Contryphan-Vc2"
  },
  {
    "id": "5LAH",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2017-05-10",
    "note": "NMR structure of the sea anemone peptide tau-AnmTx Ueq 12-1 with an uncommon fold"
  },
  {
    "id": "5LCS",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2016-09-07",
    "note": "NMR structure of Chicken AvBD7 defensin"
  },
  {
    "id": "5LFF",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2016-09-07",
    "note": "NMR structure of peptide 2 targeting CXCR4"
  },
  {
    "id": "5LFH",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2016-09-07",
    "note": "NMR structure of peptide 10 targeting CXCR4"
  },
  {
    "id": "5LIS",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.29 \u00c5",
    "date": "2016-08-03",
    "note": "Insulin solved by Native SAD from a dataset collected in one second"
  },
  {
    "id": "5LM0",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2017-08-16",
    "note": "NMR spatial structure of Tk-hefu peptide"
  },
  {
    "id": "5LZB",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "5.30 \u00c5",
    "date": "2016-11-23",
    "note": "Structure of SelB-Sec-tRNASec bound to the 70S ribosome in the initial binding state (IB)"
  },
  {
    "id": "5LZC",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "4.80 \u00c5",
    "date": "2016-11-23",
    "note": "Structure of SelB-Sec-tRNASec bound to the 70S ribosome in the codon reading state (CR)"
  },
  {
    "id": "5LZD",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.40 \u00c5",
    "date": "2016-11-23",
    "note": "Structure of SelB-Sec-tRNASec bound to the 70S ribosome in the GTPase activated state (GA)"
  },
  {
    "id": "5LZE",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.50 \u00c5",
    "date": "2016-11-23",
    "note": "Structure of the 70S ribosome with Sec-tRNASec in the classical pre-translocation state (C)"
  },
  {
    "id": "5LZF",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "4.60 \u00c5",
    "date": "2016-11-23",
    "note": "Structure of the 70S ribosome with fMetSec-tRNASec in the hybrid pre-translocation state (H)"
  },
  {
    "id": "5M9U",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2017-07-26",
    "note": "Spatial structure of antimicrobial peptide arenicin-1 mutant V8R"
  },
  {
    "id": "5MAM",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.20 \u00c5",
    "date": "2017-04-05",
    "note": "Human insulin in complex with serotonin"
  },
  {
    "id": "5MDY",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.35 \u00c5",
    "date": "2016-12-21",
    "note": "Structure of ArfA and TtRF2 bound to the 70S ribosome (pre-accommodated state)"
  },
  {
    "id": "5MGQ",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2017-03-29",
    "note": "Solution structure of oxidized and amidated human IAPP (1-37), the diabetes II peptide."
  },
  {
    "id": "5MHD",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2017-08-09",
    "note": "Biosynthetic engineered A22S-B3K-B31R human insulin monomer structure in water/acetonitrile solutions."
  },
  {
    "id": "5MIZ",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2017-01-25",
    "note": "MD ensemble of bovine insulin"
  },
  {
    "id": "5MLC",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.60 \u00c5",
    "date": "2016-12-28",
    "note": "Cryo-EM structure of the spinach chloroplast ribosome reveals the location of plastid-specific ribosomal proteins and extensions"
  },
  {
    "id": "5MT3",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.02 \u00c5",
    "date": "2017-04-05",
    "note": "Human insulin in complex with serotonin and arginine"
  },
  {
    "id": "5MT9",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.88 \u00c5",
    "date": "2017-04-05",
    "note": "Human insulin in complex with serotonin and arginine"
  },
  {
    "id": "5MWQ",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2018-02-14",
    "note": "Biosynthetic engineered A21K-B31K-B32R human insulin monomer structure in water/acetonitrile solution"
  },
  {
    "id": "5NCE",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2017-06-07",
    "note": "Structure of PsDef1 defensin from Pinus sylvestris"
  },
  {
    "id": "5NGM",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "2.90 \u00c5",
    "date": "2017-10-04",
    "note": "2.9S structure of the 70S ribosome composing the S. aureus 100S complex"
  },
  {
    "id": "5NGN",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.48 \u00c5",
    "date": "2017-07-26",
    "note": "Lybatide 2, a cystine-rich peptide from Lycium barbarum"
  },
  {
    "id": "5NI9",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.33 \u00c5",
    "date": "2018-06-13",
    "note": "Crystal structure of HLA-DRB1*04:01 with the alpha-enolase peptide 326-340"
  },
  {
    "id": "5NIG",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.35 \u00c5",
    "date": "2018-06-13",
    "note": "Crystal structure of HLA-DRB1*04:01 with modified alpha-enolase peptide 326-340 (arginine 327 to citrulline)"
  },
  {
    "id": "5NQF",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.90 \u00c5",
    "date": "2017-09-06",
    "note": "Crystal structure of Plasmodium falciparum AMA1 in complex with a 39 aa PvRON2 peptide"
  },
  {
    "id": "5NQG",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.15 \u00c5",
    "date": "2017-09-06",
    "note": "Crystal structure of Plasmodium vivax AMA1 in complex with a 39 aa PvRON2 peptide"
  },
  {
    "id": "5NSC",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.30 \u00c5",
    "date": "2017-07-05",
    "note": "Fc DEKK heterodimer variant"
  },
  {
    "id": "5NWY",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "2.90 \u00c5",
    "date": "2017-07-19",
    "note": "2.9 A cryo-EM structure of VemP-stalled ribosome-nascent chain complex"
  },
  {
    "id": "5O0U",
    "method": "X-RAY DIFFRACTION",
    "resolution": "0.99 \u00c5",
    "date": "2017-09-13",
    "note": "Crystal structure of tarantula venom peptide Protoxin-II"
  },
  {
    "id": "5OCK",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.60 \u00c5",
    "date": "2018-07-04",
    "note": "Crystal structure of ACPA E4 in complex with CEP1"
  },
  {
    "id": "5OJT",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2017-11-22",
    "note": "Structure-Activity Relationships and Biological Characterization of a Novel, Potent and Serum Stable C-X-C chemokine receptor type 4 (CXCR4) Antagonist"
  },
  {
    "id": "5OLF",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2018-06-06",
    "note": "Ligand-Based NMR Study of C-X-C Chemokine Receptor Type 4 (CXCR4)-Ligand Interactions in Living Cancer Cells"
  },
  {
    "id": "5OLL",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.45 \u00c5",
    "date": "2018-08-08",
    "note": "Crystal structure of gurmarin, a sweet taste suppressing polypeptide"
  },
  {
    "id": "5OTT",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.92 \u00c5",
    "date": "2018-07-04",
    "note": "Extracellular domain of GLP-1 receptor in complex with exendin-4 variant Gly2Hcs/Thr5Hcs"
  },
  {
    "id": "5OTU",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.80 \u00c5",
    "date": "2018-07-04",
    "note": "Extracellular domain of GLP-1 receptor in complex with GLP-1 variant Ala8Hcs/Thr11Hcs"
  },
  {
    "id": "5OTV",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.00 \u00c5",
    "date": "2018-07-04",
    "note": "Extracellular domain of GLP-1 receptor in complex with GLP-1 variant Ala8Cyc/Thr11Hcs"
  },
  {
    "id": "5OTW",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.10 \u00c5",
    "date": "2018-07-04",
    "note": "Extracellular domain of GLP-1 receptor in complex with GLP-1 variant Ala8Hcs/Thr11Cys"
  },
  {
    "id": "5OTX",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.00 \u00c5",
    "date": "2018-07-04",
    "note": "Extracellular domain of GLP-1 receptor in complex with GLP-1 variant Ala8Cys/Thr11Cys"
  },
  {
    "id": "5OY9",
    "method": "X-RAY DIFFRACTION",
    "resolution": "3.60 \u00c5",
    "date": "2018-03-21",
    "note": "VSV G CR3"
  },
  {
    "id": "5OYL",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.25 \u00c5",
    "date": "2018-03-21",
    "note": "VSV G CR2"
  },
  {
    "id": "5SUR",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.80 \u00c5",
    "date": "2017-01-11",
    "note": "X-ray crystallographic structure of a covalent trimer derived from A-beta 17_36. Synchrotron data set. (ORN)CVF(MEA)CED(ORN)AIIGL(ORN)V."
  },
  {
    "id": "5SUS",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.35 \u00c5",
    "date": "2017-01-11",
    "note": "X-ray crystallographic structure of a covalent trimer derived from A-beta 17_36. X-ray diffractometer data set. (ORN)CVF(MEA)CED(ORN)AIIGL(ORN)V."
  },
  {
    "id": "5SUT",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.90 \u00c5",
    "date": "2017-01-11",
    "note": "X-ray crystallographic structure of a covalent trimer derived from A-beta 17_36. Synchrotron data set. (ORN)CVFFCED(ORN)AII(SAR)L(ORN)V."
  },
  {
    "id": "5SUU",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.03 \u00c5",
    "date": "2017-01-11",
    "note": "X-ray crystallographic structure of a covalent trimer derived from A-beta 17-36. X-ray diffractometer data set. (ORN)CVFFCED(ORN)AII(SAR)L(ORN)V."
  },
  {
    "id": "5T1K",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.48 \u00c5",
    "date": "2016-10-26",
    "note": "Cetuximab Fab in complex with CQFDA(Ph)2STRRLKC"
  },
  {
    "id": "5T1L",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.48 \u00c5",
    "date": "2016-10-26",
    "note": "Cetuximab Fab in complex with CQA(Ph)2DLSTRRLKC peptide"
  },
  {
    "id": "5T1M",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.53 \u00c5",
    "date": "2016-10-26",
    "note": "Cetuximab Fab in complex with CQYDLSTRRLKC"
  },
  {
    "id": "5T3M",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2017-09-06",
    "note": "Solution structure of a triple mutant of HwTx-IV - a potent blocker of Nav1.7"
  },
  {
    "id": "5T4R",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2017-09-06",
    "note": "NMR solution structure of the Nav1.7 selective spider venom-derived peptide Pn3a"
  },
  {
    "id": "5T7V",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.60 \u00c5",
    "date": "2017-05-31",
    "note": "Methicillin Resistant, Linezolid resistant Staphylococcus aureus 70S ribosome (delta S145 uL3)"
  },
  {
    "id": "5T90",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.80 \u00c5",
    "date": "2017-04-12",
    "note": "Structural mechanisms for alpha-conotoxin selectivity at the human alpha3beta4 nicotinic acetylcholine receptor"
  },
  {
    "id": "5TCU",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.90 \u00c5",
    "date": "2017-05-24",
    "note": "Methicillin sensitive Staphylococcus aureus 70S ribosome"
  },
  {
    "id": "5TCZ",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2017-01-18",
    "note": "NMR solution structure of engineered Protoxin-II analog"
  },
  {
    "id": "5TH2",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.84 \u00c5",
    "date": "2016-10-26",
    "note": "Cetuximab Fab in complex with L5Q meditope variant"
  },
  {
    "id": "5TLR",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2017-02-22",
    "note": "Solution NMR structure of gHwTx-IV"
  },
  {
    "id": "5TX8",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2017-09-27",
    "note": "Solution structure of the de novo mini protein gHH_44"
  },
  {
    "id": "5TYI",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.15 \u00c5",
    "date": "2017-11-15",
    "note": "Grb7 SH2 with bicyclic peptide containing pY mimetic"
  },
  {
    "id": "5U06",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.10 \u00c5",
    "date": "2017-11-15",
    "note": "Grb7-SH2 with bicyclic peptide inhibitor containing a pY mimetic"
  },
  {
    "id": "5U1Q",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.10 \u00c5",
    "date": "2017-11-15",
    "note": "Grb7-SH2 with bicyclic peptide inhibitor"
  },
  {
    "id": "5U52",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.94 \u00c5",
    "date": "2017-05-24",
    "note": "2 helix minimized version of the B-domain from Protein A (Z34C0 bound to IgG1 Fc (monoclinic form)"
  },
  {
    "id": "5U5F",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.81 \u00c5",
    "date": "2018-03-14",
    "note": "MEDITOPE ENABLED TRASTUZUMAB I83E VARIANT IN COMPLEX WITH (Ac) CQFDA(PH)2STRRLRCGGSK"
  },
  {
    "id": "5U5M",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.88 \u00c5",
    "date": "2018-03-14",
    "note": "CRYSTAL STRUCTURE OF I83E MEDITOPE-ENABLED TRASTUZUMAB WITH AZIDO-MEDITOPE"
  },
  {
    "id": "5U6A",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.74 \u00c5",
    "date": "2018-03-14",
    "note": "CRYSTAL STRUCTURE OF I83E MEDITOPE-ENABLED TRASTUZUMAB WITH AZIDO-PEG3-MEDITOPE"
  },
  {
    "id": "5UB5",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.09 \u00c5",
    "date": "2017-08-09",
    "note": "human POGLUT1 in complex with human Notch1 EGF12 S458T mutant and UDP"
  },
  {
    "id": "5UBX",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.70 \u00c5",
    "date": "2017-09-20",
    "note": "Crystal structure of a mutant mIgG2b Fc heterodimer in complex with Protein A peptide analog Z34C"
  },
  {
    "id": "5UDP",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.35 \u00c5",
    "date": "2017-01-11",
    "note": "High resolution x-ray crystal structure of synthetic insulin lispro"
  },
  {
    "id": "5UG3",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2017-09-06",
    "note": "NMR SOLUTION STRUCTURE OF ALPHA-CONOTOXIN GID MUTANT A10V"
  },
  {
    "id": "5UG5",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2017-09-06",
    "note": "NMR SOLUTION STRUCTURE OF THE ALPHA-CONOTOXIN GID MUTANT V13Y"
  },
  {
    "id": "5UHR",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.80 \u00c5",
    "date": "2017-07-12",
    "note": "Crystal structure of (Cit)LANFLV heptapeptide segment from islet amyloid polypeptide (IAPP) incorporated into a macrocyclic beta-sheet template"
  },
  {
    "id": "5UJG",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2018-01-24",
    "note": "ovGRN12-35_3s"
  },
  {
    "id": "5UJH",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2018-01-24",
    "note": "ov-GRN12-34"
  },
  {
    "id": "5UKZ",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2018-06-27",
    "note": "NMR Solution structure of chemically synthesized antilisterial Pediocin PA-1 M31L analog."
  },
  {
    "id": "5UOZ",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.17 \u00c5",
    "date": "2018-02-07",
    "note": "Insulin with proline analog FyP at position B28 in the T2 state"
  },
  {
    "id": "5UQA",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.31 \u00c5",
    "date": "2018-02-21",
    "note": "Insulin with proline analog FzP at position B28 in the R6 state"
  },
  {
    "id": "5URT",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.18 \u00c5",
    "date": "2018-02-14",
    "note": "Insulin with proline analog DhP at position B28 in the T2 state"
  },
  {
    "id": "5URU",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.41 \u00c5",
    "date": "2018-02-21",
    "note": "Insulin with proline analog DhP at position B28 in the R6 state"
  },
  {
    "id": "5USP",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.17 \u00c5",
    "date": "2018-02-21",
    "note": "Insulin with proline analog Pip at position B28 in the T2 state"
  },
  {
    "id": "5USS",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.06 \u00c5",
    "date": "2018-02-21",
    "note": "Insulin with proline analog PiP at position B28 in the R6 state"
  },
  {
    "id": "5USV",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.30 \u00c5",
    "date": "2018-02-21",
    "note": "Insulin with proline analog AzeP at position B28 in the T2 state"
  },
  {
    "id": "5UU2",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.22 \u00c5",
    "date": "2018-02-21",
    "note": "Insulin with proline analog ThioP at position B28 in the T2 state"
  },
  {
    "id": "5UU3",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.25 \u00c5",
    "date": "2018-02-21",
    "note": "Insulin with proline analog DfP at position B28 in the R6 state"
  },
  {
    "id": "5UU4",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.97 \u00c5",
    "date": "2018-02-21",
    "note": "Insulin with proline analog ThioP at position B28 in the R6 state"
  },
  {
    "id": "5V0Y",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2018-08-08",
    "note": "Solution structure of arenicin-3."
  },
  {
    "id": "5V11",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2018-08-08",
    "note": "Solution structure of arenicin-3 synthetic analog."
  },
  {
    "id": "5V64",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.02 \u00c5",
    "date": "2017-06-28",
    "note": "Crystal structure of macrocycles containing Abeta 15-21 (QKLV(PHI)FA) and Abeta 30-36 (AII(SAR)L(ORN)V)"
  },
  {
    "id": "5V65",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.52 \u00c5",
    "date": "2017-06-28",
    "note": "Crystal structure of macrocycles containing Abeta 17-23 (LV(PHI)FAED) and Abeta 30-36 (AII(SAR)L(ORN)V)"
  },
  {
    "id": "5VAV",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2017-05-10",
    "note": "Design of a novel cyclic peptide that alleviates symptoms in a murine model of inflammatory bowel disease"
  },
  {
    "id": "5VB9",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.70 \u00c5",
    "date": "2018-02-14",
    "note": "IL-17A in complex with peptide"
  },
  {
    "id": "5VF1",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.10 \u00c5",
    "date": "2017-06-21",
    "note": "X-ray Crystallographic Structure of a Giant Double-Walled Peptide Nanotube Formed by a Macrocyclic Beta-Sheet Containing ABeta16-22"
  },
  {
    "id": "5VI6",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.24 \u00c5",
    "date": "2017-09-06",
    "note": "Crystal structure of histone deacetylase 8 in complex with trapoxin A"
  },
  {
    "id": "5VIZ",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.70 \u00c5",
    "date": "2017-10-18",
    "note": "X-Ray structure of Insulin Glargine"
  },
  {
    "id": "5VLH",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.86 \u00c5",
    "date": "2017-08-16",
    "note": "Short PCSK9 delta-P' complex with peptide Pep1"
  },
  {
    "id": "5VLI",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.80 \u00c5",
    "date": "2017-09-27",
    "note": "Computationally designed inhibitor peptide HB1.6928.2.3 in complex with influenza hemagglutinin (A/PuertoRico/8/1934)"
  },
  {
    "id": "5VLL",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.37 \u00c5",
    "date": "2017-08-16",
    "note": "Short PCSK9 delta-P' complex with peptide Pep3"
  },
  {
    "id": "5VMR",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.95 \u00c5",
    "date": "2017-09-20",
    "note": "Receptor binding domain of BoNT/B in complex with mini-protein binder Bot.2110.4"
  },
  {
    "id": "5VR1",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2017-11-15",
    "note": "Structure of a Turripeptide from Unedogemmula bisaya venom"
  },
  {
    "id": "5VYG",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.20 \u00c5",
    "date": "2017-08-09",
    "note": "Crystal structure of hFA9 EGF repeat with O-glucose trisaccharide"
  },
  {
    "id": "5VYP",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.60 \u00c5",
    "date": "2017-08-02",
    "note": "Crystal structure of the Plant Defensin NsD7 bound to PIP2"
  },
  {
    "id": "5W4H",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.72 \u00c5",
    "date": "2017-11-22",
    "note": "X-ray crystallographic structure of a beta-hairpin peptide mimic derived from Abeta 16-36. Synchrotron data set. (ORN)KLV(MEA)FAE(ORN)AIIGLMV."
  },
  {
    "id": "5W4I",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.03 \u00c5",
    "date": "2017-11-22",
    "note": "X-ray crystallographic structure of a beta-hairpin peptide mimic derived from Abeta 16-36. Rigaku data set. (ORN)KLV(MEA)FAE(ORN)AIIGLMV."
  },
  {
    "id": "5W4J",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.08 \u00c5",
    "date": "2017-11-22",
    "note": "X-ray crystallographic structure of a beta-hairpin peptide mimic. (ORN)KLV(MEA)FAE(ORN)AIIGLMV."
  },
  {
    "id": "5W4L",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.92 \u00c5",
    "date": "2017-11-15",
    "note": "Crystal structure of the non-neutralizing and ADCC-potent C11-like antibody N12-i3 in complex with HIV-1 clade A/E gp120, the CD4 mimetic M48U1, and the antibody N5-i5."
  },
  {
    "id": "5W54",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2017-07-12",
    "note": "Cytokine-like Stress Response Peptide-2 in Manduca Sexta"
  },
  {
    "id": "5W9F",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2018-07-11",
    "note": "Solution structure of the de novo mini protein gHEEE_02"
  },
  {
    "id": "5WCV",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2017-10-25",
    "note": "AsK132958: A minimal homologue of ShK identified in the transcriptome of Anemonia sulcata"
  },
  {
    "id": "5WE3",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2017-09-13",
    "note": "Solution NMR structure of PaurTx-3"
  },
  {
    "id": "5WLX",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2018-08-01",
    "note": "Solution structure of kappa-theraphotoxin-Aa1a"
  },
  {
    "id": "5WN9",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.55 \u00c5",
    "date": "2018-03-14",
    "note": "Structure of antibody 2D10 bound to the central conserved region of RSV G"
  },
  {
    "id": "5WNA",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.40 \u00c5",
    "date": "2018-03-14",
    "note": "Structure of antibody 3D3 bound to the central conserved region of RSV G"
  },
  {
    "id": "5WOB",
    "method": "X-RAY DIFFRACTION",
    "resolution": "3.95 \u00c5",
    "date": "2018-04-18",
    "note": "Crystal Structure Analysis of Fab1-Bound Human Insulin Degrading Enzyme (IDE) in Complex with Insulin"
  },
  {
    "id": "5WOV",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2018-08-08",
    "note": "Solution NMR structure of cyclotide MCoTI-I"
  },
  {
    "id": "5WOW",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2018-08-08",
    "note": "Solution NMR structure of cyclotide MCoTI-I"
  },
  {
    "id": "5WTT",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.70 \u00c5",
    "date": "2017-12-20",
    "note": "Structure of the 093G9 Fab in complex with the epitope peptide"
  },
  {
    "id": "5WUZ",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2017-01-25",
    "note": "Morintides mO1"
  },
  {
    "id": "5WXE",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2018-01-17",
    "note": "Highly disulfide-constrained antifeedant jasmintides from Jasminum sambac flowers"
  },
  {
    "id": "5WXF",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.46 \u00c5",
    "date": "2018-07-11",
    "note": "Crystal structure of uPA in complex with upain-2-2"
  },
  {
    "id": "5WXO",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.64 \u00c5",
    "date": "2018-07-11",
    "note": "Crystal structure of uPA in complex with upain-2-2-W3A"
  },
  {
    "id": "5WXP",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.75 \u00c5",
    "date": "2018-07-11",
    "note": "Crystal structure of uPA in complex with upain-2-3-W3A"
  },
  {
    "id": "5WXQ",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.79 \u00c5",
    "date": "2018-07-11",
    "note": "Crystal structure of uPA in complex with upain-2-4"
  },
  {
    "id": "5WXR",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.75 \u00c5",
    "date": "2018-07-11",
    "note": "Crystal structure of uPA in complex with upain-2-4-W3A"
  },
  {
    "id": "5X34",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2017-05-31",
    "note": "Solution structure of the Family 1 carbohydrate-binding module, unglycosylated form"
  },
  {
    "id": "5X35",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2017-05-31",
    "note": "Solution structure of the Family 1 carbohydrate-binding module with mannosylated Thr1"
  },
  {
    "id": "5X36",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2017-05-31",
    "note": "Solution structure of the Family 1 carbohydrate-binding module with mannosylated Ser3"
  },
  {
    "id": "5X37",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2017-05-31",
    "note": "Solution structure of the Family 1 carbohydrate-binding module with mannosylated Ser14"
  },
  {
    "id": "5X38",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2017-05-31",
    "note": "Solution structure of the Family 1 carbohydrate-binding module with glucosylated Ser3"
  },
  {
    "id": "5X39",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2017-05-31",
    "note": "Solution structure of the Family 1 carbohydrate-binding module Q2A mutant with mannosylated Ser3"
  },
  {
    "id": "5X3C",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2017-05-31",
    "note": "Solution structure of the Family 1 carbohydrate-binding module Y5A mutant with mannosylated Ser3"
  },
  {
    "id": "5XA6",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2018-03-14",
    "note": "Ion channel modulation by scorpion haemolymph and its defensin ingredients uncovers origin of neurotoxins in telson formed in Paleozoic scorpion"
  },
  {
    "id": "5XBD",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2018-02-14",
    "note": "Disulfide-constrained Wound Healing Peptide Derived from Pereskia bleo"
  },
  {
    "id": "5XCO",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.25 \u00c5",
    "date": "2017-05-24",
    "note": "Crystal structure of human K-Ras G12D Mutant in complex with GDP and Cyclic Inhibitory Peptide"
  },
  {
    "id": "5XDI",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2017-07-19",
    "note": "Vaccatide: Antifungal Glutamine-rich 8C-Hevein-like Peptide, vH1"
  },
  {
    "id": "5XGL",
    "method": "X-RAY DIFFRACTION",
    "resolution": "3.44 \u00c5",
    "date": "2018-06-13",
    "note": "Co-crystal structure of Ac-AChBPP in complex with alpha-conotoxin LvIA"
  },
  {
    "id": "5XIV",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2017-05-31",
    "note": "Beta-Ginkgotides: Hyperdisulfide-constrained peptides from Ginkgo biloba"
  },
  {
    "id": "5XN3",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.34 \u00c5",
    "date": "2017-06-14",
    "note": "Crystal structure of SPSB2 in complex with a rational designed RGD containing cyclic peptide inhibitor of SPSB2-iNOS interaction"
  },
  {
    "id": "5XO3",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2018-06-27",
    "note": "Thanatin M21F Free"
  },
  {
    "id": "5XO4",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2018-06-27",
    "note": "Free Thanatin at 298K"
  },
  {
    "id": "5XO5",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2018-06-27",
    "note": "Free Thanatin Y10A M21A"
  },
  {
    "id": "5XO9",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2018-06-27",
    "note": "Thanatin in presence of LPS"
  },
  {
    "id": "5XOA",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2018-06-27",
    "note": "Thanatin M21F in complex with LPS"
  },
  {
    "id": "5XOK",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2018-07-04",
    "note": "Thanatin Y10M21AA in complex with LPS"
  },
  {
    "id": "5XOL",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2018-07-04",
    "note": "Thanatin R13R14AA in complex with LPS"
  },
  {
    "id": "5XYF",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.20 \u00c5",
    "date": "2017-12-13",
    "note": "Crystal structure of the human TIN2-TPP1-TRF2 telomeric complex"
  },
  {
    "id": "5XYM",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.08 \u00c5",
    "date": "2017-09-27",
    "note": "Large subunit of Mycobacterium smegmatis"
  },
  {
    "id": "5Y0H",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2017-07-26",
    "note": "Solution structure of arenicin-3 derivative N6"
  },
  {
    "id": "5Y0I",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2017-07-26",
    "note": "Solution structure of arenicin-3 derivative N1"
  },
  {
    "id": "5Y0J",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2017-07-26",
    "note": "Solution structure of arenicin-3 derivative N2"
  },
  {
    "id": "5YLG",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.48 \u00c5",
    "date": "2018-10-24",
    "note": "Crystal Structure of LysM domain from pteris ryukyuensis chitinase A"
  },
  {
    "id": "5YTY",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.58 \u00c5",
    "date": "2018-05-23",
    "note": "Crystal structure of echinomycin-d(ACGACGT/ACGTCGT) complex"
  },
  {
    "id": "5YTZ",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.55 \u00c5",
    "date": "2018-05-23",
    "note": "Crystal structure of echinomycin-d(ACGTCGT)2 complex"
  },
  {
    "id": "5YZ6",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2018-12-19",
    "note": "Solution structure of LysM domain from a chitinase derived from Volvox carteri"
  },
  {
    "id": "5YZK",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2018-12-19",
    "note": "Solution structure of LysM domain from a chitinase derived from Volvox carteri"
  },
  {
    "id": "5Z1Y",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2019-01-02",
    "note": "mBjAMP1 structure"
  },
  {
    "id": "5ZEB",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.40 \u00c5",
    "date": "2018-09-26",
    "note": "M. Smegmatis P/P state 70S ribosome structure"
  },
  {
    "id": "5ZEP",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.40 \u00c5",
    "date": "2018-09-26",
    "note": "M. smegmatis hibernating state 70S ribosome structure"
  },
  {
    "id": "5ZET",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.20 \u00c5",
    "date": "2018-09-26",
    "note": "M. smegmatis P/P state 50S ribosomal subunit"
  },
  {
    "id": "5ZFO",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2019-05-15",
    "note": "NMR structure of IRD12 from Capsicum annum."
  },
  {
    "id": "5ZJL",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.70 \u00c5",
    "date": "2018-05-23",
    "note": "Crystal Structure of the dust mite allergen Der f 23 from Dermatophagoides farinae"
  },
  {
    "id": "5ZNU",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2019-04-17",
    "note": "Structure of omega conotoxin Bu8"
  },
  {
    "id": "5ZV6",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2019-05-15",
    "note": "Solution structure of peptide cQ2 from Chenopodium quinoa"
  },
  {
    "id": "6A1Q",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.50 \u00c5",
    "date": "2019-01-16",
    "note": "Crystal structures of disordered Z-type helices"
  },
  {
    "id": "6A86",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.80 \u00c5",
    "date": "2019-04-10",
    "note": "Pholiota squarrosa lectin"
  },
  {
    "id": "6A87",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.41 \u00c5",
    "date": "2019-04-10",
    "note": "Pholiota squarrosa lectin (PhoSL) in complex with fucose(alpha1-6)GlcNAc"
  },
  {
    "id": "6A8G",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.53 \u00c5",
    "date": "2019-02-20",
    "note": "The crystal structure of muPAin-1-IG in complex with muPA-SPD at pH8.5"
  },
  {
    "id": "6A8N",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.49 \u00c5",
    "date": "2019-02-20",
    "note": "The crystal structure of muPAin-1-IG-2 in complex with muPA-SPD at pH8.5"
  },
  {
    "id": "6A8O",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.77 \u00c5",
    "date": "2019-07-10",
    "note": "Crystal structures of the serine protease domain of murine plasma kallikrein with peptide inhibitor mupain-1-16"
  },
  {
    "id": "6AAB",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2019-07-24",
    "note": "Thanatin in presence of DPC"
  },
  {
    "id": "6AFQ",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2019-08-14",
    "note": "Thanatin M21F in presence of DPC"
  },
  {
    "id": "6AK0",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2018-12-05",
    "note": "Solution NMR structure of a new lasso peptide specialicin"
  },
  {
    "id": "6ATL",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.80 \u00c5",
    "date": "2018-02-28",
    "note": "Exploring Cystine Dense Peptide Space to Open a Unique Molecular Toolbox"
  },
  {
    "id": "6ATM",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.09 \u00c5",
    "date": "2018-08-22",
    "note": "Exploring Cystine Dense Peptide Space to Open a Unique Molecular Toolbox"
  },
  {
    "id": "6ATN",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.76 \u00c5",
    "date": "2018-02-28",
    "note": "Exploring Cystine Dense Peptide Space to Open a Unique Molecular Toolbox"
  },
  {
    "id": "6ATS",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.90 \u00c5",
    "date": "2018-02-28",
    "note": "Exploring Cystine Dense Peptide Space to Open a Unique Molecular Toolbox"
  },
  {
    "id": "6ATW",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.53 \u00c5",
    "date": "2018-02-28",
    "note": "Exploring Cystine Dense Peptide Space to Open a Unique Molecular Toolbox"
  },
  {
    "id": "6ATY",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.80 \u00c5",
    "date": "2018-08-22",
    "note": "Exploring Cystine Dense Peptide Space to Open a Unique Molecular Toolbox"
  },
  {
    "id": "6AU7",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.90 \u00c5",
    "date": "2018-02-28",
    "note": "Exploring Cystine Dense Peptide Space to Open a Unique Molecular Toolbox"
  },
  {
    "id": "6AUP",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.95 \u00c5",
    "date": "2018-02-28",
    "note": "Exploring Cystine Dense Peptide Space to Open a Unique Molecular Toolbox"
  },
  {
    "id": "6AV8",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.89 \u00c5",
    "date": "2018-02-28",
    "note": "Exploring Cystine Dense Peptide Space to Open a Unique Molecular Toolbox"
  },
  {
    "id": "6AVA",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.20 \u00c5",
    "date": "2018-02-28",
    "note": "Exploring Cystine Dense Peptide Space to Open a Unique Molecular Toolbox"
  },
  {
    "id": "6AVC",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.88 \u00c5",
    "date": "2018-02-28",
    "note": "Exploring Cystine Dense Peptide Space to Open a Unique Molecular Toolbox"
  },
  {
    "id": "6AVD",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.80 \u00c5",
    "date": "2018-02-28",
    "note": "Exploring Cystine Dense Peptide Space to Open a Unique Molecular Toolbox"
  },
  {
    "id": "6AX2",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2018-01-10",
    "note": "Solution structure of Magi3 a specific insect toxin from the spider Macrothele gigas"
  },
  {
    "id": "6AY7",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.77 \u00c5",
    "date": "2018-08-22",
    "note": "Cartilage homing cysteine-dense-peptides"
  },
  {
    "id": "6AY8",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.78 \u00c5",
    "date": "2018-08-22",
    "note": "Cartilage homing cysteine-dense-peptides"
  },
  {
    "id": "6AYN",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.48 \u00c5",
    "date": "2017-12-13",
    "note": "Structure of cetuximab with aminoheptanoic acid-linked N-(3-aminopropyl)-L-arginine meditope variant"
  },
  {
    "id": "6AZ3",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "2.50 \u00c5",
    "date": "2017-12-06",
    "note": "Cryo-EM structure of of the large subunit of Leishmania ribosome bound to paromomycin"
  },
  {
    "id": "6AZA",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2018-09-12",
    "note": "NMR structure of sea anemone toxin Kappa-actitoxin-Ate1a"
  },
  {
    "id": "6AZK",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.48 \u00c5",
    "date": "2017-12-13",
    "note": "Structure of cetuximab with aminoheptanoic acid-linked N-(3-hydroxypropyl)-L-arginine meditope variant"
  },
  {
    "id": "6B35",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2017-12-06",
    "note": "NMR ensemble of Tyrocidine A analogue AC3.28"
  },
  {
    "id": "6B55",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.50 \u00c5",
    "date": "2018-05-23",
    "note": "Crystal structure of the Plant Defensin NaD1 complexed with phosphatidic acid"
  },
  {
    "id": "6B67",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.20 \u00c5",
    "date": "2018-04-11",
    "note": "Human PP2Calpha (PPM1A) complexed with cyclic peptide c(MpSIpYVA)"
  },
  {
    "id": "6B9W",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2018-09-26",
    "note": "NMR solution structure of Defensin1 from Centruroides limpidus limpidus"
  },
  {
    "id": "6BAE",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.14 \u00c5",
    "date": "2018-09-05",
    "note": "Trastuzumab Fab v3 in complex with CQFDLSTRRLKC"
  },
  {
    "id": "6BAM",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2018-09-26",
    "note": "NMR solution structure of Defensin1 from Centruroides limpidus limpidus"
  },
  {
    "id": "6BB6",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2018-09-26",
    "note": "NMR solution structure of Defensin1 from Centruroides limpidus limpidus"
  },
  {
    "id": "6BE7",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2018-01-03",
    "note": "Solution structure of de novo macrocycle Design8.1"
  },
  {
    "id": "6BE9",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2017-12-27",
    "note": "Solution structure of de novo macrocycle design7.1"
  },
  {
    "id": "6BEN",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2017-12-27",
    "note": "Solution structure of de novo macrocycle design8.2"
  },
  {
    "id": "6BEO",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2017-12-27",
    "note": "Solution structure of de novo macrocycle design9.1"
  },
  {
    "id": "6BER",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2017-12-27",
    "note": "Solution structure of de novo macrocycle design10.2"
  },
  {
    "id": "6BES",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2017-12-27",
    "note": "Solution structure of de novo macrocycle design11_ss"
  },
  {
    "id": "6BET",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2017-12-27",
    "note": "Solution structure of de novo macrocycle design12_ss"
  },
  {
    "id": "6BEU",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2017-12-27",
    "note": "Solution structure of de novo macrocycle design14_ss"
  },
  {
    "id": "6BEW",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2017-12-27",
    "note": "Solution structure of de novo macrocycle design7.2"
  },
  {
    "id": "6BF3",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2018-01-10",
    "note": "Solution structure of de novo macrocycle design7.3a"
  },
  {
    "id": "6BF5",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2018-01-10",
    "note": "Solution structure of de novo macrocycle design7.3a"
  },
  {
    "id": "6BI5",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2018-09-26",
    "note": "NMR solution structure of Defensin1 from Centruroides limpidus limpidus"
  },
  {
    "id": "6BLH",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.00 \u00c5",
    "date": "2018-02-28",
    "note": "RSV G central conserved region bound to Fab CB017.5"
  },
  {
    "id": "6BLI",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.12 \u00c5",
    "date": "2018-02-28",
    "note": "RSV G peptide bound to Fab CB002.5"
  },
  {
    "id": "6BR0",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2018-05-16",
    "note": "Solution NMR structure for CcoTx-I"
  },
  {
    "id": "6BTV",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2018-05-09",
    "note": "Solution NMR structures for CcoTx-II"
  },
  {
    "id": "6BU8",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.50 \u00c5",
    "date": "2018-01-31",
    "note": "70S ribosome with S1 domains 1 and 2 (Class 1)"
  },
  {
    "id": "6BUC",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2018-05-30",
    "note": "Structure of a new ShKT peptide from the sea anemone Oulactis sp."
  },
  {
    "id": "6BVH",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.93 \u00c5",
    "date": "2018-12-19",
    "note": "Trypsin complexed with a modified sunflower trypsin inhibitor, SFTI-TCTR(N12,N14)"
  },
  {
    "id": "6BVU",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2018-12-19",
    "note": "SFTI-HFRW-1"
  },
  {
    "id": "6BVW",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2018-12-19",
    "note": "SFTI-HFRW-3"
  },
  {
    "id": "6BVX",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2018-12-19",
    "note": "SFTI-HFRW-2"
  },
  {
    "id": "6BVY",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2018-04-18",
    "note": "SFTI-HFRW-4"
  },
  {
    "id": "6BX9",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2018-01-24",
    "note": "Solution structure of conotoxin reg3b"
  },
  {
    "id": "6C1D",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.20 \u00c5",
    "date": "2018-01-31",
    "note": "High-Resolution Cryo-EM Structures of Actin-bound Myosin States Reveal the Mechanism of Myosin Force Sensing"
  },
  {
    "id": "6CBP",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.17 \u00c5",
    "date": "2018-02-21",
    "note": "Crystal structure of the single chain variable fragment of the DH270.6 bnAb in complex with the Man9-V3 glycopeptide"
  },
  {
    "id": "6CDX",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.00 \u00c5",
    "date": "2019-08-14",
    "note": "High-resolution crystal structure of fluoropropylated cystine knot, binding to alpha-5 beta-6 integrin"
  },
  {
    "id": "6CE7",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "7.40 \u00c5",
    "date": "2018-03-14",
    "note": "Insulin Receptor ectodomain in complex with one insulin molecule"
  },
  {
    "id": "6CE9",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "4.30 \u00c5",
    "date": "2018-03-14",
    "note": "Insulin Receptor ectodomain in complex with two insulin molecules"
  },
  {
    "id": "6CEB",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "4.70 \u00c5",
    "date": "2018-03-14",
    "note": "Insulin Receptor ectodomain in complex with two insulin molecules - C1 symmetry"
  },
  {
    "id": "6CEG",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2018-03-07",
    "note": "Solution NMR structure of the omega conotoxin MoVIB from Conus moncuri"
  },
  {
    "id": "6CEI",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2018-03-07",
    "note": "Solution NMR Structure of Conotoxin GXIA from Conus geographus"
  },
  {
    "id": "6CFB",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2018-03-21",
    "note": "Isolation, Characterization, and Synthesis of the Barrettides: Disulfide-Containing Peptides from the Marine Sponge Geodia barretti"
  },
  {
    "id": "6CG3",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.03 \u00c5",
    "date": "2018-05-16",
    "note": "Macrocyclic peptide derived from Abeta(17-36) - (ORN)LV(PHI)FAED(ORN)AII(2-nitrobenzylglycine)L(ORN)V"
  },
  {
    "id": "6CG4",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.08 \u00c5",
    "date": "2018-05-16",
    "note": "Covalently crosslinked trimer of a macrocyclic peptide derived from Abeta(17-36) - (ORN)LCVFFCED(ORN)AII(2-nitrobenzylglycine)L(ORN)V"
  },
  {
    "id": "6CG5",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.08 \u00c5",
    "date": "2018-05-16",
    "note": "Covalently crosslinked trimer of a macrocyclic peptide derived from Abeta (17-36) - (ORN)LCVFFCED(ORN)AII(2-nitrobenzylglycine)L(ORN)V"
  },
  {
    "id": "6CGW",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2018-05-02",
    "note": "Solution NMR structure of JzTx-V, a Nav 1.7 inhibitory peptide"
  },
  {
    "id": "6CGX",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2018-05-23",
    "note": "Backbone cyclised conotoxin Vc1.1 mutant - D11A, E14A"
  },
  {
    "id": "6CHC",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2018-05-16",
    "note": "JzTx-V toxin peptide, wild-type"
  },
  {
    "id": "6CK2",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.25 \u00c5",
    "date": "2018-06-13",
    "note": "Insulin analog containing a YB26W mutation"
  },
  {
    "id": "6CKD",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2019-02-27",
    "note": "Structure of a new ShKT peptide from the sea anemone Oulactis sp: OspTx2a-p1"
  },
  {
    "id": "6CKF",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2019-03-06",
    "note": "Structure of a new ShKT peptide from the sea anemone Oulactis sp: OspTx2a-p2"
  },
  {
    "id": "6CN8",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.40 \u00c5",
    "date": "2019-06-05",
    "note": "High-resolution structure of ClpC1-NTD binding to Rufomycin-I"
  },
  {
    "id": "6CNU",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.05 \u00c5",
    "date": "2019-03-06",
    "note": "Crystal Structure of JzTX-V"
  },
  {
    "id": "6CS9",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.85 \u00c5",
    "date": "2018-07-25",
    "note": "Crystal structure of human beta-defensin 2 in complex with PIP2"
  },
  {
    "id": "6D2U",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2018-12-12",
    "note": "Solution structure of a ultra-high affinity macrocycle bound to HIV-1 TAR RNA"
  },
  {
    "id": "6D3O",
    "method": "X-RAY DIFFRACTION",
    "resolution": "3.10 \u00c5",
    "date": "2019-04-24",
    "note": "Crystal Structure of Vascular Endothelial Growth Factor (VEGF8-109) with HH4, an alpha/beta-Peptide with Irregular Secondary Structure"
  },
  {
    "id": "6D3T",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2019-07-17",
    "note": "NMR solution structure of tamapin, mutant DP30"
  },
  {
    "id": "6D3X",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.80 \u00c5",
    "date": "2019-01-23",
    "note": "Highly Potent and Selective Plasmin Inhibitors Based on the Sunflower Trypsin Inhibitor-1 Scaffold Attenuate Fibrinolysis in Plasma"
  },
  {
    "id": "6D3Y",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.32 \u00c5",
    "date": "2019-01-23",
    "note": "Highly Potent and Selective Plasmin Inhibitors Based on the Sunflower Trypsin Inhibitor-1 Scaffold Attenuate Fibrinolysis in Plasma"
  },
  {
    "id": "6D3Z",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.00 \u00c5",
    "date": "2019-01-23",
    "note": "Protease SFTI complex"
  },
  {
    "id": "6D40",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.43 \u00c5",
    "date": "2019-01-23",
    "note": "Highly Potent and Selective Plasmin Inhibitors Based on the Sunflower Trypsin Inhibitor-1 Scaffold Attenuate Fibrinolysis in Plasma"
  },
  {
    "id": "6D8C",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.54 \u00c5",
    "date": "2018-09-19",
    "note": "Cryo-EM structure of FLNaABD E254K bound to phalloidin-stabilized F-actin"
  },
  {
    "id": "6D8H",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2019-05-01",
    "note": "NMR solution structure of tamapin, mutant Y31+N"
  },
  {
    "id": "6D8Q",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2019-05-01",
    "note": "NMR solution structure of tamapin, mutant DP30/Y31+N"
  },
  {
    "id": "6D8R",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2019-05-01",
    "note": "NMR solution structure of tamapin, mutant E25K"
  },
  {
    "id": "6D8S",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2019-05-01",
    "note": "NMR solution structure of tamapin, mutant K27E"
  },
  {
    "id": "6D8T",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2019-05-01",
    "note": "NMR solution structure of tamapin, mutant E25K/K27E"
  },
  {
    "id": "6D8U",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2019-05-01",
    "note": "NMR solution structure of tamapin, mutant K20E"
  },
  {
    "id": "6D8Y",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2019-05-01",
    "note": "NMR solution structure of tamapin, mutant Y31H"
  },
  {
    "id": "6D93",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2019-05-01",
    "note": "NMR solution structure of tamapin, mutant Y31A"
  },
  {
    "id": "6D9O",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2019-05-08",
    "note": "NMR solution structure of tamapin, mutant E25A"
  },
  {
    "id": "6D9P",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2019-05-08",
    "note": "NMR solution structure of tamapin, mutant K27A"
  },
  {
    "id": "6DDD",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.10 \u00c5",
    "date": "2019-03-20",
    "note": "Structure of the 50S ribosomal subunit from Methicillin Resistant Staphylococcus aureus in complex with the oxazolidinone antibiotic LZD-5"
  },
  {
    "id": "6DDG",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.10 \u00c5",
    "date": "2019-03-20",
    "note": "Structure of the 50S ribosomal subunit from Methicillin Resistant Staphylococcus aureus in complex with the oxazolidinone antibiotic LZD-6"
  },
  {
    "id": "6DHR",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2019-04-17",
    "note": "NMR Solution structure of Rivi3"
  },
  {
    "id": "6DK5",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.85 \u00c5",
    "date": "2019-01-02",
    "note": "The X-ray crystal structure of human endothelin-1, a polypeptide hormone regulator of blood pressure"
  },
  {
    "id": "6DKZ",
    "method": "X-RAY DIFFRACTION",
    "resolution": "0.99 \u00c5",
    "date": "2018-11-14",
    "note": "Racemic structure of ribifolin, an orbitide from Jatropha ribifolia"
  },
  {
    "id": "6DL0",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.20 \u00c5",
    "date": "2018-11-07",
    "note": "Crystal structure of pohlianin C, an orbitide from Jatropha pohliana"
  },
  {
    "id": "6DL1",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.03 \u00c5",
    "date": "2018-11-14",
    "note": "Racemic structure of jatrophidin, an orbitide from Jatropha curcas"
  },
  {
    "id": "6DMM",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.67 \u00c5",
    "date": "2019-01-30",
    "note": "Crystal structure of the G23A mutant of human alpha defensin HNP4."
  },
  {
    "id": "6DMQ",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.70 \u00c5",
    "date": "2019-01-30",
    "note": "Crystal structure of the T27A mutant of human alpha defensin HNP4."
  },
  {
    "id": "6DMZ",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2019-05-15",
    "note": "Solution structure of ZmD32"
  },
  {
    "id": "6DN6",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.59 \u00c5",
    "date": "2019-04-17",
    "note": "SPRY domain-containing SOCS box protein 2 complexed with INNN(ABU) cyclic peptide inhibitor"
  },
  {
    "id": "6DNO",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.45 \u00c5",
    "date": "2019-01-23",
    "note": "Crystal structure of Protein Phosphatase 1 (PP1) bound to the muscle glycogen-targeting subunit (Gm)"
  },
  {
    "id": "6DNY",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2019-06-12",
    "note": "Solution structure of the cyclic tetrapeptide, PYPV"
  },
  {
    "id": "6DR4",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.10 \u00c5",
    "date": "2018-10-17",
    "note": "X-ray crystallographic structure of a covalent trimer derived from A-beta 17_36 containing the I31V point mutation"
  },
  {
    "id": "6DR5",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.08 \u00c5",
    "date": "2018-10-17",
    "note": "X-ray crystallographic structure of a covalent trimer derived from A-beta 17_36 containing the I31Chg point mutation"
  },
  {
    "id": "6DR6",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.61 \u00c5",
    "date": "2018-10-17",
    "note": "X-ray crystallographic structure of a covalent trimer derived from A-beta 17_36 containing the F20Cha point mutation"
  },
  {
    "id": "6DRI",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2019-06-19",
    "note": "NMR solution structure of Acan1 from the Ancylostoma caninum hookworm"
  },
  {
    "id": "6E0O",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.25 \u00c5",
    "date": "2019-02-20",
    "note": "Structure of Elizabethkingia meningoseptica CdnE cyclic dinucleotide synthase with pppA[3'-5']pA"
  },
  {
    "id": "6E1L",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2019-02-06",
    "note": "GRN3Ala"
  },
  {
    "id": "6E3Y",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.30 \u00c5",
    "date": "2018-09-19",
    "note": "Cryo-EM structure of the active, Gs-protein complexed, human CGRP receptor"
  },
  {
    "id": "6E5H",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2018-11-21",
    "note": "Heterogeneous-Backbone Mimics of a Designed Disulfide-Rich Protein: Aib turn"
  },
  {
    "id": "6E5I",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2018-11-21",
    "note": "Heterogeneous-Backbone Mimics of a Designed Disulfide-Rich Protein: Orn turn"
  },
  {
    "id": "6E5J",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2018-11-21",
    "note": "Heterogeneous-Backbone Mimics of a Designed Disulfide-Rich Protein: Aib turn, beta3 helix, N-methyl hairpin"
  },
  {
    "id": "6E5K",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2018-11-21",
    "note": "Heterogeneous-Backbone Mimics of a Designed Disulfide-Rich Protein: Aib turn, Aib helix, N-methyl hairpin"
  },
  {
    "id": "6E5M",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.61 \u00c5",
    "date": "2019-03-13",
    "note": "Crystallographic structure of the cyclic nonapeptide derived from the BTCI inhibitor bound to beta-trypsin in space group P 32 2 1"
  },
  {
    "id": "6E6N",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.36 \u00c5",
    "date": "2019-08-07",
    "note": "Pheromone from Euplotes raikovi, Er-13"
  },
  {
    "id": "6E6O",
    "method": "X-RAY DIFFRACTION",
    "resolution": "0.70 \u00c5",
    "date": "2019-08-07",
    "note": "Pheromone from Euplotes raikovi, Er-1"
  },
  {
    "id": "6EAT",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.15 \u00c5",
    "date": "2019-03-13",
    "note": "Crystallographic structure of the cyclic nonapeptide derived from the BTCI inhibitor bound to beta-trypsin in space group P 21 21 21."
  },
  {
    "id": "6EE9",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2019-08-21",
    "note": "Cytokine-like Peptide Stress-response Peptide-1 from Manduca Sexta"
  },
  {
    "id": "6EFE",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2018-09-05",
    "note": "NMR Solution Structure of vil14a"
  },
  {
    "id": "6EKE",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.70 \u00c5",
    "date": "2018-07-11",
    "note": "crystal structure of a Pholiota squarrosa lectin unliganded"
  },
  {
    "id": "6ENA",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2018-03-14",
    "note": "Nemertide alpha-1"
  },
  {
    "id": "6EXV",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.60 \u00c5",
    "date": "2018-03-21",
    "note": "Structure of mammalian RNA polymerase II elongation complex inhibited by Alpha-amanitin"
  },
  {
    "id": "6EY3",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2018-01-17",
    "note": "mf2"
  },
  {
    "id": "6F61",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2018-12-19",
    "note": "NMR structure of purotoxin-6"
  },
  {
    "id": "6FEY",
    "method": "X-RAY DIFFRACTION",
    "resolution": "3.48 \u00c5",
    "date": "2018-09-26",
    "note": "Crystal structure of Drosophila neural ectodermal development factor Imp-L2 with Drosophila DILP5 insulin"
  },
  {
    "id": "6FGM",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2019-01-09",
    "note": "The NMR solution structure of the peptide AC12 from Hypsiboas raniceps"
  },
  {
    "id": "6FX1",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.10 \u00c5",
    "date": "2018-07-11",
    "note": "Crystal structure of Pholiota squarrosa lectin in complex with an octasaccharide"
  },
  {
    "id": "6FX2",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.70 \u00c5",
    "date": "2018-07-11",
    "note": "crystal structure of Pholiota squarrosa lectin in complex with a decasaccharide"
  },
  {
    "id": "6FX3",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.70 \u00c5",
    "date": "2018-07-11",
    "note": "crystal structure of Pholiota squarrosa lectin in complex with a dodecasaccharide"
  },
  {
    "id": "6FXC",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "6.76 \u00c5",
    "date": "2018-03-21",
    "note": "The cryo-EM structure of hibernating 100S ribosome dimer from pathogenic Staphylococcus aureus"
  },
  {
    "id": "6G4I",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2019-10-09",
    "note": "The solution NMR structure of brevinin-1BYa in 33% trifluoroethanol"
  },
  {
    "id": "6G4K",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2019-10-09",
    "note": "The solution NMR structure of brevinin-1BYa in sodium dodecyl sulphate micelles"
  },
  {
    "id": "6G4U",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2019-10-16",
    "note": "The solution NMR structure of brevinin-1BYa in dodecylphosphocholine micelles"
  },
  {
    "id": "6GB1",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.73 \u00c5",
    "date": "2018-06-20",
    "note": "Crystal structure of the GLP1 receptor ECD with Peptide 11"
  },
  {
    "id": "6GD5",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2018-11-28",
    "note": "The solution structure of the LptA-Thanatin complex"
  },
  {
    "id": "6GFT",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2019-03-06",
    "note": "Antinociceptive evaluation of cyriotoxin-1a, the first toxin purified from Cyriopagopus schioedtei spider venom"
  },
  {
    "id": "6GGZ",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2019-01-30",
    "note": "NMR structure of the scorpion toxin AmmTx3"
  },
  {
    "id": "6GNQ",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.20 \u00c5",
    "date": "2019-06-12",
    "note": "Monoclinic crystalline form of human insulin, complexed with meta-cresol"
  },
  {
    "id": "6GV0",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.26 \u00c5",
    "date": "2019-07-03",
    "note": "Insulin glulisine"
  },
  {
    "id": "6GZ3",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.60 \u00c5",
    "date": "2018-12-05",
    "note": "tRNA translocation by the eukaryotic 80S ribosome and the impact of GTP hydrolysis, Translocation-intermediate-POST-1 (TI-POST-1)"
  },
  {
    "id": "6GZ4",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.60 \u00c5",
    "date": "2018-12-05",
    "note": "tRNA translocation by the eukaryotic 80S ribosome and the impact of GTP hydrolysis, Translocation-intermediate-POST-2 (TI-POST-2)"
  },
  {
    "id": "6GZ5",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.50 \u00c5",
    "date": "2018-12-05",
    "note": "tRNA translocation by the eukaryotic 80S ribosome and the impact of GTP hydrolysis, Translocation-intermediate-POST-3 (TI-POST-3)"
  },
  {
    "id": "6H41",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.75 \u00c5",
    "date": "2018-12-26",
    "note": "Structure of the complex of the IL-5 inhibitory peptide AF17121 bound to the IL-5 receptor IL-5Ralpha"
  },
  {
    "id": "6H9U",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.57 \u00c5",
    "date": "2019-02-06",
    "note": "Crystal structure of the BiP NBD and MANF SAP complex"
  },
  {
    "id": "6HMA",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "2.65 \u00c5",
    "date": "2018-11-14",
    "note": "Improved model derived from cryo-EM map of Staphylococcus aureus large ribosomal subunit"
  },
  {
    "id": "6HMZ",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.98 \u00c5",
    "date": "2018-11-21",
    "note": "Crystal Structure of a Single-Domain Cyclophilin from Brassica napus Phloem Sap"
  },
  {
    "id": "6HN5",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.20 \u00c5",
    "date": "2018-11-21",
    "note": "Leucine-zippered human insulin receptor ectodomain with single bound insulin - \"upper\" membrane-distal part"
  },
  {
    "id": "6HN9",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2018-11-07",
    "note": "Nicomicin-1 -- Novel antimicrobial peptides from the Arctic polychaeta Nicomache minor provide new molecular insight into biological role of the BRICHOS domain"
  },
  {
    "id": "6HVB",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2019-01-16",
    "note": "NMR structure of Urotensin Peptide Asp-c[Cys-Phe-(N-Me)Trp-Lys-Tyr-Cys]-Val in SDS solution"
  },
  {
    "id": "6HVC",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2019-01-16",
    "note": "NMR structure of Urotensin Peptide Asp-c[Cys-Phe-Trp-(N-Me)Lys-Tyr-Cys]-Val in SDS solution"
  },
  {
    "id": "6HY7",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.26 \u00c5",
    "date": "2019-05-22",
    "note": "Crystal structure of alpha9 nAChR extracellular domain in complex with alpha-conotoxin RgIA"
  },
  {
    "id": "6I0Y",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.20 \u00c5",
    "date": "2018-12-05",
    "note": "TnaC-stalled ribosome complex with the titin I27 domain folding close to the ribosomal exit tunnel"
  },
  {
    "id": "6IDG",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.00 \u00c5",
    "date": "2019-02-13",
    "note": "antibody 64M-5 Fab in complex with dT(6-4)T"
  },
  {
    "id": "6IFJ",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.40 \u00c5",
    "date": "2019-09-25",
    "note": "Structure of bispecific Fc"
  },
  {
    "id": "6IGK",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.00 \u00c5",
    "date": "2018-11-21",
    "note": "Crystal Structure of human ETB receptor in complex with Endothelin-3"
  },
  {
    "id": "6ILD",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.88 \u00c5",
    "date": "2019-02-27",
    "note": "Crystal Structure of Human LysRS: P38/AIMP2 Complex II"
  },
  {
    "id": "6IMG",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2019-08-28",
    "note": "Solution Structure of Bicyclic Peptide pb-13"
  },
  {
    "id": "6IMH",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2019-08-28",
    "note": "Solution Structure of Bicyclic Peptide pb-18"
  },
  {
    "id": "6INS",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.00 \u00c5",
    "date": "1994-01-31",
    "note": "X-RAY ANALYSIS OF THE SINGLE CHAIN B29-A1 PEPTIDE-LINKED INSULIN MOLECULE. A COMPLETELY INACTIVE ANALOGUE"
  },
  {
    "id": "6IQG",
    "method": "X-RAY DIFFRACTION",
    "resolution": "3.00 \u00c5",
    "date": "2019-02-13",
    "note": "X-ray crystal structure of Fc and peptide complex"
  },
  {
    "id": "6IQH",
    "method": "X-RAY DIFFRACTION",
    "resolution": "3.00 \u00c5",
    "date": "2019-02-13",
    "note": "X-ray crystal structure of covalent-bonded complex of Fc and peptide"
  },
  {
    "id": "6J7W",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.60 \u00c5",
    "date": "2019-02-06",
    "note": "Crystal Structure of Human BCMA in complex with UniAb(TM) VH"
  },
  {
    "id": "6J8E",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.00 \u00c5",
    "date": "2019-02-27",
    "note": "Human Nav1.2-beta2-KIIIA ternary complex"
  },
  {
    "id": "6JI7",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2020-02-26",
    "note": "Coffeetides: iron-binding cysteine rich peptides from coffee waste"
  },
  {
    "id": "6JIC",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2020-02-26",
    "note": "Identification and Characterization of a carboxypeptidase inhibitor from Lycium barbarum"
  },
  {
    "id": "6JK2",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.06 \u00c5",
    "date": "2020-03-04",
    "note": "Crystal structure of a mini fungal lectin, PhoSL"
  },
  {
    "id": "6JK3",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.12 \u00c5",
    "date": "2020-03-04",
    "note": "Crystal structure of a mini fungal lectin, PhoSL in complex with core-fucosylated chitobiose"
  },
  {
    "id": "6K4V",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2019-06-12",
    "note": "The solution structure of the smart chimeric peptide G6"
  },
  {
    "id": "6K50",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2019-06-12",
    "note": "Solution structure of plectasin derivative NZ2114"
  },
  {
    "id": "6K51",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2019-06-12",
    "note": "Solution structure of plectasin derivative MP1102"
  },
  {
    "id": "6K59",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2020-05-06",
    "note": "Structure of Glargine insulin in 20% acetic acid-d4 (pH 1.9)"
  },
  {
    "id": "6KDI",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.70 \u00c5",
    "date": "2019-12-18",
    "note": "Antibody 64M-5 Fab including isoAsp in complex with dT(6-4)T"
  },
  {
    "id": "6KH8",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2020-10-07",
    "note": "Solution structure of Zn free Bovine Pancreatic Insulin in 20% acetic acid-d4 (pH 1.9)"
  },
  {
    "id": "6KH9",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2020-08-12",
    "note": "Solution structure of bovine insulin amyloid intermediate-1"
  },
  {
    "id": "6KHA",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2020-08-12",
    "note": "Solution structure of bovine insulin amyloid intermediate-2"
  },
  {
    "id": "6KLM",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2019-11-20",
    "note": "NMR solution structure of Roseltide rT7"
  },
  {
    "id": "6KMY",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2020-04-08",
    "note": "Structure of single disulfide peptide Czon1107-P5A"
  },
  {
    "id": "6KN2",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2020-04-08",
    "note": "Structure of single disulfide peptide Czon1107-WT (major conformer)"
  },
  {
    "id": "6KN3",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2020-04-08",
    "note": "Structure of single disulfide peptide Czon1107-WT (minor conformer)"
  },
  {
    "id": "6KNO",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2020-04-08",
    "note": "Structure of single disulfide peptide Czon1107-P7A (minor conformer)"
  },
  {
    "id": "6KNP",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2020-04-08",
    "note": "Structure of single disulfide peptide Czon1107-P7A(major conformer)"
  },
  {
    "id": "6KRA",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2020-08-26",
    "note": "Solution NMR Structure of RMAD4 alpha Defensin"
  },
  {
    "id": "6KYW",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.60 \u00c5",
    "date": "2020-09-16",
    "note": "S8-mSRK-S8-SP11 complex"
  },
  {
    "id": "6LF5",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2020-12-02",
    "note": "The solution structure of ShSPI"
  },
  {
    "id": "6LKQ",
    "method": "X-RAY DIFFRACTION",
    "resolution": "3.10 \u00c5",
    "date": "2020-05-06",
    "note": "The Structural Basis for Inhibition of Ribosomal Translocation by Viomycin"
  },
  {
    "id": "6LRY",
    "method": "X-RAY DIFFRACTION",
    "resolution": "3.00 \u00c5",
    "date": "2020-02-12",
    "note": "Crystal structure of human endothelin ETB receptor in complex with sarafotoxin S6b"
  },
  {
    "id": "6LWY",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.30 \u00c5",
    "date": "2021-02-10",
    "note": "Crystal structure of Laterosporulin3, bacteriocin produced by Brevibacillus sp. strain SKR3"
  },
  {
    "id": "6M4X",
    "method": "X-RAY DIFFRACTION",
    "resolution": "3.00 \u00c5",
    "date": "2021-03-10",
    "note": "Co-crystal structure of Ac-AChBPP in complex with [N9A]LvIA"
  },
  {
    "id": "6M4Z",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.80 \u00c5",
    "date": "2021-03-10",
    "note": "Co-crystal structure of Ac-AChBPP in complex with alpha-conotoxin [D11A]LvIA"
  },
  {
    "id": "6M5C",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2021-03-10",
    "note": "Solution structure of avenatide aV1"
  },
  {
    "id": "6M7K",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.10 \u00c5",
    "date": "2019-02-20",
    "note": "Structure of mouse RECON (AKR1C13) in complex with cyclic AMP-AMP-GMP (cAAG)"
  },
  {
    "id": "6MDX",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.55 \u00c5",
    "date": "2019-04-10",
    "note": "Mechanism of protease dependent DPC repair"
  },
  {
    "id": "6MFP",
    "method": "X-RAY DIFFRACTION",
    "resolution": "3.00 \u00c5",
    "date": "2019-09-18",
    "note": "Crystal Structure of the RV305 C1-C2 specific ADCC potent antibody DH677.3 Fab in complex with HIV-1 clade A/E gp120 and M48U1"
  },
  {
    "id": "6MG7",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.91 \u00c5",
    "date": "2019-09-25",
    "note": "Crystal structure of the RV144 C1-C2 specific antibody CH54 Fab in complex with HIV-1 CLADE A/E GP120 and M48U1"
  },
  {
    "id": "6MJD",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2018-11-28",
    "note": "NMR Solution structure of GIIIC"
  },
  {
    "id": "6MJV",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2019-08-28",
    "note": "A consensus human beta defensin"
  },
  {
    "id": "6MK4",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2018-12-19",
    "note": "Solution NMR structure of spider toxin analogue [E17K]ProTx-II"
  },
  {
    "id": "6MK5",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2018-12-19",
    "note": "Solution NMR structure of spider toxin analogue [F5A,M6F,T26L,K28R]GpTx-1"
  },
  {
    "id": "6MM4",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2019-10-02",
    "note": "Solution NMR Structure of Engineered Cystine Knot Protein 2.5F"
  },
  {
    "id": "6MRQ",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.29 \u00c5",
    "date": "2020-07-01",
    "note": "Structure of ToPI1 inhibitor from Tityus obscurus scorpion venom in complex with trypsin"
  },
  {
    "id": "6MRY",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.30 \u00c5",
    "date": "2019-04-24",
    "note": "NoD173 plant defensin"
  },
  {
    "id": "6MSL",
    "method": "X-RAY DIFFRACTION",
    "resolution": "3.10 \u00c5",
    "date": "2019-10-23",
    "note": "Integrin AlphaVBeta3 ectodomain bound to EETI-II 2.5D"
  },
  {
    "id": "6MSU",
    "method": "X-RAY DIFFRACTION",
    "resolution": "3.11 \u00c5",
    "date": "2019-10-23",
    "note": "Integrin alphaVBeta3 in complex with EETI-II 2.5F"
  },
  {
    "id": "6MUE",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.90 \u00c5",
    "date": "2019-05-08",
    "note": "Voltage-gated sodium channel NaV1.4 IQ domain in complex with Ca2+/Calmodulin"
  },
  {
    "id": "6MY1",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2019-11-06",
    "note": "Solution structure of gomesin at 278 K"
  },
  {
    "id": "6MY2",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2019-11-06",
    "note": "Solution structure of gomesin at 298 K"
  },
  {
    "id": "6MY3",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2019-11-06",
    "note": "Solution structure of gomesin at 310K"
  },
  {
    "id": "6MZT",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2020-03-11",
    "note": "Solution structure of alpha-KTx-6.21 (UroTx) from Urodacus yaschenkoi"
  },
  {
    "id": "6N1D",
    "method": "X-RAY DIFFRACTION",
    "resolution": "3.20 \u00c5",
    "date": "2019-04-03",
    "note": "X-ray Crystal complex showing Spontaneous Ribosomal Translocation of mRNA and tRNAs into a Chimeric Hybrid State"
  },
  {
    "id": "6N4I",
    "method": "X-RAY DIFFRACTION",
    "resolution": "3.54 \u00c5",
    "date": "2019-01-23",
    "note": "Structural basis of Nav1.7 inhibition by a gating-modifier spider toxin"
  },
  {
    "id": "6N4Q",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.60 \u00c5",
    "date": "2019-01-23",
    "note": "CryoEM structure of Nav1.7 VSD2 (actived state) in complex with the gating modifier toxin ProTx2"
  },
  {
    "id": "6N4R",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "4.20 \u00c5",
    "date": "2019-01-23",
    "note": "CryoEM structure of Nav1.7 VSD2 (deactived state) in complex with the gating modifier toxin ProTx2"
  },
  {
    "id": "6N7Q",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.10 \u00c5",
    "date": "2019-01-30",
    "note": "Plasmodium falciparum FVO apical membrane antigen 1 (AMA1) bound to cyclised RON2 peptide"
  },
  {
    "id": "6N9T",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.58 \u00c5",
    "date": "2019-01-16",
    "note": "Structure of a peptide-based photo-affinity cross-linker with Herceptin Fc"
  },
  {
    "id": "6NDK",
    "method": "X-RAY DIFFRACTION",
    "resolution": "3.64 \u00c5",
    "date": "2019-02-27",
    "note": "Structure of ASLSufA6 A37.5 bound to the 70S A site"
  },
  {
    "id": "6NIY",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.34 \u00c5",
    "date": "2019-01-23",
    "note": "A high-resolution cryo-electron microscopy structure of a calcitonin receptor-heterotrimeric Gs protein complex"
  },
  {
    "id": "6NK9",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2020-01-15",
    "note": "Solution structure of AcaTx1, a potassium channel inhibitor from the sea anemone Antopleura cascaia"
  },
  {
    "id": "6NOM",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2019-08-21",
    "note": "NMR solution structure of Pisum sativum defensin 2 (Psd2) provides evidence for the presence of hydrophobic surface clusters"
  },
  {
    "id": "6NOX",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2019-04-03",
    "note": "Solution structure of SFTI-KLK5 inhibitor"
  },
  {
    "id": "6NUG",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2020-02-05",
    "note": "hGRNA4-28_3s"
  },
  {
    "id": "6NW8",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2019-07-03",
    "note": "SOLUTION STRUCTURE OF CN29, A TOXIN FROM CENTRUROIDES NOXIUS SCORPION VENOM"
  },
  {
    "id": "6NWV",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.60 \u00c5",
    "date": "2020-02-12",
    "note": "Insulin Lispro Analog"
  },
  {
    "id": "6NWY",
    "method": "X-RAY DIFFRACTION",
    "resolution": "3.50 \u00c5",
    "date": "2020-10-14",
    "note": "Modified tRNA(Pro) bound to Thermus thermophilus 70S (near-cognate)"
  },
  {
    "id": "6O17",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.58 \u00c5",
    "date": "2020-02-26",
    "note": "Recombinant Human Insulin"
  },
  {
    "id": "6O21",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.15 \u00c5",
    "date": "2019-03-13",
    "note": "Crystal Structure of Human KLK4 in Complex With Cleaved SFTI-FCQR(Asn14)[1,14] Inhibitor"
  },
  {
    "id": "6O3M",
    "method": "X-RAY DIFFRACTION",
    "resolution": "3.97 \u00c5",
    "date": "2020-10-14",
    "note": "Unmodified tRNA(Pro) bound to Thermus thermophilus 70S (cognate)"
  },
  {
    "id": "6O3Q",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2019-04-24",
    "note": "NMR solution structure of vicilin-buried peptide-8 (VBP-8)"
  },
  {
    "id": "6O3S",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2019-04-24",
    "note": "NMR solution structure of Luffin P1"
  },
  {
    "id": "6O6V",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.35 \u00c5",
    "date": "2019-07-31",
    "note": "Crystal structure of Csm6 in complex with cA4 by soaking cA4 into Csm6"
  },
  {
    "id": "6O6X",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.11 \u00c5",
    "date": "2019-07-31",
    "note": "Crystal structure of Csm6 W14A/E337A mutant in complex with cA4 by cocrystallization"
  },
  {
    "id": "6O71",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.55 \u00c5",
    "date": "2019-07-31",
    "note": "Crystal structure of Csm6 in complex with cdA4 by soaking cdA4 into Csm6"
  },
  {
    "id": "6O75",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.60 \u00c5",
    "date": "2019-07-31",
    "note": "Crystal structure of Csm1-Csm4 cassette in complex with pppApA"
  },
  {
    "id": "6O79",
    "method": "X-RAY DIFFRACTION",
    "resolution": "3.00 \u00c5",
    "date": "2019-07-31",
    "note": "Crystal structure of Csm1-Csm4 cassette in complex with cA3"
  },
  {
    "id": "6OBQ",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.84 \u00c5",
    "date": "2019-09-18",
    "note": "PP1 H66K in complex with Microcystin LR"
  },
  {
    "id": "6OBR",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.50 \u00c5",
    "date": "2019-09-18",
    "note": "PP1 Y134A in complex with Microcystin LR"
  },
  {
    "id": "6OBU",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.95 \u00c5",
    "date": "2019-09-18",
    "note": "PP1 Y134K in complex with Microcystin LR"
  },
  {
    "id": "6OFA",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2019-08-28",
    "note": "Wasabi Receptor Toxin"
  },
  {
    "id": "6OLE",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.10 \u00c5",
    "date": "2019-06-19",
    "note": "Human ribosome nascent chain complex (CDH1-RNC) stalled by a drug-like molecule with AP and PE tRNAs"
  },
  {
    "id": "6OLF",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.90 \u00c5",
    "date": "2019-06-19",
    "note": "Human ribosome nascent chain complex (CDH1-RNC) stalled by a drug-like molecule with AA and PE tRNAs"
  },
  {
    "id": "6OLG",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.40 \u00c5",
    "date": "2019-06-19",
    "note": "Human ribosome nascent chain complex stalled by a drug-like small molecule (CDH1_RNC with PP tRNA)"
  },
  {
    "id": "6OLI",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.50 \u00c5",
    "date": "2019-06-19",
    "note": "Structure of human ribosome nascent chain complex selectively stalled by a drug-like small molecule (USO1-RNC)"
  },
  {
    "id": "6OLZ",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.90 \u00c5",
    "date": "2019-06-19",
    "note": "Human ribosome nascent chain complex (PCSK9-RNC) stalled by a drug-like molecule with PP tRNA"
  },
  {
    "id": "6OM0",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.10 \u00c5",
    "date": "2019-06-19",
    "note": "Human ribosome nascent chain complex (PCSK9-RNC) stalled by a drug-like molecule with AP and PE tRNAs"
  },
  {
    "id": "6OM7",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.70 \u00c5",
    "date": "2019-06-19",
    "note": "Human ribosome nascent chain complex (PCSK9-RNC) stalled by a drug-like small molecule with AA and PE tRNAs"
  },
  {
    "id": "6OQP",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2019-07-31",
    "note": "U-AITx-Ate1"
  },
  {
    "id": "6OR0",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.55 \u00c5",
    "date": "2019-12-11",
    "note": "Crystal structure of Insulin from Non-merohedrally twinned crystals"
  },
  {
    "id": "6OSI",
    "method": "X-RAY DIFFRACTION",
    "resolution": "4.14 \u00c5",
    "date": "2020-10-14",
    "note": "Unmodified tRNA(Pro) bound to Thermus thermophilus 70S (near cognate)"
  },
  {
    "id": "6OTA",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2020-05-06",
    "note": "THREE-DIMENSIONAL STRUCTURE IN SOLUTION OF THE RIBBON DISULFIDE ISOMER OF THE NICOTINIC ACETYLCHOLINE RECEPTOR ANTAGONIST ALPHA-CONOTOXIN TxIA"
  },
  {
    "id": "6OTB",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2020-05-06",
    "note": "NMR structure of alpha conotoxin SII"
  },
  {
    "id": "6OVJ",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2020-05-06",
    "note": "NMR structure of truncated alpha conotoxin SII: Ile-SII(3-14)"
  },
  {
    "id": "6OXA",
    "method": "X-RAY DIFFRACTION",
    "resolution": "3.25 \u00c5",
    "date": "2019-08-21",
    "note": "Dimeric E.coli YoeB bound to Thermus thermophilus 70S pre-cleavage (AAU)"
  },
  {
    "id": "6P4Z",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.80 \u00c5",
    "date": "2019-06-12",
    "note": "Structure of gadolinium-caged cobalt (III) insulin hexamer"
  },
  {
    "id": "6PI2",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2019-09-11",
    "note": "NMR Solution structure of native tachyplesin II peptide"
  },
  {
    "id": "6PI3",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2019-09-11",
    "note": "NMR Solution structure of native tachyplesin III peptide"
  },
  {
    "id": "6PIN",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2019-09-11",
    "note": "NMR Solution structure of cyclic tachyplesin I"
  },
  {
    "id": "6PIO",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2019-09-11",
    "note": "NMR Solution structure of cyclic tachyplesin II"
  },
  {
    "id": "6PIP",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2019-09-11",
    "note": "NMR Solution structure of cyclic tachyplesin III"
  },
  {
    "id": "6PPC",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2019-08-14",
    "note": "Solution structure of conotoxin MiXXVIIA"
  },
  {
    "id": "6PSA",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.30 \u00c5",
    "date": "2020-02-05",
    "note": "PIE12 D-PEPTIDE AGAINST HIV ENTRY (IN COMPLEX WITH IQN17 Q577R RESISTANCE MUTANT)"
  },
  {
    "id": "6PX7",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2020-01-22",
    "note": "Dg12a in Weaponisation 'on the fly': Convergent recruitment of knottin and defensin scaffolds as neurotoxins in the venom of assassin fly Dolopus genitalis (Diptera: Asilidae)"
  },
  {
    "id": "6PX8",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2020-01-22",
    "note": "Dg3b in Weaponisation 'on the fly': Convergent recruitment of knottin and defensin scaffolds as neurotoxins in the venom of assassin fly Dolopus genitalis (Diptera: Asilidae)"
  },
  {
    "id": "6Q1U",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.35 \u00c5",
    "date": "2020-04-15",
    "note": "Structure of plasmin and peptide complex"
  },
  {
    "id": "6Q5Z",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2019-04-17",
    "note": "H-Vc7.2, H-superfamily conotoxin"
  },
  {
    "id": "6Q8Q",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.00 \u00c5",
    "date": "2020-01-15",
    "note": "Bovine Insulin under 2 kbar of argon"
  },
  {
    "id": "6Q9F",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.63 \u00c5",
    "date": "2020-01-15",
    "note": "Aspartyl/Asparaginyl beta-hydroxylase (AspH) H679A in complex with Mn, NOG and Factor X peptide fragment (39mer-4Ser)"
  },
  {
    "id": "6Q9I",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.85 \u00c5",
    "date": "2020-01-15",
    "note": "Aspartyl/Asparaginyl beta-hydroxylase (AspH) H679A in complex with Factor X peptide fragment (39mer-4Ser)"
  },
  {
    "id": "6QBK",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2019-12-11",
    "note": "NMR Structure of Big-defensin 1 [44-93] from oyster Crassostrea gigas"
  },
  {
    "id": "6QDW",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "2.83 \u00c5",
    "date": "2020-01-15",
    "note": "Cryo-EM structure of the 50S ribosomal subunit at 2.83 Angstroms with modeled GBC SecM peptide"
  },
  {
    "id": "6QES",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2019-12-18",
    "note": "[1-40]Gga-AvBD11"
  },
  {
    "id": "6QET",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2019-12-18",
    "note": "[41-82]Gga-AvBD11"
  },
  {
    "id": "6QEV",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.70 \u00c5",
    "date": "2019-11-06",
    "note": "EngBF DARPin Fusion 4b B6"
  },
  {
    "id": "6QFK",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.00 \u00c5",
    "date": "2019-11-06",
    "note": "EngBF DARPin Fusion 4b G10"
  },
  {
    "id": "6QJB",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2019-07-03",
    "note": "Truncated Evasin-3 (tEv3 17-56)"
  },
  {
    "id": "6QKF",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2019-03-20",
    "note": "Structure investigations of Protegrin-4 by High resolution NMR spectroscopy"
  },
  {
    "id": "6QQ7",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.65 \u00c5",
    "date": "2019-02-27",
    "note": "Bovine insulin at ambient pressure"
  },
  {
    "id": "6QQG",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.15 \u00c5",
    "date": "2019-03-06",
    "note": "High pressure structure of bovine insulin (60 MPa)"
  },
  {
    "id": "6QRH",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.15 \u00c5",
    "date": "2019-02-27",
    "note": "High pressure structure of bovine insulin (100 MPa)"
  },
  {
    "id": "6QRK",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.10 \u00c5",
    "date": "2019-03-06",
    "note": "High pressure structure of bovine insulin (200 MPa)"
  },
  {
    "id": "6R28",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2020-01-29",
    "note": "Structure of peptide P7, which binds Cdc42 and inhibits effector interactions."
  },
  {
    "id": "6RLX",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.50 \u00c5",
    "date": "1993-10-31",
    "note": "X-RAY STRUCTURE OF HUMAN RELAXIN AT 1.5 ANGSTROMS. COMPARISON TO INSULIN AND IMPLICATIONS FOR RECEPTOR BINDING DETERMINANTS"
  },
  {
    "id": "6RYO",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.92 \u00c5",
    "date": "2020-01-15",
    "note": "Bacterial membrane enzyme structure by the in meso method at 1.9 A resolution"
  },
  {
    "id": "6S0X",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "2.42 \u00c5",
    "date": "2019-08-21",
    "note": "Erythromycin Resistant Staphylococcus aureus 70S ribosome (delta R88 A89 uL22) in complex with erythromycin."
  },
  {
    "id": "6S0Z",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "2.30 \u00c5",
    "date": "2019-08-21",
    "note": "Erythromycin Resistant Staphylococcus aureus 50S ribosome (delta R88 A89 uL22) in complex with erythromycin."
  },
  {
    "id": "6S12",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.20 \u00c5",
    "date": "2019-08-21",
    "note": "Erythromycin Resistant Staphylococcus aureus 50S ribosome (delta R88 A89 uL22)."
  },
  {
    "id": "6S13",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.58 \u00c5",
    "date": "2019-08-21",
    "note": "Erythromycin Resistant Staphylococcus aureus 70S ribosome (delta R88 A89 uL22)."
  },
  {
    "id": "6S34",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.35 \u00c5",
    "date": "2019-07-03",
    "note": "Zinc free, dimeric human insulin determined to 1.35 Angstrom resolution"
  },
  {
    "id": "6S4I",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.51 \u00c5",
    "date": "2020-07-15",
    "note": "Crystal structure of zinc free A14E, B25H, B29K(N(eps)-[2-(2-[2-(2-[2-(Octadecandioyl-gamma-Glu)amino]ethoxy)ethoxy]acetylamino)ethoxy]ethoxy)acetyl]), desB30 human insulin"
  },
  {
    "id": "6S4J",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.50 \u00c5",
    "date": "2020-07-15",
    "note": "Crystal structure of zinc free A14E, B25H, B29K(N(eps)-[2-(2-[2-(2-[2-(Octadecandioyl-gamma-Glu)amino]ethoxy)ethoxy]acetylamino)ethoxy]ethoxy)acetyl]), desB27, desB30 human insulin"
  },
  {
    "id": "6S5P",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.46 \u00c5",
    "date": "2019-08-21",
    "note": "Cfucosylated peptide SBL2 bound to Fucose binding Lectin LecB (PA-IIL) from Pseudomonas aeruginosa at 1.46 Angstrom resolution"
  },
  {
    "id": "6SAA",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2020-07-22",
    "note": "M-TRTX-Preg1a (Poecilotheria regalis)"
  },
  {
    "id": "6SAB",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2020-07-22",
    "note": "M-BUTX-Ptr1a (Parabuthus transvaalicus)"
  },
  {
    "id": "6SOF",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "4.30 \u00c5",
    "date": "2019-11-13",
    "note": "human insulin receptor ectodomain bound by 4 insulin"
  },
  {
    "id": "6SPF",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "2.89 \u00c5",
    "date": "2019-10-23",
    "note": "Pseudomonas aeruginosa 70s ribosome from an aminoglycoside resistant clinical isolate"
  },
  {
    "id": "6SWA",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.10 \u00c5",
    "date": "2020-09-30",
    "note": "Mus musculus brain neocortex ribosome 60S bound to Ebp1"
  },
  {
    "id": "6T1Y",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.30 \u00c5",
    "date": "2020-03-04",
    "note": "Cryo-EM structure of phalloidin-stabilized F-actin (copolymerized)"
  },
  {
    "id": "6T20",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.70 \u00c5",
    "date": "2020-03-04",
    "note": "Cryo-EM structure of phalloidin-stabilized F-actin (aged)"
  },
  {
    "id": "6T25",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.60 \u00c5",
    "date": "2020-03-04",
    "note": "Cryo-EM structure of phalloidin-Alexa Flour-546-stabilized F-actin (copolymerized)"
  },
  {
    "id": "6T7Z",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.00 \u00c5",
    "date": "2020-09-09",
    "note": "KEAP1 IN COMPLEX WITH COMPOUND 44"
  },
  {
    "id": "6TME",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.33 \u00c5",
    "date": "2020-03-18",
    "note": "Monomeric LRX8 in complex with RALF4."
  },
  {
    "id": "6TYH",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.60 \u00c5",
    "date": "2019-11-13",
    "note": "Four-Disulfide Insulin Analog A22/B22"
  },
  {
    "id": "6U22",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.42 \u00c5",
    "date": "2020-07-01",
    "note": "Crystal structure of SFTI-triazole inhibitor in complex with beta-trypsin"
  },
  {
    "id": "6U24",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2020-07-01",
    "note": "NMR solution structure of triazole bridged SFTI-1"
  },
  {
    "id": "6U6G",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2019-10-09",
    "note": "Solution NMR structure of the nodule-specific cysteine-rich peptide NCR044 from Medicago truncatula"
  },
  {
    "id": "6U7Q",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2020-04-22",
    "note": "NMR solution structure of SFTI-R10"
  },
  {
    "id": "6U7R",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2020-04-22",
    "note": "NMR solution structure of SFTI1 based KLK7 protease inhibitor"
  },
  {
    "id": "6U7S",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2020-04-22",
    "note": "NMR solution structure of SFTI-1 based plasmin inhibitor"
  },
  {
    "id": "6U7U",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2020-04-22",
    "note": "NMR solution structure of triazole bridged matriptase inhibitor"
  },
  {
    "id": "6U7W",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2020-04-22",
    "note": "NMR solution structure of a triazole bridged KLK7 inhibitor"
  },
  {
    "id": "6U7X",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2020-04-22",
    "note": "NMR solution structure of triazole bridged plasmin inhibitor"
  },
  {
    "id": "6U96",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.80 \u00c5",
    "date": "2020-05-13",
    "note": "Actin phalloidin at BeFx state"
  },
  {
    "id": "6UD9",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.10 \u00c5",
    "date": "2020-09-23",
    "note": "S2 symmetric peptide design number 2, Morticia"
  },
  {
    "id": "6UDW",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.10 \u00c5",
    "date": "2020-09-23",
    "note": "S2 symmetric peptide design number 3 crystal form 2, Lurch"
  },
  {
    "id": "6UFA",
    "method": "X-RAY DIFFRACTION",
    "resolution": "0.77 \u00c5",
    "date": "2020-12-02",
    "note": "S4 symmetric peptide design number 1, Tim zinc-bound form"
  },
  {
    "id": "6UFU",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.10 \u00c5",
    "date": "2020-12-02",
    "note": "C2 symmetric peptide design number 1, Zappy, crystal form 1"
  },
  {
    "id": "6UG2",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.10 \u00c5",
    "date": "2020-12-02",
    "note": "C2 symmetric peptide design number 1, Zappy, crystal form 2"
  },
  {
    "id": "6UG3",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.10 \u00c5",
    "date": "2020-12-02",
    "note": "C3 symmetric peptide design number 1, Sporty, crystal form 1"
  },
  {
    "id": "6UG6",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.10 \u00c5",
    "date": "2020-12-02",
    "note": "C3 symmetric peptide design number 1, Sporty, crystal form 2"
  },
  {
    "id": "6UGB",
    "method": "X-RAY DIFFRACTION",
    "resolution": "0.95 \u00c5",
    "date": "2020-12-02",
    "note": "C3 symmetric peptide design number 2, Baby Basil"
  },
  {
    "id": "6UGC",
    "method": "X-RAY DIFFRACTION",
    "resolution": "0.90 \u00c5",
    "date": "2020-12-02",
    "note": "C3 symmetric peptide design number 3"
  },
  {
    "id": "6UIB",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.74 \u00c5",
    "date": "2020-07-15",
    "note": "Crystal structure of IL23 bound to peptide 23-652"
  },
  {
    "id": "6UVA",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "2.30 \u00c5",
    "date": "2020-04-01",
    "note": "CryoEM Structure of the active Adrenomedullin 2 receptor G protein complex with adrenomedullin 2 peptide"
  },
  {
    "id": "6UVO",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.90 \u00c5",
    "date": "2019-12-18",
    "note": "Structure of antibody 3G12 bound to the central conserved domain of RSV G"
  },
  {
    "id": "6UX5",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2020-11-18",
    "note": "Structure of acrorhagin I from the sea anemone Actinia equina"
  },
  {
    "id": "6V67",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.07 \u00c5",
    "date": "2020-12-09",
    "note": "Apo Structure of the De Novo PD-1 Binding Miniprotein GR918.2"
  },
  {
    "id": "6V6T",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2020-05-13",
    "note": "Solution structure of delta-theraphotoxin-Hm1b from Heteroscodra maculata"
  },
  {
    "id": "6V7K",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.50 \u00c5",
    "date": "2020-12-09",
    "note": "Crystal Structure of Vascular Endothelial Growth Factor (VEGF8-109) with one copy of HH4, an alpha/beta-Peptide with Irregular Secondary Structure"
  },
  {
    "id": "6VC1",
    "method": "POWDER DIFFRACTION",
    "resolution": "N/A",
    "date": "2020-12-23",
    "note": "Octreotide oxalate"
  },
  {
    "id": "6VEP",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.90 \u00c5",
    "date": "2020-06-03",
    "note": "Human insulin in complex with the human insulin microreceptor in turn in complex with Fv 83-7"
  },
  {
    "id": "6VEQ",
    "method": "X-RAY DIFFRACTION",
    "resolution": "3.25 \u00c5",
    "date": "2020-06-03",
    "note": "Con-Ins G1 in complex with the human insulin microreceptor in turn in complex with Fv 83-7"
  },
  {
    "id": "6VER",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.05 \u00c5",
    "date": "2020-11-11",
    "note": "Human insulin analog: [GluB10,TyrB20]-DOI"
  },
  {
    "id": "6VES",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.85 \u00c5",
    "date": "2020-11-11",
    "note": "Human insulin analog: [GluB10,HisA8,ArgA9]-DOI"
  },
  {
    "id": "6VET",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.46 \u00c5",
    "date": "2020-06-03",
    "note": "Human insulin analog: [GluB10,HisA8,ArgA9,TyrB20]-DOI"
  },
  {
    "id": "6VH8",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2020-09-30",
    "note": "NMR Solution Structure of Excelsatoxin A"
  },
  {
    "id": "6VNZ",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2020-07-29",
    "note": "NMR solution structure of tamapin, mutant K20A"
  },
  {
    "id": "6VPN",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2020-08-26",
    "note": "Solution structure of antifungal plant defensin PvD1"
  },
  {
    "id": "6VTW",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.60 \u00c5",
    "date": "2020-04-15",
    "note": "De novo protein design enables the precise induction of RSV-neutralizing antibodies"
  },
  {
    "id": "6VY7",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2021-02-03",
    "note": "Structural characterization of novel conotoxin MIIIB derived from Conus magus"
  },
  {
    "id": "6VY8",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2020-07-01",
    "note": "NMR solution structure of a triazole bridged trypsin inhibitor based on the framework of SFTI-1"
  },
  {
    "id": "6W17",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.90 \u00c5",
    "date": "2020-08-12",
    "note": "Structure of Dip1-activated Arp2/3 complex with nucleated actin filament"
  },
  {
    "id": "6W4M",
    "method": "X-RAY DIFFRACTION",
    "resolution": "3.20 \u00c5",
    "date": "2020-08-05",
    "note": "CRYSTAL STRUCTURE OF THE ADCC-POTENT, WEAKLY NEUTRALIZING HIV ENV CO-RECEPTOR BINDING SITE ANTIBODY N12-I2 FAB IN COMPLEX WITH HIV-1 CLADE A/E GP120 AND M48U1"
  },
  {
    "id": "6W6O",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.20 \u00c5",
    "date": "2020-06-24",
    "note": "NaChBac-Nav1.7VSDII chimera and HWTX-IV complex"
  },
  {
    "id": "6WBV",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "2.50 \u00c5",
    "date": "2020-09-09",
    "note": "Structure of human ferroportin bound to hepcidin and cobalt in lipid nanodisc"
  },
  {
    "id": "6WPV",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2020-08-26",
    "note": "Solution NMR structure of the orbitide xanthoxycyclin D"
  },
  {
    "id": "6WQJ",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2020-10-21",
    "note": "Solution structure of vicilin-buried peptide-10 from cucumber"
  },
  {
    "id": "6WQL",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2020-10-21",
    "note": "Solution structure of the seed peptide C2 (VBP-1) from pumpkin"
  },
  {
    "id": "6WQN",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "2.90 \u00c5",
    "date": "2020-06-03",
    "note": "Structure of the 50S subunit of the ribosome from Methicillin Resistant Staphylococcus aureus in complex with the antibiotic, contezolid"
  },
  {
    "id": "6WQQ",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.10 \u00c5",
    "date": "2020-06-03",
    "note": "Structure of the 50S subunit of the ribosome from Methicillin Resistant Staphylococcus aureus in complex with the antibiotic, radezolid"
  },
  {
    "id": "6WQR",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2020-06-24",
    "note": "NMR solution structure of leech peptide HSTX-I"
  },
  {
    "id": "6WRS",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.20 \u00c5",
    "date": "2020-06-03",
    "note": "Structure of the 50S subunit of the ribosome from Methicillin Resistant Staphylococcus aureus in complex with the antibiotic, tedizolid"
  },
  {
    "id": "6WRU",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.10 \u00c5",
    "date": "2020-06-03",
    "note": "Structure of the 50S subunit of the ribosome from Methicillin Resistant Staphylococcus aureus in complex with an isomer of the tedizolid"
  },
  {
    "id": "6WSJ",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.70 \u00c5",
    "date": "2021-04-28",
    "note": "Crystal Structure of Danio rerio histone deacetylase 6 catalytic domain 2 complexed with cyclopeptide des4.3.1"
  },
  {
    "id": "6WXM",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.30 \u00c5",
    "date": "2020-07-08",
    "note": "X-ray crystallographic structure of a beta-hairpin peptide derived from amyloid beta 16-36"
  },
  {
    "id": "6WXX",
    "method": "X-RAY DIFFRACTION",
    "resolution": "3.00 \u00c5",
    "date": "2020-12-30",
    "note": "crystal structure of cA4-activated Card1"
  },
  {
    "id": "6WXY",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.10 \u00c5",
    "date": "2020-12-30",
    "note": "crystal structure of cA6-bound Card1"
  },
  {
    "id": "6X4X",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2020-08-05",
    "note": "B24Y DKP insulin"
  },
  {
    "id": "6X8R",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2020-10-21",
    "note": "Pharmacological characterisation and NMR structure of the novel mu-conotoxin SxIIIC, a potent irreversible NaV channel inhibitor"
  },
  {
    "id": "6XCI",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.60 \u00c5",
    "date": "2021-03-31",
    "note": "Structure of NDM-1 in complex with macrocycle inhibitor NDM1i-3D"
  },
  {
    "id": "6XIC",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.38 \u00c5",
    "date": "2020-11-18",
    "note": "PCSK9(deltaCRD) in complex with cyclic peptide 40"
  },
  {
    "id": "6XIE",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.43 \u00c5",
    "date": "2020-11-18",
    "note": "PCSK9(deltaCRD) in complex with cyclic peptide 77"
  },
  {
    "id": "6XIF",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.77 \u00c5",
    "date": "2020-11-18",
    "note": "PCSK9(deltaCRD) in complex with cyclic peptide 83"
  },
  {
    "id": "6XL1",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.95 \u00c5",
    "date": "2020-12-30",
    "note": "crystal structure of cA4-activated Card1(D294N)"
  },
  {
    "id": "6XN9",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2021-02-10",
    "note": "Solution NMR structure of recifin, a cysteine-rich tyrosyl-DNA Phosphodiesterase I modulatory peptide from the marine sponge Axinella sp."
  },
  {
    "id": "6XTH",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2020-11-25",
    "note": "NMR solution structure of class IV lasso peptide felipeptin A1 from Amycolatopsis sp. YIM10"
  },
  {
    "id": "6XTI",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2020-11-25",
    "note": "NMR solution structure of class IV lasso peptide felipeptin A2 from Amycolatopsis sp. YIM10"
  },
  {
    "id": "6XVD",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.40 \u00c5",
    "date": "2020-02-19",
    "note": "Crystal structure of complex of urokinase and a upain-1 variant(W3F) in pH7.4 condition"
  },
  {
    "id": "6XYH",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2021-02-10",
    "note": "NMR solution structure of alpha-AnmTX-Ms11a-2 (Ms11a-2)"
  },
  {
    "id": "6XYI",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2021-02-10",
    "note": "NMR solution structure of alpha-AnmTX- Ms11a-3 (Ms11a-3)"
  },
  {
    "id": "6Y1Q",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2021-01-27",
    "note": "Cortistatin analog with improved immunoregulatory activity"
  },
  {
    "id": "6YEF",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.20 \u00c5",
    "date": "2021-01-27",
    "note": "70S initiation complex with assigned rRNA modifications from Staphylococcus aureus"
  },
  {
    "id": "6YS3",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "2.58 \u00c5",
    "date": "2020-09-30",
    "note": "Cryo-EM structure of the 50S ribosomal subunit at 2.58 Angstroms with modeled GBC SecM peptide"
  },
  {
    "id": "6YSR",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.10 \u00c5",
    "date": "2020-08-19",
    "note": "Structure of the P+9 stalled ribosome complex"
  },
  {
    "id": "6YUD",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.84 \u00c5",
    "date": "2020-08-19",
    "note": "Structure of Csx3/Crn3 from Archaeoglobus fulgidus in complex with cyclic tetra-adenylate (cA4)"
  },
  {
    "id": "6YYW",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.27 \u00c5",
    "date": "2021-03-17",
    "note": "Aspartyl/Asparaginyl beta-hydroxylase (AspH) oxygenase and TPR domains in complex with manganese, 2-oxoglutarate, and factor X substrate peptide fragment(39mer-4Ser)"
  },
  {
    "id": "6YYX",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.53 \u00c5",
    "date": "2021-03-17",
    "note": "Aspartyl/Asparaginyl beta-hydroxylase (AspH) oxygenase and TPR domains in complex with manganese, 3-methyl-2-oxoglutarate, and factor X substrate peptide fragment(39mer-4Ser)"
  },
  {
    "id": "6YYY",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.29 \u00c5",
    "date": "2021-03-17",
    "note": "Aspartyl/Asparaginyl beta-hydroxylase (AspH) oxygenase and TPR domains in complex with manganese, 4,4-dimethyl-2-oxoglutarate, and factor X substrate peptide fragment(39mer-4Ser)"
  },
  {
    "id": "6Z13",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.80 \u00c5",
    "date": "2021-05-26",
    "note": "VEGF-A 13:107 crystallized with 3C bicyclic peptide"
  },
  {
    "id": "6Z3F",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.10 \u00c5",
    "date": "2021-06-02",
    "note": "VEGF-A 13:107 crystallized with 2C bicyclic peptide"
  },
  {
    "id": "6Z6Q",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.81 \u00c5",
    "date": "2021-03-17",
    "note": "Aspartyl/Asparaginyl beta-hydroxylase (AspH) oxygenase and TPR domains in complex with manganese, 3-ethyl-2-oxoglutarate, and factor X substrate peptide fragment(39mer-4Ser)"
  },
  {
    "id": "6Z6R",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.13 \u00c5",
    "date": "2021-03-17",
    "note": "Aspartyl/Asparaginyl beta-hydroxylase (AspH) oxygenase and TPR domains in complex with manganese, N-oxalyl-alpha-methylalanine, and factor X substrate peptide fragment(39mer-4Ser)"
  },
  {
    "id": "6Z7W",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.42 \u00c5",
    "date": "2020-12-30",
    "note": "Human insulin in complex with the analytical antibody HUI-018 Fab"
  },
  {
    "id": "6Z7Y",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.20 \u00c5",
    "date": "2020-12-30",
    "note": "Human insulin in complex with the analytical antibody OXI-005 Fab"
  },
  {
    "id": "6Z7Z",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.40 \u00c5",
    "date": "2020-12-30",
    "note": "Porcine insulin in complex with the analytical antibody OXI-005 Fab"
  },
  {
    "id": "6ZBR",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.60 \u00c5",
    "date": "2021-06-23",
    "note": "VEGF-A 13:107 crystallized with 4C bicyclic peptide"
  },
  {
    "id": "6ZCD",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.80 \u00c5",
    "date": "2021-06-23",
    "note": "VEGF-A 13:107 crystallized with 1C bicyclic peptide"
  },
  {
    "id": "6ZE9",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.90 \u00c5",
    "date": "2020-06-24",
    "note": "Non-native fold of the putative VPS39 zinc finger domain"
  },
  {
    "id": "6ZHB",
    "method": "ELECTRON CRYSTALLOGRAPHY",
    "resolution": "N/A",
    "date": "2021-01-27",
    "note": "3D electron diffraction structure of bovine insulin"
  },
  {
    "id": "7A64",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2021-09-01",
    "note": "NMR solution structure for Tsp1a"
  },
  {
    "id": "7AC4",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.46 \u00c5",
    "date": "2021-09-01",
    "note": "Structure of insulin collected by rotation serial crystallography on a COC membrane at a synchrotron source"
  },
  {
    "id": "7AC7",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.08 \u00c5",
    "date": "2021-08-18",
    "note": "Structure of accomodated trans-translation complex on E. Coli stalled ribosome."
  },
  {
    "id": "7AD6",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.75 \u00c5",
    "date": "2021-03-10",
    "note": "Crystal structure of human complement C5 in complex with the K92 bovine knob domain peptide."
  },
  {
    "id": "7AD9",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.50 \u00c5",
    "date": "2020-10-28",
    "note": "Structure of the Lifeact-F-actin complex"
  },
  {
    "id": "7AL0",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.20 \u00c5",
    "date": "2021-04-21",
    "note": "Crystal Structure of Heymonin, a Novel Frog-derived Peptide"
  },
  {
    "id": "7ALD",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2020-12-23",
    "note": "Antimicrobial peptide Capitellacin from polychaeta Capitella teleta"
  },
  {
    "id": "7AR4",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.60 \u00c5",
    "date": "2021-04-07",
    "note": "Crystal structure of beta-catenin in complex with cyclic peptide inhibitor"
  },
  {
    "id": "7ARX",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.42 \u00c5",
    "date": "2021-11-03",
    "note": "Crystal structure of the catalytic fragment of masp-1 in complex with SFMI1"
  },
  {
    "id": "7ASM",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "2.48 \u00c5",
    "date": "2021-11-17",
    "note": "Staphylococcus aureus 50S after 30 minutes incubation at 37C"
  },
  {
    "id": "7ASN",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "2.73 \u00c5",
    "date": "2021-11-17",
    "note": "Staphylococcus aureus 50S after 30 minutes incubation a 37C"
  },
  {
    "id": "7ASO",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.11 \u00c5",
    "date": "2021-11-17",
    "note": "Staphylococcus aureus 70S after 30 minutes incubation at 37C"
  },
  {
    "id": "7ASP",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "2.86 \u00c5",
    "date": "2021-11-17",
    "note": "Staphylococcus aureus 70S after 50 minutes incubation at 37C"
  },
  {
    "id": "7AUE",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "2.97 \u00c5",
    "date": "2021-04-28",
    "note": "Melanocortin receptor 4 (MC4R) Gs protein complex"
  },
  {
    "id": "7AY8",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2021-03-03",
    "note": "NMR solution structure of Tbo-IT2"
  },
  {
    "id": "7BAG",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.00 \u00c5",
    "date": "2022-01-12",
    "note": "C3b in complex with CP40"
  },
  {
    "id": "7BB6",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "4.20 \u00c5",
    "date": "2021-06-02",
    "note": "AVP-V2R-Galphas-beta1-gamma2-Nb35 (L state)"
  },
  {
    "id": "7BB7",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "4.40 \u00c5",
    "date": "2021-06-02",
    "note": "AVP-V2R-Galphas-beta1-gamma2-Nb35(T state)"
  },
  {
    "id": "7BMI",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.66 \u00c5",
    "date": "2021-06-02",
    "note": "Aspartyl/Asparaginyl beta-hydroxylase (AspH) oxygenase and TPR domains in complex with manganese, 3-fluoropyridine-2,4-dicarboxylic acid, and factor X substrate peptide fragment (39mer-4Ser)"
  },
  {
    "id": "7BMJ",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.75 \u00c5",
    "date": "2021-06-02",
    "note": "Aspartyl/Asparaginyl beta-hydroxylase (AspH) oxygenase and TPR domains in complex with manganese, 5-fluoropyridine-2,4-dicarboxylic acid, and factor X substrate peptide fragment (39mer-4Ser)"
  },
  {
    "id": "7BRG",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.45 \u00c5",
    "date": "2021-03-31",
    "note": "Atrial Natriuretic Peptide Receptor complexed with rat Atrial Natriuretic Peptide"
  },
  {
    "id": "7BRH",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.45 \u00c5",
    "date": "2021-03-31",
    "note": "Atrial Natriuretic Peptide Receptor complexed with human Atrial Natriuretic Peptide"
  },
  {
    "id": "7BRI",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.45 \u00c5",
    "date": "2021-03-31",
    "note": "Atrial Natriuretic Peptide Receptor complexed with Dendroaspis Natriuretic Peptide"
  },
  {
    "id": "7BRJ",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.70 \u00c5",
    "date": "2021-03-31",
    "note": "Atrial Natriuretic Peptide Receptor complexed with deletion mutant of human Atrial Natriuretic Peptide[7-28]"
  },
  {
    "id": "7BRK",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.85 \u00c5",
    "date": "2021-03-31",
    "note": "Atrial Natriuretic Peptide Receptor complexed with deletion mutant of human Atrial Natriuretic Peptide[5-27]"
  },
  {
    "id": "7BRL",
    "method": "X-RAY DIFFRACTION",
    "resolution": "3.20 \u00c5",
    "date": "2021-03-31",
    "note": "Atrial Natriuretic Peptide Receptor complexed with Deletion mutant of rat Atrial Natriuretic Peptide[4-17,23]"
  },
  {
    "id": "7BTI",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.60 \u00c5",
    "date": "2020-05-20",
    "note": "Phalloidin bound F-actin complex"
  },
  {
    "id": "7BWI",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2020-12-23",
    "note": "Solution structure of recombinant APETx1"
  },
  {
    "id": "7C2P",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.10 \u00c5",
    "date": "2020-09-09",
    "note": "Structure of Egk Peptide"
  },
  {
    "id": "7C31",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.30 \u00c5",
    "date": "2020-09-16",
    "note": "Crystal structure of the grapevine defensin VvK1"
  },
  {
    "id": "7CKD",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2021-05-26",
    "note": "Solution structure of NCR169 oxidized form 1 from Medicago truncatula"
  },
  {
    "id": "7CKE",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2021-05-26",
    "note": "Solution structure of NCR169 oxidized form 2 from Medicago truncatula"
  },
  {
    "id": "7CSS",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2020-12-16",
    "note": "Solution structure of the topological isomer of Heat-stable enterotoxin produced by Enterotoxigenic Escherichia coli"
  },
  {
    "id": "7CU6",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2021-08-25",
    "note": "lasso peptide C24 mutant - A11V2C"
  },
  {
    "id": "7D37",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2020-12-16",
    "note": "Solution structure of Acm2-precursor peptide of Heat-stable enterotoxin produced by Enterotoxigenic Escherichia coli"
  },
  {
    "id": "7DQ0",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.00 \u00c5",
    "date": "2021-12-29",
    "note": "Crystal structure of actinomycin D-echinomycin-d(ACGTGCT/AGCTCGT) complex"
  },
  {
    "id": "7DQ8",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.40 \u00c5",
    "date": "2021-12-29",
    "note": "Crystal structure of actinomycin D-echinomycin-d(ACGCGCT/AGCTCGT) complex"
  },
  {
    "id": "7DW9",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "2.60 \u00c5",
    "date": "2021-07-21",
    "note": "Cryo-EM structure of human V2 vasopressin receptor in complex with an Gs protein"
  },
  {
    "id": "7E6J",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.90 \u00c5",
    "date": "2021-06-30",
    "note": "Aspartyl/Asparaginyl beta-hydroxylase (AspH) H725A in complex with Factor X peptide fragment (39mer-4Ser)"
  },
  {
    "id": "7E6P",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.50 \u00c5",
    "date": "2022-01-05",
    "note": "Fab-amyloid beta fragment complex"
  },
  {
    "id": "7EAU",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2021-11-03",
    "note": "SIB1, an effector of Colletotrichum orbiculare"
  },
  {
    "id": "7EDK",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2021-03-31",
    "note": "NMR solution structure of Bt14.12, a novel A-family conotoxin from Conus betulinus"
  },
  {
    "id": "7EGR",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.50 \u00c5",
    "date": "2022-04-06",
    "note": "Co-crystal structure of Ac-AChBPP in complex with RgIA"
  },
  {
    "id": "7ELY",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2021-05-19",
    "note": "A peptide with high affinity for B-Cell lymphoma2(Bcl-2)"
  },
  {
    "id": "7EQZ",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.20 \u00c5",
    "date": "2021-11-10",
    "note": "Crystal structure of Carboxypeptidase B complexed with Potato Carboxypeptidase Inhibitor"
  },
  {
    "id": "7EZW",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.35 \u00c5",
    "date": "2022-06-08",
    "note": "Cyclic Peptide that Interacts with the eIF4E Capped-mRNA Binding Site"
  },
  {
    "id": "7F32",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2022-09-07",
    "note": "Ny-Hydroxyasparagine: A Multifunctional Unnatural Amino Acid That is a Good P1 Substrate of Asparaginyl Peptide Ligases"
  },
  {
    "id": "7FB8",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2022-05-18",
    "note": "De Novo-Designed and Disulfide-Bridged Peptide Heterodimer - hd1"
  },
  {
    "id": "7FBA",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2022-05-18",
    "note": "De Novo-Designed and Disulfide-Bridged Peptide Heterodimer - hd2"
  },
  {
    "id": "7FBP",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.99 \u00c5",
    "date": "2021-11-10",
    "note": "FXIIa-cMCoFx1 complex"
  },
  {
    "id": "7INS",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.00 \u00c5",
    "date": "1994-01-31",
    "note": "STRUCTURE OF PORCINE INSULIN COCRYSTALLIZED WITH CLUPEINE Z"
  },
  {
    "id": "7JIA",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2020-08-26",
    "note": "Structure of truncated zebrafish granulin AaE"
  },
  {
    "id": "7JIY",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2020-08-26",
    "note": "Structure of truncated zebrafish paragranulin"
  },
  {
    "id": "7JNN",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2020-09-09",
    "note": "NMR Solution Structure of plant defensin SlD26"
  },
  {
    "id": "7JP3",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.95 \u00c5",
    "date": "2021-10-27",
    "note": "Des-B29,B30-insulin"
  },
  {
    "id": "7JPM",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2021-09-08",
    "note": "The solution structure of omega-theraphotoxin-Pm1b isolated from King Baboon spider"
  },
  {
    "id": "7JQD",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.70 \u00c5",
    "date": "2021-03-24",
    "note": "Crystal Structure of PAC1r in complex with peptide antagonist"
  },
  {
    "id": "7JQR",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.07 \u00c5",
    "date": "2021-09-08",
    "note": "Abeta 16-36 beta-hairpin mimic with E22G Arctic mutation"
  },
  {
    "id": "7JQS",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.13 \u00c5",
    "date": "2021-09-08",
    "note": "Abeta 16-36 beta-hairpin mimic with E22delta Osaka mutation"
  },
  {
    "id": "7JQT",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.08 \u00c5",
    "date": "2021-09-08",
    "note": "Abeta 16-36 beta-hairpin mimic with E22K Italian mutation"
  },
  {
    "id": "7JQU",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.61 \u00c5",
    "date": "2021-09-08",
    "note": "Abeta 16-36 beta-hairpin mimic with E22G Arctic mutation"
  },
  {
    "id": "7JRH",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.32 \u00c5",
    "date": "2020-09-09",
    "note": "X-ray crystal structure of a cyclic peptide containing medin(19-25) and medin(31-37)"
  },
  {
    "id": "7JT2",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.50 \u00c5",
    "date": "2020-11-11",
    "note": "70S ribosome stalled on long mRNA with ArfB bound in the A site"
  },
  {
    "id": "7JXN",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.00 \u00c5",
    "date": "2020-12-09",
    "note": "Beta hairpin derived from Abeta17-36 with an F20Cha mutation"
  },
  {
    "id": "7JXO",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.81 \u00c5",
    "date": "2020-12-09",
    "note": "Triangular trimer of beta-hairpins derived from Abeta17-36 with an F20Cha mutation"
  },
  {
    "id": "7K1M",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2020-11-25",
    "note": "Peptide from stony coral Heliofungia actiniformis: Hact-1"
  },
  {
    "id": "7K48",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.60 \u00c5",
    "date": "2020-12-02",
    "note": "Structure of NavAb/Nav1.7-VS2A chimera trapped in the resting state by tarantula toxin m3-Huwentoxin-IV"
  },
  {
    "id": "7K7G",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "4.20 \u00c5",
    "date": "2021-03-31",
    "note": "nucleosome and Gal4 complex"
  },
  {
    "id": "7K7X",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2021-08-04",
    "note": "Solution structure of the cyclotide pase A"
  },
  {
    "id": "7KH0",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "2.80 \u00c5",
    "date": "2021-05-26",
    "note": "Cryo-EM structure of the human arginine vasopressin AVP-vasopressin receptor V2R-Gs signaling complex"
  },
  {
    "id": "7KNN",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2021-09-15",
    "note": "Solution structure of the alpha-conotoxin analogue [2-8]-alkyne Vc1.1"
  },
  {
    "id": "7KPD",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2021-02-24",
    "note": "NMR Solution Structure of Acyclotide ribe 31"
  },
  {
    "id": "7L2G",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2021-10-27",
    "note": "NMR solution structure of Nak1 from the Necator americanus hookworm"
  },
  {
    "id": "7L51",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2021-01-20",
    "note": "Solution NMR structure of the dimeric form of the cyclic plant protein PDP-23 in H2O"
  },
  {
    "id": "7L53",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2021-01-20",
    "note": "Solution NMR structure of the monomeric form of the cyclic plant protein PDP-23 in CD3CN/H2O"
  },
  {
    "id": "7L54",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2021-01-20",
    "note": "Solution NMR structure of the cyclic plant protein PDP-23 in SDS micelles"
  },
  {
    "id": "7L55",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2021-01-20",
    "note": "Solution NMR structure of the cyclic plant protein PDP-23 in DPC micelles"
  },
  {
    "id": "7L7A",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2021-01-13",
    "note": "Solution Structure of NuxVA"
  },
  {
    "id": "7L96",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2023-08-09",
    "note": "Connecting hydrophobic surfaces in cyclic peptides increases membrane permeability"
  },
  {
    "id": "7L98",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2021-09-08",
    "note": "Connecting hydrophobic surfaces in cyclic peptides increases membrane permeability"
  },
  {
    "id": "7L9D",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2021-09-08",
    "note": "Connecting hydrophobic surfaces in cyclic peptides increases membrane permeability"
  },
  {
    "id": "7LEN",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.90 \u00c5",
    "date": "2021-11-17",
    "note": "Crystal structure of the epidermal growth factor receptor extracellular region with R84K mutation in complex with epiregulin crystallized with trehalose"
  },
  {
    "id": "7LFR",
    "method": "X-RAY DIFFRACTION",
    "resolution": "3.20 \u00c5",
    "date": "2021-11-17",
    "note": "Crystal structure of the epidermal growth factor receptor extracellular region with R84K mutation in complex with epiregulin crystallized with spermine"
  },
  {
    "id": "7LFS",
    "method": "X-RAY DIFFRACTION",
    "resolution": "3.50 \u00c5",
    "date": "2021-11-17",
    "note": "Crystal structure of the epidermal growth factor receptor extracellular region with A265V mutation in complex with epiregulin"
  },
  {
    "id": "7LGL",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2021-12-29",
    "note": "Structural characterization of two b-KTx scorpion toxins. One of them blocks human KCNQ1 potassium channels"
  },
  {
    "id": "7LGV",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2022-02-09",
    "note": "NMR structure of Beta-KTx14.3"
  },
  {
    "id": "7LHC",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2021-10-20",
    "note": "NMR Solution Structure of [T20K]kalata B1"
  },
  {
    "id": "7LIB",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.10 \u00c5",
    "date": "2021-08-11",
    "note": "X-ray crystal structure of a cyclic peptide containing beta-2-microglobulin (63-69) and a gamma-methylornithine turn unit"
  },
  {
    "id": "7LL7",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2021-08-04",
    "note": "[2]Catenane From MccJ25 Variant G12C G21C"
  },
  {
    "id": "7LNS",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2022-03-30",
    "note": "NMR solution structure of PsDef2 defensin from P. sylvestris"
  },
  {
    "id": "7LOK",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.90 \u00c5",
    "date": "2021-04-14",
    "note": "Structure of CD4 mimetic M48U1 in complex with BG505 SOSIP.664 HIV-1 Env trimer and 17b Fab"
  },
  {
    "id": "7LQR",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2021-04-21",
    "note": "Structure of conotoxin CIC"
  },
  {
    "id": "7LQS",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2021-04-21",
    "note": "Structure of truncated conotoxin CIC"
  },
  {
    "id": "7LRW",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2022-08-03",
    "note": "Structure of Hact-2"
  },
  {
    "id": "7LUR",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.95 \u00c5",
    "date": "2021-09-15",
    "note": "Stable Effector Functionless 2 (SEFL2) IgG1 Fc Scaffold Bound to a Minimized Version of the B-domain (Mini-Z) from Protein A Called Z34C"
  },
  {
    "id": "7LV0",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.20 \u00c5",
    "date": "2021-07-28",
    "note": "Pre-translocation rotated ribosome +1-frameshifting(CCC-A) complex (Structure Irot-FS)"
  },
  {
    "id": "7LVE",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2022-02-02",
    "note": "Jug r 2 Leader Sequence Residues 117-161"
  },
  {
    "id": "7LVG",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2022-02-02",
    "note": "Jug r 2 Leader Sequence Residues 69-111"
  },
  {
    "id": "7LVN",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2022-03-02",
    "note": "Solution structure of tarantula toxin omega-Avsp1a"
  },
  {
    "id": "7LX4",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2022-08-03",
    "note": "Structure of Hact-SCRiP1"
  },
  {
    "id": "7LZL",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2021-08-11",
    "note": "Solution NMR structure of an avian defensin, AvBD3, from mallard"
  },
  {
    "id": "7M1D",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2022-01-19",
    "note": "Structural and functional studies about scorpine showed the presence of blocking channel and cytolytic activities as well as two different structural domains"
  },
  {
    "id": "7M25",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2021-03-24",
    "note": "Solution NMR Structure of PawL-Derived Peptide PLP-13"
  },
  {
    "id": "7M27",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2021-03-24",
    "note": "Solution NMR Structure of PawL-Derived Peptide PLP-16"
  },
  {
    "id": "7M28",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2021-03-24",
    "note": "Solution NMR Structure of PawL-Derived Peptide PLP-22"
  },
  {
    "id": "7M29",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2021-03-24",
    "note": "Solution NMR Structure of PawL-Derived Peptide PLP-29"
  },
  {
    "id": "7M2A",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2021-03-24",
    "note": "Solution NMR Structure of PawL-Derived Peptide PLP-38"
  },
  {
    "id": "7M2B",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2021-03-24",
    "note": "Solution NMR Structure of PawL-Derived Peptide PLP-42"
  },
  {
    "id": "7M2C",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2021-03-24",
    "note": "Solution NMR Structure of PawL-Derived Peptide PLP-46"
  },
  {
    "id": "7M3U",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2021-03-31",
    "note": "Solution NMR Structure of PawS-Derived Peptide PDP-24"
  },
  {
    "id": "7M7X",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2022-02-09",
    "note": "NMR Solution Structure of a CsrA-binding peptide"
  },
  {
    "id": "7MD4",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "4.50 \u00c5",
    "date": "2022-02-23",
    "note": "Insulin receptor ectodomain dimer complexed with two IRPA-3 partial agonists"
  },
  {
    "id": "7MD5",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "5.20 \u00c5",
    "date": "2022-02-23",
    "note": "Insulin receptor ectodomain dimer complexed with two IRPA-9 partial agonists"
  },
  {
    "id": "7MIX",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.00 \u00c5",
    "date": "2021-07-07",
    "note": "Human N-type voltage-gated calcium channel Cav2.2 in the presence of ziconotide at 3.0 Angstrom resolution"
  },
  {
    "id": "7MJ3",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2022-08-03",
    "note": "Structure of Hact-4"
  },
  {
    "id": "7MLA",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2022-05-04",
    "note": "Solution NMR structure of HDMX in complex with Zn and MCo-52-2"
  },
  {
    "id": "7MMY",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.46 \u00c5",
    "date": "2021-05-12",
    "note": "Racemic structure of the cyclic plant peptide PDP-23"
  },
  {
    "id": "7MP3",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.55 \u00c5",
    "date": "2022-02-02",
    "note": "Grb7-SH2 domain in complex with bicyclic peptide B8"
  },
  {
    "id": "7MQO",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.40 \u00c5",
    "date": "2022-03-16",
    "note": "The insulin receptor ectodomain in complex with a venom hybrid insulin analog - \"head\" region"
  },
  {
    "id": "7MQR",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "4.10 \u00c5",
    "date": "2022-03-16",
    "note": "The insulin receptor ectodomain in complex with four venom hybrid insulins - symmetric conformation"
  },
  {
    "id": "7MQS",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "4.40 \u00c5",
    "date": "2022-03-16",
    "note": "The insulin receptor ectodomain in complex with three venom hybrid insulin molecules - asymmetric conformation"
  },
  {
    "id": "7MY8",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2021-08-18",
    "note": "Fusion Peptide of SARS-CoV-2 Spike Rearranges into a Wedge Inserted in Bilayered Micelles"
  },
  {
    "id": "7N0T",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2021-11-10",
    "note": "NMR structure of EpI[Y(SO)315Y]-OH"
  },
  {
    "id": "7N0W",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.46 \u00c5",
    "date": "2021-11-17",
    "note": "Rigidity of loop 1 contributes to equipotency of globular and ribbon isomers of alpha-conotoxin AusIA"
  },
  {
    "id": "7N0Y",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.58 \u00c5",
    "date": "2021-11-17",
    "note": "Rigidity of loop 1 contributes to equipotency of globular and ribbon isomers of alpha-conotoxin AusIA"
  },
  {
    "id": "7N1H",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "4.30 \u00c5",
    "date": "2021-10-13",
    "note": "CryoEM structure of Venezuelan equine encephalitis virus VLP in complex with the LDLRAD3 receptor"
  },
  {
    "id": "7N1Z",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2021-11-17",
    "note": "NMR structure of native PnIA"
  },
  {
    "id": "7N20",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2021-11-17",
    "note": "NMR structure of native AnIB"
  },
  {
    "id": "7N21",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2021-11-17",
    "note": "NMR structure of AnIB-OH"
  },
  {
    "id": "7N22",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2021-11-17",
    "note": "NMR structure of AnIB[Y(SO3)16Y]-NH2"
  },
  {
    "id": "7N23",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2021-11-10",
    "note": "NMR structure of AnIB[Y(SO3)16Y]-OH"
  },
  {
    "id": "7N24",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2021-11-17",
    "note": "NMR structure of native EpI"
  },
  {
    "id": "7N25",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2021-11-17",
    "note": "NMR structure of EpI-OH"
  },
  {
    "id": "7N26",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2021-11-17",
    "note": "NMR structure of EpI-[Y(SO3)15Y]-NH2"
  },
  {
    "id": "7N31",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "2.69 \u00c5",
    "date": "2021-07-14",
    "note": "Elongating 70S ribosome complex in a post-translocation (POST) conformation"
  },
  {
    "id": "7N43",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.47 \u00c5",
    "date": "2021-12-01",
    "note": "Alpha-conotoxin OmIA with unusual pharmacological properties at alpha7 nicotinic receptors"
  },
  {
    "id": "7N8Q",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.90 \u00c5",
    "date": "2022-04-06",
    "note": "Rhesusized RV305 DH677.3 Fab bound to Clade A/E 93TH057 HIV-1 gp120 core."
  },
  {
    "id": "7NAM",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.60 \u00c5",
    "date": "2022-06-29",
    "note": "LRP6_E1 in complex with Lr-EET-3.5"
  },
  {
    "id": "7NHU",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.40 \u00c5",
    "date": "2021-06-16",
    "note": "Crystal structure of desB30 insulin produced by cell free protein synthesis"
  },
  {
    "id": "7NSO",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "2.90 \u00c5",
    "date": "2021-07-14",
    "note": "Structure of ErmDL-Erythromycin-stalled 70S E. coli ribosomal complex with P-tRNA"
  },
  {
    "id": "7NSP",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.50 \u00c5",
    "date": "2021-08-11",
    "note": "Structure of ErmDL-Erythromycin-stalled 70S E. coli ribosomal complex with A and P-tRNA"
  },
  {
    "id": "7NSQ",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.10 \u00c5",
    "date": "2021-07-14",
    "note": "Structure of ErmDL-Telithromycin-stalled 70S E. coli ribosomal complex with A and P-tRNA"
  },
  {
    "id": "7O55",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.95 \u00c5",
    "date": "2022-04-06",
    "note": "Crystal Structure of Unlinked NS2B-NS3 Protease from Zika Virus in Complex with Inhibitor MI-2231"
  },
  {
    "id": "7O76",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.13 \u00c5",
    "date": "2022-06-29",
    "note": "Reversible supramolecular assembly of the anti-microbial peptide plectasin"
  },
  {
    "id": "7OAE",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "2.00 \u00c5",
    "date": "2022-04-27",
    "note": "Cryo-EM structure of the plectasin fibril (double strands)"
  },
  {
    "id": "7OAG",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.40 \u00c5",
    "date": "2022-04-27",
    "note": "Cryo-EM structure of the plectasin fibril (single strand)"
  },
  {
    "id": "7OBV",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.30 \u00c5",
    "date": "2022-04-06",
    "note": "Crystal Structure of Unlinked NS2B-NS3 Protease from Zika Virus in Complex with Inhibitor MI-2248"
  },
  {
    "id": "7OC2",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.50 \u00c5",
    "date": "2022-04-06",
    "note": "Crystal Structure of Unlinked NS2B-NS3 Protease from Zika Virus in Complex with Inhibitor MI-2295"
  },
  {
    "id": "7OD2",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2022-04-06",
    "note": "NMR structure of the Anemonia erythraea AeTX-K toxin"
  },
  {
    "id": "7OFG",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2021-10-13",
    "note": "Oxytocin NMR solution structure"
  },
  {
    "id": "7OP0",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.57 \u00c5",
    "date": "2022-04-06",
    "note": "Crystal structure of complement C5 in complex with chemically synthesized K92 knob domain."
  },
  {
    "id": "7OSC",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2021-09-15",
    "note": "Solution structure of antimicrobial peptide cathelicidin-1 PcDode from sperm whale Physeter catodon"
  },
  {
    "id": "7OTD",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2021-10-13",
    "note": "Oxytocin NMR solution structure"
  },
  {
    "id": "7OUI",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "2.79 \u00c5",
    "date": "2021-08-18",
    "note": "Structure of C2S2M2-type Photosystem supercomplex from Arabidopsis thaliana (digitonin-extracted)"
  },
  {
    "id": "7OXF",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2022-07-13",
    "note": "Solution structure of bee apamin"
  },
  {
    "id": "7P1G",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.20 \u00c5",
    "date": "2021-11-17",
    "note": "Structure of the P. aeruginosa ExoY-F-actin complex"
  },
  {
    "id": "7P48",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "2.90 \u00c5",
    "date": "2022-02-02",
    "note": "Staphylococcus aureus ribosome in complex with Sal(B)"
  },
  {
    "id": "7P4X",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2021-12-01",
    "note": "SOLUTION NMR STRUCTURE OF PALUSTRIN-CA IN 50% TRIFLUOROETHANOL"
  },
  {
    "id": "7PCJ",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.91 \u00c5",
    "date": "2022-07-13",
    "note": "X-ray structure of CypA-C52AK125C/CsA/aromatic foldamer complex"
  },
  {
    "id": "7PDZ",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.80 \u00c5",
    "date": "2021-09-01",
    "note": "Structure of capping protein bound to the barbed end of a cytoplasmic actin filament"
  },
  {
    "id": "7PFQ",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.45 \u00c5",
    "date": "2022-08-24",
    "note": "Crystal Structure of Unlinked NS2B-NS3 Protease from Zika Virus in Complex with Inhibitor MI-2247"
  },
  {
    "id": "7PFY",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.38 \u00c5",
    "date": "2022-08-24",
    "note": "Crystal Structure of Unlinked NS2B-NS3 Protease from Zika Virus in Complex with Inhibitor MI-2241"
  },
  {
    "id": "7PFZ",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.45 \u00c5",
    "date": "2022-09-14",
    "note": "Crystal Structure of Unlinked NS2B-NS3 Protease from Zika Virus in Complex with Inhibitor MI-2267"
  },
  {
    "id": "7PG0",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "7.60 \u00c5",
    "date": "2022-02-02",
    "note": "Low resolution Cryo-EM structure of full-length insulin receptor bound to 3 insulin with visible ddm micelle, conf 1"
  },
  {
    "id": "7PG1",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.95 \u00c5",
    "date": "2022-08-24",
    "note": "Crystal Structure of Unlinked NS2B-NS3 Protease from Zika Virus in Complex with Inhibitor MI-2221"
  },
  {
    "id": "7PG2",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "6.70 \u00c5",
    "date": "2022-02-02",
    "note": "Low resolution Cryo-EM structure of full-length insulin receptor bound to 3 insulin, conf 1"
  },
  {
    "id": "7PG3",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "7.30 \u00c5",
    "date": "2022-02-02",
    "note": "Low resolution Cryo-EM structure of the full-length insulin receptor bound to 3 insulin, conf 2"
  },
  {
    "id": "7PG4",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "9.10 \u00c5",
    "date": "2022-02-02",
    "note": "Low resolution Cryo-EM structure of the full-length insulin receptor bound to 2 insulin, conf 3"
  },
  {
    "id": "7PGC",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.55 \u00c5",
    "date": "2022-08-24",
    "note": "Crystal Structure of Unlinked NS2B-NS3 Protease from Zika Virus in Complex with Inhibitor MI-2191"
  },
  {
    "id": "7PIU",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "2.58 \u00c5",
    "date": "2021-11-17",
    "note": "Cryo-EM structure of the agonist setmelanotide bound to the active melanocortin-4 receptor (MC4R) in complex with the heterotrimeric Gs protein at 2.6 A resolution."
  },
  {
    "id": "7PJU",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "9.50 \u00c5",
    "date": "2021-11-17",
    "note": "Structure of the 70S ribosome with tRNAs in hybrid state 2 (H2)"
  },
  {
    "id": "7PJW",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "4.00 \u00c5",
    "date": "2021-10-20",
    "note": "Structure of the 70S-EF-G-GDP-Pi ribosome complex with tRNAs in hybrid state 2 (H2-EF-G-GDP-Pi)"
  },
  {
    "id": "7PJX",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "6.50 \u00c5",
    "date": "2021-10-20",
    "note": "Structure of the 70S-EF-G-GDP ribosome complex with tRNAs in hybrid state 1 (H1-EF-G-GDP)"
  },
  {
    "id": "7PJZ",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "6.00 \u00c5",
    "date": "2021-10-20",
    "note": "Structure of the 70S-EF-G-GDP ribosome complex with tRNAs in chimeric state 2 (CHI2-EF-G-GDP)"
  },
  {
    "id": "7PLP",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.40 \u00c5",
    "date": "2022-02-02",
    "note": "Human Teneurin-4 C-rich domain"
  },
  {
    "id": "7PLT",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.30 \u00c5",
    "date": "2021-12-22",
    "note": "Cryo-EM structure of the actomyosin-V complex in the rigor state (central 1er)"
  },
  {
    "id": "7PLU",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.20 \u00c5",
    "date": "2021-12-22",
    "note": "Cryo-EM structure of the actomyosin-V complex in the rigor state (central 3er/2er)"
  },
  {
    "id": "7PLV",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.50 \u00c5",
    "date": "2021-12-22",
    "note": "Cryo-EM structure of the actomyosin-V complex in the rigor state (central 1er, class 1)"
  },
  {
    "id": "7PLW",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.50 \u00c5",
    "date": "2021-12-22",
    "note": "Cryo-EM structure of the actomyosin-V complex in the rigor state (central 1er, class 2)"
  },
  {
    "id": "7PLX",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.60 \u00c5",
    "date": "2021-12-22",
    "note": "Cryo-EM structure of the actomyosin-V complex in the rigor state (central 1er, class 4)"
  },
  {
    "id": "7PM5",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.10 \u00c5",
    "date": "2021-12-22",
    "note": "Cryo-EM structure of the actomyosin-V complex in the strong-ADP state (central 1er)"
  },
  {
    "id": "7PM6",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.00 \u00c5",
    "date": "2021-12-22",
    "note": "Cryo-EM structure of the actomyosin-V complex in the strong-ADP state (central 3er/2er)"
  },
  {
    "id": "7PM7",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.50 \u00c5",
    "date": "2021-12-22",
    "note": "Cryo-EM structure of the actomyosin-V complex in the strong-ADP state (central 1er, class 2)"
  },
  {
    "id": "7PM8",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.50 \u00c5",
    "date": "2021-12-22",
    "note": "Cryo-EM structure of the actomyosin-V complex in the strong-ADP state (central 1er, class 3)"
  },
  {
    "id": "7PM9",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.70 \u00c5",
    "date": "2021-12-22",
    "note": "Cryo-EM structure of the actomyosin-V complex in the strong-ADP state (central 1er, class 4)"
  },
  {
    "id": "7PMA",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.60 \u00c5",
    "date": "2021-12-22",
    "note": "Cryo-EM structure of the actomyosin-V complex in the strong-ADP state (central 1er, class 5)"
  },
  {
    "id": "7PMB",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.60 \u00c5",
    "date": "2021-12-22",
    "note": "Cryo-EM structure of the actomyosin-V complex in the strong-ADP state (central 1er, class 6)"
  },
  {
    "id": "7PMC",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.70 \u00c5",
    "date": "2021-12-22",
    "note": "Cryo-EM structure of the actomyosin-V complex in the strong-ADP state (central 1er, class 7)"
  },
  {
    "id": "7PMD",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "2.90 \u00c5",
    "date": "2021-12-22",
    "note": "Cryo-EM structure of the actomyosin-V complex in the post-rigor transition state (AppNHp, central 1er)"
  },
  {
    "id": "7PME",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "2.90 \u00c5",
    "date": "2021-12-22",
    "note": "Cryo-EM structure of the actomyosin-V complex in the post-rigor transition state (AppNHp, central 3er/2er)"
  },
  {
    "id": "7PMF",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.40 \u00c5",
    "date": "2021-12-22",
    "note": "Cryo-EM structure of the actomyosin-V complex in the post-rigor transition state (AppNHp, central 1er, class 1)"
  },
  {
    "id": "7PMG",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.30 \u00c5",
    "date": "2021-12-22",
    "note": "Cryo-EM structure of the actomyosin-V complex in the post-rigor transition state (AppNHp, central 1er, class 3)"
  },
  {
    "id": "7PMH",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.40 \u00c5",
    "date": "2021-12-22",
    "note": "Cryo-EM structure of the actomyosin-V complex in the post-rigor transition state (AppNHp, central 1er, class 4)"
  },
  {
    "id": "7PMI",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.30 \u00c5",
    "date": "2021-12-22",
    "note": "Cryo-EM structure of the actomyosin-V complex in the post-rigor transition state (AppNHp, central 1er, class 5)"
  },
  {
    "id": "7PMJ",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.40 \u00c5",
    "date": "2021-12-22",
    "note": "Cryo-EM structure of the actomyosin-V complex in the post-rigor transition state (AppNHp, central 1er, class 6)"
  },
  {
    "id": "7PML",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.30 \u00c5",
    "date": "2021-12-22",
    "note": "Cryo-EM structure of the actomyosin-V complex in the post-rigor transition state (AppNHp, central 1er, class 8)"
  },
  {
    "id": "7PQW",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2022-09-28",
    "note": "NMR solution structure of BCR4"
  },
  {
    "id": "7PVB",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2021-12-01",
    "note": "Structure of Viscotoxin A3 from Viscum Album in the complex with DPC micelles"
  },
  {
    "id": "7Q5A",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "2.46 \u00c5",
    "date": "2022-04-06",
    "note": "Lanreotide nanotube"
  },
  {
    "id": "7Q5G",
    "method": "X-RAY DIFFRACTION",
    "resolution": "0.83 \u00c5",
    "date": "2022-02-02",
    "note": "LAN-DAP5 DERIVATIVE OF LANREOTIDE: L-DIAMINO PROPIONIC ACID IN POSITION 5 IN PLACE OF L-LYSINE"
  },
  {
    "id": "7QAC",
    "method": "POWDER DIFFRACTION",
    "resolution": "N/A",
    "date": "2023-06-21",
    "note": "The T2 structure of polycrystalline cubic human insulin"
  },
  {
    "id": "7QGF",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.20 \u00c5",
    "date": "2022-06-01",
    "note": "Cubic Insulin SAD phasing at 14.2 keV"
  },
  {
    "id": "7QID",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "5.00 \u00c5",
    "date": "2022-02-02",
    "note": "tentative model of the human insulin receptor ectodomain bound by three insulin"
  },
  {
    "id": "7QLF",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2022-06-08",
    "note": "Conformational ensemble of solnatide in solution"
  },
  {
    "id": "7QS6",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2023-05-10",
    "note": "Solution structure of thanatin-like derivative 7 in complex with E.coli LptA"
  },
  {
    "id": "7QVM",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.25 \u00c5",
    "date": "2022-08-10",
    "note": "Human Oxytocin receptor (OTR) oxytocin Gq chimera (mGoqi) complex"
  },
  {
    "id": "7QXJ",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2022-09-21",
    "note": "Solution structure of Tk-hefu-11"
  },
  {
    "id": "7R0C",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "4.73 \u00c5",
    "date": "2022-09-14",
    "note": "Structure of the AVP-V2R-arrestin2-ScFv30 complex"
  },
  {
    "id": "7RAP",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2022-05-04",
    "note": "Heterogeneous-backbone proteomimetic analogue of the disulfide-rich venom peptide lasiocepsin"
  },
  {
    "id": "7RC7",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2021-08-11",
    "note": "Solution NMR Structure of [Ala19]Crp4"
  },
  {
    "id": "7RC8",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2021-08-11",
    "note": "Solution NMR Structure of [D-Ala19]Crp4"
  },
  {
    "id": "7RFA",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2021-10-20",
    "note": "NMR Solution structure of linear [T20K]kalataB1"
  },
  {
    "id": "7RIH",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.35 \u00c5",
    "date": "2021-09-22",
    "note": "hyen D"
  },
  {
    "id": "7RII",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.22 \u00c5",
    "date": "2021-09-29",
    "note": "[I11L]hyen D crystal structure"
  },
  {
    "id": "7RIJ",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.30 \u00c5",
    "date": "2021-09-22",
    "note": "[I11G]hyen D"
  },
  {
    "id": "7RJF",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.80 \u00c5",
    "date": "2021-10-27",
    "note": "MOPD-1 mutant-L47W"
  },
  {
    "id": "7RKD",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.25 \u00c5",
    "date": "2022-07-27",
    "note": "X-Ray structure of Insulin Analog GLULISINE"
  },
  {
    "id": "7RMQ",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.17 \u00c5",
    "date": "2021-09-22",
    "note": "Crystal structure of cycloviolacin O2"
  },
  {
    "id": "7RMR",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.04 \u00c5",
    "date": "2021-09-22",
    "note": "Crystal structure of [I11L]cycloviolacin O2"
  },
  {
    "id": "7RMS",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.10 \u00c5",
    "date": "2021-09-22",
    "note": "Crystal structure of [I11G]cycloviolacin O2"
  },
  {
    "id": "7RN3",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2022-03-02",
    "note": "hyen D solution structure"
  },
  {
    "id": "7RTZ",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.10 \u00c5",
    "date": "2022-08-31",
    "note": "X-ray crystallographic structure of a beta-hairpin peptide derived from amyloid beta 14-40"
  },
  {
    "id": "7RYC",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "2.90 \u00c5",
    "date": "2022-03-09",
    "note": "Oxytocin receptor (OTR) bound to oxytocin in complex with a heterotrimeric Gq protein"
  },
  {
    "id": "7RZF",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.40 \u00c5",
    "date": "2022-08-31",
    "note": "Insulin Degrading Enzyme O/pC"
  },
  {
    "id": "7RZI",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.00 \u00c5",
    "date": "2022-08-31",
    "note": "Insulin Degrading Enzyme pC/pC"
  },
  {
    "id": "7S4G",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.20 \u00c5",
    "date": "2022-04-13",
    "note": "Fab fragment bound to the Cter peptide of Ly6G6D"
  },
  {
    "id": "7S4Y",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.71 \u00c5",
    "date": "2021-10-27",
    "note": "Serial Macromolecular Crystallography at ALBA Synchrotron Light Source - Insulin"
  },
  {
    "id": "7S55",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2022-07-20",
    "note": "NMR Solution Structure of Cter 27"
  },
  {
    "id": "7S5G",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.04 \u00c5",
    "date": "2021-11-03",
    "note": "PCSK9 in complex with compound 19"
  },
  {
    "id": "7S5H",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.27 \u00c5",
    "date": "2021-11-03",
    "note": "PCSK9(deltaCRD) in complex with cyclic peptide 35"
  },
  {
    "id": "7S7P",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2022-07-27",
    "note": "NMR solution structure of a neurotoxic thionin from Urtica ferox"
  },
  {
    "id": "7SAG",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2022-01-12",
    "note": "Solution NMR structure of barrettide C"
  },
  {
    "id": "7SAO",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.77 \u00c5",
    "date": "2022-08-03",
    "note": "The CTI-homolog pacifastin"
  },
  {
    "id": "7SAP",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.79 \u00c5",
    "date": "2022-08-03",
    "note": "The CTI-homolog pacifastin"
  },
  {
    "id": "7SAV",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2022-05-25",
    "note": "Native mu-conotoxin KIIIA isomer"
  },
  {
    "id": "7SAW",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2022-05-25",
    "note": "Mu-conotoxin KIIIA isomer 2"
  },
  {
    "id": "7SGQ",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.09 \u00c5",
    "date": "2022-08-03",
    "note": "Protease inhibitors variant, CTI-homolog pacifastin"
  },
  {
    "id": "7SKC",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2022-02-02",
    "note": "Solution structure of spider toxin Ssp1a"
  },
  {
    "id": "7SKL",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.60 \u00c5",
    "date": "2022-01-26",
    "note": "Complex between S. aureus aureolysin and IMPI mutant I57I"
  },
  {
    "id": "7SKM",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.85 \u00c5",
    "date": "2022-01-26",
    "note": "Complex between S. aureus aureolysin and wt IMPI."
  },
  {
    "id": "7SL1",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.40 \u00c5",
    "date": "2022-03-30",
    "note": "Full-length insulin receptor bound with site 1 binding deficient mutant insulin (A-V3E)"
  },
  {
    "id": "7SL2",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.60 \u00c5",
    "date": "2022-03-30",
    "note": "Full-length insulin receptor bound with site 2 binding deficient mutant insulin (A-L13R) -- asymmetric conformation"
  },
  {
    "id": "7SL3",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.40 \u00c5",
    "date": "2022-03-30",
    "note": "Full-length insulin receptor bound with site 2 binding deficient mutant insulin (A-L13R) -- symmetric conformation"
  },
  {
    "id": "7SL4",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "5.00 \u00c5",
    "date": "2022-03-30",
    "note": "Full-length insulin receptor bound with site 2 binding deficient mutant insulin (B-L17R) -- asymmetric conformation"
  },
  {
    "id": "7SL6",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.70 \u00c5",
    "date": "2022-03-30",
    "note": "Full-length insulin receptor bound with site 2 binding deficient mutant insulin (B-L17R) -- symmetric conformation"
  },
  {
    "id": "7SL7",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.10 \u00c5",
    "date": "2022-03-30",
    "note": "Full-length insulin receptor bound with both site 1 binding deficient mutant insulin (A-V3E) and site 2 binding deficient mutant insulin (A-L13R)"
  },
  {
    "id": "7SLT",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.00 \u00c5",
    "date": "2022-08-03",
    "note": "Protease inhibitors variant, CTI-homolog pacifastin"
  },
  {
    "id": "7SMU",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.95 \u00c5",
    "date": "2022-04-13",
    "note": "Crystal Structure of Consomatin-Ro1 <structure_details=Consomatin-Ro1, a cone snail venom SSTL mimetic"
  },
  {
    "id": "7SNC",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.50 \u00c5",
    "date": "2022-08-03",
    "note": "Pacifastin related protease inhibitors"
  },
  {
    "id": "7SND",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.79 \u00c5",
    "date": "2022-08-03",
    "note": "Pacifastin related protease inhibitors"
  },
  {
    "id": "7SOH",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.81 \u00c5",
    "date": "2022-06-29",
    "note": "Exploring Cystine Dense Peptide Space to Open a Unique Molecular Toolbox"
  },
  {
    "id": "7SS9",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.90 \u00c5",
    "date": "2022-02-23",
    "note": "Late translocation intermediate with EF-G partially dissociated (Structure V)"
  },
  {
    "id": "7SSD",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.30 \u00c5",
    "date": "2022-02-23",
    "note": "Mid translocation intermediate with EF-G bound with GDP (Structure IV)"
  },
  {
    "id": "7SSL",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.80 \u00c5",
    "date": "2022-02-23",
    "note": "Pre translocation intermediate with EF-G bound to GDP and Pi (Structure III)"
  },
  {
    "id": "7SSN",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.20 \u00c5",
    "date": "2022-02-23",
    "note": "Pre translocation 70S ribosome with A/P* and P/E tRNA (Structure II-B)"
  },
  {
    "id": "7ST2",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "2.90 \u00c5",
    "date": "2022-02-23",
    "note": "Post translocation, non-rotated 70S ribosome with EF-G dissociated (Structure VII)"
  },
  {
    "id": "7ST7",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.20 \u00c5",
    "date": "2022-02-23",
    "note": "Pre translocation intermediate stalled with viomycin and bound with EF-G in a GDP and Pi state (Structure III-vio)"
  },
  {
    "id": "7SZ5",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.60 \u00c5",
    "date": "2021-12-22",
    "note": "Cryo-EM structure of the extracellular module of the full-length EGFR bound to TGF-alpha \"tips-separated\" conformation"
  },
  {
    "id": "7SZ7",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.40 \u00c5",
    "date": "2021-12-15",
    "note": "Cryo-EM structure of the extracellular module of the full-length EGFR bound to TGF-alpha. \"tips-juxtaposed\" conformation"
  },
  {
    "id": "7SZI",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "2.70 \u00c5",
    "date": "2022-06-08",
    "note": "Cryo-EM structure of OmpK36-TraN mating pair stabilization proteins from carbapenem-resistant Klebsiella pneumoniae"
  },
  {
    "id": "7T10",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "2.50 \u00c5",
    "date": "2022-03-09",
    "note": "CryoEM structure of somatostatin receptor 2 in complex with somatostatin-14 and Gi3"
  },
  {
    "id": "7T11",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "2.70 \u00c5",
    "date": "2022-03-09",
    "note": "CryoEM structure of somatostatin receptor 2 in complex with Octreotide and Gi3."
  },
  {
    "id": "7T8W",
    "method": "X-RAY DIFFRACTION",
    "resolution": "3.10 \u00c5",
    "date": "2022-02-09",
    "note": "Structure of antibody 3G12 bound to Respiratory Syncytial Virus G central conserved domain mutant S177Q"
  },
  {
    "id": "7T9Q",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.80 \u00c5",
    "date": "2023-01-18",
    "note": "Crystal structure of Crocodile defensin CpoBD13"
  },
  {
    "id": "7T9R",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.45 \u00c5",
    "date": "2023-01-18",
    "note": "Crystal structure of Crocodile defensin CpoBD13:phosphatidic acid complex"
  },
  {
    "id": "7TA3",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.50 \u00c5",
    "date": "2022-06-29",
    "note": "Trimer-to-Monomer Disruption of Tumor Necrosis Factor-alpha (TNF-alpha) by alpha-peptide-3"
  },
  {
    "id": "7TA6",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.67 \u00c5",
    "date": "2022-06-29",
    "note": "Trimer-to-Monomer Disruption of Tumor Necrosis Factor-alpha (TNF-alpha) by unnatural alpha/beta-peptide-1"
  },
  {
    "id": "7TH8",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2022-02-02",
    "note": "Chickpea (Cicer arientinum) nodule-specific cysteine-rich peptide NCR13: Solution NMR structure of the isomer with C4:C10, C15:C30, and C23:C28 disulfide bonds"
  },
  {
    "id": "7TL8",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.95 \u00c5",
    "date": "2022-08-10",
    "note": "1.95A resolution structure of independent phosphoglycerate mutase from S. aureus in complex with a macrocyclic peptide inhibitor (Sa-D3)"
  },
  {
    "id": "7TM1",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.10 \u00c5",
    "date": "2022-04-20",
    "note": "Porous framework formed by assembly of a bipyridyl-conjugated helical peptide"
  },
  {
    "id": "7TPT",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.90 \u00c5",
    "date": "2022-05-25",
    "note": "Single-particle Cryo-EM structure of Arp2/3 complex at branched-actin junction."
  },
  {
    "id": "7TTU",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.00 \u00c5",
    "date": "2022-07-06",
    "note": "50S ribosomal subunit from Staphylococcus aureus (Strain ATCC43300)"
  },
  {
    "id": "7TTW",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "2.90 \u00c5",
    "date": "2022-07-06",
    "note": "50S ribosomal subunit from Staphylococcus aureus containing double mutation in uL3 imparting linezolid resistance"
  },
  {
    "id": "7TV5",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2022-05-04",
    "note": "Disulfide-rich venom peptide lasiocepsin: P20A mutant"
  },
  {
    "id": "7TV6",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2022-05-04",
    "note": "Heterogeneous-backbone proteomimetic analogue of the disulfide-rich venom peptide lasiocepsin: native loop"
  },
  {
    "id": "7TV7",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2022-05-04",
    "note": "Heterogeneous-backbone proteomimetic analogue of the disulfide-rich venom peptide lasiocepsin: beta-3-Lys modified loop"
  },
  {
    "id": "7TV8",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2022-05-04",
    "note": "Heterogeneous-backbone proteomimetic analogue of the disulfide-rich venom peptide lasiocepsin: D-Ala modified loop"
  },
  {
    "id": "7TVQ",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2023-01-25",
    "note": "Structure of the globular isoform of the novel conotoxin PnID derived from Conus pennaceus"
  },
  {
    "id": "7TVR",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2023-01-25",
    "note": "Structure of the ribbon isoform of the novel conotoxin PnID derived from Conus pennaceus"
  },
  {
    "id": "7TXF",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.47 \u00c5",
    "date": "2023-04-12",
    "note": "The allosteric binding mode of alphaD-conotoxin VxXXB"
  },
  {
    "id": "7TYF",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "2.20 \u00c5",
    "date": "2022-03-23",
    "note": "Human Amylin1 Receptor in complex with Gs and rat amylin peptide"
  },
  {
    "id": "7TYH",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.30 \u00c5",
    "date": "2022-03-23",
    "note": "Human Amylin2 Receptor in complex with Gs and human calcitonin peptide"
  },
  {
    "id": "7TYI",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.30 \u00c5",
    "date": "2022-03-30",
    "note": "Calcitonin Receptor in complex with Gs and rat amylin peptide, CT-like state"
  },
  {
    "id": "7TYL",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.30 \u00c5",
    "date": "2022-03-23",
    "note": "Calcitonin Receptor in complex with Gs and rat amylin peptide, bypass motif"
  },
  {
    "id": "7TYN",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "2.60 \u00c5",
    "date": "2022-03-30",
    "note": "Calcitonin Receptor in complex with Gs and salmon calcitonin peptide"
  },
  {
    "id": "7TYO",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "2.70 \u00c5",
    "date": "2022-03-23",
    "note": "Calcitonin receptor in complex with Gs and human calcitonin peptide"
  },
  {
    "id": "7TYW",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.00 \u00c5",
    "date": "2022-03-23",
    "note": "Human Amylin1 Receptor in complex with Gs and salmon calcitonin peptide"
  },
  {
    "id": "7TYX",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "2.55 \u00c5",
    "date": "2022-03-30",
    "note": "Human Amylin2 Receptor in complex with Gs and rat amylin peptide"
  },
  {
    "id": "7TYY",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.00 \u00c5",
    "date": "2022-03-23",
    "note": "Human Amylin2 Receptor in complex with Gs and salmon calcitonin peptide"
  },
  {
    "id": "7TZ3",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2023-03-01",
    "note": "Iturin from Bacillus subtilis ATCC 19659"
  },
  {
    "id": "7TZF",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "2.40 \u00c5",
    "date": "2022-03-23",
    "note": "Human Amylin3 Receptor in complex with Gs and rat amylin peptide"
  },
  {
    "id": "7U4P",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.80 \u00c5",
    "date": "2023-03-15",
    "note": "Covalently stabilized triangular trimer composed of Abeta17-36 beta-hairpins"
  },
  {
    "id": "7U60",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.55 \u00c5",
    "date": "2022-08-17",
    "note": "Integrin alpha IIB beta3 complex with cRGDfV"
  },
  {
    "id": "7U6D",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "5.03 \u00c5",
    "date": "2022-10-05",
    "note": "Head region of insulin receptor ectodomain (A-isoform) bound to the non-insulin agonist IM459"
  },
  {
    "id": "7U6E",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.00 \u00c5",
    "date": "2022-10-05",
    "note": "Head region of insulin receptor ectodomain (A-isoform) bound to the non-insulin agonist IM462"
  },
  {
    "id": "7U9K",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.00 \u00c5",
    "date": "2023-03-15",
    "note": "Staphylococcus aureus D-alanine-D-alanine ligase in complex with ATP, D-ala-D-ala, Mg2+ and K+"
  },
  {
    "id": "7UBC",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2022-09-14",
    "note": "Solution NMR structure of 9-residue Rosetta-designed cyclic peptide D9.16 in d6-DMSO with cis/trans switching"
  },
  {
    "id": "7UBD",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2022-09-14",
    "note": "Solution NMR structure of 8-residue Rosetta-designed cyclic peptide D8.31 in d6-DMSO with cis/trans switching (A-CC conformation)"
  },
  {
    "id": "7UBE",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2022-09-14",
    "note": "Solution NMR structure of 8-residue Rosetta-designed cyclic peptide D8.21 in d6-DMSO with cis/trans switching"
  },
  {
    "id": "7UBF",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2022-09-14",
    "note": "Solution NMR structure of 8-residue Rosetta-designed cyclic peptide D8.21 in 50% d6-DMSO and 50% water with cis/trans switching (CC conformation, 50%)"
  },
  {
    "id": "7UBG",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2022-09-14",
    "note": "Solution NMR structure of 9-residue Rosetta-designed cyclic peptide D9.16 in CDCl3 with cis/trans switching (A-TT conformation)"
  },
  {
    "id": "7UBH",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2022-09-14",
    "note": "Solution NMR structure of 8-residue Rosetta-designed cyclic peptide D8.31 in CDCl3 with cis/trans switching"
  },
  {
    "id": "7UBI",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2022-09-14",
    "note": "Solution NMR structure of 8-residue Rosetta-designed cyclic peptide D8.21 in CDCl3 with cis/trans switching (TT conformation, 47%)"
  },
  {
    "id": "7UCP",
    "method": "X-RAY DIFFRACTION",
    "resolution": "0.85 \u00c5",
    "date": "2022-09-14",
    "note": "computationally designed macrocycle"
  },
  {
    "id": "7UCX",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.72 \u00c5",
    "date": "2023-01-18",
    "note": "LRP8 11H1 Fab complexed to a cyclized CR1 peptide"
  },
  {
    "id": "7UG7",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "2.58 \u00c5",
    "date": "2022-05-18",
    "note": "70S ribosome complex in an intermediate state of translocation bound to EF-G(GDP) stalled by Argyrin B"
  },
  {
    "id": "7UNX",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2023-04-19",
    "note": "NMR solution structure of xanthusin-1"
  },
  {
    "id": "7URD",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "2.92 \u00c5",
    "date": "2022-07-20",
    "note": "Human PORCN in complex with LGK974 and WNT3A peptide"
  },
  {
    "id": "7URE",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.19 \u00c5",
    "date": "2022-07-20",
    "note": "Human PORCN in complex with palmitoleoylated WNT3A peptide"
  },
  {
    "id": "7UV3",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2023-04-05",
    "note": "Pis v 3.0101 Vicilin Leader Sequence Residues 5-52"
  },
  {
    "id": "7UZL",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2022-09-14",
    "note": "Solution NMR structure of 9-residue Rosetta-designed cyclic peptide D9.16 in CDCl3 with cis/trans switching (B-TC conformation)"
  },
  {
    "id": "7V3P",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.60 \u00c5",
    "date": "2022-08-17",
    "note": "Cryo-EM structure of the IGF1R/insulin complex"
  },
  {
    "id": "7V5E",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2022-08-24",
    "note": "Hyperdisulfide peptide from Schisandra chinensis"
  },
  {
    "id": "7V5F",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2022-08-24",
    "note": "Solution structure of a Cysteine rich peptide from Withania somnifera (Indian ginseng)"
  },
  {
    "id": "7VFU",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.00 \u00c5",
    "date": "2021-11-03",
    "note": "Human N-type voltage gated calcium channel CaV2.2-alpha2/delta1-beta1 complex, bound to ziconotide"
  },
  {
    "id": "7VLY",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "2.45 \u00c5",
    "date": "2021-12-01",
    "note": "Cryo-EM structure of Listeria monocytogenes man-PTS complexed with pediocin PA-1"
  },
  {
    "id": "7VU9",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.15 \u00c5",
    "date": "2022-10-12",
    "note": "Pholiota squarrosa lectin (PhoSL) in complex with fucose(alpha1-6)[GlcNAc(beta1-4)]GlcNAc"
  },
  {
    "id": "7W8K",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2022-06-08",
    "note": "Solution structures of a disulfide-rich peptide that can bind mdm2"
  },
  {
    "id": "7W8O",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2022-06-08",
    "note": "Solution structures of a disulfide-rich peptide that can bind mdm2"
  },
  {
    "id": "7W8R",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2022-06-08",
    "note": "Solution structures of a disulfide-rich peptide that can bind mdm2"
  },
  {
    "id": "7W8T",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2022-06-08",
    "note": "Solution structures of a disulfide-rich peptide that can bind KEAP1"
  },
  {
    "id": "7W8Z",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2022-06-08",
    "note": "Solution structures of a disulfide-rich peptide designed through sequence grafting"
  },
  {
    "id": "7W96",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2022-11-09",
    "note": "Solution structures of a disulfide-rich peptide that can bind KEAP1"
  },
  {
    "id": "7WE3",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2022-11-09",
    "note": "Solution structures of a disulfide-rich peptide that can bind CD28"
  },
  {
    "id": "7WEI",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2022-11-09",
    "note": "Solution structures of a disulfide-rich peptide that can bind CD28"
  },
  {
    "id": "7WIC",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "2.80 \u00c5",
    "date": "2022-06-01",
    "note": "Cryo-EM structure of the SS-14-bound human SSTR2-Gi1 complex"
  },
  {
    "id": "7WJ5",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.72 \u00c5",
    "date": "2022-07-13",
    "note": "Cryo-EM structure of human somatostatin receptor 2 complex with its agonist somatostatin delineates the ligand binding specificity"
  },
  {
    "id": "7X41",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.15 \u00c5",
    "date": "2023-03-08",
    "note": "Crystal structure of chlorotoxin, a glioma specific scorpion toxin"
  },
  {
    "id": "7X43",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.04 \u00c5",
    "date": "2023-03-08",
    "note": "Crystal structure of chlorotoxin mutant - M1R"
  },
  {
    "id": "7X44",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.04 \u00c5",
    "date": "2023-03-08",
    "note": "Crystal structure of chlorotoxin mutant - Q11N"
  },
  {
    "id": "7X4D",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.55 \u00c5",
    "date": "2023-03-08",
    "note": "Crystal structure of chlorotoxin mutant - Y29K"
  },
  {
    "id": "7X6R",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.89 \u00c5",
    "date": "2022-12-14",
    "note": "Crystal structure of actinomycin D-echinomycin-d(AGCACGT/ACGGGCT) complex"
  },
  {
    "id": "7X97",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.95 \u00c5",
    "date": "2022-12-14",
    "note": "Crystal structure of actinomycin D-echinomycin-d(AGCCCGT/ACGGGCT) complex"
  },
  {
    "id": "7X9F",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.96 \u00c5",
    "date": "2022-12-14",
    "note": "Crystal structure of actinomycin D-echinomycin-d(AGCGCGT/ACGCGCT) complex"
  },
  {
    "id": "7XAT",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "2.85 \u00c5",
    "date": "2022-08-31",
    "note": "Structure of somatostatin receptor 2 bound with SST14."
  },
  {
    "id": "7XAU",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "2.97 \u00c5",
    "date": "2022-08-31",
    "note": "Structure of somatostatin receptor 2 bound with octreotide."
  },
  {
    "id": "7XAV",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "2.87 \u00c5",
    "date": "2022-08-31",
    "note": "Structure of somatostatin receptor 2 bound with lanreotide."
  },
  {
    "id": "7XDJ",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.44 \u00c5",
    "date": "2022-12-14",
    "note": "Crystal structure of actinomycin D-echinomycin-d(AGCGCGT/ACGAGCT) complex"
  },
  {
    "id": "7XMR",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.10 \u00c5",
    "date": "2022-08-03",
    "note": "CryoEM structure of the somatostatin receptor 2 (SSTR2) in complex with Gi1 and its endogeneous peptide ligand SST-14"
  },
  {
    "id": "7XMS",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "2.90 \u00c5",
    "date": "2022-08-03",
    "note": "CryoEM structure of somatostatin receptor 4 (SSTR4) in complex with Gi1 and its endogeneous ligand SST-14"
  },
  {
    "id": "7XNA",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.65 \u00c5",
    "date": "2022-08-03",
    "note": "Crystal structure of somatostatin receptor 2 (SSTR2) with peptide antagonist CYN 154806"
  },
  {
    "id": "7XNO",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "2.54 \u00c5",
    "date": "2022-05-25",
    "note": "Cryo-EM structure of the bacteriocin-receptor-immunity ternary complex from Lactobacillus sakei"
  },
  {
    "id": "7XTG",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "2.20 \u00c5",
    "date": "2023-06-07",
    "note": "Cryo-EM structure of Listeria monocytogenes man-PTS complexed with pediocin PA-1"
  },
  {
    "id": "7Y24",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.25 \u00c5",
    "date": "2022-10-19",
    "note": "Cryo-EM structure of the octreotide-bound SSTR2-miniGo-scFv16 complex"
  },
  {
    "id": "7Y26",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.30 \u00c5",
    "date": "2022-10-19",
    "note": "Cryo-EM structure of the octreotide-bound SSTR2-miniGq-scFv16 complex"
  },
  {
    "id": "7Y27",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.48 \u00c5",
    "date": "2022-10-19",
    "note": "Cryo-EM structure of the SST-14-bound SSTR2-miniGq-scFv16 complex"
  },
  {
    "id": "7YAE",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.37 \u00c5",
    "date": "2023-04-19",
    "note": "Octreotide-bound SSTR2-Gi complex"
  },
  {
    "id": "7YB8",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.98 \u00c5",
    "date": "2023-07-05",
    "note": "Aspartyl/Asparaginyl beta-hydroxylase (AspH) oxygenase and TPR domains in complex with D-2-hydroxyglutarate and factor X-derived peptide (39mer-4Ser)"
  },
  {
    "id": "7YB9",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.54 \u00c5",
    "date": "2023-07-05",
    "note": "Aspartyl/Asparaginyl beta-hydroxylase (AspH) oxygenase and TPR domains in complex with L-2-hydroxyglutarate and factor X-derived peptide (39mer-4Ser)"
  },
  {
    "id": "7YBB",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.68 \u00c5",
    "date": "2023-07-05",
    "note": "Aspartyl/Asparaginyl beta-hydroxylase (AspH) oxygenase and TPR domains in complex with D-4-hydroxy-2-oxoglutarate and factor X-derived peptide (39mer-4Ser)"
  },
  {
    "id": "7YBC",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.84 \u00c5",
    "date": "2023-07-05",
    "note": "Aspartyl/Asparaginyl beta-hydroxylase (AspH) oxygenase and TPR domains in complex with (S)-4-hydroxy-4-methyl-2-oxoglutarate and factor X-derived peptide (39mer-4Ser)"
  },
  {
    "id": "7YHF",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2023-07-19",
    "note": "Solution structure of S3C mutant of carbohydrate binding module (CBM) of the glycoside hydrolase Family 7 cellobiohydrolase from Trichoderma reesei"
  },
  {
    "id": "7YHG",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2023-07-19",
    "note": "Solution structure of S-mono-mannosylated S3C mutant of carbohydrate binding module (CBM) of the glycoside hydrolase Family 7 cellobiohydrolase from Trichoderma reesei"
  },
  {
    "id": "7YHH",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2023-07-19",
    "note": "Solution structure of S-di-mannosylated S3C mutant of carbohydrate binding module (CBM) of the glycoside hydrolase Family 7 cellobiohydrolase from Trichoderma reesei"
  },
  {
    "id": "7YHI",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2023-07-19",
    "note": "Solution structure of O-di-mannosylated carbohydrate binding module (CBM) of the glycoside hydrolase Family 7 cellobiohydrolase from Trichoderma reesei"
  },
  {
    "id": "7YJ4",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.19 \u00c5",
    "date": "2023-03-01",
    "note": "Cryo-EM structure of the INSL5-bound human relaxin family peptidereceptor 4 (RXFP4)-Gi complex"
  },
  {
    "id": "7YKW",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.60 \u00c5",
    "date": "2023-01-18",
    "note": "Structure of hIAPP fibril at 3.6 Angstroms resolution"
  },
  {
    "id": "7YL0",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.20 \u00c5",
    "date": "2022-12-28",
    "note": "Structure of hIAPP-TF-type2"
  },
  {
    "id": "7YL3",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.20 \u00c5",
    "date": "2022-12-28",
    "note": "Structure of hIAPP-TF-type1"
  },
  {
    "id": "7YL7",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.30 \u00c5",
    "date": "2022-12-28",
    "note": "Structure of hIAPP-TF-type3"
  },
  {
    "id": "7YOA",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.67 \u00c5",
    "date": "2022-11-30",
    "note": "High-resolution crystal structure of the mouse alpha-defensin cryptdin 14"
  },
  {
    "id": "7YQ3",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.60 \u00c5",
    "date": "2022-11-09",
    "note": "human insulin receptor bound with A43 DNA aptamer and insulin"
  },
  {
    "id": "7YQ4",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.95 \u00c5",
    "date": "2022-11-09",
    "note": "human insulin receptor bound with A62 DNA aptamer and insulin - locally refined"
  },
  {
    "id": "7YQ5",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "4.27 \u00c5",
    "date": "2022-11-09",
    "note": "human insulin receptor bound with A62 DNA aptamer and insulin"
  },
  {
    "id": "7YRV",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2023-08-16",
    "note": "Solution structures of a disulfide-directed multicyclic peptide with affinity for FGFR1"
  },
  {
    "id": "7YRW",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2023-08-16",
    "note": "Solution structures of a disulfide-directed multicyclic peptide with affinity for HER2"
  },
  {
    "id": "7YRX",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2023-08-16",
    "note": "Solution structures of a disulfide-directed multicyclic peptide with affinity for HER3"
  },
  {
    "id": "7YUZ",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.88 \u00c5",
    "date": "2023-07-26",
    "note": "Human K-Ras G12D (GDP-bound) in complex with cyclic peptide inhibitor AP8784"
  },
  {
    "id": "7YV1",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.45 \u00c5",
    "date": "2023-07-26",
    "note": "Human K-Ras G12D (GDP-bound) in complex with cyclic peptide inhibitor LUNA18 and KA30L Fab"
  },
  {
    "id": "7Z20",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "2.29 \u00c5",
    "date": "2022-08-10",
    "note": "70S E. coli ribosome with an extended uL23 loop from Candidatus marinimicrobia and a stalled filamin domain 5 nascent chain"
  },
  {
    "id": "7Z5L",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.40 \u00c5",
    "date": "2023-03-22",
    "note": "Crystal structure of human insulin, crystallised in the presence of macrophage migration inhibitory factor (MIF) and dimethyl sulfoxide (DMSO)"
  },
  {
    "id": "7Z5Q",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.80 \u00c5",
    "date": "2023-03-22",
    "note": "Crystal structure of human insulin, crystallised in the presence of macrophage migration inhibitory factor (MIF) and p-Hydroxyphenylpyruvate (HPP)"
  },
  {
    "id": "7ZAX",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2023-06-07",
    "note": "Solution structure of thanatin-like derivative 7 in complex with K. pneumoniae LptA"
  },
  {
    "id": "7ZED",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2023-06-07",
    "note": "Solution structure of thanatin-like derivative 7 in complex with E.coli LptA mutant Q62L"
  },
  {
    "id": "7ZL3",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.20 \u00c5",
    "date": "2023-03-22",
    "note": "Signal peptide mimicry primes Sec61 for client-selective inhibition"
  },
  {
    "id": "7ZOD",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "2.56 \u00c5",
    "date": "2022-08-10",
    "note": "70S E. coli ribosome with an extended uL23 loop from Candidatus marinimicrobia"
  },
  {
    "id": "7ZP8",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "2.20 \u00c5",
    "date": "2022-08-10",
    "note": "70S E. coli ribosome with a stalled filamin domain 5 nascent chain"
  },
  {
    "id": "7ZQ5",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "2.70 \u00c5",
    "date": "2022-08-10",
    "note": "70S E. coli ribosome with truncated uL23 and uL24 loops"
  },
  {
    "id": "7ZQ6",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "2.75 \u00c5",
    "date": "2022-08-10",
    "note": "70S E. coli ribosome with truncated uL23 and uL24 loops and a stalled filamin domain 5 nascent chain"
  },
  {
    "id": "7ZRU",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2022-05-18",
    "note": "Solution structure of Pi6, a low affinity blocking kappa-K+-channel peptide from the scorpion Pandinus imperator"
  },
  {
    "id": "7ZWK",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.00 \u00c5",
    "date": "2023-03-22",
    "note": "Crystal Structure of Unlinked NS2B-NS3 Protease from Zika Virus in Complex with Inhibitor MI-2162"
  },
  {
    "id": "8A63",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.10 \u00c5",
    "date": "2022-11-02",
    "note": "Cryo-EM structure of Listeria monocytogenes 50S ribosomal subunit."
  },
  {
    "id": "8AD9",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.43 \u00c5",
    "date": "2023-03-29",
    "note": "Crystal structure of ClpC2 C-terminal domain"
  },
  {
    "id": "8AHK",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2023-05-31",
    "note": "Solution NMR structure of AG41, a 41-amino acid insecticidal protein extracted from Medicago truncatula"
  },
  {
    "id": "8AQA",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.35 \u00c5",
    "date": "2022-12-21",
    "note": "Crystal Structure of Unlinked NS2B-NS3 Protease from Zika Virus in Complex with Inhibitor MI-2260"
  },
  {
    "id": "8AQB",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.28 \u00c5",
    "date": "2022-12-21",
    "note": "Crystal Structure of Unlinked NS2B-NS3 Protease from Zika Virus in Complex with Inhibitor MI-2257"
  },
  {
    "id": "8AQK",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.20 \u00c5",
    "date": "2022-12-21",
    "note": "Crystal Structure of Unlinked NS2B-NS3 Protease from Zika Virus in Complex with Inhibitor MI-2258"
  },
  {
    "id": "8B4R",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2023-10-04",
    "note": "Antimicrobial peptide capitellacin from polychaeta Capitella teleta in DPC (dodecylphosphocholine) micelles, monomeric form"
  },
  {
    "id": "8B4S",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2023-10-04",
    "note": "Antimicrobial peptide capitellacin from polychaeta Capitella teleta in DPC (dodecylphosphocholine) micelles, dimeric form"
  },
  {
    "id": "8B58",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.10 \u00c5",
    "date": "2023-02-01",
    "note": "Crystal Structure of Cyclophilin TgCyp23 from Toxoplasma gondii in complex with Cyclosporin A"
  },
  {
    "id": "8BE7",
    "method": "X-RAY DIFFRACTION",
    "resolution": "3.00 \u00c5",
    "date": "2023-04-26",
    "note": "Crystal structure of SOS1-HRas-peptidomimetic3"
  },
  {
    "id": "8BE8",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.40 \u00c5",
    "date": "2023-04-26",
    "note": "Crystal structure of SOS1-HRas-peptidomimetic4"
  },
  {
    "id": "8BE9",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.51 \u00c5",
    "date": "2023-04-26",
    "note": "Crystal structure of SOS1-HRas-peptidomimetic5"
  },
  {
    "id": "8BEA",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.47 \u00c5",
    "date": "2023-04-26",
    "note": "Crystal structure of SOS1-HRas-peptidomimetic10"
  },
  {
    "id": "8BF7",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "2.33 \u00c5",
    "date": "2023-08-16",
    "note": "Elongating E. coli 70S ribosome containing deacylated tRNA(iMet) in the P-site and AAA mRNA codon with cognate dipeptidyl-tRNA(Lys) in the A-site"
  },
  {
    "id": "8BH4",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "2.62 \u00c5",
    "date": "2023-08-16",
    "note": "Elongating E. coli 70S ribosome containing deacylated tRNA(iMet) in the P-site and AAm6A mRNA codon with cognate dipeptidyl-tRNA(Lys) in the A-site"
  },
  {
    "id": "8BHJ",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "2.81 \u00c5",
    "date": "2023-08-16",
    "note": "Elongating E. coli 70S ribosome containing deacylated tRNA(iMet) in the P-site and Am6AA mRNA codon with cognate dipeptidyl-tRNA(Lys) in the A-site"
  },
  {
    "id": "8BHN",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "2.85 \u00c5",
    "date": "2023-08-16",
    "note": "Elongating E. coli 70S ribosome containing deacylated tRNA(iMet) in the P-site and m6AAA mRNA codon with cognate dipeptidyl-tRNA(Lys) in the A-site"
  },
  {
    "id": "8BSS",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2023-06-07",
    "note": "Solution Structure of thanatin-like derivative 5 in complex with E. coli LptA mutant Q62L"
  },
  {
    "id": "8BVC",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2023-12-20",
    "note": "Solution structure of Metridium senile toxin Ms13-1 with the unique fold"
  },
  {
    "id": "8C5G",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.70 \u00c5",
    "date": "2024-01-17",
    "note": "Structure of human Neuropilin-1 b1b2 domains in complex with Chlorotoxin (Leiurus quinquestriatus)"
  },
  {
    "id": "8CIQ",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2023-07-26",
    "note": "JzTx-34 toxin peptide"
  },
  {
    "id": "8CJP",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2023-07-26",
    "note": "JzTx-34 toxin peptide H18A mutant"
  },
  {
    "id": "8CJQ",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2023-07-26",
    "note": "JzTx-34 toxin peptide E20A mutant"
  },
  {
    "id": "8CJR",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2023-07-26",
    "note": "JzTx-34 toxin peptide W25A mutant"
  },
  {
    "id": "8CJS",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2023-07-26",
    "note": "JzTx-34 toxin peptide W31A mutant"
  },
  {
    "id": "8CJT",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2023-07-26",
    "note": "JzTx-34 toxin peptide W33A mutant"
  },
  {
    "id": "8CLS",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "4.00 \u00c5",
    "date": "2023-12-20",
    "note": "Drosophila melanogaster insulin receptor ectodomain in complex with DILP5"
  },
  {
    "id": "8CM3",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2024-02-28",
    "note": "Solution structure of Mu3.1 from Conus mucronatus"
  },
  {
    "id": "8CRX",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "2.78 \u00c5",
    "date": "2023-03-22",
    "note": "Cutibacterium acnes 70S ribosome with mRNA, P-site tRNA and Sarecycline bound"
  },
  {
    "id": "8CTO",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2022-09-14",
    "note": "Solution NMR structure of 8-residue Rosetta-designed cyclic peptide D8.31 in d6-DMSO with cis/trans switching (B-CT conformation)"
  },
  {
    "id": "8CUN",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2022-09-14",
    "note": "Solution NMR structure of 8-residue Rosetta-designed cyclic peptide D8.21 in 50% d6-DMSO and 50% water with cis/trans switching (CC conformation, 50%)"
  },
  {
    "id": "8CVM",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "2.66 \u00c5",
    "date": "2023-03-15",
    "note": "Cutibacterium acnes 50S ribosomal subunit with P-site tRNA and Sarecycline bound in the local refined map"
  },
  {
    "id": "8CWA",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2022-09-14",
    "note": "Solution NMR structure of 8-residue Rosetta-designed cyclic peptide D8.21 in CDCl3 with cis/trans switching (TC conformation, 53%)"
  },
  {
    "id": "8DEU",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "2.95 \u00c5",
    "date": "2022-09-14",
    "note": "Cryo-electron microscopy structure of Neisseria gonorrhoeae multidrug efflux pump MtrD with CASP peptide complex"
  },
  {
    "id": "8DFZ",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2023-07-05",
    "note": "NMR shows why a small chemical change almost abolishes the antimicrobial activity of GccF"
  },
  {
    "id": "8DI2",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2022-11-09",
    "note": "Site 2 insulin receptor binding peptide IM459N21"
  },
  {
    "id": "8DNX",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "2.98 \u00c5",
    "date": "2023-05-24",
    "note": "Cryo-EM structure of the human Sec61 complex inhibited by cotransin"
  },
  {
    "id": "8DNY",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "2.85 \u00c5",
    "date": "2023-05-24",
    "note": "Cryo-EM structure of the human Sec61 complex inhibited by decatransin"
  },
  {
    "id": "8DNZ",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "2.57 \u00c5",
    "date": "2023-05-24",
    "note": "Cryo-EM structure of the human Sec61 complex inhibited by apratoxin F"
  },
  {
    "id": "8DPY",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.00 \u00c5",
    "date": "2023-05-24",
    "note": "Synthetic Beta Sheet Macrocycle Stabilized by Hydrogen Bond Surrogates"
  },
  {
    "id": "8DS7",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.88 \u00c5",
    "date": "2024-02-07",
    "note": "Tumor-activated antibody derivatives targeting CTLA4"
  },
  {
    "id": "8DTB",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.14 \u00c5",
    "date": "2023-05-31",
    "note": "Focus/local refined map in C1 of signal subtracted RyR1 particles in complex with ImperaCalcin"
  },
  {
    "id": "8DTL",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "5.40 \u00c5",
    "date": "2022-09-07",
    "note": "Cryo-EM structure of insulin receptor (IR) bound with S597 peptide"
  },
  {
    "id": "8DTM",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.50 \u00c5",
    "date": "2022-09-07",
    "note": "Cryo-EM structure of insulin receptor (IR) bound with S597 component 2"
  },
  {
    "id": "8DUJ",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.70 \u00c5",
    "date": "2023-05-31",
    "note": "Global map in C1 of RyR1 particles in complex with ImperaCalcin"
  },
  {
    "id": "8DVL",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.50 \u00c5",
    "date": "2023-03-29",
    "note": "Crystal structure of LRP6 E3E4 in complex with disulfide constrained peptide E3.18"
  },
  {
    "id": "8DVM",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.00 \u00c5",
    "date": "2023-03-29",
    "note": "Crystal structure of LRP6 E3E4 in complex with disulfide constrained peptide E3.6"
  },
  {
    "id": "8DVN",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.53 \u00c5",
    "date": "2023-03-29",
    "note": "Crystal structure of LRP6 E3E4 in complex with disulfide constrained peptide E3.10"
  },
  {
    "id": "8EC9",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.17 \u00c5",
    "date": "2023-05-31",
    "note": "Covalently stabilized triangular trimer derived from Abeta16-36 with p-iodo-phenylalanine"
  },
  {
    "id": "8ECA",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.27 \u00c5",
    "date": "2023-05-31",
    "note": "Covalently stabilized triangular trimer derived from Abeta16-36"
  },
  {
    "id": "8EQI",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.00 \u00c5",
    "date": "2023-04-19",
    "note": "Crystal Structure of Danio rerio histone deacetylase 6 catalytic domain 2 complexed with cyclopeptide des4.2.0"
  },
  {
    "id": "8F04",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2023-09-13",
    "note": "Structure of elevenin-Vc1 from venom of the Australian cone snail Conus victoriae"
  },
  {
    "id": "8F0J",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "2.00 \u00c5",
    "date": "2023-08-02",
    "note": "Calcitonin Receptor in complex with Gs and Pramlintide analogue peptide San45"
  },
  {
    "id": "8F0K",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "1.90 \u00c5",
    "date": "2023-08-02",
    "note": "Human Amylin3 Receptor in complex with Gs and Pramlintide analogue peptide San385"
  },
  {
    "id": "8F2A",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "2.20 \u00c5",
    "date": "2023-08-02",
    "note": "Human Amylin3 Receptor in complex with Gs and Pramlintide analogue peptide San385 (Cluster 5 conformation)"
  },
  {
    "id": "8F2B",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "2.00 \u00c5",
    "date": "2023-08-02",
    "note": "Amylin 3 Receptor in complex with Gs and Pramlintide analogue peptide San45"
  },
  {
    "id": "8F2F",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2022-11-23",
    "note": "NMR solution structure of lambda-MeuKTx-1"
  },
  {
    "id": "8F4B",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.27 \u00c5",
    "date": "2023-03-22",
    "note": "Bovine multidrug resistance protein 1 (MRP1) bound to cyclic peptide inhibitor 1 (CPI1)"
  },
  {
    "id": "8FD4",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2023-11-08",
    "note": "Solution structure of mu-theraphotoxin Cg4a from Chinese tarantula Chilobrachys jingzhao"
  },
  {
    "id": "8FEY",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2023-03-29",
    "note": "Solution structure of Pmu1a"
  },
  {
    "id": "8FIF",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.35 \u00c5",
    "date": "2023-12-20",
    "note": "A2.3 Nanobody In Complex With Microcystin-LR"
  },
  {
    "id": "8FLP",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2023-02-08",
    "note": "NMR Solution Structure of LvIC analogue"
  },
  {
    "id": "8FPO",
    "method": "X-RAY DIFFRACTION",
    "resolution": "3.00 \u00c5",
    "date": "2024-10-16",
    "note": "PCSK9 in complex with an inhibitor"
  },
  {
    "id": "8FVL",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.96 \u00c5",
    "date": "2024-10-16",
    "note": "PCSK9 in complex with an inhibitor"
  },
  {
    "id": "8FVM",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.85 \u00c5",
    "date": "2024-10-16",
    "note": "PCSK9 in complex with an inhibitor"
  },
  {
    "id": "8G2M",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.80 \u00c5",
    "date": "2024-02-14",
    "note": "The tumor activated anti-CTLA-4 monoclonal antibody XTX101 demonstrates tumor-growth inhibition and tumor-selective pharmacodynamics in mouse models of cancer"
  },
  {
    "id": "8G4Y",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.41 \u00c5",
    "date": "2023-12-20",
    "note": "Structure of ZNRF3 ECD bound to peptide MK1-3.6.10"
  },
  {
    "id": "8G8N",
    "method": "X-RAY DIFFRACTION",
    "resolution": "3.00 \u00c5",
    "date": "2024-01-17",
    "note": "CTLA4 Fab with peptide"
  },
  {
    "id": "8GAJ",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.43 \u00c5",
    "date": "2023-07-19",
    "note": "Crystal Structure of E. coli LptA in complex with Podisus maculiventris Thanatin"
  },
  {
    "id": "8GAK",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.90 \u00c5",
    "date": "2023-07-19",
    "note": "Crystal Structure of E. coli LptA in complex with Chinavia Ubica Thanatin"
  },
  {
    "id": "8GAL",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.80 \u00c5",
    "date": "2023-07-19",
    "note": "Crystal Structure of the E. coli LptA in complex with Murgantia histrionica Thanatin"
  },
  {
    "id": "8GHO",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.60 \u00c5",
    "date": "2023-08-30",
    "note": "GUCY2C-peptide bound to anti-GUCY2C-scFv antibody"
  },
  {
    "id": "8GJD",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.03 \u00c5",
    "date": "2024-01-17",
    "note": "X-ray crystallographic structure of a beta-hairpin peptide derived from Abeta 17-36. (ORN)LVFFAED(ORN)AII(N-Me-Gly)LMV"
  },
  {
    "id": "8GQA",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.29 \u00c5",
    "date": "2023-06-21",
    "note": "Crystal structure of lasso peptide epimerase MslH in complexed with precursor peptide analog MslAdeltaW21"
  },
  {
    "id": "8GSG",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.05 \u00c5",
    "date": "2023-03-15",
    "note": "T3R3 form of Human insulin with single Zn"
  },
  {
    "id": "8GUC",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2023-09-13",
    "note": "Solution structures of a disulfide-rich peptide selected via Cellular Protein Quality Control"
  },
  {
    "id": "8GUY",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "4.18 \u00c5",
    "date": "2022-11-09",
    "note": "human insulin receptor bound with two insulin molecules"
  },
  {
    "id": "8H8Q",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.50 \u00c5",
    "date": "2023-10-25",
    "note": "Fab-amyloid beta fragment complex at neutral pH"
  },
  {
    "id": "8HCQ",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.01 \u00c5",
    "date": "2023-03-22",
    "note": "Cryo-EM structure of endothelin1-bound ETAR-Gq complex"
  },
  {
    "id": "8HCX",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.50 \u00c5",
    "date": "2023-03-22",
    "note": "Cryo-EM structure of Endothelin1-bound ETBR-Gq complex"
  },
  {
    "id": "8HGP",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "4.53 \u00c5",
    "date": "2023-02-08",
    "note": "The EREG-bound EGFR/HER2 ectodomain complex"
  },
  {
    "id": "8HGZ",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.70 \u00c5",
    "date": "2024-03-06",
    "note": "Crystal structure of insulin"
  },
  {
    "id": "8HJC",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2022-12-07",
    "note": "Solution structure of cysteine-rich peptide Bidentatide (Achyranthes bidentata peptide)"
  },
  {
    "id": "8HJD",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2022-12-07",
    "note": "Solution structure of cysteine-rich peptide Bidentatide (Achyranthes bidentata peptide) with glycation"
  },
  {
    "id": "8HR3",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2023-09-20",
    "note": "[D-Cys5,Asp7,Val8,D-Lys16]-STp(5-17)"
  },
  {
    "id": "8HR4",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2023-12-20",
    "note": "[D-Cys5,D-Lys16]-STp(5-17)"
  },
  {
    "id": "8HSF",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.90 \u00c5",
    "date": "2023-12-20",
    "note": "Insulin triple mutant INS-RQD"
  },
  {
    "id": "8HSK",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.64 \u00c5",
    "date": "2023-12-20",
    "note": "Insulin single mutant INS-Q"
  },
  {
    "id": "8I74",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.36 \u00c5",
    "date": "2024-01-31",
    "note": "Crystal structure of decarboxylated osteocalcin at pH 8.5"
  },
  {
    "id": "8I75",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.33 \u00c5",
    "date": "2024-01-31",
    "note": "Crystal structure of decarboxylated osteocalcin at pH 2.0"
  },
  {
    "id": "8I76",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.38 \u00c5",
    "date": "2024-01-31",
    "note": "Crystal structure of decarboxylated osteocalcin at pH 2.0 without glycerol"
  },
  {
    "id": "8IHP",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.00 \u00c5",
    "date": "2023-04-12",
    "note": "Structure of Semliki Forest virus VLP in complex with the receptor VLDLR-LA3"
  },
  {
    "id": "8IKQ",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2024-03-06",
    "note": "NMR structure of Thanatin IM14 in LPS"
  },
  {
    "id": "8IL1",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2024-03-06",
    "note": "Free Thanatin IM14"
  },
  {
    "id": "8IL2",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2024-02-07",
    "note": "Free Thanatin PM15"
  },
  {
    "id": "8IL6",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2024-02-07",
    "note": "Thanatin PM15 with LPS"
  },
  {
    "id": "8IPZ",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.40 \u00c5",
    "date": "2023-12-13",
    "note": "Crystal structure of insulin detemir"
  },
  {
    "id": "8ITG",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.25 \u00c5",
    "date": "2023-06-21",
    "note": "Crystal structure of lasso peptide epimerase MslH in complexed with precursor peptide variant MslAW21G"
  },
  {
    "id": "8IY5",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "2.80 \u00c5",
    "date": "2023-08-16",
    "note": "ETB-Gi complex bound to endothelin-1"
  },
  {
    "id": "8IY6",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.13 \u00c5",
    "date": "2023-08-16",
    "note": "ETB-Gi complex bound to Endotheline-1, focused on receptor"
  },
  {
    "id": "8J3S",
    "method": "X-RAY DIFFRACTION",
    "resolution": "3.09 \u00c5",
    "date": "2023-11-08",
    "note": "Complex structure of human cytomegalovirus protease and a macrocyclic peptide ligand"
  },
  {
    "id": "8JB4",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2024-03-13",
    "note": "lipopolysaccharide-binding domain-LBDB"
  },
  {
    "id": "8JJS",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.53 \u00c5",
    "date": "2023-07-26",
    "note": "Human K-Ras G12D (GDP-bound) in complex with cyclic peptide inhibitor AP10343"
  },
  {
    "id": "8K3M",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2023-12-06",
    "note": "Solution NMR structure of trans X-Pro peptide bond conformer of a single disulfide conopeptide Mo1853"
  },
  {
    "id": "8K3N",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2023-12-06",
    "note": "Solution NMR structure of cis X-Pro peptide bond conformer of a single disulfide conopeptide Mo1853"
  },
  {
    "id": "8KC9",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.75 \u00c5",
    "date": "2024-09-18",
    "note": "Human collagen prolyl processing enzyme complex, P3H1/CRTAP/PPIB heterotrimer, bound to cyclosporin A"
  },
  {
    "id": "8OI6",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.59 \u00c5",
    "date": "2023-08-09",
    "note": "Cryo-EM structure of the undecorated barbed end of filamentous beta/gamma actin"
  },
  {
    "id": "8OKY",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.17 \u00c5",
    "date": "2024-04-10",
    "note": "Crystal structure of D-ProB26-DTriA analogue of human insulin"
  },
  {
    "id": "8ONI",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.30 \u00c5",
    "date": "2024-04-10",
    "note": "Human insulin in complex with the analytical antibody S1 Fab"
  },
  {
    "id": "8ONK",
    "method": "X-RAY DIFFRACTION",
    "resolution": "3.40 \u00c5",
    "date": "2024-04-10",
    "note": "Human insulin in complex with the analytical antibody S1 Fab and the analytical antibody HUI-001 Fab"
  },
  {
    "id": "8ONP",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.77 \u00c5",
    "date": "2024-04-10",
    "note": "Human insulin trans-HypB26-DTIA analogue"
  },
  {
    "id": "8ONR",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.88 \u00c5",
    "date": "2024-04-10",
    "note": "Crystal structure of human insulin trans-HypB26-DTI analogue"
  },
  {
    "id": "8ONU",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2023-06-14",
    "note": "Solution structure of thanatin analogue 7 in complex with LptAm(Ab)1.0"
  },
  {
    "id": "8P6Q",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.40 \u00c5",
    "date": "2024-01-24",
    "note": "Racemic structure of TNFR1 cysteine-rich domain"
  },
  {
    "id": "8P94",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.30 \u00c5",
    "date": "2024-01-03",
    "note": "Cryo-EM structure of cortactin stabilized Arp2/3-complex nucleated actin branches"
  },
  {
    "id": "8PWT",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2023-10-25",
    "note": "Solution structure of the peptide U11-MYRTX-Tb1a from the venom of the ant Tetramorium bicarinatum"
  },
  {
    "id": "8PXZ",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.98 \u00c5",
    "date": "2024-08-07",
    "note": "Crystal structure of the transpeptidase LdtMt2 from Mycobacterium tuberculosis in complex with natural substrate"
  },
  {
    "id": "8Q4F",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.10 \u00c5",
    "date": "2024-08-14",
    "note": "Structure of arbekacin bound Escherichia coli 70S ribosome"
  },
  {
    "id": "8Q7J",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2023-12-06",
    "note": "Conformations of macrocyclic peptides sampled by exact NOEs: models for cell-permeability"
  },
  {
    "id": "8QAQ",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2023-12-06",
    "note": "Conformations of macrocyclic peptides sampled by exact NOEs: models for cell-permeability. Conformation 1 of omphalotin A in apolar solvents."
  },
  {
    "id": "8QAS",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2023-12-06",
    "note": "Conformations of macrocyclic peptides sampled by exact NOEs: models for cell-permeability. NMR structure of Omphalotin A in methanol / water indoleOut conformation."
  },
  {
    "id": "8QBP",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2023-12-13",
    "note": "Conformations of macrocyclic peptides sampled by exact NOEs: models for cell-permeability. NMR structure of Omphalotin A in methanol / water indoleOut conformation."
  },
  {
    "id": "8QY9",
    "method": "X-RAY DIFFRACTION",
    "resolution": "3.10 \u00c5",
    "date": "2024-01-17",
    "note": "J22.9-H, fully humanized Fab Fragment based on chimeric J22.9-xi IgG against BCMA"
  },
  {
    "id": "8QYA",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.72 \u00c5",
    "date": "2024-01-17",
    "note": "J22.9-FNY, fully humanized, CDR optimized Fab Fragment based on chimeric J22.9-xi IgG against BCMA; with VH CDR2 glycosylation"
  },
  {
    "id": "8QYB",
    "method": "X-RAY DIFFRACTION",
    "resolution": "3.09 \u00c5",
    "date": "2024-01-17",
    "note": "J22.9-ISY, fully humanized and CDR optimized Fab Fragment based on chimeric J22.9-xi IgG against BCMA"
  },
  {
    "id": "8R7S",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.17 \u00c5",
    "date": "2024-10-30",
    "note": "Crystal Structure of Cyclophilin TgCyp23 from Toxoplasma gondii in complex with NIM811 (N-methyl-4-isoleucine cyclosporin)"
  },
  {
    "id": "8R7T",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.20 \u00c5",
    "date": "2024-10-30",
    "note": "Crystal Structure of Cyclophilin TgCyp23 from Toxoplasma gondii in complex with Alisporivir (nonimmunosuppressive analogue of Cyclosporin)"
  },
  {
    "id": "8R7U",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.20 \u00c5",
    "date": "2024-10-30",
    "note": "Crystal Structure of Cyclophilin TgCyp23 from Toxoplasma gondii in complex with dihydro Cyclosporin A"
  },
  {
    "id": "8RC7",
    "method": "X-RAY DIFFRACTION",
    "resolution": "0.98 \u00c5",
    "date": "2024-03-06",
    "note": "The structure of membrane-active antibiotic cyclodecapeptide gramicidin S in complex with urea"
  },
  {
    "id": "8RE5",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.70 \u00c5",
    "date": "2024-12-18",
    "note": "Aspartyl/Asparaginyl beta-hydroxylase (AspH) R735Q variant in complex with Mn, 2-oxosuberate and a Factor X derived peptide fragment"
  },
  {
    "id": "8RE6",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.92 \u00c5",
    "date": "2024-12-18",
    "note": "Aspartyl/Asparaginyl beta-hydroxylase (AspH) R735Q variant in complex with Mn, 2-oxoglutarate and a Factor X derived peptide fragment"
  },
  {
    "id": "8RE7",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.95 \u00c5",
    "date": "2024-12-18",
    "note": "Aspartyl/Asparaginyl beta-hydroxylase (AspH) R735W variant in complex with Mn, 2-oxoglutarate and a Factor X derived peptide fragment"
  },
  {
    "id": "8RE8",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.85 \u00c5",
    "date": "2024-12-18",
    "note": "Aspartyl/Asparaginyl beta-hydroxylase (AspH) R688Q variant in complex with Mn, (3R)-methyl-2-oxoglutarate and a Factor X derived peptide fragment"
  },
  {
    "id": "8RE9",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.84 \u00c5",
    "date": "2024-12-18",
    "note": "Aspartyl/Asparaginyl beta-hydroxylase (AspH) in complex with Mn, 2-oxoglutarate and a Factor X derived peptide fragment"
  },
  {
    "id": "8RRP",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.00 \u00c5",
    "date": "2024-07-10",
    "note": "Insulin Icodec - A14E B16H B25H B29Ne-C20 diacid-LgGlu-2xAdo desB30 human insulin"
  },
  {
    "id": "8RTT",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.56 \u00c5",
    "date": "2024-04-10",
    "note": "Structure of the formin Cdc12 bound to the barbed end of phalloidin-stabilized F-actin."
  },
  {
    "id": "8RTY",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "6.25 \u00c5",
    "date": "2024-04-10",
    "note": "Structure of the F-actin barbed end bound by Cdc12 and profilin (ring complex) at a resolution of 6.3 Angstrom"
  },
  {
    "id": "8RVT",
    "method": "SOLID-STATE NMR",
    "resolution": "N/A",
    "date": "2024-05-29",
    "note": "Structure of full-length human insulin fibrils"
  },
  {
    "id": "8S9Y",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2023-04-12",
    "note": "Taipan Natriuretic Peptide C -TNPc"
  },
  {
    "id": "8SBD",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.20 \u00c5",
    "date": "2023-08-30",
    "note": "Cryo-EM structure of insulin amyloid-like fibril that is composed of two antiparallel protofilaments"
  },
  {
    "id": "8SDM",
    "method": "X-RAY DIFFRACTION",
    "resolution": "3.05 \u00c5",
    "date": "2024-07-03",
    "note": "HTRA-1 PDSA bound to CKP 3B3"
  },
  {
    "id": "8SDP",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.87 \u00c5",
    "date": "2024-07-03",
    "note": "HTRA-1 PDSA bound to CKP 3A7"
  },
  {
    "id": "8SE7",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.96 \u00c5",
    "date": "2024-07-03",
    "note": "HTRA-1 PDSA bound to CKP 1A8"
  },
  {
    "id": "8SE8",
    "method": "X-RAY DIFFRACTION",
    "resolution": "3.18 \u00c5",
    "date": "2024-07-03",
    "note": "HTRA-1 PD/SA bound to CKP 1G10"
  },
  {
    "id": "8SED",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2023-10-18",
    "note": "Structure of a new ShKT peptide from the sea anemone Telmatactis stephensoni: ShKT-Ts1"
  },
  {
    "id": "8SEM",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2023-09-27",
    "note": "Structural and functional characterisation of Tst2, a novel TRPV1 inhibitory peptide from the Australian sea anemone Telmatactis stephensoni"
  },
  {
    "id": "8TFV",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "1998-12-02",
    "note": "INSECT DEFENSE PEPTIDE"
  },
  {
    "id": "8TM9",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.05 \u00c5",
    "date": "2024-12-11",
    "note": "Computationally designed tunable C2 symmetric tandem repeat homodimer, D_3_633_8x bound to peptide"
  },
  {
    "id": "8TYI",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2024-03-13",
    "note": "NMR structure of L5pG ([p23W, G24W]kalata B1)"
  },
  {
    "id": "8U4J",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.70 \u00c5",
    "date": "2024-03-13",
    "note": "Structure of the HER4/BTC Homodimer Extracellular Domain"
  },
  {
    "id": "8U4K",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "4.27 \u00c5",
    "date": "2024-03-13",
    "note": "Structure of the HER2/HER4/BTC Heterodimer Extracellular Domain"
  },
  {
    "id": "8UA4",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.58 \u00c5",
    "date": "2024-08-14",
    "note": "Structure of eastern equine encephalitis virus VLP in complex with VLDLR LA1"
  },
  {
    "id": "8UA8",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.70 \u00c5",
    "date": "2024-08-14",
    "note": "Structure of Semliki Forest virus VLP in complex with VLDLR LA2"
  },
  {
    "id": "8ULM",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2023-11-01",
    "note": "Chickpea (Cicer arientinum) nodule-specific cysteine-rich peptide NCR13: Solution NMR structure of the isomer with C4:C23, C15:C30, and C10:C28 disulfide bonds"
  },
  {
    "id": "8UNG",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2024-05-29",
    "note": "Solution structure of toxin, U-RDTX-Pp19, from assassin bug Pristhesancus plagipennis"
  },
  {
    "id": "8UWF",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2024-03-13",
    "note": "NMR structure of the funnel-web spider toxin Hc3a"
  },
  {
    "id": "8UXR",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2024-03-27",
    "note": "TxVIIB,U-superfamily conotoxin"
  },
  {
    "id": "8V2M",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2024-11-27",
    "note": "Structure of Asterias rubens peptide (KASH2)"
  },
  {
    "id": "8V2U",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2024-11-27",
    "note": "Structure of Asterias rubens peptide KASH2-amide"
  },
  {
    "id": "8V2V",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2024-09-25",
    "note": "Solution NMR structure of recifin A [Y6F]"
  },
  {
    "id": "8V30",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "2.54 \u00c5",
    "date": "2024-05-01",
    "note": "Smooth Muscle Gamma Actin (ACTG2) Filament Mutant R40C"
  },
  {
    "id": "8VAD",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.45 \u00c5",
    "date": "2024-12-25",
    "note": "Crystal structure of MCoHNE-I, a potent in-vivo neutrophil elastase inhibitor"
  },
  {
    "id": "8VU6",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2024-06-05",
    "note": "Wheat Germ Agglutinin (WGA) domain A"
  },
  {
    "id": "8VU7",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2024-06-05",
    "note": "Wheat Germ Agglutinin (WGA) domain C"
  },
  {
    "id": "8VU8",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2024-06-05",
    "note": "Wheat Germ Agglutinin (WGA) domain D"
  },
  {
    "id": "8VX7",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.75 \u00c5",
    "date": "2025-02-05",
    "note": "Computationally designed tunable C2 symmetric tandem repeat homodimer, bound to cyclic peptide"
  },
  {
    "id": "8W16",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2025-03-05",
    "note": "Pyroglutamaic acid position 1 synthetic analogue of RgIA"
  },
  {
    "id": "8W17",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2025-03-05",
    "note": "Lactam bridge synthetic analogue of RgIA"
  },
  {
    "id": "8W6Z",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.20 \u00c5",
    "date": "2024-06-12",
    "note": "Substrate-bound crystal structure of a P450 enzyme DmlH that catalyze intramolecular phenol coupling in the biosynthesis of cihanmycins"
  },
  {
    "id": "8WAK",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "5.47 \u00c5",
    "date": "2023-12-06",
    "note": "Structure of transcribing complex 2 (TC2), the initially transcribing complex with Pol II positioned 2nt downstream of TSS."
  },
  {
    "id": "8WAL",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "8.52 \u00c5",
    "date": "2023-12-06",
    "note": "Structure of transcribing complex 3 (TC3), the initially transcribing complex with Pol II positioned 3nt downstream of TSS."
  },
  {
    "id": "8WAN",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "6.07 \u00c5",
    "date": "2023-12-06",
    "note": "Structure of transcribing complex 4 (TC4), the initially transcribing complex with Pol II positioned 4nt downstream of TSS."
  },
  {
    "id": "8WAO",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "6.40 \u00c5",
    "date": "2023-12-06",
    "note": "Structure of transcribing complex 5 (TC5), the initially transcribing complex with Pol II positioned 5nt downstream of TSS."
  },
  {
    "id": "8WAP",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "5.85 \u00c5",
    "date": "2023-12-06",
    "note": "Structure of transcribing complex 6 (TC6), the initially transcribing complex with Pol II positioned 6nt downstream of TSS."
  },
  {
    "id": "8WAQ",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "6.29 \u00c5",
    "date": "2023-12-06",
    "note": "Structure of transcribing complex 7 (TC7), the initially transcribing complex with Pol II positioned 7nt downstream of TSS."
  },
  {
    "id": "8WAR",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "7.20 \u00c5",
    "date": "2023-12-06",
    "note": "Structure of transcribing complex 8 (TC8), the initially transcribing complex with Pol II positioned 8nt downstream of TSS."
  },
  {
    "id": "8WAS",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "6.13 \u00c5",
    "date": "2023-12-06",
    "note": "Structure of transcribing complex 9 (TC9), the initially transcribing complex with Pol II positioned 9nt downstream of TSS."
  },
  {
    "id": "8WAT",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "2.82 \u00c5",
    "date": "2023-12-06",
    "note": "De novo transcribing complex 10 (TC10), the early elongation complex with Pol II positioned 10nt downstream of TSS"
  },
  {
    "id": "8WAU",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "2.78 \u00c5",
    "date": "2023-12-06",
    "note": "De novo transcribing complex 11 (TC11), the early elongation complex with Pol II positioned 11nt downstream of TSS"
  },
  {
    "id": "8WAV",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "2.72 \u00c5",
    "date": "2023-12-06",
    "note": "De novo transcribing complex 12 (TC12), the early elongation complex with Pol II positioned 12nt downstream of TSS"
  },
  {
    "id": "8WAW",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.02 \u00c5",
    "date": "2023-12-06",
    "note": "De novo transcribing complex 13 (TC13), the early elongation complex with Pol II positioned 13nt downstream of TSS"
  },
  {
    "id": "8WAX",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "2.75 \u00c5",
    "date": "2023-12-06",
    "note": "De novo transcribing complex 14 (TC14), the early elongation complex with Pol II positioned 14nt downstream of TSS"
  },
  {
    "id": "8WAY",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "2.85 \u00c5",
    "date": "2023-12-06",
    "note": "De novo transcribing complex 15 (TC15), the early elongation complex with Pol II positioned 15nt downstream of TSS"
  },
  {
    "id": "8WAZ",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "2.76 \u00c5",
    "date": "2023-12-06",
    "note": "De novo transcribing complex 16 (TC16), the early elongation complex with Pol II positioned 16nt downstream of TSS"
  },
  {
    "id": "8WB0",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "2.94 \u00c5",
    "date": "2023-12-06",
    "note": "De novo transcribing complex 17 (TC17), the early elongation complex with Pol II positioned 17nt downstream of TSS"
  },
  {
    "id": "8WGI",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2024-09-25",
    "note": "Multicyclic peptide molecules targeting ROR1 with high affinity"
  },
  {
    "id": "8WGJ",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2024-09-25",
    "note": "Multicyclic peptide molecules targeting TROP2 with high affinity"
  },
  {
    "id": "8WSS",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.01 \u00c5",
    "date": "2024-06-19",
    "note": "Cryo-EM structure of Melanin-Concentrating Hormone Receptor 1 with MCH"
  },
  {
    "id": "8WTW",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "2.80 \u00c5",
    "date": "2024-08-07",
    "note": "Cryo-EM structure of noradrenaline transporter in complex with a x-MrlA analogue"
  },
  {
    "id": "8WU0",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.95 \u00c5",
    "date": "2024-10-23",
    "note": "Crystal structure of lisargine"
  },
  {
    "id": "8WW0",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2024-10-30",
    "note": "Cyclic peptide with affinity for ICOS"
  },
  {
    "id": "8WW1",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2024-10-30",
    "note": "Cyclic peptide with affinity for HER3"
  },
  {
    "id": "8WWK",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "2.61 \u00c5",
    "date": "2024-11-13",
    "note": "MCH-MCHR1-Gi complex, T1 state"
  },
  {
    "id": "8WWL",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "2.78 \u00c5",
    "date": "2024-11-13",
    "note": "MCH-MCHR1-Gi complex, T2 state"
  },
  {
    "id": "8WWM",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "2.81 \u00c5",
    "date": "2024-11-13",
    "note": "MCH-MCHR1-Gi complex, L2 state"
  },
  {
    "id": "8WWN",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "2.65 \u00c5",
    "date": "2024-11-13",
    "note": "MCH-MCHR1-Gi complex,L1 state"
  },
  {
    "id": "8X0K",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.50 \u00c5",
    "date": "2024-11-27",
    "note": "Cryo-EM structure of Semliki Forest virus in complex with its receptor VLDLR(2-fold)"
  },
  {
    "id": "8X0L",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.50 \u00c5",
    "date": "2024-11-27",
    "note": "Cryo-EM structure of Semliki Forest virus in complex with its receptor VLDLR(3-fold)"
  },
  {
    "id": "8X0M",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.50 \u00c5",
    "date": "2024-11-27",
    "note": "Cryo-EM structure of Semliki Forest virus in complex with its receptor VLDLR(5-fold)"
  },
  {
    "id": "8X3N",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2024-03-06",
    "note": "Thanatin VF16 in complex with LPS"
  },
  {
    "id": "8X40",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2024-03-06",
    "note": "Free VF16 in aqueous solution"
  },
  {
    "id": "8X8L",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "2.70 \u00c5",
    "date": "2024-06-12",
    "note": "Cryo-EM structure of the cortistatin 17-bound Somatostatin receptor 5-Gi protein complex"
  },
  {
    "id": "8X8N",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "2.90 \u00c5",
    "date": "2024-06-12",
    "note": "Cryo-EM structure of the octreotide-bound Somatostatin receptor 5-Gi protein complex"
  },
  {
    "id": "8X91",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.11 \u00c5",
    "date": "2024-03-20",
    "note": "P/Q type calcium channel in complex with omega-conotoxin MVIIC"
  },
  {
    "id": "8XGR",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.20 \u00c5",
    "date": "2024-04-03",
    "note": "ETB-eGt complex bound to endothelin-1"
  },
  {
    "id": "8XI5",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.40 \u00c5",
    "date": "2024-08-28",
    "note": "Structure of Eastern Equine Encephalitis VLP in complex with the receptor VLDLR LA3-5"
  },
  {
    "id": "8XIP",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.29 \u00c5",
    "date": "2024-07-03",
    "note": "Structure of Pasireotide-SSTR1 G protein complex"
  },
  {
    "id": "8XIR",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "2.52 \u00c5",
    "date": "2024-07-03",
    "note": "Structure of pasireotide-SSTR3 G protein complex"
  },
  {
    "id": "8XP8",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.64 \u00c5",
    "date": "2024-05-29",
    "note": "Crystal structure of d(ACGmCCGT/ACGGCGT) in complex with Echinomycin"
  },
  {
    "id": "8XPB",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.00 \u00c5",
    "date": "2024-05-29",
    "note": "Crystal structure of d(ACGCCGT/ACGGCGT) in complex with Echinomycin"
  },
  {
    "id": "8XTH",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2024-03-13",
    "note": "Thanatin PM15Y in LPS"
  },
  {
    "id": "8XVH",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.26 \u00c5",
    "date": "2024-08-28",
    "note": "Cryo-EM structure of ETBR bound with Endothelin1"
  },
  {
    "id": "8XVI",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.32 \u00c5",
    "date": "2024-08-28",
    "note": "Cryo-EM structure of ETAR bound with Endothelin1"
  },
  {
    "id": "8XWP",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.21 \u00c5",
    "date": "2024-10-02",
    "note": "Cryo-EM structure of ET-1 bound ETBR-DNGI complex"
  },
  {
    "id": "8XWQ",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "4.60 \u00c5",
    "date": "2024-10-02",
    "note": "Cryo-EM structure of ET-1 bound ETBR-DNGI complex"
  },
  {
    "id": "8XZF",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.00 \u00c5",
    "date": "2024-03-20",
    "note": "Cryo-EM structure of the WN561-bound human APLNR-Gi complex"
  },
  {
    "id": "8XZH",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "2.60 \u00c5",
    "date": "2024-03-20",
    "note": "Cryo-EM structure of the MM07-bound human APLNR-Gi complex"
  },
  {
    "id": "8XZJ",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.00 \u00c5",
    "date": "2024-03-20",
    "note": "Cryo-EM structure of the WN353-bound human APLNR-Gi complex"
  },
  {
    "id": "8Y36",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "2.65 \u00c5",
    "date": "2024-07-24",
    "note": "cryo-EM structure of Staphylococcus aureus(ATCC 29213) 50S ribosome in complex with MCX-190."
  },
  {
    "id": "8Y37",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "2.53 \u00c5",
    "date": "2024-07-24",
    "note": "Cryo-EM structure of Staphylococcus aureus (15B196) 50S ribosome in complex with MCX-190."
  },
  {
    "id": "8Y38",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "2.58 \u00c5",
    "date": "2024-07-24",
    "note": "Cryo-EM structure of Staphylococcus aureus 70S ribosome (strain 15B196) in complex with MCX-190."
  },
  {
    "id": "8Y39",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.60 \u00c5",
    "date": "2024-07-24",
    "note": "cryo-EM structure of Staphylococcus aureus(ATCC 29213) 70S ribosome in complex with MCX-190."
  },
  {
    "id": "8YD6",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2025-02-26",
    "note": "Solution structure of peptide H30 by Nuclear Magnetic Resonance Spectroscopy"
  },
  {
    "id": "8YS4",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "4.80 \u00c5",
    "date": "2024-08-28",
    "note": "Overall structure of Eastern Equine Encephalitis virus VLP in complex with the receptor VLDLR LA3-5"
  },
  {
    "id": "8YS7",
    "method": "X-RAY DIFFRACTION",
    "resolution": "3.24 \u00c5",
    "date": "2025-04-09",
    "note": "Crystal structure of actinomycin D and Echinomycin-d(ACGGGCT/AGCCCCGT) complex"
  },
  {
    "id": "8YVZ",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.45 \u00c5",
    "date": "2024-12-11",
    "note": "Semliki Forest virus viron"
  },
  {
    "id": "8YW0",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.55 \u00c5",
    "date": "2024-12-11",
    "note": "Semliki Forest virus viron"
  },
  {
    "id": "8YYL",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "4.01 \u00c5",
    "date": "2025-04-09",
    "note": "Cryo-EM structure of the complex IR with one insulin"
  },
  {
    "id": "8YYT",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.60 \u00c5",
    "date": "2025-04-09",
    "note": "Cryo-EM structure of the complex IR with four insulin"
  },
  {
    "id": "8Z4B",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.50 \u00c5",
    "date": "2024-05-22",
    "note": "Crystal structure of LysB22-AspB28 insulin analog at ambient structure"
  },
  {
    "id": "8ZBE",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.24 \u00c5",
    "date": "2024-07-10",
    "note": "cryo-EM structure of the octreotide-bound SSTR5-Gi complex"
  },
  {
    "id": "8ZCJ",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.09 \u00c5",
    "date": "2024-07-10",
    "note": "Cryo-EM structure of the pasireotide-bound SSTR5-Gi complex"
  },
  {
    "id": "8ZEB",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.95 \u00c5",
    "date": "2025-01-29",
    "note": "Crystal structure of BCL-XL bound by cp-B6X-4"
  },
  {
    "id": "8ZRT",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.62 \u00c5",
    "date": "2024-10-02",
    "note": "Cryo-EM structure focused on the receptor of the ET-1 bound ETBR-DNGI complex"
  },
  {
    "id": "9AUC",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "2.40 \u00c5",
    "date": "2024-04-24",
    "note": "Human Amylin1 Receptor in Complex with Gs and human Calcitonin Gene-Related Peptide"
  },
  {
    "id": "9B0A",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.87 \u00c5",
    "date": "2025-03-26",
    "note": "GA10 nanobody bound to 2C7 peptide mimitope of Neisseria gonorrhoeae lipooligosaccharide"
  },
  {
    "id": "9B0Z",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.41 \u00c5",
    "date": "2024-07-31",
    "note": "Structure of Optineurin bound to HOIP NZF1 domain and M1-linked diubiquitin, crystal form 2"
  },
  {
    "id": "9BAF",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2024-07-03",
    "note": "Solution NMR structure of conofurin-Delta"
  },
  {
    "id": "9BCQ",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.10 \u00c5",
    "date": "2024-11-27",
    "note": "Extracellular domain of GC-A bound to ANP"
  },
  {
    "id": "9BFL",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2024-06-05",
    "note": "Solution structure of the scorpion toxin omega-Buthitoxin-Hf1a"
  },
  {
    "id": "9BHN",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2024-08-21",
    "note": "Solution NMR structure of halichondamide A, a fused bicyclic cysteine knot undecapeptide from the marine sponge Halichondria bowerbanki"
  },
  {
    "id": "9BI3",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.00 \u00c5",
    "date": "2025-03-05",
    "note": "Crystal structure of macrocycle containing Abeta17-23 (LVF(a-Me-F)AED) and Abeta30-36 (AIIGL(ORN)V)"
  },
  {
    "id": "9BLB",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.20 \u00c5",
    "date": "2025-04-16",
    "note": "Human Calcitonin Receptor in Complex with Gs and Cagrilintide Backbone (non-acylated) in bypass conformation"
  },
  {
    "id": "9BLC",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.30 \u00c5",
    "date": "2025-04-16",
    "note": "Human Calcitonin Receptor in Complex with Gs and Cagrilintide Backbone (non-acylated) in CT-like conformation"
  },
  {
    "id": "9BLW",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.20 \u00c5",
    "date": "2025-04-16",
    "note": "Human amylin1 Receptor in complex with Gs and Cagrilintide backbone (non-acylated)"
  },
  {
    "id": "9BP3",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "2.20 \u00c5",
    "date": "2025-04-23",
    "note": "Human Amylin1 Receptor in complex with Gs and cagrilintide"
  },
  {
    "id": "9BQ3",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "2.80 \u00c5",
    "date": "2025-04-23",
    "note": "Human Amylin2 Receptor in Complex with Gs and Cagrilintide"
  },
  {
    "id": "9BS0",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.30 \u00c5",
    "date": "2024-12-25",
    "note": "YphC-treated 45SYphC particle. Class 5"
  },
  {
    "id": "9BTW",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.00 \u00c5",
    "date": "2025-04-16",
    "note": "Human Amylin3 Receptor in complex with Gs and cagrilintide"
  },
  {
    "id": "9BUB",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "2.30 \u00c5",
    "date": "2025-04-23",
    "note": "Human calcitonin Receptor in complex with Gs and cagrilintide in the bypass conformation"
  },
  {
    "id": "9BUC",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.40 \u00c5",
    "date": "2025-04-23",
    "note": "Human calcitonin Receptor in complex with Gs and cagrilintide in the bypass conformation (repeat)"
  },
  {
    "id": "9BUD",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "2.50 \u00c5",
    "date": "2025-04-23",
    "note": "Human calcitonin Receptor in complex with Gs and cagrilintide in the CT-like conformation"
  },
  {
    "id": "9BUE",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.60 \u00c5",
    "date": "2025-04-16",
    "note": "Human calcitonin Receptor in complex with Gs and cagrilintide in the CT-like conformation (repeat)"
  },
  {
    "id": "9BV0",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2024-05-29",
    "note": "NMR structure of the Z0 CCHC zinc-finger of transcription repressor Bcl11A"
  },
  {
    "id": "9C4G",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "2.53 \u00c5",
    "date": "2024-08-21",
    "note": "Cutibacterium acnes 50S ribosomal subunit with Clindamycin bound"
  },
  {
    "id": "9CDZ",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.72 \u00c5",
    "date": "2025-04-16",
    "note": "Crystal Structure of MDM2-Peptide Complex"
  },
  {
    "id": "9CQA",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.74 \u00c5",
    "date": "2025-02-19",
    "note": "Structure of antibody 1G1 bound to the central conserved region of RSV G"
  },
  {
    "id": "9CQB",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.50 \u00c5",
    "date": "2025-02-19",
    "note": "Antibody 1G8 bound to the central conserved domain of RSV G"
  },
  {
    "id": "9CQD",
    "method": "X-RAY DIFFRACTION",
    "resolution": "3.10 \u00c5",
    "date": "2025-02-19",
    "note": "Antibody 2B11 bound to the central conserved domain of RSV G"
  },
  {
    "id": "9CRB",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2024-10-16",
    "note": "Structure of Avt1, a novel peptide from the sea anemone Aulactinia veratra"
  },
  {
    "id": "9CY4",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.41 \u00c5",
    "date": "2025-04-16",
    "note": "Outward-facing cyclosporine A-bound OATP1B1 with sybody 5 (Sb5)"
  },
  {
    "id": "9DBN",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "2.76 \u00c5",
    "date": "2025-02-19",
    "note": "Tarantula venom peptide Protoxin-I bound to full-length human voltage-gated sodium channel 1.8 (NaV1.8)"
  },
  {
    "id": "9DIN",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.64 \u00c5",
    "date": "2025-04-16",
    "note": "Structure of ClpC1 N-terminal Domain complexed with semi-synthetic Rufomycin analog"
  },
  {
    "id": "9DUU",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.40 \u00c5",
    "date": "2024-10-23",
    "note": "Cryo-EM structure of recombinant wildtype ACTA1 phalloidin-stabilized F-actin"
  },
  {
    "id": "9DUV",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.30 \u00c5",
    "date": "2024-10-23",
    "note": "Cryo-EM structure of recombinant R254H ACTA1 phalloidin-stabilized F-actin"
  },
  {
    "id": "9DZ0",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.10 \u00c5",
    "date": "2025-03-26",
    "note": "FKFGG(DPN)(DGL)(DPN)GG, a cyclic peptide with mixed chirality"
  },
  {
    "id": "9DZ1",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.10 \u00c5",
    "date": "2025-03-26",
    "note": "VVGGVVGG cyclic peptide"
  },
  {
    "id": "9E3V",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2025-01-08",
    "note": "Backbone Modification in the Fungal Defensin Plectasin: Prototype NZ2114"
  },
  {
    "id": "9E3W",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2025-01-08",
    "note": "Backbone Modification in the Fungal Defensin Plectasin: beta3-Residues in the helix"
  },
  {
    "id": "9E3X",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2025-01-08",
    "note": "Backbone Modification in the Fungal Defensin Plectasin: Calpha-methyl-residues in the helix"
  },
  {
    "id": "9E3Y",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2025-01-08",
    "note": "Backbone Modification in the Fungal Defensin Plectasin: D- and Calpha-methyl-residues in the turns"
  },
  {
    "id": "9E3Z",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2025-01-08",
    "note": "Backbone Modification in the Fungal Defensin Plectasin: Calpha-methyl-residues in the helix, D- and Calpha-methyl-residues in the turns"
  },
  {
    "id": "9EAU",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.06 \u00c5",
    "date": "2025-04-23",
    "note": "RRV DKTA VLP in complex with VLDLR-LBD-Fc"
  },
  {
    "id": "9EEC",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.58 \u00c5",
    "date": "2025-04-09",
    "note": "X-ray crystallographic structure of a beta-hairpin peptide mimic derived from Abeta 16-36 ORN-LYS-LEU-VAL-H7V-PHE-ALA-GLU-ORN-ALA-ILE-ILE-GLY-LEU-MET-VAL"
  },
  {
    "id": "9EH4",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2025-04-23",
    "note": "Solution structure of alpha conotoxin LvID"
  },
  {
    "id": "9EP7",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2025-03-26",
    "note": "Poecitoxin-1a from Poecilotheria subfusca spider, a new potent peptide blocker of the human Cav1.2 channel subtype"
  },
  {
    "id": "9EWK",
    "method": "X-RAY DIFFRACTION",
    "resolution": "0.70 \u00c5",
    "date": "2024-09-04",
    "note": "Solvent organization in ultrahigh-resolution protein crystal structure at room temperature"
  },
  {
    "id": "9FJM",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.65 \u00c5",
    "date": "2024-09-11",
    "note": "Cryo-EM structure of the phalloidin-bound pointed end of the actin filament."
  },
  {
    "id": "9FJU",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.84 \u00c5",
    "date": "2024-09-11",
    "note": "Structure of the DNase I- and phalloidin-bound pointed end of F-actin (conformer 1)"
  },
  {
    "id": "9FJY",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "3.79 \u00c5",
    "date": "2024-09-11",
    "note": "Structure of the DNase I- and phalloidin-bound pointed end of F-actin (conformer 2)."
  },
  {
    "id": "9GDL",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2024-09-25",
    "note": "Trp-cage fortified Tc5b-Exenatide chimera with disulfide bond cyclization (Ex-4-Tc5bCC) at 277K"
  },
  {
    "id": "9GDN",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2024-09-25",
    "note": "Trp-cage fortified Tc5b-Exenatide chimera with disulfide bond cyclization (Ex-4-Tc5bCC) at 288K"
  },
  {
    "id": "9GDT",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2024-09-25",
    "note": "Trp-cage fortified Tc5b-Exenatide chimera with disulfide bond cyclization (Ex-4-Tc5bCC) at 299K"
  },
  {
    "id": "9GDU",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2024-09-25",
    "note": "Trp-cage fortified Tc5b-Exenatide chimera with disulfide bond cyclization (Ex-4-Tc5bCC) at 310K"
  },
  {
    "id": "9GE1",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2024-09-25",
    "note": "Trp-cage fortified Tc5b-Exenatide chimera with disulfide bond cyclization (Ex-4-Tc5bCC) at 321K"
  },
  {
    "id": "9GHA",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "2.24 \u00c5",
    "date": "2025-03-26",
    "note": "Fusidic acid-locked Escherichia coli 70S ribosome with Staphylococcus aureus EF-G and a tRNA in pe/E chimeric state (CHI)"
  },
  {
    "id": "9HVN",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.05 \u00c5",
    "date": "2025-02-05",
    "note": "Atomic resolution crystal structure of the hexameric antimicrobial peptide Magainin-2"
  },
  {
    "id": "9INS",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.70 \u00c5",
    "date": "1991-11-07",
    "note": "MONOVALENT CATION BINDING IN CUBIC INSULIN CRYSTALS"
  },
  {
    "id": "9J1P",
    "method": "ELECTRON MICROSCOPY",
    "resolution": "2.99 \u00c5",
    "date": "2025-02-26",
    "note": "Cryo-EM structure of the g1:Ox-bound human GLP-1R-Gs complex"
  },
  {
    "id": "9J5F",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2025-02-19",
    "note": "Solution structure of disulfide-directed multicyclic peptides with n-terminal helix"
  },
  {
    "id": "9J5H",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2025-02-19",
    "note": "Solution structure of disulfide-directed multicyclic peptides with affinity to pdl1"
  },
  {
    "id": "9JU1",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.45 \u00c5",
    "date": "2024-12-25",
    "note": "Helix-loop-helix peptide (VS42-LR3) in complex with VEGF-A"
  },
  {
    "id": "9KK0",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2024-12-18",
    "note": "Solution structure of kappa-conotoxin RIIIJ"
  },
  {
    "id": "9KK3",
    "method": "SOLUTION NMR",
    "resolution": "N/A",
    "date": "2024-12-18",
    "note": "Solution structure of kappa-conotoxin RIIIK"
  },
  {
    "id": "9KKU",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.46 \u00c5",
    "date": "2024-12-11",
    "note": "Helix-loop-helix peptide (M49) in complex with VEGF-A"
  },
  {
    "id": "9L6B",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.30 \u00c5",
    "date": "2025-01-29",
    "note": "A ROS-Sensing Transcription Factor Promotes RpoS Accumulation to Resist Oxidative Stress"
  },
  {
    "id": "9LVC",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.30 \u00c5",
    "date": "2025-02-26",
    "note": "Temperature induces a shift from the dihexamer to the hexamer form of insulin"
  },
  {
    "id": "9LVD",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.85 \u00c5",
    "date": "2025-02-26",
    "note": "Temperature induces a shift from the dihexamer to the hexamer form of insulin (200K)"
  },
  {
    "id": "9LVE",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.88 \u00c5",
    "date": "2025-02-26",
    "note": "Temperature induces a shift from the dihexamer to the hexamer form of insulin (300K)"
  },
  {
    "id": "9LVX",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.70 \u00c5",
    "date": "2025-02-26",
    "note": "di-hexamer form of insulin detemir at ambient temperature"
  },
  {
    "id": "9LVY",
    "method": "X-RAY DIFFRACTION",
    "resolution": "2.85 \u00c5",
    "date": "2025-02-26",
    "note": "hexamer form of insulin detemir at ambient temperature"
  },
  {
    "id": "9M4X",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.40 \u00c5",
    "date": "2025-03-12",
    "note": "Cubic insulin crystal, Esrapid, at pH 2"
  },
  {
    "id": "9M4Y",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.40 \u00c5",
    "date": "2025-03-12",
    "note": "Cubic insulin crystal, Esrapid, at pH 3"
  },
  {
    "id": "9M4Z",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.50 \u00c5",
    "date": "2025-03-12",
    "note": "Cubic insulin crystal, Esrapid, at pH 4"
  },
  {
    "id": "9M50",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.40 \u00c5",
    "date": "2025-03-12",
    "note": "Cubic insulin crystal, Esrapid, at pH 5"
  },
  {
    "id": "9M51",
    "method": "X-RAY DIFFRACTION",
    "resolution": "1.76 \u00c5",
    "date": "2025-03-12",
    "note": "Cubic insulin crystal, Esrapid, at pH 6"
  }
];