
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import X2 from "./components/X2";
import X5 from "./components/X5";
import X1 from "./components/X1";
import X7 from "./components/X7";
import X6 from "./components/X6";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/2">
          <X2 {...x2Data} />
        </Route>
        <Route path="/5">
          <X5 {...x5Data} />
        </Route>
        <Route path="/:path(|1)">
          <X1 {...x1Data} />
        </Route>
        <Route path="/7">
          <X7 {...x7Data} />
        </Route>
        <Route path="/6">
          <X6 {...x6Data} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const header4Data = {
    ellipse12: "/img/group-13@2x.svg",
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

const frame518DefaultData = {
    children: "1K",
};

const frame518Variant2Data = {
    children: "10K",
};

const frame518Variant3Data = {
    children: "11K",
};

const frame518Variant4Data = {
    children: "22K",
};

const frame518Variant22Data = {
    children: "41K",
};

const frame518Default2Data = {
    children: "2K",
    className: "frame-518-variant6",
};

const frame518Default3Data = {
    children: "4K",
    className: "frame-518-variant7",
};

const frame518Default4Data = {
    children: "43K",
    className: "frame-518-variant7-1",
};

const frame518Default5Data = {
    children: "1K",
    className: "frame-518-variant7-2",
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

const property1NehativeInsight222Data = {
    className: "insights-1",
};

const property1NehativeInsightData = {
    children: "Error",
    className: "",
};

const frame519ErrorDDSDefaultData = {
    property1NehativeInsightProps: property1NehativeInsightData,
};

const frame519Default10Data = {
    className: "frame-519-variant7-3",
};

const frame518Default6Data = {
    children: "9K",
    className: "frame-518-variant7-3",
};

const frame519DraftDefault2Data = {
    className: "frame-519-draft-default-1",
};

const frame519DraftDefault3Data = {
    className: "frame-519-draft-default-2",
};

const x2Data = {
    header4Props: header4Data,
    frame139tagsProps: frame139tagsData,
    frame280Variant4Props: frame280Variant4Data,
    frame280Variant42Props: frame280Variant42Data,
    frame139tags2Props: frame139tags2Data,
    frame518DefaultProps: frame518DefaultData,
    frame518Variant2Props: frame518Variant2Data,
    frame518Variant3Props: frame518Variant3Data,
    frame518Variant4Props: frame518Variant4Data,
    frame518Variant22Props: frame518Variant22Data,
    frame518Default2Props: frame518Default2Data,
    frame518Default3Props: frame518Default3Data,
    frame518Default4Props: frame518Default4Data,
    frame518Default5Props: frame518Default5Data,
    frame519DefaultProps: frame519Default2Data,
    frame519Default2Props: frame519Default3Data,
    frame519Default3Props: frame519Default4Data,
    frame519Default4Props: frame519Default5Data,
    frame519Default5Props: frame519Default6Data,
    frame519Default6Props: frame519Default7Data,
    frame519Default7Props: frame519Default8Data,
    frame519Default8Props: frame519Default9Data,
    property1NehativeInsight22Props: property1NehativeInsight222Data,
    frame519ErrorDDSDefaultProps: frame519ErrorDDSDefaultData,
    frame519Default9Props: frame519Default10Data,
    frame518Default6Props: frame518Default6Data,
    frame519DraftDefaultProps: frame519DraftDefault2Data,
    frame519DraftDefault2Props: frame519DraftDefault3Data,
};

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

const group262Data = {
    className: "group-26-1",
};

const header3Data = {
    group26Props: group262Data,
};

const frame139Default2Data = {
    className: "frame-139-default-1",
};

const frame139tags3Data = {
    children: "Inactive 15",
    className: "frame-139tags-1",
};

const frame280Variant62Data = {
    className: "frame-280-variant6-1",
};

const frame280Variant43Data = {
    children: "Ready 12",
    className: "frame-280-variant4-2",
};

const frame280Variant44Data = {
    children: "Vanti Model 12",
    className: "frame-280-variant4-3",
};

const frame280Variant32Data = {
    className: "frame-280-variant3-1",
};

const frame139tags4Data = {
    children: "Draft 68",
    className: "frame-280-variant5-1",
};

const frame519Default11Data = {
    className: "frame-519-default-1",
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

const frame518Default7Data = {
    children: "21K",
    className: "frame-518-default-1",
};

const frame518Default8Data = {
    children: "21K",
    className: "frame-518-variant2",
};

const frame518Default9Data = {
    children: "21K",
    className: "frame-518-variant3",
};

const frame518Default10Data = {
    children: "21K",
    className: "frame-518-variant4",
};

const frame518Default11Data = {
    children: "21K",
    className: "frame-518-variant5",
};

const frame518Default12Data = {
    children: "21K",
    className: "frame-518-variant6-1",
};

const frame518Default13Data = {
    children: "21K",
    className: "frame-518-variant7-4",
};

const frame518Default14Data = {
    children: "21K",
    className: "frame-518-variant7-5",
};

const frame518Default15Data = {
    children: "21K",
    className: "frame-518-variant7-6",
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
    className: "",
};

const frame519ErrorDDSDefault3Data = {
    className: "frame-519-error-dds-default-2",
    property1NehativeInsightProps: property1NehativeInsight3Data,
};

const property1NehativeInsight5Data = {
    children: "Error",
    className: "insights-8",
};

const frame519ErrorDDSDefault4Data = {
    className: "frame-519-new-model-default",
    property1NehativeInsightProps: property1NehativeInsight5Data,
};

const property1NehativeInsight6Data = {
    children: "Error",
    className: "insights-9",
};

const frame519ErrorDDSDefault5Data = {
    className: "frame-519-error-dds-default-3",
    property1NehativeInsightProps: property1NehativeInsight6Data,
};

const property1NehativeInsight223Data = {
    className: "insights-2",
};

const frame519ReadyDefaultData = {
    property1NehativeInsight22Props: property1NehativeInsight223Data,
};

const property1NehativeInsight323Data = {
    className: "insights-4",
};

const property1NehativeInsight324Data = {
    className: "insights-5",
};

const frame519Default20Data = {
    className: "frame-519-variant7-7",
};

const frame518Default16Data = {
    children: "21K",
    className: "frame-518-variant7-7",
};

const frame519DraftDefault5Data = {
    className: "frame-519-draft-default-4",
};

const frame519DraftDefault6Data = {
    className: "frame-519-draft-default-5",
};

const frame61Data = {
    spanText: <>12:45 | 17 jun 21<br /></>,
};

const frame612Data = {
    spanText: <>Deployment<br />12:45 | 17 jun 21<br /></>,
    className: "frame-68-1",
};

const x1Data = {
    stageName: "SG_AXI",
    number: "41",
    number2: "103",
    state: "1D",
    text30: "24,088",
    text31: "Predictions Requests",
    text32: "+ 12%",
    state2: "Station",
    spanText: "Last ",
    spanText2: "Pred",
    spanText3: "iction",
    spanText4: "Avg. ",
    spanText5: "Pre",
    spanText6: <>dictions<br /></>,
    spanText7: "Per Day",
    attention: "High Severity Data Drift",
    attention2: "Data Drift Shutdown",
    attention3: "Medium severity Data Drift",
    attention4: "Low Severity Data Drift",
    attention5: "Ready",
    stage: "Create new station",
    spanText8: "1H   ",
    spanText9: "1D",
    spanText10: "   1W   1M   1Y        ",
    spanText11: "by deployment",
    state3: "Label",
    action: "Data Drift Detected",
    state4: "102K",
    spanText12: <>21 minutes ago<br /></>,
    spanText13: "12:45 | 17 jun 21",
    header3Props: header3Data,
    frame139DefaultProps: frame139Default2Data,
    frame139tagsProps: frame139tags3Data,
    frame280Variant6Props: frame280Variant62Data,
    frame280Variant4Props: frame280Variant43Data,
    frame280Variant42Props: frame280Variant44Data,
    frame280Variant3Props: frame280Variant32Data,
    frame139tags2Props: frame139tags4Data,
    frame519DefaultProps: frame519Default11Data,
    frame519Default2Props: frame519Default12Data,
    frame519Default3Props: frame519Default13Data,
    frame519Default4Props: frame519Default14Data,
    frame519Default5Props: frame519Default15Data,
    frame519Default6Props: frame519Default16Data,
    frame519Default7Props: frame519Default17Data,
    frame519Default8Props: frame519Default18Data,
    frame519Default9Props: frame519Default19Data,
    frame518DefaultProps: frame518Default7Data,
    frame518Default2Props: frame518Default8Data,
    frame518Default3Props: frame518Default9Data,
    frame518Default4Props: frame518Default10Data,
    frame518Default5Props: frame518Default11Data,
    frame518Default6Props: frame518Default12Data,
    frame518Default7Props: frame518Default13Data,
    frame518Default8Props: frame518Default14Data,
    frame518Default9Props: frame518Default15Data,
    frame519ErrorDDSDefaultProps: frame519ErrorDDSDefault2Data,
    frame519ErrorDDSDefault2Props: frame519ErrorDDSDefault3Data,
    frame519ErrorDDSDefault3Props: frame519ErrorDDSDefault4Data,
    frame519ErrorDDSDefault4Props: frame519ErrorDDSDefault5Data,
    frame519ReadyDefaultProps: frame519ReadyDefaultData,
    property1NehativeInsight32Props: property1NehativeInsight323Data,
    property1NehativeInsight322Props: property1NehativeInsight324Data,
    frame519Default10Props: frame519Default20Data,
    frame518Default10Props: frame518Default16Data,
    frame519DraftDefaultProps: frame519DraftDefault5Data,
    frame519DraftDefault2Props: frame519DraftDefault6Data,
    frame61Props: frame61Data,
    frame612Props: frame612Data,
};

const header22Data = {
    className: "header-3",
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
    header2Props: header22Data,
    group1082Props: group10822Data,
    group1084Props: group10842Data,
    group1083Props: group10832Data,
    group961Props: group9612Data,
    group1087Props: group10872Data,
    property11Props: property113Data,
    property112Props: property114Data,
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

const header42Data = {
    ellipse12: "/img/group-13-4@2x.svg",
    className: "header-1",
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
    text51: "| Each dot represents a single image.",
    percent: "2.5%",
    text49: "of the samples were predicted by the model to be failed units.",
    improvementPossibil: "Fail Rate",
    improvementPossibil2: "Insight",
    text50: <>Class 0 consists of Outliers only - rebuilding a model without it will result in a better model for this stage.<br /><br />Class 0 consists of Outliers only - rebuilding a model without it will result in a better model for this stage<br /><br />Class 0 consists of Outliers only - rebuilding a model without it will result in a better model for this stage</>,
    trainNewModel: "Train New Model",
    spanText15: "Low",
    spanText16: " Severity Data Drift Detected ",
    spanText17: <>12:45, 12 July (12 min ago) <br />This drift seems to cause suboptimal model performance and requires model adaptation.</>,
    model1: "Model 1",
    live: "Live",
    trainNewModel2: "Train New Model",
    model2: "Model 2",
    text53: "2,127",
    noOfSamples: "No. of Samples",
    noOfClusters: "No. of Clusters",
    number3: "3",
    recommended: "Recommended",
    vantiNewModel: "vanti new model",
    text54: "Supervised-efd-data-kpi-240-1231236356365361823123.csv",
    number4: "0",
    text55: "0.841",
    silhouetteScore: "Silhouette Score",
    number5: "100",
    sg_Axi: "SG_AXI",
    spanText18: "Models ",
    spanText19: "r",
    spanText20: "eview",
    property1DefaultProps: property1Default2Data,
    cluster2Props: cluster2Data,
    cluster22Props: cluster22Data,
    header4Props: header42Data,
};

