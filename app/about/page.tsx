import Image from "next/image";
import {
  aboutBanner,
  ascentCapital,
  axilor,
  baringPrivate,
  hotel,
  insurance,
  linkedin,
  logistic,
  manufacturing,
  marketplace,
  mayfeild,
  nbfc,
  ourStory,
  purpleArrowBackWard,
  purpleArrowForward,
  teamPic,
  texttile,
  travel,
  twitter,
  whiteVenture,
} from ".";
import Header from "@/components/header/header";
import styles from "./page.module.scss";
import Heading from "@/components/heading/heading";
import Footer from "@/components/footer/footer";
import LottieClientComponent from "@/components/lottie-client/lottie-client";
import LottieDynamicLoadComponent from "@/components/lottie-client/lottie-dynamic-load-client";

// export const metadata = {
//   title: "EnKash | About Page",
//   description:
//     "Enkash is now Asia's 1st and Smartest Spend Management Platform that offer services like Account Payable, Accounts Receivable, Expense Management & many more.",
// };

const About = () => {
  function previousStep() {
    console.log("Previous step");
  }

  function nextStep() {
    console.log("Next step");
  }

  return (
    <>
      <Header />
      <div className={`p-0 about-container`}>
        <div className="enkash-banking-maincontainer">
          <div className="gradiant"></div>
          <div className="enkash-first-conatiner">
            {/* First Row */}
            <div className="main-container">
              <div className="first-container color-white">
                <div className="d-flex enkash-top-box align-items-center mb-12 pb-12 px-md-12 flex-column flex-lg-row ">
                  <div className="col-12 col-lg-5 ml-0 lg:ml-12 mt-10">
                    <Heading
                      title="Empower your Business with EnKash!"
                      size="h2"
                      color="rainy-blue"
                      weight="7"
                    />

                    <div
                      className="enkash-abt-banner-text wow zoomIn"
                      data-wow-delay="500ms"
                      data-mcs-theme="dark"
                    >
                      <p className=" pt-5">
                        Unified Business Payments Platform, Built for You!
                        Amplifying Savings, Propelled by Technology,
                        Transparency, and Mutual Trust
                      </p>
                      <p className="font-w-regular">
                        EnKash is Asia’s 1st and smartest spend management
                        platform, which builds first-of-its-kind solutions for
                        all kinds of businesses and revolutionizes the segment.
                        Our wide range of products and solutions enables
                        businesses to build savings, operational efficiency, and
                        fast-track growth. With a focus on business cash flow
                        management, we intend to help businesses avoid
                        unnecessary spending.
                      </p>
                    </div>
                  </div>
                  <div className="banner-image col-12 col-lg-7">
                    <div
                      className="create-io-img wow zoomIn"
                      data-wow-delay="500ms"
                    >
                      <div className="about-lottie">
                      <LottieDynamicLoadComponent
                        animationName={"AboutBanner"}
                        loop={true}
                      />
                      </div>
                    
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Second Row */}
            <div className="enkash-team-container px-md-24">
              <div className="enkash-abt-title px-md-4 wow fadeInDown">
                <Heading
                  title="We are here to help you unleash endless possibilities and
                      open new business horizons."
                  color="black"
                  weight="7"
                  size="h2"
                />
              </div>
              <div className="row">
                <div className="col-12 col-lg-6 wow zoomIn">
                  <Image
                    alt="icon"
                    className="img-fluid mb-6 mb-md-24"
                    src={ourStory}
                  />
                </div>
                <div
                  className="enkash-abt-banner-text story-container col-lg-6 wow fadeInDown mb-12 px-md-12"
                  data-wow-delay="ms"
                  data-mcs-theme="dark"
                >
                  <div className="enkash-abt-title story-title mt-md-12 mb-6">
                    <h4 className="pl-4">Our Story</h4>
                  </div>
                  <div className="color-midnight-indigo story-description wow fadeInDown">
                    EnKash was incorporated in 2017 and became operational in
                    2018 by three payments professionals, Naveen Bindal, Hemant
                    Vishnoi, and Y.S. Tyagi, with the aim to digitize end-to-end
                    business payments for businesses by providing control,
                    transparency, and visibility, which is currently missing in
                    their processes- irrespective of the size of business or
                    spend management needs.
                  </div>
                </div>
              </div>
            </div>
            {/* Third Row */}

            {/* Fourth Row */}
            <div className="enkash-team-container pt-12 mt-12">
              <div className="enkash-abt-title wow fadeInDown">
                <h4 className="underline-text">Our Team</h4>
              </div>
              <div
                className="enkash-abt-banner-text wow fadeInUp mb-12"
                data-wow-delay="500ms"
                data-mcs-theme="dark"
              >
                <div className="color-midnight-indigo story-description text-center">
                  Presently, we have grown to a team size of ambitious 200+
                  EnKashians, who value integrity and resourcefulness. Our
                  strength lies in our people, and we are proud that EnKashians
                  are a bunch of supercharged, passionate, and highly
                  performance oriented. EnKash is based in India, with offices
                  across Mumbai, Delhi-NCR, Pune, and Bengaluru.
                </div>
              </div>
              <Image
                alt="icon"
                className="img-fluid team-pic mb-24 wow zoomIn"
                height="200"
                src={teamPic}
              />
            </div>

            {/* Fifth Row */}
            <div className={styles.leadership}>
              <div className="enkash-abt-title mb-20">
                <h4 className="underline-text">Our Founders</h4>
              </div>

              <div className="parent-cards mt-24">
                <div
                  className="enkash-card text-center mb-5 -mt-6  wow zoomIn"
                  data-wow-delay="500ms"
                >
                  <div className="user-img" id="hemant-vishnoi"></div>
                  <div className="enkash-card-details">
                    <div className="card-txt">Hemant Vishnoi</div>
                    <div>
                      <a
                        className="me-2"
                        href="https://www.linkedin.com/in/hemantvishnoi/"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        <Image src={linkedin} alt="Hemant Vishnoi Linkedin" />
                      </a>
                      <a
                        className="ml-2"
                        href="https://twitter.com/h_vishnoi"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        <Image src={twitter} alt="Hemant Vishnoi Twitter" />
                      </a>
                    </div>
                  </div>
                </div>

                <div
                  className="enkash-card text-center mb-5 -mt-6 wow zoomIn"
                  data-wow-delay="500ms"
                >
                  <div className="user-img" id="naveen-bindal"></div>
                  <div className="enkash-card-details">
                    <div className="card-txt">Naveen Bindal</div>
                    <div>
                      <a
                        className="me-2"
                        href="https://www.linkedin.com/in/naveenbindal/"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        <Image src={linkedin} alt="Naveen Bindal Linkedin" />
                      </a>
                      <a
                        className="ml-2"
                        href="https://twitter.com/bindal_naveen"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        <Image src={twitter} alt="Naveen Bindal Twitter" />
                      </a>
                    </div>
                  </div>
                </div>

                <div
                  className="enkash-card text-center mb-5 -mt-6 wow zoomIn"
                  data-wow-delay="500ms"
                >
                  <div className="user-img" id="yadvendra-tyagi"></div>
                  <div className="enkash-card-details">
                    <div className="card-txt">Yadvendra Tyagi</div>
                    <div>
                      <a
                        className="me-2"
                        href="https://www.linkedin.com/in/yadvendratyagi/"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        <Image src={linkedin} alt="Yadvendra Tyagi Linkedin" />
                      </a>
                      <a
                        className="ml-2"
                        href="https://twitter.com/ystyagi"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        <Image src={twitter} alt="Yadvendra Tyagi" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="enkash-family-container row-padding-bottom-none">
                <div className="enkash-abt-title">
                  <h4 className="underline-text">Our Leadership</h4>
                </div>

                <div className="grid mb-md-4 mt-md-24">
                  <div
                    className="enkash-card text-center gray-scale mb-5 wow zoomIn"
                    data-wow-delay="500ms"
                  >
                    <div className="user-img" id="himanshu-vyas"></div>
                    <div className="enkash-card-details px-2">
                      <div className="card-txt">Himanshu Vyas</div>
                      <div className="card-designation">
                        Vice President <br />
                        New Business Initiatives
                      </div>
                    </div>
                  </div>

                  <div
                    className="enkash-card text-center gray-scale mb-5 wow zoomIn"
                    data-wow-delay="500ms"
                  >
                    <div className="user-img" id="lalit-arun"></div>
                    <div className="enkash-card-details px-2">
                      <div className="enkash-card-details">
                        <div className="card-txt">Lalit Arun</div>
                        <div className="card-designation">
                          Senior Vice President <br />
                          Banks & Financial Institutions
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="enkash-card text-center gray-scale mb-5 wow zoomIn"
                    data-wow-delay="500ms"
                  >
                    <div className="user-img" id="atishree-jindal"></div>
                    <div className="enkash-card-details px-2">
                      <div className="enkash-card-details">
                        <div className="card-txt">Atishree Jindal</div>
                        <div className="card-designation">Director Product</div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="enkash-card text-center gray-scale mb-5 wow zoomIn"
                    data-wow-delay="500ms"
                  >
                    <div className="user-img" id="vibhor-chugh"></div>
                    <div className="enkash-card-details px-2">
                      <div className="enkash-card-details">
                        <div className="card-txt">Vibhor Chugh</div>
                        <div className="card-designation">
                          Chief Risk Officer
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="enkash-card text-center gray-scale mb-5 wow zoomIn"
                    data-wow-delay="500ms"
                  >
                    <div className="user-img" id="nagesh-shet"></div>
                    <div className="enkash-card-details px-2">
                      <div className="enkash-card-details">
                        <div className="card-txt">Nagesh Shet</div>
                        <div className="card-designation">Head Finance</div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="enkash-card text-center gray-scale mb-5 wow zoomIn"
                    data-wow-delay="500ms"
                  >
                    <div className="user-img" id="amandeep-arora"></div>
                    <div className="enkash-card-details px-2">
                      <div className="enkash-card-details">
                        <div className="card-txt">Amandeep Arora</div>
                        <div className="card-designation">
                          Head Communications & Content
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="enkash-card text-center gray-scale mb-5 wow zoomIn"
                    data-wow-delay="500ms"
                  >
                    <div className="user-img" id="manish-kumawat"></div>
                    <div className="enkash-card-details px-2">
                      <div className="enkash-card-details">
                        <div className="card-txt">Manish Kumawat</div>
                        <div className="card-designation">
                          Technical Architect
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="enkash-card text-center gray-scale mb-5 wow zoomIn"
                    data-wow-delay="500ms"
                  >
                    <div className="user-img" id="anurag-darira"></div>
                    <div className="enkash-card-details  px-2">
                      <div className="enkash-card-details">
                        <div className="card-txt">Anurag Darira</div>
                        <div className="card-designation">
                          Head Human Capital
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="enkash-card text-center gray-scale mb-5 wow zoomIn"
                    data-wow-delay="500ms"
                  >
                    <div className="user-img" id="krishnakumar-sv"></div>
                    <div className="enkash-card-details  px-2">
                      <div className="enkash-card-details">
                        <div className="card-txt">Krishnakumar SV</div>
                        <div className="card-designation">Head Operations</div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="enkash-card text-center gray-scale mb-5 wow zoomIn"
                    data-wow-delay="500ms"
                  >
                    <div className="user-img" id="ankur-gupta"></div>
                    <div className="enkash-card-details px-2">
                      <div className="enkash-card-details">
                        <div className="card-txt">Ankur Gupta</div>
                        <div className="card-designation">
                          Director Engineering
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="enkash-card text-center gray-scale mb-5 wow zoomIn"
                    data-wow-delay="500ms"
                  >
                    <div className="user-img" id="martin-arockiaraj"></div>
                    <div className="enkash-card-details px-2">
                      <div className="enkash-card-details">
                        <div className="card-txt">Martin Arockiaraj</div>
                        <div className="card-designation">
                          Associate Director <br />
                          Product and Technology
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="enkash-card text-center gray-scale mb-5 wow zoomIn"
                    data-wow-delay="500ms"
                  >
                    <div className="user-img" id="vijayanand-srinivasan"></div>
                    <div className="enkash-card-details px-2">
                      <div className="enkash-card-details">
                        <div className="card-txt">Vijayanand Srinivasan</div>
                        <div className="card-designation">Director Product</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="enkash-second-conatiner bg-white">
            <div className="container">
              <div className="enkash-investor">
                <div
                  className="investor-title wow pulse"
                  data-wow-delay="500ms"
                >
                  Investors
                </div>
                <div className="enkash-space"></div>
                <div className="investor-list">
                  <a
                    href="https://ascentcapital.in/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="ml-md-3 wow zoomIn"
                    data-wow-delay="500ms"
                  >
                    <Image src={ascentCapital} alt="Investors Ascent Capital" />
                  </a>

                  <a
                    href="https://www.bpeasia.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="ml-md-3 wow zoomIn"
                    data-wow-delay="500ms"
                  >
                    <Image
                      src={baringPrivate}
                      alt="Investors Baring PVT Equity"
                    />
                  </a>

                  <a
                    href="https://www.mayfield.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="ml-md-3 wow zoomIn"
                    data-wow-delay="500ms"
                  >
                    <Image src={mayfeild} alt="Investors Mayfield" />
                  </a>

                  <a
                    href="http://axilor.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="mr-md-3 wow zoomIn"
                    data-wow-delay="500ms"
                  >
                    <Image src={axilor} alt="Investors Axilor" />
                  </a>

                  <a
                    href="https://www.whiteventurecap.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="ml-md-3 wow zoomIn"
                    data-wow-delay="500ms"
                  >
                    <Image
                      src={whiteVenture}
                      alt="Investors White Venture Capital"
                    />
                  </a>
                </div>
              </div>
              <div
                className="enkash-abt-title pt-10 mb-5 wow fadeInDown"
                data-wow-delay="500ms"
              >
                <h4>Industries We Have Served</h4>
              </div>
              <div className="row text-center  mb-5">
                <div className="col-4 col-lg-3 my-8">
                  <div
                    className="enkash-client-serve wow zoomIn"
                    data-wow-delay="300ms"
                  >
                    <a href="javascript:void(0)">
                      <Image src={logistic} alt="Logistics" />
                      <p>Logistics</p>
                    </a>
                  </div>
                </div>
                <div className="col-4 col-lg-3 my-8">
                  <div
                    className="enkash-client-serve wow zoomIn"
                    data-wow-delay="400ms"
                  >
                    <a href="javascript:void(0)">
                      <Image src={manufacturing} alt="Manufacturing" />
                      <p>Manufacturing</p>
                    </a>
                  </div>
                </div>
                <div className="col-4 col-lg-3 my-8">
                  <div
                    className="enkash-client-serve wow zoomIn"
                    data-wow-delay="500ms"
                  >
                    <a href="javascript:void(0)">
                      <Image src={texttile} alt="Textiles" />
                      <p>Textiles</p>
                    </a>
                  </div>
                </div>
                <div className="col-4 col-lg-3 my-8">
                  <div
                    className="enkash-client-serve wow zoomIn"
                    data-wow-delay="600ms"
                  >
                    <a href="javascript:void(0)">
                      <Image src={insurance} alt="Insurance" />
                      <p>Insurance</p>
                    </a>
                  </div>
                </div>
                <div className="col-4 col-lg-3 my-8">
                  <div
                    className="enkash-client-serve wow zoomIn"
                    data-wow-delay="700ms"
                  >
                    <a href="javascript:void(0)">
                      <Image src={marketplace} alt="Marketplaces" />
                      <p>Marketplaces</p>
                    </a>
                  </div>
                </div>
                <div className="col-4 col-lg-3 my-8">
                  <div
                    className="enkash-client-serve wow zoomIn"
                    data-wow-delay="800ms"
                  >
                    <a href="javascript:void(0)">
                      <Image src={nbfc} alt="NBFCs" />
                      <p>NBFCs</p>
                    </a>
                  </div>
                </div>
                <div className="col-6 col-lg-3 my-8">
                  <div
                    className="enkash-client-serve wow zoomIn"
                    data-wow-delay="900ms"
                  >
                    <a href="javascript:void(0)">
                      <Image src={travel} alt="Travel" />
                      <p>Travel</p>
                    </a>
                  </div>
                </div>
                <div className="col-6 col-lg-3 my-8">
                  <div
                    className="enkash-client-serve wow zoomIn"
                    data-wow-delay="500ms"
                  >
                    <a href="javascript:void(0)">
                      <Image src={hotel} alt="Hotels" />
                      <p>Hotels</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* <div
              className="enkash-abt-title pt-10 wow fadeInDown mb-10"
              data-wow-delay="500ms"
            >
              <h4>
                At EnKash, we have endless opportunities for you.
                <br /> Come join us to be a part of our epic growth story!
              </h4>
            </div>
            <div className="align-center-ele d-flex justify-content-center my-10">
              <a
                className="button-primary mb-8 font-w-semi"
                style={{ padding: "10px 15px" }}
                href="https://home.enkash.com/signup"
              >
                Sign up to Explore The EnKash Platform
              </a>
            </div>

            <div
              className="enkash-abt-title pt-10 wow fadeInDown mb-10"
              data-wow-delay="500ms"
            >
              <h4>With EnKash, Build the Future of Your Business!</h4>
            </div>
            <div className="align-center-ele d-flex justify-content-center my-10">
              <h5>
                The future of your business is in our hands, propelled by
                technology, transparency, and mutual trust.
              </h5>
            </div> */}
          </div>

          {/* 
 
  <script>
const progressBar = document.querySelector('.growth-progress-bar');
const years = document.querySelectorAll('.year-container .name');
const yearContentDivs = document.querySelectorAll('.year-content');

// Initial state: Fill progress bar until 2018
progressBar.style.background = `linear-gradient(to right, #5250D5 13.0%, #E8E8E8 13.0%)`;
yearContentDivs.forEach((div, index) => {
  if (index === 0) {
    div.style.display = 'block';
  } else {
    div.style.display = 'none';
  }
});

function getActiveYearIndex() {
  let activeYearIndex = -1;
  years.forEach((year, index) => {
    if (year.classNameList.contains('active')) {
      activeYearIndex = index;
    }
  });
  return activeYearIndex;
}


function previousStep() {
  const activeYearIndex = getActiveYearIndex();
  if (activeYearIndex > 0) {
    years[activeYearIndex].classNameList.remove('active');
    years[activeYearIndex - 1].classNameList.add('active', );
    const progressPercentage = activeYearIndex * 15
    progressBar.style.width = `${progressPercentage}%`;

    yearContentDivs.forEach((div, index) => {
      if (index === activeYearIndex - 1) {
        div.style.display = 'block';
      } else {
        div.style.display = 'none';
      }
    });

    if (activeYearIndex === 1) {
      progressBar.style.background = `linear-gradient(to right, #5250D5 13%, #E8E8E8 13%)`;
    } else {
      progressBar.style.background = `linear-gradient(to right, #5250D5 ${progressPercentage}%, #E8E8E8 ${progressPercentage}%)`;
    }
  } else {
    // No animation if already at the first index
    return;
  }
}

function resetProgress() {
  progressBar.style.width = '10%';
  progressBar.style.background = `linear-gradient(to right, #5250D5 13.0%, #E8E8E8 13.0%)`;

  years.forEach((year, index) => {
    year.classNameList.remove('active');

    if (index === 0) {
      year.classNameList.add('active');
    }
  });

  yearContentDivs.forEach((div, index) => {
    if (index === 0) {
      div.style.display = 'block';
      div.classNameList.remove('wow', 'fadeInRight');
      div.classNameList.add('wow', 'fadeInLeft', 'animated');
    } else {
      div.style.display = 'none';
    }
  });
}

function nextStep() {
  const activeYearIndex = getActiveYearIndex();
  if (activeYearIndex < years.length - 1) {
    years[activeYearIndex].classNameList.remove('active', 'wow', 'fadeInRight');
    years[activeYearIndex + 1].classNameList.add('active', 'wow', 'fadeInLeft');
    const progressPercentage = (activeYearIndex + 2) * 15;
    console.log(progressPercentage,"Abcd")
    progressBar.style.width = `${progressPercentage}%`;
    progressBar.style.background = `linear-gradient(to right, #5250D5 ${progressPercentage}%, #E8E8E8 ${progressPercentage}%)`;

    yearContentDivs.forEach((div, index) => {
      if (index === activeYearIndex + 1) {
        div.style.display = 'block';
        div.classNameList.remove('wow', 'fadeInRight');
        if (!div.classNameList.contains('wow')) {
          div.classNameList.add('wow', 'fadeInLeft');
        }
        div.classNameList.add('animated');
      } else {
        div.style.display = 'none';
      }
    });

    // Check if it's the last year
    if (activeYearIndex === years.length - 2) {
      progressBar.style.width = '100%';
      progressBar.style.background = '#5250D5';
    }
  }else{
    resetProgress();
  }
}


years.forEach((year, index) => {
  year.addEventListener('click', (event) => {
    event.preventDefault(); 

    const activeYearIndex = getActiveYearIndex();

    if (index === activeYearIndex) {
      return;
    }
    const progressPercentage = (index + 1) * 15;
    progressBar.style.width = `${progressPercentage}%`;
    progressBar.style.background = `linear-gradient(to right, #5250D5 ${progressPercentage}%, #E8E8E8 ${progressPercentage}%)`;
    years[activeYearIndex].classNameList.remove('active', 'wow', 'fadeInLeft', 'fadeInRight');
    years[index].classNameList.add('active', 'wow', 'fadeInLeft');

    yearContentDivs.forEach((div, contentIndex) => {
      if (contentIndex === index) {
        div.style.display = 'block';
        div.classNameList.remove('wow', 'fadeInRight');
        div.classNameList.add('wow', 'fadeInLeft');
        div.classNameList.add('animated');
      } else {
        div.style.display = 'none';
      }
    });

    if (index === years.length - 1) {
      progressBar.style.width = '100%';
      progressBar.style.background = '#5250D5';
    }
  });
});


// Call the previousStep() function initially to apply fadeInLeft animation to the first item
previousStep();



  </script> */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
