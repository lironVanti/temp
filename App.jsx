
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import X5 from "./components/X5";
import X1 from "./components/X1";
import X7 from "./components/X7";
import X2 from "./components/X2";
import X6 from "./components/X6";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/5">
          <X5 {...x5Data} />
        </Route>
        <Route path="/:path(|1)">
          <X1
            stageName="SG_AXI"
            state="Label"
            group1049Props={x1Data.group1049Props}
            frame519DraftDefaultProps={x1Data.frame519DraftDefaultProps}
            frame519DraftDefault2Props={x1Data.frame519DraftDefault2Props}
            frame61Props={x1Data.frame61Props}
            frame612Props={x1Data.frame612Props}
          />
        </Route>
        <Route path="/7">
          <X7 {...x7Data} />
        </Route>
        <Route path="/2">
          <X2 {...x2Data} />
        </Route>
        <Route path="/6">
          <X6 {...x6Data} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const group32Data = {
    className: "",
};

const group1082Data = {
    group32Props: group32Data,
};

const group7092Data = {
    className: "group-715",
};

const group1087Data = {
    group709Props: group7092Data,
};

const silhouetteScoreData = {
    failuresDetected: "Failures Detected",
    number: "12",
};

const silhouetteScore2Data = {
    failuresDetected: "Predict Calls",
    number: "145",
    className: "no-of-clusters",
};

const silhouetteScore3Data = {
    failuresDetected: "Feedback Calls",
    number: "145",
    className: "no-of-samples",
};

const property11Data = {
    silhouetteScoreProps: silhouetteScoreData,
    silhouetteScore2Props: silhouetteScore2Data,
    silhouetteScore3Props: silhouetteScore3Data,
};

const silhouetteScore4Data = {
    failuresDetected: "Failures Detected",
    number: "12",
};

const silhouetteScore5Data = {
    failuresDetected: "Predict Calls",
    number: "145",
    className: "no-of-clusters-1",
};

const silhouetteScore6Data = {
    failuresDetected: "Feedback Calls",
    number: "145",
    className: "no-of-samples-1",
};

const property112Data = {
    silhouetteScoreProps: silhouetteScore4Data,
    silhouetteScore2Props: silhouetteScore5Data,
    silhouetteScore3Props: silhouetteScore6Data,
};

const x5Data = {
    text10: "0.25",
    text11: "0.20",
    text12: "0.15",
    text13: "0.10",
    text14: "0.05",
    text15: "0.00",
    number: "35",
    number2: "40",
    number3: "45",
    number4: "50",
    file1: "file 1",
    file2: "file 2",
    number5: "55",
    spanText: <>Data Drift detected<br /></>,
    spanText2: "| v101 distribution",
    spanText3: `Feature "`,
    spanText4: "v101",
    spanText5: `" has been drifted for the past 24 hours, ranging from `,
    spanText6: "37-50",
    spanText7: ", instead of the original ranges that were between 33-42.",
    text17: "This drift seems to cause suboptimal model performance and requires model adaptation.",
    text19: "0.25",
    text20: "0.20",
    text21: "0.15",
    text22: "0.10",
    text23: "0.05",
    text24: "0.00",
    number6: "35",
    number7: "40",
    number8: "45",
    number9: "50",
    file12: "file 1",
    file22: "file 2",
    number10: "55",
    spanText8: <>Data Drift detected<br /></>,
    spanText9: "| v101 distribution",
    spanText10: `Feature "`,
    spanText11: "v101",
    spanText12: `" has been drifted for the past 24 hours, ranging from `,
    spanText13: "37-50",
    spanText14: ", instead of the original ranges that were between 33-42.",
    text26: "This drift seems to cause suboptimal model performance and requires model adaptation.",
    viewLess: "VIEW LESS",
    group1082Props: group1082Data,
    group1087Props: group1087Data,
    property11Props: property11Data,
    property112Props: property112Data,
};

const frame139tagsData = {
    children: "Inactive 15",
};

const frame280Variant4Data = {
    children: "Ready 12",
};

const frame280Variant42Data = {
    children: "Vanti Model 12",
    className: "frame-280-variant4-1",
};

const frame139tags2Data = {
    children: "Draft 68",
    className: "frame-280-variant5",
};

const frame519Default2Data = {
    className: "frame-519-variant2",
};

const frame519Default3Data = {
    className: "frame-519-variant3",
};

const frame519Default4Data = {
    className: "frame-519-variant4",
};

const frame519Default5Data = {
    className: "frame-519-variant5",
};

const frame519Default6Data = {
    className: "frame-519-variant6",
};

const frame519Default7Data = {
    className: "frame-519-variant7",
};

const frame519Default8Data = {
    className: "frame-519-variant7-1",
};

const frame519Default9Data = {
    className: "frame-519-variant7-2",
};

const frame518Default2Data = {
    className: "frame-518-variant2",
};

const frame518Default3Data = {
    className: "frame-518-variant3",
};

const frame518Default4Data = {
    className: "frame-518-variant4",
};

const frame518Default5Data = {
    className: "frame-518-variant5",
};

const frame518Default6Data = {
    className: "frame-518-variant6",
};

const frame518Default7Data = {
    className: "frame-518-variant7",
};

const frame518Default8Data = {
    className: "frame-518-variant7-1",
};

const frame518Default9Data = {
    className: "frame-518-variant7-2",
};

const property1NehativeInsightData = {
    children: "Error",
    className: "",
};

const frame519ErrorDDSDefaultData = {
    property1NehativeInsightProps: property1NehativeInsightData,
};

const property1NehativeInsight2Data = {
    children: "Error",
    className: "",
};

const frame519ErrorDDSDefault2Data = {
    className: "frame-519-error-dds-default-1",
    property1NehativeInsightProps: property1NehativeInsight2Data,
};

const property1NehativeInsight3Data = {
    children: "Error",
    className: "insights-4",
};

const frame519ErrorDDSDefault3Data = {
    className: "frame-519-new-model-default",
    property1NehativeInsightProps: property1NehativeInsight3Data,
};

const property1NehativeInsight4Data = {
    children: "Error",
    className: "insights-5",
};

const frame519ErrorDDSDefault4Data = {
    className: "frame-519-error-dds-default-2",
    property1NehativeInsightProps: property1NehativeInsight4Data,
};

const property1NehativeInsight322Data = {
    className: "insights-10",
};

const frame519Default10Data = {
    className: "frame-519-variant7-3",
};

const frame518Default10Data = {
    className: "frame-518-variant7-3",
};

const group1049Data = {
    frame139tagsProps: frame139tagsData,
    frame280Variant4Props: frame280Variant4Data,
    frame280Variant42Props: frame280Variant42Data,
    frame139tags2Props: frame139tags2Data,
    frame519DefaultProps: frame519Default2Data,
    frame519Default2Props: frame519Default3Data,
    frame519Default3Props: frame519Default4Data,
    frame519Default4Props: frame519Default5Data,
    frame519Default5Props: frame519Default6Data,
    frame519Default6Props: frame519Default7Data,
    frame519Default7Props: frame519Default8Data,
    frame519Default8Props: frame519Default9Data,
    frame518DefaultProps: frame518Default2Data,
    frame518Default2Props: frame518Default3Data,
    frame518Default3Props: frame518Default4Data,
    frame518Default4Props: frame518Default5Data,
    frame518Default5Props: frame518Default6Data,
    frame518Default6Props: frame518Default7Data,
    frame518Default7Props: frame518Default8Data,
    frame518Default8Props: frame518Default9Data,
    frame519ErrorDDSDefaultProps: frame519ErrorDDSDefaultData,
    frame519ErrorDDSDefault2Props: frame519ErrorDDSDefault2Data,
    frame519ErrorDDSDefault3Props: frame519ErrorDDSDefault3Data,
    frame519ErrorDDSDefault4Props: frame519ErrorDDSDefault4Data,
    property1NehativeInsight3Props: property1NehativeInsight322Data,
    frame519Default9Props: frame519Default10Data,
    frame518Default9Props: frame518Default10Data,
};

const frame519DraftDefault2Data = {
    className: "frame-519-draft-default-1",
};

const frame519DraftDefault3Data = {
    className: "frame-519-draft-default-2",
};

const frame61Data = {
    spanText: <>12:45 | 17 jun 21<br /></>,
};

const frame612Data = {
    spanText: <>Deployment<br />12:45 | 17 jun 21<br /></>,
    className: "frame-68",
};

const x1Data = {
    stageName: "SG_AXI",
    state: "Label",
    group1049Props: group1049Data,
    frame519DraftDefaultProps: frame519DraftDefault2Data,
    frame519DraftDefault2Props: frame519DraftDefault3Data,
    frame61Props: frame61Data,
    frame612Props: frame612Data,
};

const header3Data = {
    className: "header-1",
};

const group322Data = {
    className: "group-32-1",
};

const group10822Data = {
    className: "group-1082-1",
    group32Props: group322Data,
};

const group10842Data = {
    className: "group-1084-1",
};

const group10832Data = {
    className: "group-1083-1",
};

const group9612Data = {
    className: "group-961-1",
};

const group7094Data = {
    className: "group-715-1",
};

const group10872Data = {
    className: "group-1087-1",
    group709Props: group7094Data,
};

const silhouetteScore7Data = {
    failuresDetected: "Failures Detected",
    number: "12",
};

const silhouetteScore8Data = {
    failuresDetected: "Predict Calls",
    number: "145",
    className: "no-of-clusters-2",
};

const silhouetteScore9Data = {
    failuresDetected: "Feedback Calls",
    number: "145",
    className: "no-of-samples-2",
};

const property113Data = {
    silhouetteScoreProps: silhouetteScore7Data,
    silhouetteScore2Props: silhouetteScore8Data,
    silhouetteScore3Props: silhouetteScore9Data,
};

const silhouetteScore10Data = {
    failuresDetected: "Failures Detected",
    number: "12",
};

const silhouetteScore11Data = {
    failuresDetected: "Predict Calls",
    number: "145",
    className: "no-of-clusters-3",
};

const silhouetteScore12Data = {
    failuresDetected: "Feedback Calls",
    number: "145",
    className: "no-of-samples-3",
};

const property114Data = {
    silhouetteScoreProps: silhouetteScore10Data,
    silhouetteScore2Props: silhouetteScore11Data,
    silhouetteScore3Props: silhouetteScore12Data,
};

const x7Data = {
    headerProps: header3Data,
    group1082Props: group10822Data,
    group1084Props: group10842Data,
    group1083Props: group10832Data,
    group961Props: group9612Data,
    group1087Props: group10872Data,
    property11Props: property113Data,
    property112Props: property114Data,
};

const header22Data = {
    className: "header-3",
};

const frame139tags3Data = {
    children: "Inactive 15",
};

const frame280Variant43Data = {
    children: "Ready 12",
};

const frame280Variant44Data = {
    children: "Vanti Model 12",
    className: "frame-280-variant4-2",
};

const frame139tags4Data = {
    children: "Draft 68",
    className: "frame-280-variant5-1",
};

const frame519Default12Data = {
    className: "frame-519-variant2-1",
};

const frame519Default13Data = {
    className: "frame-519-variant3-1",
};

const frame519Default14Data = {
    className: "frame-519-variant4-1",
};

const frame519Default15Data = {
    className: "frame-519-variant5-1",
};

const frame519Default16Data = {
    className: "frame-519-variant6-1",
};

const frame519Default17Data = {
    className: "frame-519-variant7-4",
};

const frame519Default18Data = {
    className: "frame-519-variant7-5",
};

const frame519Default19Data = {
    className: "frame-519-variant7-6",
};

const frame518Default12Data = {
    className: "frame-518-variant2-1",
};

const frame518Default13Data = {
    className: "frame-518-variant3-1",
};

const frame518Default14Data = {
    className: "frame-518-variant4-1",
};

const frame518Default15Data = {
    className: "frame-518-variant5-1",
};

const frame518Default16Data = {
    className: "frame-518-variant6-1",
};

const frame518Default17Data = {
    className: "frame-518-variant7-4",
};

const frame518Default18Data = {
    className: "frame-518-variant7-5",
};

const frame518Default19Data = {
    className: "frame-518-variant7-6",
};

const property1NehativeInsight5Data = {
    children: "Error",
    className: "",
};

const frame519ErrorDDSDefault5Data = {
    property1NehativeInsightProps: property1NehativeInsight5Data,
};

const property1NehativeInsight6Data = {
    children: "Error",
    className: "",
};

const frame519ErrorDDSDefault6Data = {
    className: "frame-519-error-dds-default-4",
    property1NehativeInsightProps: property1NehativeInsight6Data,
};

const property1NehativeInsight7Data = {
    children: "Error",
    className: "insights-6",
};

const frame519ErrorDDSDefault7Data = {
    className: "frame-519-new-model-default-1",
    property1NehativeInsightProps: property1NehativeInsight7Data,
};

const property1NehativeInsight8Data = {
    children: "Error",
    className: "insights-7",
};

const frame519ErrorDDSDefault8Data = {
    className: "frame-519-error-dds-default-5",
    property1NehativeInsightProps: property1NehativeInsight8Data,
};

const property1NehativeInsight324Data = {
    className: "insights-11",
};

const frame519Default20Data = {
    className: "frame-519-variant7-7",
};

const frame518Default20Data = {
    className: "frame-518-variant7-7",
};

const group10492Data = {
    className: "group-1049",
    frame139tagsProps: frame139tags3Data,
    frame280Variant4Props: frame280Variant43Data,
    frame280Variant42Props: frame280Variant44Data,
    frame139tags2Props: frame139tags4Data,
    frame519DefaultProps: frame519Default12Data,
    frame519Default2Props: frame519Default13Data,
    frame519Default3Props: frame519Default14Data,
    frame519Default4Props: frame519Default15Data,
    frame519Default5Props: frame519Default16Data,
    frame519Default6Props: frame519Default17Data,
    frame519Default7Props: frame519Default18Data,
    frame519Default8Props: frame519Default19Data,
    frame518DefaultProps: frame518Default12Data,
    frame518Default2Props: frame518Default13Data,
    frame518Default3Props: frame518Default14Data,
    frame518Default4Props: frame518Default15Data,
    frame518Default5Props: frame518Default16Data,
    frame518Default6Props: frame518Default17Data,
    frame518Default7Props: frame518Default18Data,
    frame518Default8Props: frame518Default19Data,
    frame519ErrorDDSDefaultProps: frame519ErrorDDSDefault5Data,
    frame519ErrorDDSDefault2Props: frame519ErrorDDSDefault6Data,
    frame519ErrorDDSDefault3Props: frame519ErrorDDSDefault7Data,
    frame519ErrorDDSDefault4Props: frame519ErrorDDSDefault8Data,
    property1NehativeInsight3Props: property1NehativeInsight324Data,
    frame519Default9Props: frame519Default20Data,
    frame518Default9Props: frame518Default20Data,
};

const frame613Data = {
    spanText: <>12:45 | 17 jun 21<br /></>,
};

const frame614Data = {
    spanText: <>Deployment<br />12:45 | 17 jun 21<br /></>,
    className: "frame-68-1",
};

const x2Data = {
    stageName: "SG_AXI",
    remindMeLater: "Remind Me Later",
    learnMore: "LEARN MORE",
    spanText: "Low",
    spanText2: " Severity Data Drift Detected",
    spanText3: " ",
    spanText4: <>in Station cndscnkd<br /></>,
    spanText5: `The data structure sent to the "predict" API has been changed. If the severity of the drift changes we will update you | 12:45, 12 July (12 min ago)`,
    header2Props: header22Data,
    group1049Props: group10492Data,
    frame61Props: frame613Data,
    frame612Props: frame614Data,
};

const property1Default2Data = {
    className: "frame-500-1",
};

const property1Default3Data = {
    className: "frame-500-2",
};

const cluster2Data = {
    number: "2",
    spanText2: "T3",
    spanText4: "100",
    property1DefaultProps: property1Default3Data,
};

const property1Default4Data = {
    className: "frame-500-3",
};

const cluster22Data = {
    number: "3",
    spanText2: "w4",
    spanText4: "10",
    className: "cluster-3",
    property1DefaultProps: property1Default4Data,
};

const group263Data = {
    className: "group-26-3",
};

const header4Data = {
    ellipse12: "/img/group-13-4@2x.svg",
    group26Props: group263Data,
};

const x6Data = {
    spanText: "Clusters ",
    spanText2: "| represent different product codes.",
    number: "0",
    spanText3: "Product codes ",
    spanText4: "W4, 1A S5, L5,",
    spanText5: " and ",
    spanText6: "V9",
    spanText7: " are responsible for ",
    spanText8: "79%",
    spanText9: " of this class",
    image21011: "/img/image--210--11@2x.png",
    image21012: "/img/image--210--12@2x.png",
    image21013: "/img/image--210--13@2x.png",
    image21017: "/img/image--210--17@2x.png",
    image21018: "/img/image--210--18@2x.png",
    image21019: "/img/image--210--19@2x.png",
    image21023: "/img/image--210--23@2x.png",
    image21024: "/img/image--210--24@2x.png",
    image21025: "/img/image--210--25@2x.png",
    image21029: "/img/image--210--29@2x.png",
    image21030: "/img/image--210--30@2x.png",
    number2: "1",
    spanText10: "Product codes ",
    spanText11: "5X",
    spanText12: " and I6 are responisble for ",
    spanText13: "61% ",
    spanText14: "of this class.",
    image21014: "/img/image--210--11@2x.png",
    image21015: "/img/image--210--12@2x.png",
    image21016: "/img/image--210--13@2x.png",
    image21020: "/img/image--210--17@2x.png",
    image21021: "/img/image--210--18@2x.png",
    image21022: "/img/image--210--19@2x.png",
    image21026: "/img/image--210--23@2x.png",
    image21027: "/img/image--210--24@2x.png",
    image21028: "/img/image--210--25@2x.png",
    image21032: "/img/image--210--29@2x.png",
    image21033: "/img/image--210--30@2x.png",
    visualClustering: "Visual Clustering",
    text55: "| Each dot represents a single image.",
    percent: "2.5%",
    text53: "of the samples were predicted by the model to be failed units.",
    improvementPossibil: "Fail Rate",
    improvementPossibil2: "Insight",
    text54: <>Class 0 consists of Outliers only - rebuilding a model without it will result in a better model for this stage.<br /><br />Class 0 consists of Outliers only - rebuilding a model without it will result in a better model for this stage<br /><br />Class 0 consists of Outliers only - rebuilding a model without it will result in a better model for this stage</>,
    trainNewModel: "Train New Model",
    spanText15: "Low",
    spanText16: " Severity Data Drift Detected ",
    spanText17: <>12:45, 12 July (12 min ago) <br />This drift seems to cause suboptimal model performance and requires model adaptation.</>,
    model1: "Model 1",
    live: "Live",
    trainNewModel2: "Train New Model",
    model2: "Model 2",
    text57: "2,127",
    noOfSamples: "No. of Samples",
    noOfClusters: "No. of Clusters",
    number3: "3",
    recommended: "Recommended",
    vantiNewModel: "vanti new model",
    text58: "Supervised-efd-data-kpi-240-1231236356365361823123.csv",
    number4: "0",
    text59: "0.841",
    silhouetteScore: "Silhouette Score",
    number5: "100",
    sg_Axi: "SG_AXI",
    spanText18: "Models ",
    spanText19: "r",
    spanText20: "eview",
    property1DefaultProps: property1Default2Data,
    cluster2Props: cluster2Data,
    cluster22Props: cluster22Data,
    header4Props: header4Data,
};

