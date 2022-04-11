export default {
  title: 'Component/Tabs/Inline Tabs',
  parameters: {
    layout: 'fullpage',
  },
};

const Template = () => `

    <style>
      /*Style just for demo*/
      #root {
        padding: 32px !important;
        background-color: #fff;
        height: 100vh;
      }
    </style>

    <div class="sdds-inline-tabs">
      <div class="sdds-inline-tabs-header">

        <div class="sdds-inline-tabs-wrapper">
          <a href="#" class="sdds-inline-tabs--tab">Tab name 1</a>
          <a href="#" class="sdds-inline-tabs--tab sdds-inline-tabs--tab__active">Tab name 2</a>
          <a href="#" class="sdds-inline-tabs--tab sdds-inline-tabs--tab__disabled">Disabled & long tab name 3</a>
          <a href="#" class="sdds-inline-tabs--tab">Tab name 4</a>
        </div>

        <div class="sdds-inline-tabs-header-navigation">
          <a href="#" class="sdds-inline-tabs--forward sdds-inline-tabs--forward__show">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M6.1147 17.3291C5.87062 17.0851 5.87062 16.6893 6.1147 16.4453L12.2948 10.2652C12.4412 10.1187 12.4412 9.8813 12.2948 9.73485L6.1147 3.55476C5.87062 3.31068 5.87062 2.91496 6.1147 2.67088C6.35878 2.4268 6.75451 2.4268 6.99858 2.67088L13.1787 8.85097C13.8133 9.48557 13.8133 10.5145 13.1787 11.1491L6.99858 17.3291C6.75451 17.5732 6.35878 17.5732 6.1147 17.3291Z" fill="#0D0F13"/>
            </svg>
          </a>
          <a href="#" class="sdds-inline-tabs--back">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M13.8853 2.67085C14.1294 2.91493 14.1294 3.31066 13.8853 3.55473L7.70522 9.73482C7.55878 9.88127 7.55878 10.1187 7.70522 10.2652L13.8853 16.4452C14.1294 16.6893 14.1294 17.085 13.8853 17.3291C13.6412 17.5732 13.2455 17.5732 13.0014 17.3291L6.82134 11.149C6.18674 10.5144 6.18674 9.48554 6.82134 8.85094L13.0014 2.67085C13.2455 2.42677 13.6412 2.42677 13.8853 2.67085Z" fill="#0D0F13"/>
            </svg>
          </a>
        </div>

      </div>
      <div class="sdds-inline-tabs-main">
        <div class="sdds-inline-tabs-main--content">
          Content for tab 1<br>
          This tabs has a lot of content so this is the one that decides the height of the container.
          <br><br>
          Here is some more content.
          <br><br>
          And here is a little bit more.
        </div>
        <div class="sdds-inline-tabs-main--content sdds-inline-tabs-main--content__active">
          Content for tab 2<br>
          This is just a little content, but the size of the container is based to the tab with the most content.
          <br><br>
          This is broken until we have some fancy js to fix it.
        </div>
        <div class="sdds-inline-tabs-main--content">
          Content for tab 3<br>
          This tab is disabled, so you should not be able to see this content.
        </div>
        <div class="sdds-inline-tabs-main--content sdds-inline-tabs-main--content">
          Content for tab 4<br>
          here is some content...
        </div>
      </div>
    </div>
    `;

export const Basic = Template.bind({});

Basic.args = {};
