import React, { Component } from "react";
import ReactDOM from "react-dom";
import "../../css/SaleTabStyle.css";
import { Button } from "react-bootstrap";
import ChartContainer from "../Chart/ChartContainer";

class SalesTab extends React.Component {
  render() {
    ////////////// PieChart //////////////
    let piechartopt = {
      chart: {
        //plotBackgroundColor: null,
        //plotBorderWidth: null,
        //plotShadow: false,
        //type: 'pie'

        type: "pie",
        options3d: {
          enabled: true,
          alpha: 35
        }
      },
      title: {
        text: "% of Sales Amount 2017"
      },
      tooltip: {
        pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>"
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: "pointer",
          dataLabels: {
            enabled: false
          },
          showInLegend: true,
          innerSize: 100,
          depth: 45
        }
      },
      credits: {
        enabled: false
      },
      series: [
        {
          name: "Sale Amount",
          colorByPoint: true,
          data: [
            {
              name: "Feed",
              y: 56.33
            },
            {
              name: "Drug",
              y: 24.0,
              sliced: true,
              selected: true
            },
            {
              name: "Animal Breed",
              y: 14.9
            },
            {
              name: "Medical Supplies",
              y: 4.77
            }
          ]
        }
      ]
    };
    let piechart = React.createElement(ChartContainer, {
      container: "piechart",
      options: piechartopt
    });
    ////////////// PieChart //////////////

    ////////////// LineChart //////////////
    let linechartopt = {
      chart: {
        type: "line"
      },
      title: {
        text: "Monthly Sales Amount"
      },
      subtitle: {
        text: "Unit : Baht"
      },
      xAxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec"
        ]
      },
      yAxis: {
        title: {
          text: "Sales Amount"
        }
      },
      //plotOptions: {
      //    line: {
      //        dataLabels: {
      //            enabled: true
      //        },
      //        enableMouseTracking: false
      //    }
      //},
      plotOptions: {
        line: {
          allowPointSelect: true,
          cursor: "pointer",
          dataLabels: {
            enabled: false
          },
          showInLegend: true
        }
      },
      credits: {
        enabled: false
      },
      series: [
        {
          name: "Total Sales Amount",
          data: [
            70000,
            69000,
            95000,
            145000,
            184000,
            215000,
            252000,
            265000,
            233000,
            183000,
            139000,
            96000
          ]
        }
        //, {
        //    name: 'My Sales Amount',
        //    data: [39000, 42000, 57000, 85000, 119000, 152000, 170000, 166000, 142000, 103000, 66000, 48000]
        //}
      ]
    };
    let linechart = React.createElement(ChartContainer, {
      container: "linechart",
      options: linechartopt
    });
    ////////////// LineChart //////////////
    return (
      <div className="box box-primary mbottom5">
        <div className="box-header with-border">
          <h4 className="box-title">Sales</h4>
        </div>
        <hr className="hr-hrBox" />
        <section className="content">
          <div className="row">
            <div className="col-md-4 divpieChart">
              <div>
                {piechart}
              </div>
            </div>
            <div className="col-md-6">
              <div className="row">
                {linechart}
              </div>
              <div className="row">
                <div className="form-group full-height mleft10 mright10">
                  <div className="panel-heading bgdarkblue whitecolor">
                    <div className="row">
                      <h4
                        className=" panel-title pull-left b mleft8"
                        data-lang="thPlDetail"
                      >
                        Sales By Product (Baht)
                      </h4>
                    </div>
                  </div>
                  <ul className="list-group mh350" id="lstProductRec">
                    <li className="list-group-item form-control bgwhite">
                      <p className="pull-left">Chicken Feed 510</p>
                      <p className="pull-right blackcolor">75,000</p>
                    </li>
                    <li className="list-group-item form-control bglightgray">
                      <p className="pull-left">Swine Feed 510</p>
                      <p className="pull-right blackcolor">53,500</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-2 pleft0 pright0">
              <div className="container" style={{ width: "99%" }}>
                <div className="pleft10 pbottom5 ptop5 h30">
                  <label className="control-label n fsize14 dimgreycolor">
                    Monthly Order
                  </label>
                </div>
                <br />
                <div
                  id="txtMonthlyOrder"
                  data-lang="txtTotalEgg"
                  className="marginTB-10;"
                >
                  <h2 className="money r pright10 mTB0">0</h2>
                </div>
              </div>
              <div className="container" style={{ width: "99%" }}>
                <div className="pleft10 pbottom5 ptop5 h30">
                  <label className="control-label n fsize14 dimgreycolor">
                    Monthly Order (Open)
                  </label>
                </div>
                <br />
                <div
                  id="txtMonthlyOrderO"
                  data-lang="txtTotalEgg"
                  className="mTB-10;"
                >
                <h2 className="money r pright10 mTB0">0</h2>
                </div>
              </div>
              <div className="container" style={{ width: "99%" }}>
                <div className="pleft10 pbottom5 ptop5 h30">
                  <label className="control-label n fsize14 dimgreycolor">
                  Monthly Sales Amount
                  </label>
                </div>
                <br />
                <div
                  id="txtMonthlyOrderO"
                  data-lang="txtTotalEgg"
                  className="mTB-10;"
                >
                <h2 className="money r pright10 mTB0">0</h2>
                </div>
              </div>
              <div className="container" style={{ width: "99%" }}>
                <div className="pleft10 pbottom5 ptop5 h30">
                  <label className="control-label n fsize14 dimgreycolor">
                  Accumulation
                  </label>
                </div>
                <br />
                <div
                  id="txtMonthlyOrderO"
                  data-lang="txtTotalEgg"
                  className="mTB-10;"
                >
                <h2 className="money r pright10 mTB0">0</h2>
                </div>
              </div>
             
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default SalesTab;
/* <div className="box box-primary mbottom5">
        <div className="box-header with-border">
          <h4 className="box-title">Sales</h4>
        </div>
        <hr className="hr-hrBox" />
        <section className="content">
          <div className="row">
            <div className="col-md-4 divpieChart">
              <div className="divContainerPie"
                id="containerPie " 
              />
            </div>
          </div>
        </section>
      </div>*/
