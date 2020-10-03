// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { getMenu } from "../../../util/getMenu";
import { ScatterChart } from "../../../util/ScatterChart";
import { IInterpretData } from "../IInterpretData";

export function describeDataPointChart(dataShape: IInterpretData): void {
  describe("Individual datapoints chart", () => {
    const props = {
      chart: (undefined as unknown) as ScatterChart,
      dataShape
    };
    beforeEach(() => {
      getMenu(
        "Individual Feature Importance & What-If",
        "#DashboardPivot"
      ).click();
      props.chart = new ScatterChart("#IndividualFeatureImportanceChart");
    });
    it("should have y axis label", () => {
      cy.get(
        '#IndividualFeatureImportanceChart div[class*="rotatedVerticalBox"]'
      ).should("contain.text", "Y-value");
    });
    it("should have x axis label", () => {
      cy.get(
        '#IndividualFeatureImportanceChart div[class*="horizontalAxis"] span[class*="boldText"]'
      ).should("contain.text", "X-value");
    });
    it("should render right number of points", () => {
      expect(props.chart.Elements.length).equals(dataShape.datapoint);
    });
  });
}