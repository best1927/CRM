import React from "react";
class FeedObjlst extends React.Component {
  render() {
    let FeedobjList = [];
    FeedobjList.push({ 
      PicName: "Nine50.jpg",
      Name: "Naphat Siangsomboon",
      JobDate: "22 Jun.2017",
      JobTime: "18:26",
      EventFeed: "Email",
      iConEvent: "fa-envelope-o bg-gray ",
      Description: "Asking for some promotion",
      AssignTo: "Mr. Komsan"
    });

    FeedobjList.push({ 
        PicName: "User50.png",
        Name: "Somsri Siriwattana",
        JobDate: "22 Jun.2017",
        JobTime: "17:05",
        EventFeed: "Email",
        iConEvent: "fa-envelope-o bg-gray ",
        Description: "Contact about equipment",
        AssignTo: "Mr. Jakkrit"
      });
      FeedobjList.push({ 
        PicName: "Toey50.png",
        Name: "Pongsakorn Mettarikanon",
        JobDate: "20 Jun.2017",
        JobTime: "9:30",
        EventFeed: "Contact",
        iConEvent: "fa fa-book bg-blue",
        Description: "Details of New Contract",
        AssignTo: "Mr. Jakkrit"
      });



    let ItemList = FeedobjList.map(Feedobj => (
      <div className="list-group-item form-group NewsFeedbox">
        <div>
          <div className="row mleft5 mright5">
            <div className="pull-left">
              <img
                src={process.env.PUBLIC_URL + "/images/" + Feedobj.PicName}
                className="img-circle"
              />
            </div>
            <div>
              <a href="#">
                <label className="mleft5">{Feedobj.Name} </label>
              </a>

              <p className="pull-right dimgreycolor" >
                <button
                  type="button"
                  className="btn btn-circle-micro btn-inverse  pull-right noborder bgwhite"
                  title="Tag"
                >
                  <i className="fa fa-tag fa-1" />
                </button>
                <button
                  type="button"
                  className="btn btn-circle-micro btn-inverse   pull-right noborder bgwhite"
                  title="Unfollw"
                >
                  <i className="fa fa-times fa-1" />
                </button>
              </p>
              <div className="dimgreycolor mtop-10">
                <label className="fsize12 mleft10 n">
                {Feedobj.JobDate}    <label>  </label>
                </label>
                <i className="fa fa-clock-o f1 mright0" />
                <label className="fsize12 mleft10 n"> 
                   {Feedobj.JobTime}
                </label>
              </div>
            </div>
          </div>
          <div className="row">
            <label className="mleft75 dimgreycolor n">
              <i
                className={'fa ' + Feedobj.iConEvent + " btn-circle-sm"}
                title={Feedobj.EventFeed}
              />
              {Feedobj.Description}
            </label>
          </div>
          <div className="row mleft0">
            <label className="mleft100 dimgreycolor n fsmall">
              To. {Feedobj.AssignTo}
            </label>
          </div>
          <div className="row mright5" >
            <a className="pull-right mleft10" href="#">
              <small>
                <u>more details...</u>
              </small>
            </a>
          </div>
        </div>
      </div>
    ));

    return <div className="list-group">{ItemList}</div>;
  }
}
export default FeedObjlst;
