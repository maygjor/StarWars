import React from "react";
import getMaxCrawl from "./../Services/maxCrawl";
import getMaxAppear from "./../Services/maxAppear";
import getMaxSpecies from "./../Services/maxSpecies";
import getMaxPilots from "./../Services/maxPilots";
import "./table.css";
export default class Table extends React.Component {
  maxCrawlData = [];
  getMaxAppear = [];
  constructor(props) {
    super(props);
    this.state = {
      maxCrawl: "",
      maxAppear: [],
      maxSpecies: [],
      maxPilots: []
    };
  }
  loadAllData = async () => {
    //call dataSources
    let maxCrawl = await getMaxCrawl();
    let maxAppear = await getMaxAppear();
    let maxSpecies = await getMaxSpecies();
    let maxPilots = await getMaxPilots();
    //...
    //map dataSources to state
    this.setState({
      maxCrawl: maxCrawl,
      maxAppear: [].concat(maxAppear),
      maxSpecies: [].concat(maxSpecies),
      maxPilots: [].concat(maxPilots)
    });
    //...
  };
  componentWillMount() {
    this.loadAllData();
  }
  render() {
    return (
      <div>
        <div className="questions ">
          <h3 className="Q">
            Which of all Star Wars movies has the longest opening crawl?
          </h3>
          <h3 className="A">{this.state.maxCrawl}</h3>
        </div>
        <div className="questions">
          <h3 className="Q">
            What character (person) appeared in most of the Star Wars films?
          </h3>
          {this.state.maxAppear.map((person, i) => (
            <h3 key={i} className="A">
              {person.name}
            </h3>
          ))}
        </div>
        <div className="questions">
          <h3 className="Q">
            What species (i.e. characters that belong to certain species)
            appeared in the most number of Star Wars films?
          </h3>
          {this.state.maxSpecies.map((item, i) =>
            i < 3 ? (
              <h3 key={i} className="A">
                {item.specieName + "(" + item.appearCount + ")"}
              </h3>
            ) : null
          )}
        </div>
        <div className="questions">
          <h3 className="Q">
            What planet in Star Wars universe provided largest number of vehicle
            pilots?
          </h3>
          {this.state.maxPilots.map((pilot, i) => (
            <h3 key={i} className="A">
              {pilot.planet +
                " - Pilots:(" +
                pilot.planetPilotsCount +
                ") " +
                pilot.pilotName +
                " - " +
                pilot.specie}
            </h3>
          ))}
        </div>
      </div>
    );
  }
}
