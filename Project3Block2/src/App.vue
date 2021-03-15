<!--*******************************************************************************************************************************************************
                                MODIFICATION LOG
#Original Author: Emma L. Wood
#Date Created: 3-9-2021
#Last Modified by: Emma L. Wood
#Date Last Modified: 3-9-2021

#Modification Log:
    - 3-9-2021: Created project, got confused, played around to try and figure things out. Got sick and couldn't continue project.
    - 3-10-2021: Still sicka all day, couldn't get out of bed (OOC).
    - 3-11-2021: Seeked tutor help, spent all day trying to fix issues.
    - 3-12-2021: Finally managed to set up files so website would work (aka starting website finally).
    - 3-13-2021: Set up "HTML/CSS/VUE/", etc. | Ran into bug with favicon not letting me change it (couldn't fix it). |
                 Fleshed out entire website and finished project.
                
*******************************************************************************************************************************************************-->

<template>
  <div>
    <b-jumbotron
      header="Farris Flowers"
      lead="Your closest and friendliest flower shop!"
      id="home"
    >
      <p>
        We have all flowers you can think of, and if we don't have it in our
        store we can order them for you!
      </p>
      <b-button variant="primary" href="#">More Info</b-button>
    </b-jumbotron>

    <!-- BEGIN NAV -->
    <b-navbar id="navbar" toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#home">Home</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#about">About Us</b-nav-item>
          <b-nav-item href="#availableStock">Available Stock</b-nav-item>
          <b-nav-item href="#faq">FAQ</b-nav-item>
          <b-nav-item href="#contact">Contact Form</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input
              size="sm"
              class="mr-sm-2"
              placeholder="Search"
            ></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit"
              >Search</b-button
            >
          </b-nav-form>

          <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <em>User</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <!-- END NAV -->

    <!-- BEGIN INFO UNDER NAV SECTION -->
    <b-row class="bv-example-row">
      <b-col>
        <h3><u>Flowers</u></h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit... Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris... Lorem ipsum
          dolor sit amet, consectetur adipisicing elit... Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris...
        </p>
      </b-col>
      <b-col>
        <h3><u>Bouquets</u></h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit... Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris... Lorem ipsum
          dolor sit amet, consectetur adipisicing elit... Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris...
        </p>
      </b-col>
      <b-col>
        <h3><u>Special Offers</u></h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit... Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris... Lorem ipsum
          dolor sit amet, consectetur adipisicing elit... Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris...
        </p>
      </b-col>
    </b-row>
    <!-- END INFO UNDER NAV SECTION -->

    <!-- BEGIN ABOUT US SECTION -->
    <section class="textCenter" id="about">
      <h1 class="aboutTitle"><u>About Us</u></h1>

      <b-card
        title="Owner"
        img-src="https://d39l2hkdp2esp1.cloudfront.net/img/photo/139299/139299_00_2x.jpg"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem"
        class="mb-2"
        id="card1"
      >
        <b-card-text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit... Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris.
        </b-card-text>

        <b-button href="#" variant="primary">Go somewhere</b-button>
      </b-card>

      <b-card
        title="Co-Owner"
        img-src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNJujchTEAYrM71_4jyXlrcmAIwsQIvTXHjA&usqp=CAU"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem"
        class="mb-2"
      >
        <b-card-text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit... Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris.
        </b-card-text>

        <b-button href="#" variant="primary">Go somewhere</b-button>
      </b-card>
    </section>

    <section class="boxes1">
      <p class="textCenter">
        Locally owned and operated. We are convieniently located on the
        southwest corner of Eagle Road and Hightop Road. As a full service
        floral boutique, we love our day to day designs along with creating
        cohesive custom designs for any special event. Plants, gifts, gift
        baskets are one of our many specialties. Knowing that sometimes special
        days get misplaced in our memories :), we are here to help with last
        minute gift ideas. Our inventory is always rotating, so just give us a
        call with selection questions.
      </p>

      <label for="rating-disabled"></label>
      <b-form-rating id="rating-disabled" value="4.5" disabled></b-form-rating>
    </section>
    <p id="fontSizing" class="textCenter">
      <b>Monday - Friday: 8:30 am to 5:30 pm Saturday: 9:00 am to 3:00 pm</b>
    </p>
    <br />
    <p class="textCenter" id="boxes2">
      APPOINTMENTS AFTER HOURS AVAILABLE UPON REQUEST. WE ARE CLOSED ON SUNDAYS.
      TO HELP ASSURE ON-TIME DELIVERY DURING THE BUSY HOLIDAY SEASON, PLACE YOUR
      ORDER AT LEAST 1 DAY PRIOR TO THE FOLLOWING MAJOR HOLIDAYS: THANKSGIVING
      DAY, CHRISTMAS DAY, NEW YEAR'S DAY, VALENTINE'S DAY, EASTER,
      ADMINISTRATIVE PROFESSIONALS WEEK, MOTHER'S DAY, MEMORIAL DAY, FATHER'S
      DAY, INDEPENDENCE DAY AND LABOR DAY. OUR SHOP WILL ALWAYS BE CLOSED ON THE
      FOLLOWING HOLIDAYS: THANKSGIVING DAY, CHRISTMAS EVE, CHRISTMAS DAY, NEW
      YEAR'S DAY, EASTER, MEMORIAL DAY, INDEPENDENCE DAY AND LABOR DAY.<br />
      <b><u>- No online purchases -</u></b>
    </p>
    <!-- END ABOUT US SECTION -->

    <!-- BEGIN CAROUSEL SECTION -->
    <section class="backGray" id="textCenter">
      <h1 class="aboutTitle" id="availableStock">
        <u>Flowers Currently Available This Season</u>
      </h1>

      <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="4000"
        controls
        indicators
        background="#ababab"
        img-width="1024"
        img-height="480"
        style="text-shadow: 1px 1px 2px #333"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <!-- Text slides with image -->
        <b-carousel-slide
          img-src="https://picsum.photos/1024/480/?image=52"
        ></b-carousel-slide>

        <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
        </b-carousel-slide>

        <!-- Slides with image only -->
        <b-carousel-slide
          img-src="https://picsum.photos/1024/480/?image=58"
        ></b-carousel-slide>

        <!-- Slides with img slot -->
        <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
        <b-carousel-slide>
          <template #img>
            <img
              class="d-block img-fluid w-100"
              width="1024"
              height="480"
              src="https://picsum.photos/1024/480/?image=55"
              alt="image slot"
            />
          </template>
        </b-carousel-slide>
      </b-carousel>
      <br /><br />
    </section>
    <!-- END CAROUSEL SECTION -->

    <!-- BEGIN FAQ SECTION -->
    <section class="textCenter">
      <h1 class="aboutTitle" id="faq"><u>Facts And Questions</u></h1>
      <section class="colorChange">
        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button
              class="colorPink"
              block
              v-b-toggle.accordion-1
              variant="info"
              >How often do you recieve new stock?</b-button
            >
          </b-card-header>
          <b-collapse id="accordion-1" accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <b-card-text>{{ text }}</b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>

        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button
              class="colorPink"
              block
              v-b-toggle.accordion-2
              variant="info"
              >What is your selection of flowers each season?</b-button
            >
          </b-card-header>
          <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <b-card-text>{{ text }}</b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>

        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button
              class="colorPink"
              block
              v-b-toggle.accordion-3
              variant="info"
              >Is there a limit to how many flowers I can purchase?</b-button
            >
          </b-card-header>
          <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <b-card-text>{{ text }}</b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>

        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button
              class="colorPink"
              block
              v-b-toggle.accordion-4
              variant="info"
              >Can I track my shipped order to your shop?</b-button
            >
          </b-card-header>
          <b-collapse id="accordion-4" accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <b-card-text>{{ text }}</b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>

        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button
              class="colorPink"
              block
              v-b-toggle.accordion-5
              variant="info"
              >Tips on basic flower care?</b-button
            >
          </b-card-header>
          <b-collapse id="accordion-5" accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <b-card-text>{{ text }}</b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>

        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button
              class="colorPink"
              block
              v-b-toggle.accordion-6
              variant="info"
              >How can I refer friends and family?</b-button
            >
          </b-card-header>
          <b-collapse id="accordion-6" accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <b-card-text>{{ text }}</b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>

        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button
              class="colorPink"
              block
              v-b-toggle.accordion-7
              variant="info"
              >Is there online ordering?</b-button
            >
          </b-card-header>
          <b-collapse id="accordion-7" accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <b-card-text>{{ text }}</b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>
      </section>
    </section>
    <!-- END FAQ SECTION -->

    <!-- BEGIN CONTACT FORM -->
    <section class="textCenter">
      <section class="backGray">
        <h1 class="aboutTitle" id="contact"><u>Contact Us!</u></h1>

        <section class="textCenter">
          <label for="b-form-input"
            ><b><u>First Name:</u></b></label
          >
          <b-form-input
            v-model="text"
            class="formCenter"
            placeholder="Your Name.."
          ></b-form-input>
          <br />

          <label for="b-form-input"
            ><b><u>Last Name:</u></b></label
          >
          <b-form-input
            v-model="text"
            class="formCenter"
            placeholder="Your last name.."
          ></b-form-input>
        </section>
        <br /><br />

        <label for="b-form-select"
          ><b><u>Reason For Contact:</u>&nbsp;&nbsp;</b></label
        >
        <b-form-select
          id="b-form-select"
          v-model="selected"
          :options="options"
        ></b-form-select>
        <div class="mt-3">
          <strong>{{ selected }}</strong>
        </div>
        <br /><br />

        <b-container fluid>
          <b-row>
            <b-col sm="2">
              <label for="textarea-auto-height"
                ><b><u>Message:</u></b></label
              >
            </b-col>
            <b-col sm="10">
              <b-form-textarea
                id="textarea-auto-height"
                placeholder="Your message here.."
                rows="3"
                max-rows="8"
              ></b-form-textarea>
            </b-col>
          </b-row>
        </b-container>
      </section>
    </section>
    <!-- END CONTACT FORM -->
    <br /><br /><br /><br />

    <!-- BEGIN FOOTER -->
    <section class="footer">
      <p>
        &#169; 2021 Farris Flowers<br />
        Email:
        <a href="mailto:FarrisFlowers@gmail.com">FarrisFlowers@gmail.com</a
        ><br />
        Phone: <a href="tel:+12088545633">(208)-854-5633</a><br />
        2275 Hightop Rd, Meridian, Idaho 83642
      </p>
    </section>
    <!-- END FOOTER -->
  </div>
</template>






<!-- CAROUSEL SCRIPT -->
<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null,
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    },
  },
};
</script>

<!-- ACCORDION SCRIPT -->
<script>
export default {
  data() {
    return {
      text: `
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
          richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
          brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
          tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
          assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
          wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher
          vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic
          synth nesciunt you probably haven't heard of them accusamus labore VHS.
        `,
    };
  },
};
</script>

<script>
export default {
  data() {
    return {
      selected: null,
      options: [
        { value: null, text: "Please select an option" },
        { value: "a", text: "Availability Question(s)" },
        { value: "b", text: "Flower Care Question(s)" },
        { value: "c", text: "Shop Question(s)" },
        { value: "d", text: "Other" },
      ],
    };
  },
};
</script>

<script>
export default {
  data() {
    return {
      text: "",
    };
  },
};
</script>



<!--------------------------------------------------------------------------------
                                        STYLES                     
---------------------------------------------------------------------------------->
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<style>
.bv-example-row {
  background-color: rgb(216, 216, 216);
  padding: 20px;
}
nav.bg-info {
  background-color: palevioletred !important;
}
div.jumbotron {
  text-align: center;
  margin-bottom: 0;

  background-image: url("./assets/flowers.png") !important;
  background-size: cover;
  background-repeat: no-repeat;
}
a.btn.btn-primary {
  background-color: palevioletred !important;
  border-color: palevioletred !important;
}
.textCenter {
  text-align: center;
}
#textCenter {
  text-align: center;
}

/******************************
            BOXES
*******************************/
.boxes1 {
  margin: 10px;
  padding: 10px;
  border-color: pink;
  border-style: solid;
}
#boxes2 {
  margin: 10px;
  padding: 10px;
}
.backGray {
  background-color: rgb(216, 216, 216);
  margin-top: 30px;
}

/******************************
          ABOUT US
*******************************/
.aboutTitle {
  margin-top: 40px;
  padding-top: 15px;
  padding-bottom: 15px;
}
.mb-2 {
  display: inline-block;
}
#card1 {
  margin-right: 20px;
}
#fontSizing {
  font-size: x-large;
}
.row {
  margin-right: 0;
}

/******************************
          CAROUSEL
*******************************/
#carousel-1 {
  margin: 50px 60px 0 60px;
}

/******************************
              FAQ
*******************************/
.colorPink {
  background-color: rgb(247, 162, 177);
  border-color: rgb(247, 162, 177);
  color: black;
}

/******************************
         CONTACT FORM
*******************************/
#b-form-select {
  width: 87%;
}
#textarea-auto-height {
  margin-bottom: 60px;
}
.formCenter {
  margin: 5px 10px 5px 10px;
  width: 97%;
}

/******************************
            FOOTER
*******************************/
.footer {
  padding-top: 5px;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: palevioletred;
  color: black;
  text-align: center;
}
.footer > p > a:link,
a:active {
  color: black;
}
</style>