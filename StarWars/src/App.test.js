// import React from "react";
// import { render } from "@testing-library/react";
// import App from "./App";
// import Table from "./table/table";

// I couldnt procced with test without admin , I needed yarn (to run 'yarn add --dev jest babel-jest @babel/preset-env @babel/preset-react react-test-renderer)'

// import { getMaxCrawl } from "./../Services/maxCrawl";
// import { getMaxAppear } from "./../Services/maxAppear";
// import { getMaxSpecies } from "./../Services/maxSpecies";
// import { getMaxPilots } from "./../Services/maxPilots";

// test("renders learn react link", () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/Star Wars/i);
//   expect(linkElement).toBeInTheDocument();
// });

// describe("getMaxCrawl has data", () => {
//   it("expects data from the service getMaxCrawl", async () => {
//     let maxCrawl = await getMaxCrawl();
//     //expects data from the service
//     expect(maxCrawl).toBeCalledWith(expect.anything());
//   });
// });
// describe("getMaxAppear has data", () => {
//   it("expects data from the service getMaxAppear", async () => {
//     let maxAppear = await getMaxAppear();
//     //expects data from the service
//     expect(maxAppear).toBeCalledWith(expect.anything());
//   });
// });
// describe("getMaxSpecies has data", () => {
//   it("expects data from the service getMaxSpecies", async () => {
//     let maxSpecies = await getMaxSpecies();
//     //expects data from the service
//     expect(maxSpecies).toBeCalledWith(expect.anything());
//   });
// });
// describe("getMaxPilots has data", () => {
//   it("expects data from the service getMaxPilots", async () => {
//     let maxPilots = await getMaxPilots();
//     expect(maxPilots).toBeCalledWith(expect.anything());
//   });
// });
