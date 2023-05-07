export default function TemplateHome({ page, site }) {
  const { pageHeading } = page || {};

  return (
    <>
      <div className="page-content template-home">
        <div className="left f-j-b">
          <div className="left-content f-j-c">
            <div></div>
            <div className="left-center">
              <h1>Site under construction</h1>
              <p>For any information please go to Instagram & FaceBook</p>
            </div>
            <div className="left-bottom">
              <p>ig</p>
              <p>fb</p>
            </div>
          </div>
        </div>
        <div className="right home-page-image">
        </div>
      </div>

      <style jsx>{`
        .template-home{
          display: flex;
        }
        .left {
          display: flex;
          color : #000000;
          flex: 1;
          width: 50vw;
          height:100vh;
          background: #fff4cc;
          h1{
            font-family: PlayfairDisplay-BlackItalic;
            font-size: 48px;
            line-height: 2.1;
            font-weight: bolder;
          }

          p{
            font-family: Poppins-Regular;
            font-size: 24px;
            color: #999;
            line-height: 1.2;
          }

          .left-content{
            display: flex;
            flex-wrap: wrap;
            flex-direction: column;
            // padding-top :50%;
            margin-left:5vw;
          }

          .left-bottom{
            display: flex;
          }
        }

        .right{
          flex: 1;
          width: 50vw;
          height:100vh;
        }
      `}</style>

    </>
  );
}
