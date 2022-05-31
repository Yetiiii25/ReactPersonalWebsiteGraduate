import { Link } from 'react-router-dom'


const MultiCountry = () => {
  return (
    <>
      {/* <!--------------1ST SECTION------------------> */}
      <div className="container">
        <div className="row mb-3 pt-5 align-items-center">
          <div className="col-sm-5">
            <h6>Android Cloud Mobile Application</h6>
            <h1>Multi-Country Paper Bill Scanner For Visually Impaired People</h1>
          </div>
          <div className="col-sm-7">
            <img className="w-100 img-fluid" src="images/portfolio/projects/MultiCountry/Multicountry.png" alt="" />
          </div>
          <div className="row mb-3">
            <div className="col-sm-12 pt-5">
              <p className="lead">"Money Companion" was made because some people may not be able to see anymore but that does
                not
                mean that they will stop achieving their goals and dreams. As a young adult and developer, me and my partner
                Julius Honrales III are concerned in our revolving world and they want visually impaired persons to do
                things what normal people can do. </p>
            </div>
            <div className="col-sm-0"></div>
          </div>
          <div className="row mb-3">
            <div className="col-md-4">
              <div className="h6">
                Capstone Project:
              </div>
              <div className="row small">
                <div className="col-md-12">
                  <p className="text-muted">Xamarin Forms</p>
                </div>
                <p className="text-muted">Azure Cognitive Services</p>
                <p className="text-muted pb-3">Firebase Cloud Storage</p>
              </div>
            </div>
            <div className="col-md-8">
              <div className="h6">
                Project Date:
              </div>
              <div className="row small">
                <div className="col-md-12">
                  <p className="text-muted">February 2021 - January 2022</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!----------------HR---------------------> */}
      <div className="container clearfix pb-5">
        <hr />
      </div>
      {/* <!----------------2ND SECTION---------------------> */}
      <div className="container">
        <div className="row mb-3 pb-5">
          <div className="col-sm-5 pb-4 h3">Objectives</div>
          <div className="col-sm-7 lead">The primary objectives of this research were to create an application called
            multi-Country paper bill recognition system for visually impaired. The system is a mobile application for
            Android that will help Visually Impaired to detect and recognize their paper bill and at the same time it able
            to total the amount and convert the scanned paper bill to digital audio.</div>
        </div>
        <div className="row mb-3 pt-5 pb-4">
          <div className="col-sm-5 pb-3 h3">Struggles Encountered / Solutions</div>
          <div className="col-sm-7">
            <p className="lead">First and foremost is budget, the system we developed supports 3 currencies and it is
              Japan Yen, US Dollars, and Philippines Peso. So we need to have paper bills on hand in every currency. In,
              Japan
              Yen there are 10 000, 5000, 2000, 1000 yen which is 18,000 yen when totaled, and it is around 8500 to 8900
              pesos
              to have each bill. Next is in Us dollars, there are 1, 2, 5, 10, 20, 50, 100 dollars which is 188 dollars when
              totaled, and that is around 9500 to 9900 pesos. Next is the Philippine Peso, there are 20, 50, 100, 200, 500,
              1000 pesos which is 1870 pesos. All in all, we need roughly 20,000 pesos just to have every copy of the paper
              bill on hand. Lastly is the budget for azure which will be paid monthly for 29 dollars which are about 1500
              pesos, azure cognitive services run from Oct 2021 - Jan 2021 which last for 4 months and it cost us 6000
              pesos.
              All in all, we need 26,000 pesos in order to operate the system. </p>
            <p className="lead"> The second problem we encountered was we almost ran out of time, it is because we've done a lot
              of trial and
              error in which programming language, algorithm, and model training we should use.
              at first, we used YoloV5 it is a family of compound-scaled object detection models trained from Git, combined
              with teachable machine online and Android Studio. The problem with this is we can't achieve the accuracy that
              we
              needed with this stack, whatever we do with the model training. We also moved from Yolov5 to Tensorflow,
              Tensorflow is an end-to-end open-source platform for machine learning founded on Git but still, we cant reach
              the accuracy we need. About Android Studio, some of the NuGet needed was not good enough. So we ended up
              moving
              away from Android Studio, and Teachable Machine.</p>
            <p className="lead">From Android Studio and teachable ml, we moved to use Visual Studio Xamarin and Azure Cognitive
              Services "we are
              aware of the azure expenses this time", we still implemented Tensorflow this time, and our application works
              offline. With this, our accuracy went from I say 10 percent to 50 percent. It is still not enough, we are
              talking about the visually impaired that will be using the application. so we ended up crossing out TensorFlow
              and moving from offline to the online application. what we did is we connected our application directly from
              the
              Azure Cloud, where we conducted our model training. I can say that it reached the accuracy the app and the
              user
              needed. Lastly, we added firebase for an additional feature, so that we can have a backup copy of the images
              captured from the user side. which will be helpful for security purposes and we can use that image to add to
              the
              model training.</p>
            <p className="lead"> The application right now stopped operating it is because we end our subscriptions in Azure, we
              included video presentation on how the application work below</p>
          </div>
        </div>
        <div className="row mb-3 pt-5 pb-4">
          <div className="col-sm-5 pb-3 h3">Supported Currencies</div>
          <div className="col-sm-7 lead">Japan Yen, United States Dollars, Philippine Peso</div>
        </div>
        <div className="row mb-3 pt-5 pb-4">
          <div className="col-sm-5 pb-3 h3">My Role / Planning</div>
          <div className="col-sm-7 lead">Full Stack Developer</div>
        </div>
        <div className="row mb-3 pt-5 pb-4">
          <div className="col-sm-5 pb-3 h3">User Flowchart Map</div>
          <div className="col-sm-7 lead"><img className="w-100 img-fluid" src="images/portfolio/projects/MultiCountry/userflowchart.png" alt="" />
          </div>
        </div>
        <div className="row mb-3 pt-5 pb-4">
          <div className="col-sm-5 pb-3 h3">Data Flow Diagram Map</div>
          <div className="col-sm-7 lead"><img className="w-100 img-fluid" src="images/portfolio/projects/MultiCountry/dataflow.png" alt="" /></div>
        </div>
        <div className="row mb-3 pt-5 pb-4">
          <div className="col-sm-5 pb-3 h3">Sample UI</div>
          <div className="col-sm-7"><img className="w-100 img-fluid" src="images/portfolio/projects/MultiCountry/Multicountry.png" alt="" /></div>
        </div>
        <div className="row mb-3 pt-5 pb-4">
          <div className="col-sm-5 pb-3 h3">Tech Stack</div>
          <div className="col-sm-7"><img className="w-100 img-fluid" src="images/portfolio/projects/MultiCountry/techstack.png" alt="" /></div>
        </div>
        <div className="row mb-3 pt-5 pb-4">
          <div className="col-sm-5 pb-3 h3">Video Sample Link <p className="lead pt-2">Tap the image</p>
          </div>
          <div className="col-sm-7">
            <div className="card" style={{ width: '100%' }}>
              <img src="images/portfolio/projects/MultiCountry/videolink.png" className="w-100 img-fluid card-img-top" alt="target" />
              <a href="https://drive.google.com/file/d/1B9nJtNgija1KmFyWMD65QyPjvy4iC5V2/view?usp=sharing" target="_blank"
                className="stretched-link" rel="noreferrer"> </a>
            </div>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-sm-12 pb-4 pt-5 lead">The data that we gathered strongly convince that Money Companion
            successfully
            implemented and recognized that a real-time money scanner system will not only be successful in terms of
            appropriateness,accuracy and efficiency of scanning to the consumer, but also having a dynamically available
            money scanning which will be essential for blind people and partially blind people.</div>
        </div>
        <div className="row mb-3">
          <div className="col-sm-12 text-center">
            <Link className="h5" to='/portfolio' style={{ color: 'var(--text-color)', textDecoration: 'none' }}>
              <i className="bi bi-arrow-left-circle h2"></i> Back to Recent Projects
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default MultiCountry